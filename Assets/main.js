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
const squares = document.getElementsByClassName("square");
const allButtons = document.getElementsByTagName("button");
const colorModalContent = document.getElementById("color-modal-content");
const colorModalContentButton = document.getElementById("color-modal-reveal-button");
const colorModalContentClose = document.getElementById("color-modal-close");
const dropClickLocations = document.getElementsByClassName("drop-click");
var currentPaintColor = "";
const customCursorPaintBrush = "custom-cursor-paint-brush";
const tools = document.getElementsByClassName("tool");
const pills = document.getElementsByClassName("pill");
const bigHandPointerPng = document.getElementById("big-hand-pointer-png");
const rootCSS = window.getComputedStyle(document.documentElement);
const html = document.getElementsByClassName("html")[0];
//Paint Bubble Init
    const paintBubble = document.createElement("div");
    paintBubble.className = "paint-bubble";
//Set Attributes for all Non-Jar-Draggables
for(let i = 0; i < draggables.length; i++){
    draggables[i].setAttribute("ondragstart", "dragColor(event)");
    draggables[i].setAttribute("draggable", "true");
}
//Set Attributes for all Non-Jar-squares
for(let i = 0; i < squares.length; i++){
    // squares[i].setAttribute("ondragover", "allowDrop(event)");
    // squares[i].setAttribute("ondrop", "dropColor(event)");
    // squares[i].setAttribute("ondragenter", "dragEnter(event)");
    // squares[i].setAttribute("ondragleave", "dragLeave(event)");
    squares[i].setAttribute("onclick", "paint(event)");
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
    if(event.target.className == "square"){event.target.appendChild(document.getElementById(dropElement));}
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
    if(event.target.className == "square"){
        event.target.style.backgroundColor = colorOne;
        event.target.style.borderColor = colorTwo;
        event.target.style.borderStyle = "solid";
    }
    else if(event.target.className == "reset-button"){ resetDragLocations(); }
    else if(event.target.classList.contains("drop-click")){ event.target.click(); /*Debug */ /*console.log("I am running");*/ };
}
function dragEnter(event){
    if(event.target.classList.contains("square")){
        event.target.style.borderStyle = "dashed";
    }
}
function dragLeave(event){
    if(event.target.className == "square"){
        event.target.style.borderStyle = "solid";
    }
}
function addSquares(){
    const table = document.getElementsByClassName("coloring-table")[0];
    const tableColNum = 9;
    const tableRowNum = 9;
    const tableBody = document.createElement("tbody");
    tableBody.setAttribute("class", "coloring-table-body");
    table.appendChild(tableBody);
    for(let i = 0; i <= tableRowNum; i++){
        var tableRow = document.createElement("tr");
        tableBody.appendChild(tableRow);
        for(let j = 0; j <= tableColNum; j++){
            var cellData = document.createElement("div");
            cellData.setAttribute("class", "square");
            // cellData.setAttribute("ondragover", "allowDrop(event)");
            // cellData.setAttribute("ondrop", "drop(event); dropColor(event)");
            // cellData.setAttribute("ondragenter", "dragEnter(event)");
            // cellData.setAttribute("ondragleave", "dragLeave(event)");
            cellData.setAttribute("onclick", "paint(event)");
            cellData.setAttribute("onmouseover", "paintOver(event)");
            tableRow.appendChild(cellData);
        }
    }
}
//Removes all DOM-styling on squares
function resetDragLocations(){
    for(let i = 0; i < squares.length; i++){
        squares[i].removeAttribute("style");
    }
}
function createPaintBubble(e){
    paintBubble.style.backgroundColor = currentPaintColor;
    if(html.classList.contains(customCursorPaintBrush)){
        //Set Paint Bubble Display
        paintBubble.style.display = "inline";
        if(e.target.className == "color-input" && !document.getElementsByClassName("paint-bubble")[0]){
            //Adds Paint Bubble to HTML
            html.appendChild(paintBubble);
            //Adds Listener to document for onmousemove
            document.onmousemove = trackCursorPos;
            //Debug
            //console.log("I am running");
        }
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
        document.getElementsByClassName("paint-bubble")[0].style.top = event.pageY + -20 + "px";
        document.getElementsByClassName("paint-bubble")[0].style.left = event.pageX + 20 + "px";
    }
    //Debug
    //console.log("I am running");
}
//Custom Cursor Call
function customCursor(event){
    if(event.target.id == "big-hand-pointer-png" || event.target.id == "big-hand-pointer-button" || event.target.id == "big-hand-pointer-li"){ html.classList.add("custom-cursor-big-hand-pointer"); }
    else if(event.target.id != "big-hand-pointer-png" || event.target.id != "big-hand-point-button"|| event.target.id != "big-hand-pointer-li"){ html.classList.remove("custom-cursor-big-hand-pointer"); }
    if(event.target.id == "paint-brush-cursor-png" || event.target.id == "paint-brush-cursor-button" || event.target.id == "paint-brush-li"){ html.classList.add("custom-cursor-paint-brush"); if(document.getElementsByClassName("paint-bubble")[0]){ paintBubble.style.display = "inline"; }; }
    else if(event.target.id != "paint-brush-cursor-png" || event.target.id != "paint-brush-cursor-button" || event.target.id != "paint-brush-li"){ html.classList.remove("custom-cursor-paint-brush"); paintBubble.style.display = "none"; }
    if(event.target.id == "large-cursor-png" || event.target.id == "large-cursor-button" || event.target.id == "large-cursor-li"){
        html.classList.add("custom-cursor-large-cursor");
    } else if (event.target.id != "large-cursor-png" || event.target.id != "large-cursor-button" || event.target.id != "large-cursor-li"){
        html.classList.remove("custom-cursor-large-cursor");
    }
}
//Paint Brush Painting
function paint(event){
    if(event.target.classList.contains("color-input")){
        currentPaintColor = event.target.value;
        console.log(currentPaintColor);
    }
    if(html.classList.contains("custom-cursor-paint-brush") && event.target.className == "square"){
        event.target.style.backgroundColor = currentPaintColor;
        // event.target.style.borderColor = "#18CAE6";
        //Debug
        //console.log("I can paint with this");
    } else if(html.classList.contains("custom-cursor-large-cursor")) {
        event.target.style.backgroundColor = currentPaintColor;
    } else {
        //Debug
        //console.log("I cannot paint with this");
    }
}
function paintOver(event){
    if(event.target.classList.contains("color-input")){
        currentPaintColor = event.target.value;
        console.log(currentPaintColor);
    }
    if(html.classList.contains("custom-cursor-paint-brush") && event.target.className == "square"){
        event.target.style.backgroundColor = currentPaintColor;
        // event.target.style.borderColor = "#18CAE6";
        //Debug
        //console.log("I can paint with this");
    } else {
        //Debug
        //console.log("I cannot paint with this");
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
function buttonSetActive(e) {
    if(!e.target.classList.contains("button-active")){ e.target.classList.add("button-active"); e.target.style.borderStyle = "inset"; };
    //Debug
    //console.log("I am running");
}
function buttonUnsetActive(e) {
    if(e.target.classList.contains("button-active")){ e.target.classList.remove("button-active"); e.target.style.borderStyle = "outset"; };
    //Debug
    //console.log("I am running");
}
//Change Active Color
function changeColor(e){
    e = event.target.value;
    currentPaintColor = e;
}
//Add Color-Modal Color Inputs
function addColorModalColors(){
    const colorModalBody = document.getElementById("color-modal-body");
    const tableBody = document.getElementById("color-modal-table-body");
    const tableRowsNum = 13;
    const tableColNum = 12;
    var inputCount = 0;
    for(let i = 0; i < tableRowsNum; i++){
        var tableRow = document.createElement("tr");
        tableBody.appendChild(tableRow);
        for(let j = 0; j < tableColNum; j++){
            if(inputCount >= 147){
                break;
            }
            var cell = document.createElement("td");
            var cellData = document.createElement("button");
            cellData.setAttribute("class", "color-input");
            cellData.setAttribute("value", allCSSColorNames[inputCount]);
            cellData.setAttribute("onclick", "paint(event); createPaintBubble(event)");
            cellData.title = allCSSColorNames[inputCount];
            cellData.style.backgroundColor = allCSSColorNames[inputCount];
            cell.appendChild(cellData);
            tableRow.appendChild(cell);
            inputCount++;
        }
    }
}
$(square)
//Event Listeners
window.addEventListener("load", addSquares);
colorModalContentButton.addEventListener("click", () => { if (colorModalContent.style.display == "none"){ colorModalContent.style.display = "block"; } else if (colorModalContent.style.display != "none"){ colorModalContent.style.display = "none" }; });
colorModalContentClose.addEventListener("click", () => { colorModalContent.style.display = "none";});
document.getElementById("reset-button").addEventListener("click", resetDragLocations);
window.addEventListener("load", addColorModalColors);
window.setTimeout( () => { for(let i = 0; i < allButtons.length; i++){ allButtons[i].setAttribute("onmousedown", "buttonSetActive(event)"); /* Debug */ /* console.log(isMouseDown); */ }}, 100);
window.setTimeout( () => { for(let i = 0; i < allButtons.length; i++){ allButtons[i].setAttribute("onmouseup", "buttonUnsetActive(event)"); /* Debug */ /* console.log(isMouseDown); */ }}, 100);
// window.addEventListener("mousedown", () => { isMouseDown = true; /* Debug */ /* console.log(isMouseDown); */ });
// window.addEventListener("mouseup", () => { isMouseDown = false; /* Debug */ /* console.log(isMouseDown); */ });
// window.addEventListener("load", () => { TweenLite.to(dragBlock, 2, {throwProps:{x:500, y:-300}}); });
console.log(allButtons.length);