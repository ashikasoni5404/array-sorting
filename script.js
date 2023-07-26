function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Bubble Sort
function bubbleSort(arr) {
  const n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

// Selection Sort
function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(arr, i, minIndex);
    }
  }
  return arr;
}

// Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Sample array for sorting
const unsortedArray = [15, 97, 23, 60, 34, 7, 88];

const bubbleSortedArray = bubbleSort([...unsortedArray]);
const selectionSortedArray = selectionSort([...unsortedArray]);
const mergeSortedArray = mergeSort([...unsortedArray]);

displaySortedArrays(bubbleSortedArray, selectionSortedArray, mergeSortedArray);

function displaySortedArrays(
  bubbleSortedArray,
  selectionSortedArray,
  mergeSortedArray
) {
  const unSortedArrayDiv = document.getElementById("unsorted-array");
  const bubbleSortedArrayDiv = document.getElementById("bubble-sorted-array");
  const selectionSortedArrayDiv = document.getElementById(
    "selection-sorted-array"
  );
  const mergeSortedArrayDiv = document.getElementById("merge-sorted-array");

  // Convert the sorted arrays into string representations
  const bubbleSortedArrayString = bubbleSortedArray.join(", ");
  const selectionSortedArrayString = selectionSortedArray.join(", ");
  const mergeSortedArrayString = mergeSortedArray.join(", ");

  // Set the sorted arrays strings as the content of the corresponding divs
  unSortedArrayDiv.innerText = `Unsorted Array: [${unsortedArray}]`;
  bubbleSortedArrayDiv.innerText = `Bubble Sorted Array: [${bubbleSortedArrayString}]`;
  selectionSortedArrayDiv.innerText = `Selection Sorted Array: [${selectionSortedArrayString}]`;
  mergeSortedArrayDiv.innerText = `Merge Sorted Array: [${mergeSortedArrayString}]`;
}
