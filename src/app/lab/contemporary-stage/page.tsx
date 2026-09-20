import type { Metadata } from "next";
import { LabChrome } from "@/components/lab/LabChrome";
import { ContemporaryStageHome } from "@/features/lab/contemporary-stage/ContemporaryStageHome";
import { demoRepository } from "@/lib/repositories/demo-repository";

export const metadata: Metadata = {
  title: "C · Contemporary Stage",
};

export default async function ContemporaryStagePage() {
  const content = await demoRepository.getHomeContent();

  return (
    <>
      <LabChrome active="contemporary-stage" />
      <ContemporaryStageHome content={content} />
    </>
  );
}
