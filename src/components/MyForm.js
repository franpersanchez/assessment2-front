import "./MyForm.css";
import { useState, useEffect } from "react";
import Select from "react-select";

function MyForm() {
  const handleDateOrigin = (event) => {
    setcurrentDateOrigin(event.target.value);
  };

  const handleDateDestination = (event) => {
    setcurrentDateDestination(event.target.value);
  };

  const handleCurrentChoiceReturn = (event) => {
    setCurrentChoiceReturn(event.target.checked);
  };

  var curr = new Date();
  curr.setDate(curr.getDate());
  var date = curr.toISOString().substring(0, 10);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentId, setCurrentId] = useState();
  const [data2, setData2] = useState();
  const [isShown, setIsShown] = useState(true);
  const [currentIdDest, setCurrentIdDest] = useState();
  const [currentDateOrigin, setcurrentDateOrigin] = useState(date);
  const [currentDateDestination, setcurrentDateDestination] = useState(date);
  const [currentChoiceReturn, setCurrentChoiceReturn] = useState();

  useEffect(() => {
    fetch(`http://localhost:8081/locations/showAll`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (currentId != null) {
      fetch(`http://localhost:8081/locations/showdestinations/${currentId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          return response.json();
        })
        .then((actualData2) => {
          let l = [];
          for (const v of actualData2) {
            l.push(data[v.destinationId - 1]);
          }
          setData2(l);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setData2(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [currentId]);

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    console.log(currentId);
    console.log(currentIdDest);
    console.log(currentDateOrigin);
    console.log(currentDateDestination);
    console.log(currentChoiceReturn);
  };

  return (
    <div className="box"> 
      <form id="formHome" >
        <span>Origin: </span>
        <div className="box1">
          <Select
            name="originId"
            options={data.map((location) => ({
              label: location.city,
              value: location.id,
            }))}
            onChange={(location) => setCurrentId(location.value)}
          />
        </div>

        <span>Destination:</span>

        <Select
          name="destinationId"
          className="box1"
          options={
            data2 &&
            data2.map((destination) => ({
              label: destination.city,
              value: destination.id,
            }))
          }
          onChange={(destination) => setCurrentIdDest(destination.value)}
        />

        <span>Departure</span>
        <input
          type="date"
          id="origin-time"
          name="origin-time"
          min={date}
          value={currentDateOrigin}
          onChange={handleDateOrigin}
        ></input>

        <span>Return</span>
        <input
          type="date"
          id="return-time"
          name="return-time"
          min={date}
          value={currentDateDestination}
          onChange={handleDateDestination}
        ></input>

        <label className="checkbox-button">
          <input
            type="checkbox"
            className="checkbox-button__input"
            id="return-choice"
            name="return-choice"
            value={currentChoiceReturn}
            onChange={handleCurrentChoiceReturn}
          ></input>
          <span className="checkbox-button__control"></span>
          <span className="checkbox-button__label">Return</span>
        </label>

        <input className="submit" onClick={formSubmissionHandler}  value="Search" />
      </form>
    </div>
  );
}

export default MyForm;
