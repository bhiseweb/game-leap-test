/**
 * Express configuration
 */
import express from "express";
import Promise from "bluebird";
import favicon from "serve-favicon";
import morgan from "morgan";
import bodyParser from "body-parser";
import path from "path";

export const app = express();

export default function(config) {
  
  app.use(morgan("dev"));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(express.static(path.join(__dirname, '../../dist')));

  // app.get('/*', function(req, res) {
  //   res.sendFile(path.join(__dirname, '../../dist/index.html'));
  // });

  app.get(/^\/(?!api\/)(?!.*\.json$).*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
  });

  return Promise.resolve(app);
}
