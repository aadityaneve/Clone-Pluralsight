function MonthlyYearlyBtn() {
    return `
                <p>Monthly</p>
                <div
                    class="toggleBtn"
                    onclick="this.classList.toggle('active')"
                >
                    <div class="innerCircle"></div>
                </div>
                <p>Yearly</p>
        `;
}

export default MonthlyYearlyBtn;
