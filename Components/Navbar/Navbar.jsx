import styles from '../../styles/Navbar.module.css';
import Image from 'next/image'

const Navbar = () => {
    return(
        <nav className={styles.navbar}>

            <div>
            <button className={styles.sidebarBtn}><span className="material-icons">	&#xe5d2;</span></button>
            <div className={styles.logo}>
                <Image 
                src="/Assets/Img/YouTube-Logo.png" 
                alt="Youtube Logo"
                width={90}
                height={55}
                />
            </div>
            </div>

            <div className={styles.inputBox}>
            <input type="text" placeholder='Search'/>
            <button className={styles.searchBtn}><span className="material-icons">	&#xe8b6;</span></button>
            </div>

            <div>
            <button className={styles.signInBtn}><span className="material-icons">	&#xe853;</span> SIGN IN </button>
            </div>

        </nav>
    )
}

export default Navbar;