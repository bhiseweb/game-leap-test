'use strict';

import { Router } from 'express';
import * as controller from './video.guide.controller';

const router = new Router();

router.get('/:id/video-guides', controller.index);
router.post('/:id/video-guides', controller.create);
router.get('/:id/video-guides/:videoGuideId', controller.show);
router.delete('/:id/video-guides/:videoGuideId', controller.destroy);
router.put('/:id/video-guides/:videoGuideId', controller.update);

export default router;
