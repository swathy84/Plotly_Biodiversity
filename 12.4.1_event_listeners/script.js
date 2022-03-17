d3.selectAll("body").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
  console.log(d3.selectAll("#menu").node().id);
};

//Skill -Drill : our dropdown menu should contain the following names: Mickey, 
//Minnie, Donald, Goofy. When a character (e.g., Minnie) is chosen from the dropdown menu by a user,
// the character's name should be printed to the browser console.


d3.selectAll("body").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#Characters").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
  //console.log(d3.selectAll("#menu").node().id);
};