

test("frontendJS", function(){

	equal(ValidateType('1234'),'1234');
        equal(ValidateType('-4'),'-4');
        equal(ValidateType('four'),'error');
        equal(ValidateType('-four'),'error');
});
