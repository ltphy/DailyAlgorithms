import 'rotate_array.dart';
import 'product_of_all_number.dart';

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
  List<int> array1 = [4, 5, 6, 7];
  List<int> result2 = productOfOtherNumbers(array1);
  print(result2.toString());
}
