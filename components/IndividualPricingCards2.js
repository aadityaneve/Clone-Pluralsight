function IndividualPricingCards2() {
    return `
        <div class="monthlyYearlyButton">
            <p>Monthly</p>
            <div
                class="toggleBtn"
                onclick="this.classList.toggle('active')"
            >
                <div class="innerCircle"></div>
            </div>
            <p>Yearly</p>
        </div>
        <div class="cardsData">
            <div class="standardPricingCard">
            <h1>Standard</h1>
            <h1 class="standardPrice"><sup class="rupees">₹</sup>1,499</h1>
            <p class="period">per month</p>
            <h4>Core course library, paths and skill assessments.</h4>
            <button class="pricingCardBtn">START WITH STANDARD</button>
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
            <button class="pricingCardBtn">START WITH PREMIUM</button>
            <p>or start a <span class="bgPink">FREE trial</span></p>
        </div>
        </div>                
        `;
}

export default IndividualPricingCards2;
