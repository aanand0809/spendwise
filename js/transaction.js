

const CATEGORIES = {
    expense: [
        { id: 'Food', label: 'Food & Dining', icon: 'utensils', color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.15)' },
        { id: 'Shopping', label: 'Shopping', icon: 'shopping-bag', color: '#EC4899', bg: 'rgba(236, 72, 153, 0.15)' },
        { id: 'Education', label: 'Education', icon: 'graduation-cap', color: '#3B82F6', bg: 'rgba(59, 130, 246, 0.15)' },
        { id: 'Transportation', label: 'Transportation', icon: 'car', color: '#8B5CF6', bg: 'rgba(139, 92, 246, 0.15)' },
        { id: 'Entertainment', label: 'Entertainment', icon: 'film', color: '#10B981', bg: 'rgba(16, 185, 129, 0.15)' },
        { id: 'Healthcare', label: 'Healthcare', icon: 'heart-pulse', color: '#EF4444', bg: 'rgba(239, 68, 68, 0.15)' },
        { id: 'Bills', label: 'Bills & Utilities', icon: 'receipt', color: '#06B6D4', bg: 'rgba(6, 182, 212, 0.15)' },
        { id: 'Other', label: 'Other', icon: 'folder', color: '#64748B', bg: 'rgba(100, 116, 139, 0.15)' }
    ],
    income: [
        { id: 'Salary', label: 'Salary / Stipend', icon: 'briefcase', color: '#10B981', bg: 'rgba(16, 185, 129, 0.15)' },
        { id: 'Freelance', label: 'Freelance', icon: 'laptop', color: '#06B6D4', bg: 'rgba(6, 182, 212, 0.15)' },
        { id: 'Investment', label: 'Investment & Returns', icon: 'trending-up', color: '#3B82F6', bg: 'rgba(59, 130, 246, 0.15)' },
        { id: 'Allowance', label: 'Allowance / Pocket Money', icon: 'coins', color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.15)' },
        { id: 'Other', label: 'Other Income', icon: 'wallet', color: '#8B5CF6', bg: 'rgba(139, 92, 246, 0.15)' }
    ]
};

const TransactionManager = {
    /**
     * Return category metadata list by type
     * @param {'income'|'expense'} type 
     */
    getCategories(type) {
        return CATEGORIES[type] || CATEGORIES.expense;
    },

    /**
     * Retrieve category detail by id and optional type
     */
    getCategoryMeta(categoryId, type = null) {
        if (type && CATEGORIES[type]) {
            const found = CATEGORIES[type].find(c => c.id === categoryId);
            if (found) return found;
        }
        // Search across all
        const all = [...CATEGORIES.expense, ...CATEGORIES.income];
        return all.find(c => c.id === categoryId) || {
            id: categoryId || 'Other',
            label: categoryId || 'Other',
            icon: 'folder',
            color: '#64748B',
            bg: 'rgba(100, 116, 139, 0.15)'
        };
    },

    /**
     * Validate transaction input
     * @param {Object} data 
     * @returns {{ isValid: boolean, error?: string }}
     */
    validate(data) {
        if (!data.description || typeof data.description !== 'string' || data.description.trim() === '') {
            return { isValid: false, error: 'Please enter a valid description (e.g. Grocery, Book purchase).' };
        }

        const amount = parseFloat(data.amount);
        if (isNaN(amount) || amount <= 0) {
            return { isValid: false, error: 'Please enter a valid amount greater than 0.' };
        }

        if (!['income', 'expense'].includes(data.type)) {
            return { isValid: false, error: 'Transaction type must be Income or Expense.' };
        }

        if (!data.category || data.category.trim() === '') {
            return { isValid: false, error: 'Please select a category.' };
        }

        if (!data.date || isNaN(new Date(data.date).getTime())) {
            return { isValid: false, error: 'Please select a valid transaction date.' };
        }

        return { isValid: true };
    },

    /**
     * Calculate financial summary metrics
     * @param {Array} transactions 
     * @param {number} budget 
     */
    calculateFinancials(transactions, budget = 25000) {
        let totalIncome = 0;
        let totalExpense = 0;

        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth(); // 0-indexed

        let currentMonthIncome = 0;
        let currentMonthExpense = 0;

        transactions.forEach(t => {
            const amount = parseFloat(t.amount) || 0;
            const tDate = new Date(t.date);
            const isThisMonth = (tDate.getFullYear() === currentYear && tDate.getMonth() === currentMonth);

            if (t.type === 'income') {
                totalIncome += amount;
                if (isThisMonth) currentMonthIncome += amount;
            } else {
                totalExpense += amount;
                if (isThisMonth) currentMonthExpense += amount;
            }
        });

        const totalBalance = totalIncome - totalExpense;
        const totalSavings = Math.max(0, totalBalance);
        const savingsRate = totalIncome > 0 ? Math.round(((totalIncome - totalExpense) / totalIncome) * 100) : 0;

        // Budget tracking based on current month's expenses
        const budgetLimit = Math.max(0, budget);
        const budgetSpent = currentMonthExpense;
        const budgetRemaining = budgetLimit - budgetSpent;
        const budgetPercent = budgetLimit > 0 ? Math.round((budgetSpent / budgetLimit) * 100) : 0;

        let budgetStatus = 'safe'; // green
        if (budgetPercent >= 100) {
            budgetStatus = 'danger'; // red
        } else if (budgetPercent >= 80) {
            budgetStatus = 'warning'; // amber
        }

        return {
            totalBalance,
            totalIncome,
            totalExpense,
            totalSavings,
            savingsRate,
            currentMonthIncome,
            currentMonthExpense,
            budgetLimit,
            budgetSpent,
            budgetRemaining,
            budgetPercent,
            budgetStatus,
            transactionCount: transactions.length
        };
    },

    /**
     * Filter transactions based on criteria
     */
    filterTransactions(transactions, filters = {}) {
        const {
            searchTerm = '',
            type = 'all',
            category = 'all',
            dateFilter = 'all',
            startDate = '',
            endDate = '',
            sortBy = 'date-desc'
        } = filters;

        const normalizedSearch = searchTerm.trim().toLowerCase();
        const now = new Date();

        const filtered = transactions.filter(t => {
            // Type filter
            if (type !== 'all' && t.type !== type) return false;

            // Category filter
            if (category !== 'all' && t.category !== category) return false;

            // Search filter
            if (normalizedSearch) {
                const matchDesc = t.description?.toLowerCase().includes(normalizedSearch);
                const matchCat = t.category?.toLowerCase().includes(normalizedSearch);
                const matchNotes = t.notes?.toLowerCase().includes(normalizedSearch);
                const matchAmount = String(t.amount).includes(normalizedSearch);
                if (!matchDesc && !matchCat && !matchNotes && !matchAmount) {
                    return false;
                }
            }

            // Date filtering
            if (dateFilter !== 'all') {
                const tDate = new Date(t.date);
                if (dateFilter === 'this-month') {
                    if (tDate.getFullYear() !== now.getFullYear() || tDate.getMonth() !== now.getMonth()) {
                        return false;
                    }
                } else if (dateFilter === 'last-month') {
                    const lastMonthDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
                    if (tDate.getFullYear() !== lastMonthDate.getFullYear() || tDate.getMonth() !== lastMonthDate.getMonth()) {
                        return false;
                    }
                } else if (dateFilter === 'last-30-days') {
                    const thirtyDaysAgo = new Date();
                    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
                    if (tDate < thirtyDaysAgo || tDate > now) {
                        return false;
                    }
                } else if (dateFilter === 'custom') {
                    if (startDate && new Date(t.date) < new Date(startDate)) return false;
                    if (endDate && new Date(t.date) > new Date(endDate)) return false;
                }
            }

            return true;
        });

        // Sorting
        return filtered.sort((a, b) => {
            if (sortBy === 'date-desc') {
                return new Date(b.date) - new Date(a.date) || b.id.localeCompare(a.id);
            }
            if (sortBy === 'date-asc') {
                return new Date(a.date) - new Date(b.date) || a.id.localeCompare(b.id);
            }
            if (sortBy === 'amount-desc') {
                return parseFloat(b.amount) - parseFloat(a.amount);
            }
            if (sortBy === 'amount-asc') {
                return parseFloat(a.amount) - parseFloat(b.amount);
            }
            return 0;
        });
    },

    /**
     * Format currency display with Indian Rupee symbol
     */
    formatCurrency(amount, includeSign = false, type = 'expense') {
        const num = Math.abs(parseFloat(amount) || 0);
        const formatted = new Intl.NumberFormat('en-IN', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(num);

        if (!includeSign) {
            return `₹${formatted}`;
        }

        const sign = type === 'income' ? '+' : '-';
        return `${sign}₹${formatted}`;
    },

    /**
     * Format ISO date string into readable representation
     */
    formatDate(dateStr) {
        if (!dateStr) return '';
        const d = new Date(dateStr);
        if (isNaN(d.getTime())) return dateStr;
        return d.toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    },

    /**
     * Export transaction dataset to a CSV file and trigger browser download
     */
    exportToCSV(transactions) {
        if (!transactions || transactions.length === 0) {
            alert('No transactions available to export!');
            return false;
        }

        const headers = ['ID', 'Date', 'Type', 'Category', 'Description', 'Amount (INR)', 'Notes'];
        const csvRows = [headers.join(',')];

        transactions.forEach(t => {
            const row = [
                `"${t.id}"`,
                `"${t.date}"`,
                `"${t.type}"`,
                `"${t.category}"`,
                `"${(t.description || '').replace(/"/g, '""')}"`,
                parseFloat(t.amount).toFixed(2),
                `"${(t.notes || '').replace(/"/g, '""')}"`
            ];
            csvRows.push(row.join(','));
        });

        const csvString = csvRows.join('\r\n');
        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        
        const timestamp = new Date().toISOString().split('T')[0];
        link.setAttribute('href', url);
        link.setAttribute('download', `SpendWise_Transactions_${timestamp}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        return true;
    }
};

window.TransactionManager = TransactionManager;
window.CATEGORIES = CATEGORIES;
