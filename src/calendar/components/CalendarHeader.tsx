import styled from "styled-components";


const getWeekDays = (locale: string) => {
    var baseDate = new Date(Date.UTC(2017, 0, 2)); // just a Monday
    var weekDays = [];
    for(let i = 0; i < 7; i++)
    {       
        weekDays.push(baseDate.toLocaleDateString(locale, { weekday: 'short' }));
        baseDate.setDate(baseDate.getDate() + 1);       
    }
    return weekDays;
}

interface ICalendarProps {
    locale: string
}

export const CalendarHeader: React.FC<ICalendarProps>  = ({locale}) => {
    return (
        <>
            {
                getWeekDays(locale).map((day, index) => (
                        <WeekDayContainer key={`week-day-${index}`}>{day}</WeekDayContainer>
                    )
                )
            }
        </>
    )
}

const WeekDayContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 20px;
`