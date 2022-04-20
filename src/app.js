import { getHoursApi, getWeeklyApi, getDaysApi } from './apis.js';
import { rendenWeekly } from './weeklyArea.js';
import { renderHours } from './hoursArea.js';
import { renderDays } from '/daysArea.js';
import './styles/global.css';
import './styles/weeklyArea.css';
import './styles/hoursArea.css';

const getHours = async () => {
  const res = await getHoursApi();
  return res.records;
};

const getWeekly = async () => {
  const res = await getWeeklyApi();
  return res.records;
};

const getDays = async (location) =>{
  let params = {locationName:location, elementName:['Wx', 'T']};
  const res = await getDaysApi(params);
  return res.records.locations[0].location[0].weatherElement;
}

document.addEventListener('DOMContentLoaded', async () => {
  const hoursRecords = await getHours();
  renderHours(hoursRecords);
  const weeklyRecords = await getWeekly();
  rendenWeekly(weeklyRecords, '臺北市');
  // arg can be replaced with any valid location Name
  const DaysRecords = await getDays("大安區");
  renderDays(DaysRecords);
});
