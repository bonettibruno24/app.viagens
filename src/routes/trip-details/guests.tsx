import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";



export function Guests() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4 ">
                    <div className="space-y-1.5 truncate " >
                        <span className="block font-medium">Jessica While</span>
                        <span className="block text-sm text-zinc-400 ">
                            jessica.White@yahoo.com
                        </span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>
                <div className="flex items-center justify-between gap-4 ">
                    <div className="space-y-1.5 truncate " >
                        <span className="block font-medium">Dra. Rita Aparecida</span>
                        <span className="block text-sm text-zinc-400">
                            rita.aparecida@outlook.com
                        </span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>
            </div>

            <Button variant="secondary" size="full" >
                <UserCog className="size-5" />
                Gerenciar Convidad
            </Button>
        </div>


    )
}