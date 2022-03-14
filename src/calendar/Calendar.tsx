import styled from "styled-components"
import { CalendarHeader } from "./components/CalendarHeader";
import { MonthDayItem } from "./components/MonthDayItem";

const LOCALE = 'pt-BR';

const getMonthName = (date: Date, locale: string) => {
    return date.toLocaleString(locale, { month: 'long' });
}

interface ICalendarProps {
    mode: 'month' | 'week' | 'day'
    actualDate: Date
    onDateClick: (date: Date) => void
    onMonthChange: (date: Date) => void
    onYearChange: (date: Date) => void

}

const getListOfDaysInMonth = (date: Date): number[] => {
    const daysInLastMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
    const daysInActualMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    const weekDayFirstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    const lastMonthDays = [...Array(weekDayFirstDay).keys()].reverse().map(i => daysInLastMonth - i)
    const daysInMonth = [...Array(daysInActualMonth).keys()].map(i => i + 1)
    return [lastMonthDays, daysInMonth].flat()

}


export const Calendar: React.FC<ICalendarProps> = (props) => {

    const actualYear = props.actualDate.getFullYear()

    return(
        <div style={{width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            ano:{actualYear} | mês - {getMonthName(props.actualDate, 'pt-BR')}

            <CalendarContainer>
                <CalendarHeader locale={ LOCALE }/>
                <CalendarDays actualDate={props.actualDate}/>
            </CalendarContainer>
        </div>
    )
}

const CalendarDays: React.FC<{actualDate: Date}> = ({actualDate}) => (
    <>
    {
        getListOfDaysInMonth(actualDate).map((day, index) => (
            <MonthDayItem events={[{description: 'eventos', title: 'Evento x', date: new Date()}]} key={`day-${index}`} day={day}/>
        ))
    }
    </>
)

const CalendarContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: 1fr; 
    grid-template-rows: 20px;
    width: 100%;
    height: 100%;
`

