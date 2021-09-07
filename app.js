const getRandChoice = (choices) => {
    return choices.eventOf[getRandom(choices.eventOf.length)];
};

const getRandom = n => {
    return Math.floor(Math.random() * n);
};

const logEvent = (name, competition) => {
    console.log(`${name}'s event is: ${competition.sportEvent}`);
};

const logTime = (name, competition) => {
    console.log(`${name}'s time to train is: ${competition.days} days`);
};

const test = {
    eventOf: [
        {days: 50, sportEvent: 'Triathlon'},
        {days: 100, sportEvent: 'Marathon'},
        {days: 200, sportEvent: 'Pentathlon'},
        {days: 30, sportEvent: 'Swoosh'},
        {days: 40, sportEvent: 'Football'},
        {days: 80, sportEvent: 'Tennis'},
        {days: 50, sportEvent: 'Baseball'},
        {days: 60, sportEvent: 'Crossfit'},
        {days: 70, sportEvent: 'Gym'},
    ]
}

const event = getRandChoice(test);

let name = 'Nala';
logEvent(name, event);
logTime(name, event);

const name2 = 'Warren';
logEvent(name2, event);
logTime(name2, event);

