/**
 * TODO: format numbers and add currency.
 */

var FancyPDF = {
		VERSION: '0.0.1'
};

/**
 *
 */
FancyPDF.Header = function(invoice) {

	var logoColumn = {
		width : '*',
		stack : []
	};
	if (invoice.logo) {
		logoColumn.stack.push({
			image : invoice.logo,
			fit : [ 200, 200 ]
		});
	} else {
		logoColumn.stack.push({
			text : ''
		});
	}

	return {
		columns : [ logoColumn, {
			width : '*',
			stack : [ {
				fillColor : '#363636',
				color : '#cccccc',
				margin : [ 116, 0, 0, 0 ],
				table : {
					body : [ [ {
						text : invoice.type,
						font : 'OpenSansBold',
						fontSize : 20,
						bold : true,
						margin : [ 5, 0, 5, 0 ]
					// color : '#363636',
					// fillColor : '#363636',
					// background : '#363636',
					} ], [ {
						text : '# ' + invoice.number,
						margin : [ 5, 0, 5, 0 ]
					} ] ]
				},
				layout : 'noBorders'
			}, {
				margin : [ 0, 6, 0, 0 ],
				text : 'Data wystawienia: ' + invoice.date,
				fontSize : 7
			}, {
				text : 'Data sprzedaży: ' + invoice.delivery_date,
				fontSize : 7
			}, {
				text : 'Termin płatności: ' + invoice.due_date,
				fontSize : 7
			} ],
			alignment : 'right'
		} ],
		// optional space between columns
		columnGap : 10
	};
};

FancyPDF.Organizations = function(invoice) {
	return {
		margin : [ 0, 10, 0, 0 ],
		columns : [ {
			width : '*',
			stack : [ {
				text : "Sprzedawca:",
				bold : true,
				fontSize : 8
			}, {
				text : invoice.seller.name,
				font : 'OpenSansLight',
				fontSize : 12,
			}, {
				text : invoice.seller.details,
				alignment : 'justify',
				fontSize : 8
			}, {
				text : [ 'NIP: ', {
					text : invoice.seller.taxId,
					italics : true
				} ],
				fontSize : 8
			} ]
		}, {
			width : '*',
			stack : [ {
				text : "Nabywca:",
				bold : true,
				fontSize : 8
			}, {
				text : invoice.buyer.name,
				font : 'OpenSansLight',
				fontSize : 12
			}, {
				text : invoice.buyer.details,
				alignment : 'justify',
				fontSize : 8
			}, {
				text : [ 'NIP: ', {
					text : invoice.buyer.taxId,
					italics : true
				} ],
				fontSize : 8
			} ]
		// alignment : 'right'
		} ],
		// optional space between columns
		columnGap : 20
	};
};

/**
 *
 */
FancyPDF.InvoiceTable = function(invoice) {

	var invoiceTableRows = [];
	var itemsCounter = 1;

	var invoiceTableHeader = [ {
		text : 'Lp.',
		style : 'itemsHeader'
	}, {
		text : 'Nazwa towaru lub usługi',
		alignment : 'center',
		style : 'itemsHeader'
	}, {
		text : 'PKWiU',
		style : 'itemsHeader'
	}, {
		text : 'Ilość',
		style : 'itemsHeader'
	}, {
		text : 'Jedn.',
		style : 'itemsHeader'
	} ];

	if (invoice.type && invoice.type === 'Faktura') {

		invoiceTableHeader = invoiceTableHeader.concat([ {
			text : 'Cena jedn.',
			style : 'itemsHeader'
		}, {
			text : 'Wartość',
			style : 'itemsHeader'
		} ]);

	} else {

		invoiceTableHeader = invoiceTableHeader.concat([ {
			text : 'Cena jedn. netto',
			style : 'itemsHeader'
		}, {
			text : 'Wartość netto',
			style : 'itemsHeader'
		}, {
			text : 'Stawka Vat',
			style : 'itemsHeader'
		}, {
			text : 'Wartość Vat',
			style : 'itemsHeader'
		}, {
			text : 'Wartość brutto',
			style : 'itemsHeader'
		} ]);
	}

	var emptyRow = [];
	for (var i = 0; i < invoiceTableHeader.length; i++) {
		emptyRow.push('');
	}

	var widths = [ 'auto', '*' ];
	for (i = 2; i < invoiceTableHeader.length; i++) {
		widths.push('auto');
	}

	invoiceTableRows.push(invoiceTableHeader);
	invoiceTableRows.push(emptyRow);

	var item = {};

	for (i = 0; i < invoice.items.length; i++) {

		item = invoice.items[i];

		var row = [ {
			text : '' + itemsCounter++
		}, {
			text : '' + item.description,
			alignment : 'center'
		}, {
			text : '' + item.pkwiu
		}, {
			text : '' + item.qty
		}, {
			text : '' + item.unit
		}, {
			text : '' + item.unitPrice
		}, {
			text : '' + item.subTotal
		}, {
			text : '' + item.taxRate
		}, {
			text : '' + item.taxValue
		}, {
			text : '' + item.total
		} ];

		invoiceTableRows.push(row);
		invoiceTableRows.push(emptyRow);
	}

	var summaryRow = [ {
		text : 'Razem:',
		alignment : 'right',
		bold : true,
		colSpan : 6
	}, {}, {}, {}, {}, {}, {
		text : '' + invoice.subTotal
	}, {
		text : '-'
	}, {
		text : '' + invoice.totalTax
	}, {
		text : '' + invoice.total,
	} ];

	invoiceTableRows.push(summaryRow);

	var idx = 0;

	for ( var taxIdx in invoice.taxes) {

		var taxInfo = invoice.taxes[taxIdx];

		var taxInfoRow = [ {
			text : (idx === 0) ? 'W tym:' : '',
			alignment : 'right',
			bold : true,
			colSpan : 6
		}, {}, {}, {}, {}, {}, {
			text : '' + taxInfo.subTotal
		}, {
			text : '' + taxInfo.rate
		}, {
			text : '' + taxInfo.taxValue
		}, {
			text : '' + taxInfo.total
		} ];

		invoiceTableRows.push(taxInfoRow);

		idx++;
	}

	return {
		style : 'invoiceTable',
		margin : [ 0, 30, 0, 0 ],
		table : {
			// headers
			headerRows : 1,
			widths : widths,
			body : invoiceTableRows
		},
		layout : {
			row : 0,
			hLineWidth : function(i, node) {
				this.row = i;
				return 0;
			},
			vLineWidth : function(i, node) {
				return 0;
			},
			hLineColor : function(i, node) {
				if (this.row < 2) {
					return '#363636';
				} else {
					return '#E2ECF0';
				}
			},
			vLineColor : function(i, node) {
				if (this.row < 3) {
					return '#363636';
				} else {
					return '#E2ECF0';
				}
			},
			paddingLeft : function(i, node) {
				return 2;
			},
			paddingRight : function(i, node) {
				return 2;
			},
			paddingTop : function(i, node) {
				if (this.row % 2) {
					return 8;
				}
				return 8;
			},
			paddingBottom : function(i, node) {
				if (this.row % 2) {
					return 8;
				}
				return 0;
			}
		}
	};
};

/**
 *
 */

FancyPDF.SummaryAndTerms = function(invoice) {

	return {
		margin : [ 0, 10, 0, 0 ],
		columns : [
				// column 1 peyment method
				{
					width : '*',
					stack : [ {
						fontSize : 6,
						margin : [ 0, 0, 60, 0 ],
						table : {
							widths : [ 45, '*' ],
							body : [
									[ {
										text : 'Sposób zapłaty:',
									}, {
										text : '' + invoice.paymentMethod
									} ],
									[
											{
												text : 'Konto:',
											},
											{
												text : '' + invoice.bank + ' ' + invoice.bank_account,
											} ] ]
						},
						layout : new SimpleTableLayout(0, 0, null, null, 2, 4,
								8, 4)
					} ]
				},
				// column2 - summary table
				{
					width : '*',
					stack : [ {
						style : 'summaryTable',
						alignment : 'right',
						table : {
							widths : [ '*', 100 ],
							body : [ [ {
								text : 'Zapłacono:',
							}, {
								text : '' + invoice.paid
							} ], [ {
								text : 'Do zapłaty:',
							// margin : [ 0, 6, 0, 0 ]
							}, {
								text : '' + invoice.toPay,
								// fontSize : 9,
								bold : true,
							// font : 'OpenSansLight'
							} ], [ {
								text : 'Słownie:'
							}, {
								text : '' + invoice.totalInWords,
								fontSize : 7
							} ], ]
						},
						layout : new SimpleTableLayout(0, 0, null, null, 2, 4,
								8, 4)
					}

					]
				} ],
		// optional space between columns
		columnGap : 10
	};
};

/**
 *
 */
FancyPDF.Signature = function(invoice) {

	var buyer = [];
	if (invoice.buyer.person) {
		buyer = [ new HorizotalLine(200, '#363636', 1, 50), {
			margin : [ 0, 5, 0, 0 ],
			text : ('' + invoice.buyer.person) || '',
		} ];
	} else {
		buyer = [ {
			margin : [ 0, 5, 0, 0 ],
			text : 'Faktura bez podpisu odbiorcy.',
		} ];
	}

	var seller = [ new HorizotalLine(200, '#363636', 1, 50), {
		margin : [ 0, 5, 0, 0 ],
		text : 'Osoba upoważniona do wystawienia faktury VAT'
	}, {
		text : invoice.seller.person || '',
		bold : true
	} ];

	return {
		style : 'signaturesStyle',
		columns : [ {
			width : '*',
			stack : buyer
		}, {
			width : '*',
			stack : seller
		} ],
		columnGap : 10
	};
};

/**
 *
 */
FancyPDF.Content = function(invoice) {
	return [
		  new FancyPDF.Header(invoice),
			new HorizotalLine(515, '#aaaaaa', 1, 0, [ 0, 10, 0, 0 ]),
			new FancyPDF.Organizations(invoice),
			new FancyPDF.InvoiceTable(invoice),
			new FancyPDF.SummaryAndTerms(invoice),
			new FancyPDF.Signature(invoice)
		];
};
/**
 *
 */
FancyPDF.DocumentFooter = [ new HorizotalLine(575, null, 1, 20), {
	text : "http://www.fakturownik.pl",
	margin : [ 20, 4, 20, 0 ], // left, top, right, bottom
	style : 'footerStyle'
} ];

FancyPDF.Document = function(invoice) {

	return {
		// a string or { width: number, height: number }
		pageSize : 'A4',
		// by default we use portrait, you can change it to landscape if you
		// wish
		pageOrientation : 'portrait',
		// [left, top, right, bottom] or [horizontal, vertical] or just a number
		// for
		// equal margins
		pageMargins : [ 40, 40, 40, 20 ],
		background : [],
		content : new FancyPDF.Content(invoice),
		footer : FancyPDF.DocumentFooter,
		header : [],
		styles : {
			invoiceTable : {
				fontSize : 7,
				color : '#333333',
				// background: 'black'
				alignment : 'center',
				fillColor : '#E2ECF0'
			},
			itemsHeader : {
				fillColor : '#363636',
				bold : true,
				// font: 'OpenSansLight',
				color : '#e0e0e0',
				alignment : 'center'
			},
			footerStyle : {
				// background : '#333333',
				// color : '#e0e0e0',
				alignment : 'right',
				fontSize : 6
			},
			summaryTable : {
				fontSize : 7,
				fillColor : '#E2ECF0'
			},
			signaturesStyle : {
				margin : [ 0, 80, 0, 0 ],
				fontSize : 5,
				alignment : 'center'
			}
		},
		defaultStyle : {
			font: 'OpenSans',
		}
	};
};

pdfMake.fonts = {
	Roboto : {
		normal : 'Roboto-Regular.ttf',
		bold : 'Roboto-Medium.ttf',
		italics : 'Roboto-Italic.ttf',
		bolditalics : 'Roboto-Italic.ttf'
	},
	OpenSans : {
		normal : 'OpenSans-Regular.ttf',
		bold : 'OpenSans-Bold.ttf',
		italics : 'OpenSans-Italic.ttf',
		bolditalics : 'OpenSans-BoldItalic.ttf'
	},
	OpenSansBold : {
		normal : 'OpenSans-SemiBold.ttf',
		bold : 'OpenSans-ExtraBold.ttf',
		italics : 'OpenSans-SemiBoldItalic.ttf',
		bolditalics : 'OpenSans-ExtraBoldItalic.ttf'
	},
	OpenSansLight : {
		normal : 'OpenSans-Light.ttf',
		bold : 'OpenSans-Light.ttf',
		italics : 'OpenSans-LightItalic.ttf',
		bolditalics : 'OpenSans-LightItalic.ttf'
	}
};

FancyPDF.create = function(invoice) {
	pdfMake.createPdf(new FancyPDF.Document(invoice)).download('Faktura-' + invoice.number + '.pdf');
};
