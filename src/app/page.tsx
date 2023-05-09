import Image from 'next/image'
import styles from './styles/home.module.scss'
import Auth from './components/auth'
export default function Home() {
  return (
    <div className={styles.Home}>
      <Auth/>
    </div>
  )
}
