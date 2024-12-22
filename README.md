# isMonotonic Function

## Description
The `isMonotonic` function checks whether a given array of numbers is monotonic. An array is considered monotonic if it is entirely non-increasing or non-decreasing. This function efficiently determines the monotonicity of an array in linear time.

---

## Function Signature
```javascript
function isMonotonic(array) -> boolean
```

---

## Parameters
- `array` (Array of numbers): The input array to check for monotonicity.

---

## Returns
- `boolean`:
  - `true` if the array is monotonic (either non-increasing or non-decreasing).
  - `false` otherwise.

---

## Time and Space Complexity
### Time Complexity
- **O(n)**: The function iterates through the array once, making it linear in terms of time complexity.

### Space Complexity
- **O(1)**: The function uses a constant amount of additional space.

---

## Algorithm Explanation
1. If the array length is 1 or less, it is trivially monotonic, so return `true`.
2. Initialize two flags:
   - `increasing` to track if the array is non-decreasing.
   - `decreasing` to track if the array is non-increasing.
3. Iterate through the array starting from the second element:
   - If a pair of elements violates the increasing order, set `increasing` to `false`.
   - If a pair of elements violates the decreasing order, set `decreasing` to `false`.
4. After the loop, return `true` if either `increasing` or `decreasing` is still `true`.

---

## Examples
### Example 1:
```javascript
isMonotonic([1, 2, 2, 3]);
// Output: true (Non-decreasing)
```

### Example 2:
```javascript
isMonotonic([6, 5, 4, 4]);
// Output: true (Non-increasing)
```

### Example 3:
```javascript
isMonotonic([1, 3, 2]);
// Output: false (Neither non-decreasing nor non-increasing)
```

### Example 4:
```javascript
isMonotonic([1, 1, 1]);
// Output: true (Non-decreasing and non-increasing)
```

---

## Edge Cases
1. Empty array (`[]`): Returns `true`.
2. Single-element array (`[7]`): Returns `true`.
3. Array with all identical elements (`[4, 4, 4, 4]`): Returns `true`.

---

## Usage
### Node.js Example
```javascript
const { isMonotonic } = require('./isMonotonic');

console.log(isMonotonic([1, 2, 3])); // true
console.log(isMonotonic([3, 2, 1])); // true
console.log(isMonotonic([1, 3, 2])); // false
```

---

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute as needed.

---

