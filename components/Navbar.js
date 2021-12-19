function Navbar() {
  return `
        <div><a href="./index.html"><img src="https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/global/header/PS_logo.png"
                    alt=""></a>
            </div>
            <div>
                <ul>
                    <!-- &#9652 -->
                    <li id="plat">Platform <span>&#9662</span></li>
                    <li id="plat2">Products <span>&#9662</span></li>
                    <li id="plat3">Resourses <span>&#9662</span></li>
                    <li><a href="./for-individuals.html">For Individuals</a></li>
                </ul>
            </div>
            <div>
                <div>
                    <img  id="img" src="https://cdn-icons-png.flaticon.com/128/622/622669.png" alt="">
                </div>
                <div>
                    <p id="plat4">Sign in <span>&#9662</span></p>
                </div>
                <div>
                    <a href="./free-trial.html"><button>TRY FOR FREE</button></a>
                </div>
            </div>
        `;
}

export default Navbar;
