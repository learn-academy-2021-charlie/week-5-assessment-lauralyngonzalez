# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL?

Structured Query Language or SQL is a domain specific language used to manage data inside relational databases.

2. What the PostgreSQL query that would return all the content in a particular table?

SELECT * FROM table_name

3. What is the command to create a new Rails application with a PostgreSQL database?

$ rails new app_name -d postgresql -T

4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?

$ rails g model Meal breakfast:string lunch:string dinner:string

5. What is a migration? Why would you use one?

A migration is a file used to alter the database schema through Rails. Instead of writing SQL queries directly to manipulate the database, the migration file runs those queries for us. Making these independent helps to maintain the integrity of the database and gives us a history of what was added, changed, or removed.

6. What is the command to generate a migration file?

$ rails g migration add_column_price_to_meal

7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

The naming convention for the Rails model is capitalized and singular. The database table that it creates is plural and snake_case.

8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?

The schema file describes the shape of the database, with the tables, column names and their data types. The schema cannot be modified directly because Rails keeps it independent from the user. Running db:migrate after creating a migration file will change the schema and update that file.

9. What is the Rails console?

The Rails console allows us to interact with our application from the command line. For example, we used the console to interact with the active record and added/updated entries in tables.

10. What is the Rails console command to see all the content in a particular table?

Table.all