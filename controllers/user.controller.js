const userModel = require('../models/user.model');

const UserController = {
  create(req, res) {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    console.log(req.body);
    if (!firstName || !lastName) {
      return res.status(400).send({
        error: "firstName is not set"
      });
    }

    let CreatedUser = {
      firstName: firstName,
      lastName: lastName
    }

    const newUser = new userModel(CreatedUser);

    newUser.save(err => {
      if (err) {
        return res.status(500).send({
          err
        });
      }
    });

    return res.status(200).json(newUser);
  },
  findAll(req, res) {
    userModel.find({}, (err, results) => {
      if (err) {
        return res.status(404).send(err);
      }

      return res.status(200).json(results);
    });
  },
  findOneById(req, res) {
    let id = req.params.id;

    if (!id) {
      return res.status(400).send({
        err: "id is required"
      });
    }

    userModel.findById(id, (err, results) => {
      if (err) {
        return res.status(404).send(err);
      }

      if (results == null ) {
        return res.status(300).send({
          err: "No user with id: " + id
        });
      } else {
        return res.status(200).json(results);
      }

    });
  },
  updateById(req, res) {
    let id = req.params.id;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;

    if (!id) {
      return res.status(400).send({
        err: "id is required"
      });
    }

    // empty so we can add only what is needed
    let updateObject = {}

    if (firstName) {
      updateObject.firstName = firstName;
    }

    if (lastName) {
      updateObject.lastName = lastName;
    }

    userModel.update({
      _id: id
    }, updateObject, (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.status(200).json({
        code: 200,
        msg: "update success for " + id,
        update: results
      });
    });
  },
  deleteById(req, res) {
    let id = req.params.id;

    if (!id) {
      return res.status(400).send({
        err: "id is required"
      });
    }

    userModel.findByIdAndRemove(id, err => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.status(200).json({
        code: 200,
        msg: "deleted " + id
      });
    })

  }
}
module.exports = UserController;
