-- https://leetcode.com/problems/queries-quality-and-percentage/description/?envType=study-plan-v2&envId=top-sql-50

-- Write your PostgreSQL query statement below
SELECT query_name,ROUND(AVG(1.0 * rating / position),2) AS quality , ROUND(100 * 1.0* COUNT(CASE WHEN rating < 3 THEN 1 END)/COUNT(*),2) AS poor_query_percentage FROM queries
GROUP BY query_name