import React from "react";
import { Container } from "./styles";
import { Summary } from "../Summary";
import { TransectionsTable } from "../TransectionsTable";

export function Dashboard(){
    return(
        <Container>
            <Summary/>
            <TransectionsTable/>
        </Container>
    )
}