import React from 'react'
import './about.css'

import img from '../../assets/mountain.png'
import img2 from '../../assets/hiking.png'
import img3 from '../../assets/costumer4.png'

import video from '../../assets/video.mp4'

const About = () => {
  return (
    <section className='about' section>
      <div className='secContainer'>
        <h2 className='title'>
          why hiking?
        </h2>

        <div className='mainContent container grid'>
          <div className='singleItem'>
            <img src={img}alt='image name'/>

            <h3>100+ mountain</h3>

            <p>Dari puncak gunung yang menawarkan pemandangan luar biasa hingga jalur pendakian yang membawa Anda melewati keindahan alam yang belum terjamah, pengalaman
               mendaki bersama kami akan menjadi kenangan yang tak terlupakan.</p>
          </div>

          <div className='singleItem'>
            <img src={img2}alt='image name'/>

            <h3>300+ hiking</h3>

            <p>Dari pendaki pemula hingga yang berpengalaman, kami menawarkan berbagai rute yang sesuai dengan kemampuan dan keinginan Anda.
               Bersama-sama, kita menikmati keindahan alam, mencapai puncak, dan membuat kenangan indah di setiap langkah.</p>
          </div>

          <div className='singleItem'>
            <img src={img3}alt='image name'/>

            <h3>1000+ costumer</h3>

            <p>Dari awal hingga akhir perjalanan, tim kami siap membantu Anda dengan segala kebutuhan dan memastikan bahwa petualangan Anda berjalan lancar dan menyenangkan. Terima kasih telah menjadi bagian dari komunitas petualang kami!</p>
          </div>

        </div>

        <div className='videoCard container'>
          <div className='cardContent grid'>

            <div className='cardText'>
              <h2>wonderful house experience nin there!</h2>
              <p>lorem ipsum color sit amet walawe</p>
            </div>

            <div className='cardVideo'>
              <video src={video} autoPlay loop muted typeof='video/mp4'></video>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
