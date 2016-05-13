var Number2Words;

Number2Words = (function() {
  Number2Words.prototype.minus = 'minus';

  Number2Words.prototype.exponent = {
    0: ['', '', ''],
    3: ['tysiąc', 'tysiące', 'tysięcy'],
    6: ['milion', 'miliony', 'milionów'],
    9: ['miliard', 'miliardy', 'miliardów'],
    12: ['bilion', 'biliony', 'bilionów'],
    15: ['biliard', 'biliardy', 'biliardów'],
    18: ['trylion', 'tryliony', 'trylionów'],
    21: ['tryliard', 'tryliardy', 'tryliardów'],
    24: ['kwadrylion', 'kwadryliony', 'kwadrylionów'],
    27: ['kwadryliard', 'kwadryliardy', 'kwadryliardów'],
    30: ['kwintylion', 'kwintyliony', 'kwintylionów'],
    33: ['kwintyliiard', 'kwintyliardy', 'kwintyliardów'],
    36: ['sekstylion', 'sekstyliony', 'sekstylionów'],
    39: ['sekstyliard', 'sekstyliardy', 'sekstyliardów'],
    42: ['septylion', 'septyliony', 'septylionów'],
    45: ['septyliard', 'septyliardy', 'septyliardów'],
    48: ['oktylion', 'oktyliony', 'oktylionów'],
    51: ['oktyliard', 'oktyliardy', 'oktyliardów'],
    54: ['nonylion', 'nonyliony', 'nonylionów'],
    57: ['nonyliard', 'nonyliardy', 'nonyliardów'],
    60: ['decylion', 'decyliony', 'decylionów'],
    63: ['decyliard', 'decyliardy', 'decyliardów'],
    100: ['centylion', 'centyliony', 'centylionów'],
    103: ['centyliard', 'centyliardy', 'centyliardów'],
    120: ['wicylion', 'wicylion', 'wicylion'],
    123: ['wicyliard', 'wicyliardy', 'wicyliardów'],
    180: ['trycylion', 'trycylion', 'trycylion'],
    183: ['trycyliard', 'trycyliardy', 'trycyliardów'],
    240: ['kwadragilion', 'kwadragilion', 'kwadragilion'],
    243: ['kwadragiliard', 'kwadragiliardy', 'kwadragiliardów'],
    300: ['kwinkwagilion', 'kwinkwagilion', 'kwinkwagilion'],
    303: ['kwinkwagiliard', 'kwinkwagiliardy', 'kwinkwagiliardów'],
    360: ['seskwilion', 'seskwilion', 'seskwilion'],
    363: ['seskwiliard', 'seskwiliardy', 'seskwiliardów'],
    420: ['septagilion', 'septagilion', 'septagilion'],
    423: ['septagiliard', 'septagiliardy', 'septagiliardów'],
    480: ['oktogilion', 'oktogilion', 'oktogilion'],
    483: ['oktogiliard', 'oktogiliardy', 'oktogiliardów'],
    540: ['nonagilion', 'nonagilion', 'nonagilion'],
    543: ['nonagiliard', 'nonagiliardy', 'nonagiliardów'],
    600: ['centylion', 'centyliony', 'centylionów'],
    603: ['centyliard', 'centyliardy', 'centyliardów'],
    6000018: ['milinilitrylion', 'milinilitryliony', 'milinilitrylionów']
  };

  Number2Words.prototype.digits = ['zero', 'jeden', 'dwa', 'trzy', 'cztery', 'pięć', 'sześć', 'siedem', 'osiem', 'dziewięć'];

  Number2Words.prototype.sep = ' ';

  Number2Words.prototype.currencyNames = {
    'ALL': [['lek', 'leki', 'leków'], ['quindarka', 'quindarki', 'quindarek']],
    'AUD': [['dolar australijski', 'dolary australijskie', 'dolarów australijskich'], ['cent', 'centy', 'centów']],
    'BAM': [['marka', 'marki', 'marek'], ['fenig', 'fenigi', 'fenigów']],
    'BGN': [['lew', 'lewy', 'lew'], ['stotinka', 'stotinki', 'stotinek']],
    'BRL': [['real', 'reale', 'realów'], ['centavos', 'centavos', 'centavos']],
    'BYR': [['rubel', 'ruble', 'rubli'], ['kopiejka', 'kopiejki', 'kopiejek']],
    'CAD': [['dolar kanadyjski', 'dolary kanadyjskie', 'dolarów kanadyjskich'], ['cent', 'centy', 'centów']],
    'CHF': [['frank szwajcarski', 'franki szwajcarskie', 'franków szwajcarskich'], ['rapp', 'rappy', 'rappów']],
    'CYP': [['funt cypryjski', 'funty cypryjskie', 'funtów cypryjskich'], ['cent', 'centy', 'centów']],
    'CZK': [['korona czeska', 'korony czeskie', 'koron czeskich'], ['halerz', 'halerze', 'halerzy']],
    'DKK': [['korona duńska', 'korony duńskie', 'koron duńskich'], ['ore', 'ore', 'ore']],
    'EEK': [['korona estońska', 'korony estońskie', 'koron estońskich'], ['senti', 'senti', 'senti']],
    'EUR': [['euro', 'euro', 'euro'], ['eurocent', 'eurocenty', 'eurocentów']],
    'GBP': [['funt szterling', 'funty szterlingi', 'funtów szterlingów'], ['pens', 'pensy', 'pensów']],
    'HKD': [['dolar Hongkongu', 'dolary Hongkongu', 'dolarów Hongkongu'], ['cent', 'centy', 'centów']],
    'HRK': [['kuna', 'kuny', 'kun'], ['lipa', 'lipy', 'lip']],
    'HUF': [['forint', 'forinty', 'forintów'], ['filler', 'fillery', 'fillerów']],
    'ILS': [['nowy szekel', 'nowe szekele', 'nowych szekeli'], ['agora', 'agory', 'agorot']],
    'ISK': [['korona islandzka', 'korony islandzkie', 'koron islandzkich'], ['aurar', 'aurar', 'aurar']],
    'JPY': [['jen', 'jeny', 'jenów'], ['sen', 'seny', 'senów']],
    'LTL': [['lit', 'lity', 'litów'], ['cent', 'centy', 'centów']],
    'LVL': [['łat', 'łaty', 'łatów'], ['sentim', 'sentimy', 'sentimów']],
    'MKD': [['denar', 'denary', 'denarów'], ['deni', 'deni', 'deni']],
    'MTL': [['lira maltańska', 'liry maltańskie', 'lir maltańskich'], ['centym', 'centymy', 'centymów']],
    'NOK': [['korona norweska', 'korony norweskie', 'koron norweskich'], ['oere', 'oere', 'oere']],
    'PLN': [['złoty', 'złote', 'złotych'], ['grosz', 'grosze', 'groszy']],
    'ROL': [['lej', 'leje', 'lei'], ['bani', 'bani', 'bani']],
    'RUB': [['rubel', 'ruble', 'rubli'], ['kopiejka', 'kopiejki', 'kopiejek']],
    'SEK': [['korona szwedzka', 'korony szwedzkie', 'koron szweckich'], ['oere', 'oere', 'oere']],
    'SIT': [['tolar', 'tolary', 'tolarów'], ['stotinia', 'stotinie', 'stotini']],
    'SKK': [['korona słowacka', 'korony słowackie', 'koron słowackich'], ['halerz', 'halerze', 'halerzy']],
    'TRL': [['lira turecka', 'liry tureckie', 'lir tureckich'], ['kurusza', 'kurysze', 'kuruszy']],
    'UAH': [['hrywna', 'hrywna', 'hrywna'], ['cent', 'centy', 'centów']],
    'USD': [['dolar', 'dolary', 'dolarów'], ['cent', 'centy', 'centów']],
    'YUM': [['dinar', 'dinary', 'dinarów'], ['para', 'para', 'para']],
    'ZAR': [['rand', 'randy', 'randów'], ['cent', 'centy', 'centów']]
  };

  Number2Words.prototype.defaultCurrency = 'PLN';

  function Number2Words() {}

  Number2Words.prototype.toWords = function(num, power, powsuffix) {
    var curp, cursuffix, d, h, lev, maxp, p, ret, snum, suf, t;
    if (power == null) {
      power = 0;
    }
    if (powsuffix == null) {
      powsuffix = '';
    }
    ret = '';
    num = new String(num);
    if (num.substr(0, 1) === '-') {
      ret = "" + this.sep + this.minus;
      num = num.substr(1);
    }
    num = num.trim();
    num = num.replace(/^0+/, '');
    if (num.length > 3) {
      p = curp = maxp = num.length - 1;
      while (p > 0) {
        if (this.exponent.hasOwnProperty(p)) {
          snum = num.substr(maxp - curp, curp - p + 1);
          snum = snum.replace(/^0+/, '');
          if (snum !== '') {
            cursuffix = this.exponent[power][this.exponent[power].length - 1];
            if (powsuffix !== '') {
              cursuffix = cursuffix + this.sep + powsuffix;
            }
            ret = ret + this.toWords(snum, p, cursuffix);
          }
          curp = p - 1;
        }
        p--;
      }
      num = num.substr(maxp - curp, curp - p + 1);
      if (num === 0) {
        ret;
      }
    } else if (num === 0 || num === '') {
      return "" + this.sep + this.digits[0];
    }
    h = t = d = 0;

    switch (num.length) {
      case 3:
        h = parseInt(num.substr(-3, 1));
      case 2:
        t = parseInt(num.substr(-2, 1));
      case 1:
        d = parseInt(num.substr( -1, 1));
        break;
      case 0:
        return;
    };
    switch (h) {
      case 9:
        ret = ret + this.sep + 'dziewięćset';
        break;
      case 8:
        ret = ret + this.sep + 'osiemset';
        break;
      case 7:
        ret = ret + this.sep + 'siedemset';
        break;
      case 6:
        ret = ret + this.sep + 'sześćset';
        break;
      case 5:
        ret = ret + this.sep + 'pięćset';
        break;
      case 4:
        ret = ret + this.sep + 'czterysta';
        break;
      case 3:
        ret = ret + this.sep + 'trzysta';
        break;
      case 2:
        ret = ret + this.sep + 'dwieście';
        break;
      case 1:
        ret = ret + this.sep + 'sto';
    }
    switch (t) {
      case 9:
      case 8:
      case 7:
      case 6:
      case 5:
        ret = ret + this.sep + this.digits[t] + 'dziesiąt';
        break;
      case 4:
        ret = ret + this.sep + 'czterdzieści';
        break;
      case 3:
        ret = ret + this.sep + 'trzydzieści';
        break;
      case 2:
        ret = ret + this.sep + 'dwadzieścia';
        break;
      case 1:
        switch (d) {
          case 0:
            ret = ret + this.sep + 'dziesięć';
            break;
          case 1:
            ret = ret + this.sep + 'jedenaście';
            break;
          case 2:
          case 3:
          case 7:
          case 8:
            ret = ret + this.sep + this.digits[d] + 'naście';
            break;
          case 4:
            ret = ret + this.sep + 'czternaście';
            break;
          case 5:
            ret = ret + this.sep + 'piętnaście';
            break;
          case 6:
            ret = ret + this.sep + 'szesnaście';
            break;
          case 9:
            ret = ret + this.sep + 'dziewiętnaście';
        }
    }
    if (t !== 1 && d > 0) {
      ret = ret + this.sep + this.digits[d];
    }
    if (t === 1) {
      d = 0;
    }
    if ((h + t) > 0 && d === 1) {
      d = 0;
    }
    if (power > 0) {
      if (this.exponent.hasOwnProperty(power)) {
        lev = this.exponent[power];
      }
      if (!lev || !Array.isArray(lev)) {
        return null;
      }
      switch (d) {
        case 1:
          suf = lev[0];
          break;
        case 2:
        case 3:
        case 4:
          suf = lev[1];
          break;
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          suf = lev[2];
      }
      ret = ret + this.sep + suf;
    }
    if (powsuffix !== '') {
      ret = ret + this.sep + powsuffix;
    }
    return ret;
  };

  Number2Words.prototype.toCurrencyWords = function($number, $currency, $convertFraction) {
    var $decimal, $fraction, numberParts;
    if ($currency == null) {
      $currency = "pln";
    }
    if ($convertFraction == null) {
      $convertFraction = true;
    }
    $number = Math.round($number * 100) / 100;
    numberParts = new String($number).split(".");
    $decimal = numberParts[0] || "0";
    $fraction = numberParts[1] || null;
    return this._toCurrencyWords($decimal, $fraction, $currency, $convertFraction);
  };

  Number2Words.prototype._toCurrencyWords = function($decimal, $fraction, currency, convertFraction) {
    var currNames, lev, ret;
    if ($fraction == null) {
      $fraction = null;
    }
    if (currency == null) {
      currency = "pln";
    }
    if (convertFraction == null) {
      convertFraction = true;
    }
    currency = currency.toUpperCase();
    if (!this.currencyNames.hasOwnProperty(currency)) {
      currency = this.defaultCurrency;
    }
    currNames = this.currencyNames[currency];
    if (!$decimal) {
      $decimal = "0";
    }
    ret = this.toWords($decimal);
    if (ret) {
      ret = ret.trim();
    }
    lev = this.getNumLevel($decimal);
    ret = ret + this.sep + currNames[0][lev];
    if ($fraction) {
      if (convertFraction) {
        ret = ret + this.sep + this.toWords($fraction);
      } else {
        ret = ret + this.sep + $fraction;
      }
      lev = this.getNumLevel($fraction);
      ret = ret + this.sep + currNames[1][lev];
    }
    return ret;
  };

  Number2Words.prototype.getNumLevel = function(num) {
    var $d, $h, $lev, $t;
    if (!num) {
      return 0;
    }
    if (num.length > 3) {
      num = num.substr(-3);
    }
    num = parseInt(num);
    $h = $t = $d = $lev = 0;
    switch (num.length) {
      case 3:
        $h = parseInt(num.substr( -3, 1));

      case 2:
        $t = parseInt(num.substr(-2, 1));

      case 1:
        $d = parseInt(num.substr(-1, 1));
      break;

      case 0:
        return 0;
    }
    if ($t === 1) {
      $d = 0;
    }
    if (($h + $t) > 0 && $d === 1) {
      $d = 0;
    }
    switch ($d) {
      case 1:
        $lev = 0;
        break;
      case 2:
      case 3:
      case 4:
        $lev = 1;
        break;
      default:
        $lev = 2;
    }
    return $lev;
  };

  return Number2Words;

})();


(function() {
  'use strict';

  angular
    .module('fakturownikFront')
    .service('number2Words', Number2Words);

})();
