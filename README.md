# Next.js Infinite Redirect Loop Bug

This repository demonstrates a common bug in Next.js applications: an infinite redirect loop.  The bug occurs when using the `next/router`'s `push` method incorrectly, creating a cyclical redirect between pages.

## Bug Description
The bug is in `pages/about.js`. Clicking the button to go back to the home page creates an infinite loop between `/` and `/about`.

## Bug Reproduction
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.
5. Click the "Go back to Home" button. You'll observe the infinite redirect loop in your browser's console.

## Solution
The solution is provided in `bugSolution.js`, which demonstrates how to correctly use the `router.push` method and avoid the infinite loop.