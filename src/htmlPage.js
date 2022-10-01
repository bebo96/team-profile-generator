//This is the whole HTML page that will be rendered
const htmlPage = data => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <header class = "container d-flex justify-content-center bg-danger">
        <div class = "flex box justify-center my-team">
          <h1> My Team </h1>
        </div>
      </header>
      <main class = "container d-flex flex-row">
      ${employeesDiv(data)}
      </main>
    </body>
  </html>
`
}

//Manager card 
const manager = managerData => {
    return `
    <div class="card m-3" style="width: 18rem;">
    <div id="${managerData.getRole()}-card" class="box card">
      <div class="box name-role manager-name bg-primary">
        <h2>${managerData.getName()}</h2>
        <h3>Role: ${managerData.getRole()}</h3>
      </div> 
      <div class="box employee-info">
        <ul class="list-group">
          <li class="list-group-item">ID: ${managerData.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${managerData.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
    </div>
  `
  }
  //Engineer card
  const engineer = engineerData => {
    return `
    <div class="card m-3" style="width: 18rem;">
    <div id="${engineerData.getRole()}-card" class="box card">
      <div class="box name-role engineer-name bg-primary">
        <h2>${engineerData.getName()}</h2>
        <h3>Role: ${engineerData.getRole()}</h3>
      </div> 
      <div class="box employee-info">
        <ul class="list-group">
          <li class="list-group-item">ID: ${engineerData.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineerData.getEmail()}">${engineerData.getEmail()}</a></li>
          
          <li class="list-group-item">Github:
          <a href="https://www.github.com/${engineerData.getGithub()}" target="_blank">www.github.com/${engineerData.getGithub()}</a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  `
  }
  //Intern card
  const intern = internData => {
    return `
    <div class="card m-3" style="width: 18rem;">
    <div id="${internData.getRole()}-card" class="box card">
      <div class="box name-role intern-name bg-primary">
        <h2>${internData.getName()}</h2>
        <h3>Role: ${internData.getRole()}</h3>
      </div> 
      <div class="box employee-info">
        <ul class="list-group">
          <li class="list-group-item">ID: ${internData.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${internData.getEmail()}">${internData.getEmail()}</a></li>
          <li class="list-group-item">School: ${internData.getSchool()}</li>
        </ul>
      </div>
    </div>
    </div>
  `
  }
  // iterates through answers array, creates cards for each team member, then combines all cards together
  const employeesDiv = employeesArr => {
    let employeeHtml = ''
  
    for ( i = 0; i < employeesArr.length; i++ ) {
      if (employeesArr[i].getRole() === "Manager"){
        employeeHtml = employeeHtml + manager(employeesArr[i])
      }
      if (employeesArr[i].getRole() === "Engineer"){
        employeeHtml = employeeHtml + engineer(employeesArr[i])
      }
      if (employeesArr[i].getRole() === "Intern"){
        employeeHtml = employeeHtml + intern(employeesArr[i])
      }
    } return employeeHtml
  }

  module.exports = htmlPage;