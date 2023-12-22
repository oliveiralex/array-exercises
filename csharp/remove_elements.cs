using System;

class remove_elements
{
    static int[] RemoveElement(int[] nums, int val) {
        int i = 0;
        for (int j = 0; j < nums.Length; j++) {
            if (nums[j] != val) {
                nums[i] = nums[j];
                i++;
            }
        }

        return nums[..i];
    }

    static void Main() {
        int[] nums = {3, 2, 2, 3, 4, 2, 7, 9};
        int val = 2;
        Console.WriteLine(string.Join(", ", RemoveElement(nums, val)));
    }
}
