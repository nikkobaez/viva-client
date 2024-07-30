import { useState, useContext, useRef } from "react"
import { CustomContext } from "../context/CustomContext"
import { chairColors, cushionColors, tableLegsColors } from "../constants"
import { MdOutlineTableRestaurant as TableIcon } from "react-icons/md";
import { Slider, CircularProgress } from "@mui/material";


const Customizer = () => {
    const { 
        furniture, 
        setFurniture, 
        material, 
        setMaterial, 
        chairLegs, 
        setChairLegs, 
        chairColor, 
        setChairColor, 
        cushionColor, 
        setCushionColor,
        tableLegs,
        setTableLegs,
        tableLegsColor,
        setTableLegsColor,
        tableWidth,
        setTableWidth
} = useContext(CustomContext)
    const customizerMenuRef = useRef(null)

    const [isLoading, setIsLoading] = useState(false)

    const handleChangeFurniture = (furniture) => {
        setIsLoading(true)
        setFurniture(furniture)

        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
        
    }

    if (isLoading) {
        return (
            <div className="top-0 left-0 absolute flex justify-center items-center bg-[#F4F0EC] w-screen h-screen">
                <CircularProgress 
                    sx={{ color: "#CDA274" }}
                    size={50}
                />
            </div>
        )
    }

    return (
        <>
            {/* DESKTOP CUSTOMIZER MENU */}
            <div className='top-0 right-8 bottom-0 absolute lg:flex flex-col gap-8 hidden bg-[#B8A89A] my-auto p-5 rounded-2xl w-[320px] h-full max-h-[90vh] text-white overflow-auto'>
                {furniture === "chair" ? (
                    <>
                        <div>
                            <div className='font-medium no-text-select uppercase'>
                                    Chair Material
                            </div>
                            <div className='flex items-center gap-4 mt-3'>
                                <div onClick={() => setMaterial("fabric")} className={`${material === 'fabric' ? "transition-all duration-300 underline underline-offset-8" : ""} text-white no-text-select text-sm hover:cursor-pointer`}>
                                    Fabric
                                </div>
                                <div onClick={() => setMaterial("leather")} className={`${material === 'leather' ? "transition-all duration-300 underline underline-offset-8" : ""} text-white no-text-select text-sm hover:cursor-pointer`}>
                                    Leather
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='font-medium no-text-select uppercase'>
                                Chair Color
                            </div>
                            <div className='flex flex-wrap items-center gap-6 mt-3'>
                                {chairColors.map((item, index) => (
                                    <div key={index} onClick={() => setChairColor(item)} className={`${item.color === chairColor.color ? "transition-all duration-300 underline underline-offset-8" : ""} text-white flex flex-col items-center gap-2 no-text-select text-sm hover:cursor-pointer`}>
                                        <div 
                                            style={{background: item.color}}
                                            className="border-2 border-white rounded-full w-8 h-8 transition-all duration-300"
                                        />
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className='font-medium no-text-select uppercase'>
                                Cushion Color
                            </div>
                            <div className='flex flex-wrap items-center gap-6 mt-3'>
                                {cushionColors.map((item, index) => (
                                    <div key={index} onClick={() => setCushionColor(item)} className={`${item.color === cushionColor.color ? "transition-all duration-300 underline underline-offset-8" : ""} text-white flex flex-col items-center gap-2 no-text-select text-sm hover:cursor-pointer`}>
                                        <div 
                                            style={{background: item.color}}
                                            className="border-2 border-white rounded-full w-8 h-8 transition-all duration-300"
                                        />
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className='font-medium no-text-select uppercase'>
                                Legs
                            </div>
                            <div className='flex items-center gap-4 mt-3'>
                                <div onClick={() => setChairLegs("model1")} className={`${chairLegs === 'model1' ? "transition-all duration-300 underline underline-offset-8" : ""} text-white no-text-select text-sm hover:cursor-pointer`}>
                                    Modern
                                </div>
                                <div onClick={() => setChairLegs("model2")} className={`${chairLegs === 'model2' ? "transition-all duration-300 underline underline-offset-8" : ""} text-white no-text-select text-sm hover:cursor-pointer`}>
                                    Classic
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="relative">
                            <div className='flex justify-between items-center'>
                                <div className='font-medium no-text-select uppercase'>
                                        Table Width
                                </div>
                            </div> 
                            <div className='flex items-center gap-4 mt-3'>
                            <Slider
                                sx={{
                                    width: "200px",
                                    color: "#FFFFFF",
                                    '& .MuiSlider-thumb': {
                                        width: 16,
                                        height: 16,
                                        '&:hover': {
                                            boxShadow: 'inherit',
                                          },
                                    }
                                }}
                                
                                min={50}
                                max={200}
                                value={tableWidth}
                                onChange={(e) => setTableWidth(e.target.value)}
                                valueLabelDisplay="auto"
                            />
                            </div>

                            <div  onClick={() => customizerMenuRef.current.classList.remove('custom-is-open')} className="top-[-10px] right-0 z-30 absolute flex lg:hidden hover:cursor-pointer">
                                <i className="text-[30px] ri-close-line" />
                            </div>
                        </div>

                        <div>
                            <div className='font-medium no-text-select uppercase'>
                                Table Legs Color
                            </div>
                            <div className='flex flex-wrap items-center gap-6 mt-3'>
                                {tableLegsColors.map((item, index) => (
                                    <div key={index} onClick={() => setTableLegsColor(item)} className={`${item.color === tableLegsColor.color ? "transition-all duration-300 underline underline-offset-8" : ""} text-white flex flex-col items-center gap-2 no-text-select text-sm hover:cursor-pointer`}>
                                        <div 
                                            style={{background: item.color}}
                                            className="border-2 border-white rounded-full w-8 h-8 transition-all duration-300"
                                        />
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className='font-medium no-text-select uppercase'>
                                Legs
                            </div>
                            <div className='flex items-center gap-4 mt-3'>
                                <div onClick={() => setTableLegs("model1")} className={`${tableLegs === 'model1' ? "transition-all duration-300 underline underline-offset-8" : ""} text-white no-text-select text-sm hover:cursor-pointer`}>
                                    Modern
                                </div>
                                <div onClick={() => setTableLegs("model2")} className={`${tableLegs === 'model2' ? "transition-all duration-300 underline underline-offset-8" : ""} text-white no-text-select text-sm hover:cursor-pointer`}>
                                    Solid
                                </div>
                                <div onClick={() => setTableLegs("model3")} className={`${tableLegs === 'model3' ? "transition-all duration-300 underline underline-offset-8" : ""} text-white no-text-select text-sm hover:cursor-pointer`}>
                                    Classic
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* CUSTOMIZER MENU TOGGLE BUTTON */}
            <div onClick={() => customizerMenuRef.current.classList.add('custom-is-open')} className="top-12 right-10 sm:right-16 absolute flex lg:hidden">
                <i className="text-4xl hover:cursor-pointer ri-menu-4-line" color="#B8A89A"/>
            </div>

            {/* MOBILE CUSTOMIZER MENU */}
            <div ref={customizerMenuRef} className='top-0 right-[-100%] bottom-0 z-20 absolute flex flex-col gap-8 lg:hidden bg-[#B8A89A] mx-auto my-auto p-5 rounded-2xl w-full max-w-[90vw] h-full max-h-[90vh] text-white transition-[right] duration-300 overflow-auto'>
                {furniture === "chair" ? (
                    <>
                        <div className="relative">
                            <div className='flex justify-between items-center'>
                                <div className='font-medium no-text-select uppercase'>
                                        Chair Material
                                </div>
                            </div> 
                            <div className='flex items-center gap-4 mt-3'>
                                <div onClick={() => setMaterial("fabric")} className={`${material === 'fabric' ? "transition-all duration-300 underline underline-offset-8" : ""} text-white no-text-select text-sm hover:cursor-pointer`}>
                                    Fabric
                                </div>
                                <div onClick={() => setMaterial("leather")} className={`${material === 'leather' ? "transition-all duration-300 underline underline-offset-8" : ""} text-white no-text-select text-sm hover:cursor-pointer`}>
                                    Leather
                                </div>
                            </div>

                            <div  onClick={() => customizerMenuRef.current.classList.remove('custom-is-open')} className="top-[-10px] right-0 z-30 absolute flex lg:hidden hover:cursor-pointer">
                                <i className="text-[30px] ri-close-line" />
                            </div>
                        </div>

                        <div>
                            <div className='font-medium no-text-select uppercase'>
                                Chair Color
                            </div>
                            <div className='flex flex-wrap items-center gap-6 mt-3'>
                                {chairColors.map((item, index) => (
                                    <div key={index} onClick={() => setChairColor(item)} className={`${item.color === chairColor.color ? "transition-all duration-300 underline underline-offset-8" : ""} text-white flex flex-col items-center gap-2 no-text-select text-sm hover:cursor-pointer`}>
                                        <div 
                                            style={{background: item.color}}
                                            className="border-2 border-white rounded-full w-8 h-8 transition-all duration-300"
                                        />
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className='font-medium no-text-select uppercase'>
                                Cushion Color
                            </div>
                            <div className='flex flex-wrap items-center gap-6 mt-3'>
                                {cushionColors.map((item, index) => (
                                    <div key={index} onClick={() => setCushionColor(item)} className={`${item.color === cushionColor.color ? "transition-all duration-300 underline underline-offset-8" : ""} text-white flex flex-col items-center gap-2 no-text-select text-sm hover:cursor-pointer`}>
                                        <div 
                                            style={{background: item.color}}
                                            className="border-2 border-white rounded-full w-8 h-8 transition-all duration-300"
                                        />
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className='font-medium no-text-select uppercase'>
                                Legs
                            </div>
                            <div className='flex items-center gap-4 mt-3'>
                                <div onClick={() => setChairLegs("model1")} className={`${chairLegs === 'model1' ? "transition-all duration-300 underline underline-offset-8" : ""} text-white no-text-select text-sm hover:cursor-pointer`}>
                                    Modern
                                </div>
                                <div onClick={() => setChairLegs("model2")} className={`${chairLegs === 'model2' ? "transition-all duration-300 underline underline-offset-8" : ""} text-white no-text-select text-sm hover:cursor-pointer`}>
                                    Classic
                                </div>
                            </div>
                        </div>
                    </>
                ): (
                    <>
                        <div className="relative">
                            <div className='flex justify-between items-center'>
                                <div className='font-medium no-text-select uppercase'>
                                        Table Width
                                </div>
                            </div> 
                            <div className='flex items-center gap-4 mt-3'>
                            <Slider
                                sx={{
                                    width: "200px",
                                    color: "#FFFFFF",
                                    '& .MuiSlider-thumb': {
                                        width: 16,
                                        height: 16,
                                        '&:hover': {
                                            boxShadow: 'inherit',
                                          },
                                    }
                                }}
                                
                                min={50}
                                max={200}
                                value={tableWidth}
                                onChange={(e) => setTableWidth(e.target.value)}
                                valueLabelDisplay="auto"
                            />
                            </div>

                            <div  onClick={() => customizerMenuRef.current.classList.remove('custom-is-open')} className="top-[-10px] right-0 z-30 absolute flex lg:hidden hover:cursor-pointer">
                                <i className="text-[30px] ri-close-line" />
                            </div>
                        </div>

                        <div>
                            <div className='font-medium no-text-select uppercase'>
                                Table Legs Color
                            </div>
                            <div className='flex flex-wrap items-center gap-6 mt-3'>
                                {tableLegsColors.map((item, index) => (
                                    <div key={index} onClick={() => setTableLegsColor(item)} className={`${item.color === tableLegsColor.color ? "transition-all duration-300 underline underline-offset-8" : ""} text-white flex flex-col items-center gap-2 no-text-select text-sm hover:cursor-pointer`}>
                                        <div 
                                            style={{background: item.color}}
                                            className="border-2 border-white rounded-full w-8 h-8 transition-all duration-300"
                                        />
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className='font-medium no-text-select uppercase'>
                                Legs
                            </div>
                            <div className='flex items-center gap-4 mt-3'>
                                <div onClick={() => setTableLegs("model1")} className={`${tableLegs === 'model1' ? "transition-all duration-300 underline underline-offset-8" : ""} text-white no-text-select text-sm hover:cursor-pointer`}>
                                    Modern
                                </div>
                                <div onClick={() => setTableLegs("model2")} className={`${tableLegs === 'model2' ? "transition-all duration-300 underline underline-offset-8" : ""} text-white no-text-select text-sm hover:cursor-pointer`}>
                                    Solid
                                </div>
                                <div onClick={() => setTableLegs("model3")} className={`${tableLegs === 'model3' ? "transition-all duration-300 underline underline-offset-8" : ""} text-white no-text-select text-sm hover:cursor-pointer`}>
                                    Classic
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* FURNITURE MENU */}
            <div className="top-12 right-0 left-0 absolute flex justify-center items-center gap-8 mx-auto my-auto w-fit">
                <div onClick={() => handleChangeFurniture("chair")} className="flex justify-center items-center bg-[#B8A89A] rounded-full w-14 h-14 hover:cursor-pointer">
                    <i className="text-[30px] text-white ri-armchair-line"> </i>
                </div>
                <div onClick={() => handleChangeFurniture("table")} className="flex justify-center items-center bg-[#B8A89A] rounded-full w-14 h-14 hover:cursor-pointer">
                    <TableIcon color="#FFFFFF" size={30}/>
                </div>
            </div>
        </>   
    )
}

export default Customizer