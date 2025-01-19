const Navbar = () => {

  return (
    <div className='w-full h-full flex justify-between items-center p-8 border-b-white border-b-[1px]'>

        {/* Page title */}
        <h1 className="font-pacifico font-normal text-2xl">SmoothieJuicy</h1>

        <div className="flex gap-4">
            {/* Avatar */}
            <span className="bg-gray-200 rounded-full w-[40px] h-[40px] flex items-center justify-center">
                <img src="user.svg" className="w-5 h-5" />
            </span>

            {/* Calendar icon */}
            <span className="bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center relative">
                <img src="calendar.svg" className="w-5 h-5" />
                {/* Notifications */}
                <span className="absolute bg-red-500 rounded-full w-4 h-4 flex items-center justify-center top-0 -right-2">
                    <p className="text-[10px]">2</p>
                </span>
            </span>

        </div>
    </div>
  )
}

export default Navbar