export interface NotificationProps{
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    description: string;
    showNotification: boolean;
}