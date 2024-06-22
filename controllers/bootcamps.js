//@desc     Get all bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: 'true', msg: 'show all bootcamps' });
}

//@desc     Get single bootcamp
//@route    GET /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: 'true', msg: `show bootcamp id: ${req.params.id}` });
}

//@desc     Create new bootcmap
//@route    POST /api/v1/bootcamps/:id
//@access   Private
exports.createtBootcamp = (req, res, next) => {
    res.status(200).json({ success: 'true', msg: 'add new bootcamp' });
}

//@desc     Update single bootcamp
//@route    PUT /api/v1/bootcamps/:id
//@access   Private
exports.upadteBootcamp = (req, res, next) => {
    res.status(200).json({ success: 'true', msg: `show bootcamp id: ${req.params.id}` });
}

//@desc     Delete single bootcamp
//@route    DELETE /api/v1/bootcamps/:id
//@access   Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: 'true', msg: `delete bootcamp id: ${req.params.id}` });
}