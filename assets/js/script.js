var app = angular.module('myApp',['angularUtils.directives.dirPagination']);
app.controller('myCtrl', function($scope)
{
						// initilization of empty arrays
	$scope.newBuddy = {};
	$scope.clickedBuddy = {};
	$scope.message = "";
						//Buddy's list declaration
$scope.Buddys = [
{name : 'Rohit', email : 'akhil@gmail.com', mobile : '9998887771'},
{name : 'Virat', email : 'goutham@gmail.com', mobile : '8886667789'},
{name : 'Dhoni', email : 'laxman@gmail.com', mobile : '7778882554'},
{name : 'Dhawan', email : 'dawan@gmail.com', mobile : '8500444156'},
{name : 'Bhumrah', email : 'eswar@gmail.com', mobile : '9889775624'},
{name : 'Pandey', email : 'balu@gmail.com', mobile : '7789364512'},
{name : 'Hardhik', email : 'Hardhik@gmail.com', mobile : '7765412345'},
{name : 'Dravid', email : 'pardhu@gmail.com', mobile : '8465123415'},
{name : 'Manish', email : 'john@gmail.com', mobile : '8745653245'},
{name : 'Sachin', email : 'kalam@gmail.com', mobile : '9565451245'},
{name : 'Raina', email : 'chaitu@gmail.com', mobile : '7832104567'},
{name : 'Ganguly', email : 'mandeep@gmail.com', mobile : '7765412345'},
{name : 'Gavaskar', email : 'nair@gmail.com', mobile : '8465123415'},
{name : 'Kapil', email : 'indu@gmail.com', mobile : '8745653245'},
{name : 'Kuladeep', email : 'rohit@gmail.com', mobile : '9565451245'},
];
var click=0;
$scope.saveBuddy = function()
{
	click+=1;
	if(click==2)
	{
	$scope.Buddys.push($scope.newBuddy);
	$scope.newBuddy = {};
	$scope.message = "New buddy added";
	}
					//editBuddy function
};
$scope.editBuddy = function(Buddy)
{
	$scope.clickedBuddy = Buddy;
};
					//updateBuddy function
$scope.updateBuddy = function()
{
	click+=1;
	if(click==2)
	{
	$scope.message = "Buddy updated";
	}
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
});
