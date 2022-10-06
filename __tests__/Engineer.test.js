const { Engineer } = require('../lib/Engineer');

test('Creates new Engineer', () => {

  const employee = new Engineer('Learin Tino', 4444, 'learintino@gmail.com', 'learin-tino');

  expect(employee.name).toBe("Learin Tino");

  expect(employee.id).toEqual(expect.any(Number));

  expect(employee.email).toEqual(expect.any(String));

  expect(employee.github).toEqual(expect.any(String));
  
})

test('Tests all functions within Class Engineer', () => {

  const employee = new Engineer('Learin Tino', 4444, 'learintino@gmail.com', 'learin-tino');

  expect(employee.getName()).toBe(employee.name);
 
  expect(employee.getId()).toBe(employee.id);
 
  expect(employee.getEmail()).toBe(employee.email);
 
  expect(employee.getGithub()).toBe(employee.github);
 
  expect(employee.getRole()).toBe('Engineer');

})