import PageCard from './PageCard'
import styled from 'styled-components'
import Link from 'next/link'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 40px 10px;
  width: 1100px;
  max-width: 100%;
  gap: 30px;
`

const Content = styled.div`
  width: 720px;
  max-width: 100%;
  margin: 0 auto;
`

const Navigation = styled.nav`
  margin-bottom: 40px;
  padding: 0 10px;
`

const NavText = styled.span`
  font-size: 2.2em;
  pointer-events: none;
`

const NavLink = styled.a`
  font-size: 2.2em;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const Layout = ({ children }) => {
  return (
    <Container>
      <PageCard />
      <Content>
        <Navigation>
          <NavText>&#123; </NavText>
          <Link href='/'>
            <NavLink>about</NavLink>
          </Link>
          <NavText>, </NavText>
          <Link href='/projects'>
            <NavLink>projects</NavLink>
          </Link>
          <NavText>, </NavText>
          <Link href='/contacts'>
            <NavLink>contacts</NavLink>
          </Link>
          <NavText> &#125;</NavText>
        </Navigation>
        { children }
      </Content>
    </Container>
  )
}

export default Layout