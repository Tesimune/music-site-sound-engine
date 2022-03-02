import Image from "next/image"
import styles from "../../styles/Home.module.css" 


const layouts = () => {
    return ( 
        <div className="text-white">




            {/* <!-- Bannr section --> */}
            <div className="bg-[url('/images/3.jpg')] bg-cover h-screen shadow-inner">
                <div className="py-20">
                    <span className="flex justify-center m-7"><Image src="/images/icons/logo.png" width={72} height={72} /></span>
                    <span className="flex justify-center shadow text-2xl mb-24 font-semibold">SOUND-ENGINE</span>
                    <p className="flex justify-center text-center text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, incidunt.</p>
                </div>

            </div>
            {/* <!-- FIRST SECTION --> */}
            <section className="bg-gray-700 p-9 shadow-inner-xl">
                <div className="md:flex">
                    <Image src="/images/2.jpg" alt="" className="rounded shadow-xl" width={500} height={700} id="lstimg" />
                    <div className="text-light p-5">
                        <h3 className="text-2xl">THERAPY</h3>
                        <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eveniet explicabo, quam mollitia sit doloremque ex laborum amet culpa sint, doloribus accusamus iure possimus praesentium nobis, iste alias quas esse!</p>
                        <button type="button" className="bg-gray-600  rounded p-2 my-10 mx-1 font-semibold shadow-xl hover:bg-slate-900 hover:text-xl">PLAY</button>
                        <button type="button" className="bg-gray-600  rounded p-2 my-10 mx-1 font-semibold shadow-xl hover:bg-slate-900 hover:text-xl">DOWNLOAD</button>
                        <button type="button" className="bg-gray-600  rounded p-2 my-10 mx-1 font-semibold shadow-xl hover:bg-slate-900 hover:text-xl">SONGS</button>
                    </div>
                </div>
            </section>
            {/* <!-- SECOND SECTION --> */}
            <section className="bg-yellow-500 p-9 shadow-inner-xl">
                <div className="md:flex">
                    <Image src="/images/4.jpg" alt="" className="rounded shadow-xl" width={1000} height={600} id="lstimg " />
                    <div className="text-light p-5">
                        <h3 className="text-2xl">PARTY</h3>
                        <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eveniet explicabo, quam mollitia sit doloremque ex laborum amet culpa sint, doloribus accusamus iure possimus praesentium nobis, iste alias quas esse!</p>
                        <button type="button" className="bg-yellow-400  rounded p-2 my-10 mx-1 font-semibold shadow-xl hover:bg-yellow-700 hover:text-xl">PLAY</button>
                        <button type="button" className="bg-yellow-400  rounded p-2 my-10 mx-1 font-semibold shadow-xl hover:bg-yellow-700 hover:text-xl">DOWNLOAD</button>
                        <button type="button" className="bg-yellow-400  rounded p-2 my-10 mx-1 font-semibold shadow-xl hover:bg-yellow-700 hover:text-xl">VIDEOS</button>
                    </div>
                </div>
            </section>
            {/* <!-- THRID SECTION --> */}
            <section className="bg-pink-500 p-9 shadow-inner-xl">
                <div className="md:flex">
                    <Image src="/images/1.jpg" alt="" className="rounded shadow-xl" width={500} height={700} id="lstimg" />
                    <div className="text-light p-5">
                        <h3 className="text-2xl">SYPLEX</h3>
                        <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eveniet explicabo, quam mollitia sit doloremque ex laborum amet culpa sint, doloribus accusamus iure possimus praesentium nobis, iste alias quas esse!</p>
                        <button type="button" className="bg-pink-400  rounded p-2 my-10 mx-1 font-semibold shadow-xl hover:bg-pink-700 hover:text-xl">PLAY</button>
                        <button type="button" className="bg-pink-400  rounded p-2 my-10 mx-1 font-semibold shadow-xl hover:bg-pink-700 hover:text-xl">DOWNLOAD</button>
                        <button type="button" className="bg-pink-400  rounded p-2 my-10 mx-1 font-semibold shadow-xl hover:bg-pink-700 hover:text-xl">SONGS</button>
                    </div>
                </div>
            </section>
           
                    
        
                    
        </div>

     );
}
 
export default layouts;