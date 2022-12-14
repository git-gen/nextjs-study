import { useState } from 'react'
import styles from './sidebar.module.scss'

export default function Sidebar() {
  const [displayState, setdisplayState] = useState<string>('PC')

  return (
    <div className={styles.container}>
      <div className={styles.top_title}>Sidebar</div>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}>
          <div className={styles.item_icon}>⭐️</div>
          <div className={styles.item_text}>text1</div>
        </li>
        <li className={styles.nav_item}>
          <div className={styles.item_icon}>⭐️</div>
          <div className={styles.item_text}>text2</div>
        </li>
        <li className={styles.nav_item}>
          <div className={styles.item_icon}>⭐️</div>
          <div className={styles.item_text}>text3</div>
        </li>
        <li className={styles.nav_item}>
          <div className={styles.item_icon}>⭐️</div>
          <div className={styles.item_text}>text4</div>
        </li>
        <li className={styles.nav_item}>
          <div className={styles.item_icon}>⭐️</div>
          <div className={styles.item_text}>text5</div>
        </li>
      </ul>
    </div>
  )
}
