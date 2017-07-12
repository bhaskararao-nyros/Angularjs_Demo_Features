var app = angular.module('myApp',['angularUtils.directives.dirPagination']);
app.controller('myCtrl', function($scope)
{
						// initilization of empty arrays
	$scope.newBuddy = {};
	$scope.clickedBuddy = {};
	$scope.message = "";
	$scope.formModel = {};
						//Buddy's list declaration
$scope.Buddys = [
{name : 'Rohit', email : 'Rohit@gmail.com', mobile : '9998887771'},
{name : 'Virat', email : 'Virat@gmail.com', mobile : '9996667789'},
{name : 'Dhoni', email : 'Dhoni@gmail.com', mobile : '9998882554'},
{name : 'Dhawan', email : 'Dhawan@gmail.com', mobile : '8500444156'},
{name : 'Bhumrah', email : 'Bhumrah@gmail.com', mobile : '9889775624'},
{name : 'Pandey', email : 'Pandey@gmail.com', mobile : '7789364512'},
{name : 'Hardhik', email : 'Hardhik@gmail.com', mobile : '7765412345'},
{name : 'Dravid', email : 'Dravid@gmail.com', mobile : '8465123415'},
{name : 'Manish', email : 'Manish@gmail.com', mobile : '8745653245'},
{name : 'Sachin', email : 'Sachin@gmail.com', mobile : '9565451245'},
{name : 'Raina', email : 'Raina@gmail.com', mobile : '7832104567'},
{name : 'Ganguly', email : 'Ganguly@gmail.com', mobile : '7765412345'},
{name : 'Gavaskar', email : 'Gavaskar@gmail.com', mobile : '8465123415'},
{name : 'Kapil', email : 'Kapil@gmail.com', mobile : '8745653245'},
{name : 'Kuladeep', email : 'Kuladeep@gmail.com', mobile : '9565451245'},
];
						//countries drop down list declaration
$scope.countries = ['India','America','England','Westindies','South Africa','China','Japan',
				  'Germany','South Korea','North Korea','Newzeland','Srilanka','Bangladesh','Bhutan','Nepal'];
				  	//addBuddy function
$scope.saveBuddy = function()
{
	$scope.Buddys.push($scope.newBuddy);
	$scope.newBuddy = {};
	$scope.message = "New buddy added";
					//editBuddy function
};
$scope.editBuddy = function(Buddy)
{
	$scope.clickedBuddy = Buddy;
};
					//updateBuddy function
$scope.updateBuddy = function()
{
	$scope.message = "Buddy updated";
};
					//deleteBuddy function
$scope.deleteBuddy = function()
{
	$scope.Buddys.splice($scope.Buddys.indexOf($scope.clickedBuddy), 1);
	$scope.message = "Buddy deleted";
};
					//alert message after each fun() success
$scope.showMessage = function()
{
	$scope.message = "";
};
					//sorting Buddy's list
$scope.sort = function(keyname)
{
	$scope.sortKey = keyname;
	$scope.reverse = !$scope.reverse;
};
					//registration form submission
$scope.onSubmit = function(valid)
{
	if(!valid)
	{
		alert("All the fields are mandatory");
	}
	else
	{
		alert("Registeration successful.....!");
	}
};
});
