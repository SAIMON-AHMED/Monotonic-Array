// Time -> O(n) | Space -> O(1)
function isMonotonic(array) {
  if (array.length <= 1) return true;

  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) decreasing = false;
    if (array[i] < array[i - 1]) increasing = false;
  }

  return increasing || decreasing;
}
