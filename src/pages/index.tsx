import Info from '../styles/Info'
import Head from 'next/head'

export default function Home() {
  return (
    <Info>
      <Head>
        <title>BrightsDays</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Hello! &#128075;</h1>

      <p>My name is Viacheslav, currently I live in Tbilisi &#127468;&#127466;.</p>
      <p>
        I&#39;m a Frontend Developer with 3 years of experience. 
        </p><p>Building apps with Vue.js since 2021.
      </p>
      <h2>Sidus Games (from 2022)</h2>
      <p>
        Currently I working on frontend part of futuristic NFT MMORPG.
        </p><p>The game uses a variety of modern technologies and gameplay tools to guarantee 
          players an amazing blockchain journey full of adventure and opportunity.
      </p>
      <h2>ExtTeam (2021-2022)</h2>
      <p>
        Here I created an intranet portal and landing page constructor for customer.
        </p><p>On intranet I worked with admin panel and user&#39;s personal page, that 
          includes business calendar, task list and information board.
        </p><p>Much more time I gived to landing page constructor. It had not big lot of 
          options - but was simple and helps to create big number of diffirent pages.
      </p>
      <h2>AdCombo (2020-2021)</h2>
      <p>
        I created marketing landing pages - sometimes with modern animations and 
        interactive forms, sometimes quite simple. 
        </p><p>This was my first web development experience and I got more familiar with JavaScript and 
        frameworks - but don&#39;t like the client&#39;s products so I left the place.
      </p>
    </Info>
  )
}
