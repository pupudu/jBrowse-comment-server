var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/updateThread',function(req,res,next){
	// console.log(req.body);
    var body = JSON.parse(JSON.stringify(req.body), function(k, v) {
        if (typeof(v)!="object" && !isNaN(parseInt(v))) {
            v = parseInt(v);
        }
        return v;
    });
    var file = 'public/sample_data/json/volvox/tracks/Comments/ctgA/trackData.json';
    var data = fs.readFileSync(file,{encoding:'utf-8'});
    var dataObj = JSON.parse(data);

    // var attrs = dataObj.intervals.classes[0].attributes;
    var list = dataObj.intervals.nclist;
    var obj = {};
    for (var i = 0; i < list.length; i++) {
    	var attrs = dataObj.intervals.classes[list[i][0]].attributes;
	    obj[i] = {};
	    for (var j = 0; j < attrs.length; j++) {
	    	obj[i][attrs[j]] = list[i][j+1];
	    }
    }
    var index = -1;
    var item = list.filter(function(d,i){
    	if(d.toString() == req.body.old.toString()){
    		index = i;
    	}
    	return d.toString() == req.body.old.toString();
    })[0];
    if(index === -1){
    	return res.json('No match');
    }

    if(body.action === "remove"){
    	list.splice(index,1);
    	dataObj.featureCount--;
    }else if(body.action === "insert"){
    	list[list.length] = body.new || body.old;
    	dataObj.featureCount++;
    }else{
    	list[index] = body.new;
    }

    dataObj.intervals.nclist = list;

    fs.writeFileSync(file, JSON.stringify(dataObj));
    return res.json(dataObj);
});

module.exports = router;
