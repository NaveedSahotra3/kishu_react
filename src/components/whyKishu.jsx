import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import V1big from "../images/v1big.gif";
import V1BigBackground from "../images/instant-rewards---background-no-kishu.png";
import ShiningStart from "../images/shining-stars-.png";
import images1 from "../images/1.png";
import images3 from "../images/3.png";

const WhyKishu = () => {
  useEffect(() => {
    AOS.init({
      duration: 4000,
    });
  }, []);

  return (
    <>
      <section id="why-kishu" class="why-kishu">
        <div class="container-1800">
          <div class="section-heading is--why-kishu">
            <div class="accent-large">$Kishu</div>
            <h2 class="h2-what-is-kishu">Why Kishu?</h2>
          </div>

          {/* <div data-w-id="87ebf16d-1406-997c-c236-81e39756dba7" class="why-kishu-scrolling-container">
            <div class="_2-col-grid bottom-padding is--sticky">
              <div id="w-node-_4d01e470-0316-6366-bff1-e94ed46148b2-52018772" class="left-col">
                <div data-w-id="33305f40-759f-5b1c-d56f-046096d6bea0" class="why-kishu-image">
                  <img src={V1BigBackground} loading="lazy" width="772" sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, 46vw" srcset={V1BigBackground ,'500w'
                  } alt="" class="what-is-kishu-img" />
                  <img src={ShiningStart} loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, (max-width: 1919px) 46vw, 32vw" srcset="images/shining-stars--p-500.png 500w, images/shining-stars-.png 618w" alt="" class="shining-stars" />
                  <img src={V1big} loading="lazy" width="1038" alt="" class="image-19" />
               </div>


                 <div data-w-id="33305f40-759f-5b1c-d56f-046096d6bea2" class="why-kishu-image _2">
                  <img src={images1} loading="lazy" width="440.5" sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, 46vw" srcset={images1 ,'800w'} alt="" class="what-is-kishu-img" /></div>
                   <div data-w-id="33305f40-759f-5b1c-d56f-046096d6bea4" class="why-kishu-image _3">
                  <img src={images3} loading="lazy" width="440.5" sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, 46vw" srcset="images/3-p-800.png 800w, images/3.png 887w" alt="" class="what-is-kishu-img" />
                  </div>
                      </div>


                   <div data-aos="fade-up" id="w-node-bc539372-19b1-6802-b824-1e8e8666fcb6-52018772" class="right-col">
                    <div data-w-id="5c6a93ce-3cd4-9d9a-119c-37c503aa87d6" class="why-kishu-text-item">
                     <h3>Instant<br />Rewards</h3>
                    <p class="_w-414">For every transaction in KISHU&#x27;s network (buy or sell), 2% of the transaction is distributed to existing holders. That means you earn $KISHU just by holding it in your wallet.</p>
                
                   </div>
                  <div data-aos="fade-up" id="telegram" data-w-id="cd9039a0-2dd2-5175-0451-9e43e496cf63" class="why-kishu-text-item">
                  <h3>Community <br />Powered</h3>
                  <p class="_w-414">KISHU is fully decentralized and owned by its fun, vibrant community. We welcome and embrace diverse perspectives to build KISHU into the best community in crypto.</p>
                  <a href="https://t.me/kishuinucommunity" target="_blank" class="link">Join our Telegram community</a>
                </div>
                <div data-aos="fade-up" data-w-id="050d4163-cfce-5ea7-6bb8-c24dc4660203" class="why-kishu-text-item">
                  <h3>Secure &amp; Safe</h3>
                  <p class="_w-414">KISHU has been audited and its LP (Liquidity Pool) tokens have been burnt. That means zero risk to our investors from potential bad actors.</p>
                  <a href="audits/KishuInu-Audit-TechRate.pdf" target="_blank" class="link">See our security audit</a>
                </div>
              </div>
            </div>
          </div> */}

          <div
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos="fade-up"
            style={{marginBottom:'50px'}}
          >
            <div class="_2-col-grid bottom-padding is--sticky" >
              <div
                id="w-node-_4d01e470-0316-6366-bff1-e94ed46148b2-52018772"
                class="left-col"
              >
                <div
                  data-w-id="33305f40-759f-5b1c-d56f-046096d6bea0"
                  class="why-kishu-image"
                >
                  <img
                    src={V1BigBackground}
                    loading="lazy"
                    width="772"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, 46vw"
                    srcset={V1BigBackground}
                    alt=""
                    class="what-is-kishu-img"
                  />
                  <img
                    src={ShiningStart}
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, (max-width: 1919px) 46vw, 32vw"
                    srcset={ShiningStart}
                    alt=""
                    class="shining-stars"
                  />
                  <img
                    src={V1big}
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
                    Instant
                    <br />
                    Rewards
                  </h3>
                  <p class="_w-414">
                    For every transaction in SafeBreast network (buy or sell),
                    2% of the transaction is distributed to existing holders.
                    That means you earn $SAFEBREAST just by holding it 
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos="fade-up"
            style={{marginBottom:'50px'}}

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
                    src={images1}
                    loading="lazy"
                    width="772"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, 46vw"
                    srcset={images1}
                    alt=""
                    class="what-is-kishu-img"
                  />
                  <img
                    src={ShiningStart}
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, (max-width: 1919px) 46vw, 32vw"
                    srcset={ShiningStart}
                    alt=""
                    class="shining-stars"
                  />
                  {/* <img
                    src={V1big}
                    loading="lazy"
                    width="1038"
                    alt=""
                    class="image-19"
                  /> */}
                </div>
              </div>

              <div
                data-aos="fade-up"
                id="w-node-bc539372-19b1-6802-b824-1e8e8666fcb6-52018772"
                class="right-col"
              >
                <div
                  data-aos="fade-up"
                  id="telegram"
                  data-w-id="cd9039a0-2dd2-5175-0451-9e43e496cf63"
                  class="why-kishu-text-item"
                >
                  <h3>
                    Community <br />
                    Powered
                  </h3>
                  <p class="_w-414">
                    {/* KISHU is fully decentralized and owned by its fun, vibrant
                    community. We welcome and embrace diverse perspectives to
                    build KISHU into the best community in crypto. */}
                   (Something similar , great with link to telegram)
                  </p>
                  <a
                    href="https://t.me/kishuinucommunity"
                    target="_blank"
                    class="link"
                  >
                    Join our Telegram community
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos="fade-up"
            style={{marginBottom:'50px'}}

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
                    src={images3}
                    loading="lazy"
                    width="772"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, 46vw"
                    srcset={images3}
                    alt=""
                    class="what-is-kishu-img"
                  />
                  <img
                    src={ShiningStart}
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 452.9296875px, (max-width: 1919px) 46vw, 32vw"
                    srcset={ShiningStart}
                    alt=""
                    class="shining-stars"
                  />
                  {/* <img
                    src={V1big}
                    loading="lazy"
                    width="1038"
                    alt=""
                    class="image-19"
                  /> */}
                </div>
              </div>

              <div
                data-aos="fade-up"
                id="w-node-bc539372-19b1-6802-b824-1e8e8666fcb6-52018772"
                class="right-col"
              >
                <div
                  data-aos="fade-up"
                  data-w-id="050d4163-cfce-5ea7-6bb8-c24dc4660203"
                  class="why-kishu-text-item"
                >
                  <h3>Secure &amp; Safe</h3>
                  <p class="_w-414">
                 (Something similar , great with link to security audit) -CL is getting code audited as we speak and should be done 
                 well before website launch
                  </p>
                  <a
                    href="audits/KishuInu-Audit-TechRate.pdf"
                    target="_blank"
                    class="link"
                  >
                    See our security audit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyKishu;
