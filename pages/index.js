import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>YouTube Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://www.youtube.com/s/desktop/01530da7/img/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <Navbar/>
       
    </div>
  )
}
