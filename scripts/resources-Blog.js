var arr = [
    [{ img: "https://www.pluralsight.com/content/pluralsight/en/blog/future-proof-your-org/jcr:content/hub-image/file.img.8e3765e7-77c1-418c-85e7-60af4edff3c4.jpg", title: "Title", heading: "Future-proof your org against today’s top three market challenges", summary: "Discover the 3 critical market trends that your org needs to overcome in order to thrive. Learn how Pluralsight can..." },
    { img: "https://www.pluralsight.com/content/pluralsight/en/blog/cloud/clo/cloud-tracker/jcr:content/image-res/file.img.06e87c8b-fd67-494b-b443-6634d9403f0d.png", title: "Title", heading: "Cloud Tracker: Get caught up and stay relevant on all things cloud", summary: "Join cloud strategist and Pluralsight author David Tucker for Cloud Tracker, your source for the the latest news,..." },
    { img: "https://www.pluralsight.com/content/pluralsight/en/blog/news/plu/pluralsight-expands-hands-on-learning/jcr:content/hub-image/file.img.57911532-b0ce-483b-84c9-577932425199.png", title: "Title", heading: "Pluralsight Expands Hands-On Learning Opportunities With New Skills Capabilities", summary: "" }
    ],
    [{ img: "https://www.pluralsight.com/content/pluralsight/en/blog/software-development/bin/binged-tech-skills/jcr:content/hub-image/file.img.734090a4-9068-47f9-a543-ab780fb2f3c5.png", title: "Title", heading: "The 10 most binged technology courses during COVID-19", summary: "These are the most viewed courses, paths and assessments in the year since COVID-19 forced a large part of the..." },
    { img: "https://www.pluralsight.com/content/pluralsight/en/blog/software-development/sta/state-of-tech-after-covid/jcr:content/image-res/file.img.90bc3a64-00ac-4c17-adc6-80e2e7ab8d42.jpg", title: "Title", heading: "The state of tech: 4 tough questions about change in the shadow of COVID-19", summary: "Technology experts discuss COVID-19’s lingering impact on the way we work, the biggest issues and opportunities the..." },
    { img: "https://www.pluralsight.com/content/pluralsight/en/blog/it-ops/fin/fintech-skills-to-develop/jcr:content/hub-image/file.img.2b14a153-2d1f-46b1-8dbc-e672a60788ac.png", title: "Title", heading: "5 essential fintech skills organizations need to develop now",summary: "Learn what fintech skills are more critical to organizations now than ever before, including DevSecOps, AI/ML, data,..." }
    ],
    [{ img: "https://www.pluralsight.com/content/pluralsight/en/blog/cloud/cer/certifications-guide/jcr:content/hub-image/file.img.56dc7127-e77f-433a-9022-0efb44f86be1.jpg", title: "Title", heading: "Future-proof your org against today’s top three market challenges", summary: "Discover the 3 critical market trends that your org needs to overcome in order to thrive. Learn how Pluralsight can..." },
    { img: "https://www.pluralsight.com/content/pluralsight/en/blog/software-development/how/how-to-build-custom-containers-docker/jcr:content/image-res/file.img.ca30f7e6-0995-4487-896f-4ebccec8216e.jpg", title: "Title", heading: "Cloud Tracker: Get caught up and stay relevant on all things cloud", summary: "Join cloud strategist and Pluralsight author David Tucker for Cloud Tracker, your source for the the latest news,..." },
    { img: "https://www.pluralsight.com/content/pluralsight/en/blog/teams/mcg/mcgee-cos-josh-batchelor-on-customizing-your-communication-styles/jcr:content/image-res/file.img.47206adb-21d9-4499-903c-1fbd30c5dd5f.jpg", title: "Title", heading: "Pluralsight Expands Hands-On Learning Opportunities With New Skills Capabilities", summary: "" }
    ],
    [{ img: "https://www.pluralsight.com/content/pluralsight/en/blog/platform/thi/things-to-learn-on-pluralsight/jcr:content/image-res/file.img.5660d010-b294-4fdf-aa80-a42fb654cafc.png", title: "Title", heading: "8 things you can accomplish in a few hours on Pluralsight", summary: "If you're a technology professional trying to figure out what you should explore on Pluralsight first, here's your..." },
    { img: "https://www.pluralsight.com/content/dam/pluralsight2/general/brand-photos/environment-overhead-008-hero.jpg", title: "Title", heading: "Skill up and show off: Collecting badges on Pluralsight Skills", summary: "Pluralsight Skills now features badges designed to incentivize individual and team upskilling efforts. Limited Edition..." }
    ],
    [{ img: "https://www.pluralsight.com/content/dam/pluralsight2/general/brand-photos/environment-overhead-008-hero.jpg", title: "Title", heading: "Pluralsight LIVE 2021 Week 1 recap: Stronger together", summary: "" },
    { img: "https://www.pluralsight.com/content/pluralsight/en/blog/news/gad/gads-recap-2020/jcr:content/image-res/file.img.54ec2554-ba57-4d19-9f44-e5bf68a516f4.png", title: "Title", heading: "Google Africa Developer Scholarship program: 2020 recap", summary: "Hear from participants in the Google Africa Developer Scholarship and see why this annual partnership between Google,..." }
    ]
];

var arr2=["articleDiv2","articleDiv3","articleDiv4","articleDiv5","articleDiv6"];
var i=0

    arr.forEach(element =>{
        element.forEach(el => {
            let div = document.createElement("div");
            let img = document.createElement("img");
            img.src = el.img;
            let Idiv=document.createElement("div");
            Idiv.className="text_container"
            let art = document.createElement('p');
            art.className = "CommnArticleTxt"
            art.innerText = el.title
            let hdng = document.createElement('p');
            hdng.className = "CommnHeadingTxt"
            hdng.innerText = el.heading;
            let smry = document.createElement('p');
            smry.className = "CommonSummryTxt"
            smry.innerText = el.summary;
            Idiv.append(art,hdng,smry);
    
            div.append(img, Idiv);
            document.getElementById(`${arr2[i]}`).appendChild(div);
        });
        i++;
    })