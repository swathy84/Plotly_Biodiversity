//Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

//line graph example
//Plotly.newPlot("plotArea",[{x: [0,5,10,15,20,25], y : [100,200,300,400,500,600]}]);


//bar graph example 
/*
let trace = {
            x : ["burrito", "Pizza","chicken"],
            y : [10,18,5],
            type : "bar"
};

let layout = { title : "Luncheon survey",
                xaxis : {title : "food Option"},
                yaxis: { title: "Number of Respondents"}
            };


Plotly.newPlot("plotArea", [trace], layout);
*/



//Skill Drill : Open VS Code and create a new bar chart with Plotly. This graph will chart several beverages and the percentage of the total number of orders they comprise in a popular nonalcoholic bar. Here is your data:


/*
let barSurvey = {
                    x : ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],

                    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
                    type : "bar"

};

let data = [barSurvey];

let layout = { 
                title:  "Bar Survey ",
                xaxis : { title: "Drink"},
                yaxis: {title: "Percent Of drink Ordered"}
};

Plotly.newPlot("plotArea",data, layout); 

*/


//Create a pie chart 
//the below code wont display the pie chart because : in Trace , the data arrays have x and Y keys. this causes a problem beacuse the pie chart foe not have x and y axis. different keys should be used
/*
let trace = { 
                x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
                        "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
                y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
                type: 'pie'

};

let layout = { title: "Pie chart "};

Plotly.newPlot("plotArea",[trace],layout);

*/

//this below code will work for the pie chart

/*
var trace = {
    labels:  ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
       "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
  };
  var data = [trace];
  var layout = {
    title: "'Pie' Chart",
  };
  Plotly.newPlot("plotArea", data, layout);

  */



  //scatter plot 

  let trace1 = {
                x: [1,2,3,4,5],
                y: [10,20,30,40,50],
                mode : "markers",
                type : "scatter",

                //to hover the data labels hover 
                name : " Team A ",
                text : ["A-1","A-2","A-3","A-4","A-5"],
                marker: { size: 12}

  };

  let trace2 = {
                x: [2,3,4,5,6],
                y: [25,35,45,55,65],
                mode: "lines",
                type : "scatter"
  };

  let trace3 = {
    x: [1,3,5,7,9],
    y: [25,35,45,55,65],
    mode: "lines+ Markers",
    type : "scatter"
};
  let data = [trace1, trace2, trace3];

  let layout = { 
        xaxis: { title : "xaxis",
                range: [1 ,10]},
        yaxis : { title : "y axis",
                range: [20, 100]}
  };



  Plotly.newPlot("plotArea",data, layout);


