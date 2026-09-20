import type { Metadata } from "next";
import { LabChrome } from "@/components/lab/LabChrome";
import { ArchivoVivoHome } from "@/features/lab/archivo-vivo/ArchivoVivoHome";
import { demoRepository } from "@/lib/repositories/demo-repository";

export const metadata: Metadata = {
  title: "D · Archivo Vivo",
};

export default async function ArchivoVivoPage() {
  const content = await demoRepository.getHomeContent();

  return (
    <>
      <LabChrome active="archivo-vivo" />
      <ArchivoVivoHome content={content} />
    </>
  );
}
