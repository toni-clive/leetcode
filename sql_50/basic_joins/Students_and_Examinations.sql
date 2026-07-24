-- https://leetcode.com/problems/students-and-examinations/?envType=study-plan-v2&envId=top-sql-50

SELECT s.student_id, s.student_name, s2.subject_name,COUNT(e.subject_name) AS attended_exams 
FROM students s CROSS JOIN subjects s2 LEFT JOIN examinations e ON s.student_id = e.student_id AND e.subject_name = s2.subject_name
 GROUP BY s.student_id,s.student_name,s2.subject_name ORDER BY s.student_id, s2.subject_name