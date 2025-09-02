import ExtensionIcon from './assets/Extension Icon.png';
import StyleSpy from './assets/StyleSpy.png'
import toggleRed from './assets/_Toggle base.png';
import toggleGray from './assets/_Toggle base (1).png';
import SpeedBoost from './assets/Extension Icon (1).png';
import JSONWizard from './assets/JSONWizard.png';
import TabMaster from './assets/TabMaster Pro.png';
import ViewportBuddy from './assets/Extension Icon (2).png';
import Markup from './assets/Extension Icon (3).png';
import GridGuides from './assets/Extension Icon (4).png';
import Palette from './assets/Extension Icon (5).png';
import LinkChecker from './assets/Extension Icon (6).png';
import DOMSnapshot from './assets/Extension Icon (7).png';
import ConsolePlus from './assets/Extension Icon (8).png';
export default function ExtensionList() {
    return (
        <div className="container w-full max-[w-1170px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-16 ">
            <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-wrap items-center justify-center md:justify-between lg:justify-between mb-9 gap-6">
                <p className="text-[#091540] font-(family-name:--second-font) text-4xl font-bold">Extensions List</p>
                <div className="flex items-center gap-3">
                    <button className="text-white w-16 h-10 rounded-3xl bg-[#C7231A] font-(family-name:--second-font)  ">All</button>
                    <button className="rounded-3xl bg-[#FBFDFE] h-10 w-24 text-xl text-[#091540] font-(family-name:--second-font)">Active</button>
                    <button className="rounded-3xl bg-[#FBFDFE] h-10 w-28 text-xl text-[#091540] font-(family-name:--second-font)">Inacive</button>
                </div>
            </div>
            <div className="flex flex-col  justify-between bg-[#FBFDFE] border-[#D6E2F5] rounded-2xl shadow-[#C2CEE138] h-[200px] p-5">
                <div className='flex items-start justify-between gap-4'>
                    <img className='w-[60px] h-[60px]' src={ExtensionIcon} alt="" />
                    <div className='flex flex-col'>
                        <h1 className='font-(family-name:--second-font) font-bold text-xl text-[#091540] '>DevLens</h1>
                        <p className='text-[#535868] font-(family-name:--second-font) font-normal text-[16px] mt-2'>Quickly inspect page layouts and visualize element boundaries.</p>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <button className='w-24 h-10 border-1 rounded-3xl border-[#C6C6C6] text-[#091540] font-medium font-(family-name:--second-font)'>Remove</button>
                    <img src={toggleRed} alt="" />
                </div>
            </div>
            <div className="flex flex-col  justify-between bg-[#FBFDFE] border-[#D6E2F5] rounded-2xl shadow-[#C2CEE138] h-[200px] p-5">
                <div className='flex items-start justify-between gap-4'>
                    <img className='w-[60px] h-[60px]' src={StyleSpy} alt="" />
                    <div className='flex flex-col'>
                        <h1 className='font-(family-name:--second-font) font-bold text-xl text-[#091540] '>StyleSpy</h1>
                        <p className='text-[#535868] font-(family-name:--second-font) font-normal text-[16px] mt-2'>Instantly analyze and copy CSS from any webpage element.</p>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <button className='w-24 h-10 border-1 rounded-3xl border-[#C6C6C6] text-[#091540] font-medium font-(family-name:--second-font)'>Remove</button>
                    <img src={toggleRed} alt="" />
                </div>
            </div>
            <div className="flex flex-col  justify-between bg-[#FBFDFE] border-[#D6E2F5] rounded-2xl shadow-[#C2CEE138] h-[200px] p-5">
                <div className='flex items-start justify-between gap-4'>
                    <img className='w-[60px] h-[60px]' src={SpeedBoost} alt="" />
                    <div className='flex flex-col'>
                        <h1 className='font-(family-name:--second-font) font-bold text-xl text-[#091540] '>SpeedBoost</h1>
                        <p className='text-[#535868] font-(family-name:--second-font) font-normal text-[16px] mt-2'>Optimizes browser resource usage to accelerate page loading.</p>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <button className='w-24 h-10 border-1 rounded-3xl border-[#C6C6C6] text-[#091540] font-medium font-(family-name:--second-font)'>Remove</button>
                    <img src={toggleGray} alt="" />
                </div>
            </div>
            <div className="flex flex-col  justify-between bg-[#FBFDFE] border-[#D6E2F5] rounded-2xl shadow-[#C2CEE138] h-[200px] p-5">
                <div className='flex items-start justify-between gap-4'>
                    <img className='w-[60px] h-[60px]' src={JSONWizard} alt="" />
                    <div className='flex flex-col'>
                        <h1 className='font-(family-name:--second-font) font-bold text-xl text-[#091540] '>JSONWizard</h1>
                        <p className='text-[#535868] font-(family-name:--second-font) font-normal text-[16px] mt-2'>Formats, validates, and prettifies JSON responses in-browser.</p>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <button className='w-24 h-10 border-1 rounded-3xl border-[#C6C6C6] text-[#091540] font-medium font-(family-name:--second-font)'>Remove</button>
                    <img src={toggleRed} alt="" />
                </div>
            </div>
            <div className="flex flex-col  justify-between bg-[#FBFDFE] border-[#D6E2F5] rounded-2xl shadow-[#C2CEE138] h-[200px] p-5">
                <div className='flex items-start justify-between gap-4'>
                    <img className='w-[60px] h-[60px]' src={TabMaster} alt="" />
                    <div className='flex flex-col'>
                        <h1 className='font-(family-name:--second-font) font-bold text-xl text-[#091540] '>TabMaster Pro</h1>
                        <p className='text-[#535868] font-(family-name:--second-font) font-normal text-[16px] mt-2'>Organizes browser tabs into groups and sessions.</p>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <button className='w-24 h-10 border-1 rounded-3xl border-[#C6C6C6] text-[#091540] font-medium font-(family-name:--second-font)'>Remove</button>
                    <img src={toggleRed} alt="" />
                </div>
            </div>
            <div className="flex flex-col  justify-between bg-[#FBFDFE] border-[#D6E2F5] rounded-2xl shadow-[#C2CEE138] h-[200px] p-5">
                <div className='flex items-start justify-between gap-4'>
                    <img className='w-[60px] h-[60px]' src={ViewportBuddy} alt="" />
                    <div className='flex flex-col'>
                        <h1 className='font-(family-name:--second-font) font-bold text-xl text-[#091540] '>ViewportBuddy</h1>
                        <p className='text-[#535868] font-(family-name:--second-font) font-normal text-[16px] mt-2'>Simulates various screen resolutions directly within the browser.</p>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <button className='w-24 h-10 border-1 rounded-3xl border-[#C6C6C6] text-[#091540] font-medium font-(family-name:--second-font)'>Remove</button>
                    <img src={toggleGray} alt="" />
                </div>
            </div>
            <div className="flex flex-col  justify-between bg-[#FBFDFE] border-[#D6E2F5] rounded-2xl shadow-[#C2CEE138] h-[200px] p-5">
                <div className='flex items-start justify-between gap-4'>
                    <img className='w-[60px] h-[60px]' src={Markup} alt="" />
                    <div className='flex flex-col'>
                        <h1 className='font-(family-name:--second-font) font-bold text-xl text-[#091540] '>Markup Notes</h1>
                        <p className='text-[#535868] font-(family-name:--second-font) font-normal text-[16px] mt-2'>Quickly inspect page layouts and visualize element boundaries.</p>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <button className='w-24 h-10 border-1 rounded-3xl border-[#C6C6C6] text-[#091540] font-medium font-(family-name:--second-font)'>Remove</button>
                    <img src={toggleRed} alt="" />
                </div>
            </div>
            <div className="flex flex-col  justify-between bg-[#FBFDFE] border-[#D6E2F5] rounded-2xl shadow-[#C2CEE138] h-[200px] p-5">
                <div className='flex items-start justify-between gap-4'>
                    <img className='w-[60px] h-[60px]' src={GridGuides} alt="" />
                    <div className='flex flex-col'>
                        <h1 className='font-(family-name:--second-font) font-bold text-xl text-[#091540] '>GridGuides</h1>
                        <p className='text-[#535868] font-(family-name:--second-font) font-normal text-[16px] mt-2'>Overlay customizable grids and alignment guides on any webpage.</p>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <button className='w-24 h-10 border-1 rounded-3xl border-[#C6C6C6] text-[#091540] font-medium font-(family-name:--second-font)'>Remove</button>
                    <img src={toggleGray} alt="" />
                </div>
            </div>
            <div className="flex flex-col  justify-between bg-[#FBFDFE] border-[#D6E2F5] rounded-2xl shadow-[#C2CEE138] h-[200px] p-5">
                <div className='flex items-start justify-between gap-4'>
                    <img className='w-[60px] h-[60px]' src={Palette} alt="" />
                    <div className='flex flex-col'>
                        <h1 className='font-(family-name:--second-font) font-bold text-xl text-[#091540] '>Palette Picker</h1>
                        <p className='text-[#535868] font-(family-name:--second-font) font-normal text-[16px] mt-2'>Instantly extracts color palettes from any webpage.</p>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <button className='w-24 h-10 border-1 rounded-3xl border-[#C6C6C6] text-[#091540] font-medium font-(family-name:--second-font)'>Remove</button>
                    <img src={toggleGray} alt="" />
                </div>
            </div>
             <div className="flex flex-col  justify-between bg-[#FBFDFE] border-[#D6E2F5] rounded-2xl shadow-[#C2CEE138] h-[200px] p-5">
                <div className='flex items-start justify-between gap-4'>
                    <img className='w-[60px] h-[60px]' src={LinkChecker} alt="" />
                    <div className='flex flex-col'>
                        <h1 className='font-(family-name:--second-font) font-bold text-xl text-[#091540] '>LinkChecker</h1>
                        <p className='text-[#535868] font-(family-name:--second-font) font-normal text-[16px] mt-2'>Scans and highlights broken links on any page.</p>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <button className='w-24 h-10 border-1 rounded-3xl border-[#C6C6C6] text-[#091540] font-medium font-(family-name:--second-font)'>Remove</button>
                    <img src={toggleGray} alt="" />
                </div>
            </div>
            <div className="flex flex-col  justify-between bg-[#FBFDFE] border-[#D6E2F5] rounded-2xl shadow-[#C2CEE138] h-[200px] p-5">
                <div className='flex items-start justify-between gap-4'>
                    <img className='w-[60px] h-[60px]' src={DOMSnapshot} alt="" />
                    <div className='flex flex-col'>
                        <h1 className='font-(family-name:--second-font) font-bold text-xl text-[#091540] '>DOM Snapshot</h1>
                        <p className='text-[#535868] font-(family-name:--second-font) font-normal text-[16px] mt-2'>Capture and export DOM structures quickly.</p>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <button className='w-24 h-10 border-1 rounded-3xl border-[#C6C6C6] text-[#091540] font-medium font-(family-name:--second-font)'>Remove</button>
                    <img src={toggleGray} alt="" />
                </div>
            </div>
            <div className="flex flex-col  justify-between bg-[#FBFDFE] border-[#D6E2F5] rounded-2xl shadow-[#C2CEE138] h-[200px] p-5">
                <div className='flex items-start justify-between gap-4'>
                    <img className='w-[60px] h-[60px]' src={ConsolePlus} alt="" />
                    <div className='flex flex-col'>
                        <h1 className='font-(family-name:--second-font) font-bold text-xl text-[#091540] '>ConsolePlus</h1>
                        <p className='text-[#535868] font-(family-name:--second-font) font-normal text-[16px] mt-2'>Enhanced developer console with advanced filtering and logging.</p>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <button className='w-24 h-10 border-1 rounded-3xl border-[#C6C6C6] text-[#091540] font-medium font-(family-name:--second-font)'>Remove</button>
                    <img src={toggleRed} alt="" />
                </div>
            </div>
        </div>
    )
}