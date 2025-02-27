'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Monitor } from 'lucide-react'

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <button
            onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark')
            }}
            className="p-2 rounded-md bg-transparent dark:bg-transparent"
        >
            {theme === 'dark' ? <Sun size={20} /> : theme === 'light' ? <Moon size={20} /> : <Monitor size={20} />}
        </button>
    )
}

export default ThemeSwitch
