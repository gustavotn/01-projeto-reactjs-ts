import logoToDo from '../assets/logo-todo.svg'

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoToDo} alt="logo-tipo da aplicação" />
    </header>
  )
}