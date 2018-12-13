//Global Variables
var jar = '<svg viewBox="0 0 746.5 1150" xmlns="http://www.w3.org/2000/svg">' 
+ '<defs><clipPath id="a"><path d="m466,189.25v1.2812l-259,6.97s13,44 8,59-97,103.19-97,193.5v566s15.75,75.25 29.5,106.5 32.5,88.75 113.75,98.75c75.811,4.2286 79.478,12.75 228.75,12.75s154.26-3.9563 228.75-12.75c81.25-10 100-67.5 113.75-98.75 13.75-31.2 29.5-106.4 29.5-106.4v-566c0-90.312-92-178.5-97-193.5s8-59 8-59l-259-6.9688v-1.2812l-24,.65625z"/>'
+ '</clipPath><clipPath id="g"><path d="m490 85c-94.287 0-275.65 5.4645-282.72 9-6.4786 3.2393-18.375 17.771-20.406 20.281 28.61-5.33 104.5-13.28 303.13-13.28s274.52 7.9481 303.12 13.281c-2.03-2.51-13.92-17.041-20.4-20.28-7.07-3.536-188.43-9-282.72-9z"/>'
+ '</clipPath><clipPath id="f"><path d="m490 85c-94.287 0-275.65 5.4645-282.72 9s-21.188 21.219-21.188 21.219v77.781l10.812 5.3125s144.73-5.3125 190.69-5.3125h204.81c45.962 0 190.69 5.3125 190.69 5.3125l10.812-5.3125v-77.781s-14.116-17.683-21.188-21.219c-7.06-3.537-188.42-9.001-282.71-9.001z"/>'
+ '</clipPath><clipPath id="e"><path d="m490,125c-101.94,0-197.92.0384-303.94,9.3438-5.2064.90051-7.75,2.0106-7.75,5.8438s.98984,4.9543 7.6875,3.8125c102.7-8.8558 202.17-9 304-9s201.3.14425 304,9c6.6977,1.1418 7.6875.0206 7.6875-3.8125s-2.5436-4.9432-7.75-5.8438c-106.02-9.3-202-9.34-303.94-9.34z"/>'
+ '</clipPath><filter id="o"><feGaussianBlur stdDeviation="5.13"/></filter><filter id="c" x="-.10915" y="-.04137" width="1.2183" height="1.0827">'
+ '<feGaussianBlur stdDeviation="18.0094"/></filter><filter id="l" x="-.82673" y="-.33817" width="2.6535" height="1.6763"><feGaussianBlur stdDeviation="146.4"/></filter>'
+ '<filter id="q" x="-.01854" y="-.61687" width="1.0371" height="2.2337"><feGaussianBlur stdDeviation="4.6908"/></filter>'
+ '<filter id="p" x="-.01844" y="-.75789" width="1.0369" height="2.5158"><feGaussianBlur stdDeviation="4.3612"/></filter>'
+ '<filter id="d" x="-1.0662" y="-.21656" width="3.1324" height="1.4331"><feGaussianBlur stdDeviation="9.4125"/></filter>'
+ '<filter id="b" x="-.00619" y="-.19855" width="1.0124" height="1.3971"><feGaussianBlur stdDeviation="1.607"/></filter>'
+ '<filter id="n" x="-.01319" y="-.13322" width="1.0264" height="1.2664"><feGaussianBlur stdDeviation="3.4917"/></filter>'
+ '<filter id="m" x="-.04827" y="-.32317" width="1.0966" height="1.6463"><feGaussianBlur stdDeviation="13.5959"/></filter>'
+ '<linearGradient id="k" x2="0" y1="408" y2="237.36" gradientUnits="userSpaceOnUse"><stop stop-opacity=".1647" offset="0"/>'
+ '<stop stop-opacity=".1412" offset=".5"/><stop stop-opacity="0" offset="1"/></linearGradient><linearGradient id="j" x2="0" y1="1233.8" y2="189.58" gradientUnits="userSpaceOnUse">'
+ '<stop offset="0"/><stop stop-color="#fff" offset=".6644"/><stop stop-color="#fff" offset=".9595"/><stop offset="1"/></linearGradient>'
+ '<linearGradient id="i" x1="1.5" x2="746.5" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop stop-opacity=".4941" offset="1"/></linearGradient>'
+ '<mask id="h" maskUnits="userSpaceOnUse"><path d="m75.087 188.33h296.34v1044.1h-296.34z" fill="url(#j)"/></mask></defs>'
+ '<path d="m91 113s13 44 8 59-97 103.19-97 193.5v566s15.75 75.25 29.5 106.5 32.5 88.75 113.75 98.75c75.811 4.2286 79.478 12.75 228.75 12.75s154.26-3.9563 228.75-12.75c81.25-10 100-67.5 113.75-98.75s29.5-106.5 29.5-106.5v-566c0-90.31-92-178.5-97-193.5s8-59 8-59" fill="none" opacity=".5" stroke="url(#i)"/>'
+ '<path transform="translate(-116,-84.5)" d="m152.03 1133c13.807 32.178 36.386 79.255 109.22 88.219 75.811 4.2286 79.478 12.75 228.75 12.75s154.26-3.9563 228.75-12.75c72.833-8.964 95.411-56.04 109.22-88.219-25.16 14.9-102.37 39.5-337.97 39.5s-312.81-24.608-337.97-39.469z" clip-path="url(#a)" fill-opacity=".1882" filter="url(#m)" opacity=".8"/>'
+ '<path d="m374,.5c-94.287,0-275.65,5.4645-282.72,9s-21.188,21.219-21.188,21.219v77.781l10.812,5.3125s144.73-5.3125 190.69-5.3125h204.81c45.962,0 190.69,5.3125 190.69,5.3125l10.812-5.3125v-77.781s-14.116-17.683-21.188-21.219c-7.06-3.5355-188.42-9-282.71-9z" fill-opacity=".0392"/>'
+ '<path transform="translate(-116,-84.5)" d="m172.28 1171.1c16.319 23.066 42.349 44.418 88.969 50.156 75.811 4.2286 79.478 12.75 228.75 12.75s154.26-3.9563 228.75-12.75c46.62-5.7379 72.65-27.09 88.969-50.156-24.71 10.7-98.55 28-317.72 28s-293.01-17.292-317.72-27.906z" clip-path="url(#a)" fill-opacity=".0941" filter="url(#n)"/>'
+ '<path d="m374,.5c-94.29,0-275.65,5.4645-282.72,9-6.478,3.239-18.375,17.771-20.406,20.281 28.604-5.333 104.5-13.281 303.12-13.281 198.63,0 274.52,7.948 303.12,13.281-2.03-2.51-13.92-17.042-20.4-20.281-7.07-3.5355-188.43-9-282.72-9z" fill="none" opacity=".3" stroke="#000"/>'
+ '<path d="m374,98.5c-188.46,0-269.23,4.0422-303.91,7.4375v2.5625l10.812,5.3125s144.73-5.3125 190.69-5.3125h204.81c45.962,0 190.69,5.3125 190.69,5.3125l10.812-5.3125v-.0625c-34.67-4.53-115.43-9.94-303.9-9.94z" fill-opacity=".3216"/>'
+ '<path transform="translate(-116,-84.5)" d="m60 392s192 20 430 20 430-20 430-20v-188h-870z" clip-path="url(#a)" fill="url(#k)" filter="url(#o)" opacity=".5"/>'
+ '<path transform="translate(-122,-84.5)" d="m502,189.25v1.2812l259,6.9688s-13,44-8,59 97,103.19 97,193.5v566s-15.75,75.25-29.5,106.5-32.5,88.75-113.75,98.75c-75.811,4.2286-79.478,12.75-228.75,12.75-3.7406,0-6.9997.01-10.562,0 143.83-.2089 148.45-8.5744 223.31-12.75 81.25-10 100-67.5 113.75-98.75 13.75-31.2 29.5-106.4 29.5-106.4v-566c0-90.312-92-178.5-97-193.5s8-59 8-59l-259-6.9688v-.84375l16-.4375zm-48,0 16,.4375-8,.21875-8-.21875v-.4375z" clip-path="url(#a)" filter="url(#c)" opacity=".4"/>'
+ '<path transform="translate(-118,-84.5)" d="m299.75,195-92.75,2.5s13,44 8,59-97,103.19-97,193.5v566s15.75,75.25 29.5,106.5 32.5,88.75 113.75,98.75c75.811,4.2286 79.478,12.75 228.75,12.75 20.193,0 37.559-.072 53-.2188-111.6-1.3683-121.19-8.7071-189.75-12.531-81.25-10-100-67.5-113.75-98.75-13.75-31.4-29.5-106.6-29.5-106.6v-566c0-90.312 92-178.5 97-193.5s-8-59-8-59l.75-2.5z" clip-path="url(#a)" filter="url(#l)" opacity=".24"/>'
+ '<path transform="translate(-116,-84.5)" d="m490,98.5c-198.7,0-274.65,7.9154-303.59,13.312l.9375,4.9375c28.25-5.27 104.09-13.25 302.65-13.25s274.4,7.9809 302.66,13.25l.9375-4.9375c-28.95-5.39-104.9-13.31-303.6-13.31z" clip-path="url(#g)" filter="url(#q)" opacity=".75"/>'
+ '<path transform="translate(-116,-84.5)" d="m490,82.5c-47.192,0-116.12,1.3787-174.16,3.1875-29.016.90438-55.281,1.8952-74.781,2.9062-9.7499.50551-17.819,1.0082-23.688,1.5-2.934.24591-5.3131.50605-7.125.75s-2.7536.23615-4.0938.90625l2.25,4.5c-.45631.22816.83235-.24422 2.5-.46875s4.0203-.44563 6.9062-.6875c5.7718-.48375 13.78-.99603 23.5-1.5 19.44-1.008 45.7-2.003 74.69-2.906 57.99-1.808 126.9-3.188 174-3.188 47.095,0 116.01,1.3801 174,3.1875 28.994.90368 55.247,1.8983 74.688,2.9062 9.7202.50397 17.728,1.0163 23.5,1.5 2.8859.24187 5.2386.46298 6.9062.6875s2.9563.6969 2.5.46875l2.25-4.5c-1.3402-.6701-2.2819-.6623-4.0938-.90625s-4.191-.50409-7.125-.75c-5.8681-.49181-13.938-.99449-23.688-1.5-19.51-1.012-45.78-2.003-74.79-2.907-58.04-1.809-126.97-3.188-174.16-3.188z" clip-path="url(#g)" filter="url(#p)" opacity=".25"/>'
+ '<path transform="translate(-116,-84.5)" d="m207.28 94c-7.0711 3.5355-21.188 21.219-21.188 21.219v77.781l10.812 5.3125" clip-path="url(#f)" fill="none" filter="url(#d)" opacity=".5" stroke="#000" stroke-width="10"/>'
+ '<path transform="matrix(-1,0,0,1,864,-84.5)" d="m207.28 94c-7.0711 3.5355-21.188 21.219-21.188 21.219v77.781l10.812 5.3125" clip-path="url(#f)" fill="none" filter="url(#d)" opacity=".5" stroke="#000" stroke-width="10"/>'
+ '<g transform="translate(-116,-84.5)">'
+ '<path d="m186.06,134.34c-5.2064.90051-7.75,2.0106-7.75,5.8438s.98984,4.9543 7.6875,3.8125h.0937v-9.6562h-.0312zm607.84,0v9.6562h.0937c6.6977,1.1418 7.6875.0206 7.6875-3.8125s-2.5436-4.9432-7.75-5.8438h-.0312z" opacity=".359"/>'
+ '<path d="m490,125c-101.94,0-197.92.0384-303.94,9.3438-5.2064.90051-7.75,2.0106-7.75,5.8438s.98984,4.9543 7.6875,3.8125c102.7-8.8558 202.17-9 304-9s201.3.14425 304,9c6.6977,1.1418 7.6875.0206 7.6875-3.8125s-2.5436-4.9432-7.75-5.8438c-106.02-9.3-202-9.34-303.94-9.34zm0,1.5c101.92,0 197.85.048 303.78,9.3438h.0312c2.4467.43295 4.2166.94885 5.125,1.5625 .9302.62839 1.25,1.1965 1.25,2.7812 0,.89372-.0716,1.5699-.1875,1.9375s-.16514.41193-.375.53125c-.41973.23865-2.1184.43019-5.375-.125l-.0625-.0312h-.0625c-102.78-8.8628-202.29-9-304.12-9s-201.34.13725-304.12,9h-.0625l-.0625.0312c-3.2566.55519-4.9553.36365-5.375.125-.20986-.11932-.25912-.16369-.375-.53125s-.1875-1.0438-.1875-1.9375c0-1.5848.3198-2.1529 1.25-2.7812 .90838-.61365 2.6783-1.1296 5.125-1.5625h.0312c105.94-9.28 201.87-9.33 303.79-9.33z" clip-path="url(#e)" filter="url(#b)"/>'
+ '</g>'
+ '<path transform="translate(-108,-84.5)" d="m478,189.25v1.2812l-259,6.97s13,44 8,59-97,103.19-97,193.5v566s15.75,75.25 29.5,106.5 32.5,88.75 113.75,98.75c75.811,4.2286 79.478,12.75 228.75,12.75 3.7406,0 6.9997.01 10.562,0-143.83-.2089-148.45-8.5744-223.31-12.75-81.25-10-100-67.5-113.75-98.75-13.75-31.2-29.5-106.4-29.5-106.4v-566c0-90.312 92-178.5 97-193.5s-8-59-8-59l259-6.9688v-.84375l-16-.4375zm48,0-16,.4375 8,.21875 8-.21875v-.4375z" clip-path="url(#a)" filter="url(#c)" mask="url(#h)" opacity=".75"/>'
+ '<g transform="translate(-116,-56.5)">'
+ '<path d="m186.06,134.34c-5.2064.90051-7.75,2.0106-7.75,5.8438s.98984,4.9543 7.6875,3.8125h.0937v-9.6562h-.0312zm607.84,0v9.6562h.0937c6.6977,1.1418 7.6875.0206 7.6875-3.8125s-2.5436-4.9432-7.75-5.8438h-.0312z" opacity=".359"/>'
+ '<path d="m490,125c-101.94,0-197.92.0384-303.94,9.3438-5.2064.90051-7.75,2.0106-7.75,5.8438s.98984,4.9543 7.6875,3.8125c102.7-8.8558 202.17-9 304-9s201.3.14425 304,9c6.6977,1.1418 7.6875.0206 7.6875-3.8125s-2.5436-4.9432-7.75-5.8438c-106.02-9.3-202-9.34-303.94-9.34zm0,1.5c101.92,0 197.85.048 303.78,9.3438h.0312c2.4467.43295 4.2166.94885 5.125,1.5625 .9302.62839 1.25,1.1965 1.25,2.7812 0,.89372-.0716,1.5699-.1875,1.9375s-.16514.41193-.375.53125c-.41973.23865-2.1184.43019-5.375-.125l-.0625-.0312h-.0625c-102.78-8.8628-202.29-9-304.12-9s-201.34.13725-304.12,9h-.0625l-.0625.0312c-3.2566.55519-4.9553.36365-5.375.125-.20986-.11932-.25912-.16369-.375-.53125s-.1875-1.0438-.1875-1.9375c0-1.5848.3198-2.1529 1.25-2.7812 .90838-.61365 2.6783-1.1296 5.125-1.5625h.0312c105.94-9.28 201.87-9.33 303.79-9.33z" clip-path="url(#e)" filter="url(#b)"/>'
+ '</g>'
+ '</svg>'; 
const dragBlock = document.getElementById("drag-block");
const draggables = document.getElementsByClassName("draggable");
const jarDraggables = document.getElementsByClassName("jar-draggable");
const dragLocations = document.getElementsByClassName("drag-location");
const jarDragLocations = document.getElementsByClassName("jar-drag-location");
const colorModal = document.getElementById("color-modal");
const colorModalButton = document.getElementById("add-pill-button");
//Set Attributes for all Non-Jar-Draggables
for(let i = 0; i < draggables.length; i++){
    draggables[i].setAttribute("ondragstart", "dragColor(event)");
    draggables[i].setAttribute("draggable", "true");
}
//Set Attributes for all Non-Jar-Drag-Locations
for(let i = 0; i < dragLocations.length; i++){
    dragLocations[i].setAttribute("ondragover", "allowDrop(event)");
    dragLocations[i].setAttribute("ondrop", "dropColor(event)");
}
//Set Attributes for all Jar-Draggables
for(let i = 0; i < jarDraggables.length; i++){
    jarDraggables[i].setAttribute("ondragstart", "dragColor(event)");
    jarDraggables[i].setAttribute("draggable", "true");
}
//Set Attributes for all Jar-Drag-Locations
for(let i = 0; i < jarDragLocations.length; i++){
    jarDragLocations[i].setAttribute("ondragover", "allowDrop(event)");
    jarDragLocations[i].setAttribute("ondrop", "dropColor(event)");
}
//Functions
function insertJar(){
    var jarContainer = document.getElementsByClassName("jar-container")[0];
    jarContainer.insertAdjacentHTML("beforeend", jar);
}
function allowDrop(event){
    event.preventDefault();
}
function drag(event){
    event.dataTransfer.setData("element", event.target.class);
}
function drop(event){
    event.preventDefault();
    var dropElement = event.dataTransfer.getData("element");
    event.target.appendChild(document.getElementById(dropElement));
}
function dragColor(event){
    event.dataTransfer.setData("colorOne", "black");
    event.dataTransfer.setData("colorTwo", "#18CAE6");
}
function dropColor(event){
    event.preventDefault();
    var colorOne = event.dataTransfer.getData("colorOne");
    var colorTwo = event.dataTransfer.getData("colorTwo");
    event.target.style.backgroundColor = colorOne;
    event.target.style.borderColor = colorTwo;
}
function addDragLocation(){
    const dragLocationElement = document.getElementsByClassName("drag-location")[1];
    const mainElement = document.getElementsByClassName("main-content-container")[0]; 
    for(let i = 0; i < 58; i++){
        mainElement.appendChild(dragLocationElement.cloneNode(true));
    }
}
//Event Listeners
window.addEventListener("load", insertJar);
window.addEventListener("load", addDragLocation);
colorModalButton.addEventListener("click", () => {colorModal.style.display = "block";});
window.addEventListener("click", () => { if(event.target == colorModal){ colorModal.style.display = "none"; }; });
// window.addEventListener("load", () => { TweenLite.to(dragBlock, 2, {throwProps:{x:500, y:-300}}); });