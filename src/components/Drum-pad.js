import React from "react";
import bopSound from "../sounds/bop.wav"
import starsSound from "../sounds/stars.wav"
import guitarSound from "../sounds/spanish_drill.wav"
import electricSound from "../sounds/romantic_electric.wav"
import distortedSound from "../sounds/distorted_base.wav"
import trapSound from "../sounds/trap.mp3"
import attentionSound from "../sounds/attention.mp3"
import cardinalSound from "../sounds/cardinal.mp3"
import b_timeSound from "../sounds/b_time.mp3"

/* Import Bank Sounds */

import arcade from "../bankSounds/arcade.wav"
import bass from "../bankSounds/bass_pulse.wav"
import flute from "../bankSounds/flute.wav"
import intro from "../bankSounds/introTransition.wav"
import laugh from "../bankSounds/laugh.wav"
import lightrain from "../bankSounds/light_rain.wav"
import lion from "../bankSounds/lion.wav"
import trumpet from "../bankSounds/trumpet.wav"
import orchestra from "../bankSounds/orchestra.wav";

export default function DrumPad(props) {

    function pauseAllBank() {
        arcadeSound.pause()
        bassSound.pause()
        fluteSound.pause()
        introSound.pause()
        laughSound.pause()
        lightrainSound.pause()
        lionSound.pause()
        trumpetSound.pause()
        orchestraSound.pause()
    }

    function pauseAllExceptArcade() {
        bassSound.pause()
        fluteSound.pause()
        introSound.pause()
        laughSound.pause()
        lightrainSound.pause()
        lionSound.pause()
        trumpetSound.pause()
        orchestraSound.pause();
        pauseAll()
        
    }

    function pauseAllExceptBass() {
        arcadeSound.pause()
        fluteSound.pause()
        introSound.pause()
        laughSound.pause()
        lightrainSound.pause()
        lionSound.pause()
        trumpetSound.pause()
        orchestraSound.pause()
        pauseAll()
    }

    function pauseAllExceptFlute() {
        arcadeSound.pause()
        bassSound.pause()
        introSound.pause()
        laughSound.pause()
        lightrainSound.pause()  
        lionSound.pause()
        trumpetSound.pause()
        orchestraSound.pause()  
        pauseAll()  
    }

    function pauseAllExceptIntro() {
        arcadeSound.pause()
        bassSound.pause()
        fluteSound.pause()
        laughSound.pause()
        lightrainSound.pause()
        lionSound.pause()
        trumpetSound.pause()
        orchestraSound.pause()
        pauseAll()
    }

    function pauseAllExceptLaugh() {
        arcadeSound.pause()
        bassSound.pause()
        fluteSound.pause()
        introSound.pause()
        lightrainSound.pause()
        lionSound.pause()
        trumpetSound.pause()
        orchestraSound.pause()
        pauseAll()
    }

    function pauseAllExceptLightrain() {
        arcadeSound.pause()
        bassSound.pause()
        fluteSound.pause()
        introSound.pause()
        laughSound.pause()
        lionSound.pause()
        trumpetSound.pause()
        orchestraSound.pause()
        pauseAll()
    }
    
    function pauseAllExceptLion() {
        arcadeSound.pause()
        bassSound.pause()
        fluteSound.pause()
        introSound.pause()
        laughSound.pause()
        lightrainSound.pause()
        trumpetSound.pause()
        orchestraSound.pause()
        pauseAll()
    }

    function pauseAllExceptTrumpet() {
        arcadeSound.pause()
        bassSound.pause()
        fluteSound.pause()
        introSound.pause()
        laughSound.pause()
        lightrainSound.pause()
        lionSound.pause()
        orchestraSound.pause()
        pauseAll()
    }

    function pauseAllExceptOrchestra() {
        arcadeSound.pause()
        bassSound.pause()
        fluteSound.pause()
        introSound.pause()
        laughSound.pause()
        lightrainSound.pause()
        lionSound.pause()
        trumpetSound.pause()
        pauseAll()
    }
   
    //BankSounds

    const [arcadeSound, setArcadeSound] = React.useState(new Audio(arcade))
    const [bassSound, setBassSound] = React.useState(new Audio(bass))
    const [fluteSound, setFluteSound] = React.useState(new Audio(flute))
    const [introSound, setIntroSound] = React.useState(new Audio(intro))
    const [laughSound, setLaughSound] = React.useState(new Audio(laugh))
    const [lightrainSound, setLightrainSound] = React.useState(new Audio(lightrain))
    const [lionSound, setLionSound] = React.useState(new Audio(lion))
    const [trumpetSound, setTrumpetSound] = React.useState(new Audio(trumpet))
    const [orchestraSound, setOrchestraSound] = React.useState(new Audio(orchestra))

    //let bop = new Audio(bopSound)
    const [bop, setBop] = React.useState(new Audio(bopSound))
    //let stars = new Audio(starsSound)
    const [stars, setStars] = React.useState(new Audio(starsSound))
    const [guitar, setGuitar] = React.useState(new Audio(guitarSound))
    //let guitar = new Audio(guitarSound)
    const [electric, setElectric] = React.useState(new Audio(electricSound))
    //let electric = new Audio(electricSound)
    const [distorted, setDistorted] = React.useState(new Audio(distortedSound))
    //let distorted = new Audio(distortedSound)
    const [trap, setTrap] = React.useState(new Audio(trapSound))
    //let trap = new Audio(trapSound)
    const [attention, setAttention] = React.useState(new Audio(attentionSound))
    //let attention = new Audio(attentionSound)
    const [cardinal, setCardinal] = React.useState(new Audio(cardinalSound))
    //let cardinal = new Audio(cardinalSound)
    const [b_time, setB_time] = React.useState(new Audio(b_timeSound))
    //let b_time = new Audio(b_timeSound)

    const [bankState, setBankState] = React.useState(props.bankState);

        //setBankState(props.bankState)
        React.useEffect(() => { 
            setBankState(props.bankState)
        }, [props.bankState])
        

        console.log(bankState);

        function handleSound(key) {

            console.log(props.bankState)
          
            if (Boolean(props.switchState) === true) {
                if (key === "C") {
                    if (props.bankState === false) {
                        document.getElementById("b_time").classList.add("keypressed")

                        setTimeout(() => {
                            document.getElementById("b_time").classList.remove("keypressed");
                          }, 100);

                        b_time.currentTime = 0;
                        b_time.play()
                        props.getId(b_time);
                        pauseAllExceptB_time();
                    }
                    else if (props.bankState === true) {

                        document.getElementById("b_time").classList.add("keypressed");

                        setTimeout(() => {
                            document.getElementById("b_time").classList.remove("keypressed");
                        }, 100);

                        arcadeSound.currentTime = 0;
                        arcadeSound.play()
                        props.getId(arcadeSound);
                        pauseAllExceptArcade();
                    }   
                }
    
                else if (key === "X") {
                    if (props.bankState === false) {
                        document.getElementById("cardinal").classList.add("keypressed")

                        setTimeout(() => {
                            document.getElementById("cardinal").classList.remove("keypressed");
                            }, 100);

                        cardinal.currentTime = 0;
                        cardinal.play()
                        props.getId(cardinal);
                        pauseAllExceptCardinal();
                    }
                    else {

                        document.getElementById("cardinal").classList.add("keypressed")

                        setTimeout(() => {
                            document.getElementById("cardinal").classList.remove("keypressed");
                            }, 100);
                        bassSound.currentTime = 0;
                        bassSound.play()
                        props.getId(bassSound);
                        pauseAllExceptBass();
                    }
                }
            
    
                else if (key === "Z") {

                    if (props.bankState === false) {
                        document.getElementById("attention").classList.add("keypressed")

                        setTimeout(() => {

                            document.getElementById("attention").classList.remove("keypressed");
                        }, 100);
                        attention.currentTime = 0;
                        attention.play()
                        props.getId(attention);
                        pauseAllExceptAttention()
                    }
                    else {

                        document.getElementById("attention").classList.add("keypressed")

                        setTimeout(() => {

                            document.getElementById("attention").classList.remove("keypressed");
                        }, 100);
                        fluteSound.currentTime = 0;
                        fluteSound.play()
                        props.getId(fluteSound);
                        pauseAllExceptFlute()
                    } 
                }
                
                else if (key ==="D") {
                    if(props.bankState === false) {

                        document.getElementById("trap").classList.add("keypressed")

                        setTimeout(() => {

                            document.getElementById("trap").classList.remove("keypressed");
                        }, 100);
                        

                        trap.currentTime = 0;
                        trap.play()
                        props.getId(trap);
                        pauseAllExceptTrap()
                    }
                    else {
                        document.getElementById("trap").classList.add("keypressed")

                        setTimeout(() => {

                            document.getElementById("trap").classList.remove("keypressed");
                        }, 100);
                        introSound.currentTime = 0;
                        introSound.play()
                        props.getId(introSound);
                        pauseAllExceptIntro()
                    }
                    
                    
                }
    
                else if (key === "S") {
                    
                    if (props.bankState === false) {
                        document.getElementById("distorted").classList.add("keypressed")

                        setTimeout(() => {

                            document.getElementById("distorted").classList.remove("keypressed");
                        }, 100);
                        distorted.currentTime = 0;
                        distorted.play()
                        props.getId(distorted);
                        pauseAllExceptDistorted()
                    }
                    else {
                        document.getElementById("distorted").classList.add("keypressed")

                        setTimeout(() => {

                            document.getElementById("distorted").classList.remove("keypressed");
                        }, 100);
                        laughSound.currentTime = 0;
                        laughSound.play()
                        props.getId(laughSound);
                        pauseAllExceptLaugh()
                    }
                }
    
                else if (key === "Q") {  
                    console.log("Q pressed");

                    if (props.bankState === false) {
                        document.getElementById("bop").classList.add("keypressed")

                        setTimeout(() => {

                            document.getElementById("bop").classList.remove("keypressed");
                        }, 100);
                        bop.currentTime = 0; 
                        bop.play()
                        props.getId(bop);
                        pauseAllExceptBop()
                    }
                    else {
                        document.getElementById("bop").classList.add("keypressed")

                        setTimeout(() => {

                            document.getElementById("bop").classList.remove("keypressed");
                        }, 100);
                        lightrainSound.currentTime = 0;
                        lightrainSound.play()
                        props.getId(lightrainSound);
                        pauseAllExceptLightrain()
                        
                    }
                }
    
                else if (key === "W") {

                    if(props.bankState === false) {
                        document.getElementById("stars").classList.add("keypressed")

                        setTimeout(() => {

                            document.getElementById("stars").classList.remove("keypressed");
                        }, 100);
                        stars.currentTime = 0;
                        stars.play()
                        props.getId(stars);
                        pauseAllExceptStars()
                    }
                    else {

                        document.getElementById("stars").classList.add("keypressed")

                        setTimeout(() => {

                            document.getElementById("stars").classList.remove("keypressed");
                        }, 100);
                        lionSound.currentTime = 0;
                        
                        var playPromise = lionSound.play();
 
                        if (playPromise !== undefined) {
                            playPromise.then(_ => {
                            })
                            .catch(error => {
                              console.log(error);
                              lionSound.play();
                              pauseAllExceptLion();
                            });
                          }
                    }
                }
                else if (key === "E") {
                    
                    if (props.bankState === false) {
                        document.getElementById("guitar").classList.add("keypressed")

                        setTimeout(() => {

                            document.getElementById("guitar").classList.remove("keypressed");
                        }, 100);
                        guitar.currentTime = 0; 
                        guitar.play() 
                        props.getId(guitar);
                        pauseAllExceptGuitar()
                    }
                    else {
                        document.getElementById("guitar").classList.add("keypressed")

                        setTimeout(() => {

                            document.getElementById("guitar").classList.remove("keypressed");
                        }, 100);
                        trumpetSound.currentTime = 0;
                        trumpetSound.play()
                        props.getId(trumpetSound);
                        pauseAllExceptTrumpet()
                    }
                    
                }
    
                else if (key === "A") {
                    if (props.bankState === false) {
                        document.getElementById("electric").classList.add("keypressed")

                        setTimeout(() => {

                            document.getElementById("electric").classList.remove("keypressed");
                        }, 100);
                        electric.currentTime = 0; 
                        electric.play() 
                        props.getId(electric);
                        pauseAllExceptElectric()
                    }
                    else {
                        document.getElementById("electric").classList.add("keypressed")

                        setTimeout(() => {

                            document.getElementById("electric").classList.remove("keypressed");
                        }, 100);
                        orchestraSound.currentTime = 0; 
                        orchestraSound.play()
                        props.getId(orchestra);
                        pauseAllExceptOrchestra();
                    }
                }
            }
            
        }

        function handleKeyUp(event) {

            //console.log(bankState);

            

            if (event.key === "c") {
                if (props.bankState === false) {

                    document.getElementById("b_time").style.backgroundColor = "orange"

                    window.setTimeout(() => {document.getElementById("b_time").style.backgroundColor = "gray"}, 100)
                    
                    b_time.currentTime = 0;
                    b_time.play()
                    pauseAllExceptB_time()
                    props.soundFunc("Ba_time")
                    props.getId(b_time);
                }
                else {

                    document.getElementById("arcade").style.backgroundColor = "orange"

                    window.setTimeout(() => {document.getElementById("arcade").style.backgroundColor = "gray"}, 100)
                    arcadeSound.currentTime = 0;
                    arcadeSound.play()
                    pauseAllExceptArcade()
                    props.soundFunc("Arcade")
                    props.getId(arcadeSound);
                }
               
            }

            else if (event.key === "x") {

                if (props.bankState === false) {

                    document.getElementById("cardinal").style.backgroundColor = "orange"

                    window.setTimeout(() => {document.getElementById("cardinal").style.backgroundColor = "gray"}, 100)
                    cardinal.currentTime = 0;
                    cardinal.play()
                    pauseAllExceptCardinal()
                    props.soundFunc("Cardinal")
                    props.getId(cardinal);
                }
                else {
                    
                    document.getElementById("bass").style.backgroundColor = "orange"

                    window.setTimeout(() => {document.getElementById("bass").style.backgroundColor = "gray"}, 100)
                    bassSound.currentTime = 0;
                    bassSound.play()
                    pauseAllExceptBass()
                    props.soundFunc("Bass")
                    props.getId(bassSound);
                }
            }

            else if (event.key === "z") {
                if (props.bankState === false) {

                    document.getElementById("attention").style.backgroundColor = "orange"

                    window.setTimeout(() => {document.getElementById("attention").style.backgroundColor = "gray"}, 100)
                    attention.currentTime = 0;
                    attention.play()
                    pauseAllExceptAttention()
                    props.soundFunc("Attention")
                    props.getId(attention);
                }
                else {

                    document.getElementById("flute").style.backgroundColor = "orange"

                    window.setTimeout(() => {document.getElementById("flute").style.backgroundColor = "gray"}, 100)
                    fluteSound.currentTime = 0;
                    fluteSound.play()
                    pauseAllExceptFlute()
                    props.soundFunc("Flute")
                    props.getId(fluteSound);
                }
            }

            else if (event.key === "d") {
                if (props.bankState === false) {

                    document.getElementById("trap").style.backgroundColor = "orange"

                    window.setTimeout(() => {document.getElementById("trap").style.backgroundColor = "gray"}, 100)
                    trap.currentTime = 0;
                    trap.play()
                    pauseAllExceptTrap()
                    props.soundFunc("Trap")
                    props.getId(trap);
                }
                else {

                    document.getElementById("intro").style.backgroundColor = "orange"

                    window.setTimeout(() => {document.getElementById("intro").style.backgroundColor = "gray"}, 100)
                    introSound.currentTime = 0;
                    introSound.play()
                    pauseAllExceptIntro()
                    props.soundFunc("Intro")
                    props.getId(introSound);
                }
            }

            else if (event.key === "s") {
                if (props.bankState === false) {

                    document.getElementById("distorted").style.backgroundColor = "orange"

                    window.setTimeout(() => {document.getElementById("distorted").style.backgroundColor = "gray"}, 100)
                    distorted.currentTime = 0;
                    distorted.play()
                    pauseAllExceptDistorted()
                    props.soundFunc("Distorted")
                    props.getId(distorted);
                }
                else {

                    document.getElementById("laugh").style.backgroundColor = "orange"

                    window.setTimeout(() => {document.getElementById("laugh").style.backgroundColor = "gray"}, 100)
                    laughSound.currentTime = 0;
                    laughSound.play()
                    pauseAllExceptLaugh()
                    props.soundFunc("Laugh")
                    props.getId(laughSound);
                }
            }

            else if (event.key === "a") {
                if (props.bankState === false) {

                    document.getElementById("electric").style.backgroundColor = "orange"

                    window.setTimeout(() => {document.getElementById("electric").style.backgroundColor = "gray"}, 100)
                    electric.currentTime = 0; 
                    electric.play() 
                    pauseAllExceptElectric()
                    props.soundFunc("Electric")
                    props.getId(electric);
                }
                else {

                    document.getElementById("orchestra").style.backgroundColor = "orange"

                    window.setTimeout(() => {document.getElementById("orchestra").style.backgroundColor = "gray"}, 100)
                    orchestraSound.currentTime = 0; 
                    orchestraSound.play()
                    props.getId(orchestra);
                    props.soundFunc("Orchestra")
                    pauseAllExceptOrchestra();
                }
            }

            else if (event.key === "q") {

                console.log(props.bankState);
                if (props.bankState === true) {

                    document.getElementById("lightrain").style.backgroundColor = "orange"

                    window.setTimeout(() => {document.getElementById("lightrain").style.backgroundColor = "gray"}, 100)
                    lightrainSound.currentTime = 0;
                    lightrainSound.play()
                    pauseAllExceptLightrain()
                    props.soundFunc("Light_Rain")
                    props.getId(lightrainSound);
                    
                }
                else {

                    document.getElementById("bop").style.backgroundColor = "orange"

                    window.setTimeout(() => {document.getElementById("bop").style.backgroundColor = "gray"}, 100)
                    bop.currentTime = 0; 
                    bop.play()
                    pauseAllExceptBop()
                    props.soundFunc("Bop")
                    props.getId(bop);
                    
                }
                
                
            }
            else if (event.key === "w") {
                if (props.bankState === false) {

                    document.getElementById("stars").style.backgroundColor = "orange"

                    window.setTimeout(() => {document.getElementById("stars").style.backgroundColor = "gray"}, 100)
                    stars.currentTime = 0; 
                    stars.play() 
                    pauseAllExceptStars()
                    props.soundFunc("Stars")
                    props.getId(stars);
                }
                else {

                    document.getElementById("lion").style.backgroundColor = "orange"

                    window.setTimeout(() => {document.getElementById("lion").style.backgroundColor = "gray"}, 100)
                    lionSound.currentTime = 0;
                    lionSound.play();
                    pauseAllExceptLion();
                    props.soundFunc("Lion")
                    props.getId(lionSound);
                }
                
            }
            else if (event.key === "e") {
                if (props.bankState === false) {

                    document.getElementById("guitar").style.backgroundColor = "orange"

                    window.setTimeout(() => {document.getElementById("guitar").style.backgroundColor = "gray"}, 100)
                    guitar.currentTime = 0; 
                    guitar.play() 
                    pauseAllExceptGuitar()
                    props.soundFunc("Guitar")
                    props.getId(guitar);
                }
                else {

                    document.getElementById("trumpet").style.backgroundColor = "orange"

                    window.setTimeout(() => {document.getElementById("trumpet").style.backgroundColor = "gray"}, 100)
                    
                    trumpetSound.currentTime = 0;
                    trumpetSound.play()
                    pauseAllExceptTrumpet()
                    props.soundFunc("Trumpet")
                    props.getId(trumpetSound);
                }
            }
        } 

        const [eventListenerAdded, setEventListenerAdded] = React.useState(true)

        const handleKeyUpWithState = (event) => handleKeyUp(event, props.bankState)

       React.useEffect(() => {

            console.log(bankState);
            
            if (!eventListenerAdded) {
                
                window.addEventListener("keyup", handleKeyUpWithState)
                setEventListenerAdded(true)
            }

            return () => {

                
                window.removeEventListener("keyup", handleKeyUpWithState);
                pauseAll()
                pauseAllBank()
                setEventListenerAdded(false)
            }

        
        }, [props.switchState, props.bankState])

        if (props.switchState === true) {
             
        }

        React.useEffect(() => {

            console.log(props.switchState);

            console.log(props.bankState);

            if (props.switchState === true) {

                if (bankState == true) {
                    window.removeEventListener("keyup", handleKeyUpWithState);
                    window.addEventListener("keyup", handleKeyUpWithState)
                }
                else if (bankState == false) {
                    window.removeEventListener("keyup", handleKeyUpWithState);
                    window.addEventListener("keyup", handleKeyUpWithState)
                }
            }

            else if (props.switchState === false) {
                window.removeEventListener("keyup", handleKeyUpWithState);
                pauseAll()
                pauseAllBank()
            }

        }, [props.bankState, props.switchState]) 

       
 
  return (
    <div id="drum-pad">
        <button id="bop" className="drum-pad" onClick={() => {
            handleSound("Q")
           
            if (props.bankState === false) {
                props.soundFunc("Bop")
            }
            else {
                props.soundFunc("Light Rain")
            }
            
        }}>Q</button>
        <button id="stars" className="drum-pad" onClick={() => {
            handleSound("W")
            pauseAllExceptStars()
            if (props.bankState === false) {
                props.soundFunc("Stars")
            }
            else {
                props.soundFunc("Lion")
            }
        }}>W</button>
        <button id="guitar" className="drum-pad" onClick={() => {
            pauseAllExceptGuitar()
            handleSound("E")
            
            if (props.bankState === false) {
                props.soundFunc("Guitar")
            }
            else {
                props.soundFunc("Trumpet")
            }
            
        }}>E</button>
        <button id="electric" className="drum-pad" onClick={() => {
            pauseAllExceptElectric()
            handleSound("A")
            if (props.bankState === false) {
                props.soundFunc("Electric")
            }
            else {
                props.soundFunc("Whistle")
            }
         
        }}>A</button>
        <button id="distorted" className="drum-pad" onClick={() => {
            pauseAllExceptDistorted()
            handleSound("S")

            if (props.bankState === false) {
                props.soundFunc("Distorted")
            }
            else {
                props.soundFunc("Laughter")
            }
        }}>S</button>
        <button id="trap" className="drum-pad" onClick={() => {
            pauseAllExceptTrap()
            handleSound("D")
            if (props.bankState === false) {
                props.soundFunc("Trap")
            }
            else {
                props.soundFunc("Intro")
            }
        }}>D</button>
        <button id="attention" className="drum-pad" onClick={() => {
            pauseAllExceptAttention()
            handleSound("Z")
            
            if (props.bankState === false) {
                props.soundFunc("Attention")
            }
            else {
                props.soundFunc("Flute")
            }
        }}>Z</button>
        <button id="cardinal" className="drum-pad" onClick={() => {
            pauseAllExceptCardinal()
            handleSound("X")

            if (props.bankState === false) {
                props.soundFunc("Cardinal")
            }
            else {
                props.soundFunc("Bass")
            }
        }}>X</button>
        <button id="b_time" className="drum-pad" onClick={() => {
            pauseAllExceptB_time()
            handleSound("C")
    
            if (props.bankState === false) {
                props.soundFunc("B_time")
            }
            else {
                props.soundFunc("Arcade")
            }

        }}>C</button> 
    </div>
  );
































  function pauseAllExceptGuitar() {
    bop.pause();
    stars.pause();
    electric.pause();
    distorted.pause();
    trap.pause();
    attention.pause();
    cardinal.pause();
    b_time.pause();
    pauseAllBank();
}

function pauseAllExceptBop() {
    guitar.pause();
    stars.pause();
    electric.pause();
    distorted.pause();
    trap.pause();
    attention.pause();
    cardinal.pause();
    b_time.pause();
    pauseAllBank();
}

function pauseAllExceptStars() {
    guitar.pause();
    bop.pause();
    electric.pause();
    distorted.pause();
    trap.pause();
    attention.pause();
    cardinal.pause();
    b_time.pause();
    pauseAllBank();
}

function pauseAllExceptElectric() {
    guitar.pause();
    bop.pause();
    stars.pause();
    distorted.pause();
    trap.pause();
    attention.pause();
    cardinal.pause();
    b_time.pause();
    pauseAllBank();
}   

function pauseAllExceptDistorted() {
    guitar.pause();
    bop.pause();
    stars.pause();
    electric.pause();
    trap.pause();
    attention.pause();
    cardinal.pause();
    b_time.pause();
    pauseAllBank();
}   

function pauseAllExceptTrap() {
    guitar.pause();
    bop.pause();
    stars.pause();
    electric.pause();
    distorted.pause();
    attention.pause();
    cardinal.pause();
    b_time.pause();
    pauseAllBank();
}

function pauseAllExceptAttention() {
    guitar.pause();
    bop.pause();
    stars.pause();
    electric.pause();
    distorted.pause();
    trap.pause();
    cardinal.pause();
    b_time.pause();
    pauseAllBank();

}

function pauseAllExceptCardinal() {
    guitar.pause();
    bop.pause();
    stars.pause();
    electric.pause();
    distorted.pause();
    trap.pause();
    attention.pause();
    b_time.pause();
    pauseAllBank(); 
}

function pauseAllExceptB_time() {
    guitar.pause();
    bop.pause();
    stars.pause();
    electric.pause();
    distorted.pause();
    trap.pause();
    attention.pause();
    cardinal.pause();
    pauseAllBank();
}

function pauseAll() {
    guitar.pause();
    bop.pause();
    stars.pause();
    electric.pause();
    distorted.pause();
    trap.pause();
    attention.pause();
    cardinal.pause();
    b_time.pause();

}
}


