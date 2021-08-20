// Get the memory8GB button
const memory8GB = document.getElementById('memory8gb');
// Get the memory16GB button
const memory16GB = document.getElementById('memory16gb');

// Get memory cost field
const memoryCost = document.getElementById('memory-cost');

// Get the SSD256GB button
const ssd256GB = document.getElementById('ssd256gb');
// Get the SSD512GB button
const ssd512GB = document.getElementById('ssd512gb');
// Get the SSD1TB button
const ssd1TB = document.getElementById('ssd1tb');

// Get storage cost field
const storageCost = document.getElementById('storage-cost');

// Get the free delivery button
const freeDelivery = document.getElementById('free-delivery');
// Get the charge delivery button
const chargeDelivery = document.getElementById('charge-delivery');

// Get delivery cost field
const deliveryCost = document.getElementById('delivery-cost');

// Get best price field
const bestPriceField = document.getElementById('best-price');
// Get total price field
const total = document.getElementById('total-cost');
// Get grand total field
const grandTotal = document.getElementById('grand-total');


// Total Calculation 
function updateTotal(){
    // Best price
    const bestPrice = bestPriceField.innerText;
    // Total price
    const totalCost = parseFloat(bestPrice) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
    total.innerText = totalCost;
    // Set the grand total
    grandTotal.innerText = totalCost;    
}

// Selection function
function isContain(elem){
    //return is class present
    return elem.classList.contains('selected');
}

//Handle 8GB Memory Button
memory8GB.addEventListener('click', function(){
    if(!isContain(memory8GB)){
        memory8GB.classList.add('selected');
        memory16GB.classList.remove('selected');
    }
    memoryCost.innerText = '0';
    updateTotal();
});

//Handle 16GB Memory Button
memory16GB.addEventListener('click', function(){
    if(!isContain(memory16GB)){
        memory8GB.classList.remove('selected');
        memory16GB.classList.add('selected');
    }
    memoryCost.innerText = '180';
    updateTotal();
});

//Handle SSD256GB Storage Button
ssd256GB.addEventListener('click', function(){
    if(!isContain(ssd256GB)){
        ssd256GB.classList.add('selected');
        ssd512GB.classList.remove('selected');
        ssd1TB.classList.remove('selected');        
    }
    storageCost.innerText = '0';
    updateTotal();
});

//Handle SSD512GB Storage Button
ssd512GB.addEventListener('click', function(){
    if(!isContain(ssd512GB)){
        ssd256GB.classList.remove('selected');
        ssd512GB.classList.add('selected');
        ssd1TB.classList.remove('selected');        
    }
    storageCost.innerText = '100';
    updateTotal();
});

//Handle SSD1TB Storage Button
ssd1TB.addEventListener('click', function(){
    if(!isContain(ssd1TB)){
        ssd256GB.classList.remove('selected');
        ssd512GB.classList.remove('selected');
        ssd1TB.classList.add('selected');        
    }
    storageCost.innerText = '180';
    updateTotal();
});

//Handle Free Delivery Button
freeDelivery.addEventListener('click', function(){
    if(!isContain(freeDelivery)){
        freeDelivery.classList.add('selected');
        chargeDelivery.classList.remove('selected');               
    }
    deliveryCost.innerText = '0';
    updateTotal();
});

//Handle Charge Delivery Button
chargeDelivery.addEventListener('click', function(){
    if(!isContain(chargeDelivery)){
        freeDelivery.classList.remove('selected');
        chargeDelivery.classList.add('selected');               
    }
    deliveryCost.innerText = '20';
    updateTotal();
});


const pomoCode = document.getElementById('pomo-code');
const discountButton = document.getElementById('discount-button');

// Pomo Code Input
pomoCode.addEventListener('keyup', function(event){
    if(event.target.value == 'stevekaku'){
        discountButton.removeAttribute('disabled');
    }
    else{
        discountButton.setAttribute('disabled', true);
    }
});

// Discount after Pomo Code use
discountButton.addEventListener('click', function(){
    const totalCost = parseFloat(total.innerText);
    // 20% discount amount
    const discountAmount = totalCost / 5;
    // Grand total after discount
    grandTotal.innerText = totalCost - discountAmount;
    // Input value after using the pomo code
    pomoCode.value = '';
});