import Info from '../styles/Info'
import Head from 'next/head'

const Projects = () => {
  return (
    <Info>
      <Head>
        <title>BrightsDays - projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Projects</h1>
      <h3>
        <a
        href="https://brightsdays.github.io/mausritter-online-sheet/"
        target="_blank"
        rel="noreferrer">Mauseritter Online Sheet</a>
      </h3>
      <p>
        Mauseritter Online Sheet is a character creation and management tool designed for 
        Mauseritter, an engaging role-playing game centered around brave mouse adventurers 
        from <a
          href="https://losing.games"
          target="_blank"
          rel="noreferrer"
        >Losing Games</a>. Currently, it&#39;s available as a demo version, allowing 
        players to experience the world of Mauseritter.
      </p>
      <h3><a
        href="https://www.youtube.com/brightsdaysmtg"
        target="_blank"
        rel="noreferrer">Brightsdaysmtg YouTube Channel</a></h3>
      <p>
        Welcome to Brightsdaysmtg, where I share captivating content dedicated to <a
          href="http://oldschool-mtg.blogspot.com/"
          target="_blank"
          rel="noreferrer">Old School Magic</a>. On this channel, you&#39;ll find a 
          variety of videos, including game recordings and nostalgic tales. If you have a
           passion for retro games or are a Magic: the Gathering enthusiast, you&#39;re 
           sure to find something enjoyable here.
      </p>
    </Info>
  )
}

export default Projects