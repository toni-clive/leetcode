-- https://leetcode.com/problems/percentage-of-users-attended-a-contest/?envType=study-plan-v2&envId=top-sql-50

-- Write your PostgreSQL query statement below
SELECT contest_id, ROUND((1.0* COUNT(contest_id) / (SELECT COUNT( user_id) FROM users)) * 100,2) AS percentage
FROM register GROUP BY contest_id ORDER BY percentage DESC, contest_id