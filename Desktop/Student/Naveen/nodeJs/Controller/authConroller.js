const { UserModel } = require('../model/User');
const { ForgetPasswordList } = require('../model/forgetPasswordList');

const register = async (req, res) => {
    const data = req.body
    console.log(data);
    try {
        const newUser = await UserModel.create(data);
        res.send({ message: 'User created successfully!' })
    } catch (error) {
        res.status(500).send({ message: "User created failed", success: false, error: error.message })
    }
}

const forgetPassword = async (req, res) => {
    const data = req.body
    const { id } = req.params
    if (!data.password) return res.send({ message: "Please provide password" });
    if (!id) return res.status(400).send({ message: 'Please provite id', success: false });
    try {
        const currentUser = await UserModel.findOne({ _id: id })
        if (!currentUser) {
            return res.status(404).send({ message: 'User not found', success: true })
        }
        const count = await ForgetPasswordList.find({ userId: id }).countDocuments()
        if (count < 5) {
            await ForgetPasswordList.create({ changedpassword: data.password, changeCount: count + 1, userId: currentUser._id })
            currentUser.password = data.password
            await currentUser.save()
            return res.send({ message: 'Password changed successfully!' })

        }
        res.send({ message: 'ForgetPassword limit exceed please try again later' })

    } catch (error) {
        res.status(500).send({ message: "Password change failed", success: false, error: error.toString() })
    }
}

module.exports = { register, forgetPassword }