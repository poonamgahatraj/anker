import styles from '../button.module.css'

export default function Button ({children,disabled, onClick }){
    return(
        <button  className={`${styles.btn} ${disabled ? styles.disabled : ''}`}
        onClick={disabled ? undefined : onClick} >
        {children}
    </button>
    )
}