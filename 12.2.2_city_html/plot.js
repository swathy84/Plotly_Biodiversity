/*
//printing the data.js dataset
console.log(cityGrowths);


//Sort the cities in descending order of population growth.

var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 -
    b.Increase_from_2016).reverse();
    console.log(sortedCities);


//Select only the top five cities in terms of growth.
let topFiveCities = cityGrowths.slice(0,5);
console.log(topFiveCities);




//Create separate arrays for the city names and their population growths.
let topFivecityNames = topFiveCities.map(city => city.City);
let topFivecityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

console.log(topFivecityNames);
console.log(topFivecityGrowths);

//Use Plotly to create a bar chart with these arrays.

let trace = {
                x: topFivecityNames,
                y: topFivecityGrowths,
                type :"bar",
};
let layout = {
                title : "Mopst Rapidly Grwoing Cities",
                xaxis : {title : "City"},
                yaxis :{title: "Population Growths"},

};

Plotly.newPlot("bar-plot",[trace],layout);
*/

// Skill-Drill  : Use the same dataset to create a bar chart of the seven largest cities by population.

//Sort the cities in descending order of population growth.

let sortedCity = cityGrowths.sort((a,b)=> a.population - b.population).reverse();
console.log(sortedCity);


//Select only the top 7 cities in terms of population.

let topSevenCities = sortedCity.slice(0,7);
console.log(topSevenCities);

//Create separate arrays for the city names and their population growths.

let topSevenCitiNames = topSevenCities.map(city => city.City);
console.log(topSevenCitiNames);

let topSevenPopulation = topSevenCities.map(city => parseInt(city.population));
console.log(topSevenPopulation);


//Use Plotly to create a bar chart with these arrays.
let trace = {
                x: topSevenCitiNames,
                y: topSevenPopulation,
                type: "bar",

};

let layout = {
                title : "Most populated Cities",
                xaxis: { title: "City"},
                yaxis: { title: "Population"},

};

Plotly.newPlot("bar-plot",[trace],layout);