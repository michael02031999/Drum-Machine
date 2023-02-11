import React from 'react';
import DrumPad from './Drum-pad';
import Display from './Display';

export default function DrumMachine() {


    const [sound, setSound] = React.useState("");
    const [powerSwitch, setPower] = React.useState(true);
    const [bankSwitch, setBank] = React.useState(false);
    const [audioTag, setTag] = React.useState("")

    function returnSound(sound) {
        setSound(sound)
    }

    function currentState(onOrOff) {
        setPower(onOrOff)
    }

    function currentBankState(onOrOff) {
        setBank(onOrOff)
    }

    function returnAudioId(id) {
        setTag(id)
    }


  return (
    <div id = "drum-machine">
      <DrumPad 
      soundFunc = {returnSound} 
      switchState = {powerSwitch}
      bankState = {bankSwitch} 
      getId = {returnAudioId}/>
      <Display 
      sound = {sound} 
      handleSwitch = {currentState} 
      handleBankSwitch = {currentBankState}
      handleSound = {returnSound} 
      audioClip = {audioTag}
      />
    </div>
  );
}