import StatusLabel, { Status } from '@/app/components/status-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <StatusLabel status={Status.Active} disabled={false}>
        Active
      </StatusLabel>
      <StatusLabel status={Status.NotActive} disabled={true}>
        Not Active
      </StatusLabel>
      <StatusLabel status={Status.Pending} disabled={false}>
        Pending
      </StatusLabel>
      <StatusLabel status={Status.Suspended} disabled={true}>
        Suspended
      </StatusLabel>
    </main>
  );
}
