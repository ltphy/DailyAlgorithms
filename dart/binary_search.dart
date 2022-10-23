// find the index of the number in the array that is
import 'dart:core';

int binarySearch(List<int> numbers, int number) {
  int low = 0;
  int high = numbers.length - 1;
  int mid = 0;
  while (low <= high) {
    mid = ((high + low) / 2).floor();
    if (number < numbers[mid]) {
      high = mid - 1;
    } else if (number > numbers[mid]) {
      low = mid + 1;
    } else if (number == numbers[mid]) {
      break;
    }
  }
  return mid;
}

int binarySearchNearestIndex(List<double> numbers, double number) {
  int low = 0;
  int high = numbers.length - 1;
  int mid = ((high + low) / 2).floor();
  int smallest_index = mid;
  double smallest_distance = (numbers[mid] - number).abs();
  while (low <= high) {
    mid = ((high + low) / 2).floor();
    // current number smaller than smallest dis
    if ((numbers[mid] - number).abs() < smallest_distance) {
      smallest_index = mid;
      smallest_distance = numbers[mid] - number;
    }
    if (number < numbers[mid]) {
      high = mid - 1;
    } else if (number > numbers[mid]) {
      low = mid + 1;
    } else if (number == numbers[mid]) {
      break;
    }
  }
  return smallest_index;
}
