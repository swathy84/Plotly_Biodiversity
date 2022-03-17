
//to read the data from spacedata website using API call 
const url = "https://api.spacexdata.com/v2/launchpads";
d3.json(url).then(receivedData => console.log(receivedData));


// to get the full name of the Vandenberg Air force Base 
d3.json(url).then(data=> console.log(data[0].full_name));


//to get the latitude of the Vandenberg Air force Base 

d3.json(url).then (data=> console.log(data[0].location.latitude));


//skill -drill using map() to print only the latitude and longitude coordinaties if each spaceX launch station 

d3.json(url).then(function(data){
    latlng= data.map(location => location.latitude);
    console.log(latlng);
});
 //d3.json(url).then(console.log(data.map(data =>data.location.latitude)));

 //the syntax used to retrieve data from an external data file ,isntead pf webAPI is same 
 d3.json("samples.json").then(function(data){
     console.log("hello");
 });

