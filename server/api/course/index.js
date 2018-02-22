'use strict';

import {Router} from 'express';
import * as controller from './course.controller';

const router = new Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.get('/:id', controller.show);
router.delete('/:id', controller.destroy);
router.put('/:id', controller.update);

export default router;
