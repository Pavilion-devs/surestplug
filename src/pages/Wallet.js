import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Wallet = () => {
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const transactions = [
    {
      id: 1,
      type: 'credit',
      description: 'Payment from John Doe - Plumbing Service',
      amount: 15000,
      status: 'completed',
      date: '2025-10-05',
      time: '14:30'
    },
    {
      id: 2,
      type: 'debit',
      description: 'Withdrawal to Bank Account',
      amount: 50000,
      status: 'completed',
      date: '2025-10-04',
      time: '10:15'
    },
    {
      id: 3,
      type: 'credit',
      description: 'Commission - Fashion Hub Partnership',
      amount: 8500,
      status: 'pending',
      date: '2025-10-03',
      time: '16:45'
    },
    {
      id: 4,
      type: 'credit',
      description: 'Payment from Sarah - Photography Service',
      amount: 25000,
      status: 'completed',
      date: '2025-10-02',
      time: '11:20'
    }
  ];

  const handleWithdraw = (e) => {
    e.preventDefault();
    // Handle withdrawal logic here
    setShowWithdrawModal(false);
    setWithdrawAmount('');
  };

  return (
    <DashboardLayout>
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-2">
            Wallet
          </h1>
          <p className="text-lg text-neutral-600">
            Manage your earnings and transactions
          </p>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border-2 border-neutral-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-neutral-600">Total Balance</h3>
              <svg className="w-8 h-8 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-4xl font-bold text-neutral-900 mb-2">₦48,500.00</p>
            <p className="text-sm text-green-600">+₦8,500 this month</p>
          </div>

          <div className="bg-neutral-900 text-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium">Escrow Balance</h3>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <p className="text-4xl font-bold mb-2">₦8,500.00</p>
            <p className="text-sm text-neutral-300">Funds on hold</p>
          </div>

          <div className="bg-white border-2 border-neutral-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-neutral-600">Available to Withdraw</h3>
              <svg className="w-8 h-8 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <p className="text-4xl font-bold text-neutral-900 mb-4">₦40,000.00</p>
            <button
              onClick={() => setShowWithdrawModal(true)}
              className="w-full py-2 bg-neutral-900 text-white rounded-md font-medium hover:bg-neutral-800 transition-colors"
            >
              Withdraw
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white border-2 border-neutral-200 rounded-lg p-4">
            <p className="text-sm text-neutral-600 mb-1">This Month</p>
            <p className="text-2xl font-bold text-neutral-900">₦8,500</p>
          </div>
          <div className="bg-white border-2 border-neutral-200 rounded-lg p-4">
            <p className="text-sm text-neutral-600 mb-1">Last Month</p>
            <p className="text-2xl font-bold text-neutral-900">₦45,000</p>
          </div>
          <div className="bg-white border-2 border-neutral-200 rounded-lg p-4">
            <p className="text-sm text-neutral-600 mb-1">Total Earnings</p>
            <p className="text-2xl font-bold text-neutral-900">₦248,500</p>
          </div>
          <div className="bg-white border-2 border-neutral-200 rounded-lg p-4">
            <p className="text-sm text-neutral-600 mb-1">Withdrawals</p>
            <p className="text-2xl font-bold text-neutral-900">₦200,000</p>
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-white border-2 border-neutral-200 rounded-lg overflow-hidden">
          <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
            <h2 className="text-xl font-bold text-neutral-900">Transaction History</h2>
            <select className="px-3 py-2 border-2 border-neutral-200 rounded-md text-sm focus:outline-none focus:border-neutral-900">
              <option>All Transactions</option>
              <option>Credits Only</option>
              <option>Debits Only</option>
              <option>Pending</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-50 border-b border-neutral-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-neutral-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-neutral-900">{transaction.date}</div>
                      <div className="text-xs text-neutral-500">{transaction.time}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          {transaction.type === 'credit' ? (
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          )}
                        </div>
                        <div className="text-sm text-neutral-900">{transaction.description}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        transaction.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className={`text-sm font-bold ${
                        transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.type === 'credit' ? '+' : '-'}₦{transaction.amount.toLocaleString()}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-neutral-200 flex items-center justify-between">
            <button className="text-sm text-neutral-600 hover:text-neutral-900">Previous</button>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded bg-neutral-900 text-white text-sm">1</button>
              <button className="w-8 h-8 rounded text-neutral-600 hover:bg-neutral-100 text-sm">2</button>
              <button className="w-8 h-8 rounded text-neutral-600 hover:bg-neutral-100 text-sm">3</button>
            </div>
            <button className="text-sm text-neutral-600 hover:text-neutral-900">Next</button>
          </div>
        </div>
      </div>

      {/* Withdraw Modal */}
      {showWithdrawModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-neutral-900">Withdraw Funds</h3>
              <button
                onClick={() => setShowWithdrawModal(false)}
                className="text-neutral-400 hover:text-neutral-900"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleWithdraw}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-neutral-900 mb-2">
                  Available Balance: ₦40,000.00
                </label>
                <input
                  type="number"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  placeholder="Enter amount"
                  required
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-900 mb-2">
                  Bank Account
                </label>
                <select className="w-full px-4 py-3 border-2 border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900">
                  <option>GTBank - 0123456789</option>
                  <option>Access Bank - 0987654321</option>
                </select>
                <button type="button" className="text-sm text-neutral-900 font-medium hover:underline mt-2">
                  + Add New Bank Account
                </button>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowWithdrawModal(false)}
                  className="flex-1 py-3 border-2 border-neutral-200 text-neutral-900 rounded-md font-medium hover:bg-neutral-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-neutral-900 text-white rounded-md font-medium hover:bg-neutral-800 transition-colors"
                >
                  Withdraw
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Wallet;
