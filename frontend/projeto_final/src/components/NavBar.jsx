import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <header class="w-full">
                <nav class="bg-purple-800 fixed w-full z-20 top-0 left-0 border-b border-gray-600 dark:bg-slate-900 shadow-lg duration-500 ease-in-out">
                    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="/" class="flex items-center">
                            <img src="../src/assets/file.jpeg" class="h-8 mr-3 rounded-full" alt="mayke" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Busca Clientes</span>
                        </a>
                        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium borderrounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-purple-800 dark:bg-slate-900 duration-500 ease-in-out">
                                <li>
                                    <Link to="/" className="block text-lg font-semibold duration-500 ease-in-out py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:p-0 md:hover:text-white text-white hover:bg-white hover:text-purple-800 group" aria-current="page">
                                        Home
                                        <div className="w-full h-1 rounded-3xl pt-1 duration-500 ease-in-out bg-white scale-0 md:group-hover:scale-100 "></div>
                                    </Link>

                                </li>
                                <li>
                                    <Link to="/cliente/view" class="block text-lg font-semibold duration-500 ease-in-out py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:p-0 md:hover:text-white text-white hover:bg-white hover:text-purple-800 group">Views
                                        <div class="w-full h-1 rounded-3xl pt-1 duration-500 ease-in-out bg-white scale-0 md:group-hover:scale-100 "></div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/cliente/add" class="block text-lg font-semibold duration-500 ease-in-out py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:p-0 md:hover:text-white text-white hover:bg-white hover:text-purple-800 group">Adicionar
                                        <div class="w-full h-1 rounded-3xl pt-1 duration-500 ease-in-out bg-white scale-0 md:group-hover:scale-100 "></div>
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar
