import person from '../../assets/images/person.png'

export function Depoiments() {
  return (
    <div className='container mx-auto px-6 text-center'>
      <h2 className='text-3xl font-bold mb-8'>Depoimentos</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <img
            src={person}
            alt='João'
            className='w-20 h-20 mx-auto rounded-full mb-4'
          />
          <p className='text-zinc-700 mb-4'>
            "O TM3D revolucionou a forma como encontramos películas para nossos
            clientes!"
          </p>
          <p className='font-semibold'>João, Loja TechMobile</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <img
            src={person}
            alt='Ana'
            className='w-20 h-20 mx-auto rounded-full mb-4'
          />
          <p className='text-zinc-700 mb-4'>
            "Simples, rápido e eficiente. Recomendo para qualquer assistência
            técnica!"
          </p>
          <p className='font-semibold'>Ana, Assistência Celular Express</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <img
            src={person}
            alt='Carlos'
            className='w-20 h-20 mx-auto rounded-full mb-4'
          />
          <p className='text-zinc-700 mb-4'>
            "Ótima ferramenta para quem quer agilizar o atendimento!"
          </p>
          <p className='font-semibold'>Carlos, Celulares Rápidos</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <img
            src={person}
            alt='Mariana'
            className='w-20 h-20 mx-auto rounded-full mb-4'
          />
          <p className='text-zinc-700 mb-4'>
            "Facilitou muito a gestão do nosso estoque!"
          </p>
          <p className='font-semibold'>Mariana, Tech Acessórios</p>
        </div>
      </div>
    </div>
  )
}
