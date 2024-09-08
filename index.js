document.addEventListener('DOMContentLoaded', () => {
    const options = {
        settings: {
            selected: {
                dates: ['2024-08-20'],
            },
        },
    };

    const calendar = new VanillaCalendar('#calendar', options);
    calendar.init();
});