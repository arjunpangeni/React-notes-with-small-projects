# Components

In react, a component is a reusable, self-contained piece of code that defines a part of a UI. It is a building blocks of a `React` application. Each component represents a part of the UI, which could be as small as a button or as large as a complete page. Their are main two types of components in React, Class components and functional component.
We are discussing about functional component now .

functional components have same propose as javascript functions and returns `jsx`.

## Defining a componet.

A React-component is a javascript function that we can sprinkle with markup. Here's what it looks like .

```jsx
export default function Button(){
  return (
  <button style={{color:'white',background:"black"}}>
  Click me</button>
  )
}
```

**Here's how we build above componet**

- The `export default` prefix is a standard js syntax .it lets us to mark the main function in a file so that can later export it to other file.
- `defining function`: with function Button(){ } , we define a js function with the name `Button`. React components are regular js functions,
  :memo:**reminder:** Their names must start with a capital letter or they won't work !
- `Add markup`: the component returns an `<button>` tag with style attributes. It is written like html , but it is actually javascript under the hood called jsx syntax.

**Returns statements**

- Return statements can be written all on one line as in this component. it can be done if our markup has small one liner code.
  ```jsx
  return <button style={{color:'white',background:"black"}}   >Clickme</button>
  ```
- But if out markup isn't all on the same line as the `return` keyword, we must wrap it in a pair of parentheses.
  ```jsx
  return (
  <div>
  <h1>Image</h1>
  <img src="https://i.imgur.com/MK3eW3As.jpg"
  alt="Katherine Johnson" />
  </div>
  );
  ```
  :memo:Remider : without parentheses, any code on the lines after return will be ignored.
- If we have multiple elements to be return , we must wrap with parent element. we can use `<></>`(frangments) to wrapping the all element or child componet after the return statement.

  ```jsx
  const App= ()=>{
  return (
     <>
      <div>
        <h1>Topic</h1>
      </div>
       <div>
        <button>Topic</button>
      </div>
     </>
     )
  }
  export default App;
  ```

## Using a component

Above, we have defined our `Button` component, We can nest it inside other components . We can use individual component with multiple times.

```jsx
//first import the Button
export default function Gallery() {
return (
 <section>
   <Button/>
   <Button/>
 </section>
);
}
```

## Importing and Exporting components.

In React ( and js ES6 ), `export` and `èxport default` are used for exporting modules, which can then be imported usting `import` into other files. Here's a brief explanation about import and export with multiple ways.

- **`export` (Named Export)**
  We can export multiple variables, functions, or classes from a module using named exports. Named exports must be imported with the exact names used when they were exported.
  It allows us to export multiple items from a single file. must use curly braces `{}` when importing .

  _syntax_:

  ```jsx
  // file name. greeting.js
  export const Greeting =()=>{
     return <h1>helloo </h1>;
  };
  export const Farewell = ()=> {
  return <h1>Goodbye</h1>;
   };
  ```

  importing Named exports.

  ```jsx
  import { Greeting, Farewell } from './Greeting';
  const App=()=>{
    return (
    <div>
    <Greeting>
    <Farewell/>
    </div>
  )
    }
    export default App;
  ```

- ### `export default` (Default Export)

  Each module can have only one default export. The default exort can be imported with any name in the importing module.

  ```jsx
   // File: components/Greeting.js
    const Greeting = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
     };

   export default Greeting;
  ```

  importing default export.

  ```jsx
     // File: App.js
   import Greeting from './components/Greeting';

  const App = () => {
  return (
  <div>
    <Greeting name="John" />
  </div>
  );
  };
  export default App;
  ```

- **Combining Named and Default Exports**

  we can also combile both named and default exports in a single module.

  ```jsx
   // File: components/Greeting.js
  export const Farewell = ({ name }) => {
  return <h1>Goodbye, {name}!</h1>;
  };

  const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
  };

  export default Greeting;
  ```

  importing :

  ```jsx
  // File: App.js
  import Greeting, { Farewell } from './components/Greeting';

  const App = () => {
  return (
   <div>
     <Greeting name="John" />
     <Farewell name="John" />
   </div>
  );
  };

  export default App;
  ```
