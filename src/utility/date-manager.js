import moment from 'moment';

export class DateManager {
    static createStartAndEndDateString = (startDate, endDate) => {
        let start_date_string = moment(startDate).format("D.M");
        let end_date_string = moment(endDate).format("D.M.YYYY")

        return start_date_string + ' - ' + end_date_string;   
    }   
}