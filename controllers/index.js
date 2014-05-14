
/*
 * GET home page.
 */

var mongoose = require('mongoose')
  , Apple = mongoose.model('Apple');


exports.index = function(req, res) {
	/*
  var apple = new Apple();

      apple.brand = 'Apple';
      apple.monitor = '17inch';
      apple.harddrive = '128GB';
      apple.memory = '8GB';      
	  apple.price = 1000; 
	  
      apple.save(function (err) {
        console.log(err);
      });
    */
  
  Apple.find({}, function(err, apples) {
    res.render('index', { 
      title: 'Apple Laptops Purchases', 
      apples: apples 
    });
 });
}
