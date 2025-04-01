export function Plans() {
  return (
    <div className='container mx-auto px-6 text-center'>
      <h2 className='text-3xl text-white font-bold mb-8'>Planos</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <h3 className='text-xl font-bold mb-2 text-zinc-900'>3 meses</h3>
          <p className='text-lg text-zinc-700 mb-4'>R$ 39,90</p>
          <p className='text-zinc-600 mb-4'>Pra começar</p>
          <a
            href='https://checkout-mp.vorticehub.com.br/mp3990.php'
            target='_blank'
            className='bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-lime-500 transition duration-300'
          >
            Assine agora
          </a>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <h3 className='text-xl font-bold mb-2 text-zinc-900'>6 meses</h3>
          <p className='text-lg text-zinc-700 mb-4'>R$ 59,90</p>
          <p className='text-zinc-600 mb-4'>O mais vendido</p>
          <a
            href='https://checkout-mp.vorticehub.com.br/mp5990.php'
            target='_blank'
            className='bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-lime-500 transition duration-300'
          >
            Assine agora
          </a>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <h3 className='text-xl font-bold mb-2 text-zinc-900'>1 ano</h3>
          <p className='text-lg text-zinc-700 mb-4'>R$ 79,90</p>
          <p className='text-zinc-600 mb-4'>O mais econômico</p>
          <a
            href='https://checkout-mp.vorticehub.com.br/mp7990.php'
            target='_blank'
            className='bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-lime-500 transition duration-300'
          >
            Assine agora
          </a>
        </div>
      </div>
    </div>
  )
}
