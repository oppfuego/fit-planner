import React, { FC, useEffect, useState } from 'react';
import './Notification.scss';
import { ReactComponent as SuccessIcon } from "../assets/icons/alert-success-icon.svg";
import { ReactComponent as WarningIcon } from "../assets/icons/alert-warning-triangle.svg";
import { ReactComponent as InfoIcon } from "../assets/icons/alert-info-icon.svg";
import { ReactComponent as ErrorIcon } from "../assets/icons/alert-error-icon.svg";
import { NotificationProps } from './NotificationProps';
import {IoMdClose} from "react-icons/io";

const Notification: FC<NotificationProps> = ({ type, title, description, showNotification }) => {
    const [isVisible, setIsVisible] = useState(showNotification);

    useEffect(() => {
        setIsVisible(showNotification);
    }, [showNotification]);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 6000);

            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    const handleClose = () => {
        setIsVisible(false);
    };

    const getIcon = () => {
        switch (type) {
            case 'success':
                return <SuccessIcon className="notification__icon" />;
            case 'warning':
                return <WarningIcon className="notification__icon" />;
            case 'info':
                return <InfoIcon className="notification__icon" />;
            case 'error':
                return <ErrorIcon className="notification__icon" />;
            default:
                return null;
        }
    };

    const getClassName = () => {
        switch (type) {
            case 'success':
                return `notification notification--success`;
            case 'warning':
                return `notification notification--warning`;
            case 'info':
                return `notification notification--info`;
            case 'error':
                return `notification notification--error`;
            default:
                return `notification`;
        }
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className={getClassName()}>
            <div className="notification__content">
                {getIcon()}
                <section className="notification__text">
                    <h3 className="notification__title">{title}</h3>
                    <p className="notification__description">{description}</p>
                </section>
            </div>

            <button onClick={handleClose} className="modal__content-close-btn">
            <IoMdClose/>
            </button>
        </div>
    );
};

export default Notification;
