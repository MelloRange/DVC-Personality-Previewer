'use client'

// import {LinkButtons} from './dvcComponents/linkButtons.js';
import {Common} from './spineComponents/common.js';
import { useEffect, useState } from 'react';

export default function Home() {
  const [dragon, setDragon] = useState("/res/abaddon_01_f_adult_p/abaddon_01_f_adult_p");
  const [aura, setAura] = useState("Apocalyptic");

  function onLoad()
  {
    Common.applyProperStyle();
    Common.preventContextMenu();
  }

  function loadSpineDragon() {
    Common.setDragonSpineOrImage(dragon);
  }

  function loadAuraDragon() {
    Common.setAuraFront("/res/aura/aura_front/aura_front", aura);
    Common.setAuraBack("/res/aura/aura_back/aura_back", aura);
  }

  useEffect(() => {
    // call api or anything
    onLoad();
    loadSpineDragon();
    loadAuraDragon();
    console.log("loaded");
  },[]);

  return (
      <div id= 'root' className='background flex-col'>
        <div className="title">
          <img className='' src="https://res.dvc.land/dvc-web/res/logo.png" alt="" />
        </div>
        <div className='dragonCenter'> {/* this pads from top of page */}
          <div className='dragonField'>
            <img className='' src="https://res.dvc.land/dvc-web/res/table.png"  alt=""></img>
            <div className='dragonDot alignCenter'>
              <canvas id="canvas-dragon" className="spineCanvas dragonCanvas"></canvas>
              <canvas id="canvas-aura-back" className="spineCanvas auraBackCanvas"></canvas>
              <canvas id="canvas-aura-front" className="spineCanvas auraFrontCanvas"></canvas>
            </div>
            <div className="dragonNicknameContainer">
						  <img className="alignCenter" src="https://res.dvc.land/dvc-web/res/name.png" alt=""></img>
						  <div className="alignCenter dragonNickname textHoverImage textSizeMedium">{dragon}</div>
					  </div>
          </div>
        </div>
      </div>
  )
}