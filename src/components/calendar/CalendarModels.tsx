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
    trainingProgramID: string | null;
}