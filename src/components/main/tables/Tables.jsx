import { useMediaQuery } from 'react-responsive';
import React, { useState } from 'react';

import './Tables.scss';
import schedule from '../../../data/Schedule.json';

const MobileComponent = () => {
    const [showTable, setShowTable] = useState(false);

    const toggleTable = () => {
        setShowTable(!showTable);
    };

    return (
        <div className="tables">
      <button onClick={toggleTable} className='tables-button'>
        {showTable ? 'Hide my schedule' : 'Show my schedule'}
      </button>
      

      {showTable && (
        <>
        {schedule.map((user) => (
            <table className='tables-day'>
                <tbody>
                    <tr key={user.id} >
                        <td className='tables-block'>{user.day}</td>
                        {Object.keys(user.plan).map((plan, index) => (
                        <tr key={index}>
                            <td>{plan}</td>
                            <td className="tables--border tables-plan">{user.plan[plan]}</td>
                        </tr>
                        ))}
                    </tr>
                </tbody>
            </table>
            ))}
        </>
            
         
      )}
    </div>
    );
  };
  
  const DesktopComponent = () => {
    const timeArr = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00","17:00", "18:00", "19:00", "20:00"]
    return (
        <div className="tables">
        <table>
                <thead>
                    <tr>
                        <th>Day</th>
                        {
                            timeArr.map(time => (
                                <th>{time}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {schedule.map((user) => (
                        <tr key={user.id}>
                            <td >{user.day}</td>
                            {Object.keys(user.plan).map((plan) => (
                                <td className="tables--border" key={plan}>{user.plan[plan]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
      </div>
    );
  };
  
  export const Tables = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1090px)' }); 
  
    return (
      <div>
        {isMobile ? <MobileComponent /> : <DesktopComponent />}
      </div>
    );
  };
  