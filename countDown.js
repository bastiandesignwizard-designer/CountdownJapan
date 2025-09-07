var cd = new Countdown({
    cont: document.querySelector('.container'),
    endDate: 1553468400000,
    outputTranslation: {
        year: 'Years',
        week: 'Weeks',
        day: 'Days',
        hour: 'Hours',
        minute: 'Minutes',
        second: 'Seconds',
    },
    endCallback: null,
    outputFormat: 'week|day|hour|minute|second',
});
