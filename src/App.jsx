import react, { useRef, useState, useEffect } from 'react'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from 'react-image-gallery';

gsap.registerPlugin(ScrollTrigger);
import './App.css'
import logo from "./assets/logo.jpg"; 
import barber from "./assets/barber.jpg";
import seat from "./assets/seat.jpg";
import workplace from "./assets/workplace.jpg";
import cosmetics from "./assets/cosmetics.jpg";
import salon from "./assets/salon.jpg";
import bg from "./assets/bg.jpg"

import man1 from "./assets/man1.jpg"
import man2 from "./assets/man2.jpg"
import man3 from "./assets/man3.jpg"
import man4 from "./assets/man4.jpg"
import man5 from "./assets/man5.jpg"
import man6 from "./assets/man6.jpg"
import kid from "./assets/kid.jpg"
import man7 from "./assets/man7.jpg";
import man8 from "./assets/man8.jpg"

import instagram from "./assets/instagram.png"
import facebook from "./assets/facebook.png"

function App() {

  const refs = Array.from({ length: 4 }, () => useRef(null));
  const headerRef = useRef(null);
  const [active, setActive] = useState(false);
  const imageArr = [barber, seat, workplace, cosmetics, salon, bg];
  const galleryArr = [man2,man1,man3,man4,man5,man6, kid, man7, man8];
  const [index,setIndex] = useState(0);
  const [carouselFlag, setCarouselFlag] = useState(0);
  const scrollToRef = (index) => {
    setActive(false)
      if (refs[index].current) {
        refs[index].current.scrollIntoView({ behavior: 'smooth' });
      }
    
  }
  const handleCarouselNext = () => {
    setCarouselFlag(carouselFlag + 1);
    if(carouselFlag === galleryArr.length - 1) {
      setCarouselFlag(0);
    }
  }
  const handleCarouselPrev = () => {
    setCarouselFlag(carouselFlag -1)
    if(carouselFlag === 0 ) {
      setCarouselFlag(galleryArr.length - 1)
    }
  }
  const handleOnClick = (e) => {
    active ? setActive(false) : setActive(true)
  }


  useEffect(() => {

    gsap.fromTo(headerRef.current, {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top 80%', // Trigger when the top of the box hits 80% of the viewport height
        end: 'bottom 20%', // End when the bottom of the box hits 20% of the viewport height
        scrub: true 
      }
    });
    const updateIndex = () => {
      if(index < imageArr.length - 1) {
        setIndex(index + 1)

      } else {
        setIndex(0)
      }
    }
    const intervalId = setInterval(updateIndex, 5000);
    return () => clearInterval(intervalId)
  })
    const images = galleryArr.map(item => ({
      original: item,
      thumbnail: item
    }))
  return (
    <div className='container'>
      <img className="carousel" src={imageArr[index]} alt="background-photos" />
      <div className='mainPage'>
        <nav className='mobileNav'>
          <ul className='navList'>
            {/* hamburger */}
            <button className={active ? "hamburger burger--active" : "hamburger"} onClick={handleOnClick} >
              <span className='outerBurger'>
                <span className='innerBurger'></span>
              </span>
            </button>
          </ul>
        </nav>
        
        {/* hamburgerPopup */}
        <div className={active ? "hamburgerPopup popup--active" : "hamburgerPopup"}>
          <ul className='navElements'>
            <li onClick={() => scrollToRef(0)}>GALERIA</li>
            <li onClick={() => scrollToRef(1)}>UMÓW SIE</li>
            
          </ul>
          <ul className='socialElements'>
            <li>
              <a tabIndex={active ? "  " : "-1"} href="https://www.instagram.com/barbershop_pl/" target='_blank'>
                <button tabIndex={active ? "  " : "-1"}><img src={instagram} alt='insta icon' /></button>
              </a>
            </li>
            <li>
              <a tabIndex={active ? "  " : "-1"} href="https://www.facebook.com/tgbbarber" target='_blank'>
                <button tabIndex={active ? "  " : "-1"}><img src={facebook} alt='facebook icon' /></button>
              </a>
            </li>
          </ul>
        </div>
        
      </div>
      <div className='section'>
      <h1 ref={headerRef} className='sectionHeader'>The gentleman's barber</h1>
        </div>
     <div ref={refs[0]}className='gallerySection'>
      <h1 className='galleryHeader'>Galeria</h1>
        <div className='galleryCarouselOuter'
          
        >
        <button className='galleryBtn next' onClick={handleCarouselNext}>&gt;</button>
        <button className='galleryBtn prev' onClick={handleCarouselPrev}>&lt;</button>
          <div className='galleryInner'
          style={{
            transform:`translateX(${carouselFlag * -100}%)`
          }}>
            {galleryArr.map(element => {
              return(
                <img key={element} src={element}></img>
              )
            })}
          </div>
        </div>
     </div>
     <div ref={refs[1]}className='contactPage'>
      <div className='map'>
      <h1 className='contactHeader'>umów się</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.2293070747696!2d20.89457205093316!3d53.257388378469564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ddd35176660e3%3A0xede582d8517bd78!2sThe%20Gentleman&#39;s%20Barber%20Salon%20Fryzur%20M%C4%99skich!5e0!3m2!1spl!2spl!4v1718186150337!5m2!1spl!2spl" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='contactInfo'>
        <ul>
          <a href='tel:735-374-121'>+48 735 374 121</a>
          <li>pon: zamknięte</li>
          <li>wt-pt: 09:00-17:00</li>
          <li>sob: 09:00-15:00</li>
          <li>niedz: zamknięte</li>
        </ul>
      </div>
     </div>
            
      <div className='desktopWeb'>
        <nav className='desktopNav'>
          <h1 className='desktopLogo'>The gentleman's barber</h1>
          <ul className='desktopNavUl'>
            <li className="navElement" onClick={() => scrollToRef(2)}>GALERIA</li>
            <li className="navElement" onClick={() => scrollToRef(3)}>UMÓW SIĘ</li>
            <li>
              <a tabIndex={active ? "  " : "-1"} href="https://www.instagram.com/barbershop_pl/" target='_blank'>
                <button tabIndex={active ? "  " : "-1"}><img src={instagram} alt='insta icon' /></button>
              </a>
              <a tabIndex={active ? "  " : "-1"} href="https://www.facebook.com/tgbbarber" target='_blank'>
                <button tabIndex={active ? "  " : "-1"}><img src={facebook} alt='facebook icon' /></button>
              </a>
            </li>
            
          </ul>
        </nav>
        <div className='desktopLanding'>
          <img className="desktopCarousel" src={imageArr[index]} alt="background-photos" />
            <div className="floatingText2">
              <h1 className='landingHeroLogo'>Chorzele, Mostowa 4</h1>
            </div>

        </div>
        <div ref={refs[2]}className='desktopGallery'>

            <div className="custom-gallery-wrapper">
              <ReactImageGallery 
                className="desktopGalerryInner" 
                items={images}
                showThumbnails={false}

                ></ReactImageGallery>
            </div>

        </div>
      <div ref={refs[3]}className='visitPage'>
        <img  className="visitLogoImg" src={logo} alt="logo"></img>
        <h1 className="visitPageHeader">umów się</h1>
        <div className='visitWrapper'>
          <div className='mapContainer'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.2293070747696!2d20.89457205093316!3d53.257388378469564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ddd35176660e3%3A0xede582d8517bd78!2sThe%20Gentleman&#39;s%20Barber%20Salon%20Fryzur%20M%C4%99skich!5e0!3m2!1spl!2spl!4v1718186150337!5m2!1spl!2spl" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
            <ul className='hoursInfo'>
              <a href='tel:735-374-121'>+48 735 374 121</a>
              <li>pon: zamknięte</li>
              <li>wt-pt: 09:00-17:00</li>
              <li>sob: 09:00-15:00</li>
              <li>niedz: zamknięte</li>
            </ul>
        </div>
            
      </div>
    </div>
    </div>

  )
}


export default App
