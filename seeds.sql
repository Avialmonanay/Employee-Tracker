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
VALUES ("Bob", "Ross", "CEO", 5),
       ("Rexx", "Madsen", "Bob Ross", 2),
       ("Mariah", "Carrie", "Bob Ross", 1),
       ("Aliece", "Christensen", "Mariah Carrie", 1),
       ("William", "Keith", "Rexx Madsen", 4),
       ("Sub", "Tronics", "Bob Ross", 3),
       ("Noble", "Finsand", "Bob Ross", 1),
       ("Aliece", "Christensen", "Mariah Carrie", 3),
       ("Liz", "Beth", "Rexx Madsen", 4),
       ("Walter", "Rouse", "Rexx Madsen", 6);
       
