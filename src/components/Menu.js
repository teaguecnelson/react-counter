import { Link } from 'react-router-dom'

export const Menu = () => (
	<nav className="menu">
		<Link to="/" activeClassName="selected">Home</Link>
		<Link to="/list-days" activeClassName="selected">List</Link>
		<Link to="/add-day" activeClassName="selected">Add</Link>
	</nav>
)