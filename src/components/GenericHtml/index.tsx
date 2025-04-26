import styles from './styles.module.css'

interface GenericHtmlProps{
    children: React.ReactNode
}

export function GenericHtml({ children }: GenericHtmlProps){
    return <div className={styles.genericHtml}>{children}</div>
}