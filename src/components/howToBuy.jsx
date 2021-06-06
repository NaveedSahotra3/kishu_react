import React, { useEffect, useState } from "react";
import LogoExchange from "./logoExchange.png";
import Ki_facer from "../images/ki-facer-1.png";
import ShapeThree from "../images/Shape-3.png";
import FireBee from "../images/frisbee.png";
import ShapeBehind from "../images/htb-shape-behind-number.png";
import Shape4 from "../images/Shape-4.png"


const HowToBuy = () => {

  const [isMobile, setMobile] = useState(false)
  const [section, setSection] = useState(1)
  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobile(true)
    }
  }, [])

  return (
    <div>
      <section
        id="how-to-buy"
        data-w-id="79154066-a6be-0e91-28f5-f2df3abf15d2"
        class="how-to-buy"
      >
        <div class="container-1800 " style={{ marginTop: "30px" }}>
          <div class="section-heading">
            <h2 class="h2-what-is-kishu">How to buy $Kishu</h2>
            <div class="accent-large">Buy</div>
          </div>
          <div
            data-w-id="8a60e5e9-f138-7430-05c7-8063c205bff1"
            data-animation-type="lottie"
            data-src="./documents/frisbee-dog.json"
            data-loop="0"
            data-direction="1"
            data-autoplay="0"
            data-is-ix2-target="1"
            data-renderer="canvas"
            data-default-duration="2.0020019204587935"
            data-duration="0"
            class="lottie-animation-2"
          ></div>
          <div class="dog-frisbee-wrapper">
            <div
              id="w-node-_82d26454-4b9c-a99d-09e5-0cacf9e7004a-52018772"
              data-w-id="82d26454-4b9c-a99d-09e5-0cacf9e7004a"
              class="frisbee-wrapper"
            >
              <img
                src={FireBee}
                loading="lazy"
                width="1338"
                sizes="100vw"
                srcset={FireBee}
                alt=""
                class="image-3"
              />
              <img src={Shape4} loading="lazy" alt="" class="image-4" />
            </div>
            <div
              id="w-node-_7c27231e-b663-e33d-3c65-9b4ead67e582-52018772"
              data-w-id="7c27231e-b663-e33d-3c65-9b4ead67e582"
              class="dog-wrapper"
            >
              <img
                src={Ki_facer}
                loading="lazy"
                width="515"
                sizes="100vw"
                srcset={Ki_facer}
                alt=""
                class="image-5"
              />
              <img
                src={ShapeThree}
                loading="lazy"
                sizes="100vw"
                srcset={ShapeThree}
                alt=""
                class="image-6"
              />
            </div>
          </div>
          <div class="htbs-wrapper">
            <div
              data-duration-in="300"
              data-duration-out="100"
              class="tabs w-tabs"
            >
              <div class="tabs-menu w-tab-menu">
                <a
                  data-w-tab="Tab 1"
                  class={section == 1 ? "htb-tab w-inline-block w-tab-link w--current" : "htb-tab w-inline-block w-tab-link"}
                  onClick={() => setSection(1)}
                >
                  <h6 class="htb-tab">STEP 1</h6>
                </a>
                <a
                  data-w-tab="Tab 2"
                  class={section == 2 ? "htb-tab w-inline-block w-tab-link w--current" : "htb-tab w-inline-block w-tab-link"}

                  onClick={() => setSection(2)}
                >
                  <h6 class="htb-tab">STEP 2</h6>
                </a>
                <a
                  data-w-tab="Tab 3"
                  class={section == 3 ? "htb-tab w-inline-block w-tab-link w--current" : "htb-tab w-inline-block w-tab-link"}

                  onClick={() => setSection(3)}
                >
                  <h6 class="htb-tab">STEP 3</h6>
                </a>
                <a
                  data-w-tab="Tab 4"
                  class={section == 4 ? "htb-tab w-inline-block w-tab-link w--current" : "htb-tab w-inline-block w-tab-link"}

                  onClick={() => setSection(4)}
                >
                  <h6 class="htb-tab">STEP 4</h6>
                </a>
              </div>
              <div class="tabs-content w-tab-content">
                {section == 1 && (
                  <div data-w-tab="Tab 1" class=" w--tab-active">
                    <div class="htb-item">
                      <div class="htb-number">
                        <img
                          src={ShapeBehind}
                          loading="lazy"
                          alt=""
                          class="htb-shape"
                        />
                        <div class="htb-number-text">01</div>
                      </div>
                      <div class="htb-text">
                        <h4>Create a MetaMask Wallet</h4>
                        <p>
                          $KISHU token is available on the Ethereum
                          blockchain. MetaMask is the market leader in ERC20
                            (Ethereum) wallets. On Google Chrome, visit{" "}
                          <a href="https://metamask.io/" target="_blank">
                            <strong>metamask.io</strong>
                          </a>{" "}
                            to download the extension and set up a wallet. On
                            mobile? Get MetaMask&#x27;s app for{" "}
                          <a
                            href="https://metamask.app.link/skAH3BaF99"
                            target="_blank"
                          >
                            <strong>iPhone</strong>
                          </a>{" "}
                            or{" "}
                          <a
                            href="https://metamask.app.link/bxwkE8oF99"
                            target="_blank"
                          >
                            <strong>Android</strong>
                          </a>
                            .
                          </p>
                      </div>
                    </div>
                  </div>)}
                {section == 2 && (
                  <div data-w-tab="Tab 2" class="tab-pane-tab-2 ">
                    <div class="htb-item">
                      <div class="htb-number">
                        <img
                          src={ShapeBehind}
                          loading="lazy"
                          alt=""
                          class="htb-shape"
                        />
                        <div class="htb-number-text">02</div>
                      </div>
                      <div class="htb-text">
                        <h4 class="heading-3">
                          Send $ETH to MetaMask
                            <br />
                        </h4>
                        <p>
                          Buy Ethereum through MetaMask or transfer it to your
                          MetaMask wallet address from another wallet (e.g.
                          Coinbase or Binance).
                            <br />
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {section == 3 && (
                  <div data-w-tab="Tab 3" class="">
                    <div class="htb-item">
                      <div class="htb-number">
                        <img
                          src={ShapeBehind}
                          loading="lazy"
                          alt=""
                          class="htb-shape"
                        />
                        <div class="htb-number-text">03</div>
                      </div>
                      <div class="htb-text">
                        <h4 class="heading-3">
                          Visit KISHU Swap
                            <br />
                        </h4>
                        <p>
                          You can currently buy $KISHU on{" "}
                          <a
                            href="https://exchange.kishu.com/#/swap?inputCurrency=ETH&amp;outputCurrency=0xa2b4c0af19cc16a6cfacce81f192b024d625817d"
                            target="_blank"
                          >
                            <strong>KISHU Swap</strong>
                          </a>
                            , KISHU&#x27;s official decentralized exchange where
                            you can swap any ERC20 token.
                            <br />
                        </p>
                      </div>
                    </div>
                  </div>)}
                {section == 4 && (
                  <div data-w-tab="Tab 4" class="">
                    <div class="htb-item">
                      <div class="htb-number">
                        <img
                          src={ShapeBehind}
                          loading="lazy"
                          alt=""
                          class="htb-shape"
                        />
                        <div class="htb-number-text">04</div>
                      </div>
                      <div class="htb-text">
                        <h4 class="heading-3">
                          Swap $ETH for $KISHU
                            <br />
                        </h4>
                        <p>
                          Enter the amount of $ETH you would like to swap for
                            $KISHU. Click <strong>Connect Wallet</strong> then{" "}
                          <strong>Swap</strong>
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>

          {/* <div
            style={{
              width: "100%",
              height: "80px",
              textAlign: "center",
              marginTop: "30px",
              // backgroundColor: "#f7fafc",
            }}
          >
            <span
              style={{
                borderBottom: "1px solid #3d006f",
                width: "498px;",
                color: "#3d006f",
                fontSize: "2rem",
                fontWeight: "500",
                lineHeight: '3rem'
              }}
            >
              HOW TO BUY HOKK
            </span>

            <p style={{ marginTop: "40px" }}>
              The safest place to buy HOKK is HOKKS (use 3-4% slippage)
            </p>

            <button
              style={{
                marginTop: "30px",
                marginTop: "40px",
                width: "180px",
                height: " 63px",
                backgroundColor: "#5a58cd",
                color: "#ffff",
                borderRadius: " 6px",
              }}
            >
              VIEW PRICE CHART
              <i
                style={{
                  marginLeft: "10px",
                }}
                class="fas fa-arrow-right"
              ></i>
            </button>

            
            <div
              className="_how_to_buy_colms"
            >

              <div
                className="_left_content_"
              >
                <span
                  style={{
                    borderBottom: "1px solid #3d006f",
                    width: "398px;",
                    color: "#3d006f",
                    fontSize: "1.5rem",
                    fontWeight: "500",
                  }}
                >
                  HOW TO BUY
                </span>

                <p style={{ marginTop: isMobile ? "10px" : "40px" }}>Buy Hokk in four easy steps</p>

                <button
                  style={{
                    marginTop: "30px",
                    marginTop: isMobile ? "20px" : "40px",
                    width: "180px",
                    height: " 63px",
                    background: "#3A1C71" /,
                    background:
                      "-webkit-linear-gradient(to right, #FFAF7B, #D76D77, #3A1C71)",
                    background:
                      "linear-gradient(to right, #FFAF7B, #D76D77, #3A1C71)" ,

                    color: "#ffff",
                    borderRadius: " 6px",
                  }}
                >
                  VIEW PRICE CHART
                  <i
                    style={{
                      marginLeft: "10px",
                    }}
                    class="fas fa-arrow-right"
                  ></i>
                </button>
              </div>

 
              <div
                className="_left_content_"
              >
                <div>
                  <h6 style={{ textAlign: "left" }}>
                    {" "}
                    <i class="fas fa-cat"></i> Step1: Install MetaMask For
                    Chrome
                  </h6>
                  <p style={{ textAlign: "justify" }}>
                    Open your Google Chrome and visit metamask.io Download the
                    MetaMask chrome extension and set up a wallet. On mobile?
                    Get MetaMask app for Iphone and or Android
                  </p>
                </div>

                <div>
                  <h6 style={{ textAlign: "left" }}>
                    {" "}
                    <i class="fas fa-cat"></i> Step1: Install MetaMask For
                    Chrome
                  </h6>
                  <p style={{ textAlign: "justify" }}>
                    Open your Google Chrome and visit metamask.io Download the
                    MetaMask chrome extension and set up a wallet. On mobile?
                    Get MetaMask app for Iphone and or Android
                  </p>
                </div>
              </div>

         
              <div
                className="_left_content_"
              >
                <div>
                  <h6 style={{ textAlign: "left" }}>
                    {" "}
                    <i class="fas fa-cat"></i> Step1: Install MetaMask For
                    Chrome
                  </h6>
                  <p style={{ textAlign: "justify" }}>
                    Open your Google Chrome and visit metamask.io Download the
                    MetaMask chrome extension and set up a wallet. On mobile?
                    Get MetaMask app for Iphone and or Android
                  </p>
                </div>

                <div>
                  <h6 style={{ textAlign: "left" }}>
                    {" "}
                    <i class="fas fa-cat"></i> Step1: Install MetaMask For
                    Chrome
                  </h6>
                  <p style={{ textAlign: "justify" }}>
                    Open your Google Chrome and visit metamask.io Download the
                    MetaMask chrome extension and set up a wallet. On mobile?
                    Get MetaMask app for Iphone and or Android
                  </p>
                </div>
              </div>
            </div>

          

            <span
              style={{
                borderBottom: "1px solid #3d006f",
                width: "498px;",
                color: "#3d006f",
                fontSize: "2rem",
                fontWeight: "500",
              }}
            >
              EXCHANGE
            </span>


            <div
              style={{
                margin: "auto",
                display: "flex",
                flexWrap:isMobile ?"nowrap" :"wrap",
                marginLeft: isMobile ? 0:"28%",
                marginTop: isMobile ?20:"40px",

              }}
            >
              <div style={{ marginLeft: "10px" }}>
                {" "}
                <img src={LogoExchange} />
              </div>
              <div style={{ marginLeft: "10px" }}>
                {" "}
                <img src={LogoExchange} />
              </div>
              <div style={{ marginLeft: "10px" }}>
                {" "}
                <img src={LogoExchange} />
              </div>
              <div style={{ marginLeft: "10px" }}>
                {" "}
                <img src={LogoExchange} />
              </div>
            </div>
            <div
              style={{
                margin: "auto",
                display: "flex",
                flexWrap:isMobile ?"nowrap" :"wrap",
                marginLeft: isMobile ? 0:"28%",
                marginTop: isMobile ?20:"40px",
              }}
            >
              <div style={{ marginLeft: "10px" }}>
                {" "}
                <img src={LogoExchange} />
              </div>
              <div style={{ marginLeft: "10px" }}>
                {" "}
                <img src={LogoExchange} />
              </div>
              <div style={{ marginLeft: "10px" }}>
                {" "}
                <img src={LogoExchange} />
              </div>
              <div style={{ marginLeft: "10px" }}>
                {" "}
                <img src={LogoExchange} />
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default HowToBuy;
