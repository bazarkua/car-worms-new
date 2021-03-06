import '../views/App.css';


function VehiclesList() {
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
                    <th className="text-muted light">vehicle_id*</th>
                    <th className="text-muted light">store_id</th>
                    <th className="text-muted light">vehicle_make</th>
                    <th className="text-muted light">vehicle_mod</th>
                    <th className="text-muted light">vehicle_status</th>
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
                    <td className="dark">3</td>
                    <td className="light dark">Ferrai</td>
                    <td className="light dark">Enzo</td>
                    <td className="light dark">1</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr>
                  <th className="text-muted light">vehicle_id*</th>
                    <th className="text-muted light">store_id</th>
                    <th className="text-muted light">vehicle_make</th>
                    <th className="text-muted light">vehicle_mod</th>
                    <th className="text-muted light">vehicle_status</th>
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
                  <td className="dark">2</td>
                    <td className="dark">7</td>
                    <td className="light dark">Ferrai</td>
                    <td className="light dark">GT350</td>
                    <td className="light dark">1</td>
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



export default VehiclesList;