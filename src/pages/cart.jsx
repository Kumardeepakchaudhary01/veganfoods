import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaTrash, FaArrowLeft, FaShoppingBag } from "react-icons/fa";

const CartContainer = styled.div`
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
  box-shadow: 0px 8px 16px rgba(255, 215, 0, 0.4);
`;

const CartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  justify-content: center;
  width: 90%;
  max-width: 1400px;
  margin-top: 30px;
`;

const Card = styled.div`
  padding: 20px;
  margin-bottom:40px;
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
  height: 350px;
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
  font-size: 16px;
  color: #ddd;
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
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

const EmptyMessage = styled.p`
  font-size: 20px;
  color: #aaa;
  text-align: center;
  margin-top: 50px;
`;

function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <CartContainer>
      <Title>Your Premium Cart</Title>

      {cart.length === 0 ? (
        <EmptyMessage>Your cart is empty. Start adding items!</EmptyMessage>
      ) : (
        <CartGrid>
          {cart.map((item, index) => (
            <Card key={index}>
              <CardImage src={item.image} alt={item.name} />
              <CardContent>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                <ButtonContainer>
                  <ActionButton primary onClick={() => removeItem(index)}>
                    <FaTrash /> Remove
                  </ActionButton>
                </ButtonContainer>
              </CardContent>
            </Card>
          ))}
        </CartGrid>
      )}

      <ButtonContainer>
        <ActionButton onClick={() => navigate("/menu")}>
          <FaArrowLeft /> Continue Shopping
        </ActionButton>
        {cart.length > 0 && (
          <ActionButton primary onClick={() => navigate("/payment-gateway")}>
            <FaShoppingBag /> Proceed to Checkout
          </ActionButton>
        )}
      </ButtonContainer>
    </CartContainer>
  );
}

export default Cart;
