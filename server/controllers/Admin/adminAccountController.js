const Account = require("../../models/accountModel");

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


  const adminAccount = {getAccounts, deleteAccount}

    module.exports = adminAccount;