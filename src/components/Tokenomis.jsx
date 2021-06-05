import React  ,{useState} from 'react'

import floatingElement from '../images/floating-elements.png'
import EllipseImage from "../images/Ellipse-1-copy-7.png";
import Shape8 from "../images/Shape-8-copy.png";
import ScrollAnimation from "react-animate-on-scroll";
import V1big from "../images/v1big.gif";
import V1BigBackground from "../images/instant-rewards---background-no-kishu.png";
import ShiningStart from "../images/shining-stars-.png";
import Eyeglasses from "../images/eyeglasses-kishu.png";
import christianlinge from './Images/christianlinge-three-characters.png'
const Tokenomics = ()=>{

  const [animation, setAnimation] = useState(false);

    return(<div>
 <section id="stats" class="stats">
            <div class="container-1800">
              <div class="section-heading is--stats">
                <div class="accent-large">Stats</div>
                <h2 class="h2-what-is-kishu">Tokenomics &amp; Stats</h2>
              </div>
              <div
                data-w-id="b83854f4-0edc-97bf-60d8-a3002264f569"
                class="stats-scrolling-container"
              >
                <div
                  class="_2-col-grid bottom-padding is--sticky"
                  id="scrolly-div"
                >
                  <div
                    id="w-node-b83854f4-0edc-97bf-60d8-a3002264f56b-52018772"
                    class="left-col"
                  >
                    <div
                      data-w-id="bbec4ffd-9457-b4fd-d633-2fb6ea1e88f5"
                      class="tokenomics-image"
                    >
                      <img
                        src={christianlinge}
                        loading="lazy"
                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, (max-width: 1919px) 46vw, 43vw"
                        srcset={christianlinge}
                        alt=""
                        class="eyeglasses-kishu"
                      />
                      <div class="floating-elements-container"></div>
                      <img
                        src={floatingElement}
                        loading="lazy"
                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, 46vw"
                        srcset={floatingElement}
                        alt=""
                        class="image-20"
                      />
                    </div>
                    <div class="tokenomics-image _2">
                      <img
                        src={christianlinge}
                        loading="lazy"
                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, (max-width: 1919px) 46vw, 43vw"
                        srcset={christianlinge}
                        alt=""
                        class="eyeglasses-kishu"
                      />
                      <div class="floating-elements-container">
                        <img
                          src={EllipseImage}
                          loading="lazy"
                          alt=""
                          class="image-9"
                        />
                        <img
                          src={Shape8}
                          loading="lazy"
                          alt=""
                          class="image-10"
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div id="" class="right-col">
                   
                   
                    {
                       animation == false ?
                  
                     <ScrollAnimation
                        id="condition"
                        animateIn="fadeIn"
                        animateOut="fadeOut"
                        afterAnimatedIn={function afterAnimatedOut(v) {
                        

                          var t = "Animate In finished.\n";
                          t += "v.onScreen: " + v.onScreen + "\n";
                          t += "v.inViewport: " + v.inViewport;

                          setAnimation(true)
                          console.log(animation)
                        }}
                      >
                        <div
                        
                          data-w-id="f260eb35-8ea4-0380-4a92-2422d676718f"
                          class="animate__animated animate__fadeInDown tokenomics-text-item"
                        >
                          <div class="flex-vertical">
                            <h3 class="red is--tokenomics">$KISHU</h3>
                            <h5 class="gray">TOKEN SYMBOL</h5>
                          </div>
                          <div class="flex-vertical centered">
                            <h3 class="red is--tokenomics">2% Rewards</h3>
                            <h5 class="gray">PER TRANSACTION</h5>
                          </div>
                          <div class="flex-vertical">
                            <h3 class="red is--tokenomics">100 Quadrillion</h3>
                            <h5 class="gray">TOTALY SUPPLY</h5>
                          </div>
                        </div>
                      </ScrollAnimation>
                   
                  
                  
                  
                   :  animation == true ? (

                      <ScrollAnimation
                      // id="condition"
                      animateIn="fadeIn"
                      deplay={1000}
                    
                      animationOut="fadeOut"
                      afterAnimatedIn={function afterAnimatedOut(v) {
                         

                        var t = "Animate In finished.\n";
                        t += "v.onScreen: " + v.onScreen + "\n";
                          t += "v.inViewport: " + v.inViewport;
                          // document.getElementById('conditon').style.display ="none"
                          // alert(t);
                          setAnimation(false)
                          console.log(animation);
                        }}
                        >
                        <div
                          id="price-chart"
                          data-w-id="911dc789-cd8c-3157-6ceb-b918bd87e7db"
                          class="tokenomics-text-item"
                          >
                          <div class="flex-vertical">
                            <h3 id="holders" class="red is--tokenomics">
                              145.000+
                            </h3>
                            <h5 class="gray">HOLDERS</h5>
                          </div>
                          <div class="flex-vertical centered">
                            <h3 id="marketcap" class="red is--tokenomics">
                              500+ Millions $
                            </h3>
                            <h5 class="gray">MARKET CAP</h5>
                          </div>
                          <div class="flex-vertical">
                            <h3 id="price" class="red is--tokenomics">
                              $0.000000005
                            </h3>
                            <h5 class="gray">CURRENT PRICE</h5>
                            <a
                              href="https://www.coingecko.com/en/coins/kishu-inu"
                              target="_blank"
                              class="link"
                              >
                              Price Chart
                            </a>
                          </div>
                        </div>
                     </ScrollAnimation>
                       )  : setAnimation(true) }
                    {/* )} */}
                  </div>
                </div>
              </div>
            </div>

            {/* 


            <div
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos="fade-up"
            onScroll={changeTheText}
            >
            <div class="_2-col-grid bottom-padding is--sticky">
              <div
                id="w-node-_4d01e470-0316-6366-bff1-e94ed46148b2-52018772"
                class="left-col"
              >
                <div
                  data-w-id="33305f40-759f-5b1c-d56f-046096d6bea0"
                  class="why-kishu-image"
                >
                  <img
                    src={Eyeglasses}
                    loading="lazy"
                    width="772"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, 46vw"
                    srcset={Eyeglasses}
                    alt=""
                    class="what-is-kishu-img"
                  />
                  <img
                    src={floatingElement}
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, (max-width: 1919px) 46vw, 32vw"
                    srcset={ShiningStart}
                    alt=""
                    class="shining-stars"
                  />
               
                </div>
              </div>

              <div
                data-aos="fade-up"
                id="w-node-bc539372-19b1-6802-b824-1e8e8666fcb6-52018772"
                class="right-col"
              >
                  <div
                id="w-node-b83854f4-0edc-97bf-60d8-a3002264f576-52018772"
                class="right-col"
           

              >
                <div
                  data-w-id="f260eb35-8ea4-0380-4a92-2422d676718f"
                  class="tokenomics-text-item"
                  data-aos="fade-up"
                  id="w-node-bc539372-19b1-6802-b824-1e8e8666fcb6-52018772"
                  class="right-col"
                >
                  <div class="flex-vertical">
                    <h3 class="red is--tokenomics">$KISHU</h3>
                    <h5 class="gray">TOKEN SYMBOL</h5>
                  </div>
                  <div class="flex-vertical centered">
                    <h3 class="red is--tokenomics">2% Rewards</h3>
                    <h5 class="gray">PER TRANSACTION</h5>
                  </div>
                  <div class="flex-vertical">
                    <h3 class="red is--tokenomics">100 Quadrillion</h3>
                    <h5 class="gray">TOTALY SUPPLY</h5>
                  </div>
                </div>
                <div
                  id="price-chart"
                  data-w-id="911dc789-cd8c-3157-6ceb-b918bd87e7db"
                  class="tokenomics-text-item"
                >
                  <div class="flex-vertical">
                    <h3 id="holders" class="red is--tokenomics">
                      145.000+
                    </h3>
                    <h5 class="gray">HOLDERS</h5>
                  </div>
                  <div class="flex-vertical centered">
                    <h3 id="marketcap" class="red is--tokenomics">
                      500+ Millions $
                    </h3>
                    <h5 class="gray">MARKET CAP</h5>
                  </div>
                  <div class="flex-vertical">
                    <h3 id="price" class="red is--tokenomics">
                      $0.000000005
                    </h3>
                    <h5 class="gray">CURRENT PRICE</h5>
                    <a
                      href="https://www.coingecko.com/en/coins/kishu-inu"
                      target="_blank"
                      class="link"
                    >
                      Price Chart
                    </a>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div> */}
          </section>
    </div>)
}

export default Tokenomics