import samsung from '/samsung.svg'
import apple from '/apple.svg'
import xiaomi from '/xiaomi.svg'
import motorola from '/motorola.png'
import { Link } from 'react-router-dom'
import { Plans } from '../components/plans'
import { Faq } from '@/components/faq'

const model = [
  {
    id: 1,
    name: 'Samsung',
    image: samsung,
  },
  {
    id: 2,
    name: 'Apple',
    image: apple,
  },
  {
    id: 3,
    name: 'Xiaomi',
    image: xiaomi,
  },
  {
    id: 4,
    name: 'Motorola',
    image: motorola,
  },
]

export function Home() {
  return (
    <div className='pb-40'>
      <div className='max-w-7xl w-full mx-auto px-5'>
        {/* <Navigation /> */}
        <Link to='/'>
          <img
            className='size-10'
            src='/logo.svg'
            alt='Logo da aplicação Tell Me The Model'
          />
        </Link>

        <div className='flex flex-col gap-8 md:mt-28 mt-16'>
          <h1 className='text-center md:text-6xl text-3xl font-bold max-w-4xl mx-auto'>
            Encontre a película certa para qualquer modelo de celular
          </h1>
          <p className='text-center md:text-2xl text-zinc-300 max-w-2xl mx-auto'>
            Facilitamos a busca por películas de proteção 3D, oferecendo
            compatibilidades exatas.
          </p>
        </div>

        <div className='mt-20 shadow-2xl shadow-lime-400 max-w-7xl mx-auto md:h-[600px] h-[400px]'>
          <img
            className='w-full border-2 border-lime-400 rounded-lg h-full md:object-top object-left object-cover'
            src='/image.png'
            alt='Imagem do sistema Tell Me The Model'
          />
        </div>

        <div className='flex items-center justify-center mt-32'>
          <Link
            to='/contact'
            className='text-zinc-100 text-lg font-bold border w-fit p-4  flex justify-center items-center rounded hover:bg-lime-400 hover:text-black'
          >
            Fale conosco no WhatsApp
          </Link>
        </div>

        <div className='flex md:flex-row flex-col items-center justify-center gap-10 mt-32'>
          {model.map((item) => (
            <img
              key={item.id}
              className='w-16 hover:scale-110 transition-all duration-300 cursor-pointer'
              src={item.image}
              alt={item.name}
            />
          ))}
        </div>

        <div className='mt-32 bg-black h-fit px-6 py-20 space-y-5 border border-lime-400 shadow-2xl shadow-lime-400 rounded-lg'>
          <h2 className='text-center md:text-4xl text-2xl font-bold'>
            Experimente Gratuitamente
          </h2>
          <p className='text-center text-lg text-zinc-400'>
            Teste nossa plataforma com um acesso limitado a 10 modelos por
            marca.
          </p>

          <button className='text-zinc-100 text-lg font-bold border w-fit p-4 flex justify-center items-center mx-auto rounded hover:bg-lime-400 hover:text-black'>
            Solicite teste
          </button>
        </div>

        <div className='mt-32 space-y-5 px-6 py-20'>
          <h2 className='text-center md:text-4xl text-2xl font-bold'>Planos</h2>
          <Plans />
        </div>

        <Faq />
      </div>
    </div>
  )
}
