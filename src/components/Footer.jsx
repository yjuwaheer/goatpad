import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: right;
  position: fixed;
  bottom: 0;
`;

const Text = styled.p`
  padding: 8px 20px;
  text-align: right;
  border-radius: 10px 0 0 0;
  background-color: #fbfbf9;
  opacity: 0.5;
  color: #999;

  a {
    color: #999;

    &:hover {
      color: #000;
    }
  }
`;

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <Text>
        <a href="https://www.grammerhub.org/" target="_blank" rel="noreferrer">
          Grammerhub
        </a>{" "}
        - &copy;{footerYear}
      </Text>
    </StyledFooter>
  );
}

export default Footer;
