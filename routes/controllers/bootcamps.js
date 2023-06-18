// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public 
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show all bootcamps'});
}

// @desc        Get single bootcamps
// @route       GET /api/v1/bootcamps/:id
// @access      Public 
exports.getBootcampById = (req, res, next) => {
   res.status(200).json({success: true, msg: `Get bootcamp of ${req.params.id}`});
}

// @desc        Add new bootcamps
// @route       POST /api/v1/bootcamps
// @access      Private
exports.createBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Create new bootcamps'});
}

// @desc        Update bootcamps
// @route       PUT /api/v1/bootcamps/:id
// @access      Private 
exports.updateBootcampById = (req, res, next) => {
   res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id} `});
}

// @desc        Delete bootcamps
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private
exports.deleteBootcampById = (req, res, next) => {
   res.status(200).json({success: true, msg: `Delete a bootcamp of ${req.params.id}`});
}