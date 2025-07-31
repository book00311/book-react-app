import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Foots from "./components/Foots";
export default function MyProfile(){
    return(
        <>
         <Profile/>
         <h2 className="text-xl text-center text-sky-700 font-blod m-5">Contact</h2>
        <div className="flex items-center m-5 w-1/2 mx-auto">
        <div className="grid grid-cols-3 gap-3 mx-auto">
        <Contact label="Book Papangkorn FB" link="https://www.facebook.com/book.papangkorn/" icon="/images/facebook.png"/>
        <Contact label="rnpxpxngk___ IG" link="https://www.instagram.com/rnpxpxngk___/" icon="/images/ig.png"/>
        </div>
    </div>
       <div className="ps-5 pe-5 pt-1 pb-1 bg-sky-700 text-pink-50 rounded w-16 flex justify-center mt-5"><a href="/">Back</a>
        </div>
        <Foots title={"My Footer | Papangkorn"}></Foots>    
        </>
    );
}