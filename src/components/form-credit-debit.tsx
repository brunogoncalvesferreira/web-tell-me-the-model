import styles from '@/pages/payment/style.modules.css'

import { loadMercadoPago } from '@mercadopago/sdk-js'
import { useEffect } from 'react'
import { Button } from './ui/button'
import { api } from '@/lib/axios'
import { Input } from './ui/input'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Label } from './ui/label'
import { CreditCard } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

declare global {
  interface Window {
    MercadoPago: any
  }
}

export function FormCreditDebit() {
  useEffect(() => {
    const initializeCardForm = async () => {
      await loadMercadoPago()
      const mp = new window.MercadoPago(
        import.meta.env.VITE_MERCADO_PAGO_PUBLIC_KEY
      )

      const cardForm = mp.cardForm({
        amount: '100.5',
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

            console.log(token)

            api.post('/process_payment', {
              token,
              issuer_id,
              payment_method_id,
              transaction_amount: Number(amount),
              installments: Number(installments),
              description: 'Descrição do produto',
              payer: {
                email,
                identification: {
                  type: identificationType,
                  number: identificationNumber,
                },
              },
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
          <div className='flex items-center gap-2'>
            <CreditCard className='size-5 text-zinc-100' />
            <CardTitle className='text-2xl text-zinc-100'>Checkout</CardTitle>
          </div>
          <CardDescription>
            Complete seus dados para finalizar o pagamento
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CardContent className='space-y-4'>
            <div className='space-y-2'>
              <Label className='text-zinc-200' htmlFor='name'>
                Nome do titular
              </Label>
              <Input
                className='bg-zinc-700 text-zinc-100 h-10 border border-zinc-700/30 rounded p-2'
                type='text'
                id='form-checkout__cardholderName'
              />
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <Label className='text-zinc-200' htmlFor='email'>
                  Email
                </Label>
                <Input
                  className='bg-zinc-700 text-zinc-100 h-10 border border-zinc-700/30 rounded p-2'
                  type='email'
                  id='form-checkout__cardholderEmail'
                />
              </div>
              <div className='space-y-2'>
                <Label className='text-zinc-200' htmlFor='cpf'>
                  CPF
                </Label>
                <Input
                  className='bg-zinc-700 text-zinc-100 h-10 border border-zinc-700/30 rounded p-2'
                  type='text'
                  id='form-checkout__identificationNumber'
                />
              </div>
            </div>

            <div className='space-y-2'>
              <Label className='text-zinc-200' htmlFor='cardNumber'>
                Número do cartão
              </Label>
              <Input
                id='cardNumber'
                placeholder='0000 0000 0000 0000'
                required
              />
            </div>

            <div className='grid grid-cols-3 gap-4'>
              <div className='space-y-2 col-span-1'>
                <Label className='text-zinc-200' htmlFor='cvv'>
                  Código de segurança
                </Label>
                <Input id='cvv' placeholder='000' required />
              </div>
              <div className='space-y-2 col-span-2'>
                <Label className='text-zinc-200' htmlFor='expiry'>
                  Vencimento
                </Label>
                <Input id='expiry' placeholder='MM/AA' required />
              </div>
            </div>

            <div className='space-y-2'>
              <Label className='text-zinc-200' htmlFor='bank'>
                Banco emissor
              </Label>
              <Select required>
                <SelectTrigger id='bank'>
                  <SelectValue placeholder='Selecione o banco' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='itau'>Itaú</SelectItem>
                  <SelectItem value='bradesco'>Bradesco</SelectItem>
                  <SelectItem value='santander'>Santander</SelectItem>
                  <SelectItem value='bb'>Banco do Brasil</SelectItem>
                  <SelectItem value='caixa'>Caixa Econômica</SelectItem>
                  <SelectItem value='nubank'>Nubank</SelectItem>
                  <SelectItem value='inter'>Banco Inter</SelectItem>
                  <SelectItem value='outro'>Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className='space-y-2'>
              <Label className='text-zinc-200' htmlFor='installments'>
                Parcelas
              </Label>
              <Select required>
                <SelectTrigger id='installments'>
                  <SelectValue placeholder='Selecione o número de parcelas' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='1'>1x sem juros</SelectItem>
                  <SelectItem value='2'>2x sem juros</SelectItem>
                  <SelectItem value='3'>3x sem juros</SelectItem>
                  <SelectItem value='4'>4x sem juros</SelectItem>
                  <SelectItem value='5'>5x sem juros</SelectItem>
                  <SelectItem value='6'>6x sem juros</SelectItem>
                  <SelectItem value='7'>7x com juros</SelectItem>
                  <SelectItem value='8'>8x com juros</SelectItem>
                  <SelectItem value='9'>9x com juros</SelectItem>
                  <SelectItem value='10'>10x com juros</SelectItem>
                  <SelectItem value='11'>11x com juros</SelectItem>
                  <SelectItem value='12'>12x com juros</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          {/*  <form id='form-checkout' className='flex flex-col gap-3'>
            <div className='flex gap-2'>
              <div>
                <Input
                  className='bg-zinc-700 text-zinc-100 h-10 border border-zinc-700/30 rounded p-2'
                  type='text'
                  id='form-checkout__cardholderName'
                />
              </div>

              <div>
                <Input
                  className='bg-zinc-700 text-zinc-100 h-10 border border-zinc-700/30 rounded p-2'
                  type='email'
                  id='form-checkout__cardholderEmail'
                />
              </div>
            </div>

            <div
              id='form-checkout__cardNumber'
              className='bg-zinc-700 text-zinc-100 h-10 border border-zinc-700/30 rounded p-2'
            ></div>
            <div
              id='form-checkout__expirationDate'
              className='bg-zinc-700 text-zinc-100 h-10 border border-zinc-700/30 rounded p-2'
            ></div>
            <div
              id='form-checkout__securityCode'
              className='bg-zinc-700 text-zinc-100 h-10 border border-zinc-700/30 rounded p-2'
            ></div>

            <select
              className='bg-zinc-700 text-zinc-100 h-10 border border-zinc-700/30 rounded p-2'
              id='form-checkout__issuer'
            ></select>
            <select
              className='bg-zinc-700 text-zinc-100 h-10 border border-zinc-700/30 rounded p-2'
              id='form-checkout__installments'
            ></select>
            <select
              className='bg-zinc-700 text-zinc-100 h-10 border border-zinc-700/30 rounded p-2'
              id='form-checkout__identificationType'
            ></select>
            <Input
              className='bg-zinc-700 text-zinc-100 h-10 border border-zinc-700/30 rounded p-2'
              type='text'
              id='form-checkout__identificationNumber'
            />

            <Button type='submit' id='form-checkout__submit'>
              Pagar
            </Button>
            <progress value='0' className='progress-bar text-white'>
              Carregando...
            </progress>
          </form> */}
        </CardContent>
      </Card>
    </div>
  )
}
