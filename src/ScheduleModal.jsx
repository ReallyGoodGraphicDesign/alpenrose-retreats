import Modal from './Modal';
import './ScheduleModal.css';
import { useEffect, useState } from 'react';

function ScheduleModal({ onClose }) {
  const [schedule, setSchedule] = useState(null);
  useEffect(() => {
    fetch(
      'https://script.google.com/macros/s/AKfycbwW71SdmGQka91sCqaOLU4vHaYnogadIvnUzTj0bhZhlaBYdK5Y8xedweyIO3DGPRH6sw/exec?sheet=schedule'
    )
      .then((res) => res.json())
      .then((data) => setSchedule(data))
      .catch((err) => console.error(err));
  }, []);

  function fillDownAll(rows, keys) {
    const last = {};
    return rows.map((row) => {
      const copy = { ...row };
      keys.forEach((k) => {
        if (copy[k] && copy[k].toString().trim() !== '') {
          last[k] = copy[k];
        } else {
          copy[k] = last[k];
        }
      });
      return copy;
    });
  }

  if (!schedule) return null;

  function calculateColumnSpans(rows, key) {
    const spans = [];
    let start = 0;

    while (start < rows.length) {
      let end = start + 1;
      while (end < rows.length && rows[end][key] === rows[start][key]) {
        end++;
      }
      spans[start] = end - start;
      for (let i = start + 1; i < end; i++) {
        spans[i] = 0;
      }
      start = end;
    }
    return spans;
  }

  // 1) Find the real time column key (handles TIME, Time, time, "TIME " etc.)
  const keys = Object.keys(schedule[0] || {});
  const timeKey = keys.find((k) => k.trim().toLowerCase() === 'time');

  // If you want a hard fail instead of weird rendering:
  if (!timeKey) {
    console.error('No TIME column found. Keys:', keys);
    return null;
  }

  // 2) Days = all columns except the time column
  const days = keys.filter((k) => k !== timeKey);

  // 3) Row spans based on the real time key
  const normalizedSchedule = fillDownAll(schedule, days);

  const columnSpans = Object.fromEntries(
    days.map((day) => [day, calculateColumnSpans(normalizedSchedule, day)])
  );

  return (
    <Modal onClose={onClose}>
      <div className="schedule-modal">
        <h2>Daily Schedule</h2>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>{timeKey}</th>
              {days.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {normalizedSchedule.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {/* TIME is NEVER merged */}
                <td>{row[timeKey]}</td>

                {days.map((day) => {
                  const span = columnSpans[day][rowIndex];
                  if (span === 0) return null;

                  return (
                    <td key={day} rowSpan={span}>
                      {row[day]}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Modal>
  );
}
export default ScheduleModal;
