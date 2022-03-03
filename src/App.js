import { Grommet } from "grommet";
import { hpe } from 'grommet-theme-hpe';
import AppLayout from "./components/AppLayout";
import SelectionSteps from "./pages/SelectionSteps";

function App() {
  return (
    <Grommet theme={hpe} themeMode="light" full>
      <AppLayout>
        <SelectionSteps title="Please select at least one shape..." next="You can now proceed to the next selection." />
      </AppLayout>
    </Grommet>
  );
}

export default App;
