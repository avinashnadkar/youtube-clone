import styles from '../../styles/Sidebar.module.css';

const Sidebar = () => {
    return(
        <div className={styles.sidebar}>
           <ul className={styles.navLinks}>
              <li><span className="material-icons">	&#xe88a; </span>Home</li>
              <li><span className="material-icons">	&#xe87a; </span>Explore</li>
              <li><span className="material-icons">	&#xe038; </span>Shorts</li>
              <li><span className="material-icons">	&#xe064; </span>Subcription</li>
           </ul>
           <ul className={styles.navLinks}>
              <li><span className="material-icons">	&#xe04a; </span>Library</li>
              <li><span className="material-icons">	&#xe889; </span>History</li>
           </ul>
           <div>
               <p>Sign in to like videos, comment and subscribe.</p>
               <button className={styles.signInBtn}><span className="material-icons">	&#xe853;</span> SIGN IN </button>
           </div>
           <p className={styles.linkTitle}>BEST OF YOUTUBE</p>
           <ul className={styles.categoriesLinks}>
              <li><span className="material-icons">	&#xe405; </span>Music</li>
              <li><span className="material-icons">	&#xe52f; </span>Sports</li>
              <li><span className="material-icons">	&#xe338; </span>Gaming</li>
              <li><span className="material-icons">	&#xe02c; </span>Films</li>
              <li><span className="material-icons">	&#xe865; </span>News</li>
              <li><span className="material-icons">	&#xe639; </span>Live</li>
              <li><span className="material-icons">	&#xe84e; </span>Fashion and beauty</li>
              <li><span className="material-icons">	&#xe02f; </span>Learning</li>
           </ul>
        </div>
    )
}

export default Sidebar;