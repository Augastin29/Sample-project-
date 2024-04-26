const express = require('express');
console.log("router")
const router = express.Router();


router.all('/', (req, res) => {
    res.json({
        'RESPONSE CODE': '1',
        'ERROR CODE': '0',
        'TITLE': 'WELCOME TO SERVER',
        'SUCCESSMSG': 'SERVER RUN'
    });
});
router.post('/registeration', (req, res,) => {
    var studentId = req.body.studentId
    var name = req.body.name
    var age = req.body.age
    var email = req.body.email
    var dop = req.body.dop
    var address = req.body.address
    var gender = req.body.gender
    var phone = req.body.phone
    console.log(req.body)
    var registerData = 'INSERT INTO studentInfo(studentId,name,age,email,dop,address,gender,phone,marks,pwd)VALUES("' + studentId + '","'
        + name + '","' + age + '","' + email + '","' + dop + '","' + address + '","' + gender + '","' + phone + '","'
        + marks + '","' + pwd + '")'
    studentMysqlCon.query(registerData, (err, result) => {
        res.json({ message: 'Register successfully ' })
    })

})
router.post('/fetch', async (req, res,) => {
    try {
        var studentId = req.body.studentId

        if (studentId = '') {
            var fetchData = 'SELECT*FROM studentInfo WHERE studentId="' + studentId + '"'
            await new Promise((resolve, reject) => {
                studentMysqlCon.query(fetchData, (err, result) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result)
                    }

                })
            })
            res.json({ studentData: result })
        }
    }
    catch (err) {
        res.json({ Response: ' failed' })
    }


})
router.post('/edit', async (req, res) => {
    try {
        var studentId = req.body.studentId
        var address = req.body.address
        if (studentId && address != '') {
            var updateData = 'UPDATE studentInfo SET address=' + address + ' WHERE studentId="' + studentId + '"'
            await new Promise((resolve, reject) => {
                studentMysqlCon.query(updateData, (err, result) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result)
                    }

                })
            })
            res.json({ Response: 'insert successfully' })
        }
    }
    catch (err) {
        res.json({ Response: 'insert failed' })
    }


})
router.post('/delete', async (req, res) => {
    try {
        var studentId = req.body.studentId
        if (studentId != '' || null) {
            var deleteData = 'DELETE FROM studentInfo WHERE studentId="' + studentId + '"'
            await new Promise((resolve, reject) => {
                studentMysqlCon.query(deleteData, (err, result) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result)
                    }

                })
            })
            res.json({ Response: 'your id remove' })
        }
    }
    catch (err) {
        res.json({ Response: 'error' })
    }

})


module.exports = router;

