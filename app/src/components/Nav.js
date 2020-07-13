import React from 'react';

const Nav = () => {
    return(
        <div>        
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">AllStar Cooking</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/register">Register for Classes</a></li>
                    <li><a href="/recipelist">View Available Recipes</a></li>
                </ul>
            </div>
        </nav>

        </div>
    )
}

export default Nav;