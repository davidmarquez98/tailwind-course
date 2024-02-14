import { NavLink } from 'react-router-dom';

function Navbar(){

    const listarNavbar = () => {
        const opcionesNavbar = [{ titulo: 'Shop', url: '/shop'},
                                { titulo: 'All', url: '/'},
                                { titulo: 'Electronics', url: '/electronics'},
                                { titulo: 'Furnitures', url: '/furnitures'},
                                { titulo: 'Toys', url: '/toys'},
                                { titulo: 'others', url: '/others'}];
    
        return opcionesNavbar.map(opcionNavbar => (
            <li key={opcionNavbar.titulo} className={ opcionNavbar.titulo == 'Shop' ? 'font-semibold text-lg': ''}>
                <NavLink to={opcionNavbar.url}>
                    {opcionNavbar.titulo}
                </NavLink>
            </li>
        ));
    };

    return (
        <nav className='w-full py-5 px-8 text-sm font-light'>
            <ul className='flex flex-row gap-3 items-center'> 
                { listarNavbar() }
            </ul>
        </nav>
    );
}

export default Navbar;