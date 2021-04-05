import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to=''>Pizza</SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href='/'
                target='_blank'
                aria-label='Facebook'
                rel='noopener referrer'
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href='/'
                target='_blank'
                aria-label='Instagram'
                rel='noopener referrer'
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='/'
                target='_blank'
                aria-label='Youtube'
                rel='noopener referrer'
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href='/'
                target='_blank'
                aria-label='Twitter'
                rel='noopener referrer'
              >
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
