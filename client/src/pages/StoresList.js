import '../views/App.css';


function StoresList() {
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
                    <th className="text-muted light">store_id*</th>
                    <th className="text-muted light">store_name</th>
                    <th className="text-muted light">store_city</th>
                    <th className="text-muted light">vehicle_count</th>
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
                    <td className="light dark">L.A. #1</td>
                    <td className="light dark">Los Angeles</td>
                    <td className="light dark">5</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr>
                    <th className="text-muted light">store_id*</th>
                    <th className="text-muted light">store_name</th>
                    <th className="text-muted light">store_city</th>
                    <th className="text-muted light">vehicle_count</th>
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
                    <td className="light dark">SeaTac #5</td>
                    <td className="light dark">Seattle</td>
                    <td className="light dark">3</td>
                  </tr>
                </tbody>
              </table>
              <a href="#" className='show-all'>Show All</a>
            </div>
          </main>
          {/*-----END OF MAIN------------*/}
         
        </div>         
      </div>

    );
}



export default StoresList;