import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './invite-guests-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { DestinationEndDateStaps } from './steps/destination-end-date-stap'
import { InviteGuestsStaps } from './steps/invite-guests-stap'
import { DateRange } from 'react-day-picker'
import { api } from '../../lib/axios'


export function CreatetripPages() {
    const navigate = useNavigate()

    const [isGuestsInputOpen, SetIsGuestsInputOpen] = useState(false)
    const [isGuestsModalOpen, SetIsGuestsModalOpen] = useState(false)
    const [isConfirmTripModalOpen, SetIsConfigTripModalOpen] = useState(false)

    const [destination, setDestination] = useState('')
    const [ownerName, setOwnerName] = useState('')
    const [ownerEmail, setOwnerEmail] = useState('')
    const [eventStartEventDates, setEventStartEventDates] = useState<DateRange | undefined>()


    const [emailsToInvite, SetEmailsToEnvite] = useState([
        'brunosilvabonetti@gmail.com'
    ])

    function openGuestsImput() {
        SetIsGuestsInputOpen(true);
    }
    function closeGuestsInput() {
        SetIsGuestsInputOpen(false);
    }


    function openConfirmTripModal() {
        SetIsConfigTripModalOpen(true);
    }
    function closeConfirmTripModal() {
        SetIsConfigTripModalOpen(false);
    }

    function addNewEmailInvite(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log('submit')
        const data = new FormData(event.currentTarget)
        const email = data.get('email')?.toString()
        if (!email) {
            return (
                alert('ERRO, PREENCHA DIREITO PALHAÇO')
            )
        }
        if (emailsToInvite.includes(email)) {
            return
        }

        console.log(email)

        SetEmailsToEnvite([
            ...emailsToInvite,
            email
        ])

        event.currentTarget.reset()
    }

    function removeEmailFromInvite(emailToRemove: string) {
        const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

        SetEmailsToEnvite(newEmailList)
    }

    function openGuestesModal() {
        SetIsGuestsModalOpen(true);
    }
    function closeGuestesModal() {
        SetIsGuestsModalOpen(false);
    }

    async function createTrip(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        console.log(destination)
        console.log(ownerName)
        console.log(ownerEmail)
        console.log(eventStartEventDates)
        console.log(emailsToInvite)

        if (!destination) {
            return
        }
        if (!eventStartEventDates?.from || !eventStartEventDates?.to) {
            return
        }

        if (emailsToInvite.length === 0) {
            return
        }
        if (!ownerName || !ownerEmail) {
            return
        }
        const response = await api.post('/trips', {
            destination,
            starts_at: eventStartEventDates?.from,
            ends_at: eventStartEventDates?.to,
            emails_to_invite: emailsToInvite,
            owner_name: ownerName,
            owner_email: ownerEmail,
            
        })

        console.log('teste na api', response.data)

        const {tripId} = response.data

        navigate(`/trips/${tripId}`)
        
    }

    return (
        <div className="flex items-center justify-center h-screen bg-mask bg-no-repeat bg-center ">
            <div className="max-w-3xl w-full px-6 text-center space-y-10">
                <div className='flex flex-col items-center gap-3'>
                    <img src="/logo.svg" alt="planner" />
                    <p className="text-zinc-300 text-lg"> Convide seus amigos e planeje sua próxima viagem!</p>
                </div>
                <div className='space-y-4'>
                    <DestinationEndDateStaps
                        closeGuestsInput={closeGuestsInput}
                        isGuestsInputOpen={isGuestsInputOpen}
                        eventStartEventDates={eventStartEventDates}
                        openGuestsImput={openGuestsImput}
                        setDestination={setDestination}
                        setEventStartEventDates={setEventStartEventDates}

                    />

                    {isGuestsInputOpen && (
                        <InviteGuestsStaps
                            emailsToInvite={emailsToInvite}
                            openConfirmTripModal={openConfirmTripModal}
                            openGuestesModal={openGuestesModal}
                        />
                    )}
                </div>
                <p className="text-sm text-zinc-500">
                    Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
                    com nossos <a href="#" className="text-zinc-300">Termos de uso</a> e <a href="#" className="text-zinc-300" >Políticas de privacidade.</a>
                </p>
            </div>
            {isGuestsModalOpen && (
                <InviteGuestsModal
                    emailsToInvite={emailsToInvite}
                    addNewEmailInvite={addNewEmailInvite}
                    closeGuestesModal={closeGuestesModal}
                    removeEmailFromInvite={removeEmailFromInvite}
                />
            )}
            {isConfirmTripModalOpen && (
                <ConfirmTripModal
                    closeConfirmTripModal={closeConfirmTripModal}
                    createTrip={createTrip}
                    setOwnerName={setOwnerName}
                    setOwnerEmail={setOwnerEmail}
                />
            )}
        </div>
    )
}


