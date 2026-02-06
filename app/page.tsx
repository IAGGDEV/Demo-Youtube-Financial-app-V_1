import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto flex h-screen w-full max-w-md flex-col overflow-hidden bg-background-light shadow-2xl dark:bg-background-dark sm:border-x sm:border-gray-200 dark:sm:border-gray-800 relative font-display">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between bg-background-light/90 px-5 py-4 backdrop-blur-md dark:bg-background-dark/90">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="size-10 overflow-hidden rounded-full border border-gray-100 dark:border-gray-700 bg-gray-200">
              <img
                alt="Profile"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoiPnrTyG3idLnUFfRHV45NekHSSl0fNXkI_po5NpPISEelotMxgcadI8-_NZqCSur6yNTgDIYHeZpG7KufkIRKH1W2POFdLnCpDPHUp7q8F-8m9L4MalUivVuIEQTneU5MA7cCGe5akewNgv9qmS-EqNkwy4WHyWbRLFI32zhisa8OqVpKPxYGyXjvm1f5IzZVDdRtWz7Lmcihgb3wZnXtYE5NLHKcCNCi6q50kWNFP829C9kAFdDxAR8_ZInXHy9ejfUPqrZkgoT"
              />
            </div>
            <div className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-green-500 dark:border-background-dark"></div>
          </div>
          <div>
            <h1 className="text-sm font-medium text-text-secondary dark:text-gray-400">
              Welcome back,
            </h1>
            <p className="text-base font-bold text-text-main dark:text-white">
              Alex Morgan
            </p>
          </div>
        </div>
        <button className="flex size-10 items-center justify-center rounded-full bg-background-subtle text-text-main hover:bg-gray-100 dark:bg-background-dark-subtle dark:text-white dark:hover:bg-gray-700 transition-colors relative">
          <span className="material-symbols-outlined text-[24px]">
            notifications
          </span>
          <span className="absolute right-2 top-2 size-2 rounded-full bg-danger"></span>
        </button>
      </header>
      {/* Main Scrollable Content */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden bg-background-light pb-24 dark:bg-background-dark no-scrollbar">
        {/* Date & Action Section */}
        <div className="flex items-center justify-between px-5 py-2">
          <div className="flex items-center gap-2 rounded-full border border-border-light bg-background-subtle px-3 py-1.5 dark:border-border-dark dark:bg-background-dark-subtle">
            <span className="material-symbols-outlined text-text-secondary text-[18px]">
              calendar_month
            </span>
            <span className="text-xs font-semibold text-text-main dark:text-white">
              Last 30 Days
            </span>
            <span className="material-symbols-outlined text-text-secondary text-[16px]">
              expand_more
            </span>
          </div>
          <button className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-primary/30 transition-transform active:scale-95">
            <span className="material-symbols-outlined text-[16px]">
              add
            </span>
            <span>Transaction</span>
          </button>
        </div>
        {/* KPI Carousel */}
        <div className="mt-4 flex w-full gap-4 overflow-x-auto px-5 pb-4 pt-1 no-scrollbar snap-x snap-mandatory">
          {/* Total Balance Card */}
          <div className="relative flex min-w-[260px] snap-center flex-col justify-between overflow-hidden rounded-2xl bg-primary p-5 text-white shadow-lg shadow-primary/25">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl"></div>
            <div className="relative z-10 mb-6 flex items-start justify-between">
              <div className="rounded-lg bg-white/20 p-2 backdrop-blur-sm">
                <span className="material-symbols-outlined block text-[24px]">
                  account_balance_wallet
                </span>
              </div>
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium backdrop-blur-sm">
                +12% vs last mo
              </span>
            </div>
            <div className="relative z-10">
              <p className="text-sm font-medium text-blue-100">
                Total Balance
              </p>
              <h3 className="text-2xl font-bold tracking-tight">
                $124,500.00
              </h3>
            </div>
          </div>
          {/* Monthly Revenue Card */}
          <div className="flex min-w-[180px] snap-center flex-col justify-between rounded-2xl border border-border-light bg-white p-5 shadow-soft dark:border-border-dark dark:bg-background-dark-subtle">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex size-8 items-center justify-center rounded-lg bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                <span className="material-symbols-outlined text-[20px]">
                  trending_up
                </span>
              </div>
              <span className="flex items-center gap-0.5 text-xs font-bold text-success">
                +8%
              </span>
            </div>
            <div>
              <p className="text-xs font-medium text-text-secondary dark:text-gray-400">
                Revenue
              </p>
              <h3 className="mt-1 text-lg font-bold text-text-main dark:text-white">
                $45,200
              </h3>
            </div>
          </div>
          {/* Monthly Expenses Card */}
          <div className="flex min-w-[180px] snap-center flex-col justify-between rounded-2xl border border-border-light bg-white p-5 shadow-soft dark:border-border-dark dark:bg-background-dark-subtle">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex size-8 items-center justify-center rounded-lg bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                <span className="material-symbols-outlined text-[20px]">
                  trending_down
                </span>
              </div>
              <span className="flex items-center gap-0.5 text-xs font-bold text-danger">
                -3%
              </span>
            </div>
            <div>
              <p className="text-xs font-medium text-text-secondary dark:text-gray-400">
                Expenses
              </p>
              <h3 className="mt-1 text-lg font-bold text-text-main dark:text-white">
                $12,400
              </h3>
            </div>
          </div>
          {/* Net Profit Card */}
          <div className="flex min-w-[180px] snap-center flex-col justify-between rounded-2xl border border-border-light bg-white p-5 shadow-soft dark:border-border-dark dark:bg-background-dark-subtle">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex size-8 items-center justify-center rounded-lg bg-blue-100 text-primary dark:bg-blue-900/30 dark:text-blue-400">
                <span className="material-symbols-outlined text-[20px]">
                  savings
                </span>
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-text-secondary dark:text-gray-400">
                Net Profit
              </p>
              <h3 className="mt-1 text-lg font-bold text-text-main dark:text-white">
                $32,800
              </h3>
            </div>
          </div>
        </div>
        {/* Chart Section */}
        <div className="mt-4 px-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-text-main dark:text-white">
              Cash Flow
            </h3>
            <div className="flex gap-2">
              <div className="flex items-center gap-1">
                <span className="size-2 rounded-full bg-primary"></span>
                <span className="text-xs text-text-secondary">In</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="size-2 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                <span className="text-xs text-text-secondary">Out</span>
              </div>
            </div>
          </div>
          <div className="mt-4 min-h-[180px] w-full rounded-2xl border border-border-light bg-background-subtle p-4 dark:border-border-dark dark:bg-background-dark-subtle relative overflow-hidden">
            {/* Custom SVG Chart */}
            <svg
              className="h-full w-full"
              preserveAspectRatio="none"
              viewBox="0 0 100 50"
            >
              <defs>
                <linearGradient id="incomeGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#135bec" stopOpacity="0.2"></stop>
                  <stop
                    offset="100%"
                    stopColor="#135bec"
                    stopOpacity="0"
                  ></stop>
                </linearGradient>
              </defs>
              {/* Grid Lines */}
              <line
                className="dark:stroke-gray-700"
                stroke="#e5e7eb"
                strokeWidth="0.2"
                x1="0"
                x2="100"
                y1="10"
                y2="10"
              ></line>
              <line
                className="dark:stroke-gray-700"
                stroke="#e5e7eb"
                strokeWidth="0.2"
                x1="0"
                x2="100"
                y1="25"
                y2="25"
              ></line>
              <line
                className="dark:stroke-gray-700"
                stroke="#e5e7eb"
                strokeWidth="0.2"
                x1="0"
                x2="100"
                y1="40"
                y2="40"
              ></line>
              {/* Income Line */}
              <path
                d="M0,35 Q10,32 20,25 T40,20 T60,15 T80,22 T100,10"
                fill="none"
                stroke="#135bec"
                strokeLinecap="round"
                strokeWidth="1.5"
              ></path>
              <path
                d="M0,35 Q10,32 20,25 T40,20 T60,15 T80,22 T100,10 V50 H0 Z"
                fill="url(#incomeGradient)"
                stroke="none"
              ></path>
              {/* Expense Line (Subtle) */}
              <path
                className="dark:stroke-gray-500"
                d="M0,45 Q15,42 30,38 T50,40 T70,35 T100,38"
                fill="none"
                stroke="#9ca3af"
                strokeDasharray="2,1"
                strokeLinecap="round"
                strokeWidth="1"
              ></path>
            </svg>
            {/* Tooltip Simulation */}
            <div className="absolute left-[60%] top-[25%] flex flex-col items-center">
              <div className="z-10 rounded bg-text-main px-2 py-1 text-[10px] font-bold text-white shadow-lg dark:bg-white dark:text-background-dark">
                $4,250
              </div>
              <div className="h-14 w-[1px] border-l border-dashed border-primary"></div>
              <div className="size-2 rounded-full border-2 border-white bg-primary dark:border-background-dark-subtle"></div>
            </div>
          </div>
          <div className="mt-2 flex justify-between px-2 text-[10px] font-medium text-text-secondary dark:text-gray-500">
            <span>Oct 1</span>
            <span>Oct 8</span>
            <span>Oct 15</span>
            <span>Oct 22</span>
            <span>Oct 30</span>
          </div>
        </div>
        {/* Recent Transactions List */}
        <div className="mt-8 px-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold text-text-main dark:text-white">
              Transactions
            </h3>
            <a
              className="text-xs font-semibold text-primary hover:text-primary-dark"
              href="#"
            >
              View All
            </a>
          </div>
          <div className="flex flex-col gap-3">
            {/* Transaction Item 1 */}
            <div className="group flex items-center justify-between rounded-xl bg-white p-3 shadow-sm ring-1 ring-border-light transition-all hover:bg-gray-50 dark:bg-background-dark-subtle dark:ring-border-dark dark:hover:bg-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                  <span className="material-symbols-outlined text-[20px]">
                    payments
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-text-main dark:text-white">
                    Stripe Payment
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-indigo-50 px-1.5 py-0.5 text-[10px] font-medium text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
                      Software
                    </span>
                    <span className="text-[10px] text-text-secondary">
                      Today
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-success">+$1,200.00</p>
                <span className="text-[10px] font-medium text-text-secondary">
                  Completed
                </span>
              </div>
            </div>
            {/* Transaction Item 2 */}
            <div className="group flex items-center justify-between rounded-xl bg-white p-3 shadow-sm ring-1 ring-border-light transition-all hover:bg-gray-50 dark:bg-background-dark-subtle dark:ring-border-dark dark:hover:bg-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                  <span className="material-symbols-outlined text-[20px]">
                    cloud_queue
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-text-main dark:text-white">
                    AWS Services
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-orange-50 px-1.5 py-0.5 text-[10px] font-medium text-orange-700 dark:bg-orange-900/50 dark:text-orange-300">
                      Infra
                    </span>
                    <span className="text-[10px] text-text-secondary">
                      Yesterday
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-text-main dark:text-white">
                  -$450.00
                </p>
                <span className="text-[10px] font-medium text-orange-500">
                  Pending
                </span>
              </div>
            </div>
            {/* Transaction Item 3 */}
            <div className="group flex items-center justify-between rounded-xl bg-white p-3 shadow-sm ring-1 ring-border-light transition-all hover:bg-gray-50 dark:bg-background-dark-subtle dark:ring-border-dark dark:hover:bg-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400">
                  <span className="material-symbols-outlined text-[20px]">
                    inventory_2
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-text-main dark:text-white">
                    Office Depot
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-teal-50 px-1.5 py-0.5 text-[10px] font-medium text-teal-700 dark:bg-teal-900/50 dark:text-teal-300">
                      Supplies
                    </span>
                    <span className="text-[10px] text-text-secondary">
                      Oct 24
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-text-main dark:text-white">
                  -$125.50
                </p>
                <span className="text-[10px] font-medium text-text-secondary">
                  Completed
                </span>
              </div>
            </div>
            {/* Transaction Item 4 */}
            <div className="group flex items-center justify-between rounded-xl bg-white p-3 shadow-sm ring-1 ring-border-light transition-all hover:bg-gray-50 dark:bg-background-dark-subtle dark:ring-border-dark dark:hover:bg-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <span className="material-symbols-outlined text-[20px]">
                    flight
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-text-main dark:text-white">
                    Delta Airlines
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[10px] font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                      Travel
                    </span>
                    <span className="text-[10px] text-text-secondary">
                      Oct 20
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-text-main dark:text-white">
                  -$450.00
                </p>
                <span className="text-[10px] font-medium text-text-secondary">
                  Completed
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-6"></div> {/* Bottom Spacer */}
      </main>
      {/* Bottom Navigation Bar */}
      <nav className="shadow-nav absolute bottom-0 z-30 flex h-[80px] w-full items-start justify-around border-t border-border-light bg-background-light pt-3 pb-8 dark:border-border-dark dark:bg-background-dark">
        <button className="flex flex-col items-center gap-1 text-primary">
          <span
            className="material-symbols-outlined filled text-[26px]"
          // style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
          >
            dashboard
          </span>
          <span className="text-[10px] font-medium">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-text-secondary hover:text-text-main dark:text-gray-500 dark:hover:text-gray-300">
          <span className="material-symbols-outlined text-[26px]">
            receipt_long
          </span>
          <span className="text-[10px] font-medium">Transact</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-text-secondary hover:text-text-main dark:text-gray-500 dark:hover:text-gray-300">
          <span className="material-symbols-outlined text-[26px]">
            show_chart
          </span>
          <span className="text-[10px] font-medium">Cash Flow</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-text-secondary hover:text-text-main dark:text-gray-500 dark:hover:text-gray-300">
          <span className="material-symbols-outlined text-[26px]">
            description
          </span>
          <span className="text-[10px] font-medium">Reports</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-text-secondary hover:text-text-main dark:text-gray-500 dark:hover:text-gray-300">
          <span className="material-symbols-outlined text-[26px]">
            settings
          </span>
          <span className="text-[10px] font-medium">Settings</span>
        </button>
      </nav>
    </div>
  );
}
