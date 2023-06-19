const Bootcamp = require('../models/Bootcamp');


// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public 
exports.getBootcamps = async (req, res, next) => {
    try {
      const bootcamp = await Bootcamp.find();

      // console.log(bootcamp);

      res.status(200).json({
         success: true,
         data: bootcamp
      });
    } catch (err) {
      res.status(400).json({
         success: false
      });
    }
}

// @desc        Get single bootcamps
// @route       GET /api/v1/bootcamps/:id
// @access      Public 
exports.getBootcampById = async (req, res, next) => {
   try {
      const bootcamp = await Bootcamp.findById(req.params.id);

      if(!bootcamp){
         return res.status(400).json({
            success: false
         });
      }
         res.status(200).json({
            success: true,
            data: bootcamp
         });

   } catch (err) {
      res.status(400).json({
         success: false,
      });
   }
}

// @desc        Add new bootcamps
// @route       POST /api/v1/bootcamps
// @access      Private
exports.createBootcamps = async (req, res, next) => {
   try {
      const bootcamp = await Bootcamp.create(req.body);
   
      res.status(200).json({
         success: true,
         data: bootcamp
      });
   } catch (err) {
      res.status(400).json({
         success: false,
      })
   }
}

// @desc        Update bootcamps
// @route       PUT /api/v1/bootcamps/:id
// @access      Private 
exports.updateBootcampById = async (req, res, next) => {
   try {
      const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
         new: true,
         runValidators: true
      });
   
      if(!bootcamp){
         return res.status(400).json({
            success: false
         });
      }
   
      res.status(200).json({
         success: true,
         data: bootcamp
      });
   } catch (err) {
      res.status(400).json({
         success: false
      });
   }
}

// @desc        Delete bootcamps
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private
exports.deleteBootcampById = async (req, res, next) => {
   try {
      const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

      if(!bootcamp){
         return res.status(400).json({
            success: false
         });
      }
      res.status(200).json({
         success: true,
         message: "Deleted successfully",
         data: {}
      });
   } catch (err) {
      res.status(400).json({
         success: false
      });
   }
}