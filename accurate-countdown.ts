import * as moment from 'moment-timezone';

export class AccurateCountdown
{

    /**
     * Remaining time countdown
     */
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    showRemainingTime = true;
    remainingTimeInterval: ReturnType<typeof setInterval>;
    setRemainingTime() 
    {
        const currentDate = moment();
        const eventDate   = moment('2021-04-13'); // date or fulldate or milliseconds

        // Get the difference in between the current date and event date in seconds
        const diff = eventDate.diff(currentDate, 'seconds');

        const timeLeft = moment.duration(diff, 'seconds');
        
        this.days      = parseInt(timeLeft.asDays().toString());
        this.hours     = timeLeft.hours();
        this.minutes   = timeLeft.minutes();
        this.seconds   = timeLeft.seconds();

        // If the difference is less than 0, stop countdown and hide the bar
        if (diff < 0)
        {
            this.showRemainingTime = false;
            clearInterval(this.remainingTimeInterval);
        }
    }
}
