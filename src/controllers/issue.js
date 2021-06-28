import Issue from '../models/issue.js';

export const getRecentIssues = (_, res) => {
  Issue.find().sort({ updatedAt: -1 }).limit(10).populate('repo').exec((err, issues) => {
    res.json(issues);
  });
}
