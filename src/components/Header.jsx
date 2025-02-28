import { Link } from "react-router-dom";
import { ShoppingCart, Search } from "@mui/icons-material";
import styled from "styled-components";
import logo from "../assets/logo.png";

// Styled Navbar
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  background: #121212;
  color: #fff;
  font-family: "Playfair Display", serif;
  box-shadow: 0px 4px 10px rgba(255, 215, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 70px; /* Ensure consistent header height */
`;

// Logo Styling
const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  img {
    height: 60px; /* Adjust logo size to fit within the header */
    background-color:white;
    border-radius:50%;
    object-fit: contain;
    cursor:pointer;
  }
`;

// Navigation Wrapper
const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

// Styled Navigation Links
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    transition: color 0.3s ease-in-out, transform 0.2s ease-in-out;

    &:hover {
      color: #ffd700;
      transform: scale(1.1);
    }
  }
`;

// Search Bar Styling
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: #222;
  border: 2px solid #ffd700;
  border-radius: 30px;
  padding: 5px 15px;
  transition: 0.3s;
  width: 45%;

  &:focus-within {
    border-color: #fff;
  }

  input {
    border: none;
    background: transparent;
    outline: none;
    color: #fff;
    font-size: 16px;
    flex: 1;
    padding: 5px;
    font-family: "Playfair Display", serif;
  }

  svg {
    color: #ffd700;
    cursor: pointer;
  }
`;

// Shopping Cart Icon
const CartIcon = styled(ShoppingCart)`
  color: #ffd700; /* Gold for premium feel */
  font-size: 28px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

function Header() {
  return (
    <Navbar>
      <Logo>
        <img src={`${logo}`} alt="VEGAN" />
      </Logo>

      {/* Search Bar */}
      <SearchBox>
        <input type="text" placeholder="Search..." />
        <Search />
      </SearchBox>

      {/* Navigation Links */}
      <NavWrapper>
        <NavLinks>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">
            <CartIcon />
          </Link>
        </NavLinks>
      </NavWrapper>
    </Navbar>
  );
}

export default Header;
