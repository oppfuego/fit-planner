import React, {useEffect} from "react";
import "./ModalSign.scss";
import {IoMdClose} from "react-icons/io";


interface ModalSignProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const ModalSign: React.FC<ModalSignProps> = ({isOpen, onClose, children}) => {
    const outsideRef = React.useRef(null);

    const handleCloseOnOverlay = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (e.target === outsideRef.current) {
            onClose();
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);

    return isOpen ? (
        <div className="modal">
            <div ref={outsideRef}
                 className="modal__wrapper"
                 onClick={handleCloseOnOverlay}/>
            <div className="modal__content">
                <button className="modal__content-close-btn"
                    onClick={onClose}>
                    <IoMdClose/>
                </button>
                <div className="modal__inner-content">
                    {children}
                </div>
            </div>
        </div>
    ) : null;
}

export default ModalSign;