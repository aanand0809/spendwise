/**
 * SpendWise - Charts Module (js/charts.js)
 * ========================================
 * Visualizes financial data using Chart.js:
 * 1. Expense Breakdown (Doughnut Chart)
 * 2. Monthly Income vs Expenses (Bar Chart)
 * Seamlessly adapts colors to Light & Dark themes.
 */

const ChartsManager = {
    expenseChartInstance: null,
    monthlyChartInstance: null,

    /**
     * Get theme color configurations
     * @param {string} theme 'dark' | 'light'
     */
    getThemeConfig(theme = 'dark') {
        const isDark = theme === 'dark';
        return {
            textColor: isDark ? '#94A3B8' : '#475569',
            headingColor: isDark ? '#F8FAFC' : '#0F172A',
            gridColor: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)',
            tooltipBg: isDark ? '#1E293B' : '#0F172A',
            tooltipBorder: isDark ? '#334155' : '#E2E8F0',
            fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        };
    },

    /**
     * Initialize or refresh both charts
     * @param {Array} transactions 
     * @param {string} theme 
     */
    updateAllCharts(transactions, theme = 'dark') {
        if (typeof Chart === 'undefined') {
            console.warn('Chart.js is not loaded yet.');
            return;
        }

        const themeCfg = this.getThemeConfig(theme);
        this.renderExpenseBreakdownChart(transactions, themeCfg);
        this.renderMonthlyComparisonChart(transactions, themeCfg);
    },

    /**
     * Render Category-wise Expense Breakdown Doughnut Chart
     */
    renderExpenseBreakdownChart(transactions, themeCfg) {
        const canvas = document.getElementById('expenseBreakdownChart');
        const emptyState = document.getElementById('expenseChartEmptyState');
        if (!canvas) return;

        // Group expenses by category
        const categoryMap = {};
        transactions.forEach(t => {
            if (t.type === 'expense') {
                const cat = t.category || 'Other';
                const amt = parseFloat(t.amount) || 0;
                categoryMap[cat] = (categoryMap[cat] || 0) + amt;
            }
        });

        const labels = Object.keys(categoryMap);
        const dataValues = Object.values(categoryMap);
        const hasExpenses = dataValues.length > 0 && dataValues.some(v => v > 0);

        if (!hasExpenses) {
            if (this.expenseChartInstance) {
                this.expenseChartInstance.destroy();
                this.expenseChartInstance = null;
            }
            canvas.style.display = 'none';
            if (emptyState) emptyState.style.display = 'flex';
            return;
        }

        canvas.style.display = 'block';
        if (emptyState) emptyState.style.display = 'none';

        // Derive category colors from TransactionManager metadata
        const backgroundColors = labels.map(catName => {
            const meta = TransactionManager.getCategoryMeta(catName, 'expense');
            return meta ? meta.color : '#94A3B8';
        });

        // Destroy previous instance
        if (this.expenseChartInstance) {
            this.expenseChartInstance.destroy();
        }

        const ctx = canvas.getContext('2d');
        this.expenseChartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: dataValues,
                    backgroundColor: backgroundColors,
                    borderColor: themeCfg.tooltipBg,
                    borderWidth: 2,
                    hoverOffset: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: themeCfg.textColor,
                            font: {
                                family: themeCfg.fontFamily,
                                size: 12,
                                weight: 500
                            },
                            padding: 16,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        backgroundColor: themeCfg.tooltipBg,
                        titleColor: '#FFFFFF',
                        bodyColor: '#E2E8F0',
                        borderColor: themeCfg.tooltipBorder,
                        borderWidth: 1,
                        padding: 12,
                        cornerRadius: 8,
                        titleFont: { family: themeCfg.fontFamily, weight: 600 },
                        bodyFont: { family: themeCfg.fontFamily },
                        callbacks: {
                            label: function(context) {
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const value = context.parsed;
                                const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                                return ` ${context.label}: ₹${value.toLocaleString('en-IN', { minimumFractionDigits: 2 })} (${percentage}%)`;
                            }
                        }
                    }
                },
                animation: {
                    animateScale: true,
                    animateRotate: true,
                    duration: 750
                }
            }
        });
    },

    /**
     * Render Monthly Income vs Expense Bar Chart (last 6 months)
     */
    renderMonthlyComparisonChart(transactions, themeCfg) {
        const canvas = document.getElementById('monthlyComparisonChart');
        const emptyState = document.getElementById('monthlyChartEmptyState');
        if (!canvas) return;

        // Generate last 6 months bucket in order
        const months = [];
        const now = new Date();
        for (let i = 5; i >= 0; i--) {
            const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
            const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
            const label = d.toLocaleString('en-US', { month: 'short' });
            months.push({ key, label, income: 0, expense: 0 });
        }

        // Aggregate transactions into month buckets
        let hasData = false;
        transactions.forEach(t => {
            const tDate = new Date(t.date);
            if (isNaN(tDate.getTime())) return;
            const key = `${tDate.getFullYear()}-${String(tDate.getMonth() + 1).padStart(2, '0')}`;
            const bucket = months.find(m => m.key === key);
            if (bucket) {
                const amt = parseFloat(t.amount) || 0;
                if (t.type === 'income') {
                    bucket.income += amt;
                    hasData = true;
                } else {
                    bucket.expense += amt;
                    hasData = true;
                }
            }
        });

        if (!hasData) {
            if (this.monthlyChartInstance) {
                this.monthlyChartInstance.destroy();
                this.monthlyChartInstance = null;
            }
            canvas.style.display = 'none';
            if (emptyState) emptyState.style.display = 'flex';
            return;
        }

        canvas.style.display = 'block';
        if (emptyState) emptyState.style.display = 'none';

        if (this.monthlyChartInstance) {
            this.monthlyChartInstance.destroy();
        }

        const ctx = canvas.getContext('2d');
        this.monthlyChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: months.map(m => m.label),
                datasets: [
                    {
                        label: 'Income',
                        data: months.map(m => m.income),
                        backgroundColor: '#10B981', // vibrant emerald
                        borderRadius: 6,
                        maxBarThickness: 24
                    },
                    {
                        label: 'Expense',
                        data: months.map(m => m.expense),
                        backgroundColor: '#EF4444', // vibrant rose/red
                        borderRadius: 6,
                        maxBarThickness: 24
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: themeCfg.textColor,
                            font: { family: themeCfg.fontFamily, size: 12 }
                        }
                    },
                    y: {
                        grid: {
                            color: themeCfg.gridColor,
                            drawBorder: false
                        },
                        ticks: {
                            color: themeCfg.textColor,
                            font: { family: themeCfg.fontFamily, size: 11 },
                            callback: function(value) {
                                if (value >= 1000) return '₹' + (value / 1000).toFixed(0) + 'k';
                                return '₹' + value;
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        align: 'end',
                        labels: {
                            color: themeCfg.textColor,
                            font: { family: themeCfg.fontFamily, size: 12, weight: 500 },
                            usePointStyle: true,
                            pointStyle: 'circle',
                            padding: 12
                        }
                    },
                    tooltip: {
                        backgroundColor: themeCfg.tooltipBg,
                        titleColor: '#FFFFFF',
                        bodyColor: '#E2E8F0',
                        borderColor: themeCfg.tooltipBorder,
                        borderWidth: 1,
                        padding: 12,
                        cornerRadius: 8,
                        titleFont: { family: themeCfg.fontFamily, weight: 600 },
                        bodyFont: { family: themeCfg.fontFamily },
                        callbacks: {
                            label: function(context) {
                                return ` ${context.dataset.label}: ₹${context.parsed.y.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
                            }
                        }
                    }
                },
                animation: {
                    duration: 700
                }
            }
        });
    }
};

window.ChartsManager = ChartsManager;
