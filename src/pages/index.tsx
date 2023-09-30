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

      <p>I&#39;m Viacheslav, currently based in Tbilisi&nbsp;&#127468;&#127466;, and I&#39;m a Frontend Developer with 3 years of experience. I specialize in Vue.js development since 2021.</p>
     
      <h2>Work Experience</h2>
      <h3><a
        href="https://www.sidusheroes.com"
        target="_blank"
        rel="noreferrer">Sidus Games</a> (2022 - 2023)</h3>
      <p>A company specializing in the creation of NFT-based games. In this dynamic environment, I:</p>
      <ul>
        <li>Collaborated cross-functionally to design and implement responsive browser game components using Vue.js.</li>
        <li>Developed custom Vue, React, and Svelte components, integrating third-party libraries for enhanced user interfaces.</li>
        <li>Created promotional landing pages and informational websites for the games, driving engagement and player interest.</li>
      </ul>
      
      <h3><a
        href="https://extteam.ru/"
        target="_blank"
        rel="noreferrer">ExtTeam</a> (2021 - 2022)</h3>
      <p>At ExtTeam, I played a pivotal role in the creation of an intranet portal and landing page constructor. My contributions included:</p>
      <ul>
        <li>Development of key features for the intranet portal, including a calendar, personal area, information pop-ups, maps, and various UI components.</li>
        <li>Crafting page components, tables, forms, personal areas, and administration panels, ensuring a seamless user experience.</li>
      </ul>

      <h3><a
        href="https://adcombo.com/"
        target="_blank"
        rel="noreferrer">AdCombo</a> (2020 - 2021)</h3>
      <p>At AdCombo, a company specializing in marketing page development, my responsibilities as a Frontend Developer encompassed:</p>
      <ul>
        <li>Designing and implementing numerous engaging landing pages to meet client requirements.</li>
        <li>Diligently resolving issues and enhancing the performance of existing templates, ensuring optimal functionality and user satisfaction.</li>
      </ul>
    </Info>
  )
}
