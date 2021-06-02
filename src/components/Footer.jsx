import React from "react";
import VectorSmart from "../images/Vector-Smart-Object2x.png";

const Footer = () => {
  return (
    <div>
      <div id="follow" class="footer">
        <div class="footer-relative-wrapper">
          <div class="footer-bg-imgs">
            <img
              src={VectorSmart}
              loading="lazy"
              width="380"
              sizes="(max-width: 479px) 100vw, 380px"
              srcset={VectorSmart}
              alt=""
              class="unicorn-kishu"
            />
          </div>
          <div class="logo-and-social-wrapper">
            <div class="logo-white"></div>
            <div class="social-icons">
              <a
                href="https://t.me/kishuinucommunity"
                target="_blank"
                class="social-icon-item w-inline-block"
              >
                <div class="fa-social-icon"></div>
              </a>
              <a
                href="https://www.reddit.com/r/KishuInu/"
                target="_blank"
                class="social-icon-item w-inline-block"
              >
                <div class="fa-social-icon"></div>
              </a>
              <a
                href="https://twitter.com/inukishu?lang=en"
                target="_blank"
                class="social-icon-item w-inline-block"
              >
                <div class="fa-social-icon"></div>
              </a>
              <a
                href="https://www.instagram.com/inukishu/?hl=en"
                target="_blank"
                class="social-icon-item w-inline-block"
              >
                <div class="fa-social-icon"></div>
              </a>
              <a
                href="https://www.youtube.com/results?search_query=kishu+inu"
                target="_blank"
                class="social-icon-item w-inline-block"
              >
                <div class="fa-social-icon"></div>
              </a>
              <a
                href="https://medium.com/coinmonks/kishu-inu-token-everything-about-it-798dc0ae6a43"
                target="_blank"
                class="social-icon-item w-inline-block"
              >
                <div class="fa-social-icon"></div>
              </a>
              <a
                href="https://github.com/Kishu-Inu/Kishu-Inu-Contracts"
                target="_blank"
                class="social-icon-item w-inline-block"
              >
                <div class="fa-social-icon"></div>
              </a>
              <a
                href="https://discord.gg/kishuinucommunity"
                target="_blank"
                class="social-icon-item w-inline-block"
              >
                <div class="fa-social-icon"></div>
              </a>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p class="white">Copyright © 2021, Kishu Inu</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
