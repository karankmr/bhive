import Layout from "../../components/Layout/Layout";
import AppDownloadSection from "../../components/AppDownload/AppDownloadSection";
import Features from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero";
import Spaces from "../../components/Spaces/Spaces";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Spaces />
      <AppDownloadSection />
    </Layout>
  );
}
