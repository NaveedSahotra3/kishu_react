import React, { useState } from 'react'

import BilliBowl from "../images/bowl2x-p-500.png";
import Billi from "../images/V1.gif";
import Dreams from "../images/dream2x.png";
import BilliBowl2 from "../images/bowl2x.png";



const Home = () => {
  const [show, setShow] = useState(false)
  const showside = () => setShow(!show)

  return (<div>
    <section id="home" class="hero">
      <div
        data-collapse="medium"
        data-animation="over-right"
        data-duration="400"
        data-doc-height="1"
        data-no-scroll="1"
        role="banner"
        class="navbar native w-nav"
      >
        <div class="container-1800 is--nav" style={{
          paddingLeft: '304px', width: show && "100%",
          height: show &&"100vh"
        }}onClick={showside}>
          <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0" style={{ height: "14384px", display: show ? "block" : "none", width: "200px" }}>
            <nav role="navigation" id="w-node-_6be0c6f3-5804-18a3-23b0-d24feef2e7ff-52018772" class="nav-menu w-nav-menu" style={{ right: 'auto' }} data-nav-menu-open="">
              <a href="#why-kishu" class="capitals nav-link w-nav-link w--nav-link-open" onClick={showside}>Why kishu</a>


              <a onClick={showside} href="#how-to-buy" class="capitals nav-link w-nav-link w--nav-link-open">How to buy</a>
              <a onClick={showside} href="#stats" class="capitals nav-link w-nav-link w--nav-link-open">tokenomics</a>
              <a onClick={showside} href="#kishu-swap" class="capitals nav-link w-nav-link w--nav-link-open">swap</a>
              <a onClick={showside} href="#moonmap" class="capitals nav-link w-nav-link w--nav-link-open">moonmap</a>
              <a onClick={showside} href="#donate" class="capitals nav-link w-nav-link w--nav-link-open">donate</a>
              <div class="html-embed w-embed">
                <div id="google_translate_element"><div class="skiptranslate goog-te-gadget" dir="ltr"  ><div id=":0.targetLanguage"><select class="goog-te-combo" aria-label="Language Translate Widget"><option value="">Select Language</option><option value="af">Afrikaans</option><option value="sq">Albanian</option><option value="am">Amharic</option><option value="ar">Arabic</option><option value="hy">Armenian</option><option value="az">Azerbaijani</option><option value="eu">Basque</option><option value="be">Belarusian</option><option value="bn">Bengali</option><option value="bs">Bosnian</option><option value="bg">Bulgarian</option><option value="ca">Catalan</option><option value="ceb">Cebuano</option><option value="ny">Chichewa</option><option value="zh-CN">Chinese (Simplified)</option><option value="zh-TW">Chinese (Traditional)</option><option value="co">Corsican</option><option value="hr">Croatian</option><option value="cs">Czech</option><option value="da">Danish</option><option value="nl">Dutch</option><option value="eo">Esperanto</option><option value="et">Estonian</option><option value="tl">Filipino</option><option value="fi">Finnish</option><option value="fr">French</option><option value="fy">Frisian</option><option value="gl">Galician</option><option value="ka">Georgian</option><option value="de">German</option><option value="el">Greek</option><option value="gu">Gujarati</option><option value="ht">Haitian Creole</option><option value="ha">Hausa</option><option value="haw">Hawaiian</option><option value="iw">Hebrew</option><option value="hi">Hindi</option><option value="hmn">Hmong</option><option value="hu">Hungarian</option><option value="is">Icelandic</option><option value="ig">Igbo</option><option value="id">Indonesian</option><option value="ga">Irish</option><option value="it">Italian</option><option value="ja">Japanese</option><option value="jw">Javanese</option><option value="kn">Kannada</option><option value="kk">Kazakh</option><option value="km">Khmer</option><option value="rw">Kinyarwanda</option><option value="ko">Korean</option><option value="ku">Kurdish (Kurmanji)</option><option value="ky">Kyrgyz</option><option value="lo">Lao</option><option value="la">Latin</option><option value="lv">Latvian</option><option value="lt">Lithuanian</option><option value="lb">Luxembourgish</option><option value="mk">Macedonian</option><option value="mg">Malagasy</option><option value="ms">Malay</option><option value="ml">Malayalam</option><option value="mt">Maltese</option><option value="mi">Maori</option><option value="mr">Marathi</option><option value="mn">Mongolian</option><option value="my">Myanmar (Burmese)</option><option value="ne">Nepali</option><option value="no">Norwegian</option><option value="or">Odia (Oriya)</option><option value="ps">Pashto</option><option value="fa">Persian</option><option value="pl">Polish</option><option value="pt">Portuguese</option><option value="pa">Punjabi</option><option value="ro">Romanian</option><option value="ru">Russian</option><option value="sm">Samoan</option><option value="gd">Scots Gaelic</option><option value="sr">Serbian</option><option value="st">Sesotho</option><option value="sn">Shona</option><option value="sd">Sindhi</option><option value="si">Sinhala</option><option value="sk">Slovak</option><option value="sl">Slovenian</option><option value="so">Somali</option><option value="es">Spanish</option><option value="su">Sundanese</option><option value="sw">Swahili</option><option value="sv">Swedish</option><option value="tg">Tajik</option><option value="ta">Tamil</option><option value="tt">Tatar</option><option value="te">Telugu</option><option value="th">Thai</option><option value="tr">Turkish</option><option value="tk">Turkmen</option><option value="uk">Ukrainian</option><option value="ur">Urdu</option><option value="ug">Uyghur</option><option value="uz">Uzbek</option><option value="vi">Vietnamese</option><option value="cy">Welsh</option><option value="xh">Xhosa</option><option value="yi">Yiddish</option><option value="yo">Yoruba</option><option value="zu">Zulu</option></select></div>Powered by <span style={{ whiteSpace: "nowrap" }}><a class="goog-logo-link" href="https://translate.google.com" target="_blank"><img src="https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png" width="37px" height="14px" style={{ paddingRight: "3px" }} alt="Google Translate" />Translate</a></span></div></div>
              </div>
            </nav>
          </div>
          <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0" style={{ display: "none" }}>

            <div class="navbar custom">
              {/* <a
                    href="#home"
                    id="Kishu-logo"
                    class="brand brand-2 w-node-_6be0c6f3-5804-18a3-23b0-d24feef2e7fe-52018772 w-nav-brand"
                  ></a> */}
              <nav
                role="navigation"
                id="w-node-_6be0c6f3-5804-18a3-23b0-d24feef2e7ff-52018772"
                class="nav-menu w-nav-menu"
                style={{ width: '762px' }}
              >
                <a href="#why-kishu" class="capitals nav-link w-nav-link">
                  Why Safebreast
                    </a>
                <div
                  data-hover="1"
                  data-delay="0"
                  class="dropdown w-dropdown"
                >
                  <div class="w-dropdown-toggle">
                    <div class="icon w-icon-dropdown-toggle"></div>
                    <div class="capitals nav-link is--dropdown">
                      Why kishu
                        </div>
                  </div>
                  <nav class="dropdown-list w-dropdown-list">
                    <a href="#" class="dropdown-link w-dropdown-link">
                      Kishu Swap
                        </a>
                    <a href="#" class="dropdown-link _2 w-dropdown-link">
                      Kishu Swap
                        </a>
                    <a href="#" class="dropdown-link _3 w-dropdown-link">
                      Kishu Swap
                        </a>
                  </nav>
                </div>
                <a href="#how-to-buy" class="capitals nav-link w-nav-link">
                  How to buy
                    </a>
                <a href="#stats" class="capitals nav-link w-nav-link">
                  tokenomics
                    </a>
                <a href="#kishu-swap" class="capitals nav-link w-nav-link">
                  swap
                    </a>
                <a href="#moonmap" class="capitals nav-link w-nav-link">
                  moonmap
                    </a>
                <a href="#donate" class="capitals nav-link w-nav-link">
                  chrity
                    </a>
                <a href="#faq" class="capitals nav-link w-nav-link">
                  faq
                    </a>
              </nav>
              <a
                id="w-node-_6be0c6f3-5804-18a3-23b0-d24feef2e80c-52018772"
                href="https://exchange.kishu.com/#/swap?inputCurrency=ETH&amp;outputCurrency=0xa2b4c0af19cc16a6cfacce81f192b024d625817d"
                target="_blank"
                class="cta-button is--nav-link w-button"
              >
                BUY $KISHU
                  </a>
            </div>
          </div>
          <div class="spacer"></div>
          <div class="w-nav-button" style={{
            position: 'absolute',
            right: 0
          }}
            onClick={showside}
          >
            <div class="w-icon-nav-menu"></div>
          </div>


        </div>
      </div>
      <div class="background-image is--hero"></div>
      <div class="floating-elements-container">
        <div class="fl-element v1">
          <img src="images/Ellipse-1-copy-5.png" loading="lazy" alt="" />
        </div>
        <div class="fl-element v2">
          <img src="images/Ellipse-1-copy-6.png" loading="lazy" alt="" />
        </div>
      </div>
      <div class="container-1800">
        <div class="hero-content-wrapper">
          <div class="_2-col-grid is--hero">
            <div
              id="w-node-_151b762e-3975-8bd9-09a6-b15858026423-52018772"
              class="hero-text"
            >
              <h1 class="display" style={{ marginTop: '80px', textAlign: 'center', marginLeft: '100px' }}>
                Breast
                      <br />
                      Safely
                      <br />
                      to the

                      <br />
                      moon
                    </h1>
              <p class="is--hero-text">
                Kishu Inu ($KISHU) is a community-focused, decentralized
                cryptocurrency with instant rewards for holders. Join the
                moon mission. 🐶
                    </p>
              <div class="hero-buttons">
                <a
                  href="https://exchange.kishu.com/#/swap?inputCurrency=ETH&amp;outputCurrency=0xa2b4c0af19cc16a6cfacce81f192b024d625817d"
                  target="_blank"
                  class="cta-button red-button w-button"
                  style={{ backgroundColor: '#458dfc' }}
                >
                  BUY $KISHU
                      </a>
                <a
                  href="whitepaper/KishuInuWhitepaper.pdf"
                  target="_blank"
                  class="cta-button w-button"
                >
                  WHITEPAPER
                      </a>
              </div>
              <div class="social-icons is--hero">
                <a
                  href="https://t.me/kishuinucommunity"
                  target="_blank"
                  class="social-icon-item is--hero w-inline-block"
                >
                  <div class="fa-social-icon is--hero"></div>
                </a>
                <a
                  href="https://www.reddit.com/r/KishuInu/"
                  target="_blank"
                  class="social-icon-item is--hero w-inline-block"
                >
                  <div class="fa-social-icon is--hero"></div>
                </a>
                <a
                  href="https://twitter.com/inukishu?lang=en"
                  target="_blank"
                  class="social-icon-item is--hero w-inline-block"
                >
                  <div class="fa-social-icon is--hero"></div>
                </a>
                <a
                  href="https://www.instagram.com/inukishu/?hl=en"
                  target="_blank"
                  class="social-icon-item is--hero w-inline-block"
                >
                  <div class="fa-social-icon is--hero"></div>
                </a>
                <a
                  href="https://www.youtube.com/results?search_query=kishu+inu"
                  target="_blank"
                  class="social-icon-item is--hero w-inline-block"
                >
                  <div class="fa-social-icon is--hero"></div>
                </a>
                <a
                  href="https://medium.com/coinmonks/kishu-inu-token-everything-about-it-798dc0ae6a43"
                  target="_blank"
                  class="social-icon-item is--hero w-inline-block"
                >
                  <div class="fa-social-icon is--hero"></div>
                </a>
                <a
                  href="https://github.com/Kishu-Inu/Kishu-Inu-Contracts"
                  target="_blank"
                  class="social-icon-item is--hero w-inline-block"
                >
                  <div class="fa-social-icon is--hero"></div>
                </a>
                <a
                  href="https://discord.gg/kishuinucommunity"
                  target="_blank"
                  class="social-icon-item is--hero w-inline-block"
                >
                  <div class="fa-social-icon is--hero"></div>
                </a>
              </div>
            </div>
            <div
              id="w-node-c5f9f19b-7168-f059-943c-ccb78b848fa7-52018772"
              class="hero-graphics-wrapper"
            >
              {/* <img
                      src={Billi}
                      alt=""
                      class="kishu-tailwag is-full-height"
                    />
                    <img
                      src={BilliBowl}
                      loading="lazy"
                      sizes="(max-width: 479px) 95.99609375px, 256.9921875px"
                      width="257"
                      srcset={(BilliBowl, BilliBowl2)}
                      alt=""
                      class="dog-bowl"
                    />
                    <img
                      src={Dreams}
                      loading="lazy"
                      width="193"
                      alt=""
                      class="kishu-dreambubble"
                    /> */}
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-down-container">
        <a href="#why-kishu" class="scroll-down w-inline-block">
          <h6 class="purple">WHY KISHU?</h6>
          <div class="arrow is--down"></div>
        </a>
      </div>
    </section>
  </div>)
}

export default Home