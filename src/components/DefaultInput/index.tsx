import styles from './styles.module.css'

type DefaultInputProps = {
    id: string
    label: string
} & React.ComponentProps<'input'>

export function DefaultInput({ type, id, label, ...props }: DefaultInputProps){
    return(
        <>
            {label && <label htmlFor={id}>{label}</label>}
            <input className={styles.input} type={type} id={id} {...props} />
        </>
    )
}