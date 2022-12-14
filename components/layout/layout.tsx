import styles from './layout.module.scss'
import Sidebar from './sidebar'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}
