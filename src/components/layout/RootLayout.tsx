import { Outlet } from "react-router-dom"
import { Header } from "../shared/Header"

export const RootLayout = () => {
  return (
    <>
        <Header />
        <Outlet /> {/* A propriedade children do router.tsx é renderizada no lugar deste componente. */}
    </>
  )
}
