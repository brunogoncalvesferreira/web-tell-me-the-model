import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { useAuth } from "../hooks/auth";

export function LayoutDefault() {
  const { signOut } = useAuth()

  return (
    <div  className="max-w-5xl w-full mx-auto px-4">
      <Header  signOut={signOut}/>
      <main>
        <Outlet />
      </main>
    </div>
  )
}