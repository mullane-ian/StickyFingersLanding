import "./styles.css";

import LocomotiveScroll from "locomotive-scroll";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import lolli from './lolli.png'
import SimpleForm from './components/subscribe/MailchimpSubscribe'

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

  useEffect(() => {
    // Clamps a value between an upper and lower bound
    const clamp = (num, min, max) =>
      num <= min ? min : num >= max ? max : num;

    // Map number x from range [a, b] to [c, d]
    const map = (x, a, b, c, d) =>
      clamp(((x - a) * (d - c)) / (b - a) + c, Math.min(c, d), Math.max(c, d));
    // initialize Splitting
    const splitting = Splitting();

    // initialize Locomotive Scroll
    const lscroll = new LocomotiveScroll({
      // el: document.querySelector(".data-scroll-container"),
      el: r.current,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true }
    });

    lscroll.update();
    // keep track of the previous and current scroll values
    let scroll = { cache: 0, current: 0 };

    // Locomotive Scroll event
    lscroll.on("scroll", (obj) => {
      scroll.current = obj.scroll.y;
      const distance = scroll.current - scroll.cache;
      scroll.cache = scroll.current;
      // translation value will be mapped in the interval of [-50,50] for a scroll distance of [150,-150]
      const translateY = map(distance, 150, -150, -50, 50);
      // for every word from the splitting object...
      for (const [i, word] of splitting.entries()) {
        // total number of characters for this word
        const charsTotal = word.chars.length;
        // for every char from each word...
        for (const [j, char] of word.chars.entries()) {
          // we want the middle chars to have a higher translationY value so it gives the illusion the word is bending
          const factor =
            j < Math.ceil(charsTotal / 2)
              ? j
              : Math.ceil(charsTotal / 2) -
                Math.abs(Math.floor(charsTotal / 2) - j) -
                1;
          char.style.transform = `translate3d(0,${factor * translateY}px,0)`;
        }
      }
    });
  }, [r]);
  // return (
  //   <Main ref={r} className="data-scroll-container" data-scoll-container>
  //     {[
  //       ["https://source.unsplash.com/kR6T9Z50jso", "Sticky Fingers", "A new way to medicate"],
  //       ["https://source.unsplash.com/dG9fUG0Jpos", "About", "A new way to medicate"],
  //       ["https://source.unsplash.com/D6Eh6GUqMXU", "Where to buy", "Denali Cannabis"],
  //       ["https://source.unsplash.com/dG9fUG0Jpos", "Contact Us", "Get connected with us !"]

  //     ].map((i, k) => (
  //       <Content key={k}>
  //         <B>
  //           <Img src={i[0]} data-scroll data-scroll-speed="1.5" />
  //         </B>
  //         <Text data-splitting="">{i[1]}</Text>
  //         <img src={lolli}  style={{transform:'translateY(-170px)',margin: 'auto', gridArea: '2 / 1 / 2 / 2'}}/>
  //         <Text1 >{i[2]}</Text1>
  
  //         {k>2?
  //           <div className="MyForm">
  //         {" "}
  //         <SimpleForm />
  //         </div> :
  //           <span></span>

  //         }

  //       </Content>
  //     ))}
  //   </Main>
  // );
  return (
    <Main ref={r}   className="data-scroll-container" data-scoll-container>
  
        <Content className="page1">
            <B>
              <Img src={"https://source.unsplash.com/kR6T9Z50jso"} data-scroll data-scroll-speed="1.5" />
            </B>
            <Text data-splitting="">STICKY FINGERS</Text>
            <img src={lolli}  />
            <Text1 >A new way to medicate</Text1>
        </Content>

        <Content  className="page2">
            
            
        <Text data-splitting="">ABOUT</Text>
          
            <B1>
            <Img src={"https://source.unsplash.com/dG9fUG0Jpos"} data-scroll data-scroll-speed="1.5" />

            </B1>
            <Text1 >Sticky fingers is bringing a carnival vibe to edibles.</Text1>
        </Content>

        <Content  className="page3">
        <Text1 >
            Denali Cannabis
            Oakdale
            Cotton Mouth
            </Text1>
            <B>
              <Img src={"https://source.unsplash.com/D6Eh6GUqMXU"} data-scroll data-scroll-speed="1.5" />
            </B>

            <Text data-splitting="">Find our products!</Text>
           
 
        </Content>

        <Content  className="page4">
            <B>
              <Img src={"https://source.unsplash.com/dG9fUG0Jpos"} data-scroll data-scroll-speed="1.5" />
            </B>
            <Text data-splitting="">Contact Us</Text>
            <img src={lolli}  />

            <div className="MyForm">
            {" "}
            <SimpleForm />
          </div>

      
        </Content>
    </Main>
  );
};

export default function App() {
  return <Thing />;
}
