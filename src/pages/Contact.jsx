import styled from "styled-components";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";

// Styled Components
const ContactContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: url("https://source.unsplash.com/1600x900/?luxury-hotel") center/cover no-repeat;
  color: white;
  text-align: center;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  color: #ffd700;
  font-family: "Playfair Display", serif;
`;

const Subtitle = styled.p`
  font-size: 22px;
  margin: 10px 0 40px;
  max-width: 700px;
  color: rgba(255, 255, 255, 0.9);
  font-family: "Playfair Display", serif;
`;

const FormContainer = styled.div`
  width: 50%;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 5px 10px rgba(255, 215, 0, 0.3);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  font-size: 18px;
  border: 2px solid #ffd700;
  background: transparent;
  color: white;
  border-radius: 8px;
  outline: none;
  font-family: "Playfair Display", serif;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    border-color: white;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  font-size: 18px;
  border: 2px solid #ffd700;
  background: transparent;
  color: white;
  border-radius: 8px;
  outline: none;
  height: 100px;
  font-family: "Playfair Display", serif;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    border-color: white;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 12px 35px;
  font-size: 20px;
  font-weight: bold;
  color: #000;
  background: linear-gradient(135deg, #ffd700, #f0c14b);
  border-radius: 50px;
  text-decoration: none;
  transition: 0.3s;
  border: none;
  cursor: pointer;
  font-family: "Playfair Display", serif;
  box-shadow: 0px 5px 15px rgba(255, 215, 0, 0.3);

  &:hover {
    background: linear-gradient(135deg, #f0c14b, #ffd700);
    transform: scale(1.05);
    box-shadow: 0px 10px 25px rgba(255, 215, 0, 0.5);
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: white;
  font-size: 20px;
  transition: 0.3s;
  font-family: "Playfair Display", serif;

  &:hover {
    color: #ffd700;
    transform: scale(1.1);
  }
`;

const IconStyle = {
  fontSize: "30px",
  color: "#ffd700",
};

function Contact() {
  return (
    <ContactContainer>
      <Overlay>
        <Title>Contact The Royal Cascade</Title>
        <Subtitle>
          We are here to assist you 24/7. Whether it's a reservation, a special
          request, or concierge service, we would love to hear from you!
        </Subtitle>

        <FormContainer>
          <Input type="text" placeholder="Enter Your Name" />
          <Input type="email" placeholder="Enter Your Email" />
          <TextArea placeholder="Enter Your Query or Feedback"></TextArea>
          <Button>Send Message</Button>
        </FormContainer>

        <SocialContainer>
          <SocialLink href="#" target="_blank">
            <Facebook style={IconStyle} /> Facebook
          </SocialLink>
          <SocialLink href="#" target="_blank">
            <Instagram style={IconStyle} /> Instagram
          </SocialLink>
          <SocialLink href="#" target="_blank">
            <YouTube style={IconStyle} /> YouTube
          </SocialLink>
        </SocialContainer>
      </Overlay>
    </ContactContainer>
  );
}

export default Contact;
