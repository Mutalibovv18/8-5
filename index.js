var CSVWriter = /** @class */ (function () {
    function CSVWriter(PaymentColumn) {
        this.PaymentColumn = PaymentColumn;
        this.cvs = PaymentColumn.join(",") + "\n";
    }
    CSVWriter.prototype.save = function () { };
    CSVWriter.prototype.addRows = function (payments) {
        var _this = this;
        var cvs = payments.map(function (payment) { return _this.formatRow(payment); }).join("");
        this.cvs += cvs;
        console.log(this.cvs);
    };
    CSVWriter.prototype.formatRow = function (payment) {
        return this.PaymentColumn.map(function (col) { return payment[col]; }).join(",") + "\n";
    };
    return CSVWriter;
}());
var file1 = new CSVWriter(["id", "amount", "notes", "to"]);
file1.addRows([
    { id: 1, amount: 9000, notes: "for breakfast", to: "Mutalibov" },
    { id: 2, amount: 1000, notes: "for dinner", to: "Zuxriddin" },
]);
