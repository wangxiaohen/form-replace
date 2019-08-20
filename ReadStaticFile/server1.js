var http = require('http');
var s=require('fs');
http.createServer(function (request, response) {
	var r=request.url;

	if(r=="/html"){
		// 	var html=s.readFileSync('/root/nodeserver/8004/ss.html');
		// response.write(html);
		//     response.end('html');sbs
		s.readFile('vue.html', function (err, data) {
			if (err) {
				return console.error(err);
			}
			response.end(data);
		});
	}
	// else if(r=="/txt"){
	// 	var txt=s.readFileSync('/root/nodeserver/8004/sss.txt');
	// 	response.write(txt);
	// 	    response.end('txt');
	// }else if(r=="/js"){
	// 	var js=s.readFileSync('/root/nodeserver/8003/s.js');
	// 	response.write(js);
	// 	    response.end('js');
	// }
}).listen(8003);
console.log('Server running at http://127.0.0.1:8003/html');
