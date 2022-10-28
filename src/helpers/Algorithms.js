function* bubbleSort(array) {
  let temp
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        yield array
      }
    }
  }
  return array
}

function* selectionSort(array) {
  let temp
  for (let i = 0; i < array.length; i++) {
    let min = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j
      }
    }
    temp = array[i]
    array[i] = array[min]
    array[min] = temp
    yield array
  }
  return array
}

function* insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1
    let temp = array[i]
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j]
      j--
      yield array
    }
    array[j + 1] = temp
  }
  return array
}

function* quickSortIterative(array) {
  const stack = []
  stack.push(0)
  stack.push(array.length - 1)
  while (stack.length > 0) {
    let end = stack.pop()
    let start = stack.pop()
    let pivotIndex = yield* partition(array, start, end)
    if (pivotIndex - 1 > start) {
      stack.push(start)
      stack.push(pivotIndex - 1)
    }
    if (pivotIndex + 1 < end) {
      stack.push(pivotIndex + 1)
      stack.push(end)
    }
  }
  return array

  function* partition(array, start, end) {
    let pivot = array[end]
    let pivotIndex = start
    for (let i = start; i < end; i++) {
      if (array[i] < pivot) {
        yield swap(array, i, pivotIndex)
        pivotIndex++
      }
    }
    yield swap(array, pivotIndex, end)
    return pivotIndex
  }

  function* swap(array, a, b) {
    let temp = array[a]
    array[a] = array[b]
    array[b] = temp
    return array
  }
}

const mergeSort = (array) => {
  const merge = (left, right) => {
    let resultArray = [],
      leftIndex = 0,
      rightIndex = 0
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex])
        leftIndex++
      } else {
        resultArray.push(right[rightIndex])
        rightIndex++
      }
    }
    return resultArray
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex))
  }

  if (array.length <= 1) return array
  const middle = Math.floor(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

const generator = bubbleSort([5, 300, 24, 1, 999, 35, 333, 6])

const interval = setInterval(() => {
  console.log(generator.next().value)
  if (generator.next().done) {
    clearInterval(interval)
  }
}, 250)

interval
