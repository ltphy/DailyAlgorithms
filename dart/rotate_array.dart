// Hypothetical unsound null safety:
List<int> rotateArray(List<int> array, int d) {
  int distance = d % array.length;
  List<int> leftArray = array.sublist(distance);
  print('leftarray' + leftArray.toString());
  leftArray.addAll(array.sublist(0, distance));
  return leftArray;
}
