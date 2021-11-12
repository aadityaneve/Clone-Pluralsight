function Navbar() {
    return `
        <div><img src="https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/global/header/PS_logo.png"
                    alt="">
            </div>
            <div>
                <ul>
                    <!-- &#9652 -->
                    <li id="plat">Platform <span>&#9662</span></li>
                    <li id="plat2">Products <span>&#9662</span></li>
                    <li id="plat3">Resourses <span>&#9662</span></li>
                    <li>For Individuals <span></span></li>
                </ul>
            </div>
            <div>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/622/622669.png" alt="">
                </div>
                <div>
                    <p id="plat4">Sign in <span>&#9662</span></p>
                </div>
                <div>
                    <button>TRY FOR FREE</button>
                </div>
            </div>
        `;
}

export default Navbar;
