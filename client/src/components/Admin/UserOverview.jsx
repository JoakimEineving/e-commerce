import React, { useState, useEffect } from "react";

import accountService from "../../services/accountService";
const UserOverview = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const getAccounts = async () => {
      const accounts = await accountService.getAccounts();
      setAccounts(accounts);
    };
    getAccounts();
  }, []);

  const handleDeleteAccount = async (id) => {
    try {
      await accountService.deleteAccount(id);
      const accounts = await accountService.getAccounts();
      setAccounts(accounts);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <h1 className="text-3xl font-bold flex justify-center mb-3">
        User Overview
      </h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {accounts.length > 0 &&
            accounts.map((account, index) => (
              <tr className="hover" key={account._id}>
                <th>{index + 1}</th>
                <td>{account.email}</td>
                <td></td>
                <td>
                  <button
                    className="btn btn-sm"
                    onClick={() => handleDeleteAccount(account._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserOverview;
