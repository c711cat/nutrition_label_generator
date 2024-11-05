import{u as v}from"./foodDataStore-DC37HNJS.js";import{_ as k,m as D,a as I,c as n,b as e,h as o,w as s,i,j as d,F as p,r as b,g as M,o as u,v as g,t as y}from"./index-DaWMbUU1.js";const S={data(){return{GMFOptions:["玉米","黃豆","棉花","油菜","甜菜","苜蓿","蘋果","茄子","亞麻","木瓜","鳳梨","馬鈴薯","水稻","南瓜","甘蔗","小麥"],allergenOptions:["甲殼類及其製品","芒果類及其製品","花生類及其製品","牛奶、羊奶及其製品。但由牛奶、羊奶取得之乳糖醇，不在此限","蛋及其製品","堅果類及其製品","芝麻及其製品","含麩質之穀物及其製品。但由穀類製得之葡萄糖漿、麥芽糊精及酒類，不在此限","大豆及其製品。但由大豆製得之高度提煉或純化取得之大豆油（脂）、混合形式之生育醇及其衍生物、植物固醇、植物固醇酯，不在此限","魚類及其製品。但由魚類取得之明膠，並作為製備維生素或類胡蘿蔔素製劑之載體或酒類之澄清用途者，不在此限","使用亞硫酸鹽類等，其終產品以二氧化硫殘留量計每公斤十毫克以上之製品"],validItemsInput:"",productList:[]}},watch:{"product.validDaysInformation.validDaysStatus"(a){a==="標示於外包裝"&&(this.product.validDaysInformation.validDays=this.validItemsInput)},"product.validDateInformation.validDateStatus"(a){a==="標示於外包裝"&&(this.product.validDateInformation.validDate=this.validItemsInput)}},computed:{...D(v,["product","myProductList"])},methods:{...I(v,["addMyProduct"]),submitForm(a){const l=a.target;if(!l.checkValidity()){l.classList.add("was-validated");return}this.product.id=Date.now(),this.productList.push(this.product),this.addMyProduct(this.productList),this.$router.push("/product_list")}},created(){this.productList=this.myProductList}},w={class:"bg-light rounded row m-0 g-5 pb-5 mb-4"},F={class:"col-xl-4"},V={class:"col-xl-4"},q={class:"col-xl-4"},U={class:"col-xl-4"},x={class:"col-xl-4"},G={class:"form-check mb-2"},R={class:"form-check mb-2"},L=["disabled"],P={class:"col-xl-4"},O={class:"form-check mb-2"},A={class:"form-check mb-2"},B=["disabled"],N={class:"col-xl-4"},T={class:"form-check"},h={class:"form-check mb-2"},j=["disabled","id","value","required"],C=["for"],E={class:"col-xl-4"},$={class:"form-check"},z={class:"form-check mb-2"},H=["disabled","id","value","required"],J=["for"];function K(a,l,Q,W,f,c){return u(),n(p,null,[l[45]||(l[45]=e("header",{class:"container"},[e("h3",{class:"text-center my-4"},"外包裝資訊標示")],-1)),e("form",{onSubmit:l[16]||(l[16]=M((...t)=>c.submitForm&&c.submitForm(...t),["prevent"])),class:"container mb-5 needs-validation",novalidate:""},[e("div",w,[e("section",F,[l[17]||(l[17]=e("label",{for:"manufacturer",class:"form-label fw-bold ps-1 d-flex"},[e("div",{class:"pe-1 d-flex align-items-center"},[e("i",{class:"text-danger fst-normal"},"＊")]),o(" 製造廠商名稱 ")],-1)),s(e("input",{"onUpdate:modelValue":l[0]||(l[0]=t=>a.product.manufacturer=t),type:"text",class:"form-control",id:"manufacturer",placeholder:"輸入製造商名稱",required:""},null,512),[[i,a.product.manufacturer,void 0,{trim:!0}]]),l[18]||(l[18]=e("div",{class:"invalid-feedback"},"此欄位為必填",-1))]),e("section",V,[l[19]||(l[19]=e("label",{for:"manufacturer_address",class:"form-label fw-bold ps-1 d-flex"},[e("div",{class:"pe-1 d-flex align-items-center"},[e("i",{class:"text-danger fst-normal"},"＊")]),o(" 製造廠商地址 ")],-1)),s(e("input",{"onUpdate:modelValue":l[1]||(l[1]=t=>a.product.manufacturerAddress=t),type:"text",class:"form-control",id:"manufacturer_address",placeholder:"輸入製造廠商地址",required:""},null,512),[[i,a.product.manufacturerAddress,void 0,{trim:!0}]]),l[20]||(l[20]=e("div",{class:"invalid-feedback"},"此欄位為必填",-1))]),e("section",q,[l[21]||(l[21]=e("label",{for:"manufacturer_phone",class:"form-label fw-bold ps-1 d-flex"},[e("div",{class:"pe-1 d-flex align-items-center"},[e("i",{class:"text-danger fst-normal"},"＊")]),o(" 製造廠商電話 ")],-1)),s(e("input",{"onUpdate:modelValue":l[2]||(l[2]=t=>a.product.manufacturerPhone=t),type:"tel",class:"form-control",id:"manufacturer_phone",placeholder:"輸入製造廠商電話",required:""},null,512),[[i,a.product.manufacturerPhone,void 0,{trim:!0}]]),l[22]||(l[22]=e("div",{class:"invalid-feedback"},"此欄位為必填",-1))]),e("section",U,[l[23]||(l[23]=e("label",{for:"country_of_origin",class:"form-label fw-bold ps-1 d-flex"},[e("div",{class:"pe-1 d-flex align-items-center"},[e("i",{class:"text-danger fst-normal"},"＊")]),o(" 原產地 ")],-1)),s(e("input",{"onUpdate:modelValue":l[3]||(l[3]=t=>a.product.origin=t),type:"text",class:"form-control",id:"country_of_origin",placeholder:"輸入原產地",required:""},null,512),[[i,a.product.origin,void 0,{trim:!0}]]),l[24]||(l[24]=e("div",{class:"invalid-feedback"},"此欄位為必填",-1))]),e("section",x,[l[28]||(l[28]=e("span",{class:"fw-bold ps-1 mb-2 d-flex"},[e("div",{class:"pe-1 d-flex align-items-center"},[e("i",{class:"text-danger fst-normal"},"＊")]),o(" 有效期限資訊（ 擇一標示 ） ")],-1)),e("div",G,[s(e("input",{"onUpdate:modelValue":l[4]||(l[4]=t=>a.product.validDaysInformation.validDaysStatus=t),class:"form-check-input",type:"radio",id:"vali_days_on_outer_packaging",value:"標示於外包裝",required:""},null,512),[[d,a.product.validDaysInformation.validDaysStatus]]),l[25]||(l[25]=e("div",{class:"invalid-feedback"},"此欄位為必填",-1)),l[26]||(l[26]=e("label",{class:"form-check-label",for:"vali_days_on_outer_packaging"}," 以『 標示於外包裝 』標示 ",-1))]),e("div",R,[s(e("input",{"onUpdate:modelValue":l[5]||(l[5]=t=>a.product.validDaysInformation.validDaysStatus=t),class:"form-check-input",type:"radio",id:"days",value:"number",required:""},null,512),[[d,a.product.validDaysInformation.validDaysStatus]]),l[27]||(l[27]=e("label",{class:"form-check-label",for:"days"}," 以下方日期標示 ",-1))]),l[29]||(l[29]=e("label",{for:"valid_days",class:"form-label fw-bold ps-1 d-flex"}," 輸入有效天數（ 數字 ） ",-1)),s(e("input",{"onUpdate:modelValue":l[6]||(l[6]=t=>a.product.validDaysInformation.validDays=t),disabled:a.product.validDaysInformation.validDaysStatus==="標示於外包裝",type:"number",min:"1",class:"form-control",id:"valid_days",placeholder:"輸入有效天數",required:""},null,8,L),[[i,a.product.validDaysInformation.validDays]]),l[30]||(l[30]=e("div",{class:"invalid-feedback"},"此欄位為必填，且需大於等於 1",-1))]),e("section",P,[l[33]||(l[33]=e("span",{class:"fw-bold ps-1 mb-2 d-flex"},[e("div",{class:"pe-1 d-flex align-items-center"},[e("i",{class:"text-danger fst-normal"},"＊")]),o(" 有效日期資訊（ 擇一標示 ） ")],-1)),e("div",O,[s(e("input",{"onUpdate:modelValue":l[7]||(l[7]=t=>a.product.validDateInformation.validDateStatus=t),class:"form-check-input",type:"radio",id:"marked_on_outer_packaging",value:"標示於外包裝",required:""},null,512),[[d,a.product.validDateInformation.validDateStatus]]),l[31]||(l[31]=e("label",{class:"form-check-label",for:"marked_on_outer_packaging"}," 以『 標示於外包裝 』標示 ",-1))]),e("div",A,[s(e("input",{"onUpdate:modelValue":l[8]||(l[8]=t=>a.product.validDateInformation.validDateStatus=t),class:"form-check-input",type:"radio",id:"choose_date",value:"date",required:""},null,512),[[d,a.product.validDateInformation.validDateStatus]]),l[32]||(l[32]=e("label",{class:"form-check-label",for:"choose_date"}," 以下方日期標示 ",-1))]),l[34]||(l[34]=e("label",{for:"valid_date",class:"form-label fw-bold ps-1 d-flex"}," 選擇有效日期 ",-1)),s(e("input",{"onUpdate:modelValue":l[9]||(l[9]=t=>a.product.validDateInformation.validDate=t),disabled:a.product.validDateInformation.validDateStatus==="標示於外包裝",type:"date",class:"form-control",id:"valid_date",required:""},null,8,B),[[i,a.product.validDateInformation.validDate]]),l[35]||(l[35]=e("div",{class:"invalid-feedback"},"此欄位為必填",-1))]),e("section",N,[l[38]||(l[38]=e("span",{class:"fw-bold ps-1 mb-2 d-flex"},[e("div",{class:"pe-1 d-flex align-items-center"},[e("i",{class:"text-danger fst-normal"},"＊")]),o(" 基因改造食品資訊 ")],-1)),e("div",T,[s(e("input",{"onUpdate:modelValue":l[10]||(l[10]=t=>a.product.geneticallyModified.GMFStatus=t),class:"form-check-input",type:"radio",name:"exampleRadios",id:"exampleRadios1",value:"本產品不含有基因改造食品",required:""},null,512),[[d,a.product.geneticallyModified.GMFStatus]]),l[36]||(l[36]=e("label",{class:"form-check-label",for:"exampleRadios1"}," 本產品不含有基因改造食品 ",-1))]),e("div",h,[s(e("input",{"onUpdate:modelValue":l[11]||(l[11]=t=>a.product.geneticallyModified.GMFStatus=t),class:"form-check-input",type:"radio",name:"exampleRadios",id:"exampleRadios2",value:"yes",required:""},null,512),[[d,a.product.geneticallyModified.GMFStatus]]),l[37]||(l[37]=e("label",{class:"form-check-label",for:"exampleRadios2"}," 本產品含有基因改造食品 ",-1))]),l[39]||(l[39]=e("p",{class:"fw-bold mb-2"}," 含有以下哪些：目前全球核准的基因改造作物種類（ 複選 ） ",-1)),(u(!0),n(p,null,b(f.GMFOptions,(t,r)=>(u(),n("div",{key:t,class:"form-check mb-2"},[s(e("input",{"onUpdate:modelValue":l[12]||(l[12]=m=>a.product.geneticallyModified.GMFs=m),disabled:a.product.geneticallyModified.GMFStatus==="本產品不含有基因改造食品",class:"form-check-input",type:"checkbox",id:"GMF"+r,value:t,required:a.product.geneticallyModified.GMFStatus==="yes"&&a.product.geneticallyModified.GMFs.length===0},null,8,j),[[g,a.product.geneticallyModified.GMFs]]),e("label",{class:"form-check-label",for:"GMF"+r},y(t),9,C)]))),128))]),e("section",E,[l[42]||(l[42]=e("span",{class:"fw-bold ps-1 mb-2 d-flex"},[e("div",{class:"pe-1 d-flex align-items-center"},[e("i",{class:"text-danger fst-normal"},"＊")]),o(" 過敏原資訊：請選擇是否含有過敏原 ")],-1)),e("div",$,[s(e("input",{"onUpdate:modelValue":l[13]||(l[13]=t=>a.product.allergenInformation.allergenStatus=t),class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"allergen_free",value:"no",required:""},null,512),[[d,a.product.allergenInformation.allergenStatus]]),l[40]||(l[40]=e("label",{class:"form-check-label",for:"allergen_free"}," 無 ",-1))]),e("div",z,[s(e("input",{"onUpdate:modelValue":l[14]||(l[14]=t=>a.product.allergenInformation.allergenStatus=t),class:"form-check-input",type:"radio",name:"flexRadioDefault",id:"allergens_present",value:"yes",required:""},null,512),[[d,a.product.allergenInformation.allergenStatus]]),l[41]||(l[41]=e("label",{class:"form-check-label",for:"allergens_present"}," 有 ",-1))]),l[43]||(l[43]=e("p",{class:"fw-bold mb-2"},"含有以下哪些過敏原（ 複選 ）",-1)),(u(!0),n(p,null,b(f.allergenOptions,(t,r)=>(u(),n("div",{key:t,class:"form-check mb-2"},[s(e("input",{"onUpdate:modelValue":l[15]||(l[15]=m=>a.product.allergenInformation.allergens=m),disabled:a.product.allergenInformation.allergenStatus==="no",class:"form-check-input",type:"checkbox",name:"exampleRadios",id:"allergen"+r,value:t,required:a.product.allergenInformation.allergenStatus==="yes"&&a.product.allergenInformation.allergens.length===0},null,8,H),[[g,a.product.allergenInformation.allergens]]),e("label",{class:"form-check-label",for:"allergen"+r},y(t),9,J)]))),128))])]),l[44]||(l[44]=e("div",{class:"col-12 text-end"},[e("button",{class:"col-12 col-xl-2 btn btn-primary",id:"submit",type:"submit"}," 送出表單 ")],-1))],32)],64)}const Z=k(S,[["render",K]]);export{Z as default};
