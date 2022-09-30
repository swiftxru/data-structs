# Data structures
![ts](https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555)
![Size](https://img.shields.io/bundlephobia/minzip/@swiftx/data-structs)
![Version](https://img.shields.io/npm/v/@swiftx/data-structs)
![Downloads](https://img.shields.io/npm/dt/@swiftx/data-structs)

## 📃 Description

Data structures implementations:

- Stack
- Queue

## 📦 Getting Started

These instructions will get you setup to use `data-structs` in your project.

|                  | using NPM                                  | using Yarn                                    |
|-----------------:|--------------------------------------------|-----------------------------------------------|
| **Installation** | `npm i -D @swiftx/data-structs typescript` | `yarn add -D @swiftx/data-structs typescript` |

## Usage

```typescript
import {Stack} from './stack';

const stack = new Stack<string>(4);
stack.push('one');
stack.push('two');
stack.push('three');
stack.push('four');
stack.push('five'); // Throws error, capacity is 4

stack.size(); // Output: 4
stack.peek(); // Output: "four"
stack.size(); // Output: 4
stack.pop();  // Output: "four"
stack.size(); // Output: 3
```

## Authors/maintainers

- **Klyuchevskiy Valeriy** - [vklyuche](https://github.com/vklyuche)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
