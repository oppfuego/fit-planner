import { NotificationProps } from "../../notification/NotificationProps";

export interface PlanTrainingFormProps {
    onClose: () => void;
    setNotification: (notification: NotificationProps | null) => void;
    selectedDate?: Date | null;
}