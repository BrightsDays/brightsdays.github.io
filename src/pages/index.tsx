import styled from 'styled-components'

const Info = styled.div`
  padding: 0 1.5em;
  margin-bottom: 1.5em;
`

export default function Home() {
  return (
    <>
      <Info>
        <h1>Hello! &#128075;</h1>
        <p>My name is Viacheslav and I am Frontend Developer.</p>
      </Info>
      <Info>
        <p>I&#39;m live in Tbilisi, Georgia. Have been working remotely since 2020.</p>
        <p>Worked with Vue and SCSS, but also used other frameworks and preprocessors; I have uncommercial experience with React.</p>
        <p>I also have hobbies - playing the harmonica, board games and drawing.</p>
      </Info>
      <Info>
        <h2></h2>
      </Info>
    </>
  )
}
