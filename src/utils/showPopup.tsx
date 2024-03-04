import { Popup } from '@components/Popup';
import { ShowPopupProps } from '@interfaces/popup';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';

export default function showPopup({ message, type }: ShowPopupProps) {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const closePopup = () => {
        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
    };

    const root = createRoot(container);
    root.render(<Popup message={message} type={type} onClose={closePopup} />);
}
