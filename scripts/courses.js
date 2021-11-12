

let data_div = document.getElementById("courses_data");



// function newThisMonth() {
  
// }

// function trend() {
 
// }



async function moon(){
  let res = await fetch("../scripts/courses.json");
  let d = await res.json();
  let data = d.all;  
 return data;
}






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

async function dropDownFilter(v) {
  let data = await moon();
  
  // console.log('all_data:', data)

  if (v == "highest") {
   
      data.sort((a, b) => {
        return b.rating - a.rating;
      });
      courseAppend(data);
  
  }else if(v == "newest") {
    
      courseAppend(data);
   
  }else if(v == "atoz"){
   
     
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
  
  }else if(v == "ztoa"){
   
  
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

async function skills() {
  let data = await moon();
  let Begin = document.getElementById("Beginner");
  let Inter = document.getElementById("Intermediate");
  let Advan = document.getElementById("Advanced");

  // console.log(Begin.checked, Inter.checked, Advan.checked);

  if(Begin.checked && Inter.checked && Advan.checked){
   
      courseAppend(data);
      
   
  }else if(Begin.checked && Inter.checked){
   
      
      let d = data.filter((el)=>{
        if(el.level == "Beginner" || el.level == "Intermediate"){
          return el;
        }
      })
      courseAppend(d);
  
    
  }else if(Begin.checked && Advanced.checked){
    
      let d = data.filter((el)=>{
        if(el.level == "Beginner" || el.level == "Advanced"){
          return el;
        }
      })
      courseAppend(d);
  
    
  }else if(Advanced.checked && Inter.checked){
   
      let d = data.filter((el)=>{
        if(el.level == "Advanced" || el.level == "Intermediate"){
          return el;
        }
      })
      courseAppend(d);
  
  }else if(Begin.checked){
    
  
      let d = data.filter((el)=>{
        if(el.level == "Beginner"){
          return el;
        }
      })
      courseAppend(d);
   
  }else if(Inter.checked){
  
      let d = data.filter((el)=>{
        if(el.level == "Intermediate"){
          return el;
        }
      })
      courseAppend(d);
 
  }else if(Advan.checked){
   
      let d = data.filter((el)=>{
        if(el.level == "Advanced"){
          return el;
        }
      })
      courseAppend(d);
    
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
      location.href = "course-details.html";
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


async function getVal(v) {
  console.log(v)

  let res = await fetch('../scripts/dataSlider.json');
  let d = await res.json();
  let data = d.data;
  localStorage.setItem("course",JSON.stringify(data[v-1]));
  
  location.href = "course-details.html";
}

// slider js function

async function slideData(){
  let res = await fetch('../scripts/dataSlider.json');

  let d = await res.json();

  slide(d.data)
}

// slideData();


let slid = document.getElementById("active-content");

function slide(data){

  slid.innerHTML = null;

  data.forEach((el)=>{

    let main_div = document.createElement("div");
    main_div.setAttribute("id","upperCards")

    let inner_div = document.createElement("div");
    inner_div.setAttribute("id","cards");

    let image = document.createElement("img");
    image.setAttribute("class","image")
    image.src =  el.image;

    let short_div = document.createElement("div");
    short_div.setAttribute("class","short-dis");

    let h3 = document.createElement("h4");
    h3.textContent= el.title;

    let p = document.createElement("div")
    p.textContent = el.by;

    let ul = document.createElement("ul")
    ul.setAttribute("class","cards-ul-flex")

    let li1 = document.createElement("li")
    li1.textContent = el.time;

    let time_img = document.createElement("img");
    time_img.src = "https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/course/clock.png";

    let li2 = document.createElement("li")
    li2.textContent = el.level;

    let level_img = document.createElement("img");
    level_img.src = "https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/course/level.png";

    ul.append(li1,time_img,li2,level_img);
    short_div.append(h3,p,ul);
    inner_div.append(image,short_div);
    main_div.append(inner_div);
    slid.append(main_div);
  })
  
}