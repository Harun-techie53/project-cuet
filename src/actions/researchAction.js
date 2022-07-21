import api from '../config';
import {getRegisteredConfig} from '../utils';
import { getAuthToken } from '../utils';
import axios from 'axios';

export const createResearchHandler = (researchFields) => async(dispatch) => {
    const authToken = getAuthToken();
    const {
        title,
        slug,
        description,
        pdfFiles
    } = researchFields;
    const researchFormData = new FormData();

    researchFormData.append('title', title);
    researchFormData.append('slug', slug);
    researchFormData.append('description', description);
    researchFormData.append('pdf', pdfFiles);
    try {
        const data = await api.post(
            '/research', 
            researchFormData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${authToken}`
                }
            }
        );

        console.log(data);
    } catch (err) {
        console.log(err);
    }
}