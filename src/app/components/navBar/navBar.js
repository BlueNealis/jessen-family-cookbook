'use client'
import { useState } from 'react'
import styles from './navBar.module.scss'
import Link from 'next/link'
import SideNav from '../sideNav/sideNav'
const NavBar = () => {

    const [sideNavVisible, setSideNavVisible] = useState(false); 

    const toggleSideNav = (e) => {
        console.log('toggle triggered')
       setSideNavVisible(!sideNavVisible)
    }

return(
    <>
    <SideNav key={sideNavVisible} visible={sideNavVisible} />
        <header className={styles.navHeader}>
            <div className={styles.topNavCenter}>
                <Link href='/'>
                    <h1>Jessen Family Cookbook</h1>
                </Link>
            </div>
            <div className={styles.topNavRight}>
                <Link href='new-recipe' className={styles.newRecipeButton}>
                <img src='New-Recipe-Icon.png' alt='New Recipe Button'/>
                </Link>
            
                <button onClick={toggleSideNav} className={styles.menuBurgerButton}>
                    <img src='menu-burger.png' alt='Open Side Menu'/>
                </button>
            </div>
        </header>
    </>
)
}

export default NavBar