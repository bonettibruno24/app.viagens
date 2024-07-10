export function App(){ 
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="max-w-3xl px-6 text-center">
        <p className="text-zinc-300 text-lg"> Convide seus amigos e planeje sua próxima viagem!</p>
        <div className="h-">
        <input type="text" placeholder="Para onde você vai" />
        <input type="text" placeholder="Quando" />
          <button>Continuar</button>
        </div>
        <p className="text-sm text-zinc-500">
        Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
        com nossos <a href="#" className="text-zinc-300">Termos de uso</a> e <a href="#" className="text-zinc-300" >políticas de privacidade.</a>
        </p>
      </div>
    </div>
    
  )
}
