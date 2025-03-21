import { FormCreditDebit } from '@/components/form-credit-debit'
import { plans } from '@/components/plans'
import { useParams } from 'react-router-dom'

export function Payment() {
  const { id } = useParams()

  const plansData = plans.filter((plan) => plan.id === Number(id))

  const price = plansData.map((plan) => plan.price)

  return (
    <div>
      <FormCreditDebit price={price[0]} />
    </div>
  )
}
