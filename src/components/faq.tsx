import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const topics = [
  {
    id: 1,
    title: 'Como funciona a degustação?',
    description: 'Você pode pesquisar até 10 modelos por marca gratuitamente.',
  },
  {
    id: 2,
    title: 'Quais formas de pagamento são aceitas?',
    description: 'Aceitamos Pix, boleto e cartão de crédito.',
  },
  {
    id: 3,
    title: 'Posso compartilhar meu acesso com outros vendedores da minha loja?',
    description: 'Sim, cada assinatura aceita até 3 conexões simultâneas.',
  },
]

export function Faq() {
  return (
    <div className='py-20 max-w-7xl mx-auto px-4 flex flex-col md:gap-20 gap-5 '>
      <h2 className='text-center md:text-4xl text-2xl font-bold'>
        Perguntas frequentes
      </h2>

      <div className='mt-10 w-full'>
        {topics.map((topic) => (
          <Accordion key={topic.id} type='single' collapsible>
            <AccordionItem value='item-1' className='border-zinc-700/30'>
              <AccordionTrigger className='text-zinc-100 md:text-2xl text-sm px-3 py-4 flex items-start gap-3'>
                <span className='text-zinc-400'>0{topic.id}.</span>{' '}
                <span className='text-zinc-100 mr-auto'>{topic.title}</span>
              </AccordionTrigger>
              <AccordionContent className='text-zinc-400 text-base px-3'>
                {topic.description}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  )
}
