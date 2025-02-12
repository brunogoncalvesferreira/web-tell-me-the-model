import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/home'
import { CreateCompatibleModel } from '../pages/create-compatible-model'
import { LayoutDefault } from '../layout/layout-default'
import { ListCompatibleModel } from '../pages/list-compatible-model'
import { SignIn } from '../pages/sign-in'
import { TermsAndConditions } from '../pages/terms-and-conditions'
import { PrivacyPolicy } from '../pages/privacy-policy'
import { About } from '../pages/about'
import { Contact } from '../pages/contact'
import { ListFilms } from '../pages/list-films'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
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

        <Route path='sign-in' element={<SignIn />} />

        <Route path='/sobre' element={<About />} />
        <Route path='/contato' element={<Contact />} />
        <Route path='/termos-e-condicoes' element={<TermsAndConditions />} />
        <Route path='/politica-de-privacidade' element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  )
}
