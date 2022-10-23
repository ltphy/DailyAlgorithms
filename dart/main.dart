import 'rotate_array.dart';
import 'product_of_all_number.dart';
import 'binary_search.dart';
import 'smallest_distance_between_two_array.dart';
import 'sum_two_numbers_equal_to_k.dart';

void main() {
  print("hello world");
  // 1) rotate array
  List<int> arrays = [1, 2, 3, 4, 5, 6];
  List<int> result = rotateArray(arrays, 3);
  print(result);
  // sum of 2 array.
  String str1 = '1 2 3';
  String str2 = '2 3 4';
  String result1 = sumOfElement(str1, str2);
  print(result1);
  //productOfOtherNumbers
  List<int> array1 = [4, 5, 17, 18, 21];
  List<int> result2 = productOfOtherNumbers(array1);
  print(result2.toString());
  List<int> result3 = [];
  result3 = productOfOtherNumbers3(array1);
  print(result3.toString());

  int result4 = binarySearch(array1, 6);
  print('result4: ' + result4.toString());
  List<double> arrayd1 = [4, 5, 17, 18, 21];
  List<double> arrayd2 = [8, 15, 20, 28];
  double distance = smallestDistanceBetweenTwoArray(arrayd1, arrayd2);
  print('smallest distance: ' + distance.toString());
  bool result5 = sumTwoNumberEqualsToK(array1, 30);
  print('result5: ' + result5.toString());
}
