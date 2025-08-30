import React, { useState } from "react";
import { motion } from "framer-motion";

import Soups from "./soups";
import Starters from "./starter";
import Salad from "./Salad";
import Raita from "./Raita";
import Punjabi from "./Punjabi";
import RicePunjabi from "./RicePunjabi";
import Chinese from "./Chinese";
import RiceChinese from "./RiceChinese";
import Tandoor from "./Tandoor";
import DalBati from "./DalBati";
import Continental from "./Continental";
import Snacks from "./Snacks";
import HotColdDrink from "./HotColdDrink";
import IceCream from "./IceCream";

export default function App() {
  const [showSoups, setShowSoups] = useState(false);
  const [showStarters, setShowStarters] = useState(false);
  const [showSalad, setShowSalad] = useState(false);
  const [showRaita, setShowRaita] = useState(false);
  const [showPunjabi, setSelectedPunjabi] = useState(false);
  const [showRicePunjabi, setShowRicePunjabi] = useState(false);
  const [showChinese, setShowChinese] = useState(false);
  const [showRiceChinese, setShowRiceChinese] = useState(false);
  const [showTandoor, setShowTandoor] = useState(false);
  const [showDalBati, setShowDalBati] = useState(false);
  const [showContinental, setShowContinental] = useState(false);
  const [showSnacks, setShowSnacks] = useState(false);
  const [showHotColdDrink, setShowHotColdDrink] = useState(false);
  const [showIceCream, setShowIceCream] = useState(false);

  if (showSoups) return <Soups onBack={() => setShowSoups(false)} />;
  if (showStarters) return <Starters onBack={() => setShowStarters(false)} />;
  if (showSalad) return <Salad onBack={() => setShowSalad(false)} />;
  if (showRaita) return <Raita onBack={() => setShowRaita(false)} />;
  if (showPunjabi) return <Punjabi onBack={() => setSelectedPunjabi(false)} />;
  if (showRicePunjabi) return <RicePunjabi onBack={() => setShowRicePunjabi(false)} />;
  if (showChinese) return <Chinese onBack={() => setShowChinese(false)} />;
  if (showRiceChinese) return <RiceChinese onBack={() => setShowRiceChinese(false)} />;
  if (showTandoor) return <Tandoor onBack={() => setShowTandoor(false)} />;
  if (showDalBati) return <DalBati onBack={() => setShowDalBati(false)} />;
  if (showContinental) return <Continental onBack={() => setShowContinental(false)} />;
  if (showSnacks) return <Snacks onBack={() => setShowSnacks(false)} />;
  if (showHotColdDrink) return <HotColdDrink onBack={() => setShowHotColdDrink(false)} />;
  if (showIceCream) return <IceCream onBack={() => setShowIceCream(false)} />;

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        fontFamily: "'Libertinus Serif Display', serif",
        backgroundColor: "#1A2421", // Deep green-black background
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md rounded-2xl border border-[#D4AF37]
                   shadow-[0_6px_25px_rgba(0,0,0,0.4)]
                   bg-gradient-to-br from-[#1A2421] to-[#2A3834] p-8 relative"
      >
        {/* Ornamental corners */}
        <div className="absolute top-2 left-2 text-[#D4AF37] opacity-80 text-lg">✦</div>
        <div className="absolute top-2 right-2 text-[#D4AF37] opacity-80 text-lg">✦</div>
        <div className="absolute bottom-2 left-2 text-[#D4AF37] opacity-80 text-lg">✦</div>
        <div className="absolute bottom-2 right-2 text-[#D4AF37] opacity-80 text-lg">✦</div>

        {/* Logo/Icon */}
        <div
          className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full 
                     border-2 border-[#D4AF37] bg-[#2A3834] text-[#FAF3E0] shadow-inner"
        >
          <span role="img" aria-label="menu" className="text-4xl">
            🍽️
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-center text-3xl sm:text-4xl font-bold tracking-widest drop-shadow-md"
          style={{ fontFamily: "'Libertinus Serif Display', serif", color: "#FAF3E0" }}
        >
          Rajasthan Garden Menu
        </h2>
        <p className="text-center text-[#D4AF37] mt-2 text-sm sm:text-base italic">
          A royal feast for your senses
        </p>

        {/* Buttons Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <MenuButton onClick={() => setShowSoups(true)}>Soups</MenuButton>
          <MenuButton onClick={() => setShowStarters(true)}>Starters</MenuButton>
          <MenuButton onClick={() => setShowSalad(true)}>Salad</MenuButton>
          <MenuButton onClick={() => setShowRaita(true)}>Raita</MenuButton>
          <MenuButton onClick={() => setSelectedPunjabi(true)}>Punjabi</MenuButton>
          <MenuButton onClick={() => setShowRicePunjabi(true)}>Rice Punjabi</MenuButton>
          <MenuButton onClick={() => setShowChinese(true)}>Chinese</MenuButton>
          <MenuButton onClick={() => setShowRiceChinese(true)}>Rice Chinese</MenuButton>
          <MenuButton onClick={() => setShowTandoor(true)}>Tandoor</MenuButton>
          <MenuButton onClick={() => setShowDalBati(true)}>Dal Bati</MenuButton>
          <MenuButton onClick={() => setShowContinental(true)}>Continental</MenuButton>
          <MenuButton onClick={() => setShowSnacks(true)}>Snacks</MenuButton>
          <MenuButton onClick={() => setShowHotColdDrink(true)}>Hot & Cold Drink</MenuButton>
          <MenuButton onClick={() => setShowIceCream(true)}>Ice Cream</MenuButton>
        </div>
      </motion.div>
    </div>
  );
}

// Button Component
function MenuButton({ children, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: "#B5A642", color: "#FAF3E0" }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="w-full rounded-xl font-semibold tracking-wide py-3 px-4
                 bg-[#F4EDE4] text-[#1A2421] border border-[#D4AF37]
                 shadow-[inset_0_2px_4px_rgba(0,0,0,0.08),0_4px_8px_rgba(0,0,0,0.3)]
                 transition-all duration-300 ease-out"
      style={{ fontFamily: "'Libertinus Serif Display', serif" }}
    >
      {children}
    </motion.button>
  );
}
