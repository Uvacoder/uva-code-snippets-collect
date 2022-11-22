---
title: Climbing Stairs
problemUrl: https://leetcode.com/problems/climbing-stairs/
tags:
  - python
  - fibonacci
---

**My Solution**:

```py
def climbStairs(n: int) -> int:
    seq = [2, 3]
        
    if n <= 3:
        return n
    
    for i in range(4, n+1):
        seq.append(seq[-1] + seq[-2])
        
    return seq[-1]
```
