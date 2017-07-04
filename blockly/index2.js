var blocklyArea = document.getElementById("blocklyArea")
var blocklyDiv = document.getElementById("blocklyDiv")
var workspace = Blockly.inject(blocklyDiv,
			       {toolbox: document.getElementById('toolbox')});
var onresize = function(e) {
    var element = blocklyArea
    var x = 0
    var y = 0
    do {
	x += element.offsetLeft
	y += element.offsetTop
	element = element.offsetParent
    } while (element);
    blocklyDiv.style.left = x + "px"
    blocklyDiv.style.top = y + "px"
    blocklyDiv.style.width = blocklyArea.offsetWidth + "px"
    blocklyDiv.style.height = blocklyArea.offsetHeight + "px"
};
window.addEventListener("resize", onresize, false)
onresize()
Blockly.svgResize(workspace);


function upload(){
    var filename = "cache.py"
    var text = Blockly.Python.workspaceToCode(workspace)
    var data = "\x01"+filename+"\x02"+text+"\x03"
    var ws = new WebSocket("ws://192.168.4.1:2112")
    ws.onopen = function(){
	ws.send(data)
	console.log("Data sent!")
	ws.close()
    }
}


