import ResumeView from "./resume-view";
import { profile } from "@/data/profile";

export const metadata = {
  title: `Résumé | ${profile.name}`,
  description: `Official verified résumé of ${profile.name} — Frontend Developer & Interface Craftsperson. View online or download PDF.`,
};

export default function ResumePage() {
  return <ResumeView />;
}
