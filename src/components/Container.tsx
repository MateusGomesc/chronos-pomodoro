import styles from './Container.module.css'

interface ContainerProps{
    children: React.ReactNode
}

export function Container({ children }: ContainerProps){
    return(
        <div className={styles.container}>
            <div className={styles.content}>{children}</div>
        </div>
    )
}