import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';

const Home = () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <Link href="/chores">Chores</Link>
                <Link href="/pantry">Pantry</Link>
                <Link href="/grocery">Grocery</Link>
                <Link href="/meals">Meals</Link>
                <Link href="/scanner">Scanner</Link>
                <Link href="/maintenance">Maintenance</Link>
            </nav>
            <header className={styles.hero}>
                <h1>Welcome to HomeHub!</h1>
                <p>Your home management made easy.</p>
            </header>
            <section className={styles.features}>
                <div className={styles.card}><h2>Chores</h2><p>Manage your household chores.</p></div>
                <div className={styles.card}><h2>Pantry</h2><p>Keep track of your pantry items.</p></div>
                <div className={styles.card}><h2>Grocery</h2><p>Plan your grocery shopping.</p></div>
                <div className={styles.card}><h2>Meals</h2><p>Plan your meals for the week.</p></div>
                <div className={styles.card}><h2>Scanner</h2><p>Use the scanner for quick additions.</p></div>
                <div className={styles.card}><h2>Maintenance</h2><p>Keep up with home maintenance tasks.</p></div>
            </section>
        </div>
    );
};

export default Home;
