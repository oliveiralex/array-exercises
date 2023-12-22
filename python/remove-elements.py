from typing import List

def remove_element(nums: List[int], val: int) -> List[int]:
    i = 0
    for j in range(len(nums)):
        if nums[j] != val:
            nums[i] = nums[j]
            i += 1

    nums = nums[:i]
    return nums

# Exemplo de uso
nums = [3, 2, 2, 3, 4, 2, 7, 9]
val = 2
print(remove_element(nums, val))