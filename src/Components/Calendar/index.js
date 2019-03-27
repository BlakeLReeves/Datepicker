import React, { useState, useEffect } from 'react';
import './calendar.css'

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

    const cells = () => {
        let firstDay = (new Date(currentMonth, currentYear)).getDay();
        let daysInMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();
        let tbl = document.getElementById("calendar-body");
        let date = 1;

        tbl.innerHTML = "";

        for(let i = 0; i < 6; i++) {
            let row = document.createElement("tr");

            for(let j = 0; j < 7; j++) {
                if(i === 0 && j < firstDay) {
                    let cell = document.createElement("td");
                    let cellText = document.createTextNode("");
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                } else if(date > daysInMonth) {
                    break;
                } else {
                    let cell = document.createElement("td");
                    let cellText = document.createTextNode(date);
                    if(date === today.getDate() && currentYear === today.getFullYear() && currentMonth === today.getMonth()) {
                        cell.classList.add("bg-info");
                    }
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    date++;
                }
            }
            tbl.appendChild(row);
        }
    }

    useEffect(() => {
        cells();
    }, []);

    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>{monthNames[state.currentMonth]}</th>
                    <th>{state.currentYear}</th>
                </tr>
                <tr>
                    <th>Su</th>
                    <th>Mo</th>
                    <th>Tu</th>
                    <th>We</th>
                    <th>Th</th>
                    <th>Fr</th>
                    <th>Sa</th>
                </tr>
            </thead>
            <tbody id="calendar-body">
                
            </tbody>
            
        </table>
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
        </>
    )
}

export default Calendar;