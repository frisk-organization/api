import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const { Schema } = mongoose;

const Issue = new Schema(
  {
    id: { type: String },
    name: { type: String },
    link: { type: String },
    comments: { type: Number, default: 0 },
    tags: [{ type: String }],
    repo: { type: Schema.Types.ObjectId, ref: 'Project' }
  },
  { timestamps: true }
);

Issue.plugin(uniqueValidator);

export default mongoose.model('Issue', Issue, 'Issues');
