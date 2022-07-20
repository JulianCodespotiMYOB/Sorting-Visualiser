import { Column } from '../../common';

export function swapArrayValues(array: Column[], left: number, right: number) {
  const temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}

export function bringToFront(array: Column[], index: number) {
  const temp = array[index];
  for (let i = index; i > 0; i -= 1) {
    array[i] = array[i - 1];
  }
  array[0] = temp;
}
