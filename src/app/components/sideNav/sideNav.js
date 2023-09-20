'use client'
import Link from "next/link"
import { useState } from "react"
import styles from './sideNav.module.scss'

const [visible, setVisibility] = useState(false);

const SideNav = () => {
    return(
        <div className={styles.sideNavContainer}>
            <h1>Menu</h1>
            <Link href=''>
                <h2>Home</h2>
            </Link>
            <Link href='all-recipes'>
                <h2>All Recipes</h2>
            </Link>
            <Link href='add-a-recipe'>
                <h2>Add A Recipe</h2>
            </Link>
        </div>
    )
}

export default SideNav