export const API_KEY = "AIzaSyDkTSQ9s5aArBz7X8UZJhqVDnPcJ7PRMAU";

export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
        return Math.floor(value / 1000) + "K";
    } else {
        return value;
    }
}