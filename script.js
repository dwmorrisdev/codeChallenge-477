'use strict';

var table_data = [{
  first_name: 'Rose',
  last_name: 'Tyler',
  home: 'Earth'
}, {
  first_name: 'Zoe',
  last_name: 'Heriot',
  home: 'Space Station W3'
}, {
  first_name: 'Jo',
  last_name: 'Grant',
  home: 'Earth'
}, {
  first_name: 'Leela',
  last_name: null,
  home: 'Unspecified'
}, {
  first_name: 'Romana',
  last_name: null,
  home: 'Gallifrey'
}, {
  first_name: 'Clara',
  last_name: 'Oswald',
  home: 'Earth'
}, {
  first_name: 'Adric',
  last_name: null,
  home: 'Alzarius'
}, {
  first_name: 'Susan',
  last_name: 'Foreman',
  home: 'Gallifrey'
}];

var tableSelection = "tableHolder";
//inputs 1 variable in the form of an array of objects and a location.
//create a function that takes input and filters the array of objects
var handleTable = function handleTable(data, location) {
  var fname = ["First Name"];
  var lname = ["Last Name"];
  var home = ["Location"];
  //loop through data and seperate each object into three arrays
  for (var i = 0; i < data.length; i++) {
    //store each array in a variable
    fname.push(data[i].first_name);
    lname.push(data[i].last_name);
    home.push(data[i].home);
  }
  // output the filtered data to an HTML table.

  //grab holder - later this is how we'll select other divs for the table to live in.
  var holder = document.getElementById(location);
  //create table
  var tbl = document.createElement("table");
  tbl.style.width = '100%';
  tbl.setAttribute('border', '1');
  var tblhead = document.createElement("thead"); //populate head still needs to be added.
  var tblbody = document.createElement("tbody");
  //create cells
  for (var i = 0; i < fname.length; i++) {
    //create rows
    var tr = document.createElement('tr');
    for (var j = 0; j < 3; j++) {
      //create data cell
      var td = document.createElement('td');
      //populate td
      if (j === 0) {
        td.appendChild(document.createTextNode(fname[i]));
      } else if (j === 1) {
        if (lname[i] === null) {
          td.appendChild(document.createTextNode("Unspecified"));
        } else {
          td.appendChild(document.createTextNode(lname[i]));
        }
      } else {
        td.appendChild(document.createTextNode(home[i]));
      }
      //place data in row
      tr.appendChild(td);
    } //place row in body
    tblbody.appendChild(tr);
  }
  //place body in table
  tbl.appendChild(tblbody);
  //put table in div on the page and render.
  //place table in holder
  holder.appendChild(tbl);
};

//create a click handler function that runs handleTable on click and moves the table to another div.
var buttonHandler = function buttonHandler() {
  // hide holder
  document.getElementById(tableSelection).style.visibility = "hidden";

  //empty holder
  document.getElementById(tableSelection).innerHTML = "";

  //change holder location
  var choices = ["tableHolder", "secondHolder", "thirdHolder"];
  var selection = Math.floor(Math.random() * 3);
  while(tableSelection === choices.selection){
    selection = Math.floor(Math.random() * 3);
  }
  tableSelection = choices[selection];
  console.log("data jumped to new div");

  //render table
  handleTable(table_data, tableSelection);

  //make visible
  document.getElementById(tableSelection).style.visibility = "visible";
};
