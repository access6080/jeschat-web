import { refreshToken } from "../../api";
import { refreshToken as refreshAction } from '../../redux/auth';

export const renewToken = (dispatch) => {
    setTimeout(async () => {
        try {
            const { data } = await refreshToken();
            dispatch(refreshAction(data));
        } catch (error) {}
    }, 900000)
}