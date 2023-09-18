import styles from './navBar.module.scss'
const NavBar = () => {
return(
    <header className={styles.navHeader}>
        <div className={styles.topNavCenter}>
             <h1>Jessen Family Cookbook</h1>
        </div>
        <div className={styles.topNavRight}>
            <button className={styles.navButton}>New Recipe</button>
            <button className={styles.navButton}>NavMenu</button>
        </div>
    </header>
)
}

export default NavBar