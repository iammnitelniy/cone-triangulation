import React, { useEffect } from 'react';
import * as THREE from 'three';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../app/store';
import SceneInit from '../../../common/lib/SceneInit';

export const Cone3D = () => {
    const coneParams = useSelector((state: AppRootStateType) => state.coneParams);

    useEffect(() => {
        const test: any = new SceneInit('myThreeJsCanvas');
        test.initialize();
        test.animate();

        let radius;
        let height;
        let segments;

        if (coneParams.radius && coneParams.height && coneParams.segments) {
            radius = parseFloat(coneParams.radius);
            height = parseFloat(coneParams.height);
            segments = parseInt(coneParams.segments);

            if (!isNaN(radius) && !isNaN(height) && !isNaN(segments)) {
                const coneGeometry = new THREE.ConeGeometry(radius, height, segments);
                const coneMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
                const coneMesh = new THREE.Mesh(coneGeometry, coneMaterial);
                coneMesh.position.x = -1;
                test.scene.add(coneMesh);
            } else {
                console.error('Invalid cone parameters');
            }
        } else {
            console.error('Cone parameters are missing');
        }
    }, [coneParams]);

    return (
        <div>
            <canvas id="myThreeJsCanvas" />
        </div>
    );
};