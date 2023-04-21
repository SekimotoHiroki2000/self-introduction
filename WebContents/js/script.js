'use strict';

const thumbs = document.querySelectorAll('.thumb');
	thumbs.forEach(function(item,index) {
		item.onclick =function() {
		document.getElementById('bigimg').src = this.dataset.image;
		}	
		
	});	
	
 const pics_src = ["img/dr-stone_M.jpg","img/yugioh2000.jpg","img/deathnote.jpg","img/worldtrigger_M.jpg",
 "img/hikaru.jpg","img/hunterhunter.jpg","img/kimetsu2021_L.jpg","img/kekkaisensen.jpg","img/chainsawman_L.jpg",
 "img/tokyoghoul.jpg","img/hagaren-fa.jpg","img/goblinslayer_M.jpg","img/souleater.jpg","img/hoshiiro.jpg","img/dumbbell-anime_L.jpg","img/hina-matsuri_L.jpg",
 "img/dagashi.jpg","img/youjo-senki_L.jpg","img/overlord-anime_L.jpg","img/you-zitsu.jpg","img/re-zero-anime_L.jpg",
 "img/sao-alicization_L.jpg","img/newgame.jpg","img/blend-s.jpg","img/paripikoumei-anime_L.jpg","img/hypnosismic-anime_L.jpg",
 "img/revuestarlight_L.jpg","img/shin-tenipri-u17wc_L.jpg","img/bluelock-pr_L.jpg",
 "img/oofuri.jpg","img/iwakakeru-anime_L.jpg","img/haikyu.jpg","img/lycoris-recoil_L.jpg","img/anime-umamusume.jpg","img/geass-anime.jpg",
 "img/gundam-unicorn-re0096.jpg","img/anime-86_L.jpg","img/angelbeats.jpg","img/plastic_memories.jpg","img/shingeki.jpg","img/tigerandbunny.jpg",
 "img/bocchi-rocks_L.jpg","img/machikado_L.jpg","img/cuckoos-anime_L.jpg","img/hamehura-anime_L.jpg",
 "img/nisekoi.jpg","img/masamune-tv_L.jpg","img/nagiasu_M.jpg","img/adatoshima_L.jpg",
 ];
let num = -1;
 
 
function slideshow_timer(){
  if (num === pics_src.length-1){
    num = 0;
  } 
  else {
    num ++;
  }
  document.getElementById("mypic").src = pics_src[num];
}
 
setInterval(slideshow_timer, 1000);
  
  { /* ローカルスコープ */

// DOM取得
const tabMenus = document.querySelectorAll('.tab__menu-item');
console.log(tabMenus);

// イベント付加
tabMenus.forEach((tabMenu) => {
  tabMenu.addEventListener('click', tabSwitch);
})

// イベントの処理
function tabSwitch(e) {

  // クリックされた要素のデータ属性を取得
  const tabTargetData = e.currentTarget.dataset.tab;
  // クリックされた要素の親要素と、その子要素を取得
  const tabList = e.currentTarget.closest('.tab__menu');
  console.log(tabList);
  const tabItems = tabList.querySelectorAll('.tab__menu-item');
  console.log(tabItems);
  // クリックされた要素の親要素の兄弟要素の子要素を取得
  const tabPanelItems = tabList.
  nextElementSibling.querySelectorAll('.tab__panel-box');
  console.log(tabPanelItems);

  // クリックされたtabの同階層のmenuとpanelのクラスを削除
  tabItems.forEach((tabItem) => {
    tabItem.classList.remove('is-active');
  })
  tabPanelItems.forEach((tabPanelItem) => {
    tabPanelItem.classList.remove('is-show');
  })

  // クリックされたmenu要素にis-activeクラスを付加
  e.currentTarget.classList.add('is-active');
  // クリックしたmenuのデータ属性と等しい値を持つパネルにis-showクラスを付加
  tabPanelItems.forEach((tabPanelItem) => {
    if (tabPanelItem.dataset.panel ===  tabTargetData) {
      tabPanelItem.classList.add('is-show');
    }
  })

}

}

