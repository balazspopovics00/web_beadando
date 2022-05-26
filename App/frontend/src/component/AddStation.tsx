import React, { useState } from 'react';
import { Button, FormControl, TextField } from '@material-ui/core';
import { recordStation } from '../action/StationActions';
import './AddStation.css';

function AddStation () {
  const [city, setCity] = useState('');
  const [position, setPosition] = useState('');
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [windDirection, setWindDirection] = useState('');
  const [pressure, setPressure] = useState('');

  return (
      <div className={'formDiv'}>
        <FormControl>
            <TextField
                id={'city'}
                name={'city-input-field'}
                variant={'outlined'}
                label={'City'}
                value={city}
                onChange={(event) => {
                  setCity(event.target.value);
                }}
            />
            <TextField
                id={'position'}
                name={'position-input-field'}
                variant={'outlined'}
                label={'Position'}
                value={position}
                onChange={(event) => {
                  setPosition(event.target.value);
                }}
            />
            <TextField
                id={'temperature'}
                name={'temperature-input-field'}
                variant={'outlined'}
                label={'Temperature'}
                value={temperature}
                onChange={(event) => {
                  setTemperature(event.target.value);
                }}
            />
            <TextField
                id={'humidity'}
                name={'humidity-input-field'}
                variant={'outlined'}
                label={'Humidity'}
                value={humidity}
                onChange={(event) => {
                  setHumidity(event.target.value);
                }}
            />
            <TextField
                id={'windSpeed'}
                name={'windSpeed-input-field'}
                variant={'outlined'}
                label={'WindSpeed'}
                value={windSpeed}
                onChange={(event) => {
                  setWindSpeed(event.target.value);
                }}
            />
            <TextField
                id={'windDirection'}
                name={'windDirection-input-field'}
                variant={'outlined'}
                label={'WindDirection'}
                value={windDirection}
                onChange={(event) => {
                  setWindDirection(event.target.value);
                }}
            />
            <TextField
                id={'pressure'}
                name={'pressure-input-field'}
                variant={'outlined'}
                label={'Pressure'}
                value={pressure}
                onChange={(event) => {
                  setPressure(event.target.value);
                }}
            />
            <Button
                variant={'contained'}
                onClick={() => {
                  recordStation({ city: city, position: position, temperature: temperature, humidity: humidity, windSpeed: windSpeed, windDirection: windDirection, pressure: pressure });
                }}
            >Save</Button>
        </FormControl>
      </div>
  );
}

export default AddStation;
