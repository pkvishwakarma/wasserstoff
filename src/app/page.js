import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      {/* Splace Slide Screen Route Link.. */}
      <Link href={'/astrix-splace-screen'} className="me-4">
        <Image src={'/images/Splash_screen_slide1.png'} alt="slidescreen1" width={'400'} height={'100'}></Image>
      </Link>
      {/* Astrix Collection Screen Route Link.. */}
      <Link href={'/astrix-landing-pages/astrix-body-page'}>
        <Image src={'/images/astrix_landing_page.png'} alt="landingpage" width={'400'} height={'100'}></Image>
      </Link>
    </main>
  );
}
