import Link from 'next/link';
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Technologieen: NextPage = () => {
    return (
    <div className={styles.container}>
            <div className="background-wrapper">
                <div className="background-blur-purple"></div>
                <div className="background-blur-green"></div>
            </div>
            <main className={styles.main}>
                <h1>Technologieen</h1>
            </main>
        </div>    
    )
}
export default Technologieen
