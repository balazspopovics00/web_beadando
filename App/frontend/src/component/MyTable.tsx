import React, { useEffect } from 'react';
import './MyTable.css';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/stationStore';
import { deleteStation, fetchStations } from '../action/StationActions';
import { fetchAll } from '../store/stationReducer';

function MyTable () {
  const appDispatch = useDispatch<AppDispatch>();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

  // const [issues, setIssues] = useState<issue[]>([]);
  const stations = useAppSelector((state) => state.stationReducer.stations);

  useEffect(() => {
    fetchStations().then(stations => appDispatch(fetchAll(stations)));
    // fetchIssues().then((issues) => setIssues(issues));
  }, []);
  return (
      <div className={'tableDiv'}>
          <Table>
              <TableHead className={'header'}>
                <TableRow>
                    <TableCell style={{ color: 'white' }}>Id</TableCell>
                    <TableCell style={{ color: 'white' }}>City</TableCell>
                    <TableCell style={{ color: 'white' }}>Position</TableCell>
                    <TableCell style={{ color: 'white' }}>Temp.</TableCell>
                    <TableCell style={{ color: 'white' }}>Humidity</TableCell>
                    <TableCell style={{ color: 'white' }}>WindSpeed</TableCell>
                    <TableCell style={{ color: 'white' }}>WindDir</TableCell>
                    <TableCell style={{ color: 'white' }}>Pressure</TableCell>
                    <TableCell style={{ color: 'white' }}>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className={'tableBodyDiv'}>
                  {
                      stations.map((station, index) => {
                        return (
                              <TableRow key={index}>
                                  <TableCell style={{ color: 'white' }}>{station._id}</TableCell>
                                  <TableCell style={{ color: 'white' }}>{station.city}</TableCell>
                                  <TableCell style={{ color: 'white' }}>{station.position}</TableCell>
                                  <TableCell style={{ color: 'white' }}>{station.temperature} °C</TableCell>
                                  <TableCell style={{ color: 'white' }}>{station.humidity} %</TableCell>
                                  <TableCell style={{ color: 'white' }}>{station.windSpeed} km/h</TableCell>
                                  <TableCell style={{ color: 'white' }}>{station.windDirection}</TableCell>
                                  <TableCell style={{ color: 'white' }}>{station.pressure} hPa</TableCell>
                                  <Button
                                      variant={'contained'}
                                      color = 'primary'
                                      onClick={() => {
                                        deleteStation(station._id);
                                      }}
                                  >Delete</Button>
                              </TableRow>
                        );
                      })
                  }
              </TableBody>
          </Table>
      </div>
  );
}

export default MyTable;
