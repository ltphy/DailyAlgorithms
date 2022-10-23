double smallestSumOfContiguousSubArray(List<double> arrays) {
  // 3, -4, 2, -3, -1, 7, -5
  // current smallest sum
  double min_far_end = double.infinity;
  // store sum sequence
  double min_ending_here = double.infinity;
  for (int i = 0; i < arrays[i]; i++) {
    if (min_ending_here < 0) {
      min_ending_here += arrays[i];
    } else {
      min_ending_here = arrays[i];
    }

    if (min_ending_here < min_far_end) {
      min_far_end = min_ending_here;
    }
  }
  return min_far_end;
}

double largestSumOfContiguousSubArray(List<double> arrays) {
  double max_far_end = 0;
  double max_ending_here = 0;
  for (int i = 0; i < arrays[i]; i++) {
    max_ending_here += arrays[i];
    if (max_far_end < max_ending_here) {
      max_far_end = max_ending_here;
    }
    if (max_ending_here < 0) {
      max_ending_here = 0;
    }
  }
  return max_far_end;
}
