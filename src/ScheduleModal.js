import Modal from "./Modal";
import "./ScheduleModal.css";
import { useEffect, useState } from "react";
function ScheduleModal({ onClose }) {
  const [schedule, setSchedule] = useState(null);
useEffect(() => {
  fetch("https://script.google.com/macros/s/AKfycbwW71SdmGQka91sCqaOLU4vHaYnogadIvnUzTj0bhZhlaBYdK5Y8xedweyIO3DGPRH6sw/exec?sheet=schedule")
    .then(res => res.json())
    .then(data => setSchedule(data))
    .catch(err => console.error(err));
}, []);
if (!schedule) return null;
const days = Object.keys(schedule[0]).filter(key => key !== "time");
return (
<Modal onClose={onClose}>
        <div className="schedule-modal">
                <h2>Daily Schedule</h2>
                <table className="schedule-table">
                        <thead>
                                <tr>
                                        {days.map(day => (
                                        <th key={day}>{day}</th>
                                        ))}
                                </tr>
                        </thead>
                        <tbody> 
                                {schedule.map((row, i) => (
                                <tr key={i}>
                                        {days.map(day => (
                                        <td key={day}>{row[day] || ""}</td> ))}
                                </tr> ))}
                        </tbody>
                </table>
        </div>
</Modal>
);}
export default ScheduleModal;
