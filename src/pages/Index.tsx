import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import FindTutorPage from "@/components/FindTutorPage";
import BecomeTutorPage from "@/components/BecomeTutorPage";

type PageView = "home" | "find" | "become";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<PageView>("home");
  const [nextPage, setNextPage] = useState<PageView>("home");

  const slideVariants = {
    enterFromRight: { x: "100%", opacity: 0 },
    enterFromLeft: { x: "-100%", opacity: 0 },
    center: { x: 0, opacity: 1 },
    exitToLeft: { x: "-100%", opacity: 0 },
    exitToRight: { x: "100%", opacity: 0 },
  };

  const getInitial = (page: PageView) => {
    if (page === "find") return "enterFromRight";
    if (page === "become") return "enterFromLeft";
    return "center";
  };

  const getExit = (page: PageView) => {
    if (page === "home" && currentPage === "find") return "exitToLeft";
    if (page === "home" && currentPage === "become") return "exitToRight";
    return "exitToLeft";
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <AnimatePresence mode="wait">
        {currentPage === "home" && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={nextPage === "become" ? { x: "50%", opacity: 0 } : { x: "-50%", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <HeroSection
              onFindTutor={() => { setNextPage("find"); setCurrentPage("find"); }}
              onBecomeTutor={() => { setNextPage("become"); setCurrentPage("become"); }}
            />
          </motion.div>
        )}
        {currentPage === "find" && (
          <motion.div
            key="find"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <FindTutorPage onBack={() => { setNextPage("home"); setCurrentPage("home"); }} />
          </motion.div>
        )}
        {currentPage === "become" && (
          <motion.div
            key="become"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <BecomeTutorPage onBack={() => { setNextPage("home"); setCurrentPage("home"); }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
