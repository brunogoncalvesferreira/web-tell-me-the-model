import { Faq } from '@/components/faq'
import { Footer } from '@/components/footer'

import person from '../../assets/images/person.png'
import video from '../../assets/video/_CapCut Commerce Pro_202502171859.mp4'
import imageTm from '../../assets/images/Imagem_TM.png'

export function LandingPageTerciary() {
  return (
    <div>
      <header className='bg-lime-500 p-6 text-center text-3xl font-bold text-gray-900 shadow-lg'>
        TM3D - Tabela Inteligente de Películas 3D
      </header>

      <section className='container mx-auto px-6 py-12 text-center'>
        <h2 className='text-4xl font-extrabold'>
          Encontre a película perfeita para qualquer modelo de celular
        </h2>
        <p className='mt-4 text-lg text-gray-300'>
          Facilitamos a busca por películas de proteção 3D, oferecendo
          compatibilidades precisas.
        </p>
        <div className='mt-8 flex justify-center'>
          <iframe
            className='w-full max-w-sm aspect-[9/16] rounded-lg shadow-lg'
            src={video}
          ></iframe>
        </div>
        <a
          href='https://wa.me/32991144887'
          className='mt-8 inline-block bg-lime-500 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-lime-600 transition'
        >
          Fale Conosco no WhatsApp
        </a>
      </section>

      <section className='bg-gray-800 py-16 text-center'>
        <h2 className='text-3xl font-bold text-white'>
          Por que Escolher o TM3D?
        </h2>
        <p className='mt-4 text-gray-300'>
          Evite estoques volumosos e otimize suas vendas com um sistema de
          compatibilidade inteligente.
        </p>
        <div className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 container mx-auto'>
          <div className='bg-gray-700 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold text-lime-400'>
              Redução de Custos
            </h3>
            <p className='mt-2 text-gray-300'>
              Diminua estoques e aumente a rotatividade dos produtos.
            </p>
          </div>
          <div className='bg-gray-700 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold text-lime-400'>
              Aumento de Vendas
            </h3>
            <p className='mt-2 text-gray-300'>
              Sempre tenha a solução ideal para o cliente.
            </p>
          </div>
          <div className='bg-gray-700 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold text-lime-400'>
              Acesso Rápido
            </h3>
            <p className='mt-2 text-gray-300'>
              Plataforma acessível via computador, tablet ou smartphone.
            </p>
          </div>
        </div>
      </section>

      <section className='container mx-auto px-6 py-12 text-center'>
        <div className='container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8'>
          <div className='md:w-1/2 text-center text-gray-300'>
            <h2 className='text-4xl font-bold text-white'>
              Descubra o TM3D: A Solução Inteligente
            </h2>
            <p className='mt-4 text-lg'>
              Se você trabalha com a venda de acessórios para celular, sabe o
              quanto pode ser desafiador manter um estoque variado de películas
              para diferentes modelos. O TM3D chega como a solução definitiva
              para ajudar lojistas a otimizar estoques e aumentar vendas com uma
              tabela completa de películas compatíveis.
            </p>
            <a
              href='https://wa.me/32991144887'
              className='mt-6 inline-block bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-xl text-lg shadow-md transition'
            >
              Saiba Mais
            </a>
          </div>
          <div className='md:w-1/2 flex justify-center'>
            <img
              src={imageTm}
              alt='Aplicativo TM3D'
              className='w-3/4 rounded-lg shadow-lg'
            />
          </div>
        </div>
      </section>

      <div className='bg-gray-800 py-12 text-center'>
        <h2 className='text-3xl font-semibold text-white'>
          Experimente Gratuitamente
        </h2>
        <p className='mt-4 text-lg text-gray-300'>
          Teste nossa plataforma e veja como o TM3D pode ajudar seu negócio a
          lucrar mais.
        </p>
        <a
          href='https://wa.me/32991144887'
          className='mt-6 inline-block bg-lime-500 hover:bg-lime-600 text-white px-8 py-3 rounded-xl text-lg shadow-md transition'
        >
          Teste agora!
        </a>
      </div>

      <section className='container mx-auto px-6 py-12 text-center'>
        <h2 className='text-3xl font-extrabold'>Planos e Preços</h2>
        <div className='mt-8 flex flex-wrap justify-center gap-6'>
          <div className='bg-gray-800 p-6 rounded-lg shadow-md w-72'>
            <h3 className='text-xl font-semibold text-lime-400'>3 Meses</h3>
            <p className='mt-2 text-gray-300'>R$ 39,90</p>
            <a
              href='https://checkout-mp.vorticehub.com.br/mp3990.php'
              target='_blank'
              className='mt-4 inline-block bg-lime-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-lime-600 transition'
            >
              Assine agora
            </a>
          </div>
          <div className='bg-gray-800 p-6 rounded-lg shadow-md w-72'>
            <h3 className='text-xl font-semibold text-lime-400'>6 Meses</h3>
            <p className='mt-2 text-gray-300'>R$ 59,90</p>
            <a
              href='https://checkout-mp.vorticehub.com.br/mp5990.php'
              target='_blank'
              className='mt-4 inline-block bg-lime-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-lime-600 transition'
            >
              Assine agora
            </a>
          </div>
          <div className='bg-gray-800 p-6 rounded-lg shadow-md w-72'>
            <h3 className='text-xl font-semibold text-lime-400'>1 Ano</h3>
            <p className='mt-2 text-gray-300'>R$ 79,90</p>
            <a
              href='https://checkout-mp.vorticehub.com.br/mp7990.php'
              target='_blank'
              className='mt-4 inline-block bg-lime-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-lime-600 transition'
            >
              Assine agora
            </a>
          </div>
        </div>
      </section>

      <section className='bg-gray-800 py-16 text-center'>
        <Faq />
      </section>

      <section className='container mx-auto px-6 py-12 text-center'>
        <h2 className='text-3xl font-extrabold'>Depoimentos</h2>
        <div className='mt-8 flex flex-wrap justify-center gap-6'>
          <div className='bg-gray-800 p-6 rounded-lg shadow-md w-72'>
            <img
              src={person}
              alt='João'
              className='w-20 h-20 mx-auto rounded-full'
            />
            <p className='mt-4'>
              "O TM3D revolucionou a forma como encontramos películas para
              nossos clientes!"
            </p>
            <p className='mt-4 font-semibold text-lime-400'>
              João, Loja TechMobile
            </p>
          </div>
          <div className='bg-gray-800 p-6 rounded-lg shadow-md w-72'>
            <img
              src={person}
              alt='Ana'
              className='w-20 h-20 mx-auto rounded-full'
            />
            <p className='mt-4'>
              "Simples, rápido e eficiente. Recomendo para qualquer assistência
              técnica!"
            </p>
            <p className='mt-4 font-semibold text-lime-400'>
              Ana, Assistência Celular Express
            </p>
          </div>
          <div className='bg-gray-800 p-6 rounded-lg shadow-md w-72'>
            <img
              src={person}
              alt='Carlos'
              className='w-20 h-20 mx-auto rounded-full'
            />
            <p className='mt-4'>
              "Ótima ferramenta para quem quer agilizar o atendimento!"
            </p>
            <p className='mt-4 font-semibold text-lime-400'>
              Carlos, Celulares Rápidos
            </p>
          </div>
          <div className='bg-gray-800 p-6 rounded-lg shadow-md w-72'>
            <img
              src={person}
              alt='Mariana'
              className='w-20 h-20 mx-auto rounded-full'
            />
            <p className='mt-4'>"Facilitou muito a gestão do nosso estoque!"</p>
            <p className='mt-4 font-semibold text-lime-400'>
              Mariana, Tech Acessórios
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
