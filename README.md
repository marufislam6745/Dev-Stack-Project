# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
Name: Dev Stack 

Description: About My Project

Dev Stack Builder is a modern, responsive web application that helps developers explore different frontend, backend, and DevOps technologies, compare them side by side, and build their own ideal development stack. Users can browse through a curated list of popular technologies, add the ones they like to their personal "Stack," and manage that selection freely.


Technologies Used

React.js (with TypeScript)
Tailwind CSS
React-Toastify (for toast notifications)
Vite (build tool)
JSON (for technology data)


Features

Interactive Technology Explorer — Browse 10+ technologies across categories like Frontend, Backend, Database, Language, Styling, DevOps, and Tools, each shown with an icon, rating, difficulty level, and badge.

Build Your Own Stack — Add technologies to a personal "Your Stack" panel with a single click, remove individual items, or clear the whole stack at once — with toast notifications confirming every action.

Fully Responsive Design — The layout adapts smoothly from mobile to tablet to desktop, including a dedicated mobile navbar with a hamburger menu and a sticky navigation bar that stays visible while scrolling.


React Concepts — Q&A

1. What is JSX, and why is it used in React? 

JSX is a syntax extension for JavaScript that lets us write HTML-like code directly inside our JavaScript files. React uses it because it makes describing what the UI should look like much easier to read and write, compared to creating elements with plain JavaScript function calls.

2. What is the difference between props and state? 

Props are data passed into a component from its parent, and the component receiving them cannot change them — they are read-only. State, on the other hand, is data that a component manages internally and can update over time, usually in response to user actions. In this project, tech data is passed to TechCard as a prop, while the stack array in App.tsx is state that changes as the user adds or removes items.

3. What does the useState hook do, and where did you use it in this project? 

useState lets a component keep track of a value that can change and re-render the UI whenever that value updates. In this project, I used it in App.tsx to manage the technologies list, the stack array (the user's selected technologies), and the loading boolean while the JSON data is being set up.

4. What does the useEffect hook do, and why did you need it to load the JSON data? 

useEffect lets us run a piece of code after the component renders, often to handle things like fetching data or setting up something once when the component first loads. I used it to load the technology data from the JSON file into state as soon as the app starts, and to briefly show a loading state before the data appears.

5. Why does every item in a .map() list need a unique key prop? 

React uses the key prop to identify which items in a list have changed, been added, or been removed, so it can update the UI efficiently instead of re-rendering everything. Without a unique key, React can't reliably tell items apart, which can lead to bugs when the list changes — that's why each technology card uses its unique id as the key.

6. What is conditional rendering? 

Show one place you used it. Conditional rendering means showing different UI depending on a certain condition, instead of always displaying the same thing. I used it in the YourStack component: if the stack array is empty, it shows a "No technologies added yet." message, but if there are items in the stack, it renders the list of selected technologies instead.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent? 

A parent passes data to a child by giving it props, like <TechCard tech={tech} />. For a child to send data back to the parent, the parent passes down a function as a prop, and the child calls that function (usually with some data) when something happens — like onAdd={handleAdd}, where clicking "Add to Stack" inside TechCard calls handleAdd(tech), which updates the state back in App.
