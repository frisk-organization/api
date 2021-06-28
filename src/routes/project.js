import { Router } from 'express';

import {
  getProject,
  getProjects,
  getTopProjects
} from '../controllers/project.js';

const router = Router();

router.get('/projects', getProjects);
router.get('/projects/:id', getProject);
router.get('/top-projects', getTopProjects);

export default router;
