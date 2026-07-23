https://leetcode.com/problems/rising-temperature/?envType=study-plan-v2&envId=top-sql-50

SELECT  weather.id FROM weather 
JOIN weather w2  ON weather.recordDate - w2.recordDate = 1 AND weather.temperature > w2.temperature