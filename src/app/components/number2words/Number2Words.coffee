class Number2Words
  minus: 'minus'
  exponent:
    0: ['','','']
    3: ['tysiąc','tysiące','tysięcy']
    6: ['milion','miliony','milionów']
    9: ['miliard','miliardy','miliardów']
    12: ['bilion','biliony','bilionów']
    15: ['biliard','biliardy','biliardów']
    18: ['trylion','tryliony','trylionów']
    21: ['tryliard','tryliardy','tryliardów']
    24: ['kwadrylion','kwadryliony','kwadrylionów']
    27: ['kwadryliard','kwadryliardy','kwadryliardów']
    30: ['kwintylion','kwintyliony','kwintylionów']
    33: ['kwintyliiard','kwintyliardy','kwintyliardów']
    36: ['sekstylion','sekstyliony','sekstylionów']
    39: ['sekstyliard','sekstyliardy','sekstyliardów']
    42: ['septylion','septyliony','septylionów']
    45: ['septyliard','septyliardy','septyliardów']
    48: ['oktylion','oktyliony','oktylionów']
    51: ['oktyliard','oktyliardy','oktyliardów']
    54: ['nonylion','nonyliony','nonylionów']
    57: ['nonyliard','nonyliardy','nonyliardów']
    60: ['decylion','decyliony','decylionów']
    63: ['decyliard','decyliardy','decyliardów']
    100: ['centylion','centyliony','centylionów']
    103: ['centyliard','centyliardy','centyliardów']
    120: ['wicylion','wicylion','wicylion']
    123: ['wicyliard','wicyliardy','wicyliardów']
    180: ['trycylion','trycylion','trycylion']
    183: ['trycyliard','trycyliardy','trycyliardów']
    240: ['kwadragilion','kwadragilion','kwadragilion']
    243: ['kwadragiliard','kwadragiliardy','kwadragiliardów']
    300: ['kwinkwagilion','kwinkwagilion','kwinkwagilion']
    303: ['kwinkwagiliard','kwinkwagiliardy','kwinkwagiliardów']
    360: ['seskwilion','seskwilion','seskwilion']
    363: ['seskwiliard','seskwiliardy','seskwiliardów']
    420: ['septagilion','septagilion','septagilion']
    423: ['septagiliard','septagiliardy','septagiliardów']
    480: ['oktogilion','oktogilion','oktogilion']
    483: ['oktogiliard','oktogiliardy','oktogiliardów']
    540: ['nonagilion','nonagilion','nonagilion']
    543: ['nonagiliard','nonagiliardy','nonagiliardów']
    600: ['centylion','centyliony','centylionów']
    603: ['centyliard','centyliardy','centyliardów']
    6000018: ['milinilitrylion','milinilitryliony','milinilitrylionów']

  digits: ['zero', 'jeden', 'dwa', 'trzy', 'cztery',
  'pięć', 'sześć', 'siedem', 'osiem', 'dziewięć']

  sep: ' '

  currencyNames:
    'ALL': [['lek','leki','leków'], ['quindarka','quindarki','quindarek']],
    'AUD': [['dolar australijski', 'dolary australijskie', 'dolarów australijskich'], ['cent', 'centy', 'centów']],
    'BAM': [['marka','marki','marek'], ['fenig','fenigi','fenigów']],
    'BGN': [['lew','lewy','lew'], ['stotinka','stotinki','stotinek']],
    'BRL': [['real','reale','realów'], ['centavos','centavos','centavos']],
    'BYR': [['rubel','ruble','rubli'], ['kopiejka','kopiejki','kopiejek']],
    'CAD': [['dolar kanadyjski', 'dolary kanadyjskie', 'dolarów kanadyjskich'], ['cent', 'centy', 'centów']],
    'CHF': [['frank szwajcarski','franki szwajcarskie','franków szwajcarskich'], ['rapp','rappy','rappów']],
    'CYP': [['funt cypryjski','funty cypryjskie','funtów cypryjskich'], ['cent', 'centy', 'centów']],
    'CZK': [['korona czeska','korony czeskie','koron czeskich'], ['halerz','halerze','halerzy']],
    'DKK': [['korona duńska','korony duńskie','koron duńskich'], ['ore','ore','ore']],
    'EEK': [['korona estońska','korony estońskie','koron estońskich'], ['senti','senti','senti']],
    'EUR': [['euro', 'euro', 'euro'], ['eurocent', 'eurocenty', 'eurocentów']],
    'GBP': [['funt szterling','funty szterlingi','funtów szterlingów'], ['pens','pensy','pensów']],
    'HKD': [['dolar Hongkongu','dolary Hongkongu','dolarów Hongkongu'], ['cent', 'centy', 'centów']],
    'HRK': [['kuna','kuny','kun'], ['lipa','lipy','lip']],
    'HUF': [['forint','forinty','forintów'], ['filler','fillery','fillerów']],
    'ILS': [['nowy szekel','nowe szekele','nowych szekeli'], ['agora','agory','agorot']],
    'ISK': [['korona islandzka','korony islandzkie','koron islandzkich'], ['aurar','aurar','aurar']],
    'JPY': [['jen','jeny','jenów'], ['sen','seny','senów']],
    'LTL': [['lit','lity','litów'], ['cent', 'centy', 'centów']],
    'LVL': [['łat','łaty','łatów'], ['sentim','sentimy','sentimów']],
    'MKD': [['denar','denary','denarów'], ['deni','deni','deni']],
    'MTL': [['lira maltańska','liry maltańskie','lir maltańskich'], ['centym','centymy','centymów']],
    'NOK': [['korona norweska','korony norweskie','koron norweskich'], ['oere','oere','oere']],
    'PLN': [['złoty', 'złote', 'złotych'], ['grosz', 'grosze', 'groszy']],
    'ROL': [['lej','leje','lei'], ['bani','bani','bani']],
    'RUB': [['rubel','ruble','rubli'], ['kopiejka','kopiejki','kopiejek']],
    'SEK': [['korona szwedzka','korony szwedzkie','koron szweckich'], ['oere','oere','oere']],
    'SIT': [['tolar','tolary','tolarów'], ['stotinia','stotinie','stotini']],
    'SKK': [['korona słowacka','korony słowackie','koron słowackich'], ['halerz','halerze','halerzy']],
    'TRL': [['lira turecka','liry tureckie','lir tureckich'], ['kurusza','kurysze','kuruszy']],
    'UAH': [['hrywna','hrywna','hrywna'], ['cent', 'centy', 'centów']],
    'USD': [['dolar','dolary','dolarów'], ['cent', 'centy', 'centów']],
    'YUM': [['dinar','dinary','dinarów'], ['para','para','para']],
    'ZAR': [['rand','randy','randów'], ['cent', 'centy', 'centów']]


  defaultCurrency: 'PLN'

  constructor: () ->

  toWords: (num, power = 0, powsuffix = '') ->
    ret = ''
    num = new String(num)

    #  add a @minus sign
    if num.substr(0,1) == '-'
      ret = "#{@sep}#{@minus}"
      num = num.substr(1)

    # // strip excessive zero signs and spaces
    num = num.trim()
    num = num.replace(/^0+/, '')

    if num.length > 3
      p = curp = maxp = num.length-1
      while p > 0
        #  check for highest power
        if @exponent.hasOwnProperty(p)
          #  send substr from curp to p
          snum = num.substr(maxp - curp, curp - p + 1)
          snum = snum.replace(/^0+/, '')
          if (snum != '')
            cursuffix = @exponent[power][@exponent[power].length-1]
            if (powsuffix != '')
              cursuffix = cursuffix + @sep + powsuffix

            ret = ret + @toWords(snum, p, cursuffix)
          curp = p - 1
        p--

      num = num.substr(maxp - curp, curp - p + 1)
      if num == 0
        ret
    else if num == 0 || num == ''
      return "#{@sep}#{@digits[0]}"

    h = t = d = 0

    # coffescript cant handle switch without breaks
    `
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
    }`

    switch h
      when 9
        ret = ret + @sep + 'dziewięćset'
      when 8
        ret = ret + @sep + 'osiemset'
      when 7
        ret = ret + @sep + 'siedemset'
      when 6
        ret = ret + @sep + 'sześćset'
      when 5
        ret = ret + @sep + 'pięćset'
      when 4
        ret = ret + @sep + 'czterysta'
      when 3
        ret = ret + @sep + 'trzysta'
      when 2
        ret = ret + @sep + 'dwieście'
      when 1
        ret = ret + @sep + 'sto'

    switch t
      when 9, 8, 7, 6, 5
        ret = ret + @sep + @digits[t] + 'dziesiąt'
      when 4
        ret = ret + @sep + 'czterdzieści'
      when 3
        ret = ret + @sep + 'trzydzieści'
      when 2
        ret = ret + @sep + 'dwadzieścia'
      when 1
        switch d
          when 0
            ret = ret + @sep + 'dziesięć'
          when 1
            ret = ret + @sep + 'jedenaście'
          when 2, 3, 7, 8
            ret = ret + @sep + @digits[d] + 'naście'
          when 4
            ret = ret + @sep + 'czternaście'
          when 5
            ret = ret + @sep + 'piętnaście'
          when 6
            ret = ret + @sep + 'szesnaście'
          when 9
            ret = ret + @sep + 'dziewiętnaście'

    if t != 1 && d > 0
      ret = ret + @sep + @digits[d]

    if t == 1
      d = 0

    if ( h + t ) > 0 && d == 1
      d = 0

    if power > 0
      if @exponent.hasOwnProperty(power)
        lev = @exponent[power]

      if !lev || !Array.isArray lev
        return null

      switch d
        when 1
          suf = lev[0]
        when 2, 3, 4
          suf = lev[1]
        when 0, 5, 6, 7, 8, 9
          suf = lev[2]

      ret = ret + @sep + suf

    if powsuffix != ''
      ret = ret + @sep + powsuffix

    return ret

  toCurrencyWords: ($number, $currency = "pln", $convertFraction = true) ->

    $number = Math.round($number * 100) / 100
    numberParts = new String($number).split(".")
    $decimal = numberParts[0] || "0"
    $fraction = numberParts[1] || null
    @_toCurrencyWords($decimal, $fraction, $currency, $convertFraction)


  _toCurrencyWords: ($decimal, $fraction = null, currency = "pln", convertFraction = true) ->

    currency = currency.toUpperCase()

    if !@currencyNames.hasOwnProperty(currency)
      currency = @defaultCurrency

    currNames = @currencyNames[currency]

    $decimal = "0" if !$decimal

    ret  = @toWords($decimal)
    ret = ret.trim() if ret
    lev  = @getNumLevel($decimal)
    ret = ret + @sep + currNames[0][lev]

    if $fraction
      if convertFraction
        ret = ret + @sep + @toWords($fraction)
      else
        ret = ret + @sep + $fraction
      lev  = @getNumLevel($fraction)
      ret = ret + @sep  + currNames[1][lev]

    return ret

  getNumLevel: (num) ->

    return 0 unless num

    if num.length > 3
      num = num.substr(-3);

    num = parseInt(num)

    $h = $t = $d = $lev = 0;

    `switch (num.length) {
      case 3:
        $h = parseInt(num.substr( -3, 1));

      case 2:
        $t = parseInt(num.substr(-2, 1));

      case 1:
        $d = parseInt(num.substr(-1, 1));
      break;

      case 0:
        return 0;
    }`

    if $t == 1
      $d = 0;

    if (( $h + $t ) > 0 && $d == 1)
      $d = 0;

    switch $d
      when 1
        $lev = 0;
      when 2,3,4
        $lev = 1;
      else
        $lev = 2;

    $lev
