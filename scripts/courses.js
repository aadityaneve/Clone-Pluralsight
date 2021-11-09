

let data_div = document.getElementById("courses_data");

let new_selected = document.getElementById("new-selected");
let trending = document.getElementById("trending");
let active_content = document.getElementById("ac");
let non_active_content = document.getElementById("nonac");
new_selected.addEventListener("click", newThisMonth);
trending.addEventListener("click", trend);

function newThisMonth() {
  new_selected.setAttribute("class", "selected");
  trending.setAttribute("class", "non-selected");
  active_content.setAttribute("class", "upperactive");
  non_active_content.setAttribute("class", "uppernonactive");
}

function trend() {
  trending.setAttribute("class", "selected");
  new_selected.setAttribute("class", "non-selected");
  active_content.setAttribute("class", "uppernonactive");
  non_active_content.setAttribute("class", "upperactive");
}
/*
const courses = [
  {
    type: "Configuring, Compiling, and Debugging TypeScript Projects",
    name: "Web development",
    level: "Beginner",
    rat: 51,
    time: "2h 7m",
    by: "by Daniel Stern",
  },
  {
    type: "JavaScript Arrays and Collections",
    name: "Web development",
    level: "Beginner",
    rat: 201,
    time: "1h 57m ",
    by: "by Jeff Batt",
  },
  {
    type: "Creating Asynchronous TypeScript Code",
    name: "Web development",
    level: "Beginner",
    rat: 92,
    time: "1h 50m ",
    by: "by John Papa",
  },
  {
    type: "Managing Big Data with AWS Storage Options",
    name: "Software development",
    level: "Advanced",
    rat: 11,
    time: "1h 38m ",
    by: "by Nertil Poci",
  },
  {
    type: "Working with Django Models",
    name: "Software development",
    level: "Intermediate",
    rat: 19,
    time: "2h 33m ",
    by: "by Reindert-Jan Ekker",
  },
  {
    type: "Credential Access with Responder",
    name: "Information & cyber security",
    level: "Advanced",
    rat: 12,
    time: "20m ",
    by: "by Ricardo Reimao",
  },
  {
    type: "Results and Reporting for CompTIA PenTest+",
    name: "Information & cyber security",
    level: "Advanced",
    rat: 18,
    time: "1h 16m ",
    by: "by Dale Meredith",
  },
  {
    type: "Autodesk Vault Professional Installation and Setup",
    name: "Manufacturing & design",
    level: "Advanced",
    rat: 12,
    time: "2h 25m ",
    by: "by Neil Cross",
  },
  {
    type: "Creating Data Integrations with SharePoint Framework",
    name: "It ops",
    level: "Intermediate",
    rat: 10,
    time: "1h 40m ",
    by: "by JS Padoan",
  },
  {
    type: "Designing SSIS Integration Solutions",
    name: "Data professional",
    level: "Beginner",
    rat: 24,
    time: "1h 20m",
    by: "by Don Robins",
  },
  {
    type: "Exploring Product Business Foundations",
    name: "Business professional",
    level: "Intermediate",
    rat: 15,
    time: "2h 33m ",
    by: "by Michael Krasowski",
  },
  {
    type: "Earning and Retaining Your PMP® Certification Product Business Foundations",
    name: "Business professional",
    level: "Beginner",
    rat: 22,
    time: "3h 30m ",
    by: "by Tommy van Schaik",
  },
];
*/

async function moon(){
  let res = await fetch("../scripts/courses.json");
  let d = await res.json();  
  let data = d.all;  
 return data;
}
moon().then((d) => {
  console.log(d)
})





// let data = moon();
// console.log('data:', data)
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
    moon().then((data) => {
      data.sort((a, b) => {
        return b.rating - a.rating;
      });
      courseAppend(data);
    })
  }else if(v == "newest") {
    moon().then((data) => {
      courseAppend(data);
    })
  }else if(v == "atoz"){
    moon().then((data) => {
     
      data.sort((a,b)=>{
          if ( a.title < b.title ){
            return -1;
          }
          if ( a.title > b.title ){
            return 1;
          }
          return 0;
        })
      
        courseAppend(data);
    })
  }else if(v == "ztoa"){
    moon().then((data) => {
  
      data.sort((a,b)=>{
        if ( a.title < b.title ){
          return 1;
        }
        if ( a.title > b.title ){
          return -1;
        }
        return 0;
      })
      courseAppend(data);
    })
  }
}

// inputvalue clear function

let cl = document.getElementById("close");
let search_value = document.getElementById("browse-input");
cl.onclick = () => {
  search_value.value = null;
  moon().then((data) => {
    courseAppend(data);
    
  })
};

// skill filter function

function skills() {
  let Begin = document.getElementById("Beginner");
  let Inter = document.getElementById("Intermediate");
  let Advan = document.getElementById("Advanced");

  // console.log(Begin.checked, Inter.checked, Advan.checked);

  if(Begin.checked && Inter.checked && Advan.checked){
    moon().then((data) => {
      courseAppend(data);
      
    })
  }else if(Begin.checked && Inter.checked){
    moon().then((data) => {
      
      let d = data.filter((el)=>{
        if(el.level == "Beginner" || el.level == "Intermediate"){
          return el;
        }
      })
      courseAppend(d);
  
    })
  }else if(Begin.checked && Advanced.checked){
    moon().then((data) => {
      let d = data.filter((el)=>{
        if(el.level == "Beginner" || el.level == "Advanced"){
          return el;
        }
      })
      courseAppend(d);
  
    })
  }else if(Advanced.checked && Inter.checked){
    moon().then((data) => {
      let d = data.filter((el)=>{
        if(el.level == "Advanced" || el.level == "Intermediate"){
          return el;
        }
      })
      courseAppend(d);
      
    })
  }else if(Begin.checked){
    moon().then((data) => {
  
      let d = data.filter((el)=>{
        if(el.level == "Beginner"){
          return el;
        }
      })
      courseAppend(d);
    })
  }else if(Inter.checked){
    moon().then((data) => {
  
      let d = data.filter((el)=>{
        if(el.level == "Intermediate"){
          return el;
        }
      })
      courseAppend(d);
    })
  }else if(Advan.checked){
    moon().then((data) => {
  
      let d = data.filter((el)=>{
        if(el.level == "Advanced"){
          return el;
        }
      })
      courseAppend(d);
    })
  }
}

function coursesFilter(a) {
  moon().then((data) => {
    let d = data.filter((el)=>{
       if(el.name == a) {
         return el;
       }
     })
     courseAppend(d);
    
  })
}

function search(){
  let value = document.getElementById("browse-input").value.toLowerCase();
  moon().then((data) => {

    let d = data.filter((el)=>{
      if(el.title.toLowerCase().includes(value)){
        return el;
      }
    })
    courseAppend(d);
  })
}

function courseAppend(data) {
  
  data_div.innerHTML = null;

  data.forEach(function (el) {
    let div = document.createElement("div");
    div.onclick = ()=>{
      localStorage.setItem("course",JSON.stringify(el));
    }

    let type = document.createElement("h4");
    type.innerHTML = el.title;
    let wname = document.createElement("p");
    wname.innerHTML = "by "+ el.by;
    let ul = document.createElement("ul");
    ul.setAttribute("class", "cards-ul-flex");
    let time = document.createElement("li");
    time.innerHTML = el.time;
    let level = document.createElement("li");
    level.innerHTML = el.level;
    let rat = document.createElement("li");
    rat.innerHTML = "(" + el.rating +")";
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

    ul.append(time, c_img, level, img, s_img, rat);
    div.append(type, wname, ul);
    data_div.append(div);
  });
}
moon().then((data) => {
  courseAppend(data);
})
