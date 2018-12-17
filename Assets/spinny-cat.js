document.onmousemove = trackMousePosition;
function trackMousePosition(event){
    var pageX, pageY, eventDoc, doc, body;
    var outputLabel = document.getElementById("coordinate-output-label");
    event = event || window.event;
    if(event.pageX == null && event.clientX != null){
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    }
    outputLabel.innerText = "(" + event.pageX + ", " + event.pageY + ")";
}