type PaymentColumn = ("id" | "amount" | "to" | "notes")[];

interface PaymentMethod {
    id: number;
    amount: number;
    from: string;
    to: string;
    notes: string;
}

class CSVWrite {
    constructor(private paymentColumns: PaymentColumn) {
        this.csv = this.paymentColumns.join(",") + "\n";
    }

    private csv: string;

    save() {
    }

    addRows(payments: PaymentMethod[]) {
        const csvRows = payments.map((payment) => this.formatRow(payment)).join("");
        this.csv += csvRows;
        console.log(this.csv);
    }

    private formatRow(payment: PaymentMethod): string {
        return this.paymentColumns.map((col) => payment[col]).join(",") + "\n";
    }
}

const file1 = new CSVWrite(["id", "amount", "to", "notes"]); // Removed "base"

file1.addRows([
    { id: 1, amount: 500, from: "myself", to: "Mutalibov", notes: "For birthday gift" },
]);
