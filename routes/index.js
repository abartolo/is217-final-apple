
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.calcpage = function(req, res){
        var calcfun = require('../lib/calc.js');
        var num1 = req.query.num1;
        var num2 = req.query.num2;
        var method = req.query.method;
        if (typeof num1 == 'undefined' || typeof num2 == 'undefined' || typeof method == 'undefined' ){
                res.render('calcpage');
        }else{
                if (method == 'add'){
                        res.render('calcpage',{results: calcfun.add(num1,num2)});

                }else if(method == 'sub'){
                        res.render('calcpage',{results: calcfun.sub(num1,num2)});

                }else if(method == 'mul'){
                        res.render('calcpage',{results: calcfun.mul(num1,num2)});

                }else if(method == 'div'){
                        res.render('calcpage',{results: calcfun.div(num1,num2)});

                }else{
                        res.render('calcpage',{error: 'Error: Something is wrong with the GET query '});
                }
        }
};
exports.qunithw3 = function(req, res){
  res.render('qunithw3');
};


