var CSVWrite = /** @class */ (function () {
    function CSVWrite(paymentColumns) {
        this.paymentColumns = paymentColumns;
        this.csv = this.paymentColumns.join(",") + "\n";
    }
    CSVWrite.prototype.save = function () {
    };
    CSVWrite.prototype.addRows = function (payments) {
        var _this = this;
        var csvRows = payments.map(function (payment) { return _this.formatRow(payment); }).join("");
        this.csv += csvRows;
        console.log(this.csv);
    };
    CSVWrite.prototype.formatRow = function (payment) {
        return this.paymentColumns.map(function (col) { return payment[col]; }).join(",") + "\n";
    };
    return CSVWrite;
}());
var file1 = new CSVWrite(["id", "amount", "to", "notes"]); // Removed "base"
file1.addRows([
    { id: 1, amount: 500, from: "myself", to: "Mutalibov", notes: "For birthday gift" },
]);
