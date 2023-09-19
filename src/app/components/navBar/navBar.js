import styles from './navBar.module.scss'
import Link from 'next/link'
const NavBar = () => {
return(
    <header className={styles.navHeader}>
        <div className={styles.topNavCenter}>
             <h1>Jessen Family Cookbook</h1>
        </div>
        <div className={styles.topNavRight}>
            <Link href='new-recipe' className={styles.newRecipeButton}>
              <img src='New-Recipe-Icon.png' alt='New Recipe Button'/>
            </Link>
           
            <button className={styles.menuBurgerButton}>
             <img src='menu-burger.png' alt='Open Side Menu'/>
            </button>
        </div>
    </header>
)
}

export default NavBar