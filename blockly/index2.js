var workspace = Blockly.inject('blocklyDiv',
			       {toolbox: document.getElementById('toolbox')});

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


