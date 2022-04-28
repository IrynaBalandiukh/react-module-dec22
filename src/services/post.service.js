import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postService = {
    getAll: (page, _limit=5) => axiosService.get(urls.posts, {
        params: {
            _start: (page - 1) * _limit,
            _limit
        }
    }),
    getById: (postId) => axiosService.get(`${urls.posts}/${postId}`),
    getByUserId: (userId) => axiosService.get(`${urls.users}/${userId}/posts`)
};

export {postService};