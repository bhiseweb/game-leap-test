/* @flow */
import handleError from '../../helper/handleError';
import Course from './course.model';

/**
 * Get list of course
 */
export async function index(req, res) {
  const courses = await Course.find({}).populate('videoGuides');
  res.json(courses);
}

/**
 * Create new course
 */
export async function create(req, res) {
  try {
    const course = await Course.create(req.body);
    res.json(course);
  } catch (err) {
    handleError(res, err);
  }
}
/**
 * Update course
 */
export async function update(req, res) {
  const c = await Course.find({_id: req.params.id});
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { upsert: true, new: true, runValidators: true });
    res.json(course);
  } catch (err) {
    handleError(res, err);
  }
}


/**
 * Delete a course
 */
export async function destroy(req, res) {
  try {
    const course = await Course.remove({ _id: req.params.id});
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
    const course = await Course.findById(req.params.id);
    res.json(course);
  } catch (err) {
    handleError(res, err);
  } 
}
