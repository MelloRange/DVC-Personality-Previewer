"use client"

interface radioButtonProps{
    label: string;
    changeFormFunction: () => void;
}
export default function RadioButton({label, changeFormFunction}: radioButtonProps){
    return(
        <div className="my-2 bg-slate-400">
            <button onClick={changeFormFunction}>{label}</button>
        </div>
    );
}   