import Info from '../styles/Info'
import Head from 'next/head'

const Contacts = () => {
  return (
    <Info>
      <Head>
        <title>BrightsDays - contacts</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Contacts</h1>
      <p>
        The quickest way to reach me is through messaging apps 
        like <a 
          href="https://t.me/brightsdays" 
          target="_blank" 
          rel='noreferrer'>
            Telegram</a> or <a 
          href="https://api.whatsapp.com/send/?phone=995591100321" 
          target="_blank" 
          rel='noreferrer'>WhatsApp</a>.
      </p>
      <p>Feel free to drop me an email 
        at <a 
          href="mailto:brightsdayss@mail.com" 
          target="_blank" 
          rel='noreferrer'>brightsdayss@gmail.com</a>;
        I check it regularly.</p>
      <p>You can also connect with me on various social networks:</p>
      <ul>
        <li><a
          href="https://www.linkedin.com/in/brightsdays/" 
          target="_blank" 
          rel='noreferrer'>Linkedin</a></li>
        <li><a
          href="https://www.facebook.com/brightsdays/" 
          target="_blank" 
          rel='noreferrer'>Facebook</a></li>
        <li><a
          href="https://www.instagram.com/brightsdays" 
          target="_blank" 
          rel='noreferrer'>Instagram</a></li>
        <li><a
          href="https://www.github.com/brightsdays" 
          target="_blank" 
          rel='noreferrer'>Github</a></li>
      </ul>
      <p>I look forward to connecting with you!</p>
    </Info>
  )
}

export default Contacts