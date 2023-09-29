import styled from 'styled-components'

const Info = styled.div`
  padding: 0 10px;
  @media (max-width: 499px) {
    padding: 0;
  }

  h1 {
    margin-bottom: 1em;
    font-size: 3em;
    font-weight: 600;
  }

  h2 {
    margin: 1em 0 0.6em 0;
    font-size: 2.6em;
    font-weight: 500;
  }
  
  h3 {
    margin: 1em 0 0.6em 0;
    font-size: 2.2em;
    font-weight: 500;
  }

  p {
    margin-top: 0.3em;
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
    color: ${props => props.theme.link};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    list-style: none;
    padding-left: 15px;
    min-width: 280px;
  }

  li {
    position: relative;
    margin-top: 0.5em;
    font-size: 1.8em;

    &:before {
      content: '\\2022';
      position: absolute;
      left: -15px;
      color: ${props => props.theme.link};
      font-weight: bold;
    }
  }
`

export default Info