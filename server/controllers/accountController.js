const Account = require("../models/accountModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Create new account
const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    if ( !email || !password) {
      res.status(400);
      throw new Error("Please fill in all fields");
    } else {
      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds
      const account = new Account({
        email,
        password: hashedPassword,
      });
      console.log(`Account with email ${req.body.email} created`);
      const createdAccount = await account.save();
      res.status(201).json(createdAccount);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error("Please provide email and password");
    } else {
      const account = await Account.findOne({ email });
      if (!account) {
        res.status(401);
        throw new Error("Invalid email or password");
      } else {
        const passwordMatch = await bcrypt.compare(password, account.password);
        if (!passwordMatch) {
          res.status(401);
          throw new Error("Invalid email or password");
        } else {
          const token = jwt.sign({ email: account.email, _id: account._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
          res.status(200).json({
            _id: account._id,
            token: token,
          });
        }
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAccount = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    if (account) {
      await account.remove();
      res.json({ message: "Account removed" });
      console.log(`Account with id ${req.params.id} deleted`);
    } else {
      res.status(404);
      throw new Error("Account not found");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find({});
    res.json(accounts.reverse());
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  signUp,
  getAccounts,
  deleteAccount,
    signIn,
};
