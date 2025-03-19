const employee  = {
    name: 'Bob',
    streetAddress: 'Moi Avenue'
};

function  updateEmployeeWithKeyAndValue(employee, key, value){
    return{
        ...employee,
        [key]: value 
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    const newEmployee = employee;
    delete newEmployee[key];
    return newEmployee;   
}

