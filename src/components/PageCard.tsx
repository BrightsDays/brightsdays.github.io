import Image from 'next/image'
import profileImage from '../../public/vivanov.jpg'
import telegram from '../../public/telegram.svg'
import mail from '../../public/mail.svg'
import instagram from '../../public/instagram.svg'
import github from '../../public/github.svg'
import sun from '../../public/sun.svg'
import moon from '../../public/moon.svg'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme, getThemeState } from '../store/themeSlice'
import { useEffect } from 'react'
import { useDarkMode } from 'use-dark-mode-ts'

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
  @media (max-width: 499px) {
    padding: 0;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  position: fixed;
  flex: 0 0 40px;
  width: 290px;
  height: 290px;
  img {
    border-radius: 50%;
  }
  @media (max-width: 1059px) {
    position: relative;
    width: 40px;
    height: 40px;
  }
`

const Social = styled.div`
  display: flex;
  position: fixed;
  top: 350px;
  width: 290px;
  justify-content: space-between;
  list-style: none;
  @media (max-width: 1059px) {
    position: static;
    width: 200px;
  }
`

const SocialItem = styled.a`
  display: inline-block;
  width: 60px;
  height: 60px;
  transition: opacity 0.6s;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 30px;
  &:hover, &:focus, &:active {
    opacity: 0.5;
  }
  @media (max-width: 1059px) {
    width: 40px;
    height: 40px;
  }
`

const ThemeToggler = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-appearance: none;
  -moz-appearance: none;
  z-index: 1;
  cursor: pointer;
  @media (max-width: 1059px) {
    width: 40px;
    height: 40px;
    right: -50px;
  }
`

const PageCard = () => {
  const isDarkMode = useDarkMode()
  const dispatch = useDispatch()
  const { theme } = useSelector(getThemeState)
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

  useEffect(() => {
    const localTheme = localStorage.getItem('bd-theme')

    if (localTheme) {
      localTheme === 'light' ? dispatch(setTheme('light')) : dispatch(setTheme('dark'))
    } else {
      !isDarkMode ? dispatch(setTheme('light')) : dispatch(setTheme('dark'))
    }
  }, [dispatch, isDarkMode])
  
  const onClick = () => {
    localStorage.setItem('bd-theme', theme === 'dark' ? 'light' : 'dark')
    dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'))
  }

  const linkList = links.map((link, index) =>
    <SocialItem
      key={`url_${index}`}
      href={link.url}
      title={link.title}
      target={link.target}
      style={{ backgroundImage: `url(${link.image.src})` }}
    />
  )

  const togglerImage = theme === 'dark'
    ? sun
    : moon

  return (
    <Card>
      <ImageWrapper>
        <ThemeToggler
          style={{ backgroundImage: `url(${togglerImage.src})` }}
          onClick={onClick}
          aria-label='theme-toggler'
        />
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