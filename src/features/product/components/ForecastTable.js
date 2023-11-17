// ForecastTable.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchForecastAsync, selectForecast } from '../forecastSlice';



const ForecastTable = () => {
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(fetchForecastAsync());
  }, [dispatch]);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/run_forecast');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
    } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(data)
  return (
    <div>
      <h2>Forecast Table</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>yhat_lower</th>
            <th>yhat_upper</th>
            <th>yhat</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(item => (

            <tr key={item?.ds}>
              <td>{item?.ds}</td>
              <td>{item?.yhat_lower}</td>
              <td>{item?.yhat_upper}</td>
              <td>{item?.yhat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ForecastTable;
