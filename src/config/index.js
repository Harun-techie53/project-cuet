import axios from "axios";

export default axios.create({
    baseURL: "https://project-cuet.herokuapp.com/api/v1/"
});