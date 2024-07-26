const Puppy = require('../models/puppies');


// GET Index Page
exports.index = (req, res) => {
  res.render('index.ejs');
};

// GET Puppies New
exports.newPuppy = (req, res) => {
  res.render('puppies/new.ejs');
};

// GET All Puppies List
exports.allPuppies = async (req, res) => {
  const allPuppies = await Puppy.find();
  console.log(allPuppies);
  res.render('puppies/index.ejs', { puppies: allPuppies });
};

// GET Single Puppy
exports.puppy = async (req, res) => {
  const foundPuppy = await Puppy.findById(req.params.puppyId);
  console.log(foundPuppy);
  res.render('puppies/show.ejs', { puppy: foundPuppy });
};

// POST New Puppy
exports.create = async (req, res) => {
  req.body.isGoodWithChildren = req.body.isGoodWithChildren === "on";
  await Puppy.create(req.body);
  res.redirect('/puppies/new');
};

// DELETE Puppy
exports.delete = async (req, res) => {
  await Puppy.findByIdAndDelete(req.params.puppyId);
  res.redirect('/puppies');
};

// GET Edit Puppy Form
exports.edit = async (req, res) => {
  const foundPuppy = await Puppy.findById(req.params.puppyId);
  res.render('puppies/edit.ejs', { puppy: foundPuppy });
};

// PUT Update Puppy
exports.update = async (req, res) => {
  req.body.isGoodWithChildren = req.body.isGoodWithChildren === "on";
  await Puppy.findByIdAndUpdate(req.params.puppyId, req.body, { new: true });
  res.redirect(`/puppies/${req.params.puppyId}`);
};