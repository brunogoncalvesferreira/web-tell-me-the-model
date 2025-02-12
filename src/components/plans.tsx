const plans = [
  {
    id: 1,
    name: 'Plano 1',
    description: 'Descrição do Plano 1',
    price: 9.99,
  },
  {
    id: 2,
    name: 'Plano 2',
    description: 'Descrição do Plano 2',
    price: 19.99,
  },
  {
    id: 3,
    name: 'Plano 3',
    description: 'Descrição do Plano 3',
    price: 29.99,
  },
]

export function Plans() {
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
      {plans.map((plan) => (
        <div
          key={plan.id}
          className='bg-black p-4 rounded shadow-lg shadow-lime-400'
        >
          <h3 className='text-2xl font-semibold'>{plan.name}</h3>
          <p className='text-sm text-zinc-400'>{plan.description}</p>
          <p className='text-lg font-semibold'>${plan.price}</p>
        </div>
      ))}
    </div>
  )
}
