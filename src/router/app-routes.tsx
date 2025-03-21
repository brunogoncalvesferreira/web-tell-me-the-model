import { Route, Routes } from 'react-router-dom'
import { LandingPageOne } from '../pages/landind-page-one/landing-page-one'
import { CreateCompatibleModel } from '../pages/create-compatible-model/create-compatible-model'
import { LayoutDefault } from '../layout/layout-default'
import { ListCompatibleModel } from '../pages/list-compatible-model/list-compatible-model'
import { SignIn } from '../pages/sign-in/sign-in'
import { TermsAndConditions } from '../pages/terms-and-conditions/terms-and-conditions'
import { PrivacyPolicy } from '../pages/privacy-policy/privacy-policy'
import { About } from '../pages/about/about'
import { Contact } from '../pages/contact/contact'
import { ListFilms } from '../pages/list-films/list-films'
import { LandingPageSecondary } from '@/pages/landing-page-secondary/landing-page-secondary'
import { LandingPageTerciary } from '@/pages/landing-page-terciary/landing-page-terciary'
import { Payment } from '@/pages/payment/payment'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/tabela-pelicula-3d' element={<LandingPageOne />} />
      <Route
        path='/tabela-modelo-pelicula-3d-compativel'
        element={<LandingPageSecondary />}
      />
      <Route
        path='/pelicula-3d-tabela-modelo-compativel'
        element={<LandingPageTerciary />}
      />
      <Route path='/' element={<LayoutDefault />}>
        <Route path='/' element={<ListFilms />} />
        <Route
          path='compatible-models/:id'
          element={<CreateCompatibleModel />}
        />
        <Route
          path='list-compatible-models/:id'
          element={<ListCompatibleModel />}
        />

        <Route path='/process_payment/:id' element={<Payment />} />

        <Route path='sign-in' element={<SignIn />} />

        <Route path='/sobre' element={<About />} />
        <Route path='/contato' element={<Contact />} />
        <Route path='/termos-e-condicoes' element={<TermsAndConditions />} />
        <Route path='/politica-de-privacidade' element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  )
}
