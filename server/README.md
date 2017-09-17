# HRS App API
NodeJS API for the Hawai Revised Statutes App. API includes access to statute document data store and HRS search engine.
## Getting Started
Theses instructions will get you started with setting the server locally. See deployment notes for instructions on how to set this up on a live system.
### Prerequisites 
#### Software
[NodeJS v8.5](https://nodejs.org/en/)<br>
[MongoDB v3.4](https://www.mongodb.com/download-center)<br>
[Elasticsearch v5.5](https://www.elastic.co/products/elasticsearch)<br>
#### Environment Variables
MONGO_URI=mongodb://username:pass@host/hrs?authSource=admin<br>
Reference to [mongo uri format](https://docs.mongodb.com/manual/reference/connection-string/)<br>
ELASTIC_URI=*the_uri_for_your_elastic_search_instance*<br>
#### Installing
To install the server, run...
```
sudo npm install forever -g
npm install
npm start
```
## API
List of URL options for getting documents.
### Get Documents
#### Get by division
Returns a list of statutes by division number <br>
http://localhost:3000/api/division/*division_number* <br>
#### Get by title 
Gets a list of statutes by title number <br>
http://localhost:3000/api/title/*title_number*
#### Get by chapter number
Gets a list of statutes by chapter number <br>
http://localhost:3000/api/chapter/*chapter_number*
#### Get by objectId
Get a statute by its objectId <br>
http://localhost:3000/api/id?val=*objectId*
### Search Documents
API usage for the hrs search engine
#### Get by search term
Return a list of statutes information by a search<br>
http://localhost:3000/api/search?input=*search*&size=*number_of_documents*
#### Get by chapter_section
Return statute information by its chapter and section
http://localhost:3000/api/statutes/search/chaptersection?chapter=*chapter_num*&section=*section_num*