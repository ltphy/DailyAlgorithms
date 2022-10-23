import 'binary_search.dart';

double smallestDistanceBetweenTwoArray(
    List<double> array1, List<double> array2) {
  // smallest distance
  double smallest_distance = double.infinity;
  if (array1.length <= array2.length) {
    for (int i = 0; i < array1.length; i++) {
      int index = binarySearchNearestIndex(array2, array1[i]);
      if (smallest_distance > (array1[i] - array2[index]).abs()) {
        smallest_distance = (array1[i] - array2[index]).abs();
      }
    }
  } else {
    for (int i = 0; i < array2.length; i++) {
      int index = binarySearchNearestIndex(array1, array2[i]);
      if (smallest_distance > (array2[i] - array1[index]).abs()) {
        smallest_distance = (array2[i] - array1[index]).abs();
      }
    }
  }
  return smallest_distance;
}
