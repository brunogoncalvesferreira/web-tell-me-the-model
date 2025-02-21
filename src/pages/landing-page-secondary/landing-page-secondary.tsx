import { Faq } from '@/components/faq'
import imagePlaceholder from '../../assets/images/image-placeholder.png'
import imagemTm from '../../assets/images/Imagem_TM.png'

import video from '../../assets/video/_CapCut Commerce Pro_202502171842.mp4'
import { Header } from './header'
import { Depoiments } from './depoiments'
import { Plans } from './plans'
import { AdvantagesOfUse } from './advantages-of-use'
import { Footer } from '@/components/footer'

export function LandingPageSecondary() {
  return (
    <div>
      <Header />

      <section className='container mx-auto px-6 py-12 text-center'>
        <h2 className='text-4xl font-extrabold'>
          Encontre a película perfeita para qualquer modelo de celular
        </h2>
        <p className='mt-4 text-lg text-zinc-400'>
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
          className='mt-8 inline-block bg-lime-500 text-zinc-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-lime-600 transition'
        >
          Fale Conosco no WhatsApp
        </a>
      </section>

      <section className='bg-white py-12'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-3xl text-zinc-900 font-bold mb-4'>
            O Problema Comum nas Lojas de Acessórios
          </h2>
          <p className='text-lg text-zinc-800 max-w-2xl mx-auto'>
            Muitos lojistas compram pacotes específicos de películas para cada
            modelo de celular, resultando em estoques volumosos e alto
            investimento em produtos que podem demorar a sair. Sem um sistema
            eficiente para consulta, muitas oportunidades de venda são perdidas
            simplesmente por não saber que uma película pode servir para vários
            outros modelos.
          </p>
        </div>
      </section>

      <section className='container mx-auto px-6 py-12'>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='md:w-1/2 text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              Descubra o TM3D: A Solução Inteligente para Compatibilidade de
              Películas 3D
            </h2>
            <p className='text-lg text-zinc-400 mb-6'>
              Se você trabalha com a venda de acessórios para celular, sabe o
              quanto pode ser desafiador manter um estoque variado de películas
              para diferentes modelos. O TM3D chega como a solução definitiva
              para ajudar lojistas a otimizar estoques e aumentar vendas com uma
              tabela completa de películas compatíveis.
            </p>
            <a
              href='https://wa.me/32991144887'
              className='bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-lime-500 transition duration-300'
            >
              Saiba Mais
            </a>
          </div>
          <div className='md:w-1/2 flex justify-center mt-8 md:mt-0'>
            <img
              src={imagemTm}
              alt='Aplicativo TM3D'
              className='w-3/4 rounded-lg shadow-lg'
            />
          </div>
        </div>
      </section>

      <section className='bg-white py-12'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-3xl text-zinc-900 font-bold mb-4'>
            TM3D: O Primeiro e Mais Completo Aplicativo de Compatibilidade
          </h2>
          <p className='text-lg text-zinc-800 max-w-2xl mx-auto mb-8'>
            O TM3D foi desenvolvido para solucionar esse problema de
            compatibilidade entre modelos de celulares. Com nossa plataforma,
            você tem acesso a uma lista completa de películas compatíveis com
            diversos modelos de celular, ajudando a reduzir estoques e melhorar
            a eficiência da sua loja.
          </p>
          <a
            href='https://wa.me/32991144887'
            className='bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-lime-500 transition duration-300'
          >
            Saiba mais
          </a>
        </div>
      </section>

      <section className='container mx-auto px-6 py-12 text-center'>
        <h2 className='text-3xl font-bold mb-4'>Como o TM3D Funciona?</h2>
        <p className='text-lg text-zinc-400 max-w-2xl mx-auto'>
          Nosso sistema permite que qualquer vendedor, técnico ou dono de loja
          consulte rapidamente qual película 3D pode ser usada em um determinado
          modelo de celular. Basta digitar o nome do modelo do aparelho desejado
          e a tabela interativa exibe todas as opções compatíveis. Simples,
          rápido e eficiente!
        </p>
      </section>

      <section className='bg-lime-500 py-12 text-center'>
        <h2 className='text-3xl font-bold text-white mb-4'>
          Experimente Gratuitamente
        </h2>
        <p className='text-lg text-white mb-8'>
          Teste nossa plataforma e veja como o TM3D pode ajudar seu negócio a
          lucrar mais. Clique no botão abaixo e faça uma degustação.
        </p>
        <a
          href='https://wa.me/32991144887'
          className='bg-white text-zinc-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-zinc-100 transition duration-300'
        >
          Teste agora!
        </a>
      </section>

      <section className='container mx-auto px-6 py-12 text-center'>
        <h2 className='text-3xl font-bold mb-8'>Vantagens do TM3D</h2>
        <AdvantagesOfUse />
      </section>

      <section className='bg-lime-500 py-12'>
        <Plans />
      </section>

      <section className='container mx-auto px-6 py-12 text-center'>
        <Depoiments />
      </section>

      <section>
        <Faq />
      </section>

      <Footer />
    </div>
  )
}
