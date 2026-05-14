import { forwardRef } from "react"

const QuickStats = forwardRef(({ activeProfile }, ref) => {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "TODAY"];
  const maxValue = Math.max(...activeProfile.history);
  const weeklyTotal = activeProfile.history.reduce((sum, val) => sum + val, 0);
  const avgDaily = (weeklyTotal / activeProfile.history.length).toFixed(1);

  return (
    <div ref={ref} className="bg-bg-stats">
      <div className="flex items-start justify-between px-8 py-6">
        <div>
          <h2 className="text-text-primary text-xl font-bold">Quick Stats</h2>
          <p className="text-text-muted text-sm">
            Activity performance over the last 7 days
          </p>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col">
            <span className="text-text-muted text-[10px] tracking-widest">
              AVG DAILY
            </span>
            <span className="text-right text-2xl font-bold text-[#3B81F6]">
              {avgDaily}
            </span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-text-muted text-[10px] tracking-widest">
              WEEKLY TOTAL
            </span>
            <span className="text-accent-primary text-2xl font-bold">
              {weeklyTotal}
            </span>
          </div>
        </div>
      </div>

      {/* Bars + labels wrapper */}
      <div className="flex gap-3 px-8 pb-6">
        {activeProfile.history.map((value, index) => {
          const isToday = index === 6;
          const heightPercent = (value / maxValue) * 100;

          return (
            <div
              key={index}
              className="flex flex-1 flex-col items-center gap-2"
            >
              {/* Bar container — fixed height, aligns bars to bottom */}
              <div
                className="flex w-full items-end"
                style={{ height: "120px" }}
              >
                <div
                  className={`w-full rounded-t-sm ${
                    isToday
                      ? "bg-today-bar border-t-4 border-blue-500"
                      : "bg-bar-default border-t-4 border-[#7011CE]"
                  }`}
                  style={{ height: `${heightPercent}%` }}
                />
              </div>

              {/* Label always sits below, outside the bar container */}
              <span
                className={`text-[10px] font-bold tracking-wider ${isToday ? "text-[#7011CE]" : "text-text-muted"}`}
              >
                {days[index]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
})

export default QuickStats
