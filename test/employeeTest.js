import Employee from "../src/employee";

const test = require('ava');

test('test employee function', t => {
    const employee = new Employee('karol', 'engineer');
    t.is('karol (engineer)', employee.toString());
})

test('test validateType', t => {
    try {
        new Employee('karol', 'leader');
        t.fail()
    } catch (e) {
        t.is(e.message, 'Employee cannot be of type leader')
    }
})