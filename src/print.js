function printInit() {
    console.log('***********************');
    console.log('**** Customer Owes ****');
    console.log('***********************');
}

function printDetailsInfo(invoice, outstanding) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`amount: ${invoice.dueDate.toLocaleDateString()}`);
}

function reduceDate(invoice, outstanding) {
    // record due date
    const today = new Date();
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    printDetailsInfo(invoice, outstanding);
}

function printOwing (invoice) {
    let outstanding = 0;
    printInit();

    // calculate outstanding
    for (const o of invoice.borderSpacing) {
        outstanding += o.amount;
    }
    reduceDate(invoice, outstanding);
}
