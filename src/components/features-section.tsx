import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Пошаговые инструкции",
    description: "Чёткий алгоритм действий с визуальными подсказками — от оценки состояния пострадавшего до прибытия скорой.",
    icon: "list",
    badge: "Понятно",
  },
  {
    title: "Голосовое управление",
    description: "Руки заняты — голосовой ассистент ведёт вас через каждый шаг СЛР, не отвлекая от пострадавшего.",
    icon: "mic",
    badge: "Свободные руки",
  },
  {
    title: "Ритм компрессий",
    description: "Встроенный метроном задаёт правильный темп — 100–120 нажатий в минуту, как рекомендует ВОЗ.",
    icon: "heart",
    badge: "Точно",
  },
  {
    title: "Вызов экстренных служб",
    description: "Одна кнопка — и 112 уже в курсе. Приложение автоматически передаёт ваше местоположение.",
    icon: "phone",
    badge: "112",
  },
  {
    title: "Обучающий режим",
    description: "Отработайте навыки заранее с интерактивными симуляциями — чтобы в реальной ситуации действовать уверенно.",
    icon: "book",
    badge: "Тренировка",
  },
  {
    title: "Работает офлайн",
    description: "Нет интернета? Не страшно. Всё необходимое загружено на устройство и доступно в любой момент.",
    icon: "wifi",
    badge: "Всегда готов",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Всё необходимое в критический момент</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Приложение, которое превращает любого человека в первого помощника — без медицинского образования
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "list" && "📋"}
                    {feature.icon === "mic" && "🎙️"}
                    {feature.icon === "heart" && "❤️"}
                    {feature.icon === "phone" && "📞"}
                    {feature.icon === "book" && "📖"}
                    {feature.icon === "wifi" && "📡"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
