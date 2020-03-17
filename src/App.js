import React from 'react';
import './App.css';
import Phone from './components/png/Combined Shape.png';
import logo from './components/png/AppCo.png';
import Text1 from './components/png/Text1.png';
import Text2 from './components/png/Text2.png';
import button from './components/png/button.png';
import Text3 from './components/png/Text3.png';
import Screen from './components/png/screen.png';
import screenImg from './components/png/screenImg.png';
import Text4 from './components/png/text4.png';
import block1 from './components/png/Rectangle34.png';
import logo1 from './components/png/Group13.png';
import logo2 from './components/png/Group14.png';
import logo3 from './components/png/Group15.png';


function App() {
    return (
        <div className="Container">
            <div className="Container-1">


                <div className="logo">
                    <img src={logo}/>
                </div>
                <div className="text1">
                    <img src={Text1} alt=""/>
                </div>
                <div className="text2">
                    <img src={Text2} alt=""/>
                </div>

                <div className="phoneBlock">
                    <div className="phone">
                        <img src={Phone}/>
                    </div>

                    <div className="screenImg">
                        <img src={screenImg} alt=""/>
                    </div>
                </div>

                <div className="screenEw"></div>
                <div className="screen">
                    <img src={Screen} alt=""/>
                </div>

                <button className="button">View Stats</button>
            </div>
            <div className="Container2">
                <div>
                    <img src={Text3} alt=""/>
                </div>
                <div className="Text4">
                    <img src={Text4} alt=""/>
                </div>
                <div className="group">
                    <div className="Text4">
                        <img src={block1} alt=""/>
                    </div>
                    <div className="Text4">
                        <img src={block1} alt=""/>
                    </div>
                    <div className="Text4">
                        <img src={block1} alt=""/>
                    </div>
                    <div className="logo1">
                        <img src={logo1} alt=""/>
                    </div>
                    <div className="logo2">
                        <img src={logo2} alt=""/>
                    </div>
                    <div className="logo3">
                        <img src={logo3} alt=""/>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default App;
