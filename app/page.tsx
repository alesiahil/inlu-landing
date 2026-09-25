import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { ValueStrip } from "@/components/sections/ValueStrip";
import { CodeExport } from "@/components/sections/CodeExport";
import { Responsive } from "@/components/sections/Responsive";
import { Import } from "@/components/sections/Import";
import { ToolCompare } from "@/components/sections/ToolCompare";
import { DesignSystem } from "@/components/sections/DesignSystem";
import { PrototypeFlow } from "@/components/sections/PrototypeFlow";
import { Collaboration } from "@/components/sections/Collaboration";
import { Directions } from "@/components/sections/Directions";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { TalkModal } from "@/components/sections/TalkModal";
import { Overlays } from "@/components/sections/Overlays";
import { SvgSymbols } from "@/components/sections/SvgSymbols";
import { PageScripts } from "@/components/PageScripts";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <ValueStrip />
        <Import />
        <CodeExport />
        <ToolCompare />
        <Responsive />
        <PrototypeFlow />
        <DesignSystem />
        <Collaboration />
        <Directions />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <TalkModal />
      <Overlays />
      <SvgSymbols />
      <PageScripts />
    </>
  );
}
