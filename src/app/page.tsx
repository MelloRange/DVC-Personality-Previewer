'use client'

// import {LinkButtons} from './dvcComponents/linkButtons.js';
import {Common} from './spineComponents/common.js';
import { useEffect, useState } from 'react';
import auraList from './spineComponents/personality_dictionary_1.2.0.json' assert { type: 'json' };
import dragonList from './spineComponents/dragondict.json' assert { type: 'json' };
import Select from 'react-select'

let auraOptions = Object.keys(auraList).sort().map((personality) => ({value: personality, label: personality}));
let dragonOptions = Object.keys(dragonList).map((dragon) => ({value: dragon, label: dragon}));


export default function Home() {
  const [dragon, setDragon] = useState<string>("abaddon");
  const [aura, setAura] = useState<string>("Apocalyptic");

  function onLoad()
  {
    Common.applyProperStyle();
    Common.preventContextMenu();
  }

  function loadSpineDragon() {
    Common.setDragonSpineOrImage("/res/" + dragonList[dragon]["01"]["f"] + "/" + dragonList[dragon]["01"]["f"]);
  }

  function loadAuraDragon() {
    Common.setAuraFront("/res/aura/aura_front/aura_front", aura);
    Common.setAuraBack("/res/aura/aura_back/aura_back", aura);
  }

  useEffect(() => {
    onLoad();
    loadSpineDragon();
    loadAuraDragon();
    console.log("first load");
  },[]);

  useEffect(() => {
    loadAuraDragon();
    console.log("aura reload");
  },[aura]);

  useEffect(() => {
    loadSpineDragon();
    console.log("dragon reload");
  },[dragon]);

  return (
      <div id= 'root' className='background flex-col'>
        <div className="title">
          <img className='' src="https://res.dvc.land/dvc-web/res/logo.png" alt="" />
        </div>
        <div className='dragonCenter flex'> {/* this pads from top of page */}
          <div className='dragonField'>
            <img className='' src="https://res.dvc.land/dvc-web/res/table.png"  alt=""></img>
            <div className='dragonDot alignCenter'>
              <canvas id="canvas-dragon" className="spineCanvas dragonCanvas"></canvas>
              <canvas id="canvas-aura-back" className="spineCanvas auraBackCanvas"></canvas>
              <canvas id="canvas-aura-front" className="spineCanvas auraFrontCanvas"></canvas>
            </div>
            <div className="dragonNicknameContainer">
						  <img className="alignCenter" src="https://res.dvc.land/dvc-web/res/name.png" alt=""></img>
						  <div className="alignCenter dragonNickname textHoverImage textSizeMedium">{aura + " " + dragon.charAt(0).toUpperCase() + dragon.slice(1)}</div>
					  </div>
          </div>

        </div>

        <Select options={auraOptions}
          className="scoot"
          onChange={(option: Option | null, actionMeta: ActionMeta<Option>) => {setAura(option.value);}}
          defaultValue={{value: "Apocalyptic", label: "Apocalyptic"}}
          isSearchable
          isClearable
          
           />

        <Select options={dragonOptions}
          className="scoot"
          onChange={(option: Option | null, actionMeta: ActionMeta<Option>) => {setDragon(option.value);}}
          defaultValue={{value: "abaddon", label: "abaddon"}}
          isSearchable
          isClearable
          
           />
      </div>
  )
}