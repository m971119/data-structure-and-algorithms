class Solution(object):
    def mergeSort(self, array):
        if len(array) < 2:
            return array

        mid = len(array)//2
        leftArray = array[:mid]
        rightArray = array[mid:]

        return self.merge(self.mergeSort(leftArray), self.mergeSort(rightArray))

    def merge(self, left, right):
        result = []

        while len(left) and len(right):
            if (left[0] < right[0]):
                result.append(left.pop(0))
            else:
                result.append(right.pop(0))

        result = result+left if len(left) else result+right
        return result

    def missingNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if (len(nums) == 0):
            return 0
        # sort the list
        nums = self.mergeSort(nums)
        # find the number that does not match the index
        for i in range(len(nums)):
            if i != nums[i]:
                return i

sol = Solution()

data = [89, 34, 23, 78, 67, 100, 66, 29, 79, 55, 78, 88, 92, 96, 96, 23]
print(sol.mergeSort(data))
data = [0, 1, 3]
print(sol.missingNumber(data))
#[23, 23, 29, 34, 55, 66, 67, 78, 78, 79, 88, 89, 92, 96, 96, 100]