import Link from "next/link";



import Facebook from '../public/facebook.svg'
import Instagram from '../public/instagram.svg'
import Youtube from '../public/youtube.svg'
import Tiktok from '../public/tik tok icono.svg'
import WhatsApp from '../public/whatsapp.svg'
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAppContext } from "../(context)/AppWrapper";


// className={`${pathname == '/cursos'   ? 'hidden' : 'block'}`}
const Socials = () => {

  const { cambioHeader } = useAppContext()

  const pathname = usePathname();

  return <div className={`${pathname == '/cursos' || pathname == '/planes' || pathname == '/about' || cambioHeader ? 'hidden' : ''} flex gap-x-7 items-center justify-center relative bottom-[70px] md:bottom-0`}>

    <Link href={''} className="duration-300 transition-all hover:scale-110  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"> <Image src={Facebook} width={10} height={10} alt="" /> </Link>

    <Link href={''} className="duration-300 transition-all hover:scale-110  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"> <Image src={Instagram} width={20} height={20} alt="" /> </Link>
    <Link href={''} className="duration-300 transition-all hover:scale-110  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"> <Image src={Tiktok} width={20} height={20} alt="" /> </Link>
    {/* <Link href={''} className="duration-300 transition-all hover:scale-110  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"> <Image src={Youtube} width={20} height={20} alt="" /> </Link> */}
    {/* <Link href={''} className="duration-300 transition-all hover:scale-110  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"> <Image src={Telegram} width={20} height={20} alt="" /> </Link> */}
    <Link href={''} className="duration-300 transition-all hover:scale-110  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"> <Image src={WhatsApp} width={20} height={20} alt="" /> </Link>
  </div>;
};

export default Socials;
