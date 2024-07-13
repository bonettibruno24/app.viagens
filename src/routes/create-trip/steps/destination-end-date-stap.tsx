import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react"
import { Button } from "../../../components/button"


interface DestinationEndDateStapsProps {
    isGuestsInputOpen: boolean
    closeGuestsInput: () => void
    openGuestsImput: () => void
}


export function DestinationEndDateStaps({
    isGuestsInputOpen,
    closeGuestsInput,
    openGuestsImput
}: DestinationEndDateStapsProps) {

    return (
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
                <Button onClick={closeGuestsInput} variant="secondary" >
                    Alterar Local/Data
                    <Settings2 className="size-5" />
                </Button>

            ) : (
                 <Button onClick={openGuestsImput} variant="primary" >
                 Continuar
                 <ArrowRight className="size-5" />
             </Button>

            )
            }
        </div>
    )
}