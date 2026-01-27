'use client'

import { useState } from "react";

const LanguessageShifter = () => {

    const [lan, setlan] = useState('en');

    return (
        <div className="flex items-center border border-red-600 rounded-xl">
            <button onClick={() => { setlan("en") }} className={`px-2 text-sm cursor-pointer ${lan === "en" && "bg-red-600 text-white rounded-l-lg"}`}>En</button>
            <button onClick={() => { setlan("fr") }} className={`px-2 text-sm cursor-pointer ${lan === "fr" && "bg-red-600 text-white rounded-r-lg"}`}>Fr</button>
        </div>
    )
}

export default LanguessageShifter;