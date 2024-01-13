'use client'

// import {LinkButtons} from './dvcComponents/linkButtons.js';
import {Common} from './spineComponents/common.js';
import { useEffect, useState } from 'react';

export default function Home() {
  function onLoad()
  {
    Common.applyProperStyle();
    Common.preventContextMenu();
  }

  function loadSpineDragon() {
    Common.setDragonSpineOrImage("../../res/dianu_01_f_adult_pb/dianu_01_f_adult_pb");
  }

  function loadAuraDragon() {
    Common.setAuraFront("/aura_front");
    Common.setAuraBack("/aura_back");
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
        <div>
          <img className='alignCenter' src="https://res.dvc.land/dvc-web/res/logo.png" alt="" />
        </div>
        <div className='dragonCenter'>
          <div className='dragonField'>
            <img className='alignCenter' src="https://res.dvc.land/dvc-web/res/table.png"  alt=""></img>
          </div>
          <div className='drgaonDot alignCenter'>
            <canvas id="canvas-dragon" className="spineCanvas dragonCanvas h-1/4 w-1/4"></canvas>
            <canvas id="canvas-aura-back" className="spineCanvas auraBackCanvas"></canvas>
            <canvas id="canvas-aura-front" className="spineCanvas auraFrontCanvas"></canvas>
          </div>
        </div>
      </div>
  )
}