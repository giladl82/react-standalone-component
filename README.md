# A React component exampleI

I've started out trying to create a standalone component. since until now, I only created full react apps.

This was pretty ease after reading the post "[How to create a React component and publish it on NPM](https://medium.com/@BrodaNoel/how-to-create-a-react-component-and-publish-it-in-npm-668ad7d363ce)"
by **Noel Broda**

But then, I came to realize, that in my place of work, they don't use react in most projects, and if I'd like to write a component that could be used in none react projects, and in projects using ES5, I need to export my component 
as a simple js function.

After doing some reading and searching, I came to the conclusion, that it is only possible using **babel-standalone**

There are some differences between a component used in a react project, and a component used with babel standalone, 

**#1** Using babel-standalone, means that the compoent, wont get compiled with webapck etc.
You only need the source code.

**#2** When using babel-standalone, There is no imoprt/export. (one could use system.js but It still has some differences from native modules)

----------

## The code

The react component is under 'index.js' while the standalone component is under 'index.no-modules.js'

The hosting app, is a simple create-react-app
but for using it with the standalone, I removed with the no-modules script, 
 I've made a few changes,
first I removed the line rendering the 'App' in the app source files.
second I've added my component file to the project public folder and wrote this next lines of html in the html file

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react-dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.24.0/babel.min.js"></script>

    <script src="component.js" type='text/babel'></script>
    <script src= src="script.js"></script>


The script.js file is calling the component render funciton

     setTimeout(function () {
	    window.fancyComp('#root', 
		    { color: 'green', overColor:'orange' });  
	    }
    , 0);

That's it.
Hope it will help some one
