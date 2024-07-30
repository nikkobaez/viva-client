import { useState, useEffect, useContext } from "react";
import { CustomContext } from "../context/CustomContext";
import { Canvas } from '@react-three/fiber'
import { CircularProgress } from '@mui/material';
import { ChairProduct, TableProduct, Customizer } from "../components";

const Studio = () => {
    const { furniture } = useContext(CustomContext)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])


    return (
        <div className='flex justify-center items-center bg-[#F4F0EC] w-screen h-screen'>
            {isLoading ? (
                <div className="flex flex-1 justify-center items-center min-w-screen min-h-screen">
                    <CircularProgress 
                        sx={{ color: "#CDA274" }}
                        size={50}
                    />
                </div>
            ) : (
                <div className="relative w-screen h-screen overflow-hidden">
                    <div className="w-full h-full">
                        <Canvas>
                                <color attach="background" args={["#F4F0EC"]}/>
                                <fog attach="fog" args={["#F4F0EC", 10, 20 ]} />
                                {furniture === "chair" ? (
                                    <>
                                        <ChairProduct />
                                    </>
                                ) : (
                                    <>
                                        <TableProduct />
                                    </>
                                )}
                        </Canvas>
                    </div>
                    <Customizer />
                </div>
            )}
        </div>
    )
}

export default Studio