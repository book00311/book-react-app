export default function Profile(){
    return(
        <>
        <h1 className="text-2xl text-center bg-sky-300 text-pink-50">Profile</h1>
    <div className="p-10 bg-red-50 rounded">
    <img src="/images/Ghost.jpg" className="rounded-full w-32 shadow-lg border-4 border-neutral-100 mx-auto"/>
    <h2 className="text-xl text-center text-sky-700 font-blod m-5">About Me</h2>
    <p className="text-center">
          ชื่อ นายปภังกร บุญแต้ม ชื่อเล่น บุ๊ค <br />  
           มหาวิยาลัยราชมงคลตะวันออก ปี2<br />
           รหัสนักศึกษา : 026730491002-4 <br />
        
    </p>
    </div>
            
        </>
    );
}