import React, { useState } from 'react';

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

const Calendar = props => {

    const [state, setState] = useState({
        currentMonth: currentMonth,
        currentYear: currentYear
    })

    const next = () => {
        setState({ 
            currentMonth: currentMonth = (currentMonth + 1) % 12,
            currentYear: currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear
        });
    }

    const previous = () => {
        setState({
            currentMonth: currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1,
            currentYear: currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear
        });
    }

    return (
        <>
            <p>{monthNames[state.currentMonth]} {state.currentYear}</p>
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
        </>
    )
}

export default Calendar;

// let today = new Date();
// let currentMonth = today.getMonth();
// let currentYear = today.getFullYear();
// let monthNames = ["January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];
// console.log(monthNames[currentMonth], currentYear);

// export default class Calendar extends React.Component {
//     constructor(props) {
//         super(props)

//         this.handleNext = this.handleNext.bind(this);

//     }

//     handleNext() {
//         currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
//         currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
//     }

//     render() {
//         return (
//             <div className="calendar-container">
//                 <h2>{monthNames[currentMonth]} {currentYear}</h2>
//                 <button id="next" onClick={this.handleNext}>Next</button>
//             </div>
//         );
//     }
// }