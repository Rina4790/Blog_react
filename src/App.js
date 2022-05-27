import { RootRouter } from "./navigation/RootRouter";
import { ThemeProvider } from "./components/Theme/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div>
        <RootRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
