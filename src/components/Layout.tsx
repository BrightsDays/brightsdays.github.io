import PageCard from './PageCard'
import styled from 'styled-components'
import Link from 'next/link'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import { getThemeState } from '../store/themeSlice'
import { darkTheme, lightTheme } from '../styles/Theme'
import GlobalStyles from '../styles/GlobalStyles'

const Container = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 40px 10px;
  width: 1100px;
  max-width: 100%;
  gap: 30px;
  @media (max-width: 1059px) {
    padding: 20px 10px;
    gap: 15px;
  }
  @media (max-width: 499px) {
    padding: 10px 10px 40px;
  }
`

const Content = styled.div`
  width: 720px;
  max-width: 100%;
  margin: 0 auto;
`

const Navigation = styled.nav`
  margin-bottom: 40px;
  padding: 0 10px;
  @media (max-width: 499px) {
    margin-bottom: 20px;
    padding: 0;
    text-align: center;
  }
`

const NavText = styled.span`
  font-size: 2.2em;
  font-weight: 500;
  pointer-events: none;
`

const NavLink = styled.a`
  font-size: 2.2em;
  cursor: pointer;
  color: ${props => props.theme.link};
  &:hover {
    text-decoration: underline;
  }
`

const Layout = ({ children }) => {
  const { theme } = useSelector(getThemeState)

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
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
    </ThemeProvider>
  )
}

export default Layout