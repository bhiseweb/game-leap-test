'use strict';

import path from 'path';

// Default configuration
// ============================================
const config = {
    env: process.env.NODE_ENV,

    // Root path of server
    root: path.normalize(`${__dirname}/../../`),

    // Server port
    port: process.env.PORT || 3000,

    // Server IP
    ip: process.env.IP || '0.0.0.0',

    // MongoDB connection options
    mongo: {
        uri: process.env.MONGODB_URI, 
        options: {
            promiseLibrary: require('bluebird'),
        }
    },
};

export default config;