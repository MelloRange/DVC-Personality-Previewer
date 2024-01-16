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
  const [form, setForm] = useState<string>("01");
  const [formOptions, setFormOptions] = useState<any>([{value: "01", label: "01"}, {value: "02", label: "02"}]); 
  function onLoad()
  {
    Common.applyProperStyle();
    Common.preventContextMenu();
  }

  function loadSpineDragon() {
    let dragGenders = dragonList[dragon][form]; //ignore this its just throwing a typing fit; maybe fix later

    document.getElementById('dragonDisplay1')?.classList.add("notShown");
    document.getElementById('dragonDisplay2')?.classList.add("notShown");
    document.getElementById('dragonDisplay3')?.classList.add("notShown");

    for(const gender of Object.keys(dragGenders))
    {
      if(gender === "m")
      {
        Common.setDragonSpineOrImage("/res/" + dragGenders["m"] + "/" + dragGenders["m"], "canvas-dragon-1");
        document.getElementById('dragonDisplay1')?.classList.remove("notShown");
      }
      else if(gender === "f")
      {
        Common.setDragonSpineOrImage("/res/" + dragGenders["f"] + "/" + dragGenders["f"], "canvas-dragon-2");
        document.getElementById('dragonDisplay2')?.classList.remove("notShown");
      }
      else
      {
        Common.setDragonSpineOrImage("/res/" + dragGenders["n"] + "/" + dragGenders["n"], "canvas-dragon-3");
        document.getElementById('dragonDisplay3')?.classList.remove("notShown");
      }
    }
  }

  function loadAuraDragon() {
    Common.setAuraFront("/res/aura/aura_front/aura_front", aura, "canvas-aura-front-1");
    Common.setAuraBack("/res/aura/aura_back/aura_back", aura, "canvas-aura-back-1");

    Common.setAuraFront("/res/aura/aura_front/aura_front", aura, "canvas-aura-front-2");
    Common.setAuraBack("/res/aura/aura_back/aura_back", aura, "canvas-aura-back-2");

    Common.setAuraFront("/res/aura/aura_front/aura_front", aura, "canvas-aura-front-3");
    Common.setAuraBack("/res/aura/aura_back/aura_back", aura, "canvas-aura-back-3");
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

  useEffect(() => {
    loadSpineDragon();
    console.log("form reload");
  },[form]);

  return (
      <div id= 'root' className='background flex-col'>
        <div className="title">
          <img src="/imgs/logo.png" alt="" />
        </div>

        <div className='dragonCenter flex'>
          <div id='dragonDisplay1' className='fieldWrapper notShown'>
            <div className='dragonField flex-1'>
              <img className='field' src="/imgs/field.png"  alt=""></img>
              <div className='dragonDot alignCenter'>
                <canvas id="canvas-dragon-1" className="spineCanvas dragonCanvas"></canvas>
                <canvas id="canvas-aura-back-1" className="spineCanvas auraBackCanvas"></canvas>
                <canvas id="canvas-aura-front-1" className="spineCanvas auraFrontCanvas"></canvas>
              </div>
              <img className='gender' src="/imgs/gender_m.png"  alt=""></img>
            </div>
          </div>

          <div id='dragonDisplay2' className='fieldWrapper notShown'>
            <div className='dragonField flex-1'>
              <img className='field' src="/imgs/field.png"  alt=""></img>
              <div className='dragonDot alignCenter'>
                <canvas id="canvas-dragon-2" className="spineCanvas dragonCanvas"></canvas>
                <canvas id="canvas-aura-back-2" className="spineCanvas auraBackCanvas"></canvas>
                <canvas id="canvas-aura-front-2" className="spineCanvas auraFrontCanvas"></canvas>
              </div>
              <img className='imgCenter gender' src="/imgs/gender_f.png"  alt=""></img>
            </div>
          </div>

          <div id='dragonDisplay3' className='fieldWrapper notShown'>
            <div className='dragonField flex-1'>
              <img className='field' src="/imgs/field.png"  alt=""></img>
              <div className='dragonDot alignCenter'>
                <canvas id="canvas-dragon-3" className="spineCanvas dragonCanvas"></canvas>
                <canvas id="canvas-aura-back-3" className="spineCanvas auraBackCanvas"></canvas>
                <canvas id="canvas-aura-front-3" className="spineCanvas auraFrontCanvas"></canvas>
              </div>
              <img className='gender' src="/imgs/gender_n.png"  alt=""></img>
            </div>
          </div>

        </div>

        <div className="dragonNicknameContainer">
          <img className="alignCenter" src="/imgs/name.png" alt=""></img>
          <div className="alignCenter dragonNickname textHoverImage textSizeMedium">{aura + " " + dragon.charAt(0).toUpperCase() + dragon.slice(1)}</div>
        </div>

        <Select options={auraOptions}
          onChange={(option) => {setAura(option?.value || "Apocalyptic");}}
          value={{value: aura, label: aura}}
          isSearchable
          isClearable
          captureMenuScroll
           />

        <Select options={dragonOptions}
          onChange={(option) => {
            setForm("01"); 
            setFormOptions(Object.keys(dragonList[option?.value || "abaddon"]).map((form) => ({value: form, label: form})));
            setDragon(option?.value || "abaddon"); 
          }}
          value={{value: dragon, label: dragon}}
          isSearchable
          isClearable
          captureMenuScroll
           />

        <Select options={formOptions}
          id="formSelect"
          onChange={(option) => {setForm(option?.value || "01");}}
          value={{value: form, label: form}}
           />
      </div>
  )
}