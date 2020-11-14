import React, {useEffect, useRef} from 'react';
import Lamps from "../../../services/lamps";

function Map() {
    const canvas = useRef(null)
    let lamps = new Lamps()
    useEffect(() => {
        lamps.canvas = canvas.current
        lamps.update()
        lamps.render()
    }, [])
    const onMouseDown = (e) => {
        try {
            lamps.mouseClick(e.clientX - canvas.current.getBoundingClientRect().left,
                e.clientY - canvas.current.getBoundingClientRect().top
            )
        } catch (e) {

        }
    }
    const onMouseMove = (e) => {
        try {
            lamps.mouseMove(e.clientX - canvas.current.getBoundingClientRect().left,
                e.clientY - canvas.current.getBoundingClientRect().top
            )
        } catch (e) {

        }
    }
    return (
        <div>
            <canvas ref={canvas} id='example' width="1000px" height="900px"
                    style={{"background": "url(images/campusmap.png) no-repeat"}}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}>Обновите
                браузер
            </canvas>
        </div>
    );
}

export default Map;