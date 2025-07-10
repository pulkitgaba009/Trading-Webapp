import { Link } from "react-router-dom";
import { useState } from "react";

const Menu = () => {
  const handleProfileClick = () => {
    alert("Profile clicked!");
  };

  const [selectMenu, setSelectMenu] = useState(0);
  const [isProfileDropDown, setIsProfileDropDown] = useState(false);

  let handleMenuClicked = (index) => {
    setSelectMenu(index);
  };

  let handleProfileClicked = (index) => {
    setSelectMenu(!isProfileDropDown);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClicked(0)}
              to="/"
            >
              <p className={selectMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClicked(1)}
              to="/orders"
            >
              <p className={selectMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

            <li>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClicked(2)}
              to="/holdings"
            >
              <p className={selectMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

            <li>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClicked(3)}
              to="/positions"
            >
              <p className={selectMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          
            <li>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClicked(4)}
              to="/funds"
            >
              <p className={selectMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
            <li>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClicked(5)}
              to="/apps"
            >
              <p className={selectMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
        {isProfileDropDown}
      </div>
    </div>
  );
};

export default Menu;
