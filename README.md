## Course Overview

| **Episode**   | **Subject** |
| ------------- |-------------|
| Ep. 1         | Introduction to React |
| Ep. 2         | Setting up our environment & Creating our first App |
| Ep. 3         | How to setup VS Code for React projects |
| Ep. 3         | 6 Must Know JavaScript Topics before you learn React |

## 1. Introduction to React

Do you want to build user interfaces for large scaled application where data will change over time? React is a super popular JavaScript user interface library that helps you to create user interfaces. React hasn’t been out for that long, since it’s been released in 2013 by Facebook.

Personally, I think the fact that you can bundle up parts of a website into components is a big advantage of React. Components allows you to create small blocks for your application, which you can use in your code to reduce repetition.

### Will React replace JavaScript?
Wasn’t PHP dead 20 years ago? Keep in mind that React does not have its own templating system, but it uses the full power of JavaScript to build user interfaces. There are obviously some differences between React and JavaScript, since Reacts user interface is a function of application state. Meaning that you don’t need to store the state of your application in the DOM, but the flow is reversed, since a state can live in a store and all components have to do, is re-render every time the state updates.

### What will we be learning?
We’re going to start off by learning the fundamentals of React. Think about topics like components, how to handle user interaction, how to manage forms, and how to interact with servers.

Once we’ve been over the fundamentals, we will be taking it a step further and dive into the data architecture, transport, and management.

### Is React hard to learn?
There is no clear-cut answer on how difficult React is. Apart from the fact that every developer learns at his own pace, it is very important to have a good understanding of coding before you dive into learning React.

### Reacts future
Like I’ve mentioned before, React is a fairly new programming language. Just like me, you have probably Googled around if React is the future, or even has a future. React has reached a place where the core functionality is stable, but even that can change over time.

## 2. Setting up our environment & Creating our first App

Before we can create a React project, we need to make sure that we set up our development environment correctly. In order to run React projects locally, you need to install ```Node.js``` and ```NPM``` since Reacts frontend is connected to a node backend.

Whether you are using a Windows, Mac or Linux operating system, the simplest way of installing Node.js is [right here](https://nodejs.org/en/) from their official website.

Once you’ve setup Node correctly, you will be able to use something which is called ```npm```. ```npm``` stands for Node Package Manager and it is installed as part of Node.js.

Open an CLI, and perform the following command to see if node has been setup correctly on your device.
```
npm -v
```

If you have installed Node.js correctly, you will see a version number printed out. In my case, I’m using NPM version ```7.13.10```.

### What is Node?
You can see Node as JavaScript, but without the browser. It has a runtime environment that allows you to build full-stack JavaScript applications. You actually don’t need Node to use React, but you do need to use the ```Node Package Manager(npm)``` to install dependencies.

### Creating our first application
React has a cool command which allows you to create a new single page application through ```npx```.
```
npx create-react-app my-react-app
```

This will create a new react project with a folder/project name of ```my-react-app```. This will take 2-3 minutes because its pulling in all necessary dependencies. Once your dependencies have been pulled in, you will see that the project has been created successfully, and it also shows us a couple commands that we can perform.

Whenever you want to perform a command that is related to your React project, you need to make sure that you are in the root of your project directory. When you create a new project, you won't be inside the project directory but you need to change directories first.
```
cd my-react-app
```

If you open ```my-react-app``` inside a code editor, you will be seeing some folders and file that you might not have seen before, let’s go over them really quick.

#### node_modules
The node_modules folder consists of dependencies that have been pulled in through ```npm```.

#### public
Inside the public folder, you should be storing assets that you need inside your project. Think about images, Google fonts etc.

#### src
The src folder is the most important folder in your project directory because it contains all React related source code of your project. The real magic happens right here, because we will be spending most of our time right here.

#### .gitignore
For Git users, this file will make sense because it allows you to exclude files and folders when you push your code to GitHub. It's not a file that you need for React.

#### package-lock.json
The package-lock.json file stores the exact version number of the dependencies from the package.json file.

#### package.json
The package.json file manages your application dependencies that are included in the node_modules folder. There’s also a section where you can add scripts that you can run within your application.

#### README.me
The README.me file is a markdown file that includes a lot of helpful tips and links that React provided for us. It is also not a file that you need to run your React project.

### Open project locally
Like I’ve mentioned before, the package.json file has a couple scripts that we can run from the CLI. With the ```start``` command, you will be able to open your project through your localhost.
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

Inside the ```public``` folder, you will find an index.html file where you will see that a div with an id of ```root``` is injected.
```ruby
<div id="root"></div>
```

The root id will be used inside the ```src/index.js``` file, where all React components are being used. First, The React DOM is going to render a new App component, which will be the App.js file from the ```src``` folder. Right here, you will also see that an element is being grabbed based on an id, with the name of ```root```!
```ruby
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

```

If we open the ```src/App.js``` file, you will see the landing screen that we’ve got on our localhost. 

## 3. How to setup VS Code for React projects

I will be using [Visual Studio Code](https://code.visualstudio.com/) for this video series because it’s free, super easy to add extensions to and its one of the most used code editors.

When you want to install an extension, you need to access the extensions market, this can be done in the left side bar, where you need to click on the 4 squares.

When working on React projects, I recommend installing the following extensions: <br>
•	[Community MaterialTheme](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-community-material-theme) <br>
•	[ES7 React/Redux/GraphQL/React-native Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) <br>
•	[Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport) <br>
•	[Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) <br>
•	[ESLint]( https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) <br>
•	[Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer) <br>
•	[VSCode Great Icons](https://marketplace.visualstudio.com/items?itemName=emmanuelbeziat.vscode-great-icons) <br>
•	[Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) <br>
•	[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) <br>
•	[Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) <br>
•	[HTML Snippets](https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets) <br>

4. Must Knowns before learning React

When creating web applications in React, you will be using a lot of JavaScript since it is obviously built in JavaScript! If you are not 100% familiar with JavaScript syntax yet, take a look at the following topics that you need to know before you learn React.

### Data Types
The first must know are the 6 primitive data types and 2 special data types. 

```ruby
// Data Types
let name = "Dary" // string
let age = 25 // Integer
let price = 20.5 // Float
let isSleeping = true // Boolean (true)
let isAwake = false // Boolean (False)
let cars = ['BMW', 'Mercedes', 'Audi']; // Array
let city; // Undefined
let country = null; // Null

// Object
let person = {
  "name": "Code With Dary",
  "course": "React!",
  "channel": "Code With Dary"
}

// Function
function createMessage() {
  return 'This is a message';
}

// Call function outside of the function
createMessage();
```

### Declaring variables

#### const
You can define variables in three different ways in JavaScript. The first method is by defining a constant. Keep in mind that you can only declare a constant once, because you cannot change the value after.

```ruby
const name = "Dary"

name = "Michael" // This will throw an error

console.log(name)
```

#### let
The second method is to declare variables with the keyword let. Let allows you to declare variables that are limited to the scope of a block statement.

The output of the following example will be 2 and 1, because the second ```console.log(x)``` is being called outside of the statement.
```ruby
function letExample() {
    let x = 1;
    {
        let x = 2;
        console.log(x)
    }
    console.log(x)
}
```

#### var
Var is actually the old way of declaring variables. With the keyword var, you will be defining a variable globally. The output in the following example will be 2 and 2, because the second let will overwrite the value of the first one.
```ruby
function varExample() {
    var x = 1;
    {
        var x = 2;
        console.log(x)
    }
    console.log(x)
}
```

### ES6 Classes
A class is a blueprint of template for an object. Within classes, you can define constructors, which is unique to a class. 
```ruby
class Classes {

}
```

You can define a constructor by writing down the keyword constructor. Whatever happens inside the constructor, will be called whenever the class is being called.
```ruby
    constructor(num1, num2) {
        this.num1 = num1
        this.num2 = num2
    }

    printCount(num1, num2) {
        console.log(this.num1 + this.num2)
    }
```

What you could do is creating a new instance of the ```Classes``` class, and pass in two numbers.

```ruby
const test = new Classes(5, 6)
```

With the new constant called ```test```, you have the ability to call the ```printCount``` function.
```ruby
test.printCount()
```

The output will be the count of 5 and 6, which is 11.

Classes are something you will be dealing a lot in any programming language. The main advantage is the fact that you can create as many instances as you want.

### Arrow Function
The arrow function is a smaller syntax for a function. The best way to showcase the differences is by comparing them. The following example is a regular function which we all should be familiar with.

```ruby
let x = function (num1, num2) {
    return num1 + num2
}
```

This is all good, but it can be done a lot faster and in one single line. 
```ruby
let y = (num1, num2) => num1 + num2
```

The output will be exactly the same, but you need to keep in mind that they are both functions, so you need to call them in the same exact way.
```ruby
console.log(x(5, 5))
console.log(y(5, 5))
```

### Destructuring Assignment
Destructuring assignments allows you to unpack values from arrays or properties into distinct variables. If we take a look at the follow object, we’ve basically got a key value pair where the keys are ```PHP, JS, Java and Python```, and the values are ```Laravel, React, Maven and Django```.

```ruby
let frameworks = {
    php: "Laravel",
    js: "React",
    java: "Maven",
    python: "Django"
}
```

When destructuring assignments, you can grab a value based of the key, without using a loop! If we define a new var with curly braces, we need to define the keys you want to make a single variable of (which will be the name of the key as well). Then, we need to set this equal to the object.

```ruby
var {php, python} = frameworks
console.log(php)
```

If we output a key inside a ```console.log()```, you will see that the output is the value of it.

### CommonJS
CommonJS is a module pattern that is supported by all ```Node.js``` versions. CommonJS will export all JavaScript objects using the module exports. In our previous example, we created a ```frameworks``` object, which we can simply export with the following line:

```ruby
module.exports = {frameworks}
```

You won’t be seeing anything when you run the code, but this allows you to use the ```frameworks``` object in any other file in your project directory. You don’t need to import it in another file, but you are going to ```require``` it.
```ruby
const {frameworks} = require('.commonjs')

console.log(frameworks)
```
