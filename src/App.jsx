import "./styles.scss";

import LocomotiveScroll from "locomotive-scroll";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import lolli from './lolli.png'
import logo from '/logo.png'
import SimpleForm from './components/subscribe/MailchimpSubscribe'
import skeleton from '/skeleton.png'
import candy from '/candy.png'
import NavBar from './components/nav/NavBar'

const Main = styled("main")``;

const Content = styled("div")`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
`;



const B = styled("div")`
  height: 65%;
  max-width: 600px;
  margin: 0 auto;
  grid-area: 1 / 1 / 2 / 2;
`;
const B1 = styled("div")`
  height: 55%;
  max-width: 400px;
  margin: 0 auto;
  
`;

const Img = styled("img")`
  will-change: transform;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 10px solid #bde0fe;
  border-radius: 50px;
`;


const Text = styled("h2")`
  font-size: 8vw;
  grid-area: 1 / 1 / 2 / 2;
  text-align: center;
  color: #f7f7f7;
  z-index: 10;
`;

const Text1 = styled("p")`
  font-size: 5vw;
  width: 50vw;
  text-align: center;
  color: #f7f7f7;
  z-index: 10;
`;



const Thing = (props) => {
  const r = useRef();

  // useEffect(() => {
  //   // Clamps a value between an upper and lower bound
  //   const clamp = (num, min, max) =>
  //     num <= min ? min : num >= max ? max : num;

  //   // Map number x from range [a, b] to [c, d]
  //   const map = (x, a, b, c, d) =>
  //     clamp(((x - a) * (d - c)) / (b - a) + c, Math.min(c, d), Math.max(c, d));
  //   // initialize Splitting
  //   const splitting = Splitting();

  // //   // initialize Locomotive Scroll
  // //   const lscroll = new LocomotiveScroll({
  // //     // el: document.querySelector(".data-scroll-container"),
  // //     el: r.current,
  // //     smooth: true,
  // //     smartphone: { smooth: true },
  // //     tablet: { smooth: true }
  // //   });

  // //   lscroll.update();
  // //   // keep track of the previous and current scroll values
  // //   let scroll = { cache: 0, current: 0 };

  // //   // Locomotive Scroll event
  // //   lscroll.on("scroll", (obj) => {
  // //     scroll.current = obj.scroll.y;
  // //     const distance = scroll.current - scroll.cache;
  // //     scroll.cache = scroll.current;
  // //     // translation value will be mapped in the interval of [-50,50] for a scroll distance of [150,-150]
  // //     const translateY = map(distance, 150, -150, -50, 50);
  // //     // for every word from the splitting object...
  // //     for (const [i, word] of splitting.entries()) {
  // //       // total number of characters for this word
  // //       const charsTotal = word.chars.length;
  // //       // for every char from each word...
  // //       for (const [j, char] of word.chars.entries()) {
  // //         // we want the middle chars to have a higher translationY value so it gives the illusion the word is bending
  // //         const factor =
  // //           j < Math.ceil(charsTotal / 2)
  // //             ? j
  // //             : Math.ceil(charsTotal / 2) -
  // //               Math.abs(Math.floor(charsTotal / 2) - j) -
  // //               1;
  // //         char.style.transform = `translate3d(0,${factor * translateY}px,0)`;
  // //       }
  // //     }
  // //   });
  // // }, [r]);


  const [status, setStatus] = useState(false);
  const burger = useRef()
  let className = !status? 'menu-btn close' : 'menu-btn open'
  const openMenu = () => {
    setStatus(status => !status)
     className = !status? 'menu-btn close' : 'menu-btn open'
  }
  return (
    <Main ref={r}   className="data-scroll-container" data-scoll-container>
      <NavBar show={status} />
      <div  ref={burger} className={className} onClick={openMenu}>
        <div class="menu-btn__burger" ></div>
      {/* <button className="Button" onClick={() => setStatus(status => !status)}>
        Menu
      </button> */}

      </div>
               
        <Content className="page1"  onClick={() => setStatus(status => !status)}>
            {/* <B>
              <Img src={"https://source.unsplash.com/kR6T9Z50jso"} data-scroll data-scroll-speed="1.5" />
            </B> */}
            {/* <Text data-splitting="">STICKY FINGERS</Text> */}
            <img className="logo" src={logo} alt=""  />
            {/* <img src={lolli}  /> */}
            <Text1 className="main-line" >A new way to medicate</Text1>
        </Content>

        <Content  className="page2" id="about">
            
            
        <Text data-splitting="">ABOUT</Text>
          
            <B1>
            <Img src={skeleton} data-scroll data-scroll-speed="1.5" />

            </B1>
            <Text1 >Sticky fingers is bringing a carnival vibe to edibles.</Text1>
        </Content>

        <Content  className="page3" id="purchase">
        <Text1 >
          <a className="dispos-link" href="https://denalicannabis.com" target='_blank'>
          Denali Cannabis
          </a>
            <br />
            <a className="dispos-link" href="https://denalicannabis.com" target='_blank'>
          Denali Cannabis
          </a>
            <br />
            <a className="dispos-link" href="https://denalicannabis.com" target='_blank'>
          Denali Cannabis
          </a>
          <br />

         
            </Text1>
            <B>
              <Img src={candy} data-scroll data-scroll-speed="1.5" />
            </B>

            <Text data-splitting="">Find our products!</Text>
           
 
        </Content>

        <Content  className="page4" id="contact">
            <B>
              <Img src={"https://source.unsplash.com/dG9fUG0Jpos"}  />
            </B>
            <div className="contact-container">
              <Text data-splitting="">Contact Us</Text>
              <a className="sticky-contact" href='tel+719-678-9305'>Phone : <span>719-678-9305</span></a>
              <a className="sticky-contact" href="mailto:contact@stickyfingers.com">Email : <span>contact@stickyfingers.com</span></a>


            </div>
            
            <div className="my-form-container">
            <h1 className="mailing-list-header">Join our mailing list!</h1>

              <div className="MyForm">
                {" "}
                <SimpleForm />
              </div>
              <img className='mailing-lolli' src={lolli}  />

            </div>


      
        </Content>
    </Main>
  );
};

export default function App() {
  return <Thing />;
}
