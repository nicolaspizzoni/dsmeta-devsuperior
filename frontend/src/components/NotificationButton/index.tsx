import icon from '../../assets/notification-icon.svg'
import { NotificationContainer } from './styles'

export function NotificationButton() {
    return (
        <NotificationContainer>
            <img src={icon} alt="Notificar" />
        </NotificationContainer>
    )
}