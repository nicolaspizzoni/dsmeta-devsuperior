import logo from '../../assets/logo.svg'
import { HeaderContainer, HeaderContent } from './styles'

export function Header(){
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="">@devsuperior</a>
                </p>
            </HeaderContent>
        </HeaderContainer>
    )
}