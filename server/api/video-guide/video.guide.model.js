import mongoose from 'mongoose';
import Promise from 'bluebird';

mongoose.Promise = Promise;

const VideoGuideSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, 'Title is required!'], 
  },

  videoUrl: {
    type: String,
    require: [true, 'Video url is requied!'],
  },
  
  duration: { 
    type: Number, 
    required: true 
  },

  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    require: true,
  }
});

export default mongoose.model('VideoGuide', VideoGuideSchema);
