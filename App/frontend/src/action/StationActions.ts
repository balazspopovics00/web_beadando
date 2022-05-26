import axios from 'axios';
import { station } from '../types/Station';

export const recordStation = async ({ city, position, temperature, humidity, windSpeed, windDirection, pressure } : { city: string, position: string, temperature: string, humidity: string, windSpeed: string, windDirection: string, pressure: string}) => {
  const resp = await axios.post('/stations', { city: city, position: position, temperature: parseFloat(temperature), humidity: parseFloat(humidity), windSpeed: parseFloat(windSpeed), windDirection: windDirection, pressure: parseFloat(pressure) });
  if (resp.status === 200) {
    console.log('Success');
  } else if (resp.status === 500) {
    console.log('Error');
  } else {
    console.log('Problem');
  }
};

export const fetchStations = async () : Promise<station[]> => {
  const resp = await axios.get('/stations');
  if (resp.status === 200) {
    console.log({ data: resp.data });
  } else {
    console.error({ error: resp.data });
  }
  return resp.data;
};

export const fetchStationsID = async (id: string) : Promise<station[]> => {
  console.log(id);
  const resp = await axios.get(`/stations/${id}`);
  if (resp.status === 200) {
    console.log({ data: resp.data });
  } else {
    console.error({ error: resp.data });
  }
  return resp.data;
};

export const deleteStation = async (id: string) => {
  const resp = await axios.delete(`/stations/${id}`);

  return resp.data;
};
