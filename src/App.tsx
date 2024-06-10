import { useState } from "react";
import Header from "./hero/Header";
import MainContent from "./hero/MainContent";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Features", href: "#skills" },
  { name: "Source code", href: "#projects" },
];

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
      <Header
        navigation={navigation}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <MainContent />
    </div>
  );
};

export default App;
