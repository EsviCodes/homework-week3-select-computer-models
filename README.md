# Homework

In this assignment you'll create a React app that uses both local state and Redux state. 

**Read the assignment carefully! Do not deviate from the assignment!**

_Note: we'll use the results of this homework assignment for a formal evaluation and as such you should write the code individually. **Plagiarism is a violation of the Academy contract and is not in your best interest. Do not discuss the contents of the assignment with your fellow students.**_

## How to submit your results
**Send your homework to teachers@codaisseur.com before Saturday 22:00**

Clean up your code: 
- Fix the formatting/indentation
- Remove unnecessary code.

The app should be runnable simply by cloning the repository, installing the dependencies, and running `npm run start`.

## Step 0 - Setup

Create a React app and add the Redux integration. Read about it [here](https://readest.codaisseur.com/courses/intermediate-bootcamp/09-intro-to-redux/03-react-redux/01-setup) if you forgot how to do it.

### Requirements

1. Make sure to add/enable the Redux Developer Tools in your `store.js`.
1. Clean up the provided `App` component by removing everything inside the `<div className="App">` element.

## Step 1 - Render some elements

The following references should have enough information to complete this step:
1. [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
1. [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)

### Requirements
1. Write all the JSX and JavaScript for this step inside the `App.js`. Do not create a new module.
1. Use the following JavaScript data object (containing home computer models), render a `<select>` element which contains all the items in the object as `<option>` elements. Actually use the data in the object and _do not hard-code the HTML into your render method._
1. The `<option>` elements should have a label with both the name of the model and the year. 
1. The elements should also have a `value` attribute consisting of only the name. 
1. Add an extra default `<option>` element at the beginning (see the expected HTML below).

```js
const data = [
  {
    name: "Ivel Z3",
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  {
    name: "Bally Astrocade",
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  {
    name: "Sord M200 Smart Home Computer",
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  {
    name: "Commodore 64",
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
]
```

When inspecting the resulting HTML with DevTools, it should look like this:

_Notice the year in parentheses_

```HTML
<!-- Expected Output -->
<select>
    <option value="">-- pick a model --</option>
    <option value="Ivel Z3">Ivel Z3 (1969)</option>
    <option value="Bally Astrocade">Bally Astrocade (1977)</option>
    <option value="Sord M200 Smart Home Computer">Sord M200 Smart Home Computer (1971)</option>
    <option value="Commodore 64">Commodore 64 (1982)</option>
</select>
```

## Step 2 - Event handling and local state

Now turn the `<select>` element into a controlled component.

Use these references, if necessary.

1. [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
1. [Handling Events](https://reactjs.org/docs/handling-events.html)
1. [Forms](https://reactjs.org/docs/forms.html) <-- **Especially this one**

### Requirements

1. Add an event handler to your `<select>` element, so that whenever the value of the drop-down changes we run a method called `updateSelection`.
1. Add the `updateSelection` method to the `App` component class. Inside the method save the selected value in the `local state`. 
1. At the end of this step, changing the selected item of the drop-down should update the `App` component's local state and store the selected value. 
1. The value of the `<select>` element should be read from the local state. (the `<select>` should be a `controlled component`)

## Step 3 - Dispatching Redux Actions

Now that we can select a computer model from the drop-down, you will add a button which adds the selected item to an array in the Redux state.

### Requirements

**Note:** _The name of currently selected model should be stored in the `local state` of the App component if you were able to complete step 1 & 2. If step 1 & 2 are not working you can `hardcode` the computer model in your action_
 
1. Wrap you App component using the `connect` function from react-redux to connect it the redux store.
1. Add a `<button>` with the text `Add` to the app component. Attach an event listener to it which calls an event handler.
1. Define a new action type which has, as its payload, an object containing all the data for the current selected computer model stored in the `local state` of the App component. 
1. The action should be `dispatched` from your component when the user clicks the `Add` button.

This is what it should look like from your Redux Dev Tools:

![action details](https://res.cloudinary.com/speltaculair/image/upload/c_scale,w_600/v1559033097/actions_xrpyro.png)


## Step 4 - Handling Redux actions

Now that we are dispatching an action to the store we need to handle it.

Look at [this section of the reader for an example](https://readest.codaisseur.com/courses/intermediate-bootcamp/09-intro-to-redux/02-redux/01-theory).

### Requirements

1. Your initial Redux state should be an empty array `[]`. 
1. Implement the reducer so that it handles the action and adds the selected data to the state. The state will look like this after several items have been added:

![state after 3 additions](https://res.cloudinary.com/speltaculair/image/upload/c_scale,w_600/v1559033085/state_l7lxvk.png)


## Step 5 - Reading from the Redux state

If you haven't already: define a `mapStateToProps` function. It should return an object containing the array of selected items (which it gets from the Redux state). Make sure you use it while connecting your `App` component to Redux.

### Requirements

**Note:** _If some steps 1 to 4 are not working and there is no data in your redux store, hardcode an initial state with a computer model in the reducer._

1. Use a `mapStateToProps` function to select the necessary data from the Redux state. Use it together with `connect`. 
1. Now that you have the data as props, create a component in your project responsible for rendering each of the items. 
1. The component used to render the item details should be called `ModelDetails`. The component is responsible for rendering a _single_ item. 
1. Do **NOT** `connect` the `ModelDetails` component, it should remain "dumb" and only contain UI code. Pass the data as props instead.
1. Add `propTypes` that check/validate whether the name, manufacturer, year, and origin are correctly being passed to `ModelDetails`.

_This is an example of what the HTML output should look like:_

```html
<div>
  <ul>
    <li>Name: Ivel Z3</li>
    <li>Manufacturer: Ivasim</li>
    <li>Year: 1969</li>
    <li>Origin: Croatia</li>
  </ul>
</div>
```


## Final Result

Will look and behave something like this:

![end result](https://cd.sseu.re/extra-assignment2.gif)
