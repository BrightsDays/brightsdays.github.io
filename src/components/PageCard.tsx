import Image from 'next/image'
import profileImage from '../../public/vivanov.jpg'
import telegram from '../../public/telegram.svg'
import mail from '../../public/mail.svg'
import instagram from '../../public/instagram.svg'
import github from '../../public/github.svg'
import styled from 'styled-components'

const Card = styled.div`
  position: relative;
  vertical-align: top;
  margin: 0 auto;
  width: 290px;
`

const CardImage = styled(Image)`
  display: block;
  width: 290px;
  height: 290px;
  border-radius: 50%;
`

const Social = styled.div`
  display: flex;
  justify-content: space-between;
  list-style: none;
`

const SocialItem = styled.a`
  display: inline-block;
  width: 60px;
  height: 60px;
  transition: opacity 0.6s;
  border-radius: 30px;
  margin: 12px 0 0 0;
  &:hover, &:focus, &:active {
    opacity: 0.5;
  }
`

const PageCard = () => {
  const links = [
    {
      title: 'Telegram',
      image: telegram,
      url: 'https://t.me/brightsdays',
      target: '_blank'
    },
    {
      title: 'Google Mail',
      image: mail,
      url: 'mailto:brightsdayss@mail.com',
      target: ''
    },
    {
      title: 'Instagram',
      image: instagram,
      url: 'https://www.instagram.com/brightsdays',
      target: '_blank'
    },
    {
      title: 'Github',
      image: github,
      url: 'https://github.com/BrightsDays',
      target: '_blank'
    }
  ]

  const LinkList = () => {
    return (
      links.map((link, index) =>
        <SocialItem
          key={`url_${index}`}
          href={link.url}
          title={link.title}
          target={link.target}
          style={{ background: `url(${link.image.src}) no-repeat` }}
        />
      )
    )
  }

  return (
    <Card>
      {/* <button onClick={changeColorMode()} /> */}
      <CardImage
        src={profileImage}
        alt="vivanov"
      />
      <Social>
        <LinkList />
      </Social>
    </Card>
  )
}

export default PageCard