import { Link, Route, Routes } from "react-router-dom";

function Header() {
    return (
        <header className="header">

            <div className='header__nav-container'>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <>
                                <Link to='/' className='header__nav-link'>Home</Link>
                                <Link to='/evaluate' className='header__nav-link'>Evaluate</Link>
                                <Link to='/about' className='header__nav-link'>About</Link>
                            </>
                        }
                    />
                    <Route
                        path='/evaluate'
                        element={
                            <>
                                <Link to='/' className='header__nav-link'>Home</Link>
                                <Link to='/about' className='header__nav-link'>About</Link>
                            </>
                        }
                    />
                    <Route
                        path='/about'
                        element={
                            <>
                                <Link to='/' className='header__nav-link'>Home</Link>
                                <Link to='/evaluate' className='header__nav-link'>Evaluate</Link>
                            </>
                        }
                    />
                </Routes>
            </div>

            <h1 className='header__title'>Evaluating vulnerabiluty to bullying </h1>

        </header>
    )
}

export default Header;