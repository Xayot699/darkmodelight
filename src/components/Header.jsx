import React, { useContext } from 'react'
import { ThemeContext } from '../context/Themeprovider'

function Header() {
    const context = useContext(ThemeContext);
    return(
        <>
        <header className={` py-6 ${context.theme === "light" ? "" : "bg-black text-white"}`}>
            <nav className='container mx-auto px-6 flex justify-between items-center'>
                
                    <ul className='flex gap-3'>
                        <li>Hello</li>
                         <li>Hello</li>
                          <li>Hello</li>
                           <li>Hello</li>
                    </ul>
                <button onClick={() =>  context.toggleTheme()}>
                {context.theme === "light" ? "🌙" : "☀"}
                </button>
            </nav>
        </header>
        </>
    )

}

export default  Header;