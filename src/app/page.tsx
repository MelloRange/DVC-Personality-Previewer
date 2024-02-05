'use client'

// import {LinkButtons} from './dvcComponents/linkButtons.js';
import {Common} from './spineComponents/common.js';
import { useEffect, useState } from 'react';
import auraList from './spineComponents/personality_dictionary_1.2.0.json' assert { type: 'json' };
import dragonList from './spineComponents/dragondict.json' assert { type: 'json' };
import Select from 'react-select'
import RadioButton from './components/RadioButton/RadioButton';

let auraOptions = Object.keys(auraList).sort().map((personality) => ({value: personality, label: personality}));
let dragonOptions = Object.keys(dragonList).map((dragon) => ({value: dragon, label: dragon}));
let common1 = new Common(1);
let common2 = new Common(1);
let common3 = new Common(1);

export default function Home() {
  const [dragon, setDragon] = useState<string>("abaddon");
  const [aura, setAura] = useState<string>("Apocalyptic");
  const [form, setForm] = useState<string>("01");
  const [formOptions, setFormOptions] = useState<any>([{value: "01", label: "01"}, {value: "02", label: "02"}]); 
  const [ratio, setRatio] = useState<number>(.5);
  const [showSlate, setShowSlate] = useState<boolean>(false);

  function onLoad()
  {
    common1.applyProperStyle();
    common1.preventContextMenu();

    common2.applyProperStyle();
    common2.preventContextMenu();

    common3.applyProperStyle();
    common3.preventContextMenu();
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
        common1.setDragonSpineOrImage("/res/" + dragGenders["m"] + "/" + dragGenders["m"], "canvas-dragon-1");
        //Common.setDragonSpineOrImage("/res/" + dragGenders["m"] + "/" + dragGenders["m"], "canvas-dragon-1");
        document.getElementById('dragonDisplay1')?.classList.remove("notShown");
      }
      else if(gender === "f")
      {
        common2.setDragonSpineOrImage("/res/" + dragGenders["f"] + "/" + dragGenders["f"], "canvas-dragon-2");
        //Common.setDragonSpineOrImage("/res/" + dragGenders["f"] + "/" + dragGenders["f"], "canvas-dragon-2");
        document.getElementById('dragonDisplay2')?.classList.remove("notShown");
      }
      else
      {
        common3.setDragonSpineOrImage("/res/" + dragGenders["n"] + "/" + dragGenders["n"], "canvas-dragon-3");
        //Common.setDragonSpineOrImage("/res/" + dragGenders["n"] + "/" + dragGenders["n"], "canvas-dragon-3");
        document.getElementById('dragonDisplay3')?.classList.remove("notShown");
      }
    }
  }

  function loadAuraDragon() {
    common1.setAuraFront("/res/aura/aura_front/aura_front", aura, "canvas-aura-front-1");
    common1.setAuraBack("/res/aura/aura_back/aura_back", aura, "canvas-aura-back-1");

    common2.setAuraFront("/res/aura/aura_front/aura_front", aura, "canvas-aura-front-2");
    common2.setAuraBack("/res/aura/aura_back/aura_back", aura, "canvas-aura-back-2");

    common3.setAuraFront("/res/aura/aura_front/aura_front", aura, "canvas-aura-front-3");
    common3.setAuraBack("/res/aura/aura_back/aura_back", aura, "canvas-aura-back-3");
  }

  function handleSlateVis() {
    if(showSlate)
    {
      document.getElementById('field1')?.classList.remove('hide');
      document.getElementById('field2')?.classList.remove('hide');
      document.getElementById('field3')?.classList.remove('hide');
    }
    else 
    {
      document.getElementById('field1')?.classList.add('hide');
      document.getElementById('field2')?.classList.add('hide');
      document.getElementById('field3')?.classList.add('hide');
    }

    setShowSlate(!showSlate);
  };


  useEffect(() => {
    onLoad();
    console.log("first load");
    window.addEventListener('resize', function(event) {
      common1.resizeSpine(this.innerWidth, this.innerHeight);
      //common2.resizeSpine(this.innerWidth, this.innerHeight);
      //common3.resizeSpine(this.innerWidth, this.innerHeight);
    }, true);
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

        <div className='grouped'>

          <div className='slateSelection bg-white'>

          </div>

          <div className='dragonCenter'>
            <div id='dragonDisplay1' className='fieldWrapper notShown'>
              <div className='dragonField flex-1'>
                <img id='field1' className='field' src="/imgs/field.png"  alt=""></img>
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
                <img id='field2' className='field' src="/imgs/field.png"  alt=""></img>
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
                <img id='field3' className='field' src="/imgs/field.png"  alt=""></img>
                <div className='dragonDot alignCenter'>
                  <canvas id="canvas-dragon-3" className="spineCanvas dragonCanvas"></canvas>
                  <canvas id="canvas-aura-back-3" className="spineCanvas auraBackCanvas"></canvas>
                  <canvas id="canvas-aura-front-3" className="spineCanvas auraFrontCanvas"></canvas>
                </div>
                <img className='gender' src="/imgs/gender_n.png"  alt=""></img>
              </div>
            </div>
          </div>

          <div className='selectionItems'>
            <div className='dragonSelect mb-32 text-white'>
              <div className='text-center'>Dragon Selection</div>
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
                maxMenuHeight={150}
                
                instanceId ="blob"
              />
            </div>
            <div className='personalitySelect mb-32'>
              <div className='text-center text-white'>Personality Selection</div>
              <Select options={auraOptions}
              onChange={(option) => {setAura(option?.value || "Apocalyptic");}}
              value={{value: aura, label: aura}}
              isSearchable
              isClearable
              captureMenuScroll
              maxMenuHeight={150}
              
              instanceId = "blob3"
              />
            </div>
            <div className='radio flex-col justify-evenly bg-white'>
              <div className='text-center'>Form Selection</div>
              {formOptions.map((form, index) => (
                <RadioButton 
                  key={index}
                  label={form.value}
                  changeFormFunction={() => setForm(form.value)}
                />
              ))  }
            </div>
          </div>
              
        </div>
        
        <div className="text-white flex align-center m-auto">
          <input
            type="checkbox"
            checked={showSlate}
            onChange={handleSlateVis}
          />
          <div className='m-2'>Remove Slate?</div>
        </div>

        <div className="dragonNicknameContainer">
          <img className="alignCenter" src="/imgs/name.png" alt=""></img>
          <div className="alignCenter dragonNickname textHoverImage textSizeMedium">{aura + " " + dragon.charAt(0).toUpperCase() + dragon.slice(1)}</div>
        </div>

      </div>
  )
}