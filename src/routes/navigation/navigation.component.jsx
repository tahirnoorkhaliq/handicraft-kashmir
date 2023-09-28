import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { Fragment, useContext } from "react";
import { UserContext } from "../../context/user.context";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase.utils";
const Navigation = ({ login, status }) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log("Current User", currentUser);

  const signOutHandler = async () => {
    const res = await signOutUser();
    console.log("Logout user:",res);
    setCurrentUser(null);
  };
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contactus">
            CONTACT US
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
