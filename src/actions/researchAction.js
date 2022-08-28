import api from '../config';
import {getRegisteredConfig} from '../utils';
import { getAuthToken } from '../utils';
import axios from 'axios';
import * as researchActionTypes from '../actionTypes/researchActionTypes';

export const createResearchHandler = (researchFields) => async(dispatch) => {
    const authToken = getAuthToken();
    const {
        title,
        slug,
        description,
        pdfFile
    } = researchFields;
    const researchFormData = new FormData();

    researchFormData.append('title', title);
    researchFormData.append('slug', slug);
    researchFormData.append('description', description);
    for (let i = 0 ; i < pdfFile.length ; i++) {
        researchFormData.append("pdf", pdfFile[i]);
    }
    try {
        dispatch({
            type: researchActionTypes.CREATE_RESEARCH_REQUEST
        });

        const {data} = await api.post(
            '/research', 
            researchFormData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${authToken}`
                }
            }
        );
        
        dispatch({
            type: researchActionTypes.CREATE_RESEARCH_SUCCESS,
            payload: {
                data: data.data.research
            }
        });
    } catch (err) {
        console.log(err);
    }
}

export const fetchAllResearches = () => async (dispatch) => {
    try {
        dispatch({
            type: researchActionTypes.FETCH_RESEARCHES_REQUEST
        });

        const {data} = await api.get('/research');

        dispatch({
            type: researchActionTypes.FETCH_RESEARCHES_SUCCESS,
            payload: {
                data: data.data.researches
            }
        });
    } catch (err) {
        console.log(err);
    }
}

export const fetchResearchHandler = (researchId) => async (dispatch) => {
    try {
        dispatch({
            type: researchActionTypes.FETCH_RESEARCH_REQUEST
        });

        const {data} = await api.get(`/research/${researchId}`);

        dispatch({
            type: researchActionTypes.FETCH_RESEARCH_SUCCESS,
            payload: {
                researchId,
                data: data.data.research
            }
        });
    } catch (err) {
        console.log(err);
    }
}