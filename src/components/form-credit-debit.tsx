import { loadMercadoPago } from '@mercadopago/sdk-js'
import { useEffect } from 'react'
import { Button } from './ui/button'
import { api } from '@/lib/axios'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import { CreditCard } from 'lucide-react'
import { Progress } from './ui/progress'

import mastercard from '@/assets/images/mastercard.svg'
import visa from '@/assets/images/visa.svg'
import mp from '@/assets/images/mercado-pago.svg'
import amex from '@/assets/images/amex.svg'

declare global {
  interface Window {
    MercadoPago: any
  }
}

interface FormCreditDebitProps {
  price: number
}

export function FormCreditDebit({ price }: FormCreditDebitProps) {
  useEffect(() => {
    const initializeCardForm = async () => {
      await loadMercadoPago()
      const mp = new window.MercadoPago(
        import.meta.env.VITE_MERCADO_PAGO_PUBLIC_KEY
      )

      const cardForm = mp.cardForm({
        amount: String(price),
        iframe: true,
        form: {
          id: 'form-checkout',
          cardNumber: {
            id: 'form-checkout__cardNumber',
            placeholder: 'Número do cartão',
          },
          expirationDate: {
            id: 'form-checkout__expirationDate',
            placeholder: 'MM/YY',
          },
          securityCode: {
            id: 'form-checkout__securityCode',
            placeholder: 'Código de segurança',
          },
          cardholderName: {
            id: 'form-checkout__cardholderName',
            placeholder: 'Titular do cartão',
          },
          issuer: {
            id: 'form-checkout__issuer',
            placeholder: 'Banco emissor',
          },
          installments: {
            id: 'form-checkout__installments',
            placeholder: 'Parcelas',
          },
          identificationType: {
            id: 'form-checkout__identificationType',
            placeholder: 'Tipo de documento',
          },
          identificationNumber: {
            id: 'form-checkout__identificationNumber',
            placeholder: 'Número do documento',
          },
          cardholderEmail: {
            id: 'form-checkout__cardholderEmail',
            placeholder: 'E-mail',
          },
        },
        callbacks: {
          onFormMounted: (error: any) => {
            if (error)
              return console.warn('Form Mounted handling error: ', error)
            console.log('Form mounted')
          },
          onSubmit: (event: any) => {
            event.preventDefault()

            const {
              paymentMethodId: payment_method_id,
              issuerId: issuer_id,
              cardholderEmail: email,
              amount,
              token,
              installments,
              identificationNumber,
              identificationType,
            } = cardForm.getCardFormData()

            api.post('/process_payment', {
              token,
              issuer_id,
              payment_method_id,
              transaction_amount: Number(amount),
              installments: Number(installments),
              description: 'Descrição do produto',
              email,
              identificationType,
              identificationNumber,
            })
          },

          onFetching: (resource: any) => {
            console.log('Fetching resource: ', resource)

            // Animate progress bar
            const progressBar = document.querySelector('.progress-bar')
            progressBar?.removeAttribute('value')

            return () => {
              progressBar?.setAttribute('value', '0')
            }
          },
        },
      })
    }

    initializeCardForm()
  }, [])

  return (
    <div className='mt-10'>
      <Card className='bg-zinc-900 border-none'>
        <CardHeader>
          <div className='flex items-start justify-between'>
            <div>
              <div className='flex items-center gap-2'>
                <CreditCard className='size-5 text-zinc-100' />
                <CardTitle className='text-2xl text-zinc-100'>
                  Checkout
                </CardTitle>
              </div>
              <CardDescription>
                Complete seus dados para finalizar o pagamento
              </CardDescription>
            </div>

            <div className='flex gap-2'>
              <img className='w-12' src={mp} alt='' />
              <img className='w-12' src={visa} alt='' />
              <img className='w-12' src={mastercard} alt='' />
              <img className='w-12' src={amex} alt='' />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form id='form-checkout' className='flex flex-col gap-10'>
            <div className='flex gap-2'>
              <div className='flex-1'>
                <input
                  className='bg-transparent w-full text-zinc-100 border border-zinc-700/30 h-12 rounded-lg px-4'
                  type='text'
                  id='form-checkout__cardholderName'
                />
              </div>

              <div className='w-96'>
                <input
                  className='bg-transparent w-full text-zinc-100 border border-zinc-700/30 h-12 rounded-lg px-4'
                  type='email'
                  id='form-checkout__cardholderEmail'
                />
              </div>
            </div>

            <div className='flex gap-2'>
              <div
                id='form-checkout__cardNumber'
                className='px-2 text-zinc-100 border border-zinc-700/30 h-12 rounded-lg'
              ></div>
              <div
                id='form-checkout__expirationDate'
                className='px-2 text-zinc-100 border border-zinc-700/30 h-12 rounded-lg'
              ></div>
              <div
                id='form-checkout__securityCode'
                className='px-2 text-zinc-100 border border-zinc-700/30 h-12 rounded-lg'
              ></div>
            </div>

            <div className='flex gap-2'>
              <select
                className='w-full border border-zinc-700/30 h-12 rounded-lg px-4 bg-zinc-900 text-zinc-500'
                id='form-checkout__issuer'
              ></select>

              <select
                className='w-full border border-zinc-700/30 h-12 rounded-lg px-4 bg-zinc-900 text-zinc-500'
                id='form-checkout__installments'
              ></select>
            </div>

            <div className='flex gap-2'>
              <select
                className='w-72 border border-zinc-700/30 h-12 rounded-lg px-4 bg-zinc-900 text-zinc-500'
                id='form-checkout__identificationType'
              ></select>
              <input
                className='bg-transparent text-zinc-100 border border-zinc-700/30 h-12 rounded-lg px-4'
                type='text'
                id='form-checkout__identificationNumber'
              />
            </div>
            <Button
              className='bg-lime-400 text-zinc-950 font-bold text-lg h-12 rounded-lg hover:bg-lime-500 transition-all'
              type='submit'
              id='form-checkout__submit'
            >
              Pagar
            </Button>
            <Progress
              value={10}
              className='progress-bar w-full bg-lime-400 border border-zinc-700/40'
            >
              Carregando...
            </Progress>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
