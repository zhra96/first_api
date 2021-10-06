import fetch from 'node-fetch'
async function convertCurrency(){
    const repsonse = await fetch('https://app.exchangerate-api.com/v6/1d4227fd71b5609a877cc847/latest/USD');
    const data = await repsonse.json();
    const conv_rate = data['conversion_rates'];
    const pkr_value = data['conversion_rates']["PKR"];
    let sortable = [];
    for (let vehicle in conv_rate) {
        sortable.push([vehicle,conv_rate[vehicle]]);  
    }
    sortable.sort(function(a,b){
        console.log(a[1]-b[1]);

    })
    const entries = Object.values(conv_rate);
    console.log(entries.sort((f,s)=>s.length - f.length));
}

console.log(convertCurrency());