import{u as _}from"./foodDataStore-CuRjDprF.js";import{_ as v,m as I,g as C,c as r,d as t,F as h,e as g,a as f,o as d,t as e,h as b,w as N,b as M,r as m}from"./index-B2AOrsMC.js";import{A as w}from"./AddNutrientsModal-CfcF1FGG.js";import{D}from"./DoubleCheckModal-CpxpnQ_P.js";import"./messageStore-D4ipyxXN.js";import"./component-functions-BBVq3xqC.js";const P={data(){return{addNutrients:[],productList:[]}},components:{AddNutrientsModal:w,DoubleCheckModal:D},computed:{...I(_,["myProductList","headerChineseAndEnglish"])},methods:{...C(_,["setMyProducts","edit"]),openModal(o){this.$refs.addNutrientsModal.showModal(o)},sorted(o){return o.sort((s,n)=>n.grams-s.grams).map(s=>`${s.foodName}`).join("、")},calculateNutrients(o,s){return(o.ingredients.reduce((c,i)=>{const a=i.grams/100,p=i.details[`${s}`]||0;return c+p*a},0)/o.numberOfCopy).toFixed(1)},calculateCalories(o){const s=parseFloat(this.calculateNutrients(o,"protein")),n=parseFloat(this.calculateNutrients(o,"fat")),c=parseFloat(this.calculateNutrients(o,"total_carbohydrates"));return(s*4+n*9+c*4).toFixed(1)},calculatePer100g(o,s){return(o.ingredients.reduce((c,i)=>{const a=i.grams/100,p=i.details[`${s}`]||0;return c+p*a},0)/(o.netWeightInformation.netWeight*o.numberOfCopy)*100).toFixed(1)},calculatePer100gCalories(o){const s=parseFloat(this.calculatePer100g(o,"protein")),n=parseFloat(this.calculatePer100g(o,"fat")),c=parseFloat(this.calculatePer100g(o,"total_carbohydrates"));return(s*4+n*9+c*4).toFixed(1)},transUnitText(o){const s={g:"公克",ug:"微克",mg:"毫克",IU:"國際單位"},n=o.match(/\((g|ug|mg|IU)\)/);return n===null?"":s[n[1]]},openDoubleCheckModal(o,s){this.$refs.doubleCheckModal.showDelModal(o,s)},sortItems(){this.productList=this.myProductList,this.productList.sort((o,s)=>s.id-o.id),window.scrollTo(0,0)},transAllergenText(o){const s=[],n=["麩質","甲殼類","芒果類","花生類","牛奶、羊奶","蛋","芝麻","堅果類","大豆","亞硫酸鹽"];return o.forEach(c=>{n.forEach(i=>{c.match(i)&&s.push(i)})}),s.join("、")}},created(){this.sortItems()}},T={class:"container my-4"},F={class:"bg-light p-3 rounded col-12 col-xl-7 col-xxl-8 markItemsContainer"},A={class:"d-flex"},W={class:"col"},L={class:"d-flex"},E={class:"col"},S={key:0,class:"d-flex"},V={class:"col"},U={key:1,class:"d-flex"},j={class:"col"},B={class:"d-flex"},G={class:"col"},O={class:"d-flex"},R={key:0,class:"col"},Q={key:1,class:"col"},q={class:"d-flex"},z={key:0,class:"col"},H={key:1,class:"col"},J={class:"d-flex"},K={class:"col"},X={class:"d-flex"},Y={class:"col"},Z={class:"d-flex"},$={class:"col"},tt={class:"d-flex"},st={class:"col"},lt={class:"col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4 p-3"},et={class:"table table-sm table-borderless border border-black mb-0"},ot={colspan:"2",class:"lh-sm"},at={class:"lh-1 border-bottom border-black"},nt={colspan:"2"},rt={class:"lh-sm border-bottom border-black"},dt={class:"text-end pe-2"},ct={class:"lh-1"},it={class:"text-end pe-2"},ut={class:"text-end pe-2"},pt={class:"lh-1"},ft={class:"text-end pe-2"},mt={class:"text-end pe-2"},_t={class:"lh-1"},ht={class:"text-end pe-2"},gt={class:"text-end pe-2"},bt={class:"lh-1"},xt={class:"text-end pe-2"},yt={class:"text-end pe-2"},kt={class:"lh-1"},vt={class:"text-end pe-2"},It={class:"text-end pe-2"},Ct={class:"lh-1"},Nt={class:"text-end pe-2"},Mt={class:"text-end pe-2"},wt={class:"lh-1"},Dt={class:"text-end pe-2"},Pt={class:"text-end pe-2"},Tt={class:"lh-1"},Ft={class:"text-end pe-2"},At={class:"text-end pe-2"},Wt={class:"fw-normal ps-2"},Lt={class:"text-end pe-2"},Et={class:"text-end pe-2"},St={class:"d-flex flex-wrap justify-content-between pe-4"},Vt=["onClick"],Ut={class:"my-3"},jt=["onClick"];function Bt(o,s,n,c,i,a){const p=m("router-link"),x=m("AddNutrientsModal"),y=m("DoubleCheckModal");return d(),r("div",T,[s[36]||(s[36]=t("h3",{class:"text-center mb-5"},"營養標示列表",-1)),(d(!0),r(h,null,g(o.myProductList,(l,k)=>(d(),r("div",{key:l.id,class:"border rounded row m-0 my-5"},[t("section",F,[t("div",A,[s[0]||(s[0]=t("p",{class:"markItemsTitle"},"品名",-1)),s[1]||(s[1]=t("i",{class:"fst-normal"},"：",-1)),t("p",W,e(l.title),1)]),t("div",L,[s[2]||(s[2]=t("p",{class:"markItemsTitle"},"成分",-1)),s[3]||(s[3]=t("i",{class:"fst-normal"},"：",-1)),t("p",E,e(a.sorted(l.ingredients)),1)]),l.geneticallyModified.GMFStatus==="yes"?(d(),r("div",S,[s[4]||(s[4]=t("p",{class:"markItemsTitle"},"基因改造食品",-1)),s[5]||(s[5]=t("i",{class:"fst-normal"},"：",-1)),t("p",V,e(l.geneticallyModified.GMFs.join("、")),1)])):b("",!0),l.allergenInformation.allergenStatus==="yes"?(d(),r("div",U,[s[6]||(s[6]=t("p",{class:"markItemsTitle"},"過敏原資訊",-1)),s[7]||(s[7]=t("i",{class:"fst-normal"},"：",-1)),t("p",j," 本產品含有"+e(a.transAllergenText(l.allergenInformation.allergens))+"及其製品 ",1)])):b("",!0),t("div",B,[s[8]||(s[8]=t("p",{class:"markItemsTitle"},"淨重",-1)),s[9]||(s[9]=t("i",{class:"fst-normal"},"：",-1)),t("p",G,e(l.netWeightInformation.netWeight)+" "+e(l.netWeightInformation.unit),1)]),t("div",O,[s[10]||(s[10]=t("p",{class:"markItemsTitle"},"保存期限",-1)),s[11]||(s[11]=t("i",{class:"fst-normal"},"：",-1)),l.validDaysInformation.validDays?(d(),r("p",R,e(l.validDaysInformation.validDays)+" 天 ",1)):(d(),r("p",Q,e(l.validDaysInformation.validDaysStatus),1))]),t("div",q,[s[12]||(s[12]=t("p",{class:"markItemsTitle"},"有效日期",-1)),s[13]||(s[13]=t("i",{class:"fst-normal"},"：",-1)),l.validDateInformation.validDate?(d(),r("p",z,e(l.validDateInformation.validDate),1)):(d(),r("p",H,e(l.validDateInformation.validDateStatus),1))]),t("div",J,[s[14]||(s[14]=t("p",{class:"markItemsTitle"},"原產地",-1)),s[15]||(s[15]=t("i",{class:"fst-normal"},"：",-1)),t("p",K,e(l.origin),1)]),t("div",X,[s[16]||(s[16]=t("p",{class:"markItemsTitle"},"廠商名稱",-1)),s[17]||(s[17]=t("i",{class:"fst-normal"},"：",-1)),t("p",Y,e(l.manufacturer),1)]),t("div",Z,[s[18]||(s[18]=t("p",{class:"markItemsTitle"},"廠商地址",-1)),s[19]||(s[19]=t("i",{class:"fst-normal"},"：",-1)),t("p",$,e(l.manufacturerAddress),1)]),t("div",tt,[s[20]||(s[20]=t("p",{class:"markItemsTitle"},"廠商電話",-1)),s[21]||(s[21]=t("i",{class:"fst-normal"},"：",-1)),t("p",st,e(l.manufacturerPhone),1)])]),t("section",lt,[t("table",et,[s[34]||(s[34]=t("thead",null,[t("tr",{class:"lh-sm border-bottom border-black"},[t("th",{colspan:"3",class:"text-center fw-normal"},"營養標示")])],-1)),t("tbody",null,[t("tr",null,[s[22]||(s[22]=t("th",{class:"fw-normal ps-2 lh-sm"},"每一份量",-1)),t("td",ot,e(l.netWeightInformation.netWeight)+" "+e(l.netWeightInformation.unit),1)]),t("tr",at,[s[23]||(s[23]=t("th",{class:"fw-normal ps-2"},"本包裝含",-1)),t("td",nt,e(l.productQty)+" 份",1)]),t("tr",rt,[s[24]||(s[24]=t("th",null,null,-1)),s[25]||(s[25]=t("td",{class:"text-end pe-2"},"每份",-1)),t("td",dt," 每 100 "+e(l.netWeightInformation.unit),1)]),t("tr",ct,[s[26]||(s[26]=t("th",{class:"fw-normal ps-2"},"熱量",-1)),t("td",it,e(a.calculateCalories(l))+" 大卡",1),t("td",ut,e(a.calculatePer100gCalories(l))+" 大卡 ",1)]),t("tr",pt,[s[27]||(s[27]=t("th",{class:"fw-normal ps-2"},"蛋白質",-1)),t("td",ft,e(a.calculateNutrients(l,"protein"))+" 公克 ",1),t("td",mt,e(a.calculatePer100g(l,"protein"))+" 公克 ",1)]),t("tr",_t,[s[28]||(s[28]=t("th",{class:"fw-normal ps-2"},"脂肪",-1)),t("td",ht,e(a.calculateNutrients(l,"fat"))+" 公克 ",1),t("td",gt,e(a.calculatePer100g(l,"fat"))+" 公克 ",1)]),t("tr",bt,[s[29]||(s[29]=t("th",{class:"fw-normal ps-4"},"飽和脂肪",-1)),t("td",xt,e(a.calculateNutrients(l,"saturated_fat"))+" 公克 ",1),t("td",yt,e(a.calculatePer100g(l,"saturated_fat"))+" 公克 ",1)]),t("tr",kt,[s[30]||(s[30]=t("th",{class:"fw-normal ps-4"},"反式脂肪",-1)),t("td",vt,e(a.calculateNutrients(l,"trans_fat"))+" 公克 ",1),t("td",It,e(a.calculatePer100g(l,"trans_fat"))+" 公克 ",1)]),t("tr",Ct,[s[31]||(s[31]=t("th",{class:"fw-normal ps-2"},"碳水化合物",-1)),t("td",Nt,e(a.calculateNutrients(l,"total_carbohydrates"))+" 公克 ",1),t("td",Mt,e(a.calculatePer100g(l,"total_carbohydrates"))+" 公克 ",1)]),t("tr",wt,[s[32]||(s[32]=t("th",{class:"fw-normal ps-4"},"糖",-1)),t("td",Dt,e(a.calculateNutrients(l,"total_sugar"))+" 公克 ",1),t("td",Pt,e(a.calculatePer100g(l,"total_sugar"))+" 公克 ",1)]),t("tr",Tt,[s[33]||(s[33]=t("th",{class:"fw-normal ps-2"},"鈉",-1)),t("td",Ft,e(a.calculateNutrients(l,"sodium"))+" 毫克 ",1),t("td",At,e(a.calculatePer100g(l,"sodium"))+" 毫克 ",1)]),(d(!0),r(h,null,g(l.addNutrients,u=>(d(),r("tr",{key:u,class:"lh-1"},[t("th",Wt,e(o.headerChineseAndEnglish[u].replace(/\(.*\)/,"")),1),t("td",Lt,e(a.calculateNutrients(l,u))+" "+e(a.transUnitText(o.headerChineseAndEnglish[u])),1),t("td",Et,e(a.calculatePer100g(l,u))+" "+e(a.transUnitText(o.headerChineseAndEnglish[u])),1)]))),128))])])]),t("div",St,[t("button",{onClick:u=>a.openModal(l),type:"button",class:"btn btn-primary my-3"}," 新增其他營養素 ",8,Vt),t("div",Ut,[f(p,{to:"/nutrition_label",onClick:u=>o.edit(l),type:"button",class:"btn btn-outline-primary me-3"},{default:N(()=>s[35]||(s[35]=[M(" 編輯 ")])),_:2},1032,["onClick"]),t("button",{onClick:u=>a.openDoubleCheckModal(l,k),type:"button",class:"btn btn-outline-danger"}," 刪除 ",8,jt)])])]))),128)),f(x,{ref:"addNutrientsModal"},null,512),f(y,{ref:"doubleCheckModal"},null,512)])}const Ht=v(P,[["render",Bt],["__scopeId","data-v-baf50a3b"]]);export{Ht as default};
