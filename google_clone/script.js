const appBtn = document.querySelector('.app-button-cont');
const appWindow = document.querySelector('.app-window');
const appContent = document.querySelector('.app-content')
const accBtn = document.querySelector('.acc-btn-cont');
const accBox = document.querySelector('.account-window');

appBtn.addEventListener('click', () => appWindow.classList.toggle('hide'));

// appBtn.addEventListener('click', function(){
//     if(accBox.classList = '.account-window'){
//         accBox.classList.toggle('hide');
//         appWindow.classList.toggle('hide');
//     } else {
//         appWindow.classList.toggle('hide');
//     }

//     //appWindow.classList.toggle('hide');
// })

accBtn.addEventListener('click', () => accBox.classList.toggle('hide'));
// console.log(appWindow.classList)
// accBtn.addEventListener('click', function(){
//     console.log(appWindow.classList)
//     if(appWindow.classList = '.app-window'){
//         appWindow.classList.toggle('hide');
//         accBox.classList.toggle('hide');
//     } else {
//         accBox.classList.toggle('hide');
//     }

//     //accBox.classList.toggle('hide');
// })