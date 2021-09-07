const getRandChoice = (choices) => {
    return choices[getRandom(choices.length)];
};

const getRandom = n => {
    return Math.floor(Math.random() * n);
};

const logEvent = (name, competition) => {
    console.log(`${name}'s event is: ${competition.nameOf}`);
};

const logTime = (name, competition) => {
    console.log(`${name}'s time to train is: ${competition.days} days`);
};

const events = [
    {days: 50, nameOf: 'Triathlon'},
    {days: 100, nameOf: 'Marathon'},
    {days: 200, nameOf: 'Pentathlon'}
];

const event = getRandChoice(events);

let name = 'Nala';
logEvent(name, event);
logTime(name, event);

const name2 = 'Warren';
logEvent(name2, event);
logTime(name2, event);