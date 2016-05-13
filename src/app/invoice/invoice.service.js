(function() {

  angular
    .module('fakturownikFront')
    .service('invoiceService', invoiceService);

  /** @ngInject */
  function invoiceService(moment) {
    var self = this;

    self.type = 'Faktura VAT';

    self.items = [];
    self.date = moment().format('L');
    self.delivery_date = moment().format('L');
    self.items.push(new InvoiceItem());
    self.number = '1/' + (new Date().getMonth() + 1) + "/" + (new Date().getFullYear());
    self.seller = {
      name: '',
      details: '',
      taxId: ''
    };
    self.buyer = {
      name: '',
      details: '',
      taxId: ''
    };


    self.addItem = function() {
      self.items.push(new InvoiceItem());
    };

    self.removeItem = function(item) {
      if (self.items.length == 1) {
        return;
      }
      var index = self.items.indexOf(item);
      if (index > -1) {
        self.items.splice(index, 1);
      }
    };

    self.setDueDate = function(days) {
      var d;
      if (angular.isDefined(self.date)) {
        var parts = self.date.split('.');
        d = new Date(parts[2], parts[1] - 1, parts[0]);
      } else {
        d = new Date();
      }
      d.setDate(d.getDate() + days);
      self.due_date = moment(d).format('L');
    };
    self.setDueDate(7);

    self.paymentMethod = 'przelew';
    self.totalTax = 0;
    self.subTotal = 0;
    self.toPay = 0;
    self.paid = 0;
    self.taxes = {};
    self.total = 0;
    self.totalInWords = '';

    self.recalculate = function() {
      angular.forEach(self.items, function(item) {
        item.calcTotal();
      });
      self.calcTotal();
    };

    self.calcPayable = function() {
      self.toPay = self.total - self.payed;
    };

    self.calcTotal = function() {
      var total = 0;
      var totalTax = 0;
      var subTotal = 0;
      var taxes = {};
      angular.forEach(self.items, function(item) {
        total += item.total;
        totalTax += item.taxValue;
        subTotal += item.subTotal;
        var rate = item.taxRate;
        if (angular.isUndefined(taxes[rate])) {
          taxes[rate] = new TaxInfo(rate);
        }
        taxes[rate].add(item.total, item.subTotal, item.taxValue);
      });
      if (self.total !== total) {
        self.totalTax = totalTax;
        self.subTotal = subTotal;
        self.total = total;
        self.taxes = taxes;
        self.toPay = total - self.payed;
      }
      return total;
    };
  }

  function InvoiceItem() {
    this.index = 1;
    this.description = "";
    this.pkwiu = "";
    this.qty = 1;
    this.unit = '';
    this.unitPrice = 0.0;
    this.taxRate = '23';
    this.subTotal = 0.0;
    this.taxValue = 0.0;
    this.total = 0.0;
    var self = this;
    var calculate = function() {
      self.subTotal = self.qty * self.unitPrice;
      if (isNaN(self.taxRate)) {
        self.taxValue = 0;
      } else {
        self.taxValue = self.taxRate / 100 * self.subTotal;
      }
      self.total = self.subTotal + self.taxValue;
      return self.total;
    };
    this.calcTotal = function() {
      return calculate();
    };
  }

  function TaxInfo(rate) {
    this.rate = rate;
    this.total = 0;
    this.subTotal = 0;
    this.taxValue = 0;
    var self = this;
    this.add = function(total, subTotal, taxValue) {
      self.total += total;
      self.subTotal += subTotal;
      self.taxValue += taxValue;
    };
    this.rateInfo = function() {
      return isNaN(self.rate) ? self.rate : self.rate + '%';
    };
  }

})();
