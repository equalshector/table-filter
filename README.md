#Table Filter
##What it does
- You can search a specific table with any values on any column in any order, you can search starting in column 2 and then column 1.
- The table must be present in the dom, it does not query any database.
- The filter will ignore the first row, it is assuming that the first row is a table header.

Check it out here
https://jsfiddle.net/d9g2xoxL/

##Requirements
This code requires jQuery 1.10 or higher.
Make sure to put jQuery before this snippet.

##How to use
1. You must create an input field with the class "table-filter".
2. Your table tag must include the class "search-table".
3. If you want to include the first row please delete this part of the script: ".not('.search-table tr:first')".
