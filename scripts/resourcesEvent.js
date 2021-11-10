var eventDiv=[
    {
        TopTitl:"Product & Tech Demo",
        SubTitl:"Enablement Demos",
        Sumry:"Get the most from Pluralsight by joining one of our 2021 Enablement Demo Sessions.",
        date:"Nov 18,21",
        time:"1:00 PM GMT",
        regn:"EMEA",
    },
    {
        TopTitl:"Briefings & Workshops",
        SubTitl:"Pluralsight Expert Hour",
        Sumry:"Build community and get exclusive wisdom from tech leaders. ",
        date:"Nov 18,21",
        time:"1:00 PM GMT",
        regn:"All Regions",
    },
    {
        TopTitl:"Product & Tech Demo",
        SubTitl:"Skills Enablement Sessions",
        Sumry:"Looking to make the most of your Pluralsight Skills plan? Join us for a live demo designed to help you...",
        date:"Nov 18,21",
        time:"1:00 PM GMT",
        regn:"All Regions",
    },
    {
        TopTitl:"In Platform Conferences, Product & Tech Demo",
        SubTitl:"AWS Re:Invent 2021",
        Sumry:"AWS Re:Invent invites technologists and cloud professionals to learn how the....",
        date:"Nov 18,21",
        time:"1:00 PM GMT",
        regn:"Americas",
    }
];

eventDiv.forEach(element => {
    let div1=document.createElement("div");
    div1.className="infoEndDiv";
    let divcont=document.createElement("div");
    divcont.className="titlTxtCont";
    let p1=document.createElement('p');
    p1.className="Einfo1Div";
    p1.innerText=element.TopTitl;
    let p2=document.createElement('p');
    p2.className="Einfo2Div";
    p2.innerText=element.SubTitl;
    let p3=document.createElement('p');
    p3.className="Einfo3Div";
    p3.innerText=element.Sumry;
    divcont.append(p1,p2,p3);
    let div2=document.createElement("div");
    div2.className="infoDateDiv";
    let div3=document.createElement("div");
    div3.className="EvIconDiv";

    let span1=document.createElement("span");
    span1.className="material-icons infoIconSize";
    span1.innerText="date_range";
    let span2=document.createElement("span");
    span2.className="eventDelTxt";
    span2.innerText=element.date;

    let span3=document.createElement("span");
    span3.className="material-icons infoIconSize icon2Spc";
    span3.innerText="watch_later";
    let span4=document.createElement("span");
    span4.className="eventDelTxt";
    span4.innerText=element.time;

    div3.append(span1,span2,span3,span4);
    let span5=document.createElement("span");
    span5.className="material-icons infoIconSize";
    span5.innerText="language";
    let span6=document.createElement("span");
    span6.className="eventDelTxt";
    span6.innerText=element.regn;

    div2.append(div3,span5,span6);

    let div4=document.createElement("div");
    div4.className="infoLstDiv";
    let span7=document.createElement("span");
    span7.className="lrnmrTxt";
    span7.innerText="Learn more ";

    let span8=document.createElement("span");
    span8.className="lrnMore";
    span8.innerText=">";

    div4.append(span7,span8);
    div1.append(divcont,div2,div4)
    document.getElementById("UpEvInfoDiv").append(div1);
    // document.getElementById("UpEv2InfoDiv").append(div1);
});

var event2Div=[
    {
        TopTitl:"Webinars",
        SubTitl:"Backend development on AWS for frontend engineers",
        Sumry:"Learn backend principles that can improve your career as a frontend developer—including...",
        date:"Nov 18,21",
        time:"1:00 PM GMT",
        regn:"EMEA",
    },
    {
        TopTitl:"Briefings & Workshops",
        SubTitl:"Virtual Happy Hour | Drinks + Delivery...",
        Sumry:"Learn how the new Pluralsight Flow Delivery Module’s features help engineering teams use data...",
        date:"Nov 18,21",
        time:"1:00 PM GMT",
        regn:"All Regions",
    },
    {
        TopTitl:"Webinars",
        SubTitl:"The state of cloud: Tools and best...",
        Sumry:"Join cloud experts Janani Ravi, David Tucker, and Casey West for actionable tips on how to...",
        date:"Nov 18,21",
        time:"1:00 PM GMT",
        regn:"All Regions",
    },
    {
        TopTitl:"Webinars",
        SubTitl:"Panel: Accenture’s Tech Skill...",
        Sumry:"Get leading insights and best practices as Accenture shares ways you can structure, launch...",
        date:"Nov 18,21",
        time:"1:00 PM GMT",
        regn:"Americas",
    },
    {
        TopTitl:"Webinars",
        SubTitl:"The Benefits of the Modern Cloud...",
        Sumry:"Join David Tucker, cloud expert, to review the approaches that can lead companies to reduce...",
        date:"Nov 18,21",
        time:"1:00 PM GMT",
        regn:"Americas",
    },
    {
        TopTitl:"Webinars",
        SubTitl:"2021 State of Upskilling",
        Sumry:"Learn more about the state of upskilling and how working from home has unveiled skills gaps...",
        date:"Nov 18,21",
        time:"1:00 PM GMT",
        regn:"Americas",
    },
    {
        TopTitl:"Webinars",
        SubTitl:"Building a data-driven culture",
        Sumry:"Data provides insights and nuggets that can help propel an organization forward, but many...",
        date:"Nov 18,21",
        time:"1:00 PM GMT",
        regn:"Americas",
    },
    {
        TopTitl:"Webinars",
        SubTitl:"Cybersecurity street smarts: One number...",
        Sumry:"Build an incident response plan and align your team to it. Start by focusing on the one number...",
        date:"Nov 18,21",
        time:"1:00 PM GMT",
        regn:"Americas",
    },
    {
        TopTitl:"Webinars",
        SubTitl:"Panel: Create long-lasting change to your workflow",
        Sumry:"Learn how to improve your engineering...",
        date:"Nov 18,21",
        time:"1:00 PM GMT",
        regn:"Americas",
    },
    {
        TopTitl:"Webinars",
        SubTitl:"The state of cloud: Tools and best...",
        Sumry:"Join cloud experts Janani Ravi, David Tucker, and Casey West for actionable tips on how to...",
        date:"Nov 18,21",
        time:"1:00 PM GMT",
        regn:"All Regions",
    },
    {
        TopTitl:"Webinars",
        SubTitl:"Panel: Accenture’s Tech Skill...",
        Sumry:"Get leading insights and best practices as Accenture shares ways you can structure, launch...",
        date:"Nov 18,21",
        time:"1:00 PM GMT",
        regn:"Americas",
    },
    {
        TopTitl:"Webinars",
        SubTitl:"The Benefits of the Modern Cloud...",
        Sumry:"Join David Tucker, cloud expert, to review the approaches that can lead companies to reduce...",
        date:"Nov 18,21",
        time:"1:00 PM GMT",
        regn:"Americas",
    }
]

let chkCount=0,divNum=0;
event2Div.forEach(element => {
    divNum++;
    chkCount++;
    let div1=document.createElement("div");
    if(chkCount>6){
        div1.style.display="none";
    }
    div1.className="infoEndDiv";
    div1.id=`infoDiv${divNum}`;
    let divcont=document.createElement("div");
    divcont.className="titlTxtCont";
    let p1=document.createElement('p');
    p1.className="Einfo1Div";
    p1.innerText=element.TopTitl;
    let p2=document.createElement('p');
    p2.className="Einfo2Div";
    p2.innerText=element.SubTitl;
    let p3=document.createElement('p');
    p3.className="Einfo3Div";
    p3.innerText=element.Sumry;
    divcont.append(p1,p2,p3);
    let div2=document.createElement("div");
    div2.className="infoDateDiv";
    let div3=document.createElement("div");
    div3.className="EvIconDiv";

    let span1=document.createElement("span");
    span1.className="material-icons infoIconSize";
    span1.innerText="date_range";
    let span2=document.createElement("span");
    span2.className="eventDelTxt";
    span2.innerText=element.date;

    let span3=document.createElement("span");
    span3.className="material-icons infoIconSize icon2Spc";
    span3.innerText="watch_later";
    let span4=document.createElement("span");
    span4.className="eventDelTxt";
    span4.innerText=element.time;

    div3.append(span1,span2,span3,span4);
    let span5=document.createElement("span");
    span5.className="material-icons infoIconSize";
    span5.innerText="language";
    let span6=document.createElement("span");
    span6.className="eventDelTxt";
    span6.innerText=element.regn;

    div2.append(div3,span5,span6);

    let div4=document.createElement("div");
    div4.className="infoLstDiv";
    let span7=document.createElement("span");
    span7.className="lrnmrTxt";
    span7.innerText="Learn more ";

    let span8=document.createElement("span");
    span8.className="lrnMore";
    span8.innerText=">";

    div4.append(span7,span8);
    div1.append(divcont,div2,div4)
    document.getElementById("UpEv2InfoDiv").append(div1);
});

let showMore=document.createElement("div");
showMore.className="showMoreEvnt"
showMore.onclick=function(){
    showMoreEv();
}
showMore.innerText="Show more events"
document.getElementById("UpEv2InfoDiv").append(showMore);

var strt=7;
function showMoreEv(){
    var j=strt+3;
    console.log(strt,j);
    for(var i=strt;i<j;i++){
        document.getElementById(`infoDiv${i}`).style.display="block";
        console.log("here");
        strt++;
    }
}

