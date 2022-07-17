import { useState } from "react";
import {
    Container,
    TextInputContainer,
    Date,
    SalesTable,
    ShowHead,
    ShowColumn,
} from "./styles";

import { NotificationButton } from "../NotificationButton";

export function SalesCard() {
    const [dataDe, setDataDe] = useState<Date>()
    const [dataAte, setDataAte] = useState<Date>()

    return (
        <Container>
            <h2>Vendas</h2>
            <div>
                <TextInputContainer>
                    <Date
                        selected={dataDe}
                        onChange={(date: Date) => setDataDe(date)}
                        dateFormat="dd/MM/yyyy"
                    />
                </TextInputContainer>
                <TextInputContainer>
                    <Date
                        selected={dataAte}
                        onChange={(date: Date) => setDataAte(date)}
                        dateFormat="dd/MM/yyyy"
                    />
                </TextInputContainer>
            </div>
            <div>
                <SalesTable>
                    <thead>
                        <tr>
                            <ShowHead>ID</ShowHead>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <ShowHead>Visitas</ShowHead>
                            <ShowHead>Vendas</ShowHead>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <ShowColumn>#341</ShowColumn>
                            <td>08/07/2022</td>
                            <td>Anakin</td>
                            <ShowColumn>15</ShowColumn>
                            <ShowColumn>11</ShowColumn>
                            <td>R$ 55.300,00</td>
                            <td>
                                <div>
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <ShowColumn>#342</ShowColumn>
                            <td>08/07/2022</td>
                            <td>Anakin</td>
                            <ShowColumn>12</ShowColumn>
                            <ShowColumn>09</ShowColumn>
                            <td>R$ 55.300,00</td>
                            <td>
                                <div>
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <ShowColumn>#343</ShowColumn>
                            <td>08/07/2022</td>
                            <td>Anakin</td>
                            <ShowColumn>01</ShowColumn>
                            <ShowColumn>03</ShowColumn>
                            <td>R$ 55.300,00</td>
                            <td>
                                <div>
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </SalesTable>
            </div>
        </Container>
    )
}