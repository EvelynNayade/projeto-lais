import styles from './Button.module.css'

function Button(props) {
  return (
    <button  className={`${styles.button} ${styles[props.customClass]}`}>
      {props.children}
    </button>
  )
}

export default Button