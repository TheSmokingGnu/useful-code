module.exports = function(numbers){

    const evaluatedNumbers = numbers.map(number => convertNumbers(number));

    const sortedNumbers = evaluatedNumbers.sort((a, b) =>{
        if(a.seconds < b.seconds) {
            return 1;
        } else if (a.seconds > b.seconds) {
            return -1
        } else {
            return 0;
        }
    });


    if(sortedNumbers[0].seconds > (12*60)) {
        sortedNumbers.splice(0, 1);
    }

    return evaluatedNumbers.reduce((acc, number) => number.cost + acc, 0)

}

function convertNumbers(numbers) {
    const numbersArray = numbers.split(' ');
    const timeComponent = numbersArray[1];
    const mins = +timeComponent.split(':')[0];
    const seconds = +timeComponent.split(':')[1];
    const totalSeconds = (mins*60) + seconds;

    let cost = 0;

    // if over 5 mins charge by mins
    if(mins > 5) {
        if(seconds > 0) {
            cost = (mins+1)*500; 
        } else {
            cost = mins * 500;
        }
    } else {
        cost = totalSeconds * 10;
    }
    // otherwise charge per second.



    return {
        phoneNumber: +numbersArray[0],
        mins: mins,
        seconds: totalSeconds,
        cost: cost
    }

}