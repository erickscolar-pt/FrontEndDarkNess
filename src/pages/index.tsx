import Image from "next/image";
import Logo from '../../public/logo.png';
import Icon from '../../public/icon_sun.png';
import Bannerheader from '../../public/full_hero.png';

export default function Home() {
  return (
    <div>
      <nav>
        <span>
          <Image
          src={Logo}
          alt="Logotipo"
          width={162}
          height={44}
          />
        </span>
        <ul>
          <li><a href="">Works</a></li>
          <li><a href="">Contribution</a></li>
          <li><a href="">Community</a></li>
          <li><a href="">Get in Touch</a></li>
        </ul>
        <a href="" className="icon_sun">
          <Image
          src={Icon}
          width={29}
          height={29}
          />
        </a>
      </nav>
      <header>
            <div className="eclipse-1"></div>
        <div className="direita">
          <h1>YET THE STORY OF <br/><b className="space">ORPHEUS</b></h1>
          <p>Product & Graphic Designer, with experience in<br/> delivering end-to-end UX/UI design for software<br/> products.</p>
          <div className="buttons-header">
            <button className="button-1">WORKS</button>
            <button className="button-2">FREE STUFF</button>
          </div>
        </div>
        <div className="esquerda">
          <span>
            <Image
              src={Bannerheader}
            />
          </span>
        </div>
      </header>
      <div className="bg">
        <div className="eclipse-5"></div>
      </div>
      <div className="carrousel">
        <div className="cabecalho-carrousel">
          <h1>RECENT NFT | <a href="">VIEW MORE</a></h1>
        </div>
      </div>
    </div>
  )
}
