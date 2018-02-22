import mongoose from 'mongoose';
import Promise from 'bluebird';

mongoose.Promise = Promise;

const CourseSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required!'], 
  },
  
  videoGuides: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'VideoGuide', 
  }],
});

export default mongoose.model('Course', CourseSchema);
