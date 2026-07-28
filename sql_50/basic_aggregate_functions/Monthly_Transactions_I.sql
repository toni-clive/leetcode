-- https://leetcode.com/problems/monthly-transactions-i/description/?envType=study-plan-v2&envId=top-sql-50

-- Write your PostgreSQL query statement below
SELECT TO_CHAR(trans_date,'YYYY-MM') AS MONTH,country,
coalesce(COUNT(state),0) AS trans_count,
coalesce(COUNT(CASE WHEN state='approved' THEN 1 END),0) AS approved_count,SUM(amount) AS trans_total_amount,coalesce(SUM(CASE WHEN state='approved' THEN amount END),0) AS approved_total_amount FROM transactions t 

GROUP BY TO_CHAR(trans_date,'YYYY-MM'),country