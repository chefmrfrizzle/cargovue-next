const stages = ["Intake", "Inventory", "Chronology", "Review", "Release"];

export default function WorkspaceHome() {
  return (
    <main>
      <header>
        <div>
          <p className="eyebrow">Synthetic-only workspace</p>
          <h1>Aurora qualification</h1>
        </div>
        <span className="status">Foundation mode</span>
      </header>
      <nav aria-label="Matter stages">
        {stages.map((stage, index) => (
          <span className={index === 0 ? "active" : ""} key={stage}>
            {stage}
          </span>
        ))}
      </nav>
      <section className="layout">
        <article>
          <p className="label">Trust boundary</p>
          <h2>No production identity or evidence is connected.</h2>
          <p>This shell proves layout and separation only. Intake remains disabled until Gate 1.</p>
          <button type="button" disabled>
            Upload evidence
          </button>
        </article>
        <aside>
          <h2>Release gates</h2>
          <ul>
            <li>
              <strong>Blocked</strong> Evidence custody
            </li>
            <li>
              <strong>Blocked</strong> Tenant authorization
            </li>
            <li>
              <strong>Blocked</strong> Human review
            </li>
            <li>
              <strong>Blocked</strong> Managed signing
            </li>
          </ul>
        </aside>
      </section>
    </main>
  );
}
