import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { FaShoppingCart, FaCreditCard } from "react-icons/fa";
import mushroomKhakhra from "../assets/mushroomKhakhra.png";
import okraChips from "../assets/okraChips.png";
import mushroomChips from "../assets/mushroomChips.png";
import chilliGarlic from "../assets/chilliGarlic.png";
import sweetChilli from "../assets/sweetChilli.png";
import tangyImli from "../assets/tangyImli.png";
import mintMash from "../assets/mintMash.png";

const menuItems = [
  { id: 1, name: "Mushroom Methi Khakhra", image: mushroomKhakhra, description: "Delicately crispy and infused with aromatic methi and earthy mushrooms, offering a wholesome gourmet snack experience." },
  { id: 2, name: "Okra Chips", image: okraChips, description: "Golden, crunchy, and air-fried to perfection—each bite delivers a delightful mix of crispiness and nutrition." },
  { id: 3, name: "Mushroom Chips", image: mushroomChips, description: "Light, crisp, and packed with umami goodness, these handcrafted mushroom chips redefine luxury snacking." },
  { id: 4, name: "🔥 Chilli Garlic Sauce", image: chilliGarlic, description: "A bold and fiery blend of premium red chilies and slow-roasted garlic, crafted for the ultimate spice connoisseur." },
  { id: 5, name: "🌶️ Sweet Chilli Sauce", image: sweetChilli, description: "An exquisite fusion of natural sweetness and spicy depth, offering a silky-smooth texture perfect for gourmet pairings." },
  { id: 6, name: "🍋 Tangy Imli Sauce", image: tangyImli, description: "A sophisticated mix of tangy tamarind, organic jaggery, and a hint of exotic spices for a perfectly balanced taste." },
  { id: 7, name: "🌿 Mint Mash Sauce", image: mintMash, description: "A refreshing burst of handpicked mint and coriander, elegantly blended to complement any gourmet dish." },
];

const MenuContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  font-family: "Playfair Display", serif;
  background: #0f0f0f;
  color: #fff;
`;

const Title = styled.h1`
  background: linear-gradient(135deg, #ffd700, #e6c200);
  color: #000;
  font-size: 42px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 15px 40px;
  border-radius: 50px;
  margin-bottom:50px;
  box-shadow: 0px 8px 16px rgba(255, 215, 0, 0.4);
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  justify-content: center;
  width: 90%;
  max-width: 1400px;
`;

const Card = styled.div`
margin:20px;
  padding: 20px;
  background: #222;
  border-radius: 15px;
  box-shadow: 0px 8px 16px rgba(255, 215, 0, 0.2);
  overflow: hidden;
  text-align: left;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 5px 7px rgba(255, 215, 0, 0.4);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
  border: 2px solid white;
`;

const CardContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  color: #ffd700;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #ddd;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  font-weight: bold;

  ${(props) =>
    props.primary
      ? `background: #ffd700; color: #000;`
      : `background: #444; color: #fff;`}

  &:hover {
    ${(props) =>
      props.primary
        ? `background: #e6c200;`
        : `background: #666;`}
  }
`;


function Menu() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, item];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart");
  };
  

  

  return (
    <MenuContainer>
      <Title>Our Exquisite Items</Title>
      <MenuGrid>
        {menuItems.map((item) => (
          <Card key={item.id}>
            <CardImage src={item.image} alt={item.name} />
            <CardContent>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <ButtonContainer>
                <ActionButton primary onClick={() => addToCart(item)}>
                  <FaShoppingCart /> Add to Cart
                </ActionButton>
                <ActionButton onClick={() => navigate("/payment-gateway")}>
                  <FaCreditCard /> Buy Now
                </ActionButton>
              </ButtonContainer>
            </CardContent>
          </Card>
        ))}
      </MenuGrid>
    </MenuContainer>
  );
}

export default Menu;
