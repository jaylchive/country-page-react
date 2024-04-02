import { Link } from 'react-router-dom';

import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <Link to="/" className={styles.logo}>
        <img src="/Logo.svg" />
      </Link>
    </section>
  );
}

export default Hero;
