import { Router } from 'express';

import { getRecentIssues } from '../controllers/issue.js';

const router = Router();

router.get('/recent-issues', getRecentIssues);

export default router;
