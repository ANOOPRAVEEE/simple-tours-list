import { useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";
import { useEffect } from "react";


const url = 'https://www.course-api.com/react-tours-project';

const App = () => {

  const [isLoading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id != id)
    setTours(newTours);
  }

  if (isLoading) {
    return <main>
      <Loading />
    </main>
  }

  if (tours.length === 0) {
    return <main>
      <div className="title">
        <h2>No tours left</h2>
        <div className="title-underline"></div>
        <button className="btn" style={{marginTop:'5rem'}} onClick={() => fetchTours()}>Refresh Tours</button>
      </div>
    </main>
  }

  return <main>
    <Tours tours={tours} removeTour={removeTour} />
  </main>

};
export default App;
