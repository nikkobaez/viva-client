import { useGLTF } from '@react-three/drei'
import { useEffect, useRef, useContext } from 'react'
import { CustomContext } from '../context/CustomContext'
import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'
import * as THREE from "three"

const ANIM_SPEED = 12

const Table = (props) => {
    const { nodes, materials } = useGLTF('./models/table.gltf')
    const { tableLegs, tableLegsColor, tableWidth } = useContext(CustomContext)

    const plate = useRef()
    const leftLegs = useRef()
    const rightLegs = useRef()

    useEffect(() => {
        materials.Metal.color = new THREE.Color(tableLegsColor.color)
    }, [tableLegsColor.color])

    useFrame((_state, delta) => {
        const tableWidthScale = tableWidth / 100;
        const targetScale = new Vector3(tableWidthScale, 1, 1);
    
        plate.current.scale.lerp(targetScale, delta * ANIM_SPEED);
    
        const targetLeftPosition = new Vector3(-1.5 * tableWidthScale, 0, 0);
        leftLegs.current.position.lerp(targetLeftPosition, delta * ANIM_SPEED);
    
        const targetRightPosition = new Vector3(1.5 * tableWidthScale, 0, 0);
        rightLegs.current.position.lerp(targetRightPosition, delta * ANIM_SPEED);
      });

    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Plate.geometry}
                material={materials.Plate}
                ref={plate}
            />
            {tableLegs === "model1" && (
                <>
                    <mesh
                        geometry={nodes.Legs01Left.geometry}
                        material={materials.Metal}
                        position={[-1.5, 0, 0]}
                        ref={leftLegs}
                    />
                    <mesh
                        geometry={nodes.Legs01Right.geometry}
                        material={materials.Metal}
                        position={[1.5, 0, 0]}
                        ref={rightLegs}
                    />
                </>
            )}
            {tableLegs === "model2" && (
                <>
                    <mesh
                        geometry={nodes.Legs02Left.geometry}
                        material={materials.Metal}
                        position={[-1.5, 0, 0]}
                        ref={leftLegs}
                    />
                    <mesh
                        geometry={nodes.Legs02Right.geometry}
                        material={materials.Metal}
                        position={[1.5, 0, 0]}
                        ref={rightLegs}
                    />
                </>
            )}
            {tableLegs === "model3" && (
                <>
                    <mesh
                        geometry={nodes.Legs03Left.geometry}
                        material={materials.Metal}
                        position={[-1.5, 0, 0]}
                        ref={leftLegs}
                    />
                    <mesh
                        geometry={nodes.Legs03Right.geometry}
                        material={materials.Metal}
                        position={[1.5, 0, 0]}
                        ref={rightLegs}
                    />
                </>
            )}
      </group>
    )
}

useGLTF.preload('./models/table.gltf')

export default Table
