import './layout.module.scss'
import Sidebar from './sidebar'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Sidebar />
      <main>{children}</main>
    </>
  )
}
