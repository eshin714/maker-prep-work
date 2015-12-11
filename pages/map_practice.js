//each

function each(collection, callback){
	if(Array.isArray(collection)) {
  	for(var i = 0; i < collection.length; i++){
    	callback(collection[i]);
    }
    } else {
    	for (var key in collection) {
      callback(collection[key]);
      }
    }

};

var cb = function(currentEl){
	console.log(currentEl + " ;)");
};




//map

function map(collection, callback) {
	var results = [];

	each(collection, function(currentEl){
  	results.push(callback(currentEl));
  });

  return results;
  }



var booya = map([5,1,3], function(currentEl){
  return (currentEl + " :)");
})

console.log(booya)


function map(collection, callback)
