import React from 'react'
import Logo from "./Logo"
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

interface Props {
    children: React.ReactNode
}

export default function Layout(props: Props) {
  return (
    <Container>
      <Logo />
      {props.children}
    </Container>
  );
}
