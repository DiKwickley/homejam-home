import Link from "next/link";
import { NavBarWrapper } from "./NavBarWrapper";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

const NavBar = () => {
  return (
    <NavBarWrapper>
      <img className="logo" src="/logo.png" />
      <div className="nav-group">
        <div className="nav-item">
          <SearchIcon /> &nbsp; <span className="hide-mobile">Search</span>
        </div>
        <div className="nav-item hide-mobile">Help</div>
        <div className="nav-item hide-mobile">Account</div>
        <div className="nav-item">
          <LocalMallIcon />
        </div>
        <div className="nav-item show-mobile">
          <MenuIcon />
        </div>
      </div>
    </NavBarWrapper>
  );
};

export default NavBar;
