const employee = {
	// id: 1000, name: "Neel", role: "developer", location: "kochi", salary: 25000, exp: 3,
	// id: 1001, name: "Max", role: "tester", location: "TVM", salary: 15000, exp: 2,
	// id: 1002, name: "Maxwell", role: "QA", location: "kochi", salary: 35000, exp: 4,
	// id: 1003, name: "Vyom", role: "QA", location: "kochi", salary: 45000, exp: 5,
	// id: 1004, name: "Laisha", role: "tester", location: "TVM", salary: 55000, exp: 7,
	// id: 1005, name: "Aahan", role: "developer", location: "TVM", salary: 15000, exp: 1,
	// id: 1006, name: "Aahil", role: "QA", location: "kochi", salary: 20000, exp: 2,
	// id: 1007, name: "Shayan", role: "developer", location: "kochi", salary: 30000, exp: 3,
	id: 1008,
	name: "Nihaan",
	role: "developer",
	location: "TVM",
	salary: 25000,
	exp: 3,
};

// bracket notation
console.log(employee["name"]);

// dot notation
console.log(employee.name);

// in operator
console.log("name" in employee);

// hasOwnProperty()
console.log(employee.hasOwnProperty("name"));

// insert
employee.gender = "male";
employee["age"] = 25;
Object.assign(employee, { vacc: true });
console.log(employee);

// edit
employee.age = 22;
employee.vacc = false;
console.log(employee);

// display keys
console.log(Object.keys(employee));

// display values
console.log(Object.values(employee));

// display object as array
console.log(Object.entries(employee));

// display object as key-value pairs one by one
for (let key in employee) {
    console.log(`${key} : ${employee[key]}`);
}

// remove
delete employee.vacc
console.log(employee);

// destructuring
const { id, name, role } = employee;
console.log(id, name, role);
