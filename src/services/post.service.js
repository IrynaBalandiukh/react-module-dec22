import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postService = {
    getAll: () => axiosService.get(urls.posts),
    getById: (postId) => axiosService.get(`${urls.posts}/${postId}`),
    getByUserId: (userId) => axiosService.get(`${urls.users}/${userId}/posts`)
};

export {postService};