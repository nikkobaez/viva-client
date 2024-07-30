import { MeshReflectorMaterial, PresentationControls, Stage } from "@react-three/drei"
import Table from "./Table"

const TableProduct = () => {
    return (
        <>
            <PresentationControls speed={3} global zoom={0.7} polar={[-0.05, Math.PI / 4]}>
                <Stage intensity={3} environment="city" shadows={false} adjustCamera={2}>
                    <Table />
                </Stage>
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.6, 0]}>
                    <planeGeometry 
                        args={[170, 170]} 
                    />
                    <MeshReflectorMaterial 
                        blur={[300, 100]}
                        resolution={2048}
                        mixBlur={1}
                        mixStrength={2}
                        roughness={0.75}
                        depthScale={5}
                        minDepthThreshold={0.4}
                        maxDepthThreshold={1.4}
                        color="#F4F0EC"
                        metalness={1.2}
                    />
                </mesh>
            </PresentationControls>
        </>
    )
}

export default TableProduct
