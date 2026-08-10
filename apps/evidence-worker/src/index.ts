export interface InspectionJob {
  contractVersion: "1.0";
  jobId: string;
  quarantineObjectVersionId?: string;
}

export interface InspectionRefusal {
  contractVersion: "1.0";
  jobId: string;
  status: "refused";
  reasonCode: "MISSING_IMMUTABLE_OBJECT_VERSION" | "WORKER_NOT_CONNECTED";
}

export function inspectFoundationJob(job: InspectionJob): InspectionRefusal {
  if (!job.quarantineObjectVersionId) {
    return {
      contractVersion: "1.0",
      jobId: job.jobId,
      status: "refused",
      reasonCode: "MISSING_IMMUTABLE_OBJECT_VERSION",
    };
  }
  return {
    contractVersion: "1.0",
    jobId: job.jobId,
    status: "refused",
    reasonCode: "WORKER_NOT_CONNECTED",
  };
}

if (process.env.NODE_ENV !== "test") {
  process.stdout.write(
    "CargoVue evidence worker foundation: no queue connected; no files processed.\n",
  );
}
