import './App.css';
import "./css/slider.css"
import "bootstrap/dist/css/bootstrap.min.css";
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
        canvas.width = 1800;
        canvas.height = 500;
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
        <div  data-testid="pageBackgound" id ="pageBackgound">
            <canvas data-testid="canvasBackgound" id ="canvasBackgound"
                ref={canvasRef}
                onMouseEnter={(e) => SetPos(e)}
                onMouseMove={(e) => SetPos(e)}
                onMouseDown={(e) => SetPos(e)}
                onMouseMove={(e) => Draw(e)}
            ></canvas>

            <div data-testid="controlpanel" className="controlpanel">

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

                <input type="checkbox" name="eraser" id="erase" />
                <label class="eraser-label" for="eraser">
                    Erase
                </label>
                <button
                    onClick={() => {
                        setColor("#FFFFFF");
                    }}
                >
                    erase
                </button>
            </div>
        </div>
    );
}

export default App;
