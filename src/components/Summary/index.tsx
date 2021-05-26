import React from "react";
import outcomeImg from "../../assets/outcome.svg"
import incomeImg from "../../assets/income.svg"
import totalImg from "../../assets/total.svg"
import { Container } from "./styles";

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entrada"/>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="entrada"/>
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="entrada"/>
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}