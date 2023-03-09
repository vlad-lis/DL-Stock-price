import { NavLink, useMatch, useRoutes } from "react-router-dom";

function Header() {
    const routes = useRoutes([
        { path: '/', element: null },
        { path: '/evaluate', element: null },
        { path: '/about', element: null },
    ]);

    const homeMatch = useMatch({ path: '/', end: true });
    const evaluateMatch = useMatch('/evaluate');
    const aboutMatch = useMatch('/about');

    return (
        <header className='header'>
            <div className='header__nav-container'>
                <NavLink to='/'
                    className={homeMatch ? 'header__nav-link header__nav-link_active' : 'header__nav-link'}>
                    Home
                </NavLink>
                <NavLink to='/evaluate'
                    className={evaluateMatch ? 'header__nav-link header__nav-link_active' : 'header__nav-link'}>
                    Evaluate
                </NavLink>
                <NavLink to='/about'
                    className={aboutMatch ? 'header__nav-link header__nav-link_active' : 'header__nav-link'}>
                    About
                </NavLink>
            </div>
            <h1 className='header__title'>Evaluation of vulnerability to bullying</h1>
        </header>
    );
}

export default Header;