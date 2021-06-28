import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const { Schema } = mongoose;

const Project = new Schema(
  {
    name: { type: String },
    description: { type: String },
    link: { type: String },
    stars: { type: Number, default: 0 },
    tags: [{ type: String }],
    languages: [{ type: String }]
  },
  { timestamps: true }
);

Project.plugin(uniqueValidator);

export default mongoose.model('Project', Project, 'Projects');
