"use client";
import Hero from "@/components/frontend/Hero/page";
import Providers from "./StoreProvider";
import Category from "@/components/frontend/category/page";
import Featured from "@/components/frontend/featured/page";
import Footer from "@/components/Footer/page";
import Trending from "@/components/frontend/trending/page";
import Testimony from "@/components/frontend/testimony/page";

const Index: React.FC = ({ children }: any) => {
  return (
    <div className="h-full w-full">
      <Providers>
        <Hero />
        <Category />
        <Trending />
        <Featured />
        <Testimony />
        {children}
      </Providers>
      <Footer />
    </div>
  );
};

export default Index;
