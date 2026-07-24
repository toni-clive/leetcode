-- https://leetcode.com/problems/average-time-of-process-per-machine/description/?envType=study-plan-v2&envId=top-sql-50

SELECT 
 a.machine_id, ROUND(AVG(a.timestamp-a2.timestamp)::numeric,3) AS processing_time
FROM activity a 
JOIN (SELECT a2.machine_id,a2.activity_type,a2.process_id,a2.timestamp FROM activity a2 WHERE a2.activity_type = 'start') AS a2 
ON a.machine_id = a2.machine_id AND a.process_id = a2.process_id
WHERE a.activity_type = 'end'
GROUP BY a.machine_id