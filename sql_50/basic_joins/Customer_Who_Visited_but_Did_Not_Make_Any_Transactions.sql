-- https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/description/?envType=study-plan-v2&envId=top-sql-50

SELECT customer_id,COUNT(*) AS count_no_trans 
FROM visits 
LEFT JOIN transactions ON visits.visit_id = transactions.visit_id 
WHERE visits.visit_id NOT IN (SELECT visit_id FROM transactions )
GROUP BY customer_id