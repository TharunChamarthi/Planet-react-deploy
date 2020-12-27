import React, { useState, useEffect } from 'react';
import './App.css';
import API from './utils/API';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function App() {

  const [planets, setPlanets] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  const fetchData = async () => {
    try {
      const res = await API.get('planet');
      setPlanets(res.data)
    } catch (err) {
      console.log(err);
      console.log(err.message);
    }
  }

  const changeFav = (id) => {
    const changePlanets = [...planets]
    const planet = changePlanets.find(planet => planet.id === id);
    planet.isFavourite = !planet.isFavourite;
    setPlanets(changePlanets);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
      <TabList>
        <Tab>Planets</Tab>
        <Tab>Favorite planets</Tab>
      </TabList>
      <TabPanel>
        <ul>
          {planets.map((planet) => {
            return (
              <li key={planet.id}><p>{planet.name}</p> <span onClick={() => changeFav(planet.id)} className={`material-icons ${planet.isFavourite ? `fav` : `not-fav`}`}>
                favorite
              </span></li>
            )
          })}
        </ul>
      </TabPanel>
      <TabPanel><ul>
        {planets.filter(planet => planet.isFavourite).map((planet) => {
          return (
            <li key={planet.id}><p>{planet.name}</p> <span onClick={() => changeFav(planet.id)} className={`material-icons ${planet.isFavourite ? `fav` : `not-fav`}`}>
              favorite
              </span></li>
          )
        })}
      </ul></TabPanel>
    </Tabs>
  );
}

export default App;
