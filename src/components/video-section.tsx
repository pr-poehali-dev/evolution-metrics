export function VideoSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Как правильно проводить СЛР</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Посмотрите короткое видео — и вы будете знать, что делать в критический момент
          </p>
        </div>

        <div className="relative w-full rounded-sm overflow-hidden border border-red-500/20 shadow-[0_0_40px_rgba(220,38,38,0.15)]">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/NlMGpbDGCNk?rel=0&modestbranding=1"
              title="Как правильно проводить СЛР"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-4">
          Видео: Российский Красный Крест — техника сердечно-лёгочной реанимации
        </p>
      </div>
    </section>
  )
}
