import http from "http"
import path from "path"

import "./server/config/env";
import config from "./server/config/config";
import mongooseConfig from "./server/config/mongoose";
import expressConfig from "./server/config/express";
import routesConfig from "./server/config/routes";


// Setup Mongoose
mongooseConfig(config)
.then(() => {
    // Setup express
    return expressConfig(config);
})
.then((app) => {
    // Setup server
    return {
        app,
        server: http.createServer(app),
    }
})
.then((data) => {
    // Setup routing
    routesConfig(data.app);
    return data;
})
.then((data) => {
    // Start server
    const { server, app } = data;

    return new Promise((res, rej) => {
        app.gameleaptest = server.listen(config.port, config.ip, function(err) {
            if(err){
                rej(err)
            } else {
                res(data);
            }
        })
    })
})
.then((data) => {
    console.log("Express server listening on " + (config.ip + ":" + config.port) + ", in " + data.app.get('env')+ " mode")
})
.catch((err) => {
    console.log("There was an uncatch error : ");
    // console.error(err.message);
    console.error(err);
})
