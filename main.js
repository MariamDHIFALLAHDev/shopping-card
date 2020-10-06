// Frist Item
// 1st Button
const plusIcon = document.getElementById("plusIcon");
plusIcon.addEventListener("click", function(){
    const number = document.getElementById("number").value++;
    // add mobail value
    const incrimentAmount = document.getElementById("incrimentAmount").innerText;
    console.log('**********');
    const incrimentAmountNumber = parseFloat(incrimentAmount);
    const incrimentFirstAmount = incrimentAmountNumber + 1219;

    document.getElementById("incrimentAmount").innerText = incrimentFirstAmount;
    // add Mobail netTotal value
    const netTotal = document.getElementById("netTotal").innerText;
    const netTotalNumber = parseFloat(netTotal);
    const netTotalAmount = netTotalNumber + 1219;



    document.getElementById("netTotal").innerText = netTotalAmount;
    //Add  Mobail value grandTotal
    const grandTotal = document.getElementById("grandTotal").innerText;
    const grandTotalNumber = parseFloat(grandTotal);
    const grandTotalAmount = grandTotalNumber + 1219;
    document.getElementById("grandTotal").innerText = grandTotalAmount;

    $(".liketoggle").click(function() {
        $(this).toggleClass("like unlike");
        $(this).find("span").text(function(i, v) {
          return v === 'Like' ? 'Unlike' : 'Like'
        })
      });


})
// 2nd Button
const minusIcon = document.getElementById("minusIcon");
minusIcon.addEventListener("click", function(){
    const number = document.getElementById("number").value;
    if (number > 0) {
        document.getElementById("number").value--;
        // munis Mobail value
        const incrimentAmount = document.getElementById("incrimentAmount").innerText;
        const incrimentAmountNumber = parseFloat(incrimentAmount);
        const incrimentFirstAmount = incrimentAmountNumber -1219;

        document.getElementById("incrimentAmount").innerText = incrimentFirstAmount;
        // munis Mobail value NetTotal
        const netTotal = document.getElementById("netTotal").innerText;
        const netTotalNumber = parseFloat(netTotal);
        const netTotalAmount = netTotalNumber - 1219;

        document.getElementById("netTotal").innerText = netTotalAmount;
        //Munis Mobail value grandTotal
        const grandTotal = document.getElementById("grandTotal").innerText;
        const grandTotalNumber = parseFloat(grandTotal);
        const grandTotalAmount = grandTotalNumber - 1219;
        document.getElementById("grandTotal").innerText = grandTotalAmount;       
    }
  
})

// Last Item

// 1st Button
const plusIcon2 = document.getElementById("plusIcon2");
plusIcon2.addEventListener("click", function(){
    const number2 = document.getElementById("number2").value++;
    console.log('plusIcon2');
    //Add Casin Value
    const incrimentAmount2 = document.getElementById("incrimentAmount2").innerText;
    const incrimentAmount2Number = parseFloat(incrimentAmount2);
    const incrimentLastAmount2 = incrimentAmount2Number +59;
    document.getElementById("incrimentAmount2").innerText = incrimentLastAmount2;
    // add Casin Velue Net total
    const netTotal = document.getElementById("netTotal").innerText;
    const netTotalNumber = parseFloat(netTotal);
    const netTotalAmount = netTotalNumber + 59;

    document.getElementById("netTotal").innerText = netTotalAmount;
    //Add casin Mobail value grandTotal
    const grandTotal = document.getElementById("grandTotal").innerText;
    const grandTotalNumber = parseFloat(grandTotal);
    const grandTotalAmount = grandTotalNumber + 59;
    document.getElementById("grandTotal").innerText = grandTotalAmount;

    
})
//2nd Button
const minusIcon2 = document.getElementById("minusIcon2");
minusIcon2.addEventListener("click", function(){
    const number2 = document.getElementById("number2").value;
    if (number2 > 0) {
        document.getElementById("number2").value--;
        const incrimentAmount2 = document.getElementById("incrimentAmount2").innerText;
        const incrimentAmount2Number = parseFloat(incrimentAmount2);
        const incrimentLastAmount2 = incrimentAmount2Number -59;
        document.getElementById("incrimentAmount2").innerText = incrimentLastAmount2;
        //Munis casin Mobail value NetTotal
        const netTotal = document.getElementById("netTotal").innerText;
        const netTotalNumber = parseFloat(netTotal);
        const netTotalAmount = netTotalNumber - 59;

        document.getElementById("netTotal").innerText = netTotalAmount;
        //Munis casin Mobail value grandTotal
        const grandTotal = document.getElementById("grandTotal").innerText;
        const grandTotalNumber = parseFloat(grandTotal);
        const grandTotalAmount = grandTotalNumber -59;
        document.getElementById("grandTotal").innerText = grandTotalAmount;
}
    
})

// Remove Item first
const removeItem = document.getElementById("removeItem");
removeItem.addEventListener("click", function(){
    const cardItem = document.getElementById("cardItem");
    cardItem.style.display = "none";
    // Item Amount minus
    const incrimentAmountRemove = document.getElementById("incrimentAmount").innerText;
    const RemoveItemNumber = parseFloat(incrimentAmountRemove);
    const netTotal = document.getElementById("netTotal").innerText;
    const netTotalNumber = parseFloat(netTotal);
    const netBalance = netTotalNumber - RemoveItemNumber;
    document.getElementById("netTotal").innerText = netBalance;
    document.getElementById("grandTotal").innerText = netBalance;
});
// Remove Item Second
const removeItemCasin = document.getElementById("removeItemCasin");
removeItemCasin.addEventListener("click", function(){
    const cardItemCasin = document.getElementById("cardItemCasin");
    cardItemCasin.style.display = "none";
    // Item Amount minus
    const incrimentAmount2Remove = document.getElementById("incrimentAmount2").innerText;
    const RemoveItemNumber2 = parseFloat(incrimentAmount2Remove);
    const netTotal = document.getElementById("netTotal").innerText;
    const netTotalNumber = parseFloat(netTotal);
    const netBalance = netTotalNumber - RemoveItemNumber2;
    document.getElementById("netTotal").innerText = netBalance;
    document.getElementById("grandTotal").innerText = netBalance;
})
// like first item 
const like1 = document.getElementById("like1");
like1.addEventListener("click", function(){
    if (like1.classList.contains('unlike')) {
        like1.classList.add('like');
        like1.classList.remove('unlike');
    } else {
        like1.classList.add('unlike');
        like1.classList.remove('like');
    }
})
// like second item 
const like2 = document.getElementById("like2");
like2.addEventListener("click", function(){
    if (like2.classList.contains('unlike')) {
        like2.classList.add('like');
        like2.classList.remove('unlike');
    } else {
        like2.classList.add('unlike');
        like2.classList.remove('like');
    }
})

 