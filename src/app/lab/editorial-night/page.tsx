import type { Metadata } from "next";
import { LabChrome } from "@/components/lab/LabChrome";
import { EditorialNightHome } from "@/features/lab/editorial-night/EditorialNightHome";
import { demoRepository } from "@/lib/repositories/demo-repository";

export const metadata: Metadata = {
  title: "A · Editorial Night",
};

export default async function EditorialNightPage() {
  const content = await demoRepository.getHomeContent();

  return (
    <>
      <LabChrome active="editorial-night" />
      <EditorialNightHome content={content} />
    </>
  );
}
