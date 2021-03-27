const router = require('express').Router();
const { models: { Student, Campus } } = require('../db/data');

router.get('/students', async(req, res, next) => {
  try {
    const students = await Student.findAll();
    res.send(students);
  } catch(err) {
    next(err);
  }
});

router.post('/student', async(req, res, next) => {
  try {
    console.log(req.body)
    const { firstName, lastName, email, gpa } = req.body;
    const student = await Student.create({
      firstName, lastName, email, gpa
    })
    res.status(201).send(student);
  } catch(err) {
    next(err);
  }
})

router.get('/campuses', async(req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.send(campuses);
  } catch(err) {
    next(err);
  }
});

module.exports = router;
