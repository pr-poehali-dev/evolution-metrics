import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Нужно ли медицинское образование, чтобы пользоваться приложением?",
      answer:
        "Нет. Приложение разработано специально для людей без медподготовки. Пошаговые инструкции и голосовой ассистент проведут вас через весь процесс — понятно и без лишних терминов.",
    },
    {
      question: "Что делать, если я боюсь навредить?",
      answer:
        "Если человек без сознания и не дышит — действовать необходимо. Грамотная СЛР многократно повышает шансы выжить. Приложение показывает правильную технику, чтобы минимизировать риски.",
    },
    {
      question: "Работает ли приложение без интернета?",
      answer:
        "Да. Все инструкции, метроном и схемы загружены на устройство. Интернет нужен только для вызова 112 через приложение — но это можно сделать и вручную.",
    },
    {
      question: "Как быстро можно научиться?",
      answer:
        "Базовый обучающий режим занимает около 15 минут. После него вы уже будете знать ключевые шаги. Рекомендуем повторять тренировку раз в полгода.",
    },
    {
      question: "Подходит ли приложение для помощи детям?",
      answer:
        "Да, в приложении есть отдельные инструкции для взрослых и детей — техника СЛР немного отличается. Нужный режим выбирается в начале сессии.",
    },
    {
      question: "Можно ли использовать приложение, если рядом есть дефибриллятор?",
      answer:
        "Обязательно. Приложение включает инструкции по использованию АВД (автоматического внешнего дефибриллятора) — они есть во многих общественных местах.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на то, что волнует людей перед первым использованием приложения
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
