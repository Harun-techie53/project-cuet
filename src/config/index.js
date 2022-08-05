import axios from "axios";

//https://project-cuet.herokuapp.com/api/v1
export default axios.create({
    baseURL: "http://localhost:5000/api/v1"
});