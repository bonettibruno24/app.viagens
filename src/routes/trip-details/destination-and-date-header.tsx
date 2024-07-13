import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../components/button";

export function DestinationAndDateHeader(){

    return(
<div className="flex items-center justify-between px-4 h-16 rounded-xl bg-zinc-800 shadow-shape ">
                <div className="flex items-center gap-2">
                    <MapPin className="size-5 text-zinc-400 " />
                    <span className="text-base text-zinc-100">
                        Florianópolis, Brasil
                    </span>
                </div>
                <div className="flex items-center gap-5">
                    <Calendar className="size-5 text-zinc-400 " />
                    <span className="text-base text-zinc-100">
                        17 a 23 de agosto
                    </span>
                    <div className="w-px h-4 bg-zinc-800 ml-3" />

                    <Button variant="secondary" size="full" >
                        Alterar Local/Data
                        <Settings2 className="size-5"/>
                    </Button>
                </div>
            </div>
    )
}