import "./styles/Stats.css";

// ── Mock data (replace with real API calls later) ──────────────────────────
const SEASON_START = new Date("2026-07-01T00:00:00");
const SEASON_END = new Date("2026-08-31T23:59:59");
const SEASON_DAYS = 62;

function getSeasonProgress() {
  const now = new Date();
  if (now < SEASON_START)
    return { elapsed: 0, remaining: SEASON_DAYS, pct: 0, status: "pre" };
  if (now > SEASON_END)
    return { elapsed: SEASON_DAYS, remaining: 0, pct: 100, status: "post" };
  const elapsed = Math.floor((now - SEASON_START) / (1000 * 60 * 60 * 24)) + 1;
  return {
    elapsed,
    remaining: SEASON_DAYS - elapsed,
    pct: Math.round((elapsed / SEASON_DAYS) * 100),
    status: "active",
  };
}

const season = getSeasonProgress();

const stats = {
  // Participation
  totalTrips: 4827,
  uniqueAnglers: 1543,
  tripsToday: 87,
  peakDayTrips: 214,
  peakDayDate: "July 4, 2026",
  avgTripsPerDay:
    season.elapsed > 0 ? Math.round(4827 / Math.max(season.elapsed, 1)) : 0,
  avgAnglersPerTrip: 2.8,

  // Catch
  totalFishReported: 8241,
  totalHarvested: 5934,
  totalReleased: 2307,
  avgCatchPerTrip: 1.7,
  releaseRate: 28,

  // Reporting
  complianceRate: 94.2,
  avgReportTime: "3.1 hours",
  reportsUnder1Hr: 41,

  // Trends
  busiestDay: "Saturday",
  popularDeparture: "6:00 AM - 8:00 AM",
};

function StatCard({ label, value, sub, accent }) {
  return (
    <div className={`stat-card${accent ? " stat-card--accent" : ""}`}>
      <span className="stat-card__value">{value}</span>
      <span className="stat-card__label">{label}</span>
      {sub && <span className="stat-card__sub">{sub}</span>}
    </div>
  );
}

export default function Stats() {
  return (
    <main className="content-container">
      {/* Season progress banner */}
      <section className="section section--bg-primary stats-banner">
        <div className="section-inner">
          <h2 className="stats-banner__title">2026 Season Dashboard</h2>
          <p className="stats-banner__sub">
            {season.status === "pre" && "Season opens July 1, 2026"}
            {season.status === "active" &&
              `Day ${season.elapsed} of ${SEASON_DAYS}  ·  ${season.remaining} days remaining`}
            {season.status === "post" && "The 2026 season has concluded"}
          </p>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={season.pct}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-bar__track">
              <div
                className="progress-bar__fill"
                style={{ width: `${season.pct}%` }}
              />
            </div>
            <div className="progress-bar__labels">
              <span>July 1</span>
              <span>{season.pct}% complete</span>
              <span>August 31</span>
            </div>
          </div>
        </div>
      </section>

      {/* Headline stats */}
      <section className="section section--bg-white">
        <div className="section-inner">
          <div className="stat-grid stat-grid--headline">
            <StatCard
              label="Trip Reports Created"
              value={stats.totalTrips.toLocaleString()}
              accent
            />
            <StatCard
              label="Red Snapper Reported"
              value={stats.totalFishReported.toLocaleString()}
              accent
            />
            <StatCard
              label="Registered Anglers"
              value={stats.uniqueAnglers.toLocaleString()}
              accent
            />
            <StatCard
              label="Reporting Compliance"
              value={`${stats.complianceRate}%`}
              accent
            />
          </div>
        </div>
      </section>

      {/* Detailed stats */}
      <section className="section section--bg-page">
        <div className="section-inner">
          {/* Catch breakdown */}
          <h3 className="stats-section-heading">Catch Breakdown</h3>
          <div className="stat-grid stat-grid--detail">
            <StatCard
              label="Fish Harvested"
              value={stats.totalHarvested.toLocaleString()}
              sub={`${100 - stats.releaseRate}% of total`}
            />
            <StatCard
              label="Fish Released"
              value={stats.totalReleased.toLocaleString()}
              sub={`${stats.releaseRate}% release rate`}
            />
            <StatCard
              label="Avg. Catch per Trip"
              value={stats.avgCatchPerTrip}
              sub="harvested + released"
            />
          </div>

          {/* Participation */}
          <h3 className="stats-section-heading">Participation</h3>
          <div className="stat-grid stat-grid--detail">
            <StatCard label="Trips Registered Today" value={stats.tripsToday} />
            <StatCard label="Avg. Trips per Day" value={stats.avgTripsPerDay} />
            <StatCard
              label="Avg. Anglers per Trip"
              value={stats.avgAnglersPerTrip}
            />
            <StatCard
              label="Peak Day"
              value={stats.peakDayTrips}
              sub={stats.peakDayDate}
            />
          </div>

          {/* Reporting */}
          <h3 className="stats-section-heading">Reporting</h3>
          <div className="stat-grid stat-grid--detail">
            <StatCard label="Avg. Time to Report" value={stats.avgReportTime} />
            <StatCard
              label="Reported Within 1 Hour"
              value={`${stats.reportsUnder1Hr}%`}
            />
            <StatCard
              label="Busiest Day of the Week"
              value={stats.busiestDay}
            />
            <StatCard
              label="Most Popular Departure"
              value={stats.popularDeparture}
            />
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section section--bg-white">
        <div className="section-inner">
          <p className="stats-disclaimer">
            Data shown is collected through the VESL app and updated
            periodically. All figures reflect self-reported recreational fishing
            activity under Georgia's Exempted Fishing Permit (EFP). This data
            helps build the case for longer future seasons.
          </p>
        </div>
      </section>
    </main>
  );
}
