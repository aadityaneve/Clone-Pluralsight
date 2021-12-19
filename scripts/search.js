let search = document.getElementById("img");
let body = document.getElementById("mainBody");
let parentDiv = document.getElementById("parentDiv");

let searchItem = document.getElementById("searchItem");

searchItem.style.display = "none";
search.addEventListener("click", () => {
  searchItem.style.display = "flex";
  parentDiv.style.display = "block";
});

let close = document.getElementById("p");
close.addEventListener("click", () => {
  searchItem.style.display = "none";
  parentDiv.style.display = "none";
});

let searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", () => {
  console.log(searchInput.value);
});

const courses = "https://clone-pluralsight-server.herokuapp.com/courses";

const getCourses = async (API) => {
  try {
    let response = await fetch(API);
    let res = response.json();
    return res;
  } catch (e) {
    console.log("Error: ", e);
  }
};

skills();
let allCoursesData;
async function skills() {
  let allCoursesFinalData = await getCourses(courses);
  allCoursesData = allCoursesFinalData.course;
  courseAppend(allCoursesData);
}
