function IndividualPricingCards2() {
    return `
            <div class="cardsData">
                <div class="standardPricingCard">
                    <h1>Standard</h1>
                    <h4>
                        Our core library of most popular courses, paths and all
                        skill assessments
                    </h4>
                    <button class="pricingCardBtn">
                        <a href="./checkout.html">START 10-DAY FREE TRIAL</a>
                    </button>
                    <p><span class="bgPink">10-day free trial</span></p>
                    <p id="standardPricingCardBill">then ₹ 1,499.00/month, billed monthly</p>
                </div>
                <div class="premiumPricingCard">
                    <p class="opportunityLabel">BEST OPPORTUNITY</p>
                    <h1>Premium</h1>
                    <h4>
                        Our expanded library containing all 7,000+ courses,
                        certification practice exams and interactive courses.
                    </h4>
                    <button class="pricingCardBtn">
                        <a href="./checkout.html">START 10-DAY FREE TRIAL</a>
                    </button>
                    <p><span class="bgPink"> 10-day free trial</span></p>
                    <p id="premiumPricingCardBill">then ₹ 2,299.00/month, billed monthly</p>
                </div>
            </div>      
        `;
}

export default IndividualPricingCards2;
