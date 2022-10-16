const bubbleSort = (array) => {
  let temp
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}

const selectionSort = (array) => {
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
  }
  return array
}

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1
    let temp = array[i]
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = temp
  }
  return array
}

const quickSort = (array) => {
  if (array.length <= 1) {
    return array
  }
  const pivot = array[array.length - 1]
  const left = []
  const right = []
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
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
