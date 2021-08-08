# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: The MVC pattern stands for Model-View-Controller. The model is the data,
  the view is what's displayed to the user, and the controller handles the interaction between
  the view and the model so that the data gets displayed in the view, or the view sends data
  back to the database.

  Researched answer: MVC (model-view-controller) describes how the data flows in the app from the user to the backend and separates how the tasks and logic are handled. The model holds the data and logic, while the controller retrieves the data from the model and handles requests from the client. The view is responsible for the UI and presentation.


2. What is a relational database? Are there other kinds of databases?

  Your answer: A relational database is a database where tables are connected by a relation. 
  For example, a database for a school could have two tables for teachers and students and
  each student has an ID for their current teacher. There are also non-relational databases
  like NoSQL that does not use relations to connect data.

  Researched answer: A relational database uses tables which can be related to one another, with a primary key to uniquely identify each row. The layout of all the tables, column names and their data types together is called the schema. There are non-relational databases like MongoDB which uses NoSQL. There are document data stores, key-value stores which are collections of pairs in an object, graphs, and column-oriented stores.


3. What is object-relational mapping?

  Your answer: I think object-relational mapping or ORM is a way to map objects with relational
  databases.

  Researched answer: ORM is a way to map data from a database to an OOP language. Instead of writing SQL queries directly and accessing the database, we can use a programming language to query the data. This results in less code to maintain.


4. What is a gem?

  Your answer: A gem is a package library made for Ruby on Rails.

  Researched answer: A gem is a software package or extension that consists of reusable
  pieces of code. Gems can be used in multiple Ruby on Rails applications.


5. What are primary keys? Why are they important?

  Your answer: Primary keys are unique IDs associated for each instance in a relational
  database. They are important because other columns could have duplicate information
  like if two people share the same first and last name. Primary keys are also used
  when a relation between two tables are made so that the primary key is becomes a
  foreign key in the other table.

  Researched answer: The primary key is a unique ID for a record in a table. There could
  be duplicate values for attributes which are the columns but the primary key is unique.
  When two tables share a relation, then the primary key is referenced as a foreign key.



## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: RESTful (representational state transfer) routing is a way to standardize how data is transferred between the server and the client when making HTTP requests.

2. JSON: JSON (JavaScript Object Notation) is a data interchange format consisting of objects of key-value pairs and arrays. It's human readable and is used to transmit data between web applications and servers.

3. ERB: A file format to embed Ruby into text documents so that HTML and Ruby source code can both be used.

4. Params: URL parameters or query strings are used to pass in extra information from the controller to the view or server.

5. API: An Application Programming Interface is a type of software interface for clients or end users to retrieve information from another server through API calls.
