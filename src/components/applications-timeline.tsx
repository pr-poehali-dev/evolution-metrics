import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Оцените обстановку",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Убедитесь в безопасности места. Проверьте сознание пострадавшего — потрясите за плечи и громко спросите:
            «Вы меня слышите?». Приложение поможет не пропустить ни одного шага.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Проверьте безопасность места
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Определите реакцию пострадавшего
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Попросите окружающих вызвать 112
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Вызовите помощь",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Нажмите кнопку «Вызвать 112» в приложении — оно автоматически передаст ваши координаты. Пока едет скорая,
            начинайте СЛР: каждая минута увеличивает шансы выжить.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Автопередача геолокации диспетчеру
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Голосовой инструктаж от приложения
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Таймер ожидания скорой на экране
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Начните СЛР",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Приложение включает метроном на 100 ударов в минуту и показывает правильное положение рук. 30 компрессий,
            2 вдоха — ритм, который спасает жизни. Продолжайте до прибытия медиков.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Метроном 100–120 уд/мин по стандарту ВОЗ
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Визуальная схема положения рук
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Счётчик циклов и напоминания о вдохах
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Три шага, которые спасают жизнь</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Приложение ведёт вас через каждый этап СЛР — чётко, спокойно и без лишних слов,
            чтобы вы могли сосредоточиться на главном.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
