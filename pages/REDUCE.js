// Array.isArray()
//
// Understand this for the interview.

function each(collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for(var key in collection){
      callback(collection[key]);
    }
  }
}
//
//
// for the interview they will have you write an each and than apply those to map and reduce.
//
// arrays are objects ordered by numbers



var newReleases = [{
      title: "Die Hard",
      boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
       rating:[6.0]
    }, {
      title: "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "rating": [5.0]
    }, {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0]
    }];

function reduce(collection,callback,initialVal){
  var accumulator = initialVal;

  each(collection,function(currentEl){
    accumulator = callback(accumulator,currentEl);
  });

  return accumulator;
}

var nameAdder = function(accumulator,currentEl){
  return accumulator.trim() + " " + currentEl.title.trim();
};

console.log(reduce(newReleases,nameAdder,""));
