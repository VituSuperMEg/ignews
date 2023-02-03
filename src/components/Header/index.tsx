import { SingInButton } from '../SignInButton';
import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';

export function Header(){


  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news"/>

        <nav>
          <ActiveLink activeClassName={styles.active} href="/" legacyBehavior prefetch>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active}  href="/posts" legacyBehavior prefetch>
           <a>Posts</a>
          </ActiveLink>
        </nav>
        <SingInButton />
      </div>
    </header>
  )
}