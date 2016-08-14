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

This application uses github based OAuth authentication for logging in users. Therefore before you can view the JBrowse in action, you will be requested for access from github. In this test server, the client Id and cleint secret should be changed to the following credentials. Please note that you should create your own github application and provide the respective credentials if you are going in production.

    Client Id - 2ac3ad3dfc083be6099a
    Client Secret - e83093097cf4379a2ca49886f3f4e5a230638ac4

To use these credentials when you test this application, edit the `app.js` file in the root directory and look for the `passport.use(new GitHubStrategy({...}))` section. More information about passport-github strategy can be found at `https://github.com/cfsghost/passport-github/blob/master/examples/login/app.js`

Now the changes you make in the comments track will be permenant and will be saved to the `trackData.json` file. 
