/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    if(nums.length < k) return nums;
    
    let kMap = new Map()
    nums.forEach(n => {
        if (kMap.has(n)) {
            kMap.set(n, kMap.get(n) + 1);
        }
        else
            kMap.set(n, 1);
    })
    const sortedMap = new Map([...kMap.entries()].sort((a, b) => b[1] - a[1]))
    let result = []
    for([i,val] of sortedMap){
        k--;
        result.push(i);
        if(k == 0){
            return result
        }
    }
};

console.log(topKFrequent ([1,5,1,4,4,4,1,2,2,3],2))


////In Java
// class Solution {
//     public int[] topKFrequent(int[] nums, int k) {
//         // O(1) time
//         if (k == nums.length) {
//             return nums;
//         }

//         // 1. build hash map : character and how often it appears
//         // O(N) time
//         Map < Integer, Integer > count = new HashMap();
//         for (int n: nums) {
//             count.put(n, count.getOrDefault(n, 0) + 1);
//         }

//         // init heap 'the less frequent element first'
//         Queue < Integer > heap = new PriorityQueue<>(
//             (n1, n2) -> count.get(n1) - count.get(n2));

//         // 2. keep k top frequent elements in the heap
//         // O(N log k) < O(N log N) time
//         for (int n: count.keySet()) {
//             heap.add(n);
//             if (heap.size() > k) heap.poll();
//         }

//         // 3. build an output array
//         // O(k log k) time
//         int[] top = new int[k];
//         for (int i = k - 1; i >= 0; --i) {
//             top[i] = heap.poll();
//         }
//         return top;
//     }
// }