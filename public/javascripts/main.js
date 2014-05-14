


var Laptop = function(makeval){
	
	this.brand = makeval;
	this.screen = "11inch";
	this.hd = "128GB";
	this.memory = "8GB";
	this.price = 0;
	
}
/* THE FOLLOWING IS A DECORATOR PATTERN. AFTER CREATING THE LAPTOP OBJECT, THE MODLAPTOP 'DECORATES' THE OBJECT BY EXPANDING ON ITS PROPERTIES AND ADDING FUNCTIONALITY */
/* Decorator Pattern */
var ModLaptop = function(curobj){
	
	this.modlaptop = curobj;
	
	this.defScreen = 0;
	this.defHardDrive = 0;
	this.defMemory = 0;
	
	var screensum ='11inch';
	var harddrivesum ='128GB';
	var memorysum ='8GB';
	
	
	this.addDefaultScreen = function(){
		screensum ='11inch';
		this.defScreen = 0;
		setObjValue("screenopt",screensum + ' screen');
		this.Calculate();
	};
	this.addDefaultHardDrive = function(){
		harddrivesum ='128GB';
		this.defHardDrive = 0;
		setObjValue("harddriveopt",harddrivesum + ' hard drive');
		this.Calculate();
	};
	this.addDefaultMemory = function(){
		memorysum ='8GB';
		this.defMemory = 0;
		setObjValue("memoryscreenopt",memorysum + ' memory');
		this.Calculate();
	};
	this.addUpgradeScreen = function(){
		screensum ='15inch';
		this.defScreen = 100;
		setObjValue("screenopt",screensum + ' screen');
		this.Calculate();
	};
	this.addUpgradeDrive = function(){
		harddrivesum ='256GB';
		this.defHardDrive = 150;
		setObjValue("harddriveopt",harddrivesum + ' hard drive');
		this.Calculate();
	};
	this.addUpgradeMemory = function(){
		memorysum ='16GB';
		this.defMemory = 50;
		setObjValue("memoryscreenopt",memorysum + ' memory');
		this.Calculate();
	};
	
	this.Calculate = function(){
		this.modlaptop.price = this.defHardDrive + this.defMemory + this.defScreen + 1000;
		this.UpdateCart();
		console.log('Calculated Price: ' + this.modlaptop.price);
	};
	
	this.UpdateCart = function(){
		
		/* Update DOM here*/
		totalval = 'Total: $' + this.modlaptop.price;
		setObjValue("total",totalval);
		
	};
	
	this.CompletePurchase = function(){
		
		var sendJson = {
			monitor: screensum,
			harddrive: harddrivesum,
			memory: memorysum,
			price: this.modlaptop.price
		};
		
		console.log(sendJson);
		httpobj.open('POST', '/apples/add');
		httpobj.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		httpobj.send(JSON.stringify(sendJson));

	}
	
}
/* HERE I ALSO CREATED A FASCADE TO MAKE IT EASIER AND MORE USERFIRENDLY TO CHANGE THE INNERHTML OF ANY ID */
/* Fascade */
function setObjValue(id,value){
	var objele = document.getElementById(id);
	objele.innerHTML = value;
}

/* HERE I USED A SINGLETON PATTERN WHEN CREATING AN XMLHTTP OBJECT. THIS IS DONE TO NOT CREATE MULTIPLE AJAX OBJECTS */
/* Singleton */
//Create HTTP Object - Singleton
var HTTPObj = function (){

    var httpObj;
    function createInstance() {
        if (window.XMLHttpRequest) { // Mozilla, Safari, ...
            httpObj = new XMLHttpRequest();
        } else if (window.ActiveXObject) { // IE 8 and older
            httpObj = new ActiveXObject("Microsoft.XMLHTTP");
        }
        
        return httpObj;
    }
    return {
        getInstance: function (){
            
            if (!httpObj) {
                httpObj = createInstance();
            }
            return httpObj;
        }
    };
}();



/* Create a new object Laptop per page */
var orderLaptop = new Laptop('Apple');
/* Decorator Pattern */
var modifyOrder = new ModLaptop(orderLaptop);

var httpobj = HTTPObj.getInstance();



