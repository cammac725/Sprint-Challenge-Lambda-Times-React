- [x] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

Prop Types are used to make sure the data that is being entered or submitted is the same type that is being asked for. It ensures that the data is valid and can help in debugging.

- [x] Describe a life-cycle event in React?

A React life-cycle event consists of mounting, updating and unmounting of a component, using the view as a function of state, (v= fn(s)). Mounting starts with the constructor function, followed by the render method and the componentDidMount method, if it is present. Updating will happen if state has been updated through setState(); render() runs again, updating the props and the virtual DOM. Unmounting happens when the component leaves the page.

- [x] Explain the details of a Higher Order Component?

A Higher Order Component is a component that takes in another component as an argument and returns a new component, allowing for reuse of component logic.

- [x] What are three different ways to style components in React? Explain some of the benefits of each.

We can style React components using vanilla css in external files, inline styling, or using styled components.