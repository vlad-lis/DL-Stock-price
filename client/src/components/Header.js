import { Link, Route, Routes } from "react-router-dom";

function Header() {
    return (
        <header className="header">

            <Routes>
                <Route
                    path='/'
                    element={
                        <Link to='/'>Home</Link>
                    }
                />
            </Routes>

            <h1>ML model - bullying prediction</h1>

        </header>
    )
}

export default Header;