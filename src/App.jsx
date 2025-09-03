
import "@fontsource/geologica";
import "@fontsource/geologica/700.css";
import Header from './Header.jsx';
import ExtensionList from './extensionList.jsx'
export default function App() {
  return (
    <div className=" bg-[#EBF2FC] flex flex-col items-center justify-start px-4">
      <div className="container ">
        <Header />
        <ExtensionList />
      </div>
    </div>
  )
}
