import { useState } from "react"

function App() {
  const [color, setColor] = useState('black')

  return (
    <div className="w-full h-screen duration-100" style={{background:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        onClick={() => {setColor("#EB4B98")}}
        style={{background:'#EB4B98'}}>Rose Bonbon
        </button>

        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        onClick={() => setColor("#F26DF9")}
        style={{background:'#F26DF9'}}>Ultra Pink
        </button>

        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        onClick={() => {setColor("#50BAA8")}}
        style={{background:'#50BAA8'}}>keppel
        </button>


        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        onClick={() => {setColor("#042666")}}
        style={{background:'#042666'}}>Royal Blue
        </button>

        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        onClick={() => {setColor("green")}}
        style={{background:'green'}}>Green
        </button>

         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
         onClick={() => {setColor("#4A023D")}}
        style={{background:'#4A023D'}}> tyrian Purple
        </button>
        </div>
    </div>
    </div>
  )
}

export default App
