import { useEffect, useState } from "react";
import { getMomentOfTheDay } from "../services/momentOfTheDayService";

export const MomentOfTheDay = ({place}) => {

    const [momentOfTheDay, setMomentOfTheDay] = useState(getMomentOfTheDay())
    
    useEffect(() => {
               
        const interval = setInterval(() => {
            setMomentOfTheDay(getMomentOfTheDay)
        }, 1000);
        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <h1 className="text-3xl">{momentOfTheDay}</h1>
        </div>
    )
}