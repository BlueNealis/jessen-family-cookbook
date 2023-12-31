'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import styles from './sideNav.module.scss'

const SideNav = ({visible}) => {

    const [navClasses, setNavClasses] = useState(`${styles.sideNavContainer}`)

    useEffect(() => {
       if(visible) {
        setNavClasses(`${styles.sideNavContainer} ${styles.sideNavContainerSlide}`)
       } else {
        setNavClasses(`${styles.sideNavContainer}`)
       }
    },[visible])

const handleClick = (e) => {
    setNavClasses(`${styles.sideNavContainer}`)
}

    return(
        <div className={navClasses}>
        <button onClick={handleClick} className={styles.closeNavButton}>X</button>
            <h1>Menu</h1>
            <Link href='/'>
                <h2>Home</h2>
            </Link>
            <Link href='all-recipes'>
                <h2>All Recipes</h2>
            </Link>
            <Link href='new-recipe'>
                <h2>Add A Recipe</h2>
            </Link>
        </div>
    )
}

export default SideNav