# Conceptual Exercise

### What is the purpose of the React Router?
- Enables client-side routing in React apps, allowing navigation between components without full page reloads.

### What is a single page application?
- A web app that loads a single HTML page and dynamically updates it as the user interacts, avoiding full page refreshes.

### Differences between client-side and server-side routing?
- Client-side: Handled by browser, no full page reloads, faster but more client logic.
- Server-side: Handled by server, full page reloads, slower but less client logic.

### Two ways to handle redirects with React Router?
1. Render a `<Navigate>` component conditionally.
2. Use the `navigate` function from the `useNavigate` hook.

### Two ways to handle page-not-found with React Router?
1. Use a catch-all route to render a custom "Not Found" component.
2. Conditionally render a `<Navigate>` component to a "Not Found" component.

### How to grab URL parameters in a component?
- Use the `useParams` hook to get an object with key-value pairs of URL parameters.
- This hook returns an object containing key-value pairs of the dynamic parameters from the current URL that were matched by the route path.
Example:

```jsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  // userId will contain the value of the :userId parameter from the URL
  return <div>User ID: {userId}</div>;
}
```

### What is context in React? When to use it?
- A way to pass data through the component tree without prop-drilling.
- Use it when data needs to be accessed by many components at different levels.

### Differences between class and function components?
- Class components: Extend `React.Component`, have lifecycle methods, use `this.state`.
  - requires the use of `this` keyword which leads to many errors 
- Function components: Defined as functions, use hooks for state and lifecycle.
  - No need for `this` keyword as there is no instance being defined
  - Generally more concise and easier to read and write
  - Can manage state with the use of hooks

### Problems hooks were designed to solve?
- Reusable stateful logic, large component hierarchies, complex component logic, wrapper hell, lack of consistency between class and function components.
- Overall, hooks were designed to simplify the development of React components, improve code reusability, and provide a more intuitive and consistent way to manage state and side effects in functional components.