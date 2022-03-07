import '../views/App.css';


function EmployeesList() {
    return (
        <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>cs-340-group-121-project</title>
        <link rel="stylesheet" href="./index.css" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <div className="container">
          
          <main>
            {/*<h1>Dashboard</h1>

                    <div class="date-curr">
                        <input type="date">
                    </div>
                */}
          
            <div className="orders reservations-header"> 
              <div>
                <h2 className="res-title">
                  <span className="search">
                    <input type="text" placeholder="search" />
                    <span><a href="#">
                        <span className="material-icons">manage_search</span>
                      </a></span>
                  </span>
                </h2>
              </div>
              <div>
              </div>
              <table>
                <thead>
                  <tr>
                  <th className="text-muted  light">employee_id</th>
                    <th className="text-muted  light">employee_fname</th>
                    <th className="text-muted  light">employee_lname</th>
                    <th className="text-muted  light">employee_email</th>
                    <th className="text-muted  light">employee_pos</th>
                    <th>
                      <a href="#">
                        <span className="material-icons">update</span>
                      </a>
                    </th>
                    <th>
                      <a href="#">
                        <span className="material-icons">edit</span>
                      </a>
                    </th>
                    <th>
                      <a href="#">
                        <span className="material-icons">delete</span>
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="dark">1</td>
                    <td className="light dark">Jonny</td>
                    <td className="light dark">Bravo</td>
                    <td className="light dark">Jbravo@hotmail.com</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr>
                  <th className="text-muted  light">employee_id</th>
                    <th className="text-muted  light">employee_fname</th>
                    <th className="text-muted  light">employee_lname</th>
                    <th className="text-muted  light">employee_email</th>
                    <th className="text-muted  light">employee_pos</th>
                    <th>
                      <a href="#">
                        <span className="material-icons">update</span>
                      </a>
                    </th>
                    <th>
                      <a href="#">
                        <span className="material-icons">edit</span>
                      </a>
                    </th>
                    <th>
                      <a href="#">
                        <span className="material-icons">delete</span>
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="dark">33</td>
                    <td className="light dark">George</td>
                    <td className="light dark">Harrison</td>
                    <td className="light dark">DarkHorse@yagoo.com</td>
                  </tr>
                </tbody>
              </table>
              
            </div>
          </main>
          {/*-----END OF MAIN------------*/}
         
        </div>         
      </div>

    );
}



export default EmployeesList;