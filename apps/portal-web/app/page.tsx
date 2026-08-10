export default function PortalHome() {
  return (
    <main>
      <p className="eyebrow">Counterparty portal · Isolated release view</p>
      <h1>No release has been granted.</h1>
      <p>
        This portal can display only a frozen, approved release projection. It cannot search the
        analyst workspace or reveal draft evidence.
      </p>
      <section>
        <span aria-hidden="true">01</span>
        <div>
          <strong>Recipient grant</strong>
          <small>Required and time-bounded</small>
        </div>
        <span aria-hidden="true">02</span>
        <div>
          <strong>Signed manifest</strong>
          <small>Must match the released bytes</small>
        </div>
        <span aria-hidden="true">03</span>
        <div>
          <strong>Independent verification</strong>
          <small>Available without trusting the portal</small>
        </div>
      </section>
    </main>
  );
}
