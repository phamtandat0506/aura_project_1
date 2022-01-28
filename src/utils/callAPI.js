import axios from 'axios'
import { API_URL } from '../store/constants/conFig'

export default function callAPI(endpoint, method = 'GET', data, headers)
{
    return axios({
        method,
        url : `${API_URL}/${endpoint}`,
        data,
        headers
    }).catch((err) => {
        console.log(err);
    })
}