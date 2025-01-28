```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      {user ? <p>Welcome, {user.name}!</p> : <p>Loading user data...</p>}
    </div>
  );
}
```
This solution uses `useEffect` to asynchronously fetch the data from localStorage after the component has mounted.  The `Loading user data...` message provides a better user experience while waiting for the data to load.