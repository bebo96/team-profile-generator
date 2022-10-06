const Employee = require('../lib/Employee');

test('Creates new Employee', () => {
    
    const employee = new Employee('Learin Tino', 4444, 'learintino@gmail.com');

    expect(employee.name).toBe("Learin Tino");

    expect(employee.id).toEqual(expect.any(Number));

    expect(employee.email).toEqual(expect.any(String));

})

test('Tests all functions within Class Employee', () => {

    const employee = new Employee('Learin Tino', 4444, 'learintino@gmail.com');

    expect(employee.getName()).toBe(employee.name);

    expect(employee.getId()).toBe(employee.id);
    
    expect(employee.getEmail()).toBe(employee.email);
    
    expect(employee.getRole()).toBe('Employee');

})
