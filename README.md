# EvoGym (React with Typescript)

# 1. Configuration

## Vite Config


```js
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src")}]
  }
})
```
The configuration above is for Vite, a build tool for modern web development projects.

1.`resolve: { alias: [{ find: "@", replacement: path.resolve(__dirname, "src")}]}`**: This part is defining an alias for the module resolution system. In simpler terms, it allows you to use `@` as a shorthand alias for the path `src`. So, instead of writing a full path like `import SomeComponent from "../../src/components/SomeComponent"`, you can use `import SomeComponent from "@/components/SomeComponent"`.

   - `find: "@"` means when Vite encounters the `@` symbol in an import statement, it will replace it with the specified path.
   - `replacement: path.resolve(__dirname, "src")` provides the actual path to replace `@`. `path.resolve(__dirname, "src")` constructs an absolute path to the "src" directory based on the current file's directory (`__dirname`).

## tsConfig

We have added the following setting in our `tsconfig.json` file under the compiler options to enable us to use our alias in our app:

```json
"paths": {
    "@/*": ["./src/*"]
 },
```
---

# 2. A

