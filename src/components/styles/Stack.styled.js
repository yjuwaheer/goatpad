// import React from 'react'
import styled from 'styled-components'

// This component is used to stack items vertically.
// It can take a 'gutter' prop to specify the space between items.
// The default gutter size is 'lg'.

const spacingMap = {
  xs: '0.125rem',
  sm: '0.25rem',
  md: '0.5rem',
  lg: '1rem',
  xl: '2rem',
  xxl: '4rem',
}

export const Stack = styled.div`
  display: grid;
  gap: ${(props) => spacingMap[props.gutter] ?? spacingMap.lg};
`
