# Client-side error in Next.js 15 app

This repository demonstrates a common issue in Next.js 15 applications where client-side data fetching or localStorage access in a page component causes a client-side error if the page is accessed directly without initial server-side rendering (SSR).

## Bug Description
The `about.js` page attempts to access user data from `localStorage`. If you navigate directly to `/about` using the browser's address bar, the `JSON.parse` operation will fail because `localStorage` is not yet available on the client-side during the initial page load. This leads to a runtime error.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `http://localhost:3000/`.
5. Click the "Go to About" link. This works correctly because of the initial SSR.
6. Manually enter `http://localhost:3000/about` in your browser's address bar. This will result in a client-side error because of missing SSR. 

## Solution
The solution involves ensuring that the data is either available during the initial SSR or that the page gracefully handles the absence of data on the client-side during the initial load.
