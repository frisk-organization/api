import Project from '../models/project.js';
import Issue from '../models/issue.js';

export const getProjects = (_, res) => {
  Project.find({}, (err, projects) => {
    res.json(projects.map(item => ({
      ...item._doc,
      id: item._id
    })));
  });
}

export const getTopProjects = (_, res) => {
  Project.find().sort({ stars: -1 }).limit(6).exec((err, projects) => {
    res.json(projects.map(item => ({
      ...item._doc,
      id: item._id
    })));
  });
}

export const getProject = async (req, res) => {
  const { id = '' } = req.params;

  Project.findOne({ _id: id }).exec((err, project) => {
    if (err) {
      res.status(500).send(err);
      return ;
    }

    Issue.find({ repo: id }).exec((err, issues) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json({
          ...project._doc,
          issues,
          id: project._id
        });
      }
    })
  });
}
