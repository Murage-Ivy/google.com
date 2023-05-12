import "./App.css";
import Footer from "./components/Footer";
import Google from "./components/Google";
import GoogleBtwn from "./components/GoogleBtwn";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Google />

      <GoogleBtwn />
      
      <Footer />
    </div>
  );
}

export default App;
