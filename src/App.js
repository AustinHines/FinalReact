import MCUShows from './mcu-shows/MCUShows'

const releaseDates = {
  wandaVision: 'Jan 2021',
  falconWinter: 'Mar 2021',
  loki: 'June 2021',
  hawkeye: 'Fall of 2021'
 }

 const dates = releaseDates

 


function App () {
  return (
    <div className="App">
      <h1>Final React EXERCISE</h1>
      <MCUShows startingItems={dates}/>
      
    </div>
  );
}

export default App;
