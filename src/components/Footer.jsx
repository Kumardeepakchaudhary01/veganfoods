import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterContainer = styled.footer`
  width: 100%;
  background: #111;
  padding: 0px 40px;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction:row-reverse;
  justify-content:space-between;
  align-items: center;
  border-top: 3px solid #ffd700;
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #bbb;
  margin-top: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const SocialLink = styled.a`
  color: #ffd700;
  font-size: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <SocialIcons>
        <SocialLink href="https://facebook.com" target="_blank"><FaFacebook /></SocialLink>
        <SocialLink href="https://instagram.com" target="_blank"><FaInstagram /></SocialLink>
        <SocialLink href="https://twitter.com" target="_blank"><FaTwitter /></SocialLink>
      </SocialIcons>
      <FooterText>© 2025 Nutri Cascades. All rights reserved.</FooterText>
    </FooterContainer>
  );
}

export default Footer;
