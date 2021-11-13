// this function will locate to respective page just pass that page name as a prop
function locateTo(string) {
    if (string === "skills-plans-and-pricing") {
        window.location.href = "./skills-plans-and-pricing.html";
    } else if (string === "skills") {
        window.location.href = "./skills.html";
    } else if (string === "skill-iq") {
        window.location.href = "./skill-iq.html";
    } else if (string === "flow") {
        window.location.href = "./flow.html";
    } else if (string === "flow-plans-and-pricing") {
        window.location.href = "./flow-plans-and-pricing.html";
    } else if (string === "checkout") {
        window.location.href = "./checkout.html";
    } else if (string === "courses") {
        window.location.href = "./courses.html";
    } else if (string === "for-individuals") {
        window.location.href = "./for-individuals.html";
    } else if (string === "free-trial") {
        window.location.href = "./free-trial.html";
    } else if (string === "index") {
        window.location.href = "./index.html";
    } else if (string === "signin") {
        window.location.href = "./signin.html";
    } else if (string === "subscription") {
        window.location.href = "./subscription.html";
    }else if (string === "resources-blog") {
        window.location.href = "./resources-blog.html";
    }else if (string === "resources-custo-stories") {
        window.location.href = "./resources-custo-stories.html";
    }else if (string === "resources-event") {
        window.location.href = "./resources-event.html";
    }else if (string === "signin-company") {
        window.location.href = "./signin-company.html";
    }else if (string === "signin") {
        window.location.href = "./signin.html";
    }
}


let onClick = document.getElementById("onclick");
onClick.addEventListener("click", () => {
    locateTo(string);
})