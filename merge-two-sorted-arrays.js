var merge = function (nums1, m, nums2, n) {
    //slice doesn't mutate the original array but splice does, splice returns the removed elements
    if (nums1.length < m)
    nums1 = nums1.slice(0, m)
    if (nums2.length < n)
    nums2 = nums2.slice(0, n)
    return nums1.concat(nums2).sort((a, b) => a - b)
};