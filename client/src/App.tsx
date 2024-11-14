import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages";
import { GlobalSearchContext, Header } from "./component";
import {useState} from "react";

function App() {
    const [ searchValue, setSearchValue ] = useState('');

    const onChangeSearchValue = (value: string) => {
        setSearchValue(value)
    }

  return (
      <div className="app-container">
          <GlobalSearchContext.Provider value={{searchValue, onChangeSearchValue}}>
              <Header/>
              <main className="main-content">
                  <div className="app-container">
                      <Routes>
                          <Route path="/" element={<HomePage/>}/>
                      </Routes>
                  </div>
                  {/*<Sidebar/>*/}
              </main>
              {/*<Footer/>*/}
          </GlobalSearchContext.Provider>
      </div>

  )
}

export default App
