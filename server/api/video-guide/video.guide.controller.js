/* @flow */
import handleError from '../../helper/handleError';
import VideoGuide from './video.guide.model';
import Course from '../course/course.model';
/**
 * Create new video guide
 */
export async function create(req, res) {
  let videoData = req.body;
  videoData = {...videoData, course: req.params.id};
  try {
    const course = await Course.findById(req.params.id);
    if(!course)
      throw new('course not found');
    
    const videoGuide = await VideoGuide.create(videoData);
    course.videoGuides.push(videoGuide._id);
    await course.save();

    res.json(videoGuide);
  } catch (err) {
    handleError(res, err);
  }
}
/**
 * Update video guide
 */
export async function update(req, res) {
  try {
    const videoGuide = await VideoGuide.findOneAndUpdate({ course: req.params.id, _id: req.params.videoGuideId }, req.body, { upsert: true, new: true, runValidators: true });
    res.json(videoGuide);
  } catch (err) {
    handleError(res, err);
  }
}

/**
 * Get list of video guide
 */
export async function index(req, res) {
  const videoGuides = await VideoGuide.find({ course: req.params.id }).populate('course');
  res.json(videoGuides);
}

/**,
 * Delete a video guide
 */
export async function destroy(req, res) {
  try {
    const course = await Course.findById(req.params.id);
    await VideoGuide.remove({course: req.params.id, _id: req.params.videoGuideId});
    course.videoGuides.filter(vg => vg !== req.params.videoGuideId);
    course.save();
    res.json(course);
  } catch (err) {
    handleError(res, err);
  }
}

/**
 * Show a course
 */
export async function show(req, res) {
  try {
    const videoGuide = await VideoGuide.findOne({course: req.params.id, _id: req.params.videoGuideId});
    res.json(videoGuide);
  } catch (err) {
    handleError(res, err);
  } 
}
