import { Link } from 'react-router-dom'
import styles from './Button.module.css'

function Button({customClass, to, text }) {
  return (
    <Link  className={`${styles.button} ${styles[ customClass]}`} to={to}>
      {text}
    </Link>
  )
}

export default Button