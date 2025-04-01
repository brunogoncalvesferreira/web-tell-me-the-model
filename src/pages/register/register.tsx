import { LoadingButton } from '@/components/loading-button'
import { api } from '@/lib/axios'
import { AtSign, Lock, User } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export function Register() {
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  async function createUser(event: FormEvent) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (name === '' || email === '' || password === '') {
      toast.error('Preencha todos os campos')
      return
    }

    setIsLoading(true)

    await api.post('/user', { name, email, password }).then(() => {
      setIsLoading(false)
      navigate('/')
    })
  }

  return (
    <div className='flex flex-col items-center justify-center h-[50vh] bg-pattern bg-center bg-no-repeat space-y-10 px-5'>
      <h1 className='md:text-5xl text-4xl md:mr-0 mr-auto text-zinc-100 font-bold'>
        Fazer cadastro
      </h1>
      <form
        onSubmit={createUser}
        className='md:w-[600px] w-full flex flex-col space-y-6'
      >
        <div className='flex items-center gap-2 w-full bg-zinc-800 px-2 py-4 rounded-md shadow-shape'>
          <User className='size-5 text-zinc-400' />
          <input
            className='bg-transparent flex-1 outline-none placeholder:text-zinc-400 text-zinc-100'
            type='text'
            name='name'
            placeholder='Digite o nome'
            autoComplete='username'
          />
        </div>

        <div className='flex items-center gap-2 w-full bg-zinc-800 px-2 py-4 rounded-md shadow-shape'>
          <AtSign className='size-5 text-zinc-400' />
          <input
            className='bg-transparent flex-1 outline-none placeholder:text-zinc-400 text-zinc-100'
            type='email'
            name='email'
            placeholder='Digite seu e-mail'
            autoComplete='username'
          />
        </div>

        <div className='flex items-center gap-2 w-full bg-zinc-800 px-2 py-4 rounded-md shadow-shape'>
          <Lock className='size-5 text-zinc-400' />
          <input
            className='bg-transparent flex-1 outline-none placeholder:text-zinc-400 text-zinc-100'
            type='password'
            name='password'
            placeholder='Digite sua senha'
            autoComplete='current-password'
          />
        </div>

        <button className='shadow-shape w-full bg-lime-400 hover:bg-lime-500 h-12 font-bold text-zinc-950 rounded-md transition-colors'>
          {isLoading ? <LoadingButton /> : 'Cadastrar'}
        </button>
      </form>
    </div>
  )
}
