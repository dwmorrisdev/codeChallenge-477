

![titlePhoto](http://codeclass.com.ng/assets/app/images/headers/code-challenge.png)
# Code Challenge @477
[Live preview](http://codepen.io/thedadsparticus/full/GmqyWV/) via codepen.
[Original Gist](https://gist.github.com/dwmorrisdev/c891ea03ecfc25fa968dd6d2959b1767)

# Abstract

### Part 1 HTML & JS:
![trinity](https://cdn-images-1.medium.com/max/2000/1*l4xICbIIYlz1OTymWCoUTw.jpeg)
Design a small web application GUI, using HTML and JavaScript. Write a function that processes a given set of data and outputs an HTML table into a webpage. Include styles that help present the table. BONUS - include a way to insert the table into different elements within the page.

### Part 2:
![Perl](http://www.douglasputnam.com/wp-content/uploads/2015/09/perl_logo_oreilly.jpg)
![SQLite](http://plugins.netbeans.org/data/images/1422186794_sqliteicon.png)

Create a database (namely "data.db") using SQLite containing one table with data. It must have three columns. Data from part 1 may be used. Create a Perl script using the DBI module that connects to the database. Select the contents of the created database (users). Print the contents of the table.

# Setup
To run this code, you need only to download the zip file or clone this git to the location of your choice and open index.html in a browser. This will only run the front end part of the application.

To run the backend code, you'll nedd to get the zip or clone the repo and navigate via terminal to the folder ( for me the code to navigate to the folder in question is cd dev/@477 ). Once you are there, you can run "perl script.pl". This will output the contents of the db to the terminal screen. It should be noted that the db info should match the front end. If you have SQLite3 install on your local machine you may manipulate the db or write another Perl script.

# Summary
This is a project for a specific audience. I hope the code I have outlined above meets your standards as well as potentially exceeding them. This code/project could definitely be expanded or even enhanced without new features, such as through responsive design via boostrap/foundation. These five main files are not connected, even though they have correlating data. Through the use of a nodejs backend and a front end framework, these files could be fully integrated.

They are essentially seperated into two categories:

### Front-End Code:
Files:
* index.HTML
* style.css
* script.js

The front end for this project was developed on codepen and converted down to regular css, so that I could use scss and have somewhat of a live link, but it could've been done with no preprocessor. As stated in the index.html disclaimer, this site is not responsive and I used minimal technologies, so no bootstrap or foundation was used for this project, although it could be fairly easily added. I have ideas about refactoring the JS file, but as I wanted to get this submission back to you as quickly as possible, you're getting my first draft.

### Back-End Code:
Files:
* data.db
* script.pl

The back end code was the creation of data.db with the use of SQLite3 via terminal in Ubuntu 16.04 (Ubuntu-Remix), as well as the creation of script.pl. The Perl script just loads the db and then prints its contents to the terminal/console.
