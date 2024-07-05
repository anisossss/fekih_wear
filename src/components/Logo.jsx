import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logod from "../assets/Svgs/star_white_48dp.png";

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 6;

  width: 100%;
  width: fit-content;

  a {
    width: 100%;
    display: flex;
    align-items: flex-end;
  }

  svg {
    width: 4rem;

    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: #fff;
      }
    }
  }
`;

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <img
          width="300"
          height="300"
          src={Logod}
          alt="Wibe"
          data-scroll
          data-scroll-speed="2"
        />
      </Link>
    </Container>
  );
};

export default Logo;
