// Script for navigation bar
let element1 = document.querySelector("#open");
let element2 = document.querySelector("#closebar");
let element3 = document.querySelector("#journey-board");
let element4 = document.querySelector("#journey-board-content");
let element5= document.querySelector("#journey-board-heading");

let element6= document.querySelector("#number-list");

element1.addEventListener('click',show)
function show(){
element3.style.left="0px"
element1.style.display="none";
element2.style.display="flex";
element4.style.display="unset";
element6.style.display="none";
}
element2.addEventListener('click',hide)
function hide(){
element3.style.left="-280px"
element1.style.display="flex";
element2.style.display="none";
element4.style.display="none";
element6.style.display="flex";
}


//fetch Json data'


fetch("data.json")
.then(response => response.json())
.then(data=>showInfo(data));

function showInfo(data){

//Fetch Box Hedeaing data and description

let box_headings = document.getElementsByClassName("box-heading");
let box_desc = document.getElementsByClassName("box-desc");
for(i=0;i<4;i++)
{
    box_desc[i].children[0].innerHTML=`<b>Description: </b> ${data["tasks"][0]["assets"][i]["asset_description"]}`
    box_headings[i].children[0].innerText = data["tasks"][0]["assets"][i]["asset_title"];
   
}


// Project details

// fetch Task Title nd Description
let taskTitle= data["tasks"][0]["task_title"];
let taskInfo = document.getElementById("task-desc");
taskInfo.children[0].children[0].innerText=taskTitle;

taskInfo.children[0].children[1].innerText= data["tasks"][0]["task_description"];


// fetch box 4 content

let link = data["tasks"][0]["assets"][3]["asset_content"];
let box_4_content= document.getElementById("box4-content").children[0];
box_4_content.src= link;

//fetch box 1 content

let video = data["tasks"][0]["assets"][0]["asset_content"];
let box_1_content = document.getElementById("box1-content").children[0];
box_1_content.src = video;

// set page heading
let pageHeader = data["title"];
 document.getElementById("task-heading").children[0].innerText=pageHeader;

}

