-- https://leetcode.com/problems/managers-with-at-least-5-direct-reports/?envType=study-plan-v2&envId=top-sql-50

SELECT name FROM employee m JOIN (SELECT managerID,COUNT(managerID) FROM employee GROUP BY managerID) e   ON m.id = e.managerID AND e.count >= 5