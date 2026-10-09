export const TITLE='エクステンドワールド - 星詠みの迷宮 -';
export const HEROES=[
 {id:'knight',name:'レオン',title:'暁の星剣士',desc:'剣で道を拓く守護者。堅い守りと、敵を押し返す一閃。',hp:46,mp:16,atk:9,def:4,color:'#82b9ff',portrait:0,skill:'星断ち',cost:5,skillDesc:'正面3マスを貫く剣閃。敵を吹き飛ばす。',passive:'被ダメージを1軽減。盾装備で防御+1。'},
 {id:'mage',name:'セレナ',title:'紅月の星術師',desc:'紅い星の力を操る魔法使い。遠距離と範囲攻撃が得意。',hp:32,mp:30,atk:6,def:2,color:'#f783a9',portrait:1,skill:'星火の輪',cost:7,skillDesc:'周囲3マスの敵を焼く。壁を越えて届く。',passive:'魔法ダメージ+30%。MPの自然回復が速い。'},
 {id:'ranger',name:'ノエル',title:'翠風の星渡り',desc:'風と共に迷宮を駆ける探索者。罠を見抜き、鋭い矢を放つ。',hp:38,mp:22,atk:8,def:3,color:'#8ce0b0',portrait:2,skill:'流星矢',cost:4,skillDesc:'正面8マスへ矢。最初の敵に大ダメージ。',passive:'罠が見える。回避率+15%。空腹の進行が遅い。'},
 {id:'cleric',name:'ルミナ',title:'白宵の星祈り',desc:'消えた星を灯す祈り手。回復と光で長い探索を支える。',hp:40,mp:26,atk:7,def:3,color:'#ffdda0',portrait:3,skill:'星の祈り',cost:7,skillDesc:'HP回復・状態異常を解除。周囲の不死者に光。',passive:'自然回復+50%。回復アイテムの効果+25%。'}
];
export const DUNGEONS=[
 {id:0,name:'星芽の森遺跡',sub:'星が芽吹く、忘れられた庭',floors:6,color:'#79d9b0',floorTiles:[0,2],wallTiles:[1,3],difficulty:1,boss:'星樹の番人',bossType:12,bossDesc:'根を張る前の一拍を見逃さないで。',enemies:[0,1,2,3,5,8],story:'空から落ちた一片の星図。そこには、地図にない森が記されていた。世界の縁を閉ざす三つの星封を解くため、あなたは最初の迷宮へ足を踏み入れる。'},
 {id:1,name:'月霜の氷晶神殿',sub:'眠る月に、響く足音',floors:7,color:'#8bcbff',floorTiles:[4,6],wallTiles:[5,7],difficulty:2,boss:'月霜の聖竜',bossType:14,bossDesc:'凍てつく直線の息。斜めに逃れる道を。',enemies:[4,7,10,11,13,15],story:'森で開いた星封の向こうに、凍りついた月の神殿が現れた。星詠みたちは、かつてこの場所で世界の行く末を見ていたという。失われた第二の星図を探しに行こう。'},
 {id:2,name:'熾星の王城',sub:'世界の果てに、最後の灯',floors:8,color:'#ffa378',floorTiles:[8,10],wallTiles:[9,11],difficulty:3,boss:'星蝕の王',bossType:11,bossDesc:'星蝕は広い範囲を覆う。赤い星印を避けて。',enemies:[6,8,9,10,11,12,14,15],story:'氷の奥に残された星図は、空に浮かぶ熾火の王城を指した。世界を閉じる王の願いと、世界を広げる星の祈り。最後の封を解く時、あなた自身の答えが試される。'}
];
export const ENEMIES=[
 {name:'星露スライム',hp:12,atk:4,def:0,xp:5,ai:'chase',color:'#75bcff',weak:'light'},
 {name:'森ゴブリン',hp:18,atk:6,def:1,xp:8,ai:'chase',color:'#a8d878'},
 {name:'銀牙ウルフ',hp:16,atk:7,def:0,xp:9,ai:'fast',color:'#ced7ec'},
 {name:'宵羽コウモリ',hp:10,atk:5,def:0,xp:6,ai:'wander',color:'#b99fe8'},
 {name:'星骸の騎士',hp:25,atk:9,def:3,xp:14,ai:'chase',color:'#ded0af',weak:'light'},
 {name:'夢見キノコ',hp:18,atk:4,def:1,xp:9,ai:'poison',color:'#e7b0d2'},
 {name:'熾火の小悪魔',hp:20,atk:9,def:1,xp:13,ai:'ranged',color:'#ff955e',weak:'ice'},
 {name:'氷晶の精霊',hp:22,atk:8,def:2,xp:14,ai:'freeze',color:'#8be8ff',weak:'fire'},
 {name:'星喰いミミック',hp:30,atk:12,def:3,xp:19,ai:'mimic',color:'#e5b75d'},
 {name:'黒鉄オーク',hp:40,atk:13,def:4,xp:22,ai:'chase',color:'#b8a4a5'},
 {name:'月環の蛇',hp:24,atk:10,def:2,xp:17,ai:'poison',color:'#abcf73'},
 {name:'星蝕の魔導師',hp:28,atk:13,def:2,xp:22,ai:'ranged',color:'#c48cff'},
 {name:'古代の星石巨兵',hp:50,atk:15,def:6,xp:30,ai:'slow',color:'#a3bcb9'},
 {name:'白宵の亡霊',hp:24,atk:10,def:0,xp:17,ai:'ghost',color:'#c5dfff',weak:'light'},
 {name:'星焔の竜',hp:46,atk:16,def:4,xp:30,ai:'breath',color:'#d9aa64',weak:'ice'},
 {name:'深淵の星眼',hp:25,atk:12,def:1,xp:19,ai:'ranged',color:'#ee96d4'}
];
export const ITEMS=[
 {id:'potion',name:'星露の薬',kind:'use',icon:'✚',desc:'HPを30回復。',value:25,effect:'heal',power:30},
 {id:'highPotion',name:'月光の霊薬',kind:'use',icon:'✚',desc:'HPを65回復し毒を解除。',value:65,effect:'heal',power:65},
 {id:'mana',name:'星蜜の雫',kind:'use',icon:'♦',desc:'MPを18回復。',value:35,effect:'mana',power:18},
 {id:'bread',name:'旅人のパン',kind:'use',icon:'◒',desc:'満腹度を45回復。',value:20,effect:'food',power:45},
 {id:'feast',name:'星祭りの弁当',kind:'use',icon:'◒',desc:'満腹度を100回復、HPを20回復。',value:60,effect:'food',power:100},
 {id:'antidote',name:'清めの葉',kind:'use',icon:'❧',desc:'すべての状態異常を解除。',value:20,effect:'cleanse'},
 {id:'fireScroll',name:'星火の巻物',kind:'use',icon:'≋',desc:'周囲4マスの敵に24の炎ダメージ。',value:55,effect:'aoe',power:24,element:'fire'},
 {id:'iceScroll',name:'氷環の巻物',kind:'use',icon:'≋',desc:'周囲4マスの敵に16ダメージ。3ターン凍結。',value:55,effect:'aoe',power:16,element:'ice'},
 {id:'lightScroll',name:'天光の巻物',kind:'use',icon:'≋',desc:'すべての可視敵に30の光ダメージ。',value:80,effect:'light',power:30,element:'light'},
 {id:'mapScroll',name:'星図の巻物',kind:'use',icon:'▧',desc:'階全体の地形・階段・罠を記録。',value:35,effect:'map'},
 {id:'sleepScroll',name:'夢霧の巻物',kind:'use',icon:'≋',desc:'周囲5マスの敵を6ターン眠らせる。',value:45,effect:'sleep'},
 {id:'warp',name:'転移の結晶',kind:'use',icon:'◇',desc:'同じ階の安全な場所へ瞬間移動。',value:30,effect:'warp'},
 {id:'escape',name:'帰還の星石',kind:'use',icon:'⌂',desc:'入手した星片と金貨を持って拠点へ帰還。',value:70,effect:'escape'},
 {id:'power',name:'剛力の種',kind:'use',icon:'♧',desc:'この冒険中の攻撃力を永久に1上げる。',value:65,effect:'power'},
 {id:'life',name:'命の星種',kind:'use',icon:'♧',desc:'この冒険中の最大HPを5上げて回復。',value:65,effect:'life'},
 {id:'haste',name:'風歩の薬',kind:'use',icon:'»',desc:'8ターンの間、敵が2ターンに1回しか動かない。',value:60,effect:'haste'},
 {id:'shield',name:'星守りの薬',kind:'use',icon:'⬡',desc:'10ターンの間、防御力+5。',value:45,effect:'shield'},
 {id:'revive',name:'不滅の星灯',kind:'use',icon:'✧',desc:'力尽きた時、一度だけHP全快で復活。自動発動。',value:140,effect:'revive'},
 {id:'arrow',name:'銀星の矢',kind:'use',icon:'➶',desc:'正面8マスへ矢を放ち18ダメージ。',value:15,effect:'arrow',power:18},
 {id:'bomb',name:'星砂の爆弾',kind:'use',icon:'✹',desc:'周囲2マスに35ダメージ。自分も8ダメージ。',value:60,effect:'bomb',power:35}
];
export const WEAPONS=[
 {id:'shortSword',name:'旅立ちの剣',atk:2,perk:'',desc:'扱いやすい、冒険者の剣。'},
 {id:'silverSword',name:'銀星の剣',atk:4,perk:'undead',desc:'亡霊・骸骨へダメージ+50%。'},
 {id:'flameSword',name:'紅蓮の剣',atk:5,perk:'fire',desc:'攻撃に炎属性。氷の敵に強い。'},
 {id:'frostSword',name:'月霜の剣',atk:5,perk:'ice',desc:'20%で敵を2ターン凍結。'},
 {id:'drainSword',name:'宵闇の剣',atk:4,perk:'drain',desc:'与えたダメージの20%を吸収。'},
 {id:'stormSword',name:'疾風の双剣',atk:4,perk:'double',desc:'25%で2連撃。'},
 {id:'crystalSword',name:'星晶の大剣',atk:8,perk:'heavy',desc:'会心率+15%。'},
 {id:'starSword',name:'天穹の星剣',atk:10,perk:'star',desc:'会心率+20%。魔法威力+20%。'},
 {id:'thornSword',name:'薔薇の細剣',atk:5,perk:'poison',desc:'30%で敵に毒。'},
 {id:'moonStaff',name:'月詠みの杖',atk:3,perk:'magic',desc:'魔法威力+40%。'},
 {id:'luckySword',name:'流れ星の剣',atk:4,perk:'lucky',desc:'敵のアイテムドロップ率が上がる。'},
 {id:'guardianSword',name:'黎明の聖剣',atk:7,perk:'light',desc:'光属性。HP自然回復+1。'}
];
export const ARMORS=[
 {id:'cloak',name:'旅人の外套',def:1,perk:'',desc:'旅路を守る外套。'},
 {id:'ironShield',name:'黒鉄の盾',def:3,perk:'',desc:'確かな守り。'},
 {id:'starShield',name:'星紋の盾',def:4,perk:'magic',desc:'魔法の被ダメージを25%軽減。'},
 {id:'thornShield',name:'茨の盾',def:3,perk:'reflect',desc:'近接攻撃を受けた時、3ダメージ反射。'},
 {id:'frostCloak',name:'月霜の衣',def:3,perk:'freeze',desc:'凍結・鈍足を防ぐ。'},
 {id:'purityRobe',name:'白宵の聖衣',def:3,perk:'poison',desc:'毒と眠りを防ぐ。'},
 {id:'windCloak',name:'翠風の羽衣',def:2,perk:'dodge',desc:'回避率+15%。'},
 {id:'sunShield',name:'陽炎の盾',def:5,perk:'fire',desc:'炎ダメージ半減。'},
 {id:'royalArmor',name:'天穹の鎧',def:7,perk:'regen',desc:'最大HP+10。毎5ターンHP+1。'},
 {id:'hungerCloak',name:'旅星のマント',def:2,perk:'food',desc:'空腹の進行が半分。'}
];
export const RINGS=[
 {id:'powerRing',name:'剛星の指輪',perk:'power',desc:'攻撃力+3。'},
 {id:'guardRing',name:'守星の指輪',perk:'guard',desc:'防御力+2。'},
 {id:'sightRing',name:'星見の指輪',perk:'sight',desc:'視界が2マス広がり、罠が見える。'},
 {id:'manaRing',name:'月詠みの指輪',perk:'mana',desc:'最大MP+10。MP回復が速い。'},
 {id:'lifeRing',name:'命星の指輪',perk:'life',desc:'最大HP+15。'},
 {id:'luckRing',name:'幸星の指輪',perk:'luck',desc:'会心率+12%、アイテムドロップ率上昇。'},
 {id:'satietyRing',name:'実りの指輪',perk:'food',desc:'満腹度の減少を抑える。'},
 {id:'swiftRing',name:'風星の指輪',perk:'swift',desc:'20%で敵が行動しない。'}
];
export const TRAPS=[{name:'棘の罠',kind:'spike',icon:'△'},{name:'毒霧の罠',kind:'poison',icon:'☷'},{name:'転移の罠',kind:'warp',icon:'◇'},{name:'眠りの罠',kind:'sleep',icon:'☽'},{name:'封魔の罠',kind:'drain',icon:'⬡'}];
export const RELICS=[
 {id:'vital',name:'生命の星座',desc:'最大HP+12。HPを25回復。'},
 {id:'blade',name:'剣の星座',desc:'攻撃力+2、会心率+5%。'},
 {id:'ward',name:'盾の星座',desc:'防御力+2。'},
 {id:'arcane',name:'月の星座',desc:'最大MP+8、魔法威力+15%。'},
 {id:'harvest',name:'実りの星座',desc:'食事の効果+30%。満腹度を50回復。'},
 {id:'echo',name:'反響の星座',desc:'敵を倒すたびHPを3回復。'},
 {id:'focus',name:'集中の星座',desc:'会心率+15%。'},
 {id:'mercy',name:'祈りの星座',desc:'自然回復が強まる。状態異常を解除。'},
 {id:'wealth',name:'宝冠の星座',desc:'金貨と星片の獲得量+40%。'},
 {id:'comet',name:'彗星の星座',desc:'英雄技の威力+25%。'}
];
export const ALL_EQUIP={weapon:WEAPONS,armor:ARMORS,ring:RINGS};
export const findItem=id=>ITEMS.find(x=>x.id===id);
export const findEquip=(kind,id)=>ALL_EQUIP[kind]?.find(x=>x.id===id);
export const LORE=[
 '星は夜を照らすためだけに生まれたのではない。世界の、まだ見ぬ場所を指し示すために。',
 'かつて星詠みは、夢を地図に描いた。その地図の先に道が現れ、世界は少しずつ広がった。',
 '森の番人は忘れなかった。帰らない主が、最後に植えた小さな星の種を。',
 '月霜の神殿に刻まれた言葉。「終わりを恐れる者よ、始まりを閉じるな」。',
 '星蝕の王は世界を愛した。愛しすぎて、失うもののない世界を望んでしまった。',
 '最後の星図は白紙だった。未来は読まれるものではなく、歩いて描かれるものだから。'
];
