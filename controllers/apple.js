
/*
 * GET courses.
 */

var mongoose = require('mongoose')
  , Apple = mongoose.model('Apple');


exports.buy = function(req, res) {
  Apple.find({}, function(err, apples) {
    res.render('apples', { 
      title: 'Customize Laptop Order', 
      apples: apples 
    });
 });
}
exports.jsonlist = function(req, res) {
  Apple.find({}, function(err, apples) {
    res.send(apples);  
  });
}
exports.findById = function (req, res) {
  Apple.findOne({_id : req.params.cid}, function(err, apple) {
  	/*
      console.log(apple);
      res.render('apple', {
      title: 'Apple Purchases',
      appletitle: apples.brand,
      monitor: apple.monitor,
      harddrive: apple.harddrive, 
      memory: apple.memory,
      price: apple.price
    });
    */
 });
}




exports.add = function (req, res) {
  var apple = new Apple(req.body);
  apple.save(function (err) {
    if(err) {
      console.log(err)
    } else {
      res.redirect('/');
      console.log(apple);
      console.log('----space---');
      console.log(req.body);
    }

  });
}
exports.update = function (req, res) {
  Apple.findOneAndUpdate({_id : req.params.cid}, req.body,

  function(err, apple) {
      console.log(apple);
    res.redirect('/apples/');
  });
}

