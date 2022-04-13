import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postsService = {
    getPostByUserId: (userId) => axiosService.get(`${urls.posts}?userId=${userId}`)
};

export {postsService};