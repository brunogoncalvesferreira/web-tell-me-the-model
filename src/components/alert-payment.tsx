import type { Dispatch } from 'react'
import { useNavigate } from 'react-router-dom'

interface AlertPaymentProps {
  setIsOpenModalPayment: Dispatch<boolean>
}

export function AlertPayment({ setIsOpenModalPayment }: AlertPaymentProps) {
  const navigate = useNavigate()
  function handleCloseModel() {
    setIsOpenModalPayment(false)
  }

  function handleNavigateLandingPage() {
    setIsOpenModalPayment(false)
    navigate('/home')
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center'>
      <div className='bg-zinc-800 md:max-w-md w-full h-auto p-8 rounded-md flex flex-col gap-4'>
        <h1 className='text-2xl text-zinc-100'>
          {' '}
          Visível apenas na versão Premium{' '}
        </h1>

        <div className='flex items-center justify-between gap-3'>
          <button
            onClick={handleCloseModel}
            className='bg-red-500 hover:bg-red-600 transition-all py-2 px-4 rounded w-full'
          >
            Cancelar
          </button>
          <button
            onClick={handleNavigateLandingPage}
            className='bg-green-600 hover:bg-green-700 transition-all py-2 px-4 rounded w-full'
          >
            Saiba mais
          </button>
        </div>
      </div>
    </div>
  )
}
