import Image from "next/image";

const navbar = () => {
    return ( 
        <div className="flex justify-between bg-gray-700 md:p-5 py-5 text-gray-100 font-semibold" id="navmenue">
            <div className="flex">
                <Image src="/images/icons/logo.png" width={40} height={40} />
                <a href="" className="mt-1 xm:text-xm md:text-sm hover:text-xl hover:text-blue-400">SOUND-ENGINE</a>
                
            </div>
            <div className="">
                <ul className="flex">
                    <li className="flex mx-1">
                        <span className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg></span>
                        <a href="#" className="hidden md:block uppercase hover:text-xl hover:text-blue-400">Home</a>
                    </li>
                    <li className="flex mx-1">
                        <span className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
</svg></span>
                        <a href="#" className="hidden md:block uppercase hover:text-xl hover:text-blue-400">Audio</a>

                    </li>
                    <li className="flex mx-1">
                        <span className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
</svg></span>
                        <a href="#" className="hidden md:block uppercase hover:text-xl hover:text-blue-400">Video</a>
                    </li>
                    <li className="flex mx-1">
                        <span className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
</svg></span>
                        <a href="#" class="hidden md:block uppercase hover:text-xl hover:text-blue-400">Album</a>
                    </li>
                    <li className="flex mx-1">
                        <span className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
</svg></span>
                        <a href="#" className="hidden md:block uppercase hover:text-xl hover:text-blue-400">Instrumentals</a>
                    </li>
                    {/* <li className="flex mx-1">
                        <span className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></span>
                        <a href="#" className="hidden md:block uppercase hover:text-xl hover:text-blue-400">About</a>
                    </li>
                    <li className="flex mx-1">
                        <span className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
</svg></span>
                        <a href="#contact" className="hidden md:block uppercase hover:text-xl hover:text-blue-400">Contact</a>
                    </li> */}
                </ul>
            </div>
        </div>
     );
}
 
export default navbar;