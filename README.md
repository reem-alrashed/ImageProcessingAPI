# Image-Processing-API
Create an API that takes advantage of all the tools you have learned in this course. You'll create an image processing API that resizes and saves images to user specifications when visiting a URL
## Dependencies 

To install the dependencies for this project, run the following command: 

```
npm install
```


## Build & run the server
After installing the dependencies, run the follwing command to build typescript into javascript and save them in build folder:

```
npm run build
```

Start the Server:
```
npm start
```
This command will run the server  on port 3000. The home page will be available through http://localhost:3000
<img width="650" alt="Screen Shot 2021-07-16 at 11 40 38 PM" src="https://user-images.githubusercontent.com/68843028/126006610-8a9489af-bc94-44a4-9f02-16c56433be73.png">


## Linting 
```
npm run lint
```

<img width="717" alt="Screen Shot 2021-07-16 at 11 36 20 PM" src="https://user-images.githubusercontent.com/68843028/126005913-bd7c06e9-4808-4a34-817c-38f4154b146c.png">


## Testing
```
npm run test
```
<img width="694" alt="Screen Shot 2021-07-16 at 11 24 47 PM" src="https://user-images.githubusercontent.com/68843028/126005968-536252b9-cdc7-4483-972c-ff55ea79af0c.png">

## API Endpoints 

This project has two endpoint.

### Homepage endpoint
General: Views all images without chanding their sizes.   


HTTP method: GET. 

#### Sample request:
```
http://localhost:3000/
```
#### Sample response: 

<img width="1440" alt="Screen Shot 2021-07-16 at 11 41 21 PM" src="https://user-images.githubusercontent.com/68843028/126006345-d7a96a6a-4720-45a5-8026-2a5f344cd58f.png">


### Resize endpoint
General:  Changes the size of the images depending on the input. 

#### Sample request: 
```
http://localhost:3000/resize?w=500&h=400
```  

#### Sample response:  
<img width="1440" alt="Screen Shot 2021-07-16 at 11 41 13 PM" src="https://user-images.githubusercontent.com/68843028/126006349-a387bf82-2002-4963-b3b9-8dc4416cdb35.png">

## Middlewares

### Page Not Found 
When accessing an endpoint other than the discussed ones.
<img width="1385" alt="Screen Shot 2021-07-16 at 11 43 24 PM" src="https://user-images.githubusercontent.com/68843028/126006518-ea2b58b4-6e8a-4418-a60c-1696ee110917.png">


### Logs 
Prints info about the endpoints accessed, for development.
<img width="584" alt="Screen Shot 2021-07-16 at 11 44 23 PM" src="https://user-images.githubusercontent.com/68843028/126006584-32a7ce86-7d6e-4913-8c78-228671619e29.png">

## Errors handling
The website can deal with these types of errors:  

1. 404 – Page not found.
2. No images to resize.
3. No Parameter provided to resize.

## Resources

[Node.js Documentation](https://nodejs.org/docs/latest-v12.x/api/). 

[Express Documentation](https://expressjs.com/en/5x/api.html). 

[Resize API](https://sharp.pixelplumbing.com/api-resize).
