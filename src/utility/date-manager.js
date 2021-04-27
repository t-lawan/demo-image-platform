import moment from 'moment';

export class DateManager {
    static createStartAndEndDateString = (startDate, endDate) => {
        let start_date_string = moment(startDate).format("D MMMM");
        let end_date_string = moment(endDate).format("D MMMM YYYY")

        return start_date_string + ' - ' + end_date_string;   
    }   

    static numberOfDaysBetween = (date_a, date_b) => {
        return moment(date_a).diff(moment(date_b), 'days');
    }

    static isBefore = (date_a, date_b) => {
        return moment(date_a).isBefore(moment(date_b));
    }

    static isAfter = (date_a, date_b) => {
        return moment(date_a).isAfter(moment(date_b));
    }
}

