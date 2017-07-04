function upload(){
    var filename = "config.json"
    var text = JSON.stringify({"sleep-after":document.getElementById("sleep-after").value})
    var data = "\x01"+filename+"\x02"+text+"\x03"
    var ws = new WebSocket("ws://192.168.4.1:2112")
    ws.onopen = function(){
	ws.send(data)
	console.log("Data sent!")
	ws.close()
    }
}
