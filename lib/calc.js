

exports = module.exports = {};

exports.add = function(var1,var2){
	var1 = parseInt(var1);
	var2 = parseInt(var2);
	if ( typeof var1 == 'number' || typeof var2 == 'number'){
		answer = var1 + var2;
		return answer;
	}else{
		var error = 'Error Occured! Value(s) are not integer';
		return error;
	}

};

exports.sub = function(var1,var2){
	var1 = parseInt(var1);
        var2 = parseInt(var2);
	if ( typeof var1 == 'number' || typeof var2 == 'number'){
                var answer = var1 - var2;
                return answer;
        }else{
                var error = 'Error Occured! Value(s) are not integer';
                return error;
        }

};

exports.mul = function(var1,var2){
	var1 = parseInt(var1);
        var2 = parseInt(var2);
	if ( typeof var1 == 'number' || typeof var2 == 'number'){
                var answer = var1 * var2;
                return answer;
        }else{
                var error = 'Error Occured! Value(s) are not integer';
                return error;
        }

};

exports.div = function(var1,var2){
	var1 = parseInt(var1);
        var2 = parseInt(var2);
	if ( typeof var1 == 'number' || typeof var2 == 'number'){
                var answer = var1 / var2;
                return answer;
        }else{
                var error = 'Error Occured! Value(s) are not integer';
                return error;
        }

}
















