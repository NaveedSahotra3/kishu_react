import React from 'react'
import Backgroundshape from "../images/background-shape.png";
import Object12x from "../images/object12x.png";
import Object32x from "../images/object32x.png";
import Image08 from "../images/08-v2-big.gif";

const FoundingTeam = ()=>{
    return(<div>
 <div id="team" class="founding-team">
            <div class="container-1800">
              <div class="section-heading is--team">
                <div class="accent-large">Team</div>
              </div>
              <div class="_2-col-grid offset-up">
                <div
                  id="w-node-_5f653208-8b22-cc29-2ef1-5f821570ca56-52018772"
                  class="founding-team-img-wrapper"
                >
                  <img
                    src={Backgroundshape}
                    loading="lazy"
                    width="884"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 34vw, (max-width: 1919px) 46vw, 100vw"
                    srcset={Backgroundshape}
                    alt=""
                    class="founding-team-img"
                  />
                  <img src={Image08} loading="lazy" alt="" class="image-21" />
                </div>
                <div class="founding-team-text-wrapper">
                  <h2 class="h2-founding-team">
                    Founding
                    <br />
                    Team
                  </h2>
                  <p class="_w-660">
                    KISHU was founded by a 2-person team that has since expanded
                    into 20+ community managers with expertise in marketing and
                    product development. Feel free to say &quot;Hi!&quot; on
                    Telegram.
                  </p>
                  <div class="founding-members">
                    <div class="founding-member-item">
                      <div class="founding-member-image-container">
                        <img
                          src={Object12x}
                          loading="lazy"
                          alt=""
                          class="image-16"
                        />
                      </div>
                      <div class="founding-member-text">
                        <h4>Kishu Man</h4>
                        <p>Co-Founder | Head of Operations</p>
                        <a
                          href="https://t.me/Kishu_Inu"
                          target="_blank"
                          class="social-icon-item is--founder w-inline-block"
                        >
                          <div class="fa-social-icon is--founder"></div>
                        </a>
                      </div>
                    </div>
                    <div class="founding-member-item">
                      <div class="founding-member-image-container">
                        <img
                          src={Object32x}
                          loading="lazy"
                          alt=""
                          class="image-16"
                        />
                      </div>
                      <div class="founding-member-text">
                        <h4>Inu Dev</h4>
                        <p>Co-Founder | Lead Developer</p>
                        <a
                          href="https://t.me/InuDev"
                          target="_blank"
                          class="social-icon-item is--founder w-inline-block"
                        >
                          <div class="fa-social-icon is--founder"></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

    </div>)
}

export default FoundingTeam