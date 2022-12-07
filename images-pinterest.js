/* Given a list of pair of "dissimilar images", 
we need to know whether we can divide the images into two groups 
such that no two dissimilar images are in the same group.

Case 1
I_1 <-> I_5 
I_5 <-> I_7
I_7 <-> I_2

Result:
Group 1
I_1
I_7
Group 2
I_5
I_2

Case 2:
I_1 <-> I_5 
I_5 <-> I_7  
I_7 <-> I_1 

result:
   null
*/

// similar to - https://leetcode.com/problems/is-graph-bipartite/
