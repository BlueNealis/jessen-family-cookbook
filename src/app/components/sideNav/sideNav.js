import Link from "next/link"
import styles from './sideNav.module.scss'

const SideNav = () => {
    return(
        <div className={styles.sideNavContainer}>
            <h1>Menu</h1>
            <Link href=''>
                <h1>Home</h1>
            </Link>
            <Link href='all-recipes'>
                <h1>All Recipes</h1>
            </Link>
            <Link href='add-a-recipe'>
                <h1>Add A Recipe</h1>
            </Link>
        </div>
    )
}

export default SideNav