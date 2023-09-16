import styles from './navBar.module.scss'
const NavBar = () => {
return(
    <header className={styles.navHeader}>
        <h1>Jessen Family Cookbook</h1>
        <button className={styles.navButton}>New Recipe</button>
        <button className={styles.navButton}>NavMenu</button>
    </header>
)
}

export default NavBar