export default function ReportsPage() {
  return (
    <div className="relative min-h-screen flex flex-col w-full max-w-md mx-auto bg-background-light dark:bg-background-dark overflow-hidden pb-24">
      {/* Header */}
      <header className="flex items-center justify-between p-4 pt-6 bg-background-light dark:bg-background-dark sticky top-0 z-10">
        <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-[24px]">
            arrow_back
          </span>
        </button>
        <h1 className="text-lg font-bold leading-tight tracking-tight">
          Analytics
        </h1>
        <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-primary">
          <span className="material-symbols-outlined text-[24px]">
            download
          </span>
        </button>
      </header>
      {/* Filters Scroll View */}
      <div className="w-full px-4 mb-6">
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#222c49] border border-gray-200 dark:border-transparent px-4 active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[18px] text-text-secondary">
              label
            </span>
            <span className="text-sm font-semibold whitespace-nowrap">
              All Categories
            </span>
            <span className="material-symbols-outlined text-[18px] text-text-secondary">
              keyboard_arrow_down
            </span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#222c49] border border-gray-200 dark:border-transparent px-4 active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[18px] text-text-secondary">
              credit_card
            </span>
            <span className="text-sm font-semibold whitespace-nowrap">
              All Methods
            </span>
            <span className="material-symbols-outlined text-[18px] text-text-secondary">
              keyboard_arrow_down
            </span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#222c49] border border-gray-200 dark:border-transparent px-4 active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[18px] text-text-secondary">
              calendar_today
            </span>
            <span className="text-sm font-semibold whitespace-nowrap">
              This Quarter
            </span>
            <span className="material-symbols-outlined text-[18px] text-text-secondary">
              keyboard_arrow_down
            </span>
          </button>
        </div>
      </div>
      {/* Scrollable Main Content */}
      <div className="flex flex-col gap-6 px-4">
        {/* Donut Chart Card */}
        <div className="bg-white dark:bg-card-dark rounded-xl p-5 shadow-sm border border-gray-100 dark:border-white/5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-text-secondary text-sm font-medium mb-1">
                Expenses Breakdown
              </p>
              <h2 className="text-3xl font-bold tracking-tight">$42,500</h2>
            </div>
            <div className="flex items-center gap-1 text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded text-xs font-bold">
              <span className="material-symbols-outlined text-[14px]">
                trending_up
              </span>
              <span>12%</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            {/* SVG Donut Chart Simulation */}
            <div className="relative size-48">
              <svg
                className="transform -rotate-90 w-full h-full"
                viewBox="0 0 100 100"
              >
                {/* Background Circle */}
                <circle
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r="40"
                  stroke="#222c49"
                  strokeWidth="12"
                ></circle>
                {/* Segment 1: Payroll (Primary Blue) - 45% */}
                <circle
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r="40"
                  stroke="#0b3fda"
                  strokeDasharray="113 251"
                  strokeDashoffset="0"
                  strokeLinecap="round"
                  strokeWidth="12"
                ></circle>
                {/* Segment 2: Marketing (Purple) - 30% */}
                <circle
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r="40"
                  stroke="#8b5cf6"
                  strokeDasharray="75 251"
                  strokeDashoffset="-120"
                  strokeLinecap="round"
                  strokeWidth="12"
                ></circle>
                {/* Segment 3: Software (Cyan) - 25% */}
                <circle
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r="40"
                  stroke="#06b6d4"
                  strokeDasharray="63 251"
                  strokeDashoffset="-200"
                  strokeLinecap="round"
                  strokeWidth="12"
                ></circle>
              </svg>
              {/* Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xs text-text-secondary font-medium">
                  Total
                </span>
                <span className="text-lg font-bold">128</span>
                <span className="text-[10px] text-text-secondary uppercase tracking-wider">
                  Trans.
                </span>
              </div>
            </div>
            {/* Legend */}
            <div className="flex justify-between w-full px-2">
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1.5">
                  <div className="size-2 rounded-full bg-[#0b3fda]"></div>
                  <span className="text-xs font-medium text-text-secondary">
                    Payroll
                  </span>
                </div>
                <span className="text-sm font-bold">45%</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1.5">
                  <div className="size-2 rounded-full bg-[#8b5cf6]"></div>
                  <span className="text-xs font-medium text-text-secondary">
                    Marketing
                  </span>
                </div>
                <span className="text-sm font-bold">30%</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1.5">
                  <div className="size-2 rounded-full bg-[#06b6d4]"></div>
                  <span className="text-xs font-medium text-text-secondary">
                    Software
                  </span>
                </div>
                <span className="text-sm font-bold">25%</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bar Chart Card */}
        <div className="bg-white dark:bg-card-dark rounded-xl p-5 shadow-sm border border-gray-100 dark:border-white/5">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-text-secondary text-sm font-medium mb-1">
                Monthly Burn Rate
              </p>
              <h2 className="text-3xl font-bold tracking-tight">$12,800</h2>
            </div>
            <div className="flex items-center gap-1 text-rose-500 bg-rose-500/10 px-2 py-1 rounded text-xs font-bold">
              <span className="material-symbols-outlined text-[14px]">
                trending_down
              </span>
              <span>5%</span>
            </div>
          </div>
          {/* Custom Bar Chart Grid */}
          <div className="grid grid-cols-6 gap-2 items-end h-32 w-full">
            {/* Jan */}
            <div className="flex flex-col items-center gap-2 h-full justify-end group">
              <div className="w-full bg-slate-200 dark:bg-[#222c49] rounded-t-sm h-[60%] group-hover:bg-primary/50 transition-colors duration-300 relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] font-bold bg-slate-800 text-white px-1.5 py-0.5 rounded transition-opacity">
                  12k
                </div>
              </div>
              <span className="text-[10px] font-bold text-text-secondary uppercase">
                Jan
              </span>
            </div>
            {/* Feb */}
            <div className="flex flex-col items-center gap-2 h-full justify-end group">
              <div className="w-full bg-slate-200 dark:bg-[#222c49] rounded-t-sm h-[75%] group-hover:bg-primary/50 transition-colors duration-300 relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] font-bold bg-slate-800 text-white px-1.5 py-0.5 rounded transition-opacity">
                  15k
                </div>
              </div>
              <span className="text-[10px] font-bold text-text-secondary uppercase">
                Feb
              </span>
            </div>
            {/* Mar */}
            <div className="flex flex-col items-center gap-2 h-full justify-end group">
              <div className="w-full bg-slate-200 dark:bg-[#222c49] rounded-t-sm h-[50%] group-hover:bg-primary/50 transition-colors duration-300 relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] font-bold bg-slate-800 text-white px-1.5 py-0.5 rounded transition-opacity">
                  10k
                </div>
              </div>
              <span className="text-[10px] font-bold text-text-secondary uppercase">
                Mar
              </span>
            </div>
            {/* Apr */}
            <div className="flex flex-col items-center gap-2 h-full justify-end group">
              <div className="w-full bg-slate-200 dark:bg-[#222c49] rounded-t-sm h-[85%] group-hover:bg-primary/50 transition-colors duration-300 relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] font-bold bg-slate-800 text-white px-1.5 py-0.5 rounded transition-opacity">
                  17k
                </div>
              </div>
              <span className="text-[10px] font-bold text-text-secondary uppercase">
                Apr
              </span>
            </div>
            {/* May */}
            <div className="flex flex-col items-center gap-2 h-full justify-end group">
              <div className="w-full bg-primary rounded-t-sm h-[90%] relative shadow-[0_0_10px_rgba(11,63,218,0.4)]">
                {/* Tooltip active for current month */}
              </div>
              <span className="text-[10px] font-bold text-white uppercase">
                May
              </span>
            </div>
            {/* Jun */}
            <div className="flex flex-col items-center gap-2 h-full justify-end group">
              <div className="w-full bg-slate-200 dark:bg-[#222c49] rounded-t-sm h-[65%] group-hover:bg-primary/50 transition-colors duration-300 relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] font-bold bg-slate-800 text-white px-1.5 py-0.5 rounded transition-opacity">
                  13k
                </div>
              </div>
              <span className="text-[10px] font-bold text-text-secondary uppercase">
                Jun
              </span>
            </div>
          </div>
        </div>
        {/* Detailed Ledger Section */}
        <div className="flex flex-col gap-4 mt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Recent Transactions</h3>
            <button className="text-sm font-semibold text-primary">
              View All
            </button>
          </div>
          <div className="flex flex-col gap-0 rounded-xl overflow-hidden bg-white dark:bg-card-dark border border-gray-100 dark:border-white/5">
            {/* Item 1 */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-white/5 active:bg-gray-50 dark:active:bg-white/5 transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="relative size-12 rounded-full bg-[#FF9900]/10 flex items-center justify-center shrink-0">
                  {/* AWS Logo placeholder */}
                  <span
                    className="material-symbols-outlined text-[#FF9900]"
                    style={{ fontSize: "24px" }}
                  >
                    cloud
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    AWS Web Services
                  </span>
                  <span className="text-xs text-text-secondary font-medium">
                    Today, 2:30 PM
                  </span>
                </div>
              </div>
              <span className="font-bold text-sm text-rose-500">
                -$1,200.00
              </span>
            </div>
            {/* Item 2 */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-white/5 active:bg-gray-50 dark:active:bg-white/5 transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="relative size-12 rounded-full bg-[#635BFF]/10 flex items-center justify-center shrink-0">
                  {/* Stripe Logo placeholder */}
                  <span
                    className="material-symbols-outlined text-[#635BFF]"
                    style={{ fontSize: "24px" }}
                  >
                    payments
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    Stripe Payout
                  </span>
                  <span className="text-xs text-text-secondary font-medium">
                    Yesterday, 9:00 AM
                  </span>
                </div>
              </div>
              <span className="font-bold text-sm text-emerald-500">
                +$4,500.00
              </span>
            </div>
            {/* Item 3 */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-white/5 active:bg-gray-50 dark:active:bg-white/5 transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="relative size-12 rounded-full bg-[#4A154B]/10 flex items-center justify-center shrink-0">
                  {/* Slack Logo placeholder */}
                  <span
                    className="material-symbols-outlined text-[#4A154B]"
                    style={{ fontSize: "24px" }}
                  >
                    tag
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    Slack
                  </span>
                  <span className="text-xs text-text-secondary font-medium">
                    May 12, 11:45 AM
                  </span>
                </div>
              </div>
              <span className="font-bold text-sm text-rose-500">
                -$24.00
              </span>
            </div>
            {/* Item 4 */}
            <div className="flex items-center justify-between p-4 active:bg-gray-50 dark:active:bg-white/5 transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="relative size-12 rounded-full bg-white dark:bg-white/10 flex items-center justify-center shrink-0">
                  {/* Uber Logo placeholder */}
                  <span
                    className="material-symbols-outlined dark:text-white text-black"
                    style={{ fontSize: "24px" }}
                  >
                    local_taxi
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    Uber Trip
                  </span>
                  <span className="text-xs text-text-secondary font-medium">
                    May 11, 8:15 PM
                  </span>
                </div>
              </div>
              <span className="font-bold text-sm text-rose-500">
                -$18.50
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 w-full max-w-md bg-white/80 dark:bg-[#101422]/90 backdrop-blur-lg border-t border-gray-200 dark:border-white/5 pb-6 pt-2 z-50">
        <div className="flex items-center justify-around px-2">
          <button className="flex flex-col items-center gap-1 p-2 text-text-secondary hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[26px]">home</span>
            <span className="text-[10px] font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 text-primary">
            <span className="material-symbols-outlined text-[26px] fill-current">
              bar_chart
            </span>
            <span className="text-[10px] font-bold">Reports</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 text-text-secondary hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[26px]">
              credit_card
            </span>
            <span className="text-[10px] font-medium">Cards</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 text-text-secondary hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[26px]">
              settings
            </span>
            <span className="text-[10px] font-medium">Settings</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
