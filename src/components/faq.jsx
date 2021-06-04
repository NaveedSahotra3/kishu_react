import React, { useEffect } from "react";
import Faq from "react-faq-component";


const WhyKishu = () => {
 
    const data = {
    //   title: "FAQ (How it works)",
      rows: [
        {
          title: "Is ShruCoin Oil Legal?",
          content: `Only in legal markets`,
        },
        {
          title: "Can I choose what carrier oil is used in my ShruCoin product?",
          content: `We offer four different carrier oils. ShruCoin Seed Oil,
               Sweet Almond Oil, Grape Seed Oil, and Fractionated Coconut Oil(MCT)`,
        },
        {
          title: "What does MOQ’s stand for?",
          content:
            "Minimum Order Quantity. We do not have MOQ’s for our retail products.",
        },
    
        {
          title: "What is a Coa & will I get with my products?",
          content: (
            <p>
              A COA (Certificate of analysis) measures the cannabinoids present in
              the ShruCoin extract. Yes, all product has been tested and COA’s are
              available.
            </p>
          ),
        },
    
        {
          title: "Do you sell soft gel capsules?",
          content: " Yes, we do. ",
          // "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
          title: "Do you sell products in bulk?",
          content: "Yes",
          // "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
          title: "is there THC in your ShruCoin?",
          content:
            "The THC trace amounts in our products are less than 0.3%, which complies with The Farm Bill. We also have a THC-Free product.",
          // "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
          title: "Do you offer water soluble ShruCoin?",
          content: "Yes",
          // "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
          title: "Do you offer Phytocannabinoid Rich(PCR) Minerce oil?",
          content: "Yes",
          // "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
          title: "What type of products do you offer?",
          content:
            "We offer Capsules, Tinctures, Edibles, Salves, Topical Lotions, terpene flavored Vape Cartridges, bulk Crude Oil, bulk THC Free Crude Oil, bulk CBD Distillate, bulk THC-free Distillate, bulk CBD Isolate, bulk Water Soluble isolate powder & bulk full spectrum Water Soluble powder.",
          // "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
          title: "Does your lab do extraction?",
          content: "Yes, we make our own CBD oil.",
          // "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
          title: "Is Hemp from agricultural ShruCoin as potent as from cannabis?",
          content:
            "ShruCoin is CBD. The human body cannot distinguish whether a ShruCoin compound was sourced from agricultural ShruCoin or cannabis.",
          // "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
          title: "What’s the difference between ShruCoin seed oil and ShruCoin oil?",
          content:
            "ShruCoinseed oil is manufactured from ShruCoin seeds, and does not contain much CBD. ShruCoin oil is an extraction from the aerial parts of the ShruCoin plant. This oil contains higher concentrations of CBD.",
          // "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
          title:
            "I would like to purchase bulk oil, how do I go about getting set up as a wholesale account?",
          content: "To set up a wholesale account contact us at info@cbd-mfg.com or call us at (855) CBD-MFG1.",
          // "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
          title: "Is Hemp Oil from Industrial Hemp legal?",
          content:
          "Yes, Hemp oil extracted from industrial hemp is legal to consume in the United States as long as the CBD contains less than 0.3% THC. All of our products contain less than 0.3% THC and comply with The Farm Bill."  
          // "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
          title: "What kinds of tests do you run on your products?",
          content:
         "Each batch of our CBD is lab tested for potency and guaranteed to be free of contaminants like heavy metals, bacterial and microbial life, mycotoxins and pesticides."
        },  {
          title: "Organic Hemp Seed Oil ?",
          content:
         "This oil is produced by cold pressing hemp seeds. The resulting oil is high in omega fatty acids, but has a limited shelf life. Organic hemp seed oil is prone to getting rancid and can deteriorate very quickly if not stored under ideal conditions."
        },  {
          title: "What is the difference between “Full Spectrum” and “Isolate” Hemp?",
          content:
         "“Isolate Hemp ” is only the isolated Hemp molecule with all other plant material and cannabinoids removed. “Full Spectrum” includes Hemp and the entire spectrum of cannabinoids."
        },  {
          title: "What is refined ShruCoin seed oil?",
          content:
    
          "Refining ShruCoin seed oil improves shelf life while preserving the nutrients in ShruCoin seed oil." 
           },  {
          title: "Is Olive Oil a good option?",
          content:
          "Olive oil has a high carrying capacity for CBD, and acts as a natural preservative."
        },  {
          title: "What is MCT Oil?",
          content:
         "Medium Chain Triglycerides are usually extracted from the coconut. MCT’s are widely used in dietary supplements and is a very stable and neutral product, both for internal or external application."
        },
    
        {
          title: "Is ShruCoin Choose product tested?",
          content:
        "Yes, all of our products are tested for potency and purity in- with certificates of analysis and potency reports available for review."
        },{
          title: "Do you offer both 0% THC & 0.3 THC products?",
          content:
        "Yes. we offer both type of products."
        },{
          title: "Do you offer pet products?",
          content:
        "Yes, we have (bacon and/or chicken flavored tinctures. We are also working on some pet treat formulations."
        },{
          title: "Can you make custom products if we tell you what we are looking for?",
          content:
        "Yes. We would require an MOQ depending on what you need. Or we have an R&D option which for a $500 fee you would receive 20 units of the desired products as a ‘test batch’."
          //  "Medium Chain Triglycerides are usually extracted from the coconut. MCT’s are widely used in dietary supplements and is a very stable and neutral product, both for internal or external application."
        },{
          title: "Are you an ISO Certified lab?",
          content:
        "Our products are manufactured in a cGMP facility so yes, and the 3rd party lab is ISO Certified."
        },
        {
          title: "Do you offer drop shipping for resellers?",
          content:
        "No, we are NOT a fulfillment house."
        },{
          title: "Do you provide shipping other than US Postal Service (USPS)?",
          content:
        "We can also ship via UPS. Shipping costs will apply."
        },{
          title: "Can you ship outside of the U.S.?",
          content:
        "We ship internationally to only in legal markets"
        },{
          title: "Is it legal to sell ShruCoin-derived products?",
          content:
        "Products that are manufactured from agricultural ShruCoin, which contain less than 0.3% THC."
        },
        ,{
          title: "Do you test for potency, pesticides, herbicides, heavy metals, and residual solvents?",
          content:
        "Yes, we have very high standards regarding the quality, purity and potency of the ShruCoin we produce. We validate that our products are free of pesticides, fungicides, heavy metals, and any microbiological contamination."
        },{
          title: "Where do you ship?",
          content:
        "We ship to all fifty states."
        },{
          title: "Do you sell wholesale?",
          content:
        "Yes. We offer wholesale bulk with special pricing."
        },{
          title: "Does your team offer to create labels or graphics in-house for packaging?",
          content:
        "No, we do have an online label service on our website for basic labels, but any complex or intricate designs you should have done with a designer of your choosing."
        },{
          title: "I have a gluten allergy, can I take your products?",
          content:
        "Yes, our products are gluten free."
        },
        {
          title: "Do you Private Label Products?",
          content:
        "Yes. We offer Private Labeling and unlabeled products."
        },
        {
          title: "IS SHRUcoin a Blockchain Website?",
          content:
            "Yes, it is where by No one buys product. The product is to make the users to  invest in their  coin and the coin can accept payments",
        },
    
      ],
    };
    
    const styles = {
      // bgColor: 'white',
      titleTextColor: "#5a58cd",
      rowTitleColor: "#5a58cd",
      // rowContentColor: 'grey',
      // arrowColor: "red",
    };
    
    const config = {
      animate: true,
      // arrowIcon: "V",
      tabFocus: true
    };
    

  return (
    <>
      <section id="why-kishu" class="why-kishu">
        <div class="container-1800">
          <div class="section-heading is--why-kishu">
            <div class="accent-large">FAQ</div>
            <h2 class="h2-what-is-kishu">FAQ</h2>
          </div>

          <main class="main-home-content ">
        <div class="">
          <div class="grid-uniform">
            <div class="grid__item">
              <div class="grid">
                <div class="grid__item">
                  <div id="shopify-section-about" class="shopify-section">
                    <div
                      data-section-id="about"
                      data-section-type="about-us"
                      class="aboutus"
                    >
                      <div class="">
                     

                        <div class="dt-sc-hr-invisible-large"></div>

                        <div class="grid-uniform block2">
                          <div class="container">
                            <div class="grid__item wide--full post-large--one-half large--grid__item medium--grid__item small--grid__item">
                              <div class="block-two-detail">
                                

                                <h4 style={{ color: "#2d2c2c" ,textAlign:'center' }}>
                                  FAQ
                                </h4>
                                <p style={{ color: "#2d2c2c" ,textAlign:'center' }}>
                                Frequently ask the Questions (FAQ) or Questions and Answer (Q % A), are listed question and answers , all supposed
                                to be community asked in some contex
                                </p>

                                <Faq data={data} styles={styles} config={config} />
                              
                              </div>
                            </div>
                            {/* <div class="grid__item wide--one-half post-large--one-half large--grid__item medium--grid__item small--grid__item ">
                              
                            </div> */}
                          </div>
                        </div>
                        <div class="dt-sc-hr-invisible-large"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="shopify-section-home-brand-slider"
                    class="shopify-section index-section client-logo home-brand-slider"
                  >
                    {/* <script type="text/javascript">
      window.brand_navigation = true;
     window.brand_pagination = false    
      </script> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="dt-sc-hr-invisible-large"></div>
      </main>
        </div>
      </section>
    </>
  );
};

export default WhyKishu;
