import React from 'react';
import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'

const gameListData = [
  {
    url: "https://www.twitch.tv/directory/game/Fortnite",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/33214-188x250.jpg",
    alt: "Imagem do jogo Fortnite"
  },
  {
    url: "https://www.twitch.tv/brawlhalla",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/460316_IGDB-188x250.jpg",
    alt: "Imagem do jogo Brawlhalla"
  },
  {
    url:
      "https://www.twitch.tv/directory/game/Fortnitehttps://www.twitch.tv/directory/game/Fall%20Guys",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/512980-188x250.jpg",
    alt: "Imagem do jogo Fall Guys"
  }
];

const channelListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Maykbrito"
  },
  {
    ulr: "https://www.twitch.tv/maiconkusterkay",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/7c6e7287-68fe-40a2-93a7-f6496aee92c8-profile_image-150x150.png",
    alt: "Imagem de MaiconKuster"
  },
  {
    url: "https://www.twitch.tv/paulinholokobr",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/d96bbd7a-26e5-4c5e-b6a5-149d708a973b-profile_image-150x150.png",
    alt: "Imagem de PaulinhoLOKObr"
  },
  {
    url: "https://www.twitch.tv/gdsandstorm",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/eb957934-f430-42ef-875e-3ba52b512a1d-profile_image-150x150.png",
    alt: "Imagem de Gdsandstorm"
  }
];

const socialListData = [
  {
    url: "https://www.twitch.tv/dollyvader",
    imageUrl: "./assets/twitch.svg",
    alt: ""
  },
  {
    url: "https://twitter.com/DollyVader",
    imageUrl: "./assets/twitter.svg",
    alt: ""
  },
  {
    url: "https://www.instagram.com/renanduarts/",
    imageUrl: "./assets/instagram.svg",
    alt: ""
  },
  {
    url: "https://www.youtube.com/channel/UCfKa2tLcWADbgSqy-u7AkYA",
    imageUrl: "/assets/youtube.svg",
    alt: ""
  },
  {
    url: "https://www.linkedin.com/in/renan-duarte-166402141/",
    imageUrl: "./assets/linkedin.svg",
    alt: ""
  }
];

export default function App() {
  return (
    <div className="App">
      <Header />

      <main>
      
        <Section
          title="MeusJogos"
          subtitle="Os games que eu mais curto jogar"
          className="game-list"
        >
          
          <>
         <Swiper
         slidesPerView={2}
        loop={true}
        autoHeight="true"
        className="mySwiper"
        breakpoints={{380: {
            width: 380,
            slidesPerView: 3,
            className:'mySwiper',
            autoHeight:'true',
            spaceBetween:0,

          }}}
        >
          {gameListData.map(function (item) {
            return (
            <SwiperSlide>
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            </SwiperSlide>
            );
          })}
          </Swiper>
          </>
           
        </Section>
        
        <Section
          title="Canais e Streamers"
          subtitle="Lista de canais e transmissões que não perco"
          className="channel-list"
        >
             <>
         <Swiper
         slidesPerView={2}
        loop={true}
        autoHeight="true"
        className="mySwiper"
        breakpoints={{380: {
            width: 380,
            slidesPerView: 3,
            className:'mySwiper',
            autoHeight:'true',
            spaceBetween:0,

          }}}
        >
          {channelListData.map(function (item) {
            return (
              <SwiperSlide>
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
              </SwiperSlide>
            );
          })}
          </Swiper>
          </>
        </Section>
          
        <Section
          title="Minhas redes sociais"
          subtitle="Conecte-se comigo agora mesmo!"
          className="social-list"
        >
          {socialListData.map(function (item) {
            return <ListItem url={item.url} imageUrl={item.imageUrl} />;
          })}
        </Section>
      </main>
    </div>
  );
}