import React from 'react'

import PurplePaw from "../images/purple-paw-2.png";
import ScreenShot from "../images/screnshot.png";


const KishuSwap = ()=>{

    return(<div>
  <section
            id="kishu-swap"
            data-w-id="aaf63f67-334b-e352-4558-ab85d636bd59"
            class="kishu-swap"
          >
            <div class="container-1800">
              <div class="section-heading is--swap">
                <div class="accent-large">Swap</div>
              </div>
              <div class="_2-col-grid is--swap">
                <div
                  id="w-node-_88bfb55d-1e28-bbc5-88fe-35f39f0986a2-52018772"
                  class="kishu-swap---text-container"
                >
                  <h5>DECENTRALIZED EXCHANGE</h5>
                  <h2>Kishu Swap</h2>
                  <p class="_w-520">
                    KISHU Swap is our official decentralized exchange (DEX). It
                    gives holders the ability to swap any ERC20 token for <br />
                    another one.
                    <br />
                    <br />
                    It is powered by Uniswap, the safest and most trusted DEX in
                    the world. Furthermore, it acts as the foundation from which
                    we will build additional features and functionality
                    exclusive to KISHU holders.
                  </p>
                  <a
                    href="https://exchange.kishu.com/#/swap?inputCurrency=ETH&amp;outputCurrency=0xa2b4c0af19cc16a6cfacce81f192b024d625817d"
                    target="_blank"
                    class="cta-button red-button w-button"
                  >
                    OPEN KISHU SWAP
                  </a>
                </div>
                <div
                  data-w-id="144a6b52-a9d9-1231-1db6-5ffa2cee27cf"
                  class="purple-paw-wrapper"
                >
                  <img
                    src={PurplePaw}
                    loading="lazy"
                    width="837"
                    sizes="(max-width: 767px) 100vw, (max-width: 1919px) 46vw, 100vw"
                    srcset={PurplePaw}
                    alt=""
                    class="purple-paw"
                  />
                  <img
                src={ScreenShot}
                // url('./images/screnshot.png')
                loading="lazy"
                alt=""
                class="kishu-swap-screenshot"
              />
                  {/* <Parallax ref={parallax}>
                    <ParallaxLayer
                      offset={1.3}
                      speed={-0.3}
                      style={{ pointerEvents: "none" }}
                    >
                      <img
                        src={ScreenShot}
                        style={{ width: "15%", marginLeft: "70%" }}
                      />
                    </ParallaxLayer>
                  </Parallax> */}
                </div>
              </div>
            </div>
          </section>
    </div>)
}

export default KishuSwap