import { useState, createContext } from "react";
import { chairColors, cushionColors, tableLegsColors } from "../constants";

export const CustomContext = createContext({})

export const CustomizationProvider = ({children}) => {
    const [furniture, setFurniture] = useState("chair")

    /* CHAIR PROPERTIES */
    const [material, setMaterial] = useState("fabric")
    const [chairLegs, setChairLegs] = useState("model1")
    const [chairColor, setChairColor] = useState(chairColors[0])
    const [cushionColor, setCushionColor] = useState(cushionColors[0])

    /* TABLE PROPERTIES */
    const [tableLegs, setTableLegs] = useState("model1")
    const [tableLegsColor, setTableLegsColor] = useState(tableLegsColors[0])
    const [tableWidth, setTableWidth] = useState(50)

    return  (
        <CustomContext.Provider value={{
            material, 
            setMaterial, 
            chairLegs, 
            setChairLegs,
            chairColor,
            setChairColor,
            cushionColor,
            setCushionColor,
            furniture,
            setFurniture,
            tableLegs,
            setTableLegs,
            tableLegsColor,
            setTableLegsColor,
            tableWidth,
            setTableWidth
        }}>
            {children}
        </CustomContext.Provider>
    )
}


