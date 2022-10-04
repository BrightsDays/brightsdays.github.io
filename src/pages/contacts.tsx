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
        Fastest way to communicate with me is a messengers
        - <a 
          href="https://t.me/brightsdays" 
          target="_blank" 
          rel='noreferrer'>
            Telegram</a> or <a 
          href="https://api.whatsapp.com/send/?phone=995591100321" 
          target="_blank" 
          rel='noreferrer'>WhatsApp</a>.
      </p>
      <p>You also can send me a letter 
        to <a 
          href="mailto:brightsdayss@mail.com" 
          target="_blank" 
          rel='noreferrer'>brightsdayss@gmail.com</a>, 
        I check it at regular.</p>
      <p>And of course social networks:</p>
      <ul>
        <li>- <a
          href="https://www.linkedin.com/in/brightsdays/" 
          target="_blank" 
          rel='noreferrer'>Linkedin</a></li>
        <li>- <a
          href="https://www.facebook.com/brightsdays/" 
          target="_blank" 
          rel='noreferrer'>Facebook</a></li>
        <li>- <a
          href="https://www.instagram.com/brightsdays" 
          target="_blank" 
          rel='noreferrer'>Instagram</a></li>
      </ul>
    </Info>
  )
}

export default Contacts