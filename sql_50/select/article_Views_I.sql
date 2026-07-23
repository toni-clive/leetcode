-- https://leetcode.com/problems/article-views-i/description/?envType=study-plan-v2&envId=top-sql-50

SELECT DISTINCT author_id AS id from Views WHERE author_id = viewer_id ORDER BY author_id;
