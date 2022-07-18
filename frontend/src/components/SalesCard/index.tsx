import { useEffect, useState } from "react";
import {
    Container,
    TextInputContainer,
    DateSelector,
    SalesTable,
    ShowHead,
    ShowColumn,
} from "./styles";

import { NotificationButton } from "../NotificationButton";
import { api } from "../../utils/api";
import { Sale } from "../../models/sale";
import { toast } from "react-toastify";

export function SalesCard() {
    const minDate = new Date(new Date().setDate(new Date().getDate() - 365))
    const [dataDe, setDataDe] = useState<Date>(minDate)
    const [dataAte, setDataAte] = useState<Date>(new Date())
    const [sales, setSales] = useState<Sale[]>([])

    async function getData() {
        const min = dataDe.toISOString().split("T")[0];
        const max = dataAte.toISOString().split("T")[0];

        await api.get(`/sales?minDate=${min}&maxDate=${max}`)
            .then((res) => {
                setSales(res.data.content)
            })
    }

    async function sendNotification(id:number) {
        await api.get(`/sales/${id}/notification`)
        .then((res) => {
            toast.info("SMS enviado com sucesso!")
        })
    }

    useEffect(() => {
        getData()
    }, [dataDe, dataAte])

    return (
        <Container>
            <h2>Vendas</h2>
            <div>
                <TextInputContainer>
                    <DateSelector
                        selected={dataDe}
                        onChange={(date: Date) => setDataDe(date)}
                        dateFormat="dd/MM/yyyy"
                    />
                </TextInputContainer>
                <TextInputContainer>
                    <DateSelector
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
                        {
                            sales.map(sale => {
                                return (
                                    <tr key={sale.id}>
                                        <ShowColumn>{sale.id}</ShowColumn>
                                        <td>{new Date(sale.date).toLocaleDateString()}</td>
                                        <td>{sale.sellerName}</td>
                                        <ShowColumn>{sale.visited}</ShowColumn>
                                        <ShowColumn>{sale.deals}</ShowColumn>
                                        <td>R$ {Number(sale.amount).toFixed(2)}</td>
                                        <td>
                                            <div>
                                                <NotificationButton
                                                    onClick={() => sendNotification(sale.id)}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </SalesTable>
            </div>
        </Container>
    )
}