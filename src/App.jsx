
import "@fontsource/geologica";
import "@fontsource/geologica/700.css";
import Header from './Header.jsx'
import ExtensionList from './extensionList.jsx'
export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#EBF2FC] flex flex-col items-center justify-start px-4">
      <div className="w-full max-w-[1170px]">    
        <Header />
        <ExtensionList />
      </div>
    </div>
  )
}
