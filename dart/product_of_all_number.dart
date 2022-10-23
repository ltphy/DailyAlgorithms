// Given an array of numbers, replace each number with the product of all the numbers in the array
// except the number itself *without* using division.
// two extra array is created to store the prefix and suffix so take o(n) space
List<int> productOfOtherNumbers(List<int> numbers) {
  List<int> result = [];
  List<int> leftArray = [1];
  List<int> rightArray = List.filled(numbers.length, 1);

  for (int i = 1; i < numbers.length; i++) {
    leftArray.add(numbers[i - 1] * leftArray[i - 1]);
  }

  for (int i = numbers.length - 2; i >= 0; i--) {
    rightArray[i] = numbers[i + 1] * rightArray[i + 1];
  }
  for (int i = 0; i < numbers.length; i++) {
    result.add(rightArray[i] * leftArray[i]);
  }
  return result;
}

// Work harder than ever
String sumOfElement(String str1, String str2) {
  List<int> array1 = [];

  array1.addAll(str1.split(' ').map((e) => int.parse(e)));

  List<int> array2 = [];
  array2.addAll(str2.split(' ').map((e) => int.parse(e)));
  if (array1.length != array2.length) return 'invalid';
  List<int> sum = [];
  for (int i = 0; i < array1.length; i++) {
    sum.add(array1[i] + array2[i]);
  }
  String result = sum.join(' ');
  return result;
}
// 0(1) space 0(n) operations.

List<int> productOfOtherNumbers2(List<int> numbers) {
  List<int> result = List.filled(numbers.length, 1);

  for (int i = 1; i < numbers.length; i++) {
    result[i] = (result[i - 1] * numbers[i - 1]);
  }
  int prevNum = 1;
  for (int i = numbers.length - 2; i >= 0; i--) {
    result[i] *= prevNum * numbers[i + 1];
    prevNum = numbers[i + 1] * prevNum;
  }

  return result;
}

List<int> productOfOtherNumbers3(List<int> numbers) {
  List<int> result = List.filled(numbers.length, 1);
  int temp = 1;
  for (int i = 0; i < numbers.length; i++) {
    result[i] = temp;
    // multiply previous
    temp *= numbers[i];
  }
  temp = 1;
  for (int i = numbers.length - 1; i >= 0; i--) {
    result[i] *= temp;
    temp *= numbers[i];
  }
  return result;
}
