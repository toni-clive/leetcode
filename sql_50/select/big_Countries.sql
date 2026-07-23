-- https://leetcode.com/problems/big-countries/description/?envType=study-plan-v2&envId=top-sql-50

SELECT name,population,area FROM world WHERE population >= 25000000 OR area >= 3000000