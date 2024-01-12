import logo from './logo.svg';
import './App.css';
import SliderComponent from './components/SliderComponent'
import ColourChangeComponent from './components/ColourChangeComponent';
import { useEffect, useRef, useState } from "react";
import React from 'react';

function App() {
    const [mouseData, setMouseData] = useState({ x: 0, y: 0 });
    const canvasRef = useRef(null);
    const [canvasCTX, setCanvasCTX] = useState(null);
    const [color, setColor] = useState("#000000");
    const [size, setSize] = useState(10);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = 250;
        canvas.height = 250;
        setCanvasCTX(ctx);
    }, [canvasRef]);


    // Callback function to update parentVariable
    const updateSizeVariable = (newValue) => {
        setSize(newValue);
    };

    const updateColour = (newValue) => {
        setColor(newValue);
    }
    const SetPos = (e) => {
        setMouseData({
            x: e.clientX,
            y: e.clientY,
        });
    };

    const Draw = (e) => {
        if (e.buttons !== 1) return;
        const ctx = canvasCTX;
        ctx.beginPath();
        ctx.moveTo(mouseData.x, mouseData.y);
        setMouseData({
            x: e.clientX,
            y: e.clientY,
        });
        ctx.lineTo(e.clientX, e.clientY);
        ctx.strokeStyle = color;
        ctx.lineWidth = size;
        // Set the line cap to round
        ctx.lineCap = "round";
        ctx.stroke();
    };

    return (
        <div id ="pageBackgound">
            <canvas id ="canvasBackgound"
                ref={canvasRef}
                onMouseEnter={(e) => SetPos(e)}
                onMouseMove={(e) => SetPos(e)}
                onMouseDown={(e) => SetPos(e)}
                onMouseMove={(e) => Draw(e)}
            ></canvas>

            <div className="controlpanel">

                <SliderComponent updateSizeVariable={updateSizeVariable}/>
                <ColourChangeComponent updateColour={updateColour}/>
                <button
                    onClick={() => {
                        const ctx = canvasCTX;
                        ctx.clearRect(
                            0,
                            0,
                            canvasRef.current.width,
                            canvasRef.current.height
                        );
                    }}
                >
                    Clear
                </button>
            </div>
        </div>
    );
}

export default App;
