let data_div = document.getElementById('courses_data');

let new_selected = document.getElementById('new-selected');
let trending = document.getElementById('trending');

let active_content = document.getElementById('ac');
let non_active_content = document.getElementById('nonac');

new_selected.addEventListener('click', () => {
    new_selected.setAttribute('class', 'selected');
    trending.setAttribute('class', 'non-selected');

    active_content.setAttribute('class', 'displayBlock');
    non_active_content.setAttribute('class', 'displayNone');
});

async function moon() {
    let res = await fetch('../scripts/courses.json');
    let d = await res.json();
    let data = d.all;
    return data;
}

function dropdown() {
    let dd_menu = document.querySelector('.dropdown-menu');
    if (dd_menu.style.display == '') {
        dd_menu.style.display = 'block';
    } else {
        dd_menu.style.display = '';
    }
}

// dropdown fliters function calling

async function dropDownFilter(v) {
    // let data = await moon();

    if (v == 'highest') {
        allCoursesData.sort((a, b) => {
            return b.rating - a.rating;
        });
        courseAppend(allCoursesData);
    } else if (v == 'newest') {
        allCoursesData.sort((a, b) => {
            return a.date - b.date;
        });

        courseAppend(allCoursesData);
    } else if (v == 'atoz') {
        allCoursesData.sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        });

        courseAppend(allCoursesData);
    } else if (v == 'ztoa') {
        allCoursesData.sort((a, b) => {
            if (a.title < b.title) {
                return 1;
            }
            if (a.title > b.title) {
                return -1;
            }
            return 0;
        });
        courseAppend(allCoursesData);
    }
}

// inputvalue clear function

let cl = document.getElementById('close');
let search_value = document.getElementById('browse-input');
cl.onclick = () => {
    search_value.value = null;
    moon().then((data) => {
        courseAppend(data);
    });
};

// Routes
const courses = 'https://clone-pluralsight-server.herokuapp.com/courses';
const beginner =
    'https://clone-pluralsight-server.herokuapp.com/courses/beginner';
const intermediate =
    'https://clone-pluralsight-server.herokuapp.com/courses/intermediate';
const advanced =
    'https://clone-pluralsight-server.herokuapp.com/courses/advanced';

const getCourses = async (API) => {
    try {
        let response = await fetch(API);
        let res = response.json();
        return res;
    } catch (e) {
        console.log('Error: ', e);
    }
};

// skill filter function
skills();
let allCoursesData;
async function skills() {
    // let data = await moon();

    let course = await getCourses(courses);

    courseAppend(course.course);

    let Begin = document.getElementById('Beginner');
    let Inter = document.getElementById('Intermediate');
    let Advan = document.getElementById('Advanced');

    if (Begin.checked && Inter.checked && Advan.checked) {
        let beginnerCourses = await getCourses(beginner);
        let intermediateCourses = await getCourses(intermediate);
        let advancedCourses = await getCourses(advanced);

        allCoursesData = beginnerCourses.course.concat(
            intermediateCourses.course,
            advancedCourses.course
        );
        courseAppend(allCoursesData);
    } else if (Begin.checked && Inter.checked) {
        // let d = data.filter((el) => {
        //     if (el.level == 'Beginner' || el.level == 'Intermediate') {
        //         return el;
        //     }
        // });

        let beginnerCourses = await getCourses(beginner);
        let intermediateCourses = await getCourses(intermediate);

        allCoursesData = beginnerCourses.course.concat(
            intermediateCourses.course
        );
        courseAppend(allCoursesData);
    } else if (Begin.checked && Advanced.checked) {
        // let d = data.filter((el) => {
        //     if (el.level == 'Beginner' || el.level == 'Advanced') {
        //         return el;
        //     }
        // });

        let beginnerCourses = await getCourses(beginner);
        let advancedCourses = await getCourses(advanced);
        allCoursesData = beginnerCourses.course.concat(advancedCourses.course);
        courseAppend(allCoursesData);
    } else if (Advanced.checked && Inter.checked) {
        // let d = data.filter((el) => {
        //     if (el.level == 'Advanced' || el.level == 'Intermediate') {
        //         return el;
        //     }
        // });
        // courseAppend(d);

        let intermediateCourses = await getCourses(intermediate);
        let advancedCourses = await getCourses(advanced);
        allCoursesData = intermediateCourses.course.concat(
            advancedCourses.course
        );
        courseAppend(allCoursesData);
    } else if (Begin.checked) {
        // let d = data.filter((el) => {
        //     if (el.level == 'Beginner') {
        //         return el;
        //     }
        // });
        // courseAppend(d);

        let beginnerCourses = await getCourses(beginner);
        allCoursesData = beginnerCourses.course;
        courseAppend(allCoursesData);
    } else if (Inter.checked) {
        // let d = data.filter((el) => {
        //     if (el.level == 'Intermediate') {
        //         return el;
        //     }
        // });
        // courseAppend(d);

        let intermediateCourses = await getCourses(intermediate);
        allCoursesData = intermediateCourses.course;
        courseAppend(allCoursesData);
    } else if (Advan.checked) {
        // let d = data.filter((el) => {
        //     if (el.level == 'Advanced') {
        //         return el;
        //     }
        // });
        // courseAppend(d);

        let advancedCourses = await getCourses(advanced);
        allCoursesData = advancedCourses.course;
        courseAppend(allCoursesData);
    }
}

function coursesFilter(a) {
    moon().then((data) => {
        let d = data.filter((el) => {
            if (el.name == a) {
                return el;
            }
        });
        courseAppend(d);
    });
}

function search() {
    let value = document.getElementById('browse-input').value.toLowerCase();
    moon().then((data) => {
        let d = data.filter((el) => {
            if (el.title.toLowerCase().includes(value)) {
                return el;
            }
        });
        courseAppend(d);
    });
}

function courseAppend(data) {
    data_div.innerHTML = null;

    data.forEach(function (el) {
        let div = document.createElement('div');
        div.onclick = () => {
            localStorage.setItem('course', JSON.stringify(el));
            location.href = 'course-details.html';
        };

        let type = document.createElement('h4');
        type.innerHTML = el.title;
        let wname = document.createElement('p');
        wname.innerHTML = 'by ' + el.by;
        let ul = document.createElement('ul');
        ul.setAttribute('class', 'cards-ul-flex');
        let time = document.createElement('li');
        time.innerHTML = el.time;
        let level = document.createElement('li');
        level.innerHTML = el.level;
        let rat = document.createElement('li');
        rat.innerHTML = '(' + el.rating + ')';
        let img = document.createElement('img');
        img.src =
            'https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/course/level.png';
        let s_img = document.createElement('img');
        s_img.src =
            'https://www.nicepng.com/png/full/88-886368_five-yellow-stars-5-stars-black-background.png';
        s_img.setAttribute('id', 'star');
        let c_img = document.createElement('img');
        c_img.src =
            ' https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/course/clock.png';

        ul.append(time, c_img, level, img, s_img, rat);
        div.append(type, wname, ul);
        data_div.append(div);
    });
}

moon().then((data) => {
    courseAppend(data);
});

async function getVal(v) {
    console.log(v);

    let res = await fetch('../scripts/dataSlider.json');
    let d = await res.json();
    let data = d.data;
    localStorage.setItem('course', JSON.stringify(data[v - 1]));

    location.href = 'course-details.html';
}

// slider js function

async function slideData() {
    let res = await fetch('../scripts/dataSlider.json');

    let d = await res.json();

    slide(d.data);
}

let slid = document.getElementById('active-content');

function slide(data) {
    slid.innerHTML = null;

    data.forEach((el) => {
        let main_div = document.createElement('div');
        main_div.setAttribute('id', 'upperCards');

        let inner_div = document.createElement('div');
        inner_div.setAttribute('id', 'cards');

        let image = document.createElement('img');
        image.setAttribute('class', 'image');
        image.src = el.image;

        let short_div = document.createElement('div');
        short_div.setAttribute('class', 'short-dis');

        let h3 = document.createElement('h4');
        h3.textContent = el.title;

        let p = document.createElement('div');
        p.textContent = el.by;

        let ul = document.createElement('ul');
        ul.setAttribute('class', 'cards-ul-flex');

        let li1 = document.createElement('li');
        li1.textContent = el.time;

        let time_img = document.createElement('img');
        time_img.src =
            'https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/course/clock.png';

        let li2 = document.createElement('li');
        li2.textContent = el.level;

        let level_img = document.createElement('img');
        level_img.src =
            'https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/course/level.png';

        ul.append(li1, time_img, li2, level_img);
        short_div.append(h3, p, ul);
        inner_div.append(image, short_div);
        main_div.append(inner_div);
        slid.append(main_div);
    });
}
