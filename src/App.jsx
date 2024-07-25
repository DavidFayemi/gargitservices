import Nav from "./components/Nav";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 p-10 text-gray-100 text-xl overflow-hidden">
      <Nav />
      <Body />
    </div>
  );
};

export default App;
