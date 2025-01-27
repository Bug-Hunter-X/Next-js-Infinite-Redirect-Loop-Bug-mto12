```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  
  // Fixed: The router.push now correctly handles navigation without creating a loop.
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={() => router.push('/')}>Go back to Home</button>
    </div>
  );
}
```