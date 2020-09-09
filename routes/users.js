const express = require('express')
const User = require('../model/user_model')
const router = express.Router();
router.route('/register').post((req, res) => {
    console.log('inside register')
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email

    });
    user.save()
        .then(() => {
            console.log('user registered');
            res.status(200).json('ok');
        }).catch((err) => {
            res.status(403).json({ msg: err })

        })
    // res.json('registered')
})

router.route('/update/:username').patch((req, res) => {
    console.log('updating')
    User.findOneAndUpdate(
        { username: req.params.username },
        { $set: { password: req.body.password } },
        (err, result) => {
            if (err) return res.status(500).json({ msg: console.err })
            const msg = {
                msg: "password updated successfully",
                username: req.params.username
            }
            return res.json(msg)
        })
})

router.route('/delete/:username').delete((req, res) => {
    console.log('deleting')
    User.findOneAndDelete(
        { username: req.params.username },
        (err, result) => {
            if (err) return res.status(500).json({ msg: console.err })
            const msg = {
                msg: "deleted user",
                username: req.params.username
            }
            return res.json(msg)
        })
})

router.route('/:username').get((req, res) => {
    User.findOne(
        { username: req.params.username },
        (err, result) => {
            if (err) return res.status(500).json({ msg: console.err })
            res.json({
                Data: result,
                username: req.params.username
            })

        }
    )
})

router.route('/login').post((req, res) => {
    User.findOne(
        { username: req.body.username },
        (err, result) => {
            if (err) return res.status(500).json({ msg: err })
            if (result === null) {
                return res.status(403).json("either username or passworrd incorrect")
            }
            if (result.password === req.body.password) {
                return res.json("ok")
            }
            else {
                return res.status(403).json("passworrd is incorrect")
            }

        }
    )
})
module.exports = router;