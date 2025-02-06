import React, {useState, useEffect} from 'react';
import './Calendar.scss';
import {FaEye} from "react-icons/fa";
import {FaPlus} from "react-icons/fa6";
import {CalendarItemViewDataModel, CalendarViewDataModel} from "./CalendarModels";
import PlanTrainingForm from '../plan-training-form/PlanTrainingForm';
import ReadyProgramForm from '../ready-program-form/ReadyProgramForm';
import ModalSign from '../modal-sign/ModalSign';
import {NotificationProps} from "../../notification/NotificationProps";
import Notification from "../../notification/Notification";
import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '../../FirebaseConfig';
import {getAuth, onAuthStateChanged} from 'firebase/auth';

const Calendar: React.FC = () => {
    const [calendarData, setCalendarData] = useState<CalendarViewDataModel | null>(null);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [isFormOpen, setFormOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [userTrainingPlans, setUserTrainingPlans] = useState<any[]>([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [selectedTrainingPlanId, setSelectedTrainingPlanId] = useState<string | null>(null);
    const [notificationKey, setNotificationKey] = useState(0);
    const [notification, setNotification] = useState<NotificationProps | null>(null);

    useEffect(() => {
        const cachedMonth = localStorage.getItem('currentMonth');
        const cachedPlans = localStorage.getItem('userTrainingPlans');
        if (cachedMonth) {
            setCurrentMonth(new Date(cachedMonth));
        }
        if (cachedPlans) {
            setUserTrainingPlans(JSON.parse(cachedPlans));
        }

        const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
            if (user) {
                setCurrentUser(user);
                fetchUserTrainingPlans(user.uid);
            } else {
                setCurrentUser(null);
                setUserTrainingPlans([]);
            }
        });

        return () => unsubscribe();
    }, []);

    const fetchUserTrainingPlans = async (userId: string) => {
        const trainingPlansQuery = query(
            collection(db, 'TrainingPlans'),
            where('clientIds', 'array-contains', userId)
        );

        try {
            const trainingPlansSnapshot = await getDocs(trainingPlansQuery);
            if (trainingPlansSnapshot.empty) {
                console.log('No training plans found for the current user.');
            } else {
                const plans = trainingPlansSnapshot.docs.map(doc => ({
                    ...doc.data(),
                    uid: doc.id
                }));
                setUserTrainingPlans(plans);
                localStorage.setItem('userTrainingPlans', JSON.stringify(plans));
            }
        } catch (error) {
            console.error('Error fetching user training plans:', error);
        }
        setIsDataLoaded(true);
    };

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
                trainingProgramID: null
            });
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), i);
            const active = date.toDateString() === today.toDateString();
            const WeekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const displayWeekDay = WeekDays[date.getDay()];

            items.push({
                date,
                active,
                displayDay: i,
                displayWeekDay,
                disabled: false,
                trainingProgramID: null
            });
        }

        for (let i = endWeekday + 1; i < 7; i++) {
            items.push({
                date: new Date(0),
                active: false,
                displayDay: 0,
                displayWeekDay: '',
                disabled: true,
                trainingProgramID: null
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
            items
        });
        localStorage.setItem('currentMonth', selectedMonth.toISOString());
    };

    useEffect(() => {
        renderCalendar(currentMonth);
    }, [currentMonth, userTrainingPlans]);

    const handlePrevMonth = () => {
        const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
        setCurrentMonth(prevMonth);
    };

    const handleNextMonth = () => {
        const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
        setCurrentMonth(nextMonth);
    };

    const toggleForm = (date?: Date) => {
        if (date) setSelectedDate(date);
        setFormOpen(!isFormOpen);
    };

    const openReadyProgramForm = (trainingProgramID: string) => {
        setSelectedTrainingPlanId(trainingProgramID);
    };

    const isSameDate = (date1: Date, date2: Date): boolean => {
        return date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate();
    };

    const handleDayClick = (day: CalendarItemViewDataModel) => {
        if (isDataLoaded && currentUser) {
            const plan = userTrainingPlans.find(plan =>
                isSameDate(new Date(plan.trainingDate), day.date)
            );

            if (plan) {
                openReadyProgramForm(plan.uid);
            } else {
                toggleForm(day.date);
            }
        }
    };

    const hasTrainingPlan = (date: Date): boolean => {
        return userTrainingPlans.some(plan => isSameDate(new Date(plan.trainingDate), date));
    };

    const getClass = (day: CalendarItemViewDataModel) => {
        let classNames = 'calendar__day';
        if (day.active) classNames += ' active';
        if (day.disabled) classNames += ' calendar__day--disabled';
        if (hasTrainingPlan(day.date)) classNames += ' calendar__day--has-training';
        return classNames;
    };

    const showNotification = (notification: NotificationProps | null) => {
        setNotificationKey(prevKey => prevKey + 1);
        setNotification(notification);
    };

    return (
        <div className="calendar">
            <div className="calendar__header">
                <button className="calendar__button" onClick={handlePrevMonth}>
                    Previous month
                </button>

                <h2 className="calendar__headline">{calendarData?.displayMonth} {calendarData?.displayYear}</h2>

                <button className="calendar__button" onClick={handleNextMonth}>
                    Next month
                </button>
            </div>

            <div className="calendar__grid">
                {calendarData?.items && calendarData.items.map((day, index) => {
                    if (day.disabled) {
                        return (<div key={index} className={getClass(day)}></div>);
                    } else {
                        return (
                            <div key={index} className={getClass(day)} onClick={() => handleDayClick(day)}>
                                <div className="calendar__cell">
                                    <p>{day.displayDay}</p>
                                    <p>{day.displayWeekDay}</p>
                                    {userTrainingPlans.some(plan => isSameDate(new Date(plan.trainingDate), day.date)) ?
                                        <FaEye className="calendar__icon"/> :
                                        <FaPlus className="calendar__icon"/>}
                                </div>
                            </div>
                        );
                    }
                })}
            </div>

            {selectedTrainingPlanId && (
                <ModalSign isOpen={true} onClose={() => setSelectedTrainingPlanId(null)}>
                    <ReadyProgramForm trainingPlanUid={selectedTrainingPlanId} onClose={toggleForm} setNotification={showNotification}/>
                </ModalSign>
            )}

            <ModalSign isOpen={isFormOpen} onClose={toggleForm}>
                <PlanTrainingForm
                    onClose={toggleForm}
                    setNotification={showNotification}
                    selectedDate={selectedDate}
                />
            </ModalSign>

            {notification && (
                <Notification key={notificationKey}
                              title={notification.title}
                              type={notification.type}
                              description={notification.description}
                              showNotification={notification.showNotification}
                />
            )}
        </div>
    );
};

export default Calendar;