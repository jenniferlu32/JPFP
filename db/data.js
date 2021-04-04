const { Sequelize, Model, STRING, TEXT, FLOAT } = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/jpfp_db', { logging: false });

class Campus extends Model {};
Campus.init({
  name: {
    type: STRING,
    validate: {
      notEmpty: true,
    },
    allowNull: false,
  },
  imageUrl: {
    type: STRING,
    defaultValue: 'https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.fit-760w.jpg'
  },
  address: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  description: {
    type: TEXT,
  }
}, { timestamps: false, sequelize: db, modelName: 'campuses' });

class Student extends Model {};
Student.init({
  firstName: {
    type: STRING,
    validate: {
      notEmpty: true,
    },
    allowNull: false,
  },
  lastName: {
    type: STRING,
    validate: {
      notEmpty: true,
    },
    allowNull: false,
  },
  email: {
    type: STRING,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
    allowNull: false,
  },
  imageUrl: {
    type: STRING,
    defaultValue: 'https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.fit-760w.jpg'
  },
  gpa: {
    type: FLOAT,
    validate: {
      isDecimal: true,
      min: 0,
      max: 4,
    }
  }
}, { timestamps: false, sequelize: db, modelName: 'students'});

Campus.hasMany(Student);
Student.belongsTo(Campus);

const syncAndSeed = async() => {
  try {

    await db.sync({ force: true });

    const [campus1, campus2, campus3] = await Promise.all(
      [
        ['NYU New York', 'New York, NY 10003', 'New York University is a private research university in New York City. Chartered in 1831 by the New York State Legislature, NYU was founded by a group of New Yorkers led by then Secretary of the Treasury Albert Gallatin.'],
        ['NYU Tandon', '6 MetroTech Center, Brooklyn, NY 11201', 'The New York University Tandon School of Engineering is the engineering and applied sciences school of New York University. Tandon is the second oldest private engineering and technology school in the United States. '],
        ['NYU London', '6 Bedford Square, Bloomsbury, London WC1B 3RA, United Kingdom', "NYU London is an academic centre of New York University located in London, United Kingdom. It is one of NYU's 14 global academic centres, and the largest of these which does not grant its own degrees, hosting around 480 students each semester."]
      ].map(([name, address, description]) => Campus.create({ name, address, description }))
    );

    const [student1, student2, student3] = await Promise.all(
      [
        ['Jennifer', 'Lu', 'jenniferlu32@gmail.com', 3.63],
        ['Kadeem', 'James', 'kjames@accessintegra.com', 3.50],
        ['Stanley', 'Lim', 'stanleylim@gmail.com', 1.2]
      ].map(([firstName, lastName, email, gpa]) => Student.create({ firstName, lastName, email, gpa }))
    );

    student1.campusId = campus3.id;
    student2.campusId = campus2.id;
    student3.campusId = campus1.id;

    await Promise.all([
      student1.save(), student2.save(), student3.save()
    ]);

  } catch(err) {
    console.log(err);
  }
};

module.exports = {
  db,
  models: { Student, Campus },
  syncAndSeed
};
