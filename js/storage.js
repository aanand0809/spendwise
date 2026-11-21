

const STORAGE_KEYS = {
    TRANSACTIONS: 'spendwise_transactions',
    BUDGET: 'spendwise_budget',
    THEME: 'spendwise_theme',
    CURRENCY: 'spendwise_currency'
};

const StorageService = {
    /**
     * Fetch all stored transactions.
     * @returns {Array} Array of transaction objects
     */
    getTransactions() {
        try {
            const data = localStorage.getItem(STORAGE_KEYS.TRANSACTIONS);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Error reading transactions from LocalStorage:', error);
            return [];
        }
    },

    /**
     * Save transactions array to LocalStorage.
     * @param {Array} transactions 
     */
    saveTransactions(transactions) {
        try {
            localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(transactions));
            return true;
        } catch (error) {
            console.error('Error saving transactions to LocalStorage:', error);
            return false;
        }
    },

    /**
     * Get monthly budget amount (default to 25,000 if not set)
     * @returns {number}
     */
    getBudget() {
        try {
            const budget = localStorage.getItem(STORAGE_KEYS.BUDGET);
            return budget !== null ? parseFloat(budget) : 25000;
        } catch (error) {
            console.error('Error reading budget:', error);
            return 25000;
        }
    },

    /**
     * Save monthly budget amount
     * @param {number} amount 
     */
    saveBudget(amount) {
        try {
            localStorage.setItem(STORAGE_KEYS.BUDGET, String(amount));
            return true;
        } catch (error) {
            console.error('Error saving budget:', error);
            return false;
        }
    },

    /**
     * Get stored UI theme preference ('dark' or 'light')
     * @returns {string}
     */
    getTheme() {
        return localStorage.getItem(STORAGE_KEYS.THEME) || 'dark';
    },

    /**
     * Save UI theme preference
     * @param {string} theme 
     */
    saveTheme(theme) {
        localStorage.setItem(STORAGE_KEYS.THEME, theme);
    },

    /**
     * Clear all user transactions and budget data
     */
    clearAllData() {
        localStorage.removeItem(STORAGE_KEYS.TRANSACTIONS);
        localStorage.removeItem(STORAGE_KEYS.BUDGET);
    },

    /**
     * Seeds initial realistic sample transactions for student/professional demo
     * Allows immediate exploration of all features without manually typing 10 items.
     */
    loadDemoData() {
        const today = new Date();
        const formatDate = (daysAgo) => {
            const d = new Date(today);
            d.setDate(d.getDate() - daysAgo);
            return d.toISOString().split('T')[0];
        };

        const demoTransactions = [
            {
                id: 'tx-' + (Date.now() - 100000),
                description: 'Monthly Salary / Stipend',
                amount: 45000,
                type: 'income',
                category: 'Salary',
                date: formatDate(12),
                notes: 'Credited from Tech Corp Internship'
            },
            {
                id: 'tx-' + (Date.now() - 90000),
                description: 'Freelance Web Design project',
                amount: 12000,
                type: 'income',
                category: 'Freelance',
                date: formatDate(7),
                notes: 'Landing page redesign client payment'
            },
            {
                id: 'tx-' + (Date.now() - 80000),
                description: 'Apartment Rent & Maintenance',
                amount: 14000,
                type: 'expense',
                category: 'Bills',
                date: formatDate(10),
                notes: 'Shared flat monthly rent'
            },
            {
                id: 'tx-' + (Date.now() - 70000),
                description: 'Grocery & Supermarket Stock',
                amount: 4200,
                type: 'expense',
                category: 'Food',
                date: formatDate(6),
                notes: 'Weekly staples and vegetables'
            },
            {
                id: 'tx-' + (Date.now() - 60000),
                description: 'Metro Card Recharge & Uber',
                amount: 1850,
                type: 'expense',
                category: 'Transportation',
                date: formatDate(5),
                notes: 'Monthly transit pass and weekend cab'
            },
            {
                id: 'tx-' + (Date.now() - 50000),
                description: 'Online Course & Books',
                amount: 2499,
                type: 'expense',
                category: 'Education',
                date: formatDate(4),
                notes: 'Full-stack system design course'
            },
            {
                id: 'tx-' + (Date.now() - 40000),
                description: 'Dinner with College Friends',
                amount: 1650,
                type: 'expense',
                category: 'Food',
                date: formatDate(3),
                notes: 'Weekend dinner at bistro'
            },
            {
                id: 'tx-' + (Date.now() - 30000),
                description: 'Streaming & Internet WiFi Bill',
                amount: 1299,
                type: 'expense',
                category: 'Bills',
                date: formatDate(2),
                notes: 'Fiber net + OTT subscription'
            },
            {
                id: 'tx-' + (Date.now() - 20000),
                description: 'Gym Membership & Vitamins',
                amount: 2200,
                type: 'expense',
                category: 'Healthcare',
                date: formatDate(1),
                notes: 'Monthly fitness center renewal'
            },
            {
                id: 'tx-' + (Date.now() - 10000),
                description: 'Weekend Movie & Popcorn',
                amount: 750,
                type: 'expense',
                category: 'Entertainment',
                date: formatDate(0),
                notes: 'IMAX movie ticket'
            }
        ];

        this.saveTransactions(demoTransactions);
        this.saveBudget(30000);
        return demoTransactions;
    }
};

window.StorageService = StorageService;
