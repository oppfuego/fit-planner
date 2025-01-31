import {NotificationProps} from "../../notification/NotificationProps";

export interface ReadyProgramFormProps{
    trainingPlanUid: string | null;
    onClose: () => void;
    setNotification: (notification: NotificationProps | null) => void;
}