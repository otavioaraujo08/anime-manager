import { Popup } from '@components/Popup';
import { ShowPopupProps } from '@interfaces/popup';
import ReactDOM from 'react-dom';

export default function showPopup({ message, type }: ShowPopupProps) {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const closePopup = () => {
        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
    };

    ReactDOM.render(
        <Popup message={message} type={type} onClose={closePopup} />,
        container
    );
}
