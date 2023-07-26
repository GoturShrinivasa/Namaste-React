const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h1 tag"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h1 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

const elementCreated = document.createElement('h1');
elementCreated.innerText = 'Hi shrinivasa';

const jsIDRootElement = document.getElementById('jsID');
jsIDRootElement.appendChild(elementCreated);

/*
<div id="parent">
    <div id="child1">
        <h1>I am an h1 tag</h1>
        <h1>I am an h1 tag</h1>
    </div>
    <div id="child2">
        <h1>I am an h1 tag</h1>
        <h1>I am an h1 tag</h1>
    </div>
</div>
*/
