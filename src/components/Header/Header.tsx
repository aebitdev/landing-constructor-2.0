import React from 'react'
import Image from 'next/image'
import styles from './Header.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image
                    src="/img/logo.svg"
                    alt="Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>
            <div className={styles.header__menu}>
                <nav>
                    <ul>
                        <li>
                            <a href="#about">О нас</a>
                        </li>
                        <li>
                            <a href="#faq">FAQ</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
