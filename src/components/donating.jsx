import React from "react";

import DonateQR from "../images/donate-qr-code.png";
import Image09 from "../images/09-big.gif";
import NewSweek from "../images/newsweek-logo-vector2x.png";
import Sumasthead from "../images/sunmasthead2x.png";
import GothCover from "../images/GOTH_cover_white2x.png";
import MENBOOK from "../images/MENSBOOK_black2x.png";
const Donating = () => {
  return (
    <div>
      <section id="donate" class="donate">
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
        </div>
      </section>
    </div>
  );
};
export default Donating;
