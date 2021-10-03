import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full shadow transition duration-300 bg-blue-600 text-gray-100 hocus:bg-blue-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://images.pexels.com/photos/8524945/pexels-photo-8524945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-15`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-4xl xl:text-5xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-blue-600 text-gray-100 hocus:bg-blue-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">
        Home
      </NavLink>
      <NavLink href="#">
        Plans & Pricing
      </NavLink>
      <NavLink href="#">
        Programs
      </NavLink>
      <NavLink href="#">
        Members
      </NavLink>
      <NavLink href="#">
        Blog
      </NavLink>
    </NavLinks>,
    // <NavLinks key={2}>
    //   <PrimaryLink href="/#">
    //     Appointment
    //   </PrimaryLink>
    // </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
              Connecting Great Staff
              <br />
              With Great Healthcare Facilities
          </Heading>
          <PrimaryAction>Get in Touch</PrimaryAction>
        </Content>
      </HeroContainer>
    </Container>
  );
};
