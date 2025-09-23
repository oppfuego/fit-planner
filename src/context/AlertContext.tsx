"use client";

import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertColor } from '@mui/material/Alert';

type ShowAlertFn = (title: string, description?: string, severity?: AlertColor) => void;

interface AlertContextType {
    showAlert: ShowAlertFn;
}

export const AlertContext = React.createContext<AlertContextType>({
    showAlert: () => {},
});

export function useAlert() {
    return React.useContext(AlertContext);
}

export const AlertProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [severity, setSeverity] = React.useState<AlertColor>('info');

    const showAlert: ShowAlertFn = (title, description = '', severity = 'info') => {
        setTitle(title);
        setDescription(description);
        setSeverity(severity);
        setOpen(true);
    };

    const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    return (
        <AlertContext.Provider value={{ showAlert }}>
            {children}
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <MuiAlert onClose={handleClose} severity={severity} elevation={6} variant="filled" sx={{ width: '100%' }}>
                    <strong>{title}</strong>
                    {description && <div>{description}</div>}
                </MuiAlert>
            </Snackbar>
        </AlertContext.Provider>
    );
};