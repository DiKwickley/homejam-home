import Link from "next/link";
import { NavBarWrapper } from "./NavBarWrapper";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import SearchIcon from "@material-ui/icons/Search";

const NavBar = () => {
  return (
    <NavBarWrapper>
      <img className="logo" src="/logo.png" />
      <div className="nav-group">
        <div className="nav-item">
          <SearchIcon fontSize={"small"} /> &nbsp; Search
        </div>
        <div className="nav-item">Help</div>
        <div className="nav-item">Account</div>
        <div className="nav-item">
          <LocalMallIcon />
        </div>
      </div>
    </NavBarWrapper>
  );
};

export default NavBar;
