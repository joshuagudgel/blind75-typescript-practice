# Blind 75 TypeScript Practice Environment

A well-structured TypeScript environment for practicing the famous "Blind 75" LeetCode interview questions with comprehensive testing setup.

## Overview

This project provides a complete development environment for solving and testing the Blind 75 coding interview questions. It's designed to help you practice algorithmic problem-solving with proper TypeScript conventions, testing, and code organization.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Install dependencies:

```bash
npm install
```

3. Run tests to verify setup:

```bash
npm test
```

## Project Structure

```
src/
├── arrays/              # Array-based problems
├── strings/             # String manipulation problems
├── trees/               # Binary tree problems
├── graphs/              # Graph algorithms
├── dynamic-programming/ # DP problems
├── linked-lists/        # Linked list problems
├── binary/              # Bit manipulation
├── heap/                # Heap/Priority queue problems
├── matrix/              # 2D matrix problems
├── intervals/           # Interval problems
├── utils/               # Common data structures and helpers
└── template.ts          # Template for new solutions
```

## Available Scripts

```bash
npm test          # Run all tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
npm build         # Compile TypeScript
npm run dev       # Compile in watch mode
```

## How to Use

### 1. Starting a New Problem

1. Copy the template from [`src/template.ts`](src/template.ts)
2. Place it in the appropriate category folder
3. Rename the file (e.g., `two-sum.ts`)
4. Implement your solution following the template structure

### 2. Writing Tests

1. Create a corresponding test file (e.g., `two-sum.test.ts`)
2. Import your solution functions
3. Write comprehensive test cases including:
   - Basic functionality
   - Edge cases
   - Boundary conditions
   - Error handling

### 3. Example Structure

Each solution should include:

```typescript
/**
 * Problem description
 * Time Complexity: O(?)
 * Space Complexity: O(?)
 */
export function solutionName(params: type[]): returnType {
  // Implementation
}
```

## Coding Guidelines

- **TypeScript**: Use strict typing for all functions and variables
- **Documentation**: Include JSDoc comments with complexity analysis
- **Testing**: Write comprehensive test cases for all solutions
- **Naming**: Use descriptive function and variable names
- **Structure**: Follow the established folder organization

## Testing

The project uses Jest with TypeScript support. Tests are automatically discovered in:

- Files ending with `.test.ts` or `.spec.ts`
- Files in `__tests__` directories

### Test Examples

```typescript
describe("Problem Name", () => {
  test("should handle basic case", () => {
    expect(solutionFunction([1, 2, 3], 5)).toEqual([1, 2]);
  });

  test("should handle edge cases", () => {
    expect(solutionFunction([], 0)).toEqual([]);
  });
});
```

## Common Data Structures

The [`src/utils/data-structures.ts`](src/utils/data-structures.ts) file provides:

- `ListNode`: Singly-linked list node
- `TreeNode`: Binary tree node
- `createLinkedList()`: Helper to create linked lists from arrays
- `linkedListToArray()`: Helper to convert linked lists to arrays
- `createBinaryTree()`: Helper to create binary trees from level-order arrays

## Example Problems

### Two Sum (Array)

- **File**: [`src/arrays/two-sum.ts`](src/arrays/two-sum.ts)
- **Test**: [`src/arrays/two-sum.test.ts`](src/arrays/two-sum.test.ts)
- **Approaches**: Hash map (O(n)) and brute force (O(n²))

### Reverse Linked List

- **File**: [`src/linked-lists/reverse-linked-list.ts`](src/linked-lists/reverse-linked-list.ts)
- **Test**: [`src/linked-lists/reverse-linked-list.test.ts`](src/linked-lists/reverse-linked-list.test.ts)
- **Approaches**: Iterative and recursive

## Blind 75 Categories

The Blind 75 list covers these key areas:

1. **Array** (12 problems)
2. **Binary** (5 problems)
3. **Dynamic Programming** (11 problems)
4. **Graph** (6 problems)
5. **Interval** (2 problems)
6. **Linked List** (6 problems)
7. **Matrix** (1 problem)
8. **String** (8 problems)
9. **Tree** (11 problems)
10. **Heap** (3 problems)

## Progress Tracking

Consider using the following checklist format in your solutions:

```typescript
// TODO: Implement the following approaches:
// [ ] Brute force O(n²)
// [ ] Optimized O(n) with hash map
// [ ] Test edge cases
// [ ] Add complexity analysis
```

## Configuration

### TypeScript Configuration

- Strict mode enabled
- ES2020 target
- Source maps for debugging
- Declaration files generated

### Jest Configuration

- TypeScript support via `ts-jest`
- Automatic test discovery
- Coverage reporting available

## Contributing

1. Follow the established code structure
2. Include comprehensive tests
3. Add proper TypeScript types
4. Document time/space complexity
5. Use descriptive commit messages

## Resources

- [Blind 75 List](https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions)
- [LeetCode](https://leetcode.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)

## License

MIT License - feel free to use this for your interview preparation!

---

**Good luck with your coding interviews! 🚀**
