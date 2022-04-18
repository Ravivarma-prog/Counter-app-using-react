import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

//Stateless functional components

//Destructuring 

const NavBar = ({totalLength}) => {

    console.log('Navbar-rendered')

    // const {totalLength} = props;
    return ( 
        <nav className='navbar navbar-dark bg-primary'>
                <a
                    href = "#"
                    className='navbar-brand'>
                    Navbar <span className='badge badge-pill badge-secondary'>{totalLength}</span>
                </a>
            </nav>
    );
}
 
export default NavBar;

// class Navbar extends Component {
//     render() { 

//         return (
//             <nav className='navbar navbar-dark bg-primary'>
//                 <a
//                     href = "#"
//                     className='navbar-brand'
//                 >
//                     Navbar <span className='badge badge-pill badge-secondary'>{this.props.totalLength}</span>
//                 </a>
//             </nav>
//         );
//     }
// }
 
// export default Navbar;