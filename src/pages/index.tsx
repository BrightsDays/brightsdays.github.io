import styled from 'styled-components'

const Info = styled.div`
  padding: 0 10px;

  h1 {
    font-size: 2.2em;
    font-weight: 500;
    margin-top: 0.8em;
    font-size: 3em;
    font-weight: 600;
    margin-top: 0;
  }

  h2 {
    font-size: 2.2em;
    font-weight: 500;
    margin-top: 0.8em;
    font-size: 1.8em;
    font-weight: 500;
    margin-top: 1em;
  }

  p {
    font-size: 1.8em;
    margin-top: 1em;
    line-height: 1.7em;
  }

  b,i {
    font-size: 1em;
    font-weight: 500;
  }

  a {
    font-size: 1em;
    text-decoration: none;
    font-weight: 450;
    color: var(--link);

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }

  ul {
    list-style: none;
    min-width: 280px;
  }

  li {
    margin-top: 0.5em;
    font-size: 1.8em;
  }
`

export default function Home() {
  return (
    <>
      <Info>
        <h1>Hello! &#128075;</h1>
        <p>My name is Viacheslav and I am Frontend Developer.</p>
        <p>I&#39;m live in Tbilisi, Georgia. Have been working remotely since 2020.</p>
        <p>Worked with Vue and SCSS, but also used other frameworks and preprocessors; I have uncommercial experience with React.</p>
        <p>I also have hobbies - playing the harmonica, board games and drawing.</p>
        <h2></h2>
      </Info>
    </>
  )
}
