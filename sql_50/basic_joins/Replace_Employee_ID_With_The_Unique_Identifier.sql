-- https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/description/?envType=study-plan-v2&envId=top-sql-50

SELECT unique_id, name FROM employees LEFT JOIN employeeUNI ON employees.id = employeeUNI.id
