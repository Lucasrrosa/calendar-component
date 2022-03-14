import styled from "styled-components"

interface IMonthDayItemProps {
    day: number
    events?: IEvent[]
}

interface IEvent {
    description: string
    title: string
    date: Date
}

export const MonthDayItem: React.FC<IMonthDayItemProps> = ({day, events}) => {
    return (
        <DayCellItem>
            <DayValue>
                {day}
            </DayValue>
            {
                events?.map((event, index) => (
                    <EventContainer>{event.title}</EventContainer>
                ))
            }
        </DayCellItem>
    )
}

const DayCellItem = styled.div`
    justify-self: center;
    border: 1px solid #dadce0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    aspect-ratio: 1;
`

const DayValue = styled.div`
    padding: 5px;
`
const EventContainer = styled.div`
    width: calc(100% - 6px);
    margin: 3px;
    background-color: green;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
        background-color: #00a8ff;
    }
`
