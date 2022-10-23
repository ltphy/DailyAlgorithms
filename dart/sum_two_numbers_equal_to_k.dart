//
bool sumTwoNumberEqualsToK(List<int> array, int k) {
  Map<int, int> countArray = {};
  for (int i = 0; i < array.length; i++) {
    int? value = countArray[array[i]];
    if (value != null) {
      countArray[array[i]] = value + 1;
    } else {
      countArray[array[i]] = 1;
    }
  }
  for (int i = 0; i < array.length; i++) {
    int left_value = k - array[i];
    int? count_exist = countArray[left_value];
    if (count_exist != null) {
      if (left_value == array[i] && count_exist >= 2) {
        return true;
      }
      if (left_value != array[i]) {
        return true;
      }
    }
  }
  return false;
}
