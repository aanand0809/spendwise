const SVG_ICONS = {
    'utensils': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2"></path><path d="M15 2v10"></path><path d="M12 2v2"></path><path d="M12 12v10"></path><path d="M6 2v20"></path><path d="M4 2v4a2 2 0 0 0 2 2 2 2 0 0 0 2-2V2"></path></svg>',
    'shopping-bag': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>',
    'graduation-cap': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>',
    'car': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"></rect><path d="M5 10h14"></path><path d="M5 15h.01"></path><path d="M19 15h.01"></path></svg>',
    'film': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>',
    'heart-pulse': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>',
    'receipt': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"></path><path d="M16 8H8"></path><path d="M16 12H8"></path><path d="M12 16H8"></path></svg>',
    'folder': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></svg>',
    'briefcase': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
    'laptop': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line></svg>',
    'trending-up': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>',
    'coins': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="M16.7 13.5A3.5 3.5 0 0 1 13 17"></path></svg>',
    'wallet': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>'
};

// Application State
const AppState = {
    transactions: [],
    budget: 25000,
    theme: 'dark',
    filters: {
        searchTerm: '',
        type: 'all',
        category: 'all',
        dateFilter: 'all',
        startDate: '',
        endDate: '',
        sortBy: 'date-desc'
    },
    pendingDeleteId: null
};

// DOM Elements Cache
const DOM = {
    // Theme
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    themeToggleIcon: document.getElementById('themeToggleIcon'),
    themeToggleText: document.getElementById('themeToggleText'),

    // Date
    currentDateDisplay: document.getElementById('currentDateDisplay'),

    // Mobile Navigation
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    sidebar: document.getElementById('sidebar'),
    sidebarOverlay: document.getElementById('sidebarOverlay'),

    // KPIs
    kpiTotalBalance: document.getElementById('kpiTotalBalance'),
    kpiTotalIncome: document.getElementById('kpiTotalIncome'),
    kpiTotalExpense: document.getElementById('kpiTotalExpense'),
    kpiTotalSavings: document.getElementById('kpiTotalSavings'),
    kpiIncomeMonth: document.getElementById('kpiIncomeMonth'),
    kpiExpenseMonth: document.getElementById('kpiExpenseMonth'),
    kpiSavingsRate: document.getElementById('kpiSavingsRate'),

    // Budget Banner & Panels
    budgetAlertBanner: document.getElementById('budgetAlertBanner'),
    budgetAlertMessage: document.getElementById('budgetAlertMessage'),
    alertAdjustBudgetBtn: document.getElementById('alertAdjustBudgetBtn'),
    sidebarBudgetSpent: document.getElementById('sidebarBudgetSpent'),
    sidebarBudgetLimit: document.getElementById('sidebarBudgetLimit'),
    sidebarProgressBar: document.getElementById('sidebarProgressBar'),
    sidebarEditBudgetBtn: document.getElementById('sidebarEditBudgetBtn'),
    budgetPanelSpent: document.getElementById('budgetPanelSpent'),
    budgetPanelTarget: document.getElementById('budgetPanelTarget'),
    budgetPercentLabel: document.getElementById('budgetPercentLabel'),
    budgetRemainingLabel: document.getElementById('budgetRemainingLabel'),
    mainProgressBarFill: document.getElementById('mainProgressBarFill'),
    budgetInsightTip: document.getElementById('budgetInsightTip'),
    openBudgetModalBtn: document.getElementById('openBudgetModalBtn'),

    // Transactions Table & Toolbar
    transactionTable: document.getElementById('transactionTable'),
    transactionTableBody: document.getElementById('transactionTableBody'),
    transactionCountBadge: document.getElementById('transactionCountBadge'),
    emptyStateView: document.getElementById('emptyStateView'),
    emptyStateTitle: document.getElementById('emptyStateTitle'),
    emptyStateSubtitle: document.getElementById('emptyStateSubtitle'),
    emptyStateAddBtn: document.getElementById('emptyStateAddBtn'),
    emptyStateDemoBtn: document.getElementById('emptyStateDemoBtn'),

    // Filters
    searchInput: document.getElementById('searchInput'),
    categoryFilter: document.getElementById('categoryFilter'),
    dateFilter: document.getElementById('dateFilter'),
    customDateFields: document.getElementById('customDateFields'),
    customStartDate: document.getElementById('customStartDate'),
    customEndDate: document.getElementById('customEndDate'),
    sortBy: document.getElementById('sortBy'),
    typePills: document.querySelectorAll('.type-pill-btn'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),

    // Action Buttons
    openAddTransactionBtn: document.getElementById('openAddTransactionBtn'),
    headerExportCsvBtn: document.getElementById('headerExportCsvBtn'),
    sidebarDemoDataBtn: document.getElementById('sidebarDemoDataBtn'),
    clearAllDataBtn: document.getElementById('clearAllDataBtn'),

    // Modals
    transactionModal: document.getElementById('transactionModal'),
    txModalTitle: document.getElementById('txModalTitle'),
    transactionForm: document.getElementById('transactionForm'),
    editTransactionId: document.getElementById('editTransactionId'),
    modalTypeExpense: document.getElementById('modalTypeExpense'),
    modalTypeIncome: document.getElementById('modalTypeIncome'),
    formTransactionType: document.getElementById('formTransactionType'),
    formDescription: document.getElementById('formDescription'),
    formAmount: document.getElementById('formAmount'),
    formDate: document.getElementById('formDate'),
    formCategory: document.getElementById('formCategory'),
    formNotes: document.getElementById('formNotes'),
    closeTxModalBtn: document.getElementById('closeTxModalBtn'),
    cancelTxModalBtn: document.getElementById('cancelTxModalBtn'),

    budgetModal: document.getElementById('budgetModal'),
    budgetForm: document.getElementById('budgetForm'),
    budgetAmountInput: document.getElementById('budgetAmountInput'),
    closeBudgetModalBtn: document.getElementById('closeBudgetModalBtn'),
    cancelBudgetModalBtn: document.getElementById('cancelBudgetModalBtn'),

    deleteConfirmModal: document.getElementById('deleteConfirmModal'),
    deleteTargetPreview: document.getElementById('deleteTargetPreview'),
    closeDeleteModalBtn: document.getElementById('closeDeleteModalBtn'),
    cancelDeleteBtn: document.getElementById('cancelDeleteBtn'),
    confirmDeleteBtn: document.getElementById('confirmDeleteBtn'),

    clearAllModal: document.getElementById('clearAllModal'),
    closeClearAllModalBtn: document.getElementById('closeClearAllModalBtn'),
    cancelClearAllBtn: document.getElementById('cancelClearAllBtn'),
    confirmClearAllBtn: document.getElementById('confirmClearAllBtn'),

    // Toast Container
    toastContainer: document.getElementById('toastContainer')
};

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    // 1. Load Theme
    AppState.theme = StorageService.getTheme();
    applyTheme(AppState.theme);

    // 2. Set Header Date
    renderHeaderDate();

    // 3. Load or Seed Data
    AppState.budget = StorageService.getBudget();
    const storedTransactions = StorageService.getTransactions();

    // First time visit seed check
    const hasInitialized = localStorage.getItem('spendwise_initialized');
    if (!hasInitialized && storedTransactions.length === 0) {
        AppState.transactions = StorageService.loadDemoData();
        localStorage.setItem('spendwise_initialized', 'true');
    } else {
        AppState.transactions = storedTransactions;
    }

    // 4. Set Default Date in Add Form to Today
    resetTransactionForm();

    // 5. Setup Event Listeners
    setupEventListeners();

    // 6. Initial Render
    renderDashboard();
}

/**
 * Format and show the current calendar date in the header
 */
function renderHeaderDate() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
    if (DOM.currentDateDisplay) {
        DOM.currentDateDisplay.textContent = formattedDate;
    }
}

/* ==========================================================================
   THEME MANAGEMENT (Dark / Light)
   ========================================================================== */

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    AppState.theme = theme;
    StorageService.saveTheme(theme);

    if (theme === 'dark') {
        DOM.themeToggleText.textContent = 'Light Mode';
        DOM.themeToggleIcon.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
        `;
    } else {
        DOM.themeToggleText.textContent = 'Dark Mode';
        DOM.themeToggleIcon.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
        `;
    }

    // Refresh charts to update grid and label colors
    ChartsManager.updateAllCharts(AppState.transactions, theme);
}

function toggleTheme() {
    const nextTheme = AppState.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    showToast(`Switched to ${nextTheme === 'dark' ? 'Dark' : 'Light'} theme`, 'info');
}

/* ==========================================================================
   DASHBOARD RENDERING
   ========================================================================== */

function renderDashboard() {
    const financials = TransactionManager.calculateFinancials(AppState.transactions, AppState.budget);

    // 1. KPI Cards
    DOM.kpiTotalBalance.textContent = TransactionManager.formatCurrency(financials.totalBalance);
    DOM.kpiTotalIncome.textContent = TransactionManager.formatCurrency(financials.totalIncome);
    DOM.kpiTotalExpense.textContent = TransactionManager.formatCurrency(financials.totalExpense);
    DOM.kpiTotalSavings.textContent = TransactionManager.formatCurrency(financials.totalSavings);

    DOM.kpiIncomeMonth.textContent = `This Month: ${TransactionManager.formatCurrency(financials.currentMonthIncome)}`;
    DOM.kpiExpenseMonth.textContent = `This Month: ${TransactionManager.formatCurrency(financials.currentMonthExpense)}`;
    DOM.kpiSavingsRate.textContent = `Savings Rate: ${financials.savingsRate}%`;

    // 2. Budget Widgets & Alerts
    renderBudgetWidgets(financials);

    // 3. Render Chart Visualizations
    ChartsManager.updateAllCharts(AppState.transactions, AppState.theme);

    // 4. Render Filtered Transactions
    renderTransactionsTable();
}

/**
 * Render budget progress, remaining stats, and warning alert banners
 */
function renderBudgetWidgets(fin) {
    const budgetLimitFormatted = TransactionManager.formatCurrency(fin.budgetLimit);
    const budgetSpentFormatted = TransactionManager.formatCurrency(fin.budgetSpent);
    const remaining = fin.budgetRemaining;

    // Sidebar Widget
    DOM.sidebarBudgetSpent.textContent = budgetSpentFormatted;
    DOM.sidebarBudgetLimit.textContent = `/ ${budgetLimitFormatted}`;
    DOM.sidebarProgressBar.style.width = `${Math.min(100, fin.budgetPercent)}%`;

    // Main Budget Panel
    DOM.budgetPanelSpent.textContent = budgetSpentFormatted;
    DOM.budgetPanelTarget.textContent = budgetLimitFormatted;
    DOM.budgetPercentLabel.textContent = `${fin.budgetPercent}% Spent`;
    
    if (remaining >= 0) {
        DOM.budgetRemainingLabel.textContent = `${TransactionManager.formatCurrency(remaining)} Remaining`;
        DOM.budgetRemainingLabel.style.color = 'var(--text-secondary)';
    } else {
        DOM.budgetRemainingLabel.textContent = `${TransactionManager.formatCurrency(Math.abs(remaining))} Over Budget!`;
        DOM.budgetRemainingLabel.style.color = 'var(--expense)';
    }

    DOM.mainProgressBarFill.style.width = `${Math.min(100, fin.budgetPercent)}%`;

    // Color progress bars by budget status
    let barColor = 'var(--primary)';
    if (fin.budgetStatus === 'warning') barColor = 'var(--warning)';
    if (fin.budgetStatus === 'danger') barColor = 'var(--expense)';
    
    DOM.sidebarProgressBar.style.backgroundColor = barColor;
    DOM.mainProgressBarFill.style.backgroundColor = barColor;

    // Budget Alert Banner
    if (fin.budgetStatus === 'danger') {
        DOM.budgetAlertBanner.className = 'budget-alert-banner danger';
        DOM.budgetAlertMessage.innerHTML = `⚠️ <strong>Budget Exceeded!</strong> You've spent <strong>${budgetSpentFormatted}</strong> this month, exceeding your monthly limit of <strong>${budgetLimitFormatted}</strong> by <strong>${TransactionManager.formatCurrency(Math.abs(remaining))}</strong>.`;
    } else if (fin.budgetStatus === 'warning') {
        DOM.budgetAlertBanner.className = 'budget-alert-banner warning';
        DOM.budgetAlertMessage.innerHTML = `⚠️ <strong>Budget Warning:</strong> You have utilized <strong>${fin.budgetPercent}%</strong> of your monthly budget limit (${budgetSpentFormatted} of ${budgetLimitFormatted}).`;
    } else {
        DOM.budgetAlertBanner.className = 'budget-alert-banner';
    }

    // Days remaining in month calculation for smart tip
    const now = new Date();
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const daysLeft = Math.max(1, daysInMonth - now.getDate());

    if (remaining > 0) {
        const safeDaily = remaining / daysLeft;
        DOM.budgetInsightTip.innerHTML = `💡 <strong>Smart Financial Tip:</strong> With ${daysLeft} days remaining this month, your safe spending limit is <strong>${TransactionManager.formatCurrency(safeDaily)}/day</strong>.`;
    } else {
        DOM.budgetInsightTip.innerHTML = `⚠️ <strong>Over Limit:</strong> Avoid non-essential discretionary expenses for the next ${daysLeft} days to rebalance your savings goal.`;
    }
}

/**
 * Filter, sort, and render transaction table rows
 */
function renderTransactionsTable() {
    const filteredList = TransactionManager.filterTransactions(AppState.transactions, AppState.filters);
    
    DOM.transactionCountBadge.textContent = `Showing ${filteredList.length} of ${AppState.transactions.length} transactions`;

    // Check if empty
    if (filteredList.length === 0) {
        DOM.transactionTable.style.display = 'none';
        DOM.emptyStateView.style.display = 'flex';

        if (AppState.transactions.length === 0) {
            DOM.emptyStateTitle.textContent = 'No transactions recorded yet';
            DOM.emptyStateSubtitle.textContent = 'Start managing your finances by adding your first income or expense, or load sample demo data.';
            DOM.emptyStateDemoBtn.style.display = 'inline-flex';
        } else {
            DOM.emptyStateTitle.textContent = 'No matching transactions';
            DOM.emptyStateSubtitle.textContent = 'No transactions match your current search and filter settings. Try resetting your filters.';
            DOM.emptyStateDemoBtn.style.display = 'none';
        }
        return;
    }

    DOM.transactionTable.style.display = 'table';
    DOM.emptyStateView.style.display = 'none';

    // Populate table rows
    DOM.transactionTableBody.innerHTML = '';
    
    filteredList.forEach(t => {
        const tr = document.createElement('tr');
        tr.className = 'transaction-row';
        tr.dataset.id = t.id;

        const meta = TransactionManager.getCategoryMeta(t.category, t.type);
        const iconSvg = SVG_ICONS[meta.icon] || SVG_ICONS['folder'];
        const formattedDate = TransactionManager.formatDate(t.date);
        const formattedAmount = TransactionManager.formatCurrency(t.amount, true, t.type);
        const isIncome = t.type === 'income';

        tr.innerHTML = `
            <td>
                <div class="tx-desc-cell">
                    <div class="tx-cat-icon" style="background-color: ${meta.bg}; color: ${meta.color};">
                        ${iconSvg}
                    </div>
                    <div>
                        <span class="tx-desc-title">${escapeHtml(t.description)}</span>
                        ${t.notes ? `<span class="tx-desc-notes">${escapeHtml(t.notes)}</span>` : ''}
                    </div>
                </div>
            </td>
            <td>
                <span class="tx-cat-badge" style="background-color: ${meta.bg}; color: ${meta.color};">
                    ${escapeHtml(meta.label || t.category)}
                </span>
            </td>
            <td class="tx-date-cell">
                ${formattedDate}
            </td>
            <td class="tx-amount-cell ${isIncome ? 'income' : 'expense'}">
                ${formattedAmount}
            </td>
            <td class="tx-actions-cell">
                <button class="action-icon-btn edit-tx-btn" data-id="${t.id}" title="Edit Transaction" aria-label="Edit ${escapeHtml(t.description)}">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 20h9"></path>
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                </button>
                <button class="action-icon-btn delete-btn delete-tx-btn" data-id="${t.id}" title="Delete Transaction" aria-label="Delete ${escapeHtml(t.description)}">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            </td>
        `;

        DOM.transactionTableBody.appendChild(tr);
    });

    // Toggle reset filters button visibility
    const isFiltered = (
        AppState.filters.searchTerm !== '' ||
        AppState.filters.type !== 'all' ||
        AppState.filters.category !== 'all' ||
        AppState.filters.dateFilter !== 'all' ||
        AppState.filters.sortBy !== 'date-desc'
    );
    DOM.resetFiltersBtn.style.display = isFiltered ? 'inline-flex' : 'none';
}

/* ==========================================================================
   MODAL CONTROLS & FORM OPERATIONS
   ========================================================================== */

/**
 * Populate Category select in modal based on current type (income or expense)
 */
function populateCategoryOptions(type = 'expense', selectedCategory = '') {
    const categories = TransactionManager.getCategories(type);
    DOM.formCategory.innerHTML = '';

    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat.id;
        option.textContent = cat.label;
        if (selectedCategory && selectedCategory === cat.id) {
            option.selected = true;
        }
        DOM.formCategory.appendChild(option);
    });
}

/**
 * Switch modal type segmented button (Expense vs Income)
 */
function setModalTransactionType(type) {
    DOM.formTransactionType.value = type;
    if (type === 'expense') {
        DOM.modalTypeExpense.className = 'type-segmented-option active expense';
        DOM.modalTypeIncome.className = 'type-segmented-option income';
    } else {
        DOM.modalTypeExpense.className = 'type-segmented-option expense';
        DOM.modalTypeIncome.className = 'type-segmented-option active income';
    }
    populateCategoryOptions(type);
}

/**
 * Reset and clear Add/Edit form inputs
 */
function resetTransactionForm() {
    DOM.editTransactionId.value = '';
    DOM.formDescription.value = '';
    DOM.formAmount.value = '';
    DOM.formNotes.value = '';
    DOM.formDate.value = new Date().toISOString().split('T')[0];
    setModalTransactionType('expense');
    DOM.txModalTitle.textContent = 'Add Transaction';
}

/**
 * Open Transaction modal for creation
 */
function openAddTransactionModal() {
    resetTransactionForm();
    DOM.transactionModal.classList.add('active');
    setTimeout(() => DOM.formDescription.focus(), 100);
}

/**
 * Open Transaction modal for editing
 */
function openEditTransactionModal(id) {
    const tx = AppState.transactions.find(t => t.id === id);
    if (!tx) {
        showToast('Transaction not found', 'error');
        return;
    }

    DOM.editTransactionId.value = tx.id;
    DOM.txModalTitle.textContent = 'Edit Transaction';
    DOM.formDescription.value = tx.description;
    DOM.formAmount.value = tx.amount;
    DOM.formDate.value = tx.date;
    DOM.formNotes.value = tx.notes || '';

    setModalTransactionType(tx.type);
    populateCategoryOptions(tx.type, tx.category);

    DOM.transactionModal.classList.add('active');
    setTimeout(() => DOM.formDescription.focus(), 100);
}

function closeTransactionModal() {
    DOM.transactionModal.classList.remove('active');
}

/**
 * Handle Add/Edit Transaction Form Submission
 */
function handleTransactionSubmit(event) {
    event.preventDefault();

    const id = DOM.editTransactionId.value.trim();
    const type = DOM.formTransactionType.value;
    const description = DOM.formDescription.value.trim();
    const amount = parseFloat(DOM.formAmount.value);
    const date = DOM.formDate.value;
    const category = DOM.formCategory.value;
    const notes = DOM.formNotes.value.trim();

    const txData = { description, amount, type, category, date, notes };
    const validation = TransactionManager.validate(txData);

    if (!validation.isValid) {
        showToast(validation.error, 'error');
        return;
    }

    if (id) {
        // Edit existing transaction
        const index = AppState.transactions.findIndex(t => t.id === id);
        if (index !== -1) {
            AppState.transactions[index] = { ...txData, id };
            StorageService.saveTransactions(AppState.transactions);
            showToast('Transaction updated successfully', 'success');
        }
    } else {
        // Create new transaction
        const newTransaction = {
            id: 'tx-' + Date.now(),
            ...txData
        };
        AppState.transactions.unshift(newTransaction);
        StorageService.saveTransactions(AppState.transactions);
        showToast('Transaction recorded successfully', 'success');
    }

    closeTransactionModal();
    renderDashboard();
}

/**
 * Open Delete Confirmation Modal
 */
function openDeleteModal(id) {
    const tx = AppState.transactions.find(t => t.id === id);
    if (!tx) return;

    AppState.pendingDeleteId = id;
    DOM.deleteTargetPreview.innerHTML = `
        <strong>${escapeHtml(tx.description)}</strong> — ${TransactionManager.formatCurrency(tx.amount, true, tx.type)} (${tx.category}) on ${TransactionManager.formatDate(tx.date)}
    `;
    DOM.deleteConfirmModal.classList.add('active');
}

function closeDeleteModal() {
    DOM.deleteConfirmModal.classList.remove('active');
    AppState.pendingDeleteId = null;
}

function handleConfirmDelete() {
    if (!AppState.pendingDeleteId) return;

    AppState.transactions = AppState.transactions.filter(t => t.id !== AppState.pendingDeleteId);
    StorageService.saveTransactions(AppState.transactions);
    
    closeDeleteModal();
    renderDashboard();
    showToast('Transaction deleted successfully', 'success');
}

/**
 * Budget Modal Controls
 */
function openBudgetModal() {
    DOM.budgetAmountInput.value = AppState.budget;
    DOM.budgetModal.classList.add('active');
    setTimeout(() => DOM.budgetAmountInput.focus(), 100);
}

function closeBudgetModal() {
    DOM.budgetModal.classList.remove('active');
}

function handleBudgetSubmit(event) {
    event.preventDefault();
    const amount = parseFloat(DOM.budgetAmountInput.value);
    if (isNaN(amount) || amount <= 0) {
        showToast('Please enter a budget amount greater than 0', 'error');
        return;
    }

    AppState.budget = amount;
    StorageService.saveBudget(amount);
    closeBudgetModal();
    renderDashboard();
    showToast('Monthly budget goal updated', 'success');
}

/**
 * Clear All Data Modal Controls
 */
function openClearAllModal() {
    DOM.clearAllModal.classList.add('active');
}

function closeClearAllModal() {
    DOM.clearAllModal.classList.remove('active');
}

function handleConfirmClearAll() {
    StorageService.clearAllData();
    AppState.transactions = [];
    AppState.budget = 25000;
    closeClearAllModal();
    renderDashboard();
    showToast('All transaction and budget data has been erased', 'warning');
}

/**
 * Demo Data Loader
 */
function handleLoadDemoData() {
    AppState.transactions = StorageService.loadDemoData();
    AppState.budget = StorageService.getBudget();
    renderDashboard();
    showToast('10 sample transactions loaded successfully', 'success');
}

/* ==========================================================================
   EVENT LISTENERS SETUP
   ========================================================================== */

function setupEventListeners() {
    // Theme Switcher
    DOM.themeToggleBtn.addEventListener('click', toggleTheme);

    // Mobile Navigation Toggle
    DOM.mobileMenuBtn.addEventListener('click', () => {
        DOM.sidebar.classList.toggle('mobile-open');
        DOM.sidebarOverlay.classList.toggle('active');
    });

    DOM.sidebarOverlay.addEventListener('click', () => {
        DOM.sidebar.classList.remove('mobile-open');
        DOM.sidebarOverlay.classList.remove('active');
    });

    // Nav Links click close mobile sidebar
    document.querySelectorAll('.sidebar-nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            DOM.sidebar.classList.remove('mobile-open');
            DOM.sidebarOverlay.classList.remove('active');

            document.querySelectorAll('.sidebar-nav .nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Add Transaction Buttons
    DOM.openAddTransactionBtn.addEventListener('click', openAddTransactionModal);
    DOM.emptyStateAddBtn.addEventListener('click', openAddTransactionModal);
    DOM.closeTxModalBtn.addEventListener('click', closeTransactionModal);
    DOM.cancelTxModalBtn.addEventListener('click', closeTransactionModal);
    DOM.transactionForm.addEventListener('submit', handleTransactionSubmit);

    // Modal Type Segmented Control
    DOM.modalTypeExpense.addEventListener('click', () => setModalTransactionType('expense'));
    DOM.modalTypeIncome.addEventListener('click', () => setModalTransactionType('income'));

    // Budget Modals
    DOM.openBudgetModalBtn.addEventListener('click', openBudgetModal);
    DOM.sidebarEditBudgetBtn.addEventListener('click', openBudgetModal);
    DOM.alertAdjustBudgetBtn.addEventListener('click', openBudgetModal);
    DOM.closeBudgetModalBtn.addEventListener('click', closeBudgetModal);
    DOM.cancelBudgetModalBtn.addEventListener('click', closeBudgetModal);
    DOM.budgetForm.addEventListener('submit', handleBudgetSubmit);

    // Delete Transaction Modal
    DOM.closeDeleteModalBtn.addEventListener('click', closeDeleteModal);
    DOM.cancelDeleteBtn.addEventListener('click', closeDeleteModal);
    DOM.confirmDeleteBtn.addEventListener('click', handleConfirmDelete);

    // Table Row Action Delegation (Edit / Delete)
    DOM.transactionTableBody.addEventListener('click', (e) => {
        const editBtn = e.target.closest('.edit-tx-btn');
        if (editBtn) {
            const id = editBtn.dataset.id;
            openEditTransactionModal(id);
            return;
        }

        const deleteBtn = e.target.closest('.delete-tx-btn');
        if (deleteBtn) {
            const id = deleteBtn.dataset.id;
            openDeleteModal(id);
            return;
        }
    });

    // Clear All Data
    DOM.clearAllDataBtn.addEventListener('click', openClearAllModal);
    DOM.closeClearAllModalBtn.addEventListener('click', closeClearAllModal);
    DOM.cancelClearAllBtn.addEventListener('click', closeClearAllModal);
    DOM.confirmClearAllBtn.addEventListener('click', handleConfirmClearAll);

    // Load Demo Data
    DOM.sidebarDemoDataBtn.addEventListener('click', handleLoadDemoData);
    DOM.emptyStateDemoBtn.addEventListener('click', handleLoadDemoData);

    // Export CSV
    DOM.headerExportCsvBtn.addEventListener('click', () => {
        const filteredList = TransactionManager.filterTransactions(AppState.transactions, AppState.filters);
        const success = TransactionManager.exportToCSV(filteredList.length > 0 ? filteredList : AppState.transactions);
        if (success) {
            showToast('Transactions exported to CSV', 'success');
        }
    });

    // Real-Time Search with Debounce
    let searchDebounceTimer;
    DOM.searchInput.addEventListener('input', (e) => {
        clearTimeout(searchDebounceTimer);
        searchDebounceTimer = setTimeout(() => {
            AppState.filters.searchTerm = e.target.value;
            renderTransactionsTable();
        }, 150);
    });

    // Type Pills Filter (All / Income / Expense)
    DOM.typePills.forEach(btn => {
        btn.addEventListener('click', () => {
            DOM.typePills.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            AppState.filters.type = btn.dataset.type;
            renderTransactionsTable();
        });
    });

    // Category Filter
    DOM.categoryFilter.addEventListener('change', (e) => {
        AppState.filters.category = e.target.value;
        renderTransactionsTable();
    });

    // Date Range Filter
    DOM.dateFilter.addEventListener('change', (e) => {
        AppState.filters.dateFilter = e.target.value;
        if (e.target.value === 'custom') {
            DOM.customDateFields.style.display = 'inline-flex';
        } else {
            DOM.customDateFields.style.display = 'none';
        }
        renderTransactionsTable();
    });

    // Custom Date Range Pickers
    DOM.customStartDate.addEventListener('change', (e) => {
        AppState.filters.startDate = e.target.value;
        renderTransactionsTable();
    });

    DOM.customEndDate.addEventListener('change', (e) => {
        AppState.filters.endDate = e.target.value;
        renderTransactionsTable();
    });

    // Sort By Dropdown
    DOM.sortBy.addEventListener('change', (e) => {
        AppState.filters.sortBy = e.target.value;
        renderTransactionsTable();
    });

    // Reset Filters Button
    DOM.resetFiltersBtn.addEventListener('click', resetAllFilters);

    // Close Modals on Outside Click & ESC Key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeTransactionModal();
            closeBudgetModal();
            closeDeleteModal();
            closeClearAllModal();
        }
    });

    [DOM.transactionModal, DOM.budgetModal, DOM.deleteConfirmModal, DOM.clearAllModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
}

/**
 * Reset all transaction filter toolbar controls
 */
function resetAllFilters() {
    AppState.filters = {
        searchTerm: '',
        type: 'all',
        category: 'all',
        dateFilter: 'all',
        startDate: '',
        endDate: '',
        sortBy: 'date-desc'
    };

    DOM.searchInput.value = '';
    DOM.categoryFilter.value = 'all';
    DOM.dateFilter.value = 'all';
    DOM.customDateFields.style.display = 'none';
    DOM.customStartDate.value = '';
    DOM.customEndDate.value = '';
    DOM.sortBy.value = 'date-desc';

    DOM.typePills.forEach(b => {
        if (b.dataset.type === 'all') b.classList.add('active');
        else b.classList.remove('active');
    });

    renderTransactionsTable();
    showToast('Filters reset', 'info');
}

/* ==========================================================================
   TOAST NOTIFICATION ENGINE
   ========================================================================== */

function showToast(message, type = 'info') {
    if (!DOM.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let iconSvg = '';
    if (type === 'success') {
        iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    } else if (type === 'error') {
        iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>';
    } else if (type === 'warning') {
        iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>';
    } else {
        iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
    }

    toast.innerHTML = `
        <span style="flex-shrink: 0; display: flex; align-items: center;">${iconSvg}</span>
        <span>${escapeHtml(message)}</span>
    `;

    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

/* ==========================================================================
   SECURITY & UTILITY HELPERS
   ========================================================================== */

/**
 * Escape raw strings to prevent XSS injection
 */
function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}