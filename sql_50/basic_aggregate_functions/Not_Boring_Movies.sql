-- https://leetcode.com/problems/not-boring-movies/?envType=study-plan-v2&envId=top-sql-50
SELECT * FROM cinema WHERE description !='boring' AND id % 2 = 1 ORDER BY rating DESC