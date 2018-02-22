import path from 'path';
import videoGuideApi from '../api/video-guide';
import courseApi from '../api/course';


export default function (app) {
  app.use('/api/courses', videoGuideApi);
  app.use('/api/courses', courseApi);
}