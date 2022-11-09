function welcomeMassage(name, greetHandler) {
    greetHandler(name)
}
// const names = ['Tom Hanks', 'Tom Brady', 'Tom Cruise'];
// const myObj = {
//     name: 'Tom chinku',
//     age: 11
// }

function greetMorning(nizam) {
    console.log('Good Morning', nizam);
}
function greetAfternoon(nizam) {
    console.log('Good Afternoon', nizam);
}
function greetEvening(nizam) {
    console.log('Good Evening', nizam);
}
welcomeMassage('Tom Hanks', greetMorning);
welcomeMassage('Shakib hasan Hanks', greetAfternoon);
welcomeMassage('Nizam Hanks', greetEvening);






function handleClick() {
    console.log('button is clicked');
}
document.getElementById('my-btn').addEventListener('click', handleClick())

document.getElementById('btn').addEventListener('click', function () {
    console.log('button is Clicked');
})