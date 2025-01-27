```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  
  // This will cause an infinite redirect loop
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={() => router.push('/')}>Go back to Home</button>
    </div>
  );
}
```