import React, { useEffect, useState } from 'react'

import styles from './styles.module.css'

import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react'
import { RouterLink } from '../RouterLink'

type AvailableThemes = 'dark' | 'light'

export function Menu(){
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark'
        return storageTheme
    })

    const nextThemeIcon = {
        dark: <SunIcon/>,
        light: <MoonIcon/>
    }

    const handleThemeChange = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
        setTheme(prevState => prevState === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return <nav className={styles.menu}>
        <RouterLink href="/" className={styles.menuLink} aria-label='Ir para a Home' title='Home'>
            <HouseIcon />
        </RouterLink>
        <RouterLink href="#" className={styles.menuLink} aria-label='Ir para o Historico' title='Histórico'>
            <HistoryIcon />
        </RouterLink>
        <RouterLink href="#" className={styles.menuLink} aria-label='Ir para as Configurações' title='Configurações'>
            <SettingsIcon />
        </RouterLink>
        <RouterLink href="#" className={styles.menuLink} aria-label='Mudar tema' title='Mudar tema' onClick={(event) => handleThemeChange(event)}>
            {nextThemeIcon[theme]}
        </RouterLink>
    </nav>
}