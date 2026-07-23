-- https://leetcode.com/problems/employee-bonus/description/?envType=study-plan-v2&envId=top-sql-50

SELECT e.name,bonus FROM employee e LEFT JOIN bonus b ON e.empId = b.empID WHERE b.bonus < 1000 OR b.bonus IS null