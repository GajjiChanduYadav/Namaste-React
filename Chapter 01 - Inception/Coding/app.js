// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

const heading = React.createElement("h1", {},"shiva is there no need to worry..");
/**
 * React.createElement-> takes 3 arguments
 *    -> 1st one is html element
 *    -> 2nd one is {}(object) where we give attributes(id,classname,..) inside it.
 *    -> 3rd one is content which is gient to the html element(it is called "child")
 */

console.log(heading);  // object
// heading -> it is an react element(nothing but it is an object)

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// render method is responsible for converting this object into heading tag and place into DOM.



// -------------cerating nested react elements---------------------------------

/**
 * <div id="parent">
 *      <div id="child">
 *            <h1>i an h1 tag</h1>
 *      </div>
 * </div>
 */

const element = React.createElement("div",{id: "parent"},
   React.createElement("div",{id: "child"},
   React.createElement("h1",{},"i am h1 tag")
   ) 
);

const nested = ReactDOM.createRoot(document.getElementById("container"));
nested.render(element);


// if we have siblings or if we want multiple childrens then we should use array [].

/**
 * <div id="parent">
 *      <div id="child">
 *            <h1>i an h1 tag</h1>
 *            <h2>i an h2 tag</h2>
 *      </div>
 * </div>
 */

const a = React.createElement("div",{id: "parent"},
   React.createElement("div",{id: "child"},[
    React.createElement("h1",{},"i am h1 tag"),
   React.createElement("h2",{},"i am h2 tag")]
   ) 
);

const dom = ReactDOM.createRoot(document.getElementById("case3"));
dom.render(a);

// --------------this is another case-------------------------

/**
 * <div id="parent">
 *      <div id="child">
 *            <h1>i an h1 tag</h1>
 *            <h2>i an h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *            <h1>i an h1 tag</h1>
 *            <h2>i an h2 tag</h2>
 *      </div>
 * </div>
 */

const b = React.createElement("div",{id: "parent"},
   [
    React.createElement("div",{id: "child1"},[
        React.createElement("h1",{},"i am h1 tag in child1"),
       React.createElement("h2",{},"i am h2 tag in child 1")]
       ),
       React.createElement("div",{id: "child2"},[
        React.createElement("h1",{},"i am h1 tag in child 2"),
       React.createElement("h2",{},"i am h2 tag in child 2")]
       )
   ] 
);
 const xyz = ReactDOM.createRoot(document.getElementById("case4"));
 xyz.render(b);