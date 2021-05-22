import React from 'react'

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header__title'>Lista de Tareas</h1>
            <button className='header__button'>
                No mostrar completadas
            </button>
        </header>
    )
}

export default Header
