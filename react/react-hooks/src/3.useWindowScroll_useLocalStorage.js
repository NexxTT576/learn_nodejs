import "./App.css";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useWindowScroll } from "./hooks/useWindowScroll";

function App() {
  const [y] = useWindowScroll();
  const [message, setMessage] = useLocalStorage("hook-key", "阿菲");
  setTimeout(() => {
    setMessage("ff");
  }, 5000);
  return (
    <div style={{ height: "120000px" }}>
      {y}_{message}
    </div>
  );
}

export default App;
