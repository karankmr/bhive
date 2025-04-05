import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import Spaces from "@/components/Spaces/Spaces";
import AppDownloadSection from "@/components/AppDownload/AppDownloadSection";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="bhive-app">
      <Header />
      <main>
        <Hero />
        <Features />
        <Spaces />
        <AppDownloadSection />
      </main>
      <Footer />
    </div>
  );
}
