import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaCreditCard, FaGooglePay, FaPaypal, FaUniversity, FaWallet } from "react-icons/fa";

const PaymentContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #0a0a0a, #1a1a1a);
  color: #fff;
  font-family: "Playfair Display", serif;
  padding: 50px;
`;

const PaymentBox = styled.div`
  width: 60%;
  background: #222;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0px 1px 4px rgba(255, 215, 0, 0.5);
  text-align: center;
`;

const Title = styled.h2`
  color: #ffd700;
  font-size: 28px;
  margin-bottom: 20px;
`;

const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 30px 0;
`;

const PaymentOption = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: #333;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s, background 0.3s;
  font-size: 18px;

  &:hover {
    background: #444;
    transform: scale(1.05);
  }

  input {
    accent-color: #ffd700;
    transform: scale(1.3);
  }

  span {
    flex-grow: 1;
    font-weight: bold;
  }
`;

const CardDetails = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  background: #444;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background: #555;
  color: #fff;

  &::placeholder {
    color: #bbb;
  }
`;

const Button = styled.button`
  background: #ffd700;
  color: #000;
  padding: 12px 20px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
  width: 100%;
  margin-top: 20px;

  &:hover {
    background: #e6c200;
  }
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #ffd700;
  font-size: 16px;
  cursor: pointer;
  margin-top: 15px;

  &:hover {
    text-decoration: underline;
  }
`;

function PaymentGateway() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });

  const handlePayment = () => {
    if (!selectedMethod) {
      alert("Please select a payment method.");
      return;
    }
    alert(`Payment processing via ${selectedMethod}... (Mock Payment)`);
    navigate("/");
  };

  return (
    <PaymentContainer>
      <PaymentBox>
        <Title>Complete Your Payment</Title>
        <p>Processing payment for item ID: {id}</p>

        <PaymentOptions>
          <PaymentOption>
            <input
              type="radio"
              name="payment"
              value="Credit/Debit Card"
              onChange={(e) => setSelectedMethod(e.target.value)}
            />
            <FaCreditCard color="#ffd700" />
            <span>Credit/Debit Card</span>
          </PaymentOption>

          <PaymentOption>
            <input
              type="radio"
              name="payment"
              value="Google Pay / UPI"
              onChange={(e) => setSelectedMethod(e.target.value)}
            />
            <FaGooglePay color="#ffd700" />
            <span>Google Pay / UPI</span>
          </PaymentOption>

          <PaymentOption>
            <input
              type="radio"
              name="payment"
              value="PayPal"
              onChange={(e) => setSelectedMethod(e.target.value)}
            />
            <FaPaypal color="#ffd700" />
            <span>PayPal</span>
          </PaymentOption>

          <PaymentOption>
            <input
              type="radio"
              name="payment"
              value="Net Banking"
              onChange={(e) => setSelectedMethod(e.target.value)}
            />
            <FaUniversity color="#ffd700" />
            <span>Net Banking</span>
          </PaymentOption>

          <PaymentOption>
            <input
              type="radio"
              name="payment"
              value="Wallet"
              onChange={(e) => setSelectedMethod(e.target.value)}
            />
            <FaWallet color="#ffd700" />
            <span>Wallet</span>
          </PaymentOption>
        </PaymentOptions>

        {selectedMethod === "Credit/Debit Card" && (
          <CardDetails show={selectedMethod === "Credit/Debit Card"}>
            <Input
              type="text"
              placeholder="Card Number"
              maxLength="16"
              value={cardDetails.number}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, number: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              maxLength="5"
              value={cardDetails.expiry}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, expiry: e.target.value })
              }
            />
            <Input
              type="password"
              placeholder="CVV"
              maxLength="3"
              value={cardDetails.cvv}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cvv: e.target.value })
              }
            />
          </CardDetails>
        )}

        <Button onClick={handlePayment}>Proceed to Pay</Button>
        <BackButton onClick={() => navigate("/menu")}>← Back to Menu</BackButton>
      </PaymentBox>
    </PaymentContainer>
  );
}

export default PaymentGateway;
