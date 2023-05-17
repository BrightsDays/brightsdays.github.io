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
      <h2>
        <a
        href="https://brightsdays.github.io/mausritter-online-sheet/"
        target="_blank"
        rel="noreferrer">Mauseritter online sheet</a>
      </h2>
      <p>
        This is a constructor for creating and using characters in Mauseritter, 
        a role-playing game about mouse adventurers from <a
          href="https://losing.games"
          target="_blank"
          rel="noreferrer"
        >Losing Games</a>.
      </p>
      <p>
        Currently posted as a demo version.
      </p>
      <h2><a
        href="https://www.youtube.com/brightsdaysmtg"
        target="_blank"
        rel="noreferrer">Brightsdaysmtg</a></h2>
      <p>
        On this YouTube channel, I post videos 
        about <a
          href="http://oldschool-mtg.blogspot.com/"
          target="_blank"
          rel="noreferrer">Old School Magic</a> - a popular board game format. 
          Sometimes these are game records, and sometimes nostalgic stories; if you are 
        fan of retro games or Magic: the Gathering, you might like this.
      </p>
    </Info>
  )
}

export default Projects