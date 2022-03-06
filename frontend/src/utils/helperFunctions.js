/**
 * Here we will write, all types of helper functions, that are need all app
 */
const helperFunctions = {};

/**
 * From a date string, we formatting it to DD-MM-YYYY
 */
helperFunctions.formatDate = (dateStr) => {
    if(!dateStr) { return '' } // if there is no value pass, then returning empty string.
    const d = new Date(dateStr),
        dateIsoFormate = d.toISOString().slice(0,10),
        splitDate = dateIsoFormate.split('-'),
        year = splitDate[0],
        month = splitDate[1],
        day = splitDate[2];

    let formatedDate = `${day}-${month}-${year}`;
    return formatedDate; 
}

/**
 * Format Price to Baht
 */
 helperFunctions.formatPriceToBaht = (price) => {
    if(!price) { return '' } // if there is no value pass, then returning empty string.
    const formattedPrice = new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(price);

    return formattedPrice;
}

export { helperFunctions };