import styled from 'styled-components'

const Info = styled.div`
  padding: 0 10px;

  h1 {
    margin-top: 0;
    font-size: 3em;
    font-weight: 600;
  }

  h2 {
    margin-top: 1em;
    font-size: 2.2em;
    font-weight: 500;
  }

  p {
    margin-top: 1em;
    font-size: 1.8em;
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

export default Info