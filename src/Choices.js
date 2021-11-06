import "./Choices.css";
import React, { Component, useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, Html, OrbitControls, useGLTF } from "@react-three/drei";
import { Preload } from '@react-three/drei'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Suspense } from "react";
import { EffectComposer, Noise, Glitch, DotScreen } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import ReactTypingEffect from 'react-typing-effect';
import { GlitchMode } from 'postprocessing'



export default class Choices extends Component {
    constructor(props) {
        super(props);

        var dataSet = [
            {
                question: "Which dress catches your eyes?",
                answers: ["evening_dress_1894/scene1.gltf", "dress_with_shoes_2/scene2.gltf"],
                isModel: true,
                scales: [2, 25],
                rotation: true
            },
            {
                question: "Pick an artwork you want to decorate your home.",
                answers: ["Q1/A/scene10.gltf", "Q1/B/scene2.gltf"],
                isModel: true,
                scales: [43, 1.9],
                rotation: false,
                rotations: [-3.05, -0.05]
            },
            {
                question: "If you can just bring one of the followings to the future, which one you will choose?",
                answers: ["collection/1/scene4.gltf", "collection/2/scene3.gltf"],
                isModel: true,
                scales: [1500, 150],
                rotation: true
            },
            {
                question: "Which house would you prefer living in?",
                answers: ["arch/2/scene.gltf", "arch/1/scene.gltf"],
                isModel: true,
                scales: [22, 22],
                rotation: true
            }
        ];

        this.choices2result = {
            "0000": 4,
            "0001": 1,
            "0010": 2,
            "0011": 4,
            "0100": 3,
            "0101": 4,
            "0110": 2,
            "0111": 1,
            "1000": 2,
            "1001": 1,
            "1010": 3,
            "1011": 4,
            "1100": 2,
            "1101": 1,
            "1110": 3,
            "1111": 4
        }

        this.state = {
            current: 0,
            dataSet: dataSet,
            choices: "",
            finished: false,
            final_result: 0,
            lastClick: 0,
            resultLoaded: false,
            startLoading: 0,
            results: [
                {
                    model: (<mesh position={new THREE.Vector3(0, -5, -5)}>
                        <primitive object={useLoader(GLTFLoader, "results/1/scene_1.gltf").scene} scale={5}></primitive>
                    </mesh>), environment: "night", cameraPos: [-1, 0, 0]
                },
                {
                    model: (<mesh position={new THREE.Vector3(0, -100, 0)}>
                        <primitive object={useLoader(GLTFLoader, "results/2/5.gltf").scene} scale={0.3}></primitive>
                    </mesh>), environment: "park", cameraPos: [-1, 0, 0]
                },
                {
                    model: (<mesh position={new THREE.Vector3(5, -20, 5)}>
                        <primitive object={useLoader(GLTFLoader, "results/3/scene.gltf").scene} scale={5}></primitive>
                    </mesh>), environment: "park", cameraPos: [-1, 0, 0]
                },
                {
                    model: (<mesh position={new THREE.Vector3(50, -15, 80)}>
                        <primitive object={useLoader(GLTFLoader, "results/4/t/scene.gltf").scene} scale={0.3}></primitive>
                    </mesh>), environment: "dawn", cameraPos: [-1, 0, 0]
                },
            ]
        };
        this.handleClick = this.handleClick.bind(this);
    } // end constructor

    handleClick(choice) {
        var time = Date.now();
        if (time - this.state.lastClick < 100) {
            console.log("catch");
            return;
        }
        if (this.state.current === this.state.dataSet.length - 1) {
            this.setState({ finished: true, choices: this.state.choices + String(choice), lastClick: time });
            console.log(this.state.choices);
        } else {
            this.setState({ current: this.state.current + 1, choices: this.state.choices + String(choice), lastClick: time });
        }
    }

    render() {
        const icon = (
            <img
                class="icon"
                src="iconpng.png"
                height="80px"
                style={{ position: "absolute", marginLeft: "-49vw", marginTop: "-48vh" }}
                onClick={() => window.location.reload(false)}
                alt
            ></img>
        );

        if (this.state.finished) {
        //if (true) {
            const modelConf = this.state.results[this.choices2result[this.state.choices] - 1];
            return <RenderResult modelconf={modelConf} icon={icon}></RenderResult>
            /*
            console.log(modelConf);
            const model = modelConf.model;
            //<OrbitControls enableZoom={false} enableDamping={true} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}></OrbitControls>
            useEffect(
                () => {
                    let timer1 = setTimeout(() => this.setState({ resultLoaded: true }), 5000);
                    return () => {
                        clearTimeout(timer1);
                    };
                },
                []
            );

            return (
                <div>
                    {!loaded && <h1>loading</h1>}
                    <div className="App res">
                        <Canvas camera={{ fov: 50, position: modelConf.cameraPos }}>

                            <Suspense fallback={<Html><h1>Loading profile...</h1></Html>}>
                                <Html>{icon}</Html>
                                {model}
                                <spotLight position={[1, 1, 1]} angle={0.15} penumbra={1} />
                                <spotLight position={[-1, -1, -1]} angle={0.15} penumbra={1} />
                                <pointLight position={[0, 5, 0]} />
                                <OrbitControls enableZoom={false}></OrbitControls>
                                <Environment preset={modelConf.environment} background></Environment>
                                <Preload all />
                            </Suspense>
                            <Preload all />
                        </Canvas>
                    </div>
                </div>
            );*/
        }
        return (
            <div>
                <QuizArea
                    handleClick={this.handleClick}
                    dataSet={this.state.dataSet[this.state.current]}
                    models={this.state.models}
                    current={this.state.current}
                    icon={icon}
                />
            </div>
        );
    }
}

function RenderResult(props) {
    const modelConf = props.modelconf
    const icon = props.icon
    const [loaded, setLoaded] = useState(false);
    console.log(modelConf);
    const model = modelConf.model;
    //<OrbitControls enableZoom={false} enableDamping={true} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}></OrbitControls>
    useEffect(
        () => {
            let timer1 = setTimeout(() => setLoaded(true), 10000);
            return () => {
                clearTimeout(timer1);
            };
        },
        []
    );
    return (
        <div>
            {!loaded ? (
                <div className="script" style={{
                    marginTop: "45vh",
                    alignItems: "center", textAlign: "center", fontSize: "30px"
                }}>
                    <ReactTypingEffect
                        cursorRenderer={cursor => ""}
                        eraseDelay={10000000}
                        cursor=""
                        speed={70}
                        
                        text={['Constructing Your Birthplace In the Metaverse...']}
                    /></div>

            ) : (
                <div className="App res">
                    <Canvas camera={{ fov: 50, position: modelConf.cameraPos, far: 3000 }}>

                        <Suspense fallback={null}>
                            <Html>
                                {icon}
                                <div className="script" style={{marginLeft:"-47vw", fontSize: "25px"
                                }}>
                                    <ReactTypingEffect
                                        cursorRenderer={cursor => ""}
                                        eraseDelay={7000}
                                        cursor=""
                                        speed={70}
                                        text={['Drag your mouse to look around your world!']}
                                        eraseSpeed={70}
                                    /></div>
                            </Html>
                            {model}
                            <spotLight position={[1, 1, 1]} angle={0.15} penumbra={1} />
                            <spotLight position={[-1, -1, -1]} angle={0.15} penumbra={1} />
                            <pointLight position={[0, 5, 0]} />
                            <OrbitControls enableZoom={false}></OrbitControls>
                            <Environment preset={modelConf.environment} background></Environment>
                            <Preload all />
                        </Suspense>
                        <Preload all />
                    </Canvas>
                </div>)}

        </div>
    );

}

function Question(props) {
    //return <h2>{props.question}</h2>
    /*
    <p
                cursorRenderer={cursor => ""}
                text={[props.question]}
                eraseDelay={10000000}
                cursor=""
                speed={70}
            />*/
    return (<div class="script" style={{ width:"1000px",marginTop: "-300px", marginLeft: "-500px", textAlign: "center", "font-size": "20px" }}>
        <p>{props.question}</p>           
    </div>)
}

function Answer(props) {
    return (
        <img
            class="choice"
            src={props.image}
            onClick={() => props.handleClick(props.choice)}
            style={{ marginLeft: "100px", cursor: "pointer" }}
        ></img>
    );
}

function AnswerList(props) {
    var answers = [];
    for (let i = 0; i < props.dataSet.answers.length; i++) {
        answers.push(
            <Answer
                choice={i}
                handleClick={props.handleClick}
                image={props.dataSet.answers[i]}
            />
        );
    }

    var style = {};
    return <div style={style}>{answers}</div>;
}

function QuizArea(props) {
    if (props.dataSet.isModel === true) {

        return (
            <div class={"modelQuestion" + String(props.current)}>

                <div className="App">
                    <Canvas
                        style={{ marginTop: "-200px" }}
                        camera={{ position: [0, 100, 500] }}
                    >
                        <ambientLight intensity={0.5} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} />
                        <pointLight position={[-10, -10, -10]} />
                        <Html><Question question={props.dataSet.question}/></Html>
                        <Suspense fallback={null}>
                            <Html>{props.icon}</Html>
                            <ModelAnswerList
                                dataSet={props.dataSet}
                                handleClick={props.handleClick}
                                models={props.models}
                            />
                            <Preload all />
                        </Suspense>
                        <Preload all />
                    </Canvas>
                </div>
            </div>
        );
    }

    return (
        <div >
            <Question dataSet={props.dataSet} />

            <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
        </div>
    );
}

function ModelAnswerList(props) {
    const Model = (choice) => {
        const [hovered, setHovered] = useState(false)
        if (props.dataSet.rotation) {
            const myMesh = React.useRef();
            useFrame(({ clock }) => {
                const a = clock.getElapsedTime();
                myMesh.current.rotation.y = a / 3;
            });
            const gltf = useLoader(GLTFLoader, props.dataSet.answers[choice]);
            const shift = choice === 0 ? -250 : 250;
            return (
                <mesh
                    ref={myMesh}
                    onClick={() => { props.handleClick(choice) }}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                    position={new THREE.Vector3(shift, 0, 0)}
                    scale={hovered ? props.dataSet.scales[choice] * 1.1 : props.dataSet.scales[choice]}
                >
                    <primitive object={gltf.scene}></primitive>
                </mesh>
            );
        }
        else {
            const gltf = useLoader(GLTFLoader, props.dataSet.answers[choice]);
            const shift = choice === 0 ? -250 : 250;
            const myMesh = React.useRef();
            useFrame(({ clock }) => {
                const a = clock.getElapsedTime();
                myMesh.current.rotation.y = props.dataSet.rotations[choice];
            });
            return (
                <><mesh
                    ref={myMesh}
                    onClick={() => { props.handleClick(choice) }}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                    position={new THREE.Vector3(shift, 0, 0)}
                    scale={hovered ? props.dataSet.scales[choice] * 1.1 : props.dataSet.scales[choice]}
                >
                    <primitive object={gltf.scene}></primitive>
                </mesh>
                    <Preload all /></>
            );
        }
    };
    const Environment0 = () => {
        return <Environment files={props.dataSet.env}></Environment>;
    };
    return (
        <>
            {Model(0)}
            {Model(1)}

        </>
    );
}

export function resModel(pressed) {
    const Model = () => {
        const myMesh = React.useRef();
        useFrame(({ clock }) => { });
        const gltf = useLoader(GLTFLoader, "console/5.gltf");
        return (
            <mesh ref={myMesh} position={new THREE.Vector3(0, 300, 0)}>
                <primitive object={gltf.scene} scale={205}></primitive>
            </mesh>
        );
    };

    const firstScript = (
        <div className="script" style={{ marginTop: "-585px", marginLeft: "950px", textAlign: "center", "font-size": "25px" }}>

            <ReactTypingEffect
                cursorRenderer={cursor => ""}
                text={['Hold down ⇧ to start your journey.']}
                eraseDelay={10000000}
                cursor=""
                speed={70}
            />
        </div>
    )

    const secondScript = (
        <div className="script" style={{ marginTop: "-1150px", textAlign: "center", "font-size": "25px" }}>
            <ReactTypingEffect
                cursorRenderer={cursor => ""}
                eraseDelay={10000000}
                cursor=""
                speed={70}
                text={['Welcome, this is a channel to the Metaverse.']}
            />
            <br />
            <ReactTypingEffect
                cursorRenderer={cursor => ""}
                eraseDelay={10000000}
                cursor=""
                speed={70}
                typingDelay={6700}
                text={['Pay attention to the surroundings of you.']}
            />
            <br />
            <ReactTypingEffect
                cursorRenderer={cursor => ""}
                eraseDelay={10000000}
                cursor=""
                speed={70}
                typingDelay={10000}
                text={['Click on the mystery cube to move forward.']}
            />

        </div>
    )

    return (
        <div className="App ress">
            <h1></h1>
            <Canvas camera={{ position: [0, 450, -500] }}>
                <Suspense fallback={null}>
                    <Model></Model>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 310, 10]} angle={0.15} penumbra={1} />
                    <spotLight position={[-10, 290, -10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, 290, -10]} />
                    <Preload all />
                    <EffectComposer>
                        <Noise premultiply blendFunction={BlendFunction.ADD} />
                        <Glitch dtSize={32} delay={[1.2, 3]}
                            duration={[0.6, 1.0]}
                            strength={[0, 0.2]} />

                    </EffectComposer>
                </Suspense>
                <Preload all />
            </Canvas>
            {!pressed && firstScript}
            {pressed && secondScript}
        </div>
    );
}