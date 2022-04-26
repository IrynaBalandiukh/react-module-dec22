import {axiosService} from "./axios.service";
import {urls} from "../constants";

const commentService = {
    getByPostId: (postId) => axiosService.get(`${urls.posts}/${postId}/comments`)
};

export {commentService};