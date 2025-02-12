'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useNavigate } from 'react-router-dom'

export function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()

  function handleNavigatePolicy() {
    setIsVisible(false)
    navigate('/politica-de-privacidade')
  }

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (cookieConsent === null) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className='fixed bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-sm z-50'>
      <Card className='max-w-2xl mx-auto bg-zinc-950'>
        <CardHeader>
          <CardTitle className='text-2xl text-zinc-200'>
            Política de Privacidade
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-sm text-zinc-400'>
            Este site utiliza cookies para melhorar a experiência do usuário e
            cumprir as exigências da Lei Geral de Proteção de Dados (LGPD). Para
            continuar navegando, aceite nossa política de privacidade.
          </p>
        </CardContent>
        <CardFooter className='flex justify-end space-x-2'>
          <Button
            variant='link'
            className='text-zinc-400 hover:text-zinc-200'
            onClick={handleNavigatePolicy}
          >
            Saiba mais
          </Button>
          <Button variant='outline' onClick={handleDecline}>
            Rejeitar
          </Button>
          <Button
            className='bg-zinc-600 hover:bg-zinc-800 transition-all'
            onClick={handleAccept}
          >
            Entendi
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
