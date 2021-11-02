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
