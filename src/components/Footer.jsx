import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  height: 34px;
  width: 100vw;
  background-color: #ccc;
  margin-top: 0px;
  padding: 5px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <StyledFooter>
      <div>Copyright {footerYear}</div>
    </StyledFooter>
  )
}

export default Footer
