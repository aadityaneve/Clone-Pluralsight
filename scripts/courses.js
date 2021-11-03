let new_selected = document.getElementById("new-selected");
let trending = document.getElementById("trending");
let active_content = document.getElementById("active-content");
let non_active_content = document.getElementById("non-active-content");
new_selected.addEventListener("click", newThisMonth);
trending.addEventListener("click", trend);

function newThisMonth() {
  new_selected.setAttribute("class", "selected");
  trending.setAttribute("class", "non-selected");
  active_content.setAttribute("class", "active");
  non_active_content.setAttribute("class", "non-active");
}

function trend() {
  trending.setAttribute("class", "selected");
  new_selected.setAttribute("class", "non-selected");
  active_content.setAttribute("class", "non-active");
  non_active_content.setAttribute("class", "active");
}

const courses = [
  {
    type: "Configuring, Compiling, and Debugging TypeScript Projects",
    name: "Web development",
    status: "Beginner",
    rat: 51,
    time: "2h 7m",
    by: "by Daniel Stern",
  },
  {
    type: "JavaScript Arrays and Collections",
    name: "Web development",
    status: "Beginner",
    rat: 201,
    time: "1h 57m ",
    by: "by Jeff Batt",
  },
  {
    type: "Creating Asynchronous TypeScript Code",
    name: "Web development",
    status: "Beginner",
    rat: 92,
    time: "1h 50m ",
    by: "by John Papa",
  },
  {
    type: "Managing Big Data with AWS Storage Options",
    name: "Software development",
    status: "Advanced",
    rat: 11,
    time: "1h 38m ",
    by: "by Nertil Poci",
  },
  {
    type: "Working with Django Models",
    name: "Software development",
    status: "Intermediate",
    rat: 19,
    time: "2h 33m ",
    by: "by Reindert-Jan Ekker",
  },
  {
    type: "Credential Access with Responder",
    name: "Information & cyber security",
    status: "Advanced",
    rat: 12,
    time: "20m ",
    by: "by Ricardo Reimao",
  },
  {
    type: "Results and Reporting for CompTIA PenTest+",
    name: "Information & cyber security",
    status: "Advanced",
    rat: 18,
    time: "1h 16m ",
    by: "by Dale Meredith",
  },
  {
    type: "Autodesk Vault Professional Installation and Setup",
    name: "Manufacturing & design",
    status: "Advanced",
    rat: 12,
    time: "2h 25m ",
    by: "by Neil Cross",
  },
  {
    type: "Creating Data Integrations with SharePoint Framework",
    name: "It ops",
    status: "Intermediate",
    rat: 10,
    time: "1h 40m ",
    by: "by JS Padoan",
  },
  {
    type: "Designing SSIS Integration Solutions",
    name: "Data professional",
    status: "Beginner",
    rat: 24,
    time: "1h 20m",
    by: "by Don Robins",
  },
  {
    type: "Exploring Product Business Foundations",
    name: "Business professional",
    status: "Intermediate",
    rat: 15,
    time: "2h 33m ",
    by: "by Michael Krasowski",
  },
  {
    type: "Earning and Retaining Your PMP® Certification Product Business Foundations",
    name: "Business professional",
    status: "Beginner",
    rat: 22,
    time: "3h 30m ",
    by: "by Tommy van Schaik",
  },
];

// dropdown open-close

function dropdown() {
  let dd_menu = document.querySelector(".dropdown-menu");
  if (dd_menu.style.display == "") {
    dd_menu.style.display = "block";
  } else {
    dd_menu.style.display = "";
  }
}

// dropdown fliters function calling

function dropDownFilter(v) {
  if (v == "highest") {
    console.log('v:', v)
    courses.sort((a, b) => {
      return b.rat - a.rat;
    });
    courseAppend(courses);
  }else if(v == "newest") {
    console.log('v:', v)
    courseAppend(courses);
  }else if(v == "atoz"){
    console.log('v:', v)
    courses.sort((a,b)=>{
        if ( a.type < b.type ){
          return -1;
        }
        if ( a.type > b.type ){
          return 1;
        }
        return 0;
    })
    courseAppend(courses);
  }else if(v == "ztoa"){
    console.log('v:', v)
    courses.sort((a,b)=>{
      if ( a.type < b.type ){
        return 1;
      }
      if ( a.type > b.type ){
        return -1;
      }
      return 0;
    })
    courseAppend(courses);
  }
}

// inputvalue clear function

let cl = document.getElementById("close");
let search_value = document.getElementById("browse-input");
cl.onclick = () => {
  search_value.value = null;
};

// skill filter function

function skills() {
  let Begin = document.getElementById("Beginner");
  let Inter = document.getElementById("Intermediate");
  let Advan = document.getElementById("Advanced");

  console.log(Begin.checked, Inter.checked, Advan.checked);

  if(Begin.checked && Inter.checked && Advan.checked){
    courseAppend(courses);
  }else if(Begin.checked && Inter.checked){
    let d = courses.filter((el)=>{
      if(el.status == "Beginner" || el.status == "Intermediate"){
        return el;
      }
    })
    courseAppend(d);
  }else if(Begin.checked && Advanced.checked){
    let d = courses.filter((el)=>{
      if(el.status == "Beginner" || el.status == "Advanced"){
        return el;
      }
    })
    courseAppend(d);
  }else if(Advanced.checked && Inter.checked){
    let d = courses.filter((el)=>{
      if(el.status == "Advanced" || el.status == "Intermediate"){
        return el;
      }
    })
    courseAppend(d);
  }else if(Begin.checked){
    let d = courses.filter((el)=>{
      if(el.status == "Beginner"){
        return el;
      }
    })
    courseAppend(d);
  }else if(Inter.checked){
    let d = courses.filter((el)=>{
      if(el.status == "Intermediate"){
        return el;
      }
    })
    courseAppend(d);
  }else if(Advan.checked){
    let d = courses.filter((el)=>{
      if(el.status == "Advanced"){
        return el;
      }
    })
    courseAppend(d);
  }
}

let data_div = document.getElementById("courses_data");

function courseAppend(d) {
  let data1 = d;

  data_div.innerHTML = null;

  data1.forEach(function (el) {
    let div = document.createElement("div");

    let type = document.createElement("h4");
    type.innerHTML = el.type;
    let wname = document.createElement("p");
    wname.innerHTML = el.by;
    let ul = document.createElement("ul");
    ul.setAttribute("class", "cards-ul-flex");
    let time = document.createElement("li");
    time.innerHTML = el.time;
    let status = document.createElement("li");
    status.innerHTML = el.status;
    let rat = document.createElement("li");
    rat.innerHTML = "(" + el.rat +")";
    let img = document.createElement("img");
    img.src =
      "https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/course/level.png";
    let s_img = document.createElement("img");
    s_img.src =
      "https://www.nicepng.com/png/full/88-886368_five-yellow-stars-5-stars-black-background.png";
      s_img.setAttribute("id","star");
    let c_img = document.createElement("img");
    c_img.src =
      " https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/course/clock.png";

    ul.append(time, c_img, status, img, s_img, rat);
    div.append(type, wname, ul);
    data_div.append(div);
  });
}
