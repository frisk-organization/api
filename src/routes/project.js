import { Router } from 'express';

import {
  teste,
  getProject,
  getProjects,
  getTopProjects
} from '../controllers/project.js';

const router = Router();

router.get('/projects', getProjects);
router.get('/projects/:id', getProject);
router.get('/top-projects', getTopProjects);
router.get('/teste', teste)

export default router;
