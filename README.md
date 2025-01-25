# React Router v6 useParams Hook Error: Accessing Params Outside Route Component

This repository demonstrates a common error encountered when using the `useParams` hook in React Router v6. The error arises when attempting to access route parameters outside the component rendered within the route that defines those parameters.

The provided code shows the problem, which is then solved by restructuring the code so that the `useParams` hook is used within the appropriate route component.  This ensures the hook has the necessary context to correctly access and process the route parameters.  Proper error handling within the route component is also shown.