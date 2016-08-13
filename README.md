# jBrowse-comment-server
This is a `NodeJs` and `ExpressJs` based minimal backend component for updating comments in SocialFeatures Plugin in JBrowse. Without this server component up and running, the changes you make in the JBrowse Comments Track will be volatile and hence will disappear when the page is refreshed. 

## Installation Guide
To get this `express` application up and running, first clone this repository and run:
    
    npm install

This will download and install all the dependencies required. 
Then copy all the files of the JBrowse repository to the inside of the `public` directory. These files are served as static files by the `static` module of `NodeJs`.

Next thing is to set the `index` view page. to do this, copy the `index.html` file to the `views` directory and rename it to `index.ejs`. This is because `Embedded Js` or `ejs` is used as the view engine in this express application.  

Then to start the server, issue the following command from the root directory of this repository in the terminal. 

    npm start

This will start the server and listen on port `3000`. To view the JBrowse on your browser, navigate to `http://localhost:3000`. You should be able to see Volvox data if everything went alright. 

Now the changes you make in the comments track will be permenant and will be saved to the `trackData.json` file. 
