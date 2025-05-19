import LinkWithIcon from "./LinkWithIcon";
import homeImage from "../../assets/home.png";
import productImage from "../../assets/product.png";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>My Store</h1>
      <div className="navbar_links">
        <LinkWithIcon title="Home" link="/" emoji={homeImage} />
        <LinkWithIcon
          title="Products"
          link="/product-list"
          emoji={productImage}
        />
      </div>
    </nav>
    // <div className="align_center navbar navbar_heading navbar_form navbar_links">

    // </div>
  );
};

export default NavBar;
