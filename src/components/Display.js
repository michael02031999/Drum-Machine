// eslint-disable-next-line
import React from "react";


export default function Display(props) {

    const [switchState, setSwitch] = React.useState("true");

    const [bankSwitchState, setBankSwitch] = React.useState(false);

    const [volume, setVolume] = React.useState(50);

    const [isAlertVisible, setIsAlertVisible] = React.useState(false);

    const [isSoundVisible, setIsSoundVisible] = React.useState(false);

    console.log(props.sound);

    React.useEffect(() => {

        if (props.sound === "") {
            setIsSoundVisible(false)
        } else {
            setIsSoundVisible(true)
        }

    }, [props.sound])

    function flipSwitch() {
        setSwitch(!switchState)
    }

    function flipBankSwitch() {
        setBankSwitch(!bankSwitchState)
    }

    React.useEffect(() => {
        props.handleSwitch(switchState)
    }, [switchState])

    React.useEffect(() => {
        props.handleBankSwitch(bankSwitchState)
    }, [bankSwitchState])

    if (switchState === false) {
        props.handleSound("")
    } 

    console.log("Break")
    console.log(props.audioClip)

    function changeSlider() {

        console.log(props.audioClip)

        props.audioClip.volume = document.getElementById("volume").value/100;

        setVolume(document.getElementById("volume").value)

        setIsAlertVisible(true);
        setIsSoundVisible(false);

        setTimeout(() => {
            setIsAlertVisible(false);
            
        }, 1000)
    }

    let properSound = function() {
        if (Boolean(switchState) === true) {

            if (isSoundVisible === true && isAlertVisible === false) {
                return (
                    <p style={{fontSize: "12px"}}>{props.sound}</p>
                )

            } else if (isSoundVisible === false && isAlertVisible === true) {
                return (
                    <p style={{fontSize: "12px"}}>Volume: {volume}</p>
                )
            }
        } 
    } 

    return (
        <div id="display_container">
            <div id="power">
                <p id="switchTitle">Power</p>
                <div id="switch" onClick = {flipSwitch}>
                    <div id="blueInnerSwitch" className= {switchState ? "on" : "off"} >
                    </div>
                </div>
            </div>
            <div id="display">

            {properSound()}

            </div>
            <div id="volumeDiv">
                <input type="range" min="0" max="100" step="1" onChange = {changeSlider} defaultValue={volume} id="volume" />
            </div>

            <div id="bank">
                <p id="bankSwitchTitle">Bank</p>
                <div id="switch" onClick = {flipBankSwitch}>
                    <div id="blueInnerSwitch" className= {bankSwitchState ? "on" : "off"} >
                    </div>
                </div> 
            </div>
        </div>
    );
}
