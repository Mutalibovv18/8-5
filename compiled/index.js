"use strict";
class CSVWrite {
    constructor(paymentColumns) {
        this.paymentColumns = paymentColumns;
        this.csv = this.paymentColumns.join(",") + "\n";
    }
    save() {
    }
    addRows(payments) {
        const csvRows = payments.map((payment) => this.formatRow(payment)).join("");
        this.csv += csvRows;
        console.log(this.csv);
    }
    formatRow(payment) {
        return this.paymentColumns.map((col) => payment[col]).join(",") + "\n";
    }
}
const file1 = new CSVWrite(["id", "amount", "to", "notes"]);
file1.addRows([
    { id: 1, amount: 500, from: "o'zim", to: "Hadyatillo", notes: "For iftorlikka" },
]);
