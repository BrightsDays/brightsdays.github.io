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
      <h2><a
        href="https://brightsdays.github.io/mausritter-online-sheet/"
        target="_blank"
        rel="noreferrer">Mouseritter online sheet</a></h2>
      <p>
        It is a constructor for build and use characters in Mausritter - a role playing game 
        by <a
          href="https://losing.games"
          target="_blank"
          rel="noreferrer"
        >Losing Games</a>. Currently it&#39;s a demo version without images, where you can 
        create and edit a character. In near future I will upload images, fix the visual for 
        mobile platforms and create a full character editor (for use a ready-made mouse 
        in application).
        </p><p>If you want to participate in this project - contact me!
      </p>
      <h2><a
        href="https://www.youtube.com/brightsdaysmtg"
        target="_blank"
        rel="noreferrer">brightsdaysmtg</a></h2>
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