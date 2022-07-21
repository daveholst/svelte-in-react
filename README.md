# Placing a Svelte component in a React app

This is a simple example of placing a Svelte component in a React app using Vite with full Typescript support.

## Live Deploy
https://svelte-in-react.surge.sh/

## Want to play?
1. `pnpm i`
2. `pnpm dev`

## What Works?
- Types on props
- Passing props into the svelte component through the wrapper
- State and JS/TS inside the svelte component
- Vite bundling it all up
- Nearly the same Svelte and React DevXP when running both.
- Svelte errors show in the dev preview as per normal Svelte Development

## Known Issues
- I was getting an import type error where the wrapper pulls the svelte component in when running `TSC`. This might just require some paths jiggery to sort.
- I'm not sure the component is getting destroyed correctly on unmount. In Dev mode a duplicate of the component is created when a HMR is triggered.
- Strict mode in Dev does not work. It causes `useEffect` to fire twice thus painting the svelte component twice. This is potentially the cleanup issue above.