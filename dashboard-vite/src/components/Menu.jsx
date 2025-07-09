import { Link } from "react-router-dom";

const Menu = () => {
  const handleProfileClick = () => {
    alert("Profile clicked!");
  };

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li><Link style={{color:"black" , textDecoration:"none"}} to="/">Dashboard</Link></li>
          <li><Link style={{color:"black" , textDecoration:"none"}} to="/orders">Orders</Link></li>
          <li><Link style={{color:"black" , textDecoration:"none"}} to="/holdings">Holdings</Link></li>
          <li><Link style={{color:"black" , textDecoration:"none"}} to="/positions">Positions</Link></li>
          <li><Link style={{color:"black" , textDecoration:"none"}} to="/funds">Funds</Link></li>
          <li><Link style={{color:"black" , textDecoration:"none"}} to="/apps">Apps</Link></li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
