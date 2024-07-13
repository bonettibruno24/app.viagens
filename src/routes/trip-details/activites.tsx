import { CircleCheck, Plus } from "lucide-react"

interface ActivitesProps{
    openActivityModal: () => void
}

export function Activites({
    openActivityModal
    }:ActivitesProps){
    return(
        <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold"> Atividades</h2>
                        <button onClick={openActivityModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                            <Plus className='size-5 text-lime-950' />
                            Cadastrar Atividades
                        </button>
                    </div>
                    <div className="space-y-8">
                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold">DIa 17</span>
                                <span className="text-xs text-zinc-500">Sabado</span>
                            </div>
                            <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada</p>
                        </div>
                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold">DIa 18</span>
                                <span className="text-xs text-zinc-500">Domingo</span>
                            </div>
                            <div className="space-y-2.5">
                                <div className="flex items-center gap-3 px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape ">
                                    <CircleCheck className="size-5 text-lime-500" />
                                    <span className="text-zinc-100">Academia em grupo</span>
                                    <span className="text-zinc-400 text-sm ml-auto">08:00</span>
                                </div>
                            </div>
                            <div className="space-y-2.5">
                                <div className="flex items-center gap-3 px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape ">
                                    <CircleCheck className="size-5 text-lime-500" />
                                    <span className="text-zinc-100">Academia em grupo</span>
                                    <span className="text-zinc-400 text-sm ml-auto">08:00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

    )
}