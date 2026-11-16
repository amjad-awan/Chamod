import Header from "@/components/Header";
import FeaturedGrid from "@/components/FeaturedGrid";
import CategorySections from "@/components/CategorySections";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-[12px] sm:px-[52px]">
        <FeaturedGrid />
        <CategorySections />
      </main>
      <Footer />
    </>
  );
}