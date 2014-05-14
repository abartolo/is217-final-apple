


function ValidateType(tmp){
	
	var result = "";
	if (isNaN(tmp) == false){
		result = tmp;
	}else{
		result = "error";
	} 
	
	return result;

};
