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


function reduce(collection, callback, initialVal) {
  var accumVal = initialVal;
  var counter = 0;

  while(counter<collection.length){
    accumulator = callback(accumulator, collection[counter]);
    counter++;
  }
  return accumulator;
}

var name adder = function(accumulator, currentEl) {
  return accumulator + currentEl.title

}

console.log(reduce(newReleases, adder,""))
