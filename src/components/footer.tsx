export function Footer() {
  return (
    <footer className="flex  flex-col md:flex-row gap-4 items-center justify-between py-4 mt-10">
      <div>
        <span className="text-zinc-300 text-sm font-light">Vortice Consulting & Tech -</span>
        <span className="text-zinc-300 text-sm font-light"> CNPJ: 38.414.530/0001-59</span>
      </div>
      
      <p className="text-zinc-300 text-sm font-light">
        &copy; {new Date().getFullYear()} - Todos os Direitos Reservados
      </p>

    </footer>
  )
}