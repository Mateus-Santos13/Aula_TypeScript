# Copilot Instructions for Aula_Typescript

## Project Overview
This is an **educational TypeScript learning project** demonstrating fundamental TypeScript/JavaScript concepts including arrays, type annotations, collections, and user input handling.

## Build & Execution

### TypeScript Compilation
- **Compile single file**: `tsc Aula_01/HelloWorld.ts` → generates `.js` output
- **Direct execution** (recommended for learning): `ts-node Aula_01/HelloWorld.ts` → runs TypeScript directly without compilation
- **Key files**: All lesson code in `Aula_01/` directory (`.ts` files)

### Configuration
- **TypeScript target**: `esnext` (modern JavaScript features)
- **Module system**: `nodenext` (CommonJS)
- **Type checking**: Strict mode enabled (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`)

## Key Dependencies
- **readline-sync**: Interactive console input handling (see `Array.ts`, `Soma.ts`)
- **@types/node**: Node.js type definitions
- **CommonJS imports**: Use `import x = require("module")` pattern (not ES6 imports)

## Code Patterns & Conventions

### Type Annotations
- **Explicit typing**: Always annotate variable types: `let numero1: number`, `const numeros: Array<number>`
- **Built-in generics**: Use `Array<T>` syntax for typed arrays: `new Array<number>`
- **Type inference**: TypeScript infers from assignments, but explicit annotations preferred for clarity

### User Input Pattern
```typescript
import rs = require("readline-sync");
const input = rs.questionInt("Prompt: ");  // for integers
const input = rs.questionFloat("Prompt: "); // for decimals
```

### Array Operations
- **Adding elements**: Use `.push()` with single/multiple values
- **Finding elements**: `.includes()`, `.indexOf()`
- **Removing elements**: `.splice(index, count)`
- **Iteration**: Use `for...of` loops for array traversal
- **Debugging**: `.table()` for formatted console output

### Console Output
- **Template literals**: Use backticks for string interpolation: `` `Result: ${value}` ``
- **Display**: `console.log()` for output, `console.table()` for formatted data

## Project Structure
```
Aula_01/                 # Lesson 1: Core TypeScript concepts
├── HelloWorld.ts       # Basic console output + tsc/ts-node explanation
├── Array.ts            # Array manipulation, includes/indexOf/splice
├── ColecaoSet.ts       # (Empty - planned for Set collections)
├── Soma.ts             # User input with types, arithmetic operations
├── teste.ts/js         # Test files
```

## Development Notes
- **Learning progression**: Start with HelloWorld → Array manipulation → User input handling → Collections
- **No testing framework**: Educational project, no formal tests (only `console.table()` for verification)
- **No build step required**: Run directly with `ts-node`
- **Portuguese comments**: Code comments in Portuguese (educational context)
