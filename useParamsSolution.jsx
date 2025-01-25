The solution involves restructuring the component tree to ensure that `useParams` is called within a component that is a child of the route element that defines the parameters.  This ensures access to the correct context.

```javascript
// useParamsSolution.jsx
import { useParams } from 'react-router-dom';

function MyComponent() {
  let { id } = useParams();
  return (
    <div>
      <h1>Product ID: {id}</h1>
    </div>
  );
}

export default function MyRoute(){
  return (
    <Route path="/products/:id">
      <Route element={<MyComponent/>}/ >
    </Route>
  );
}
```