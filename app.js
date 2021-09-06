const getRandChoice = (choices) => {
    return choices[getRandom(choices.length)];
};

const getRandom = n => {
    return Math.floor(Math.random() * n);
};

const getTrainingDays = event => {
    let days;
    if (event === 'Marathon') {
        days = 50;
    } else if (event === 'Triathlon') {
        days = 100;
    } else if (event === 'Pentathlon') {
        days = 200;
    }
    return days;
};


const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
};

const events = ['Triathlon', 'Marathon', 'Pentathlon'];

const event = getRandChoice(events);
const days = getTrainingDays(event);

let name = 'Nala';
logEvent(name, event);
logTime(name, days);

const event2 = getRandChoice(events);
const days2 = getTrainingDays(event2);

const name2 = 'Warren';
logEvent(name2, event2);
logTime(name2, days2);
