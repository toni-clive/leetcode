-- https://leetcode.com/problems/product-sales-analysis-i/description/?envType=study-plan-v2&envId=top-sql-50

SELECT p.product_name, s.year, s.price FROM sales s JOIN product p ON p.product_id = s.product_id