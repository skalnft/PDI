class Moeda {
    code!: string;
    codein!: string;
    name!: string;
    high!: number;
    low!: number;
    varBid!: number;
    pctChange!: number;
    bid!: number;
    ask!: number;
    timestamp!: number;
    create_date!: Date;
}

export class USDBRL extends Moeda{ }
