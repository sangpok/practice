import axios from 'axios';

export default {
    methods: {
        async $api(url, method, data) {
            return (
                await axios({
                    method: method,
                    url,
                    data,
                }).catch(console.log)
            ).data;
        },
    },
};
