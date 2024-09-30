import style from "./body.module.css";

import Botton from "../Botton/botton.jsx";
import Subtitle2 from "../Subtitle/Subtitle.jsx";
import Subtitle from "../SubtitleTime/Subtitle.jsx";
import CardSell from "../CardSell/CardSell.jsx";
import BottonIcon from "../BottonIcon/BottonIcon.jsx";
import Bannergrid from "../GridBanner/Banner.jsx";

import hero from "../../assets/principal.png";
import controle from "../../assets/controle.png";
import cadeira from "../../assets/cadeira.png";
import teclado from "../../assets/teclado.png";
import monitor from "../../assets/monitor.png";
import setaEsquerda from "../../assets/setaesquerda.png";
import setaDireita from "../../assets/setadireita.png";
import telefone from "../../assets/telefone.png";
import computador from "../../assets/computador.png";
import relogio from "../../assets/relogio.png";
import headTelefone from "../../assets/headTelefone.png";
import algumaCoisa from "../../assets/algumaCoisa.png";
import casaco from "../../assets/casaco.png";
import bolsa from "../../assets/bolsa.png";
import sla from "../../assets/sla.png";
import criadoMudo from "../../assets/criadomudo.png";
import banner from "../../assets/banner.png";

function Hero() {
  return (
    <div className={style.hero}>
      <img
        className={style.imgtelefone}
        src={hero}
        alt="imagem promocional celular"></img>
      <div className={style.session}>
        <Subtitle></Subtitle>
        <div className={style.cards}>
          <CardSell
            title="HAVIT HV-G92 algumaCoisa"
            imgSrc={controle}
            alt="controlee video game"
            free="-40%"
            price="$120"
            pricedel="$160"
            numberstar="88"></CardSell>
          <CardSell
            title="AK-900 Wired teclado"
            imgSrc={teclado}
            alt="controlee video game"
            free="-35%"
            price="$960"
            pricedel="$1160"
            numberstar="75"></CardSell>
          <CardSell
            title="IPS LCD Gaming Monitor"
            imgSrc={monitor}
            alt="controlee video game"
            free="-30%"
            price="$370"
            pricedel="$400"
            numberstar="99"></CardSell>
          <CardSell
            title="S-Series Comfort cadeira"
            imgSrc={cadeira}
            alt="controlee video game"
            free="-25%"
            price="$375"
            pricedel="$400"
            numberstar="99"></CardSell>
        </div>
        <Botton desc="View All Products"></Botton>
      </div>
      <div className={style.session2}>
        <Subtitle2 title="Browse By Category" subtitle="Categories"></Subtitle2>
        <div>
          <img src={setaEsquerda} alt="seta para direita" />
          <img src={setaDireita} alt="seta para direita" />
        </div>
      </div>
      <div className={style.cardsicons}>
        <BottonIcon desc="telefones" srcIcon={telefone}></BottonIcon>
        <BottonIcon desc="computadores" srcIcon={computador}></BottonIcon>
        <BottonIcon desc="relogio" srcIcon={relogio}></BottonIcon>
        <BottonIcon desc="camera" srcIcon={telefone}></BottonIcon>
        <BottonIcon desc="headTelefone" srcIcon={headTelefone}></BottonIcon>
        <BottonIcon desc="gaming" srcIcon={algumaCoisa}></BottonIcon>
      </div>
      <div className={style.session6}>
        <Subtitle2
          title="Best Se lling Products"
          subtitle="This Month"></Subtitle2>
        <div>
          <img src={setaEsquerda} alt="seta para direita" />
          <img src={setaDireita} alt="seta para direita" />
        </div>
      </div>
      <div className={style.cards}>
        <CardSell
          title="The north coat"
          imgSrc={casaco}
          alt="controlee video game"
          price="$260"
          pricedel="$360"
          numberstar="65"></CardSell>
        <CardSell
          title="Gucci duffle bolsa"
          imgSrc={bolsa}
          alt="controlee video game"
          price="$960"
          pricedel="$1160"
          numberstar="65"></CardSell>
        <CardSell
          title="RGB liquid CPU sla"
          imgSrc={sla}
          alt="controlee video game"
          price="$160"
          pricedel="$170"
          numberstar="65"></CardSell>
        <CardSell
          title="Small criadoMudo"
          imgSrc={criadoMudo}
          alt="controlee video game"
          price="$360"
          numberstar="65"></CardSell>
      </div>
      <img className={style.imgtelefone} src={banner}></img>
      <Botton desc="View All Products"></Botton>
      <div className={style.session4}>
        <Subtitle2 title="New Arrival" subtitle="Featured"></Subtitle2>
      </div>
      <Bannergrid></Bannergrid>
    </div>
  );
}

export default Hero;
