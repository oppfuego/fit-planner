import {NotificationProps} from "../../notification/NotificationProps";

export interface EditUserProps {
    user: any;
    onClose: () => void;
    onRoleChange: (uid: string, newRole: string) => void;
    setNotification: (notification: NotificationProps | null) => void;
}