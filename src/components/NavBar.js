import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export class NavBar extends Component {
    render() {
        return (
        <div>
            <nav className = "navbar navbar-expand-md navbar-light bg-dark sticky-top">    
	            <div className= "navbar-brand">
    News Room   
	</div>
	                <button
	                type="button"
	                className="navbar-toggler"
	                data-toggle="collapse"
	                data-target="#navbarResponsive"
                    >
                    <span className = "navbar-toggler-icon"></span>
                 </button>
                <div className="collapse navbar-collapse" id = "navbarResponsive">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className ="nav-item">
                            <NavLink to="/movie-reviews">Movie Reviews</NavLink>    
                        </li>
                        <li className="nav-item">
                             <NavLink to="/best-sellers">Best Sellers</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>          
        </div>
        )
    }
}

export default NavBar
