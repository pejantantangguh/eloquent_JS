/******************

    DATA SETS


*******************/

let listOfNumbers = [2,3,5,7,11];
console.log(listOfNumbers[2]);
// 5
console.log(listOfNumbers[2 - 1]);
// 3

/**********************************

          Array of Objects

***********************************/

{
  let journal = [
    {
      events: ["work","touched tree","pizza","running","television"],
      squirrel : false
    },
    {
      events: ["work","ice cream","cauliflower","lasagna","touched tree", "brushed teeth"],
      squirrel : false
    },
    {
      events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
      squirrel : false
    },
    {
      events: ["weekend", "cycling", "break", "peanuts", "beer"],
      squirrel : false
    },
  ];
}

/*************************************

            Mutability

*************************************/

{
    var object1 = {value: 10};
    var object2 = object1;
    var object3 = {value: 10};

    console.log(object1 == object2);
    // → true
    console.log(object1 == object3);
    // → false

    object1.value = 15;
    console.log(object2.value);
    // → 15
    console.log(object3.value);
    // → 10
}

/******************************

      Lycantrhope Log's

*******************************/


var journal = [];
function addEntry(events, didIturnIntoASquirrel){
  journal.push({
    events: events,
    squirrel: didIturnIntoASquirrel
  });
}

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);

console.log(journal);

/****************************

    Computing Correlations

****************************/

function phi(table){
  return(table[3] * table[0] - table[2] * table[1]) /
  Math.sqrt((table[2] + table[3])*
            (table[0] + table[1])*
            (table[1] + table[3])*
            (table[0] + table[2]));
}

console.log(phi([76,9,4,1]));


/**********************************

        Data from Journal

***********************************/

var JOURNAL = [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","computer","work"],"squirrel":false},
  {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["cauliflower","reading","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
  {"events":["spaghetti","nachos","work"],"squirrel":false},
  {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
  {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
  {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["pizza","ice cream","computer","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work"],"squirrel":false},
  {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["potatoes","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","work"],"squirrel":false},
  {"events":["pizza","beer","work","dentist"],"squirrel":false},
  {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
  {"events":["lasagna","peanuts","work"],"squirrel":true},
  {"events":["pizza","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
  {"events":["pizza","cycling","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","peanuts","candy","work"],"squirrel":true},
  {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
  {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
  {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","candy","work"],"squirrel":false},
  {"events":["potatoes","nachos","work"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
  {"events":["brussel sprouts","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
  {"events":["candy","brushed teeth","work"],"squirrel":false},
  {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
  {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
  {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
  {"events":["brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
  {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","reading","weekend"],"squirrel":false},
  {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
  {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];

/************************************

      END DATA From Journal

*************************************/

function hasEvent(event , entry) {
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal){
  var table = [0,0,0,0];
  for (var i = 0 ; i<journal.length; i++){
    var entry = journal[i], index = 0;
    if (hasEvent( event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", JOURNAL));


/*****************************************

            OBJECT as Maps

*****************************************/

var map = {};
function storePhi(event, phi){
  map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);

console.log("pizza" in map );
//true
console.log(map["touched tree"]);
//-0.081

for (var event in map)
  console.log("The correlation for : " + event + " is " +map[event]);

/*******************************************

          Final Analysis

********************************************/

function gatherCorrelations(journal){
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++){
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++){
      var event = events[i];
      if(!(event in phis))
        phis[event] = phi(tableFor(event,journal));
    }
  }
  return phis;
}

var correlations = gatherCorrelations(JOURNAL);
console.log(correlations.pizza);

for (var event in correlations)
  console.log(event + ": " + correlations[event]);

console.log("Correlations greater than 0.1 or less than 0.1");
// Filter correlations greater than 0.1 or less than -0.1.

for ( var event in correlations ) {
  var correlation = correlations[event];
  if (correlation > 0.1 || correlation < -0.1)
    console.log(event +": " + correlation );
  }

  
