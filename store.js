// //store sec
// //btn for more
// const moreBtn = document.getElementById('moreBtn');
// //btn for less
// const lessBtn = document.getElementById('lessBtn');
// lessBtn.classList.add('displayNone');
// //secondrow
// const secondRow = document.getElementById('secondRow');
// secondRow.classList.add('displayNone');

// //to show more items in store
// moreBtn.addEventListener('click', function more() {
//     secondRow.classList.remove('displayNone');
//     moreBtn.classList.add('displayNone');
//     lessBtn.classList.remove('displayNone');
// });

// //to not show more items in store
// lessBtn.addEventListener('click', function less() {
//     var tenSec = 1;
//     var countDown = setInterval(function() {
//         tenSec -= 1;
//         if (tenSec <= 0) {
//             clearInterval(countDown);
//             secondRow.classList.add('displayNone');
//             moreBtn.classList.remove('displayNone');
//             lessBtn.classList.add('displayNone');
//         }
//     }, 1000);
// });

// //chart 
// //number of items in chart
// let numberOfItem = document.getElementById('numberOfItem');
// let numberOfItemAmount = [];
// //btn for add to chart

// //blackshirts
// const blackShitBtn = document.getElementById('blackShitBtn');
// //tobuy now
// blackBtnNow = document.getElementById('blackBtn');
// //whiteshirts
// const whiteShitBtn = document.getElementById('whiteShitBtn');
// //tobuy now
// const whiteBtnNow = document.getElementById('whiteBtn');
// //greyshirts
// const greyShitBtn = document.getElementById('greyShitBtn');
// //tobuy now
// const greyBtnNow = document.getElementById('greyBtn');
// //rock
// const rockBtn = document.getElementById('rockBtn');
// //tobuy now
// const rockBtnNow = document.getElementById('rockBtnNow');
// //paper shirts
// const paperBtn = document.getElementById('paperBtn');
// //tobuy now
// const paperBtnNow = document.getElementById('paperBtnNow');
// //greynshirts
// const scissorBtn = document.getElementById('scissorBtn');
// //tobuy now
// const scissorBtnNow = document.getElementById('scissorBtnNow');
// //place to put the items in checkout
// const chartPrices = document.getElementById('chartPrices');
// //amountOfMoney
// let finalPrice = document.getElementById('finalPrice');
// let amountOfMoney = [];

// //Buying black shirt
// blackShitBtn.addEventListener('click', function blackShit() {
//     //number of items chart
//     numberOfItem.innerHTML = numberOfItemAmount.push(+1);
//     //number of money
//     finalPrice.innerHTML = '$' + amountOfMoney.unshift(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20);
//     var para = document.createElement("P");
//     para.innerText = "Black Shirt $20";
//     chartPrices.appendChild(para);
// });

// blackBtnNow.addEventListener('click', function blackShit() {
//     //number of items chart
//     numberOfItem.innerHTML = numberOfItemAmount.push(+1);
//     //number of money
//     finalPrice.innerHTML = '$' + amountOfMoney.unshift(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20);
//     var para = document.createElement("P");
//     para.innerText = "Black Shirt $20";
//     chartPrices.appendChild(para);
//     //to go to checkout
//     storeContent.classList.add('displayNone');
//     storeBio.classList.add('displayNone');
//     chart.classList.add('displayNone');
//     checkOutContent.classList.remove('displayNone');
//     checkOutBio.classList.remove('displayNone');
//     back.classList.remove('displayNone');
// });

// //Buying white shirt
// whiteShitBtn.addEventListener('click', function blackShit() {
//     //number of items chart
//     numberOfItem.innerHTML = numberOfItemAmount.push(+1);
//     //number of money
//     finalPrice.innerHTML = '$' + amountOfMoney.unshift(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20);
//     var para = document.createElement("P");
//     para.innerText = "White Shirt $20";
//     chartPrices.appendChild(para);
// });

// whiteBtnNow.addEventListener('click', function blackShit() {
//     //number of items chart
//     numberOfItem.innerHTML = numberOfItemAmount.push(+1);
//     //number of money
//     finalPrice.innerHTML = '$' + amountOfMoney.unshift(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20);
//     var para = document.createElement("P");
//     para.innerText = "White Shirt $20";
//     chartPrices.appendChild(para);
//     //to go to checkout
//     storeContent.classList.add('displayNone');
//     storeBio.classList.add('displayNone');
//     chart.classList.add('displayNone');
//     checkOutContent.classList.remove('displayNone');
//     checkOutBio.classList.remove('displayNone');
//     back.classList.remove('displayNone');
// });

// //Buying grey shirt
// greyShitBtn.addEventListener('click', function blackShit() {
//     //number of items chart
//     numberOfItem.innerHTML = numberOfItemAmount.push(+1);
//     //number of money
//     finalPrice.innerHTML = '$' + amountOfMoney.unshift(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20);
//     var para = document.createElement("P");
//     para.innerText = "GreyShirt $20";
//     chartPrices.appendChild(para);
// });
// greyBtnNow.addEventListener('click', function blackShit() {
//     //number of items chart
//     numberOfItem.innerHTML = numberOfItemAmount.push(+1);
//     //number of money
//     finalPrice.innerHTML = '$' + amountOfMoney.unshift(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20);
//     var para = document.createElement("P");
//     para.innerText = "grey Shirt $20";
//     chartPrices.appendChild(para);
//     //to go to checkout
//     storeContent.classList.add('displayNone');
//     storeBio.classList.add('displayNone');
//     chart.classList.add('displayNone');
//     checkOutContent.classList.remove('displayNone');
//     checkOutBio.classList.remove('displayNone');
//     back.classList.remove('displayNone');
// });

// //buying rock
// rockBtn.addEventListener('click', function blackShit() {
//     numberOfItem.innerHTML = numberOfItemAmount.push(+1);
//     //number of money
//     finalPrice.innerHTML = '$' + amountOfMoney.unshift(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//     var para = document.createElement("P");
//     para.innerText = "Rock $10";
//     chartPrices.appendChild(para);
// });

// rockBtnNow.addEventListener('click', function blackShit() {
//     //number of items chart
//     numberOfItem.innerHTML = numberOfItemAmount.push(+1);
//     //number of money
//     finalPrice.innerHTML = '$' + amountOfMoney.unshift(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//     var para = document.createElement("P");
//     para.innerText = "rock $10";
//     chartPrices.appendChild(para);
//     //to go to checkout
//     storeContent.classList.add('displayNone');
//     storeBio.classList.add('displayNone');
//     chart.classList.add('displayNone');
//     checkOutContent.classList.remove('displayNone');
//     checkOutBio.classList.remove('displayNone');
//     back.classList.remove('displayNone');
// });

// //buying paper
// paperBtn.addEventListener('click', function blackShit() {
//     numberOfItem.innerHTML = numberOfItemAmount.push(+1);
//     finalPrice.innerHTML = '$' + amountOfMoney.unshift(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//     var para = document.createElement("P");
//     para.innerText = "Paper $10";
//     chartPrices.appendChild(para);
// });
// paperBtnNow.addEventListener('click', function blackShit() {
//     //number of items chart
//     numberOfItem.innerHTML = numberOfItemAmount.push(+1);
//     //number of money
//     finalPrice.innerHTML = '$' + amountOfMoney.unshift(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//     var para = document.createElement("P");
//     para.innerText = "paper $10";
//     chartPrices.appendChild(para);
//     //to go to checkout
//     storeContent.classList.add('displayNone');
//     storeBio.classList.add('displayNone');
//     chart.classList.add('displayNone');
//     checkOutContent.classList.remove('displayNone');
//     checkOutBio.classList.remove('displayNone');
//     back.classList.remove('displayNone');
// });

// //buying scissor
// scissorBtn.addEventListener('click', function blackShit() {
//     numberOfItem.innerHTML = numberOfItemAmount.push(+1);
//     finalPrice.innerHTML = '$' + amountOfMoney.unshift(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//     var para = document.createElement("P");
//     para.innerText = "Scissor $10";
//     chartPrices.appendChild(para);
// });
// scissorBtnNow.addEventListener('click', function blackShit() {
//     //number of items chart
//     numberOfItem.innerHTML = numberOfItemAmount.push(+1);
//     //number of money
//     finalPrice.innerHTML = '$' + amountOfMoney.unshift(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//     var para = document.createElement("P");
//     para.innerText = "scissor $10";
//     chartPrices.appendChild(para);
//     //to go to checkout
//     storeContent.classList.add('displayNone');
//     storeBio.classList.add('displayNone');
//     chart.classList.add('displayNone');
//     checkOutContent.classList.remove('displayNone');
//     checkOutBio.classList.remove('displayNone');
//     back.classList.remove('displayNone');
// });



// //check Out code
// //store
// const storeContent = document.getElementById('storeContent');
// const storeBio = document.getElementById('storeBio');
// //checkout
// const checkOutBio = document.getElementById('checkOutBio');
// checkOutBio.classList.add('displayNone');
// const checkOutContent = document.getElementById('checkOutContent');
// checkOutContent.classList.add('displayNone');
// //chart icon
// const chart = document.getElementById('chart');
// //back icon
// const back = document.getElementById('back');
// back.classList.add('displayNone');

// chart.addEventListener('click', function checkOut() {
//     storeContent.classList.add('displayNone');
//     storeBio.classList.add('displayNone');
//     chart.classList.add('displayNone');
//     checkOutContent.classList.remove('displayNone');
//     checkOutBio.classList.remove('displayNone');
//     back.classList.remove('displayNone');
// })

// back.addEventListener('click', function checkOut() {
//     storeContent.classList.remove('displayNone');
//     storeBio.classList.remove('displayNone');
//     chart.classList.remove('displayNone');
//     checkOutContent.classList.add('displayNone');
//     checkOutBio.classList.add('displayNone');
//     back.classList.add('displayNone');
// })

// //address to card info
// const shippingSec = document.getElementById('shipping');
// const shippingBtn = document.getElementById('shippingBtn');

// const paymentSec = document.getElementById('payment');
// paymentSec.classList.add('displayNone');
// backPaymentBtn = document.getElementById('backPaymentBtn');

// shippingBtn.addEventListener('click', function payment() {
//     paymentSec.classList.remove('displayNone');
//     shippingSec.classList.add('displayNone');
// });

// backPaymentBtn.addEventListener('click', function backPayment() {
//     paymentSec.classList.add('displayNone');
//     shippingSec.classList.remove('displayNone');
// });


// //heading
// //headin btn
// const historyBtn = document.getElementById('historyBtn');
// const gameInfoBtn = document.getElementById('gameInfoBtn');
// //heading content
// const purpose = document.getElementById('purpose');
// const history = document.getElementById('history');
// history.classList.add('displayNone');
// //headin title
// const purposeTitle = document.getElementById('purposeTitle');
// const historyTitle = document.getElementById('historyTitle');
// historyTitle.classList.add('displayNone');

// historyBtn.addEventListener('click', function show(){
//    purpose.classList.add('displayNone');
//    purposeTitle.classList.add('displayNone');
//    history.classList.remove('displayNone');
//    historyTitle.classList.remove('displayNone');
// });


// gameInfoBtn.addEventListener('click', function show(){
//    purpose.classList.remove('displayNone');
//    purposeTitle.classList.remove('displayNone');
//    history.classList.add('displayNone');
//    historyTitle.classList.add('displayNone');
// });

// //hidden info
// const hiddenGameInfo = document.getElementById('hiddenGameInfo');
// hiddenGameInfo.classList.add('displayNone');
// const hiddenHistoryInfo = document.getElementById('hiddenHistoryInfo');
// hiddenHistoryInfo.classList.add('displayNone');

// //btn to show hidden info
// const expandGame = document.getElementById('expandGame');
// const expandHistory= document.getElementById('expandHistory');

// //unexpandingbtn
// const unexpandGame = document.getElementById('unexpandGame');
// unexpandGame.classList.add('displayNone');
// const unexpandHistory= document.getElementById('unexpandHistory');
// unexpandHistory.classList.add('displayNone');

// expandGame.addEventListener('click', function show(){
//    hiddenGameInfo.classList.remove('displayNone');
//    unexpandGame.classList.remove('displayNone');
//    expandGame.classList.add('displayNone');
// });

// unexpandGame.addEventListener('click', function show(){
//    hiddenGameInfo.classList.add('displayNone');
//    unexpandGame.classList.add('displayNone');
//    expandGame.classList.remove('displayNone');
// });

// //history 

// expandHistory.addEventListener('click', function show(){
//    hiddenHistoryInfo.classList.remove('displayNone');
//    unexpandHistory.classList.remove('displayNone');
//    expandHistory.classList.add('displayNone');
// });

// unexpandHistory.addEventListener('click', function show(){
//    hiddenHistoryInfo.classList.add('displayNone');
//    unexpandHistory.classList.add('displayNone');
//    expandHistory.classList.remove('displayNone');
// });
