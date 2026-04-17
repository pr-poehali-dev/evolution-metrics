import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей Морозов",
    role: "Обычный прохожий, Москва",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Мой коллега потерял сознание прямо в офисе. Я открыл приложение — и оно буквально вело меня за руку. Скорая сказала, что я всё сделал правильно.",
  },
  {
    name: "Мария Соколова",
    role: "Учитель, Санкт-Петербург",
    avatar: "/professional-woman-scientist.png",
    content:
      "Прошла обучающий режим за вечер. Теперь уверена, что смогу помочь, если что-то случится с учеником или коллегой. Это должно быть в каждом телефоне.",
  },
  {
    name: "Дина Ли",
    role: "Студентка медицинского вуза",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Рекомендую всем знакомым без медицинского образования. Интерфейс понятный, инструкции точные. В критической ситуации это реально работает.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Реальные истории</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Люди без медицинского образования, которые смогли помочь в критический момент
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
