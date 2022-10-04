import Info from '../styles/Info'
import Image from 'next/image'

const Projects = () => {
  return (
    <Info>
      <h1>Projects</h1>
      <a
        href="https://brightsdays.github.io/mausritter-online-sheet/"
        target="_blank"
        rel="noreferrer"><h2>Mouseritter online sheet</h2></a>
      <p>
        It is a constructor for build and use characters in Mausritter - a role playing game 
        by <a
          href="https://losing.games"
          target="_blank"
          rel="noreferrer"
        >Losing Games</a>. Currently it&#39;s even not demo and you can only create a 
        character and slightly edit stats and inventory - but I work on it.
        <br/>If you want to participate in this project - contact me!
      </p>
      <a
        href="https://www.youtube.com/brightsdaysmtg"
        target="_blank"
        rel="noreferrer"><h2>brightsdaysmtg</h2></a>
      <p>
        On this YouTube channel, I post videos 
        about <a
          href="http://oldschool-mtg.blogspot.com/"
          target="_blank"
          rel="noreferrer">Old School Magic</a> - a format of popular board game. 
          Sometimes it&#39;s game records and sometimes nostalgic stories; if you are 
        fan of retro games or Magic: the Gathering, you might like it.
      </p>
    </Info>
  )
}

export default Projects