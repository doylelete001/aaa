import React, {
  useState
  , button,
  useEffect
} from 'react'

import "./App.css";


export default function App() {
  return (
    <div>
      <div><Texto /> </div>

    </div>
  )
}
export function Button() {
  return (
    <div class="button">
      <button>
        Passar

      </button>
    </div>
  )
}


export function Imagem() {
  let imagens = [];
  imagens = ["https://th.bing.com/th/id/R.caa2f411cbf7ce9135d2b5f3b62e1d78?rik=2AT1CJGdXyYW4w&riu=http%3a%2f%2fhdqwalls.com%2fdownload%2fone-piece-anime-artwork-i6-1920x1080.jpg&ehk=vLAqVT9rbvQg90jhKSNHKhkH63QV3BoSR1JPWLLYdyc%3d&risl=&pid=ImgRaw&r=0",
    "https://preview.redd.it/8o1s4via4w061.jpg?auto=webp&s=ef7040cbca0bf4ef64b7f22dea7484bad8c17e7b",
    "https://th.bing.com/th/id/R.2266384ca0ab215596ba427193842d77?rik=ruVTUDOorZNEZg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f4%2fc%2f9%2f59306.jpg&ehk=PRFO66OsFL4A19QRqbG0bKe06sPOZfKwG2emOi6bXDU%3d&risl=&pid=ImgRaw&r=0"];
  const [image, setImagem] = useState(imagens[0]);
  const [contador, setContador] = useState(0);

  function adicionar() {

    console.log(contador)
    { contador == 2 ? setContador(0) : setContador(contador + 1) }
    { contador == 2 ? setImagem(imagens[0]) : setImagem(imagens[contador + 1]) }



  }
  function remover() {

    console.log(contador)
    { contador == 0 ? setContador(2) : setContador(contador - 1) }
    { contador == 0 ? setImagem(imagens[2]) : setImagem(imagens[contador - 1]) }


  }
  console.log(image)
  return (<div style={{ border: 10, borderColor: 'black', borderWidth: 10, borderStyle: 'solid' }}>
    <img src={image} width={'100%'} height={"700"} />

    <button className="estilizar" onClick={remover} >voltar</button>
    <button  className="estilizar" onClick={adicionar} >avançar</button>
  </div>
  )
}


export function Texto() {
  return (
    <div>
      <h1>ONE PIECE WORLD</h1>
      <Imagem />
      <h3>

      </h3>

    </div>
  )
}



