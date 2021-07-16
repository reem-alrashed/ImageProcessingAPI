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


## Linting 
```
npm run lint
```

## Testing
```
npm run test
```

## API Endpoints 

This project has two endpoint.

### Homepage endpoint
General: Views all images without chanding their sizes.   


HTTP method: GET
Sample request:
```
http://localhost:3000/
```

### Resize endpoint
General:  Changes the size of the images depending on the input. 

Sample request: 
```
http://localhost:3000/resize?w=500&h=400
```  

## Middlewares

### Page Not Found 
When accessing an endpoint other than the discussed ones, Page not found will show 
### Logs 
Prints info about the endpoints accessed, for development.

## Errors handling
The website can deal with these types of errors:  

1. 404 – Page not found.
2. No images to resize.
3. No Parameter provided to resize.

## Resources
