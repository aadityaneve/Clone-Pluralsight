function IndividualPricingCards() {
    return `
                <div class="standardPricingCard">
                    <h1>Standard</h1>
                    <h1 class="standardPrice"><sup class="rupees">₹</sup>1,499</h1>
                    <p class="period">per month</p>
                    <h4>Core course library, paths and skill assessments.</h4>
                    <button class="pricingCardBtn"><a href="./checkout.html">START WITH STANDARD</a></button>
                    <p>or start a <span class="bgPink">FREE trial</span></p>
                </div>
                <div class="premiumPricingCard">
                    <P class="opportunityLabel">BEST OPPORTUNITY</P>
                    <h1>Premium</h1>
                    <h1 class="premiumPrice"><sup class="rupees">₹</sup>2,299</h1>
                    <p class="period">per month</p>
                    <h4>
                        Entire library of core and expanded courses, exams,
                        projects and interactive courses.
                    </h4>
                    <button class="pricingCardBtn"><a href="./checkout.html">START WITH PREMIUM</a></button>
                    <p>or start a <span class="bgPink">FREE trial</span></p>
                </div>
        `;
}

export default IndividualPricingCards;
