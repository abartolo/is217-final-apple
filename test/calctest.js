
var expect = require("chai").expect;
var calc = require("../lib/calc.js");


describe("Calculator",function(){
	describe("#add()",function(){
	 it('should add two positive numbers',function(){
	 	var results = calc.add(5,10);

		expect(results).to.equal(15);
	 });
	 it('should add two negative numbers',function(){
		var results = calc.add(-5,-20);

		expect(results).to.equal(-25);
	 });


	});
	describe("#subtract()",function(){
	 it('should subtract two positive numbers',function(){
	 	var results = calc.sub(10,5);
	
		expect(results).to.equal(5);
	 });
	 it('should subtract two negative numbers',function(){
		var results = calc.sub(-10,-6);

		expect(results).to.equal(-4);
	 });
	});

	describe("#multiply()",function(){
	 it('should multiply two positive numbers',function(){
	 	var results = calc.mul(7,7);
		
		expect(results).to.equal(49);

	 });
	 it('should multiply two negative numbers',function(){
	 	var results = calc.mul(-8,-5);
		
		expect(results).to.equal(40);
	 });
	});

	describe("#divide()",function(){
	 it('should divide two positive numbers',function(){
		var results = calc.div(10,5);

		expect(results).to.equal(2);
	 });
	 it('should divide two negative numbers',function(){
	 	var results = calc.div(-100,-20);

		expect(results).to.equal(5);

	 });
	});





});
