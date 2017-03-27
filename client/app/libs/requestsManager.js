import request from 'axios';
import ReactOnRails from 'react-on-rails';

const API_URL = 'manage_users/update';

export default {

    /**
     * Retrieve list of entities from server using AJAX call.
     *
     * @returns {Promise} - Result of ajax call.
     */
    fetchEntities() {
        return request({
            method: 'GET',
            url: API_URL,
            responseType: 'json',
        });
    },

    /**
     * Submit new entity to server using AJAX call.
     *
     * @param {Object} entity - Request body to post.
     * @returns {Promise} - Result of ajax call.
     */
    submitEntity(entity) {
        return request({
            method: 'POST',
            url: API_URL,
            responseType: 'json',
            headers: ReactOnRails.authenticityHeaders(),
            data: entity,
        });
    },

};