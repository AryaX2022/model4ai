import{c as i}from"./NodeService-eaa9179d.js";import{_ as d,b as o,e as r,m as t,F as c,g as _,t as a,aq as n}from"./index-f80cd59f.js";import"./axios-aba6f0e0.js";const g={name:"Stats",data(){return{models:[]}},methods:{retrieveModels(){i().then(l=>{this.models=l.items})}},mounted(){this.retrieveModels()}},h={class:"table table-hover"},p=t("thead",null,[t("tr",null,[t("th",null,"序号"),t("th",null,"ID"),t("th",null,"名称"),t("th",null,"下载量"),t("th",null,"收藏量"),t("th",null,"评分量"),t("th",null,"评分"),t("th",null,"URL复制量")])],-1);function C(l,f,b,w,u,v){return o(),r("table",h,[p,t("tbody",null,[(o(!0),r(c,null,_(u.models,(s,e)=>(o(),r("tr",{key:e},[t("td",null,a(e),1),t("td",null,a(s.id),1),t("td",null,a(s.name),1),t("td",{class:n({"bg-warning":s.stats.downloadCount-s.stats.old_downloadCount>3})},a(s.stats.downloadCount-s.stats.old_downloadCount),3),t("td",{class:n({"bg-warning":s.stats.favoriteCount-s.stats.old_favoriteCount>3})},a(s.stats.favoriteCount-s.stats.old_favoriteCount),3),t("td",{class:n({"bg-warning":s.stats.ratingCount-s.stats.old_ratingCount>3})},a(s.stats.ratingCount-s.stats.old_ratingCount),3),t("td",null,a(s.stats.rating),1),t("td",{class:n({"bg-warning":s.stats.urlcopied>3})},a(s.stats.urlcopied),3)]))),128))])])}const S=d(g,[["render",C]]);export{S as default};
