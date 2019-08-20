var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
app.use('/static', express.static('public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
//  主页输出 "Hello World"

//默认进入登录表单页面login.html
app.get('/', function (req, res) {
    console.log("主页 GET 请求");
    res.sendFile(__dirname + "/" + "login.html");
});


app.get('/ok', function (req, res) {
    // console.log("主页 POST 请求");
    var name = req.query.username;
    var pwd = req.query.passwords;
    // console.log(name);
    // console.log(pwd);
    // var file = path.join(__dirname, 'name.json'); //文件路径，__dirname为当前运行js文件的目录
    //var file = 'f:\\nodejs\\data\\test.json'; //也可以用这种方式指定路径

    //读取json文件
    fs.readFile('name.json', 'utf-8', function (err, data) {
        if (err) {
            res.send('文件读取失败');
        } else {
            var Obj = JSON.parse(data);
            console.log(Obj);
            // console.log(jsonObj.re.length);

                for (var i = 0; i < Obj.re.length; i++) {

                    if (name == Obj.re[i]['name'] && pwd == Obj.re[i]['pwd']) {
                        res.render('test', {
                            // n: "正确",
                            name: Obj.re[i].name,
                            pwd: Obj.re[i].pwd,
                        });
                    } else {
                    }
                }
            }

    });
});


var server = app.listen(8003, function () {


    console.log("http://127.0.0.1:8003")

});
