import React, { useEffect } from "react";

import DonateQR from "../images/donate-qr-code.png";
import Image09 from "../images/09-big.gif";
import NewSweek from "../images/newsweek-logo-vector2x.png";
import Sumasthead from "../images/sunmasthead2x.png";
import GothCover from "../images/GOTH_cover_white2x.png";
import MENBOOK from "../images/MENSBOOK_black2x.png";

// temp
import V1big from "../images/v1big.gif";
import V1BigBackground from "../images/instant-rewards---background-no-kishu.png";
import ShiningStart from "../images/shining-stars-.png";
import images1 from "../images/1.png";
import images3 from "../images/3.png";

import The_Cause from "./Images/the_casuse.png";

import AOS from "aos";
import "aos/dist/aos.css";
const Donating = () => {
  useEffect(() => {
    AOS.init({
      duration: 4000,
    });
  }, []);
  return (
    <div>
      <section id="donate" class="donate" style={{ marginBottom: "3000px" }}>
        {/* <div class="container-1800" style={{ marginTop: "430px" }}>
          <div class="section-heading is--donate">
            <div class="accent-large">Donate</div>
          </div>
          <div class="_2-col-grid is--donate">
            <div
              id="w-node-_4cfe832b-f15b-0fee-a5f2-47da4f1898fd-52018772"
              class="donate-text-wrapper"
            >
              <h2>
                Feel like <br />
                donating?
              </h2>
              <p class="_w-520 is--token-code">
                As a community-powered project, KISHU runs thanks to its amazing
                volunteers and generous donors. If you would like to pitch in,
                use the official ERC20 donation wallet here:
                <br />‍<br />
                <strong class="bold-text">
                  0xB7852D285f31B740318CAb51Bd0E5E7936073725
                  <br />
                </strong>
                <br />
                <strong>Accepted</strong>: Any ERC20 token
                <br />
                <strong>Preferred</strong>: $ETH, $USDC, $KISHU
              </p>
              <a
                href="https://etherscan.io/address/0xb7852d285f31b740318cab51bd0e5e7936073725"
                target="_blank"
                class="cta-button red-button w-button"
              >
                View on etherscan
              </a>
            </div>
            <div
              id="w-node-_4cfe832b-f15b-0fee-a5f2-47da4f1898fb-52018772"
              class="donate-imgs"
            >
              <img
                src={DonateQR}
                loading="lazy"
                width="884"
                sizes="(max-width: 767px) 100vw, (max-width: 1919px) 46vw, 100vw"
                srcset={DonateQR}
                alt=""
                class="donate-qr-code"
              />
              <img
                src={Image09}
                loading="lazy"
                width="260.5"
                alt=""
                class="sleeping-kishu"
              />
            </div>
          </div>
          <div class="press-logos-wrapper">
            <a
              id="w-node-_8d5d293f-b1a7-74ff-1732-75fc22a0ef52-52018772"
              href="https://www.newsweek.com/buy-kishu-inu-new-crypto-dogecoin-big-brother-1590404"
              target="_blank"
              class="press-logo-item w-inline-block"
            >
              <img
                src={NewSweek}
                loading="lazy"
                width="347"
                sizes="(max-width: 479px) 100vw, (max-width: 1919px) 22vw, 346.9921875px"
                srcset={NewSweek}
                alt=""
                class="press-logo"
              />
            </a>
            <a
              id="w-node-_5b3309ca-e69c-4f7e-afe2-342d4be4e06e-52018772"
              href="https://www.thesun.co.uk/money/14953721/how-risky-is-kishu-inu/"
              target="_blank"
              class="press-logo-item w-inline-block"
            >
              <img
                src={Sumasthead}
                loading="lazy"
                width="174"
                alt=""
                class="press-logo"
              />
            </a>
            <a
              id="w-node-_6f2d8d68-fceb-992f-b7a7-37bcffd1a88f-52018772"
              href="https://gothammag.com/kishu-inu-times-square"
              target="_blank"
              class="press-logo-item w-inline-block"
            >
              <img
                src={GothCover}
                loading="lazy"
                width="210"
                alt=""
                class="press-logo"
              />
            </a>
            <a
              id="w-node-_2f860849-106d-97cf-9d22-ef4e2a2335ee-52018772"
              href="https://mensbook.com/kishu-in-cryptocurrency"
              target="_blank"
              class="press-logo-item w-inline-block"
            >
              <img
                src={MENBOOK}
                loading="lazy"
                width="347"
                sizes="(max-width: 479px) 100vw, (max-width: 1919px) 22vw, 346.9921875px"
                srcset={MENBOOK}
                alt=""
                class="press-logo"
              />
            </a>
          </div>
        </div> */}

        {/* below this */}
        {/* <div
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos="fade-up"
            style={{ marginBottom: "50px", marginTop:'600px' }}
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
                    src={The_Cause}
                    loading="lazy"
                    width="1038"
                    alt=""
                    class="image-19"
                  />
                </div>
              </div>

              <div
                data-aos="fade-up"
                id="w-node-bc539372-19b1-6802-b824-1e8e8666fcb6-52018772"
                class="right-col"
              >
                <div
                  data-w-id="5c6a93ce-3cd4-9d9a-119c-37c503aa87d6"
                  class="why-kishu-text-item"
                >
                  <h3>
                    Chrity
                    <br />
                    Contribution
                  </h3>
                  <p class="_w-414">
                    For every transaction in SafeBreast network (buy or sell),
                    2% of the transaction is automatically converted ethereum
                    and can be donated without needing to sell SafeBreast -
                    (LINK TO CHRITY WALLET)
                  </p>
                </div>
              </div>
            </div>
          </div> */}

        {/* first section */}
        <div
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos="fade-up"
          // style={{ marginBottom: "50px" }}
        >
          <div class="container-1800" style={{ marginTop: "430px" }}>
            <div class="section-heading is--donate">
              <div class="accent-large">Cause</div>
            </div>
            <div class="_2-col-grid is--donate">
              <div
                id="w-node-_4cfe832b-f15b-0fee-a5f2-47da4f1898fd-52018772"
                class="donate-text-wrapper"
              >
                <h2>
                  The <br />
                  Cause
                </h2>
                <p class="_w-520 is--token-code">
                  One in the eight women will develop breast cancer in their
                  lifetime
                  <br />‍<br />
                  <strong class="bold-text">
                    Maria to make something for this one? Maybe our character x8
                    one of the characters with who sticks out as 1/8 with breat
                    cancer? Cloud be powerful
                    <br />
                  </strong>
                </p>
              </div>
              <div
                id="w-node-_4cfe832b-f15b-0fee-a5f2-47da4f1898fb-52018772"
                class="donate-imgs"
              >
                <img
                  src={The_Cause}
                  loading="lazy"
                  width="884"
                  sizes="(max-width: 767px) 100vw, (max-width: 1919px) 46vw, 100vw"
                  srcset={The_Cause}
                  alt=""
                  class="donate-qr-code"
                />
              </div>
            </div>
          </div>
        </div>
        {/* second section */}
        <div
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos="fade-up"
          // style={{ marginBottom: "50px" }}
        >
          <div class="container-1800" style={{ marginTop: "600px" ,backgroundColor:'rgba(192,192,192,0.3)' }}>
            <div class="section-heading is--donate">
              <div class="accent-large">Doing</div>
            </div>
            <div class="_2-col-grid is--donate">
              <div
                id="w-node-_4cfe832b-f15b-0fee-a5f2-47da4f1898fd-52018772"
                class="donate-text-wrapper"
              >
                <h2>
                  What we are <br />
                  doing
                </h2>
                <div>
                  <button
                    style={{
                      // marginTop: "30px",
                      // marginTop: "40px",
                      width: "180px",
                      height: " 63px",
                      backgroundColor: "#5a58cd",
                      color: "#ffff",
                      borderRadius: " 6px",
                      marginLeft: "100%",
                    }}
                  >
                    VIEW CHRITY WALLET
                    <i
                      style={{
                        marginLeft: "10px",
                      }}
                      class="fas fa-arrow-right"
                    ></i>
                  </button>
                </div>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                height: "200px",
                display: "flex",
                // border: "1px solid red",
                // backgroundColor: '	rgb(220,192,192)',
           
              }}
            >
              <div style={{textAlign:'center'}}>
                <h4>$ 945, 000 </h4>
                <p>
                  <strong> AMOUNT DONATED</strong>
                  <br />
                  Total of our (blockchain verified) donations to Binance Lunch
                  Children
                </p>
              </div>
              <div style={{textAlign:'center'}}>
                <h4>$ 945, 000 </h4>
                <p>
                  <strong> AMOUNT DONATED</strong>
                  <br />
                  Total of our (blockchain verified) donations to Binance Lunch
                  Children
                </p>
              </div>
              <div style={{textAlign:'center'}}>
                <h4>$ 945, 000 </h4>
                <p>
                  <strong> AMOUNT DONATED</strong>
                  <br />
                  Total of our (blockchain verified) donations to Binance Lunch
                  Children
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* third section */}
        <div
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos="fade-up"
          // style={{ marginBottom: "50px" }}
        >
          <div class="container-1800" style={{ marginTop: "430px" }}>
            <div class="section-heading is--donate">
              <div class="accent-large">Donate</div>
            </div>
            <div class="_2-col-grid is--donate">
              <div
                id="w-node-_4cfe832b-f15b-0fee-a5f2-47da4f1898fd-52018772"
                class="donate-text-wrapper"
              >
                <h2>
                  Feel like <br />
                  donating?
                </h2>
                <p class="_w-520 is--token-code">
                  As a community-powered project, KISHU runs thanks to its
                  amazing volunteers and generous donors. If you would like to
                  pitch in, use the official ERC20 donation wallet here:
                  <br />‍<br />
                  <strong class="bold-text">
                    0xB7852D285f31B740318CAb51Bd0E5E7936073725
                    <br />
                  </strong>
                  <br />
                  <strong>Accepted</strong>: Any ERC20 token
                  <br />
                  <strong>Preferred</strong>: $ETH, $USDC, $KISHU
                </p>
                <a
                  href="https://etherscan.io/address/0xb7852d285f31b740318cab51bd0e5e7936073725"
                  target="_blank"
                  class="cta-button red-button w-button"
                >
                  View on etherscan
                </a>
              </div>
              <div
                id="w-node-_4cfe832b-f15b-0fee-a5f2-47da4f1898fb-52018772"
                class="donate-imgs"
              >
                <img
                  src={DonateQR}
                  loading="lazy"
                  width="884"
                  sizes="(max-width: 767px) 100vw, (max-width: 1919px) 46vw, 100vw"
                  srcset={DonateQR}
                  alt=""
                  class="donate-qr-code"
                />
                <img
                  src={Image09}
                  loading="lazy"
                  width="260.5"
                  alt=""
                  class="sleeping-kishu"
                />
              </div>
            </div>
            <div class="press-logos-wrapper">
              <a
                id="w-node-_8d5d293f-b1a7-74ff-1732-75fc22a0ef52-52018772"
                href="https://www.newsweek.com/buy-kishu-inu-new-crypto-dogecoin-big-brother-1590404"
                target="_blank"
                class="press-logo-item w-inline-block"
              >
                <img
                  src={NewSweek}
                  loading="lazy"
                  width="347"
                  sizes="(max-width: 479px) 100vw, (max-width: 1919px) 22vw, 346.9921875px"
                  srcset={NewSweek}
                  alt=""
                  class="press-logo"
                />
              </a>
              <a
                id="w-node-_5b3309ca-e69c-4f7e-afe2-342d4be4e06e-52018772"
                href="https://www.thesun.co.uk/money/14953721/how-risky-is-kishu-inu/"
                target="_blank"
                class="press-logo-item w-inline-block"
              >
                <img
                  src={Sumasthead}
                  loading="lazy"
                  width="174"
                  alt=""
                  class="press-logo"
                />
              </a>
              <a
                id="w-node-_6f2d8d68-fceb-992f-b7a7-37bcffd1a88f-52018772"
                href="https://gothammag.com/kishu-inu-times-square"
                target="_blank"
                class="press-logo-item w-inline-block"
              >
                <img
                  src={GothCover}
                  loading="lazy"
                  width="210"
                  alt=""
                  class="press-logo"
                />
              </a>
              <a
                id="w-node-_2f860849-106d-97cf-9d22-ef4e2a2335ee-52018772"
                href="https://mensbook.com/kishu-in-cryptocurrency"
                target="_blank"
                class="press-logo-item w-inline-block"
              >
                <img
                  src={MENBOOK}
                  loading="lazy"
                  width="347"
                  sizes="(max-width: 479px) 100vw, (max-width: 1919px) 22vw, 346.9921875px"
                  srcset={MENBOOK}
                  alt=""
                  class="press-logo"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Donating;
