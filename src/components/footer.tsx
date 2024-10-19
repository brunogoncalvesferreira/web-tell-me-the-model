export function Footer() {
  return (
    <footer className="flex md:flex-row flex-col gap-4 md:items-end items-center justify-between py-4 mt-10">
      <div>
        <p className="text-zinc-300 text-sm font-light">Vortice Consulting & Tech</p>
        <p className="text-zinc-300 text-sm font-light">CNPJ: 38.414.530/0001-59</p>
      </div>
      
      <p className="text-zinc-300 text-sm font-light">
        &copy; {new Date().getFullYear()} - Todos os Direitos Reservados
      </p>

    </footer>
  )
}