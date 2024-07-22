import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react"
import { Button } from "../../../components/button"
import { useState } from "react"
import { DateRange, DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css";

import { format } from "date-fns"


interface DestinationEndDateStapsProps {
    isGuestsInputOpen: boolean
    eventStartEventDates: DateRange | undefined
    closeGuestsInput: () => void
    openGuestsImput: () => void
    setDestination: (destination: string) => void
    setEventStartEventDates: (dates: DateRange | undefined) => void
}


export function DestinationEndDateStaps({
    isGuestsInputOpen,
    closeGuestsInput,
    openGuestsImput,
    setDestination,
    setEventStartEventDates,
    eventStartEventDates

}: DestinationEndDateStapsProps) {

    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

    function openDatePicker() {
        return setIsDatePickerOpen(true)
    }
    function closeDatePicker() {
        return setIsDatePickerOpen(false)
    }

    const displaeydDate = eventStartEventDates && eventStartEventDates.from && eventStartEventDates.to
        ? format(eventStartEventDates.from, "d' de 'LLL").concat(' até ').concat(format(eventStartEventDates.to, "d' de 'LLL"))
        : null

    return (
        <div className='flex bg-zinc-900 rounded-xl items-center flex-1'>
            <div className="h-16  px-4 flex items-center shadow-shape gap-2 text-left ">
                <MapPin className='size-5 text-zinc-400' />
                <input
                 disabled={isGuestsInputOpen}
                  type="text" placeholder="Para onde você vai"
                   className="w-72 bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" 
                   onChange={event => setDestination(event.target.value)} //forma de voce receber o valor de um imput 
                   />
            </div>

            <button onClick={openDatePicker} disabled={isGuestsInputOpen} className='flex items-center gap-2 text-left w-[240px]'>
                <Calendar className='size-5 text-zinc-400' />
                <span className="text-lg text-zinc-400 w-40 flex-1">
                    {displaeydDate || 'Quando?'}
                </span>
            </button>

            {isDatePickerOpen && (
                <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
                    <div className='rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                        <div className='space-y-2'>
                            <div className='flex items-center justify-between'>
                                <h2 className='text-lg font-semibold'>Selecione a Data</h2>
                                <button type="button" onClick={closeDatePicker}>
                                    <X className='size-5 text-zinc-400' />
                                </button>
                            </div>

                        </div>
                        <DayPicker selected={eventStartEventDates} onSelect={setEventStartEventDates} mode="range" />
                    </div>
                </div>
            )}

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