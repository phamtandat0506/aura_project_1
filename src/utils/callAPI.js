import axios from 'axios'
import { API_URL } from '../store/constants/conFig'

export default function callAPI(endpoint, method = 'GET', data, headers)
{
    return axios({
        method,
        url : `${API_URL}/${endpoint}`,
        data,
        headers
    }).catch((error) => {
        if(error.response)
        {
            return error.response.data;
        }
        else if(error.request)
        {
            console.log(error.request);
        }
        else {
            console.log(error.message);
        }
        console.log(error.config);
    })
}