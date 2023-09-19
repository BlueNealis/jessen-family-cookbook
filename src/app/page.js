import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import NavBar from './components/navBar/navBar.js'
import RecipeThumbnail from './components/recipeThumbnail/recipeThumbnail'


export default function Home() {

  return (
    <main className={styles.main}>
     <NavBar/>
     <div>
     <Link href='recipe-card'>
        <RecipeThumbnail/>
      </Link>
     </div>
    </main>
  )

}