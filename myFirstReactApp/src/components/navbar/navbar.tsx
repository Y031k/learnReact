import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () =>{
return (
<nav>
  <ul>
    <li>
		<NavLink 	
			to="/aboutus"
			className={({ isActive }) => (isActive ? 'active' : 'linkred')}		
       >
			About
		 </NavLink>

	</li>
	<li>
		<NavLink 	
			to="/checkout"
			className={({ isActive }) => (isActive ? 'active' : 'linkred')}		
       >
			Checkout
		 </NavLink>
	</li>
	<li>
		<NavLink 	
			to="/products"
			className={({ isActive }) => (isActive ? 'active' : 'linkred')}		
       >
			products
		 </NavLink>
	</li>
  </ul>
</nav>
)

}

export default Navbar;
