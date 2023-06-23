import { NavLink, useMatch } from "react-router-dom";

function Header() {

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
            <h1 className='header__title'>Evaluation of vulnerability to bullying ML model</h1>
            <div className='header__disclaimer-container'>
                <p className='header__disclaimer'>
                    The data used for the model is from a school-based survey conducted in Argentina in 2018.<br />
                    This model is created solely for demonstration purposes and does not claim to provide any insights on the issue.
                </p>
            </div>
        </header>
    );
}

export default Header;