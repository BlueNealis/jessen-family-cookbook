import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import NavBar from './components/navBar/navBar.js'
import RecipeThumbnail from './components/recipeThumbnail/recipeThumbnail'
import SideNav from './components/sideNav/sideNav'


export default function Home() {

  return (
    <main className={styles.main}>

      <SideNav/>
      <NavBar/>  
      <div>
      <Link href='recipe-card'>
          <RecipeThumbnail/>
      </Link>
      </div>
    </main>
  )

}