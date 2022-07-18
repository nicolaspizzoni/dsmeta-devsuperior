import icon from '../../assets/notification-icon.svg'
import { NotiButton } from '../../models/sale'
import { NotificationContainer } from './styles'



export function NotificationButton({onClick}:NotiButton) {
    return (
        <NotificationContainer
            onClick={onClick}
        >
            <img src={icon} alt="Notificar" />
        </NotificationContainer>
    )
}