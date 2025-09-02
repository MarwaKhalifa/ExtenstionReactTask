import logo from './assets/logo.png'
import settingImg from './assets/Settings container.png'
export default function Header(){
    return(
        <header className="container flex items-center justify-between p-3 bg-[#FBFDFE]  w-full max-[w-1170px] h-[74px] border-1 border-[#D6E2F5] rounded-3xl shadow-[#D9E5F4] shadow-2xl mt-10 ">
            <div className='flex items-center gap-3'>
                <img src={logo} alt="" />
                <h1  className="font-(family-name:--main-font) font-semibold text-2xl">Extenstions</h1>
            </div>
            <img className='h-[50px] w-[50px]'  src={settingImg} alt="" />
        </header>
    )
}