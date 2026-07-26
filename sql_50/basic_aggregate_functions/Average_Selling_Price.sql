-- https://leetcode.com/problems/average-selling-price/description/?envType=study-plan-v2&envId=top-sql-50

SELECT p.product_id, COALESCE(ROUND(1.0* SUM(p.price *u.units)/SUM(u.units),2),0) AS average_price 
FROM prices p LEFT JOIN unitsSold u ON p.product_id = u.product_id AND u.purchase_date 
BETWEEN p.start_date AND p.end_date GROUP BY p.product_id 