import style from'./Header.module.css'

import igniteLogo from '../assets/igniteLogo.svg';

export function Header() {
    return (
        <header className={style.header}>
            <img src={igniteLogo} alt='Logotipo Ignite'/>
        </header>

    );
}

