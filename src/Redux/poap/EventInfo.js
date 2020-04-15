
export default class EventInfo {
    constructor(props) {
        this.id = props.id;
        this.name = props.name;
        this.event_url = props.event_url;
        this.image_url = props.image_url;
        this.country = props.country;
        this.city = props.city;
        this.description = props.description;
        this.year = props.year;
        this.start_date = props.start_date;
        this.end_date = props.end_date;
    }
}