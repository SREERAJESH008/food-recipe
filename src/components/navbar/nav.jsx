import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  return (
    <div className="master">
      <div className="heading">
        <h1>Food.</h1>
      </div>
      <div class="dropdown">
        <button class="dropbtn">RECIPES</button>
        <div class="dropdown-content"></div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">POPULAR</button>
        <div class="dropdown-content">
          <a href="#">Trending Now</a>
          <a href="#">Chili Recipies</a>
          <a href="#">Soup Recipies</a>
          <a href="#">Bread Recipies</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">HEALTHY & DIET</button>
        <div class="dropdown-content">
          <a href="#">Keto Recipes</a>
          <a href="#">Healthy Recipes</a>
          <a href="#">Vegetarian Recipes</a>
          <a href="#">Vegan Recipes</a>
          <a href="#">Weight Watchers Recipes</a>
          <a href="#">Low-Crab Recipes</a>
          <a href="#">Gluten-Free Recipes</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">CUISINE</button>
        <div class="dropdown-content">
          <a href="#">Mexican Recipes</a>
          <a href="#">Italian Recipes</a>
          <a href="#">Indian Recipes</a>
          <a href="#">Thai Recipes</a>
          <a href="#">French Recipes</a>

          <a href="#">Chinese Recipes</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">MEAT & SEAFOOD</button>
        <div class="dropdown-content">
          <a href="#">Chicken Recipes</a>
          <a href="#">Salmon Recipes</a>
          <a href="#">Pork Chop Recipes</a>
        </div>
      </div>

      <div class="dropdown">
        {/* <Link className="dropdtn" to={`/login`}>
          LOG IN
        </Link> */}
        <Link class="dropbtn" to={ `/login`}>
          <button >LOG IN</button>
        </Link>
      </div>
      <div className="icon">
        {" "}
        <VscAccount />
      </div>
      <input className="search-box" type="search" placeholder="SEARCH HERE" />
    </div>
  );
};

export default Navbar;
