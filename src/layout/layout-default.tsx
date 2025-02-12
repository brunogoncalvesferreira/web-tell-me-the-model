import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'
import { useAuth } from '../hooks/auth'
import { Footer } from '../components/footer'
import { CookieNotice } from '@/components/CookieNotice'

export function LayoutDefault() {
  const { signOut } = useAuth()

  return (
    <div className='max-w-5xl w-full mx-auto px-4 flex flex-col h-screen'>
      <Header signOut={signOut} />
      <main className='flex-1'>
        <Outlet />
        <CookieNotice />
      </main>

      {<Footer />}
    </div>
  )
}
