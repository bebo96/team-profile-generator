const { Manager } = require('../lib/Manager');

test('Creates new Manager', () => {
    
    const employee = new Manager('Learin Tino', 4444, 'learintino@gmail.com', 5147734636);

    expect(employee.name).toBe("Learin Tino");

    expect(employee.id).toEqual(expect.any(Number));

    expect(employee.email).toEqual(expect.any(String));

    expect(employee.officeNumber).toEqual(expect.any(Number));

})

test('Tests all functions within Class Manager', () => {

    const employee = new Manager('Learin Tino', 4444, 'learintino@gmail.com', 5147734636);

    expect(employee.getName()).toBe(employee.name);

    expect(employee.getId()).toBe(employee.id);

    expect(employee.getEmail()).toBe(employee.email);

    expect(employee.getOfficeNumber()).toBe(employee.officeNumber);

    expect(employee.getRole()).toBe('Manager');

})