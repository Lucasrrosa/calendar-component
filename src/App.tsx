import { useState } from 'react'
import './App.css'
import { Calendar } from './calendar/Calendar'

function App() {

    const [actualDate, setActualDate] = useState(new Date())
    return (
        <div>
            <Calendar
                actualDate={actualDate}
                onDateClick={(date) => setActualDate(date)}
                onMonthChange={(date) => setActualDate(date)}
                onYearChange={(date) => setActualDate(date)}
                mode={'month'}
            />
        </div>
    )
}

export default App
