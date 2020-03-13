import React, { useState, useEffect } from 'react';
import Venues from '../../components/Venues'
import { getVenues } from '../../utils/apiRequests';
import classes from './Setup.module.css'

export default ({ handlePress }) => {
  const [venues, setVenues] = useState([]);
  useEffect(() => {
    const callVenues = async () => {
      const { data } = await getVenues();
      setVenues(data.venues);
    }
    callVenues();
  }, []);

  return (
    <main className={classes.AppMain}>
      {/* <h1>Setup</h1> */}
      <Venues handlePress={handlePress} venues={venues} />
    </main>
  )
}
