function MonthlyYearlyBtn() {
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
        `;
}

export default MonthlyYearlyBtn;