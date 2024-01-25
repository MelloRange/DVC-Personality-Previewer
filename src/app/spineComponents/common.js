import {spine} from './spine-webgl'
import { SpineObject } from './spineObject'
import auraList from './personality_dictionary_1.2.0.json' assert { type: 'json' };

export class Common {
    constructor(spineScaler){
        this.spineScaler = spineScaler;
        this.dragon = null;
        this.auraFront = null;
        this.auraBack = null;
        this.dragonCanvas = null;
        this.auraFrontCanvas = null;
        this.auraBackCanvas = null;
    }

    resizeSpine(newSpine){
        this.spineScaler = newSpine;
        if(this.dragon !== null){
            this.dragon.setScaler(this.dragonCanvas, this.spineScaler);
        }
        if(this.auraFront !== null){
            this.auraFront.setScaler(this.auraFrontCanvas, this.spineScaler);
        }
        if(this.auraBack !== null){
            this.auraBack.setScaler(this.auraBackCanvas, this.spineScaler);
        }
    }

    applyProperStyle() {
        var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
        if (isMobile) { 
            document.getElementById("root").style.minWidth = '280px';
        }
        else {
            document.getElementById("root").style.minWidth = '800px';
        }
    }
    
    preventContextMenu() {
        window.addEventListener("contextmenu", e => e.preventDefault());
    }

    setDragonIllustGrayScale(res_url) {
        if (res_url.includes("rip_") || res_url.includes("empty.png") || res_url.includes("deadegg_") || res_url.includes("undead")) {
            document.getElementsByClassName("drgaonIllust")[0].style.filter = "grayscale(100%)";
        }
    }

    setDragonSpineOrImage(res_url, dragCanvasId) {
        if (res_url.includes(".png")) {
            document.getElementById("dragon-image").src = res_url
        }
        else {
            this.dragon = new SpineObject(res_url, "idle", this.spineScaler);
            this.dragonCanvas = new spine.SpineCanvas(document.getElementById(dragCanvasId), {
                app: this.dragon
            })
            //this.dragonCanvas = document.getElementById(dragCanvasId)
        }
        this.setDragonIllustGrayScale(res_url);
    }

    setAuraFront(res_url, aura, auraCanvasId){
        this.auraFront = new SpineObject(res_url, auraList[aura]["front"], this.spineScaler);
        this.auraFrontCanvas = new spine.SpineCanvas(document.getElementById(auraCanvasId), {
            app: this.auraFront
        })
        //this.aura1 = document.getElementById(auraCanvasId)
        console.log(auraCanvasId)
    }

    setAuraBack(res_url, aura, auraCanvasId){
        this.auraBack = new SpineObject(res_url, auraList[aura]["back"], this.spineScaler);
       this.auraBackCanvas = new spine.SpineCanvas(document.getElementById( auraCanvasId), {
            app: this.auraBack
        })

    }

    
}