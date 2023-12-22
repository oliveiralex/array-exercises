import java.util.Arrays;

public class remove_elements {

    public static int[] removeElement(int[] nums, int val) {
        int i = 0;
        for (int j = 0; j < nums.length; j++) {
            if (nums[j] != val) {
                nums[i] = nums[j];
                i++;
            }
        }
        return Arrays.copyOf(nums, i);
    }

    public static void main(String[] args) {
        int[] nums = {3, 2, 2, 3, 4, 2, 7, 9};
        int val = 2;
        System.out.println(Arrays.toString(removeElement(nums, val)));
    }
}
