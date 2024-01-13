export class LinkButtons extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        .linkButtonContainer {
            display: flex;
            justify-content: space-around;
        
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 5%;
        
            max-width: 770px;
            max-height: 100px;
            width:70%;
            height:auto;
        }
        
        .linkButton {
            width: 28%;
            height: auto;
        }
        
        .linkButtonCommunity { 
            width: 40%;
        }
        
        .linkButton img {
            width: 100%;
            height: auto;
        }
        </style>

        <linkButtons>
            <div class="linkButtonContainer">
                <a class="linkButton linkButtonCommunity" href="https://community.withhive.com/dvc?in=webview" aria-label="Read more about Seminole tax hike" target="_blank">
                    <img src="https://res.dvc.land/dvc-web/res/button/link_btn_community0101.png" alt="">
                </a>
                <a class="linkButton" href="https://play.google.com/store/apps/details?id=com.highbrow.games.dv&referrer=utm_source%3DWEB%2BVIEW_2023.08.11_DVC%26utm_medium%3DWEB%2BVIEW_2023.08.11_DVC%26utm_term%3DWEB%2BVIEW_2023.08.11_DVC%26utm_content%3DWEB%2BVIEW_2023.08.11_DVC%26utm_campaign%3DWEB%2BVIEW_2023.08.11_DVC" aria-label="Read more about Seminole tax hike" target="_blank">
                    <img src="https://res.dvc.land/dvc-web/res/button/link_btn_googleplay_0101.png" alt="">
                </a>
                <a class="linkButton" href="https://apps.apple.com/app/apple-store/id6444795301?pt=490735&ct=WEB%20VIEW_23.08.11_DVC&mt=8" aria-label="Read more about Seminole tax hike" target="_blank">
                    <img src="https://res.dvc.land/dvc-web/res/button/link_btn_appstore_0101.png" alt="">
                </a>
            </div>
        </linkButtons>
      `;
    }
}
  
customElements.define('link-buttons', LinkButtons);
