function TeamPricingCards() {
    return `
                <div id="starterCard" class="standardPricingCard">
                    <h1>Starter</h1>
                    <h1 id="starterPrice" class=""><sup class="dollar">US$</sup>399</h1>
                    <p>per user / year</p>
                    <h4>Upskill your team with our <br /> core library.</h4>
                    <button class="pricingCardBtn">GET STARTED</button>
                </div>
                <div id="professionalCard" class="standardPricingCard">
                    <h1>Professional</h1>
                    <h1 id="professionalPrice" class=""><sup class="dollar">US$</sup>579</h1>
                    <p>per user / year</p>
                    <h4>Basic reporting and user analytics for teams.</h4>
                    <button class="pricingCardBtn">GET STARTED</button>
                    <p>or start a <span class="bgPink">FREE trial</span></p>
                </div>
                <div id="enterpriseCard" class="standardPricingCard">
                    <h1>Enterprise</h1>
                    <h1 id="enterprisePrice" class=""><sup class="dollar">US$</sup>779</h1>
                    <p>per user / year</p>
                    <h4 class="bgPink">
                        Flexibility and advanced analytics for the enterprise.
                    </h4>
                    <button class="pricingCardBtn">GET STARTED</button>
                    <p>or start a <span class="bgPink">FREE trial</span></p>
                </div>
        `;
}

export default TeamPricingCards;