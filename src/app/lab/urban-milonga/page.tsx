import type { Metadata } from "next";
import { LabChrome } from "@/components/lab/LabChrome";
import { UrbanMilongaHome } from "@/features/lab/urban-milonga/UrbanMilongaHome";
import { demoRepository } from "@/lib/repositories/demo-repository";

export const metadata: Metadata = {
  title: "B · Urban Milonga",
};

export default async function UrbanMilongaPage() {
  const content = await demoRepository.getHomeContent();

  return (
    <>
      <LabChrome active="urban-milonga" />
      <UrbanMilongaHome content={content} />
    </>
  );
}
