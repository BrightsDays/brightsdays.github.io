import PageCard from './PageCard'
import styled from 'styled-components'
import Link from 'next/link'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 40px 0;
  width: 1100px;
  max-width: 100%;
  gap: 30px;
`

const Content = styled.div`
  width: 720px;
  max-width: 100%;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  return (
    <Container>
      <PageCard />
      <Content>
        <nav>
          <Link href='/'>
            <a>About</a>
          </Link>
          <Link href='/projects'>
            <a>Projects</a>
          </Link>
          <Link href='/contacts'>
            <a>Contacts</a>
          </Link>
        </nav>
        { children }
      </Content>
    </Container>
  )
}

export default Layout