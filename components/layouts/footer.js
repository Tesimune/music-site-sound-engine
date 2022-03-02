const footer = () => {
    return ( 
        <div>
             {/* <!-- CONTACT SECTION --> */}
                    
             <div className="">  
                <div className="bg-gray-200 p-10">
                    <h3 className="text-3xl font-semibold my-2">CONTACT</h3>
                    <p>You can also contact us by phone 00553123-2323 or email sound-engine@sound-engine.com, or you can send us a message here:</p>
                    <form className="my-5" action="https://www.w3schools.com/action_page.php">
                        <div className="form-group">
                            <label for="email">Email:</label>
                            <input type="email" className="w-full h-10 p-2 rounded shadow-2xl bg-slate-100" id="email" placeholder="Enter email" name="email"></input>
                        </div>
                        <div className="form-group">
                            <label for="name">Name:</label>
                            <input type="name" className="w-full h-10 p-2 rounded shadow-2xl bg-slate-100" id="email" placeholder="Enter Name" name="email"></input>
                        </div>
                        <div className="form-group">
                            <label for="text">Message:</label>
                            <textarea type="text" className="w-full h-52 p-2 rounded shadow-2xl bg-slate-100" id="text" placeholder="Enter Text..." name="Message"></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 p-3 rounded shadow-2xl text-white hover:bg-blue-900">Submit</button>
                    </form>
                </div>
            </div>
            {/* footer */}
            <footer class="flex justify-center p-5 bg-slate-300 font-semibold">
                <p>MADE BY ZUBAIR &copy;|2022 SOUND-ENGINE </p>
                
            </footer>
        </div>
     );
}
 
export default footer;