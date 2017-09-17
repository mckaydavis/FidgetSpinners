# Server

npm install 
npm install -g forever
npm start

## API Usage
List of URL options
### Get Documents
http://localhost:3000/api/division/
<br>
http://localhost:3000/api/title/
<br>
http://localhost:3000/api/chapter/
<br>
http://localhost:3000/api/id?val=*objectId*
### Search Documents
http://localhost:3000/api/search?input=*user_input*&size=*number_of_documents*
<br>
Where *user_input* is the term or terms to search and *number_of_documents* is an integer.
