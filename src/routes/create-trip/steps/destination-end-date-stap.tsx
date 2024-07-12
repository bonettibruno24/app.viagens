import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react"


interface DestinationEndDateStapsProps{
    isGuestsInputOpen: boolean
    closeGuestsInput: () => void 
    openGuestsImput: () => void 
}


export function DestinationEndDateStaps({
    isGuestsInputOpen,
     closeGuestsInput,
      openGuestsImput
    }: DestinationEndDateStapsProps){

    return(
        <div className='flex bg-zinc-900 rounded-xl items-center flex-1'>
                        <div className="h-16  px-4 flex items-center shadow-shape gap-2">
                            <MapPin className='size-5 text-zinc-400' />
                            <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai" className="w-72 bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                        </div>

                        <div className='flex items-center gap-2'>
                            <Calendar className='size-5 text-zinc-400' />
                            <input disabled={isGuestsInputOpen} type="text" placeholder="Quando" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
                        </div>

                        <div className="w-px h-4 bg-zinc-800 ml-3" />

                        {isGuestsInputOpen ? (
                            <button onClick={closeGuestsInput} className='bg-zinc-800 text-zinc-200 rounded-lg px-1 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700 justify-center outline-none'>
                                Alterar local/data
                                <Settings2 className='size-5' />
                            </button>
                        ) : (
                            <button onClick={openGuestsImput} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                                Continuar
                                <ArrowRight className='size-5 text-lime-950' />
                            </button>
                        )
                        }
                    </div>
    )
}