import Image from 'next/image'
import profileImage from '../../public/vivanov.jpg'
import telegram from '../../public/telegram.svg'
import mail from '../../public/mail.svg'
import instagram from '../../public/instagram.svg'
import github from '../../public/github.svg'
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 20px;
  vertical-align: top;
  margin: 0 auto;
  width: 290px;
  @media (max-width: 1059px) {
    width: 100%;
    max-width: 720px;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 10px;
    gap: 10px;
  }
  @media (max-width: 374px) {
    justify-content: space-around;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  position: fixed;
  flex: 0 0 60px;
  width: 290px;
  height: 290px;
  img {
    border-radius: 50%;
  }
  @media (max-width: 1059px) {
    position: static;
    width: 60px;
    height: 60px;
  }
  @media (max-width: 374px) {
    display: none;
  }
`

const Social = styled.div`
  display: flex;
  position: fixed;
  top: 340px;
  width: 290px;
  justify-content: space-between;
  list-style: none;
  @media (max-width: 1059px) {
    position: static;
  }
`

const SocialItem = styled.a`
  display: inline-block;
  width: 60px;
  height: 60px;
  transition: opacity 0.6s;
  border-radius: 30px;
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

  const linkList = links.map((link, index) =>
    <SocialItem
      key={`url_${index}`}
      href={link.url}
      title={link.title}
      target={link.target}
      style={{ background: `url(${link.image.src}) no-repeat` }}
    />
  )

  return (
    <Card>
      {/* <button onClick={changeColorMode()} /> */}
      <ImageWrapper>
        <Image
          src={profileImage}
          alt="vivanov"
        />
      </ImageWrapper>
      <Social>
        { linkList }
      </Social>
    </Card>
  )
}

export default PageCard