import React, {useState, useEffect} from 'react';
import './Calendar.scss';

export interface CalendarViewDataModel {
    currentDate: Date;
    currentMonth: Date;
    displayMonth: string;
    displayYear: number;
    items: CalendarItemViewDataModel[];
}

export interface CalendarItemViewDataModel {
    date: Date;
    active: boolean;
    displayDay: number;
    displayWeekDay: string;
    disabled: boolean;
    trainingProgramID: number | null;
}

const Calendar: React.FC = () => {
    const [calendarData, setCalendarData] = useState(null as CalendarViewDataModel | null);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    useEffect(() => {
        renderCalendar(currentMonth);
    }, [currentMonth]);

    const renderCalendar = (selectedMonth: Date) => {
        const today = new Date();
        const firstDay = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), 1);
        const lastDay = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startWeekday = (firstDay.getDay() + 6) % 7;
        const endWeekday = (lastDay.getDay() + 6) % 7;
        const items: CalendarItemViewDataModel[] = [];

        for (let i = 0; i < startWeekday; i++) {
            items.push({
                date: new Date(0),
                active: false,
                displayDay: 0,
                displayWeekDay: '',
                disabled: true,
                trainingProgramID: null,
            });
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), i);

            let active = false;
            if (date.toDateString() === today.toDateString()) {
                active = true;
            }

            const WeekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const displayWeekDay = WeekDays[date.getDay()];

            items.push({
                date: date,
                active: active,
                displayDay: i,
                displayWeekDay: displayWeekDay,
                disabled: false,
                trainingProgramID: null,
            });
        }

        for (let i = endWeekday + 1; i < 7; i++) {
            items.push({
                date: new Date(0),
                active: false,
                displayDay: 0,
                displayWeekDay: '',
                disabled: true,
                trainingProgramID: null,
            });
        }

        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        setCalendarData({
            currentDate: today,
            currentMonth: selectedMonth,
            displayMonth: monthNames[selectedMonth.getMonth()],
            displayYear: selectedMonth.getFullYear(),
            items: items,
        });
    };

    const handlePrevMonth = () => {
        const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
        setCurrentMonth(prevMonth);
    };

    const handleNextMonth = () => {
        const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
        setCurrentMonth(nextMonth);
    };

    if (!calendarData) {
        return null;
    }

    const getClassNames = (day: CalendarItemViewDataModel) => {
        let classNames = 'calendar__day';
        if (day.active) classNames += ' active';
        return classNames;
    };

    return (
        <div className="calendar">
            <div className="calendar__header">
                <button className="calendar__button"
                        onClick={handlePrevMonth}>
                    Previous month
                </button>

                <h2 className="calendar__headline">{calendarData.displayMonth} {calendarData.displayYear}</h2>

                <button className="calendar__button"
                        onClick={handleNextMonth}>
                    Next month
                </button>
            </div>

            <div className="calendar__grid">

                {calendarData.items.map((day) => (
                    <div
                        className={getClassNames(day)}>

                        {day.displayDay !== 0 && (
                            <div className="calendar__cell">
                                <p>{day.displayDay}</p>
                                <p>{day.displayWeekDay}</p>
                            </div>
                        )}

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;