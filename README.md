## 1. Introduction to React

Do you want to build user interfaces for large scaled application where data will change over time? React is a super popular JavaScript user interface library that helps you to create user interfaces. Is haven’t been out for that long, since it’s been released in 2013 by Facebook.

Personally, I think the fact that you can bundle up parts of a website into components a big advantage of React. This allows you to create small blocks for your application, which you can use in your code to reduce repetition in your code.

### Will React replace JavaScript?
Wasn’t PHP dead 20 years ago? Keep in mind that React does not have its own templating system, but it uses the full power of JavaScript to build user interfaces. There are obviously some differences with plain JavaScript, since Reacts user interface is a function of application state. This means that you don’t need to store the state of your application in the DOM, but the flow is reversed, since a state can live in a store and all components have to do, is re-render every time the state updates.

### What will we be learning?
We’re going to start off by learning the fundamentals of React. Think about topics like components, how to handle user interaction, how to manage forms, and how to interact with servers.

Once we’ve been over the fundamentals, we will be taking it a step further and dive into the data architecture, transport, and management.

### Is React hard to learn?
There is no clear-cut answer on how difficult React is. Apart from the fact that every developer learns at his own pace, it is very important to have a good understanding of coding before you dive into learning React.

### Reacts future
Like I’ve mentioned before, React is a fairly new programming language. Just like me, you have probably Googled around if React is the future. React has reached a place where the core functionality is stable, but even that can change over time.

 
## 2. Setting up our environment & Creating our first App

Before we can create a React project, we need to make sure that we set up our development environment correctly. In order to run React projects locally, you need to install Node.js and NPM since Reacts frontend is connected to a node backend.

Whether you are using a Windows, Mac or Linux operating system, the simplest way of installing Node.js is [right here](https://nodejs.org/en/) from their official website.

Once you’ve setup Node correctly, you will be able to use something which is called ```npm```. ```npm``` stands for Node Package Manager and it is installed as part of Node.js.

Open an CLI, and perform the following command to see if node has been setup correctly.
```
npm -v
```

IF you have installed Node.js correctly, you will see a version number printed out. In my case, I’m using NPM version 7.13.10.

### What is Node?
You can see Node as JavaScript, but without the browser. It has a runtime environment that allows you to build full-stack JavaScript applications. You actually don’t need Node to use React, but you do need to use the Node Package Manager(npm) to install dependencies.

### Creating our first application
React has a cool command which allows you to create a new single page application in React through ```npx```.
```
npx create-react-app my-react-app
```

This will create a new react project, which will take 2-3 minutes because its pulling in all necessary dependencies. Once your dependencies have been pulled in, you will see that the project has been created successfully, and it also shows us a couple commands that we can perform.

Whenever you want to perform a command that is related to your React project, you need to make sure that you are in the root of your project directory.
```
cd my-react-app
```

If you open ```my-react-app``` inside a code editor, you’ll be seeing come folders and file that you might not have seen before, let’s go over them really quick.


#### node_modules
The node_modules folder consists of dependencies that have been pulled in through ```npm```.

#### public
Inside the public folder, you’ll be storing assets that you need inside your project. Think about images, Google fonts etc.

#### src
The src folder is the most important folder in your project directory because it contains all React related source code of your project. The real magic happens right here, because we will be spending most of our time right here.

#### .gitignore
For Git users, this file will make sense because it allows you to exclude files and folders when you push your code to GitHub.

#### package-lock.json
The package-lock.json file stores the exact version number of the dependencies from the package.json file.

#### package.json
The package.json file manages your application dependencies that are included in the node_modules folder. There’s also a section where you can add scripts that you can run within your application.

#### README.me
The README.me file is a markdown file that includes a lot of helpful tips and links that React provided for us.

### Open project locally
Like I’ve mentioned before, the package.json file has a couple scripts that we can run from the CLI. With the ```start``` command, you’ll be able to open your project through your localhost.
```ruby
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

By running the following command in the CLI, a local server will be opened where you can run your project locally on port number 3000.
```
npm run start
```

### Application flow
When you open ```http://localhost:3000``` in the browser, you will see a beautiful landing screen that React has created for us, but where does it come from?

If you open the ```public``` folder, you will find an index.html file. Inside the index.html file, you will see that a div with an id of ```root``` is injected.
```ruby
<div id="root"></div>
```

The root id will be used inside the ```src/index.js``` file, where all React components are being used. First, The React DOM is going to render a new App components, which will be the App.js file from the src folder. Right here, you’ll also see that an element is being grabbed by Id, with the name of ```root```!
```ruby
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

```

If we open the ```src/App.js``` file, you will see the landing screen that we’ve got on our localhost. 
