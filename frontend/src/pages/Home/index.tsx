import { SalesCard } from "../../components/SalesCard";
import { Container, Sales } from "./styles";

export function Home(){
    return(
        <Container>
            <Sales>
                <SalesCard />
            </Sales>
        </Container>
    )
}