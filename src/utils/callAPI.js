import axios from 'axios'
import { API_URL } from '../store/constants/conFig'

export default function callAPI(endpoint, method = 'GET', data, header)
{
    return axios({
        method,
        url : `${API_URL}/${endpoint}`,
        data,
        header
    }).catch((err) => {
        console.log(err);
    })
}