

// skill-drill to print a simple message to the browser console after running  python -m http.server in the terminal from the folder. 

d3.json("samples.json").then(function(data){
    console.log("hello");
});


// to read and parse the actual data from the samples.json
d3.json("samples.json").then(function(data){
    console.log(data);
});

//Roza wants to extract only the wfreq, or the weekly belly button washing frequency, 
//of each person into a new array. What would her code look like?


d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});



//Roza now wants to sort the wfreq array in descending order. What would her code look like?
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
    person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});


//Roza now wants to delete null values from the sorted wfreq array. Which of the following methods would she use?
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});


//skill-drill Use Object.entries() and forEach() to print all the metadata of the first person in the samples.json() dataset (ID 940).

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});
