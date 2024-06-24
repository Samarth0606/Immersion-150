## Q: What is React?

ReactJS is an open-source front-end JavaScript library that is used for building reusable user interfaces, for single-page applications.

---

## Q: What are the major features of React?

- Uses JSX syntax, a syntax extension of JS that allows developers to write HTML in their JS code.
- It uses Virtual DOM instead of Real DOM considering that Real DOM manipulations are expensive.
- Follows Unidirectional or one-way data flow or data binding.
- Uses reusable/composable UI components to develop the view.

`(extra question: does react supports SSR? => YES it does , read more about it by your own)`

---

## Q: What is JSX?

JSX stands for JavaScript XML (html + js)

---

## Q: Which to use a Class Component or a Function Component?

After the addition of Hooks, it is always recommended to use Function components over Class components in React
<br>
As you can make dynamic changes with the help of hooks with Function components and the lifecycle method as also covered in useEffect

---

## Q: What are Pure Components?

Pure components are the components which render the same output for the same state and props. In function components, you can achieve these pure components through memoized React.memo()

---

## Q: What is state in React?

States are just like variables in a component which can change themselves throughout the journey using hooks `(useState)`

---

## Q: What are props in React?

Props are like arguments/inputs to components.

---

## Q: What is the difference between state and props?

`states` -> They are <ins>mutable</ins> (can be changed)
`props` -> They are <ins>immutable</ins> (cant be changed)

---

## Q: What is "key" prop and what is the benefit of using it in arrays of elements?

A key is a special attribute you should include when mapping over arrays to render data. `Key prop helps React identify which items have changed, are added, or are removed.`

⚠️ <ins>Keys should be unique among its siblings</ins>

---

## Q: What is Virtual DOM?

The Virtual DOM is an in-memory representation of Real DOM (similar to DOM but sort of imaginary). The representation of a UI is kept in memory and synced with the `real DOM`.
<br>
It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is known as <b>`Reconciliation`</b>.

### **NUTSHELL**

⚠️ Reconciliation in React refers to the process of comparing the virtual representation of a component’s UI (Virtual DOM) with the actual DOM and determining if and how the real DOM should be updated to match the virtual representation

---

**`React Fibre`** : The core algorithm which is basically happening behind the scene of virtual DOM.

**`Hydration`**: The concept when the layout has arrived and the JS is yet to be injected in the layout for eg if you have a button and clicking on the button will lead to some functionality then sometimes what happens is that the button is non-clickable for the moment till JS arrives the layout.

---

## Q: What are controlled components?

A component that controls the input elements within the forms, i.e, every state change will have an handler function. That means, the displayed data is always in sync with the state of the component.

---

## Q: What are Higher-Order Components?

A higher-order component (HOC) is a function that takes a component and returns a new component.

---

## Q: What are fragments?

It's a common pattern or practice in React for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

---

## Q:What are stateless components? => functions

Which cannot be changed dynamically

## Q:What are stateful components? => class

Which can be changed dynamically

---

## Q: What are the limitations of React?

- React is just a view library, not a full framework.

- Integrating React into a traditional MVC framework requires some additional configuration.

- The code complexity increases with inline templating and JSX.

- Too many smaller components leading to over engineering or boilerplate.

- Poor SEO

- unidirection problem create krega (loop hole)

- no self routing

---

## Q: What is the difference between React and ReactDOM?

**`React`** -> Used for creating the elements
<br>
**`ReactDOM`** -> Used for displaying the elements
