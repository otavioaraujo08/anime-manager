export interface ShowPopupProps {
    message: string;
    type: 'success' | 'warning';
}

export interface PopupProps extends ShowPopupProps {
    onClose: () => void;
}
