import Link from "next/link"
import Image from "next/image"
export default function Header(){
    return(
        <div className="Parent">
            <ul className="Child">
                <Link href={"/portfolio"}>
                <li>Portfolio</li>
                </Link>
                <Link href={"/about"}>
                <li>About</li>
                </Link>
                <Link href={"/contact-us"}>
                <li>Contact-Us</li>
                </Link>


<div className="Text">
    <ul className="text">
        <li>Big! Opportunity For You To Avail/Enroll Now!</li>
        </ul>
        <img className="img"src="https://e1.pxfuel.com/desktop-wallpaper/505/913/desktop-wallpaper-footer.jpg" alt="" />
        <div className="Facebook">www.facebook.com</div>
       <img className="img2" src="https://images.unsplash.com/photo-1662947852375-0d45b28ff623?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       <div className="Youtube">www.youtube.com</div>
        <img className="img3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs3_ueZ52AvKT2l9GLogGeBlLIz9D4Eny_OQ&s" alt="" />
        <div className="Twitter">www.twitter.com</div>
        <img className="img4" src="https://i.pinimg.com/736x/ee/af/9c/eeaf9ce3ab22ecb3904daea1b2eab04a.jpg" alt="" />
       <div className="Telegram">www.telegram.com</div>
       <img  className="img5"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1NCGKLnjiv08p7r-JIoNmmMbXkT6rarL0w&s" alt="" />
        <img className="IMAGE"src="https://www.governorsindh.com/_next/static/media/logo.9ff76f62.png" alt="" />
</div></ul>
    <div className="FooterParent">
        <ul className="FooterChild">
          <li>@2024 AhmedMemon. All Copyright Right Reserverd</li>
        </ul>
       </div>
    <div className="FooterBar">
      <ul className="FootBar">
        <li>Contact us at ahmedpubgking3388@gmail.com | Phone: 03368952826</li>
      </ul>
    </div>
</div>

    
    )
}