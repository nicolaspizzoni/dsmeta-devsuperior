export type Sale = {
    amount: number;
    date: string;
    deals: number;
    id: number;
    sellerName: string;
    visited: number;
}

export type NotiButton = {
    onClick: () => void;
}