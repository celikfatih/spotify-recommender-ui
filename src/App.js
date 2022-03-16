import { Grommet } from "grommet";
import { hpe } from 'grommet-theme-hpe';
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import AboutPage from "./pages/AboutPage";
import StepsPage from "./pages/StepsPage";
import HowItWorksPage from "./pages/HowItWorksPage";

function App() {
  return (
    <Grommet theme={hpe} themeMode="light" full>
      <AppLayout>
        <Routes>
          <Route path="/" element={<StepsPage title="Please select at least one shape..." next="You can now proceed to the next selection." />} />
          <Route path="/about" element={<AboutPage paragraph="I'm Fati, no prologue or epilogue, I'm just extraordinary." />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
        </Routes>
      </AppLayout>
    </Grommet>
  );
}

export default App;
