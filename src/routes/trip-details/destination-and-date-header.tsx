import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from 'react-router-dom'
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { format,parseISO } from "date-fns";

interface Trip {
    id: string
    destination: string
    starts_at: string
    ends_at: string
    is_confirmed: boolean
}

export function DestinationAndDateHeader() {

    const { tripId } = useParams();
    const [trip, setTrip] = useState<Trip | undefined>(undefined);



    useEffect(() => {
        const fetchTripDetails = async () => {
            const response = await api.get(`/trips/${tripId}`);
            setTrip(response.data.trip);
        };
        fetchTripDetails();
      }, [tripId]);


      
      const displayedDate = trip? 
      `${format(parseISO(trip?.starts_at), "d' de 'LLL")} até ${format(parseISO(trip?.ends_at), "d' de 'LLL")}`
    : null;

    // const displaeydDate = trip
    //     ? format(trip?.starts_at,
    //          "d' de 'LLL").concat(' até ').concat(format(trip?.end_at,
    //              "d' de 'LLL"))
    //     : null

    // api.get(`/trips/${tripId}`).then(response => console.log(response.data))
    return (
        <div className="flex items-center justify-between px-4 h-16 rounded-xl bg-zinc-800 shadow-shape ">
            <div className="flex items-center gap-2">
                <MapPin className="size-5 text-zinc-400 " />
                <span className="text-base text-zinc-100">
                    {trip?.destination}
                </span>
            </div>
            <div className="flex items-center gap-5">
                <Calendar className="size-5 text-zinc-400 " />
                <span className="text-base text-zinc-100">
                    {displayedDate}
                </span>
                <div className="w-px h-4 bg-zinc-800 ml-3" />

                <Button variant="secondary" size="full" >
                    Alterar Local/Data
                    <Settings2 className="size-5" />
                </Button>
            </div>
        </div>
    )
}