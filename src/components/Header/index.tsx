
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";
interface HeaderProps{
    onOpenNewTransictipnModal:() => void;       
}

export function Header({onOpenNewTransictipnModal}:HeaderProps){
    
  
    
    return(
        <Container>
            <Content>
            <img src={logoImg} alt="dt money"/>
            <button type="button" onClick={onOpenNewTransictipnModal}>
              Nova transação  
            </button>
           
            </Content>
        </Container>
    )
}