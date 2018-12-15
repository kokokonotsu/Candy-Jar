//Global Variables
const bigHandPointer = `<svg enable-background="new 0 0 595.28 841.89" viewBox="0 0 595.28 841.89" xmlns="http://www.w3.org/2000/svg">
<path d="m197.44 110.56h57.747v26.955h28.371v113.48h56.743v28.373h85.113v28.371h56.742v28.372h28.371v28.371h28.368v198.18h-28.375v85.112h-28.372v85.111h-284.71v-85.117h-28.374v-56.742h-28.371v-56.742h-28.371v-56.742h-28.372v-28.372h-26.95v-84.693h84.701v28.372h27.368v-255.34h28.369z" fill="#231f20"/>
<path d="m198.86 137.52v368.82h-30.204v-85.106h-28.371v-28.375h-54.911v56.321h28.368v28.372h28.372v56.742h28.371v56.742h28.371v56.742h28.372v56.746h225.13v-56.74h28.372v-85.112h28.375v-198.18h-28.37v-28.374h-26.539v85.11h-30.205v-113.48h-54.907v85.11h-30.205v-113.48h-54.907v113.48h-30.205v-255.34z" fill="#1a171b"/>
<path d="m198.86 137.52h54.908v255.34h30.205v-113.48h54.907v113.48h30.205v-85.11h54.907v113.48h30.205v-85.11h26.539v28.374h28.37v198.18h-28.375v85.112h-28.372v56.74h-225.13v-56.746h-28.372v-56.742h-28.371v-56.742h-28.371v-56.742h-28.372v-28.372h-28.368v-56.321h54.911v28.375h28.371v85.106h30.204z" fill="#fff"/>
<rect class="big-pointer-svg" id="big-pointer-svg" x="0" y="0" width="595.28" height="841.89" fill="transparent"/>
</svg>
`;
const allCSSColorNames = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
const dragBlock = document.getElementById("drag-block");
const draggables = document.getElementsByClassName("draggable");
const dragLocations = document.getElementsByClassName("drag-location");
const allButtons = document.getElementsByTagName("button");
const colorModal = document.getElementById("color-modal");
const colorModalButton = document.getElementById("color-modal-reveal-button");
const colorModalClose = document.getElementById("color-modal-close");
const dropClickLocations = document.getElementsByClassName("drop-click");
const tools = document.getElementsByClassName("tool");
const pills = document.getElementsByClassName("pill");
const bigHandPointerPng = document.getElementById("big-hand-pointer-png");
const rootCSS = window.getComputedStyle(document.documentElement);
const html = document.getElementsByClassName("html")[0];
//Set Attributes for all Non-Jar-Draggables
for(let i = 0; i < draggables.length; i++){
    draggables[i].setAttribute("ondragstart", "dragColor(event)");
    draggables[i].setAttribute("draggable", "true");
}
//Set Attributes for all Non-Jar-Drag-Locations
for(let i = 0; i < dragLocations.length; i++){
    dragLocations[i].setAttribute("ondragover", "allowDrop(event)");
    dragLocations[i].setAttribute("ondrop", "dropColor(event)");
    dragLocations[i].setAttribute("ondragenter", "dragEnter(event)");
    dragLocations[i].setAttribute("ondragleave", "dragLeave(event)");
    dragLocations[i].setAttribute("onclick", "paint(event)");
}
//Set Attributes for drop-click-button
for(let i = 0; i < dropClickLocations.length; i++){
    dropClickLocations[i].setAttribute("ondragover", "allowDrop(event)");
    dropClickLocations[i].setAttribute("ondrop", "drop(event)");
}
//Set Attributes for all Tools
for(let i = 0; i < tools.length; i++){
    tools[i].setAttribute("onclick", "customCursor(event); buttonHover(event)");
}
//bigHandPointerButton.insertAdjacentHTML("afterbegin", bigHandPointer);
//Functions
function allowDrop(event){
    event.preventDefault();
}
function drag(event){
    event.dataTransfer.setData("element", event.target.class);
}
function drop(event){
    event.preventDefault();
    var dropElement = event.dataTransfer.getData("element");
    if(event.target.className == "drag-location"){event.target.appendChild(document.getElementById(dropElement));}
    else if(event.target.className == "reset-button"){ resetDragLocations(); }
    else if(event.target.classList.contains("drop-click")){ event.target.click(); /* Debug */ /*console.log("I am running"); */ };
}
function dragColor(event){
    event.dataTransfer.setData("colorOne", "black");
    event.dataTransfer.setData("colorTwo", "#18CAE6");
}
function dropColor(event){
    event.preventDefault();
    var colorOne = event.dataTransfer.getData("colorOne");
    var colorTwo = event.dataTransfer.getData("colorTwo");
    if(event.target.className == "drag-location"){
        event.target.style.backgroundColor = colorOne;
        event.target.style.borderColor = colorTwo;
        event.target.style.borderStyle = "solid";
    }
    else if(event.target.className == "reset-button"){ resetDragLocations(); }
    else if(event.target.classList.contains("drop-click")){ event.target.click(); /*Debug */ /*console.log("I am running");*/ };
}
function dragEnter(event){
    if(event.target.classList.contains("drag-location")){
        event.target.style.borderStyle = "dashed";
    }
}
function dragLeave(event){
    if(event.target.className == "drag-location"){
        event.target.style.borderStyle = "solid";
    }
}
function addDragLocation(){
    const dragLocationElement = document.getElementsByClassName("drag-location")[0];
    const mainElement = document.getElementsByClassName("main-content-container")[0];
    const gridHeight = 8;
    const gridWidth = 8;
    const gridTotal = (gridHeight * gridWidth) - 1;
    for(let i = 0; i < gridTotal; i++){
        mainElement.appendChild(dragLocationElement.cloneNode(true));
    }
}
//Removes all DOM-styling on Drag-Locations
function resetDragLocations(){
    for(let i = 0; i < dragLocations.length; i++){
        dragLocations[i].removeAttribute("style");
    }
}
function replaceCursor(e){
        const pill = e.target.cloneNode(true);
    if(e.target.classList.contains("pill")){
        //Adds Custom Cursor to HTML
        html.appendChild(pill);
        //Disables Default Cursor
        html.classList.add("no-cursor");
        //Add Class to Custom Cursor
        pill.classList.add("current-cursor");
        document.onmousemove = trackCursorPos;
    }
    function trackCursorPos(event) {
        var eventDoc, doc, body, pageX, pageY;

        event = event || window.event; //For IE

        if(event.pageX == null && event.clientX != null){
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
            (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
        }
        document.getElementsByClassName("current-cursor")[0].style.top = event.pageY - 10 + "px";
        document.getElementsByClassName("current-cursor")[0].style.left = event.pageX - 25 + "px";
    }
    //Debug
    //console.log("I am running");
}
//Custom Cursor Call
function customCursor(event){
    if(event.target.id == "big-hand-pointer-png" || event.target.id == "big-hand-pointer-button" || event.target.id == "big-hand-pointer-li"){ html.classList.add("custom-cursor-big-hand-pointer"); }
    else if(event.target.id != "big-hand-pointer-png" || event.target.id != "big-hand-point-button"|| event.target.id != "big-hand-pointer-li"){ html.classList.remove("custom-cursor-big-hand-pointer"); }
    if(event.target.id == "paint-brush-cursor-png" || event.target.id == "paint-brush-cursor-button" || event.target.id == "paint-brush-li"){ html.classList.add("custom-cursor-paint-brush"); }
    else if(event.target.id != "paint-brush-cursor-png" || event.target.id != "paint-brush-cursor-button" || event.target.id != "paint-brush-li"){ html.classList.remove("custom-cursor-paint-brush"); }
    if(event.target.id == "large-cursor-png" || event.target.id == "large-cursor-button" || event.target.id == "large-cursor-li"){
        html.classList.add("custom-cursor-large-cursor");
    } else if (event.target.id != "large-cursor-png" || event.target.id != "large-cursor-button" || event.target.id != "large-cursor-li"){
        html.classList.remove("custom-cursor-large-cursor");
    }
}
//Paint Brush Painting
function paint(event){
    if(html.classList.contains("custom-cursor-paint-brush")){
        event.target.style.backgroundColor = "black";
        event.target.style.borderColor = "#18CAE6";
    } else {
        //Debug
        //console.log("I am trying to paint");
    }
}
//Add Hover for Big Hand to all Buttons
function buttonHover(event){
    const hoverStyle = document.createElement("style");
    var hoverCSS;
    var currentStyle;
    if(!document.getElementsByTagName("style")[0]){ html.appendChild(hoverStyle); };
    if(event.target.id == "big-hand-pointer-png" || event.target.id == "big-hand-pointer-button" || event.target.id == "big-hand-pointer-li"){
        currentStyle = document.getElementsByTagName("style")[0];
        hoverCSS = `button:hover{ cursor: url("Assets/Large-Hand-Pointer-Resized.png") 20 1, auto; }`;
        if(currentStyle.childNodes[0]){
            currentStyle.childNodes[0] = currentStyle.replaceChild(document.createTextNode(hoverCSS), currentStyle.childNodes[0]);
            //Debug
            // console.log("I am supposed to be running");
        } else {
            currentStyle.appendChild(document.createTextNode(hoverCSS));
            //Debug
            // console.log("I'm not supposed to be running");
        }
        //Debug
        // console.log(currentStyle.childNodes[0]);
    } 
    else if(event.target.id == "paint-brush-cursor-png" || event.target.id == "paint-brush-cursor-button" || event.target.id == "paint-brush-li"){
        currentStyle = document.getElementsByTagName("style")[0];
        hoverCSS = `button:hover{ cursor: url("Assets/Paint-Brush-Cursor-BW-With-Outline-Resized.png") 0 0, auto; }`;
        if(currentStyle.childNodes[0]){
            currentStyle.childNodes[0] = currentStyle.replaceChild(document.createTextNode(hoverCSS), currentStyle.childNodes[0]);
            //Debug
            // console.log("I am supposed to be running");
        } else {
            currentStyle.appendChild(document.createTextNode(hoverCSS));
            //Debug
            // console.log("I'm not supposed to be running");
        }
        //Debug
        // console.log(currentStyle.childNodes[0]);
    } 
    else if(event.target.id == "large-cursor-png" || event.target.id == "large-cursor-button" || event.target.id == "large-cursor-li"){
        currentStyle = document.getElementsByTagName("style")[0];
        hoverCSS = `button:hover{ cursor: url("Assets/Large-Pointer.png") 0 0, auto; }`;
        if(currentStyle.childNodes[0]){
            currentStyle.childNodes[0] = currentStyle.replaceChild(document.createTextNode(hoverCSS), currentStyle.childNodes[0]);
            //Debug
            // console.log("I am supposed to be running");
        } else {
            currentStyle.appendChild(document.createTextNode(hoverCSS));
            //Debug
            // console.log("I'm not supposed to be running");
        }
        //Debug
        // console.log(currentStyle.childNodes[0]);
    }
}
function buttonSetActive() {
    if(!this.classList.contains("button-active")){ this.classList.add("button-active");};
}
function buttonUnsetActive() {
    if(this.classList.contains("button-active")){ this.classList.remove("button-active");};
}
//Event Listeners
window.addEventListener("load", addDragLocation);
colorModalButton.addEventListener("click", () => {colorModal.style.display = "block";});
colorModalClose.addEventListener("click", () => {colorModal.style.display = "none";});
window.addEventListener("click", () => { if(event.target == colorModal){ colorModal.style.display = "none"; }; });
document.getElementById("reset-button").addEventListener("click", resetDragLocations);
for(let i = 0; i < allButtons.length; i++){ allButtons[i].addEventListener("mousedown", buttonSetActive); };
for(let i = 0; i < allButtons.length; i++){ allButtons[i].addEventListener("mouseup", buttonUnsetActive); };
// window.addEventListener("load", () => { TweenLite.to(dragBlock, 2, {throwProps:{x:500, y:-300}}); });