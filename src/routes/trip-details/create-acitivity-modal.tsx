import { Calendar, Tag, Timer, X } from "lucide-react";
import { Button } from "../../components/button";

interface CreateAcitivityModalProps{
    closeActivityModal: () => void
}

export function CreateAcitivityModal({
    closeActivityModal
}:CreateAcitivityModalProps){


    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>|Cadastrar Atividade </h2>
                        <button type="button" onClick={closeActivityModal}>
                            <X className='size-5 text-zinc-400' />
                        </button>
                    </div>
                    <p className='text-sm text-zinc-400'>
                        Todos os convidados podem visualizar as atividades.
                    </p>
                </div>

                <form className=''>

                    <div className='space-y-2'>
                        <div className='h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2'>
                            <Tag className='text-zinc-400 size-5' />
                            <input
                                type="title"
                                name='email'
                                placeholder="Qual a atividade?"
                                className="bg-transparent text-lg placeholder-zinc-400 flex-1 outline-none"
                            />
                        </div>

                        <div className="flex items-center gap-2">

                            <div className='h-14 flex-1 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2'>
                                <Calendar className='text-zinc-400 size-5' />
                                <input
                                    type="date"
                                    name=''
                                    placeholder="Data"
                                    className="bg-transparent text-lg placeholder-zinc-400 flex-1 outline-none"
                                />
                            </div>
                            <div className='h-14 w-36 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2'>
                                <Timer className='text-zinc-400 size-5' />
                                <input
                                    type="time"
                                    name=''
                                    placeholder="Horário"
                                    className="bg-transparent text-lg placeholder-zinc-400 flex-1 outline-none"
                                />
                            </div>
                        </div>


                        <Button variant="primary" size="full" >
                            Salvar Atividade
                    </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}