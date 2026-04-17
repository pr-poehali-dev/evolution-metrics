import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"

const BPM = 110
const INTERVAL_MS = (60 / BPM) * 1000

export function CprTimer() {
  const [running, setRunning] = useState(false)
  const [count, setCount] = useState(0)
  const [cycle, setCycle] = useState<"compress" | "breathe">("compress")
  const [breatheCountdown, setBreatheCountdown] = useState(0)
  const [beat, setBeat] = useState(false)

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const compressCountRef = useRef(0)

  const getAudioCtx = useCallback(() => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
    }
    return audioCtxRef.current
  }, [])

  const playClick = useCallback((type: "compress" | "breathe") => {
    const ctx = getAudioCtx()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)

    if (type === "compress") {
      osc.frequency.setValueAtTime(220, ctx.currentTime)
      gain.gain.setValueAtTime(0.3, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08)
      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + 0.08)
    } else {
      osc.frequency.setValueAtTime(660, ctx.currentTime)
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.15)
      gain.gain.setValueAtTime(0.5, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4)
      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + 0.4)
    }
  }, [getAudioCtx])

  const start = useCallback(() => {
    getAudioCtx()
    compressCountRef.current = 0
    setCount(0)
    setCycle("compress")
    setBreatheCountdown(0)
    setRunning(true)
  }, [getAudioCtx])

  const stop = useCallback(() => {
    setRunning(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
    compressCountRef.current = 0
    setCount(0)
    setCycle("compress")
    setBreatheCountdown(0)
  }, [])

  useEffect(() => {
    if (!running) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }

    intervalRef.current = setInterval(() => {
      compressCountRef.current += 1
      const n = compressCountRef.current

      setBeat(true)
      setTimeout(() => setBeat(false), 100)

      if (n % 30 === 0) {
        playClick("breathe")
        setCycle("breathe")
        setBreatheCountdown(2)
        const t1 = setTimeout(() => {
          setBreatheCountdown(1)
          playClick("breathe")
        }, 1500)
        const t2 = setTimeout(() => {
          setBreatheCountdown(0)
          setCycle("compress")
        }, 3000)
        setCount(n)
        return () => { clearTimeout(t1); clearTimeout(t2) }
      } else {
        playClick("compress")
        setCycle("compress")
      }

      setCount(n)
    }, INTERVAL_MS)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [running, playClick])

  const currentCompress = count % 30 === 0 && count > 0 ? 30 : count % 30

  return (
    <section id="timer" className="py-24 bg-black">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-orbitron mb-4">
          Тренажёр ритма СЛР
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          Нажмите «Старт» — приложение задаёт правильный ритм 110 уд/мин.<br />
          Каждые 30 компрессий — звуковой сигнал для двух вдохов.
        </p>

        <div className="relative flex items-center justify-center mb-10">
          <div
            className={`w-56 h-56 rounded-full border-4 flex flex-col items-center justify-center transition-all duration-100 ${
              cycle === "breathe"
                ? "border-blue-400 bg-blue-500/10 shadow-[0_0_40px_rgba(96,165,250,0.4)]"
                : beat && running
                ? "border-red-400 bg-red-500/20 scale-105 shadow-[0_0_40px_rgba(220,38,38,0.5)]"
                : "border-red-500/40 bg-red-500/5"
            }`}
          >
            {!running ? (
              <span className="text-gray-500 font-orbitron text-lg">готов</span>
            ) : cycle === "breathe" ? (
              <>
                <span className="text-blue-400 font-orbitron text-5xl font-bold">{breatheCountdown}</span>
                <span className="text-blue-300 text-sm mt-1 uppercase tracking-widest">вдох</span>
              </>
            ) : (
              <>
                <span className="text-white font-orbitron text-6xl font-bold">{currentCompress}</span>
                <span className="text-red-400 text-sm mt-1 uppercase tracking-widest">/ 30</span>
              </>
            )}
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          {!running ? (
            <Button
              onClick={start}
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white font-bold text-lg px-12 py-5 pulse-button font-orbitron"
            >
              Старт
            </Button>
          ) : (
            <Button
              onClick={stop}
              size="lg"
              variant="outline"
              className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-bold text-lg px-12 py-5 font-orbitron bg-transparent"
            >
              Стоп
            </Button>
          )}
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          <div className="border border-white/10 rounded-sm p-4">
            <div className="text-2xl font-bold text-white font-orbitron">{count}</div>
            <div className="text-gray-500 text-sm mt-1">компрессий</div>
          </div>
          <div className="border border-white/10 rounded-sm p-4">
            <div className="text-2xl font-bold text-white font-orbitron">{Math.floor(count / 30)}</div>
            <div className="text-gray-500 text-sm mt-1">циклов</div>
          </div>
          <div className="border border-white/10 rounded-sm p-4">
            <div className="text-2xl font-bold text-white font-orbitron">{BPM}</div>
            <div className="text-gray-500 text-sm mt-1">уд/мин</div>
          </div>
        </div>
      </div>
    </section>
  )
}
