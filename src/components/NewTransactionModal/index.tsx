import { useTransactions} from "../../hooks/useTransactions";
import  { FormEvent, useState} from "react"
import Modal from "react-modal"
import { Container, TransactionTypeContrainer ,RadioBox} from "./styles"
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"


interface NewTransactionModalProps{
    isOpen:boolean;
    onRequestClose:() => void;
}
export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps){
    const {createTransaction} = useTransactions()
    const[title,setTitle]=useState("")
    const[amount,setAmount]=useState(0)
    const[category,setCategory]=useState("")
    const [type,setType]=useState("deposit");
    async function handleCreateNewTransaction(event:FormEvent){
        event.preventDefault();
         await createTransaction({
            title,
            amount,
            category, 
            type,
        });
        setTitle("");
        setAmount(0);
        setCategory("");
        setType("deposit");
        onRequestClose();
    }
    return(
        
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button 
            type="button"
            onClick={onRequestClose} 
            className="react-modal-close"
            >
            <img src={closeImg} alt="Fechar"/>
            
            </button>
            <Container onSubmit={handleCreateNewTransaction}>           
                <h2>Cadastrar Transação</h2>
                <input
                placeholder="Titulo"
                value={title}
                onChange={event=>setTitle(event.target.value)}
                />
                <input
                
                placeholder="Valor"
                value={amount}
                onChange={event=>setAmount(Number(event.target.value))}
                />
                <TransactionTypeContrainer>
                <RadioBox
                    type="button"
                    isActive={type==="deposit"}
                    onClick={()=>{setType("deposit")}}
                    activeColor="green"
                >
                    <img src={incomeImg} alt="entrada"/>
                    <span>Entrada</span>
                </RadioBox>
                <RadioBox
                    type="button"
                    isActive={type==="withdraw"}
                    onClick={()=>{setType("withdraw")}}
                    activeColor="red"
                >
                <img src={outcomeImg} alt="Retirada"/>
                <span>Saida</span>
                </RadioBox>
                </TransactionTypeContrainer>
                <input
                placeholder="Categoria"
                value={category}
                onChange={event=>setCategory(event.target.value)}
                />
                <button 
                type="submit"
                
                >
                    Cadastrar
                </button>
            </Container>
        </Modal>
        
    )
}