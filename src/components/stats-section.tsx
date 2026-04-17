const stats = [
  {
    value: "7 000+",
    label: "остановок сердца в сутки",
    sub: "происходит в России вне больниц",
  },
  {
    value: "8%",
    label: "выживаемость без СЛР",
    sub: "если никто не помог до скорой",
  },
  {
    value: "до 3×",
    label: "выше шансы выжить",
    sub: "если СЛР начата в первые минуты",
  },
  {
    value: "4 мин",
    label: "до необратимых изменений",
    sub: "мозг начинает гибнуть без кислорода",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-black border-y border-red-500/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-orbitron mb-4">
            Цифры, которые нельзя игнорировать
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Большинство людей умирают не потому, что помочь было невозможно — а потому что рядом никто не знал, что делать
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="border border-red-500/20 bg-red-500/5 rounded-sm p-8 text-center hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
            >
              <div className="text-5xl font-extrabold text-red-500 font-orbitron mb-2">{stat.value}</div>
              <div className="text-white font-semibold text-lg mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm leading-relaxed">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
