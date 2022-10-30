import { useEffect, useState } from "react";
import "./timer.css";

const Timer = () => {
    let [min, setMin] = useState(1);
    let [sec, setSec] = useState(30);
    let [timepasses, setTimepasses] = useState(false);
    let [select, setSelect] = useState(500);

    if (sec === 0) {
        setMin((min) => (min -= 1));
        setSec((sec) => (sec = 60));
    }

    if (sec === 0 && min === 0) {
        setTimepasses((timepasses = false));
        setMin(1);
        setSec(30);
    }

    useEffect(() => {
        if (timepasses) {
            let intervsl = setInterval(() => {
                setSec((sec) => (sec -= 1));
            }, select);
            return () => clearInterval(intervsl);
        }
        let num = document.getElementById("num");
        num.addEventListener("change", chNum);
    }, [timepasses, select]);

    function start() {
        setTimepasses((timepasses = true));
    }

    function stop() {
        setTimepasses((timepasses = false));
    }

    function reset() {
        setTimepasses((timepasses = false));
        setMin(1);
        setSec(30);
    }

    function chNum(e) {
        setSelect(parseFloat(e.target.value));
    }

    return (
        <>
            <div className="clock">
                <span>{`${min.toString().padStart(2, "0")}`}</span>
                <span className="twoDots">:</span>
                <span>{`${sec.toString().padStart(2, "0")}`}</span>
            </div>
            <div className="btnBox">
                <button className="btn" onClick={start}>
                    Start
                </button>
                <button className="btn" onClick={stop}>
                    Stop
                </button>
                <button className="btn" onClick={reset}>
                    Reset
                </button>
            </div>

            <span className="text">Вибрана швидкість {select} ms</span>
            <div>
                <select className="select" name="mls" id="num">
                    <option className="option" value="500">
                        500 ms
                    </option>
                    <option value="1000">1000 ms</option>
                    <option value="2000">2000 ms</option>
                    <option value="3000">3000 ms</option>
                    <option value="4000">4000 ms</option>
                </select>
            </div>
        </>
    );
};
export default Timer;
