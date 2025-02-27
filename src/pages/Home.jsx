import styled from "styled-components";
import { motion } from "framer-motion";
import bg from "../assets/bg.png";

// Styled Components
const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: url(${bg}) center/cover no-repeat;
  color: white;
  text-align: center;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled(motion.h1)`
  font-size: 72px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #e5c100;
  font-family: "Cormorant Garamond", serif;
  text-shadow: 0px 0px 20px rgba(229, 193, 0, 0.8);
`;

const Subtitle = styled(motion.p)`
  font-size: 26px;
  margin-top: 12px;
  font-family: "Cormorant Garamond", serif;
  max-width: 800px;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
`;

const Button = styled(motion.a)`
  margin-top: 30px;
  padding: 16px 40px;
  font-size: 22px;
  font-weight: 600;
  color: #1a1a1a;
  background: linear-gradient(135deg, #e5c100, #b89f47);
  border-radius: 50px;
  text-decoration: none;
  transition: 0.3s;
  box-shadow: 0px 6px 18px rgba(229, 193, 0, 0.4);
  font-family: "Cormorant Garamond", serif;

  &:hover {
    background: linear-gradient(135deg,rgb(247, 247, 247), #e5c100);
    transform: scale(1.1);
    box-shadow: 0px 12px 30px rgba(229, 193, 0, 0.6);
  }
`;

const GlowEffect = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  background: rgba(229, 193, 0, 0.25);
  border-radius: 50%;
  filter: blur(180px);
  top: 15%;
  left: 12%;
  animation: glow 6s infinite alternate;

  @keyframes glow {
    0% { opacity: 0.5; }
    100% { opacity: 1; }
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Overlay>
        <GlowEffect />
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to The Royal Cascade
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Experience unparalleled luxury and world-class dining in an ambiance of sophistication.
        </Subtitle>
        <Button
          href="https://veganfoods.vercel.app/menu"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          Explore Our Menu
        </Button>
      </Overlay>
    </HomeContainer>
  );
}

export default Home;
