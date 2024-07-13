import { ArrowRight, UserRoundPlus } from "lucide-react"
import { Button } from "../../../components/button"

interface InviteGuestsStapsProps{
    openGuestesModal: () => void
    openConfirmTripModal: () => void
    emailsToInvite: string[]
}

export function InviteGuestsStaps({
    openConfirmTripModal,
     emailsToInvite,
      openGuestesModal,
}: InviteGuestsStapsProps){

    return(
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-2">
        <button type='button' onClick={openGuestesModal} className='flex items-center gap-2 flex-1 outline-none'>
            <UserRoundPlus className='size-5 text-zinc-400' />
            {emailsToInvite.length > 0 ? (
                <span className=" text-left text-lg text-zinc-100 flex-1">
                    {emailsToInvite.length} pessoa(s) convida(s) </span>
            ) : (
                <span className=" text-left text-lg text-zinc-400 flex-1">Quem estará na viagem?</span>
            )
            }
        </button>

        <div className="w-px h-4 bg-zinc-800 ml-3" />
        <Button onClick={openConfirmTripModal} variant="primary" >
                Confirmar viagem
                <ArrowRight className='size-5 text-lime-950' /> 
             </Button>

    </div>
    )
}