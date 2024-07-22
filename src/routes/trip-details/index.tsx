import { Calendar, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2, Tag, Timer, UserCog, X } from "lucide-react";
import { useState } from "react";
import { ImportantLinks } from "./importat-links";
import { Activites } from "./activites";
import { Guests } from "./guests";
import { DestinationAndDateHeader } from "./destination-and-date-header";
import { CreateAcitivityModal } from "./create-acitivity-modal";



export function TripDetailsPage() {

    const [isCreateActivityModalOpen, setisCreateActivityModalOpen] = useState(false)

    function closeActivityModal() {
        setisCreateActivityModalOpen(false)
    }
    function openActivityModal(){
        setisCreateActivityModalOpen(true)
    }

    return (
        <div className="max-w-6xl px-24 py-10 mx-auto space-y-8">
            <DestinationAndDateHeader />
            <main className="flex gap-16 px-4">
                <Activites
                openActivityModal={openActivityModal}
                />
                <div className="w-80 space-y-6">
                    <ImportantLinks />
                    <div className='w-full h-px bg-zinc-800' />
                    <div></div>
                    <Guests />
                </div>
            </main>
                {isCreateActivityModalOpen &&
                <CreateAcitivityModal
                closeActivityModal={closeActivityModal}
                />
}
        </div>
    )
}