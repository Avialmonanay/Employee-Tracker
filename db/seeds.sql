INSERT INTO departments (department_name)
VALUES ("Technology"),
       ("Law"),
       ("Office");

INSERT INTO roles (role_name, role_salary, department)
VALUES ("Accounting", "50000", "3"),
       ("db Engineer", "80000", "1"),
       ("Lawyer", "100000", "2"),
       ("Engineer", "120000", "1"),
       ("CEO", "150000", "3"),
       ("IT", "65000", "1");       

INSERT INTO employees (first_name, last_name, manager,role_ID)
VALUES ("Bob", "Ross", null, 5),
       ("Rexx", "Madsen", 1, 2),
       ("Mariah", "Carrie", 1, 1),
       ("Aliece", "Christensen", 3, 1),
       ("William", "Keith", 2, 4),
       ("Sub", "Tronics", 1, 3),
       ("Noble", "Finsand", 1, 1),
       ("Aliece", "Christensen", 3, 3),
       ("Liz", "Beth", 2, 4),
       ("Walter", "Rouse", 2, 6);
       
