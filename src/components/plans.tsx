import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'

export const plans = [
  {
    id: 1,
    name: 'Pra começar',
    description: '3 Meses',
    price: 1.49,
  },
  {
    id: 2,
    name: 'O mais vendido',
    description: '6 Meses',
    price: 59.9,
  },
  {
    id: 3,
    name: 'O mais econômico',
    description: '1 ano',
    price: 79.9,
  },
]

export function Plans() {
  const navigate = useNavigate()

  function handleNavigatePayment(id: number) {
    navigate(`/process_payment/${id}`)
  }

  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
      {plans.map((plan) => (
        <div
          key={plan.id}
          className='bg-black p-4 rounded shadow-lg shadow-lime-400'
        >
          <h3 className='text-2xl font-semibold'>{plan.name}</h3>
          <p className='text-sm text-zinc-400'>{plan.description}</p>
          <p className='text-lg font-semibold'>
            R$ {plan.price.toFixed(2).replace('.', ',')}
          </p>

          <Button
            onClick={() => handleNavigatePayment(plan.id)}
            className='mt-4 inline-block bg-lime-500 text-zinc-900 px-4 py-2 rounded-lg font-semibold hover:bg-lime-600 transition'
          >
            Assine agora
          </Button>
        </div>
      ))}
    </div>
  )
}
