import schedule from '../../../data/Schedule.json';
import film from '../../../data/Film.json';

import './Service.scss';

const filterTimeAndDay = [];

function filterScheduleAndExtractKeys(scheduleData) {
    const filteredDay = scheduleData.filter(user =>
      Object.keys(user.plan).some(time => user.plan[time] === false ) //знаходимо дні, де є вільна година у користувача
    );

    function freeTime (obj) {
        const arr = [];
        for(let key in obj) {
            if (obj[key] === false) {
                arr.push(key)
            }
        }
        return arr;
    }

    for (let i = 0; i <= filteredDay.length - 1; i++) {
        
        filterTimeAndDay.push({
            day: filteredDay[i].day,
            planKeys: freeTime(filteredDay[i].plan)
        })
    }
    console.log(filterTimeAndDay);


    return filterTimeAndDay;

  }
  filterScheduleAndExtractKeys(schedule)
  let filteredFilms = [];
  function filterFilmsByDayAndTime(filmsData, userDayAndPlanKeys) {
    filmsData.map(film => {
        for (let i = 0; i < userDayAndPlanKeys.length; i++) {
            console.log(userDayAndPlanKeys[i].planKeys)
            if (film.Date.day === userDayAndPlanKeys[i].day && userDayAndPlanKeys[i].planKeys.includes(film.Date.time)) {
                filteredFilms.push(film)
            }
        }

        return filteredFilms;
    })
  }
  

  filterFilmsByDayAndTime(film, filterTimeAndDay);
     console.log(filteredFilms)

export const Service = () => (
    <div className="service">
        <div className="robot">
            <h2 className='service-h2' >I have selected movies for you, the schedule of which coincides with your free time :)</h2>
            <img className='service-img' src="robot.png" alt="robot" />
        
        </div>
        
        <div className="service-list">
            {filteredFilms.map(film => (
                <a href='#' className='service-link'>
                <h3 className='service-filmTitle'>{film.Title}</h3>
                <p className='service-date'>{film.Date.day} {film.Date.time}</p>
                <img className='service-photoFilm' src={film.Images} alt="img" />
                </a>
                
            ))}
        </div>
       
    </div>
)
