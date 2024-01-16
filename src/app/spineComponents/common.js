import {spine} from './spine-webgl'
import { SpineObject } from './spineObject'
import auraList from './personality_dictionary_1.2.0.json' assert { type: 'json' };

export class Common {
    static applyProperStyle() {
        var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
        if (isMobile) { 
            document.getElementById("root").style.minWidth = '280px';
        }
        else {
            document.getElementById("root").style.minWidth = '800px';
        }
    }
    
    static preventContextMenu() {
        window.addEventListener("contextmenu", e => e.preventDefault());
    }

    static setDragonIllustGrayScale(res_url) {
        if (res_url.includes("rip_") || res_url.includes("empty.png") || res_url.includes("deadegg_") || res_url.includes("undead")) {
            document.getElementsByClassName("drgaonIllust")[0].style.filter = "grayscale(100%)";
        }
    }

    static setDragonSpineOrImage(res_url, dragCanvasId) {
        if (res_url.includes(".png")) {
            document.getElementById("dragon-image").src = res_url
        }
        else {
            new spine.SpineCanvas(document.getElementById(dragCanvasId), {
                app: new SpineObject(res_url, "idle")
            })
        }
        Common.setDragonIllustGrayScale(res_url);
    }

    static setAuraFront(res_url, aura, auraCanvasId){
        new spine.SpineCanvas(document.getElementById(auraCanvasId), {
            app: new SpineObject(res_url, auraList[aura]["front"])
        })
    }

    static setAuraBack(res_url, aura, auraCanvasId){
        new spine.SpineCanvas(document.getElementById( auraCanvasId), {
            app: new SpineObject(res_url, auraList[aura]["back"])
        })
    }
}