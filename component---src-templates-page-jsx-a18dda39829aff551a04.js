(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6hyP":function(e,t,r){"use strict";r("4oWw"),r("nruA"),r("p+GS"),r("XjK0"),r("SCO9"),r("PN9k"),r("LnO1"),r("3eMz"),r("dtAy"),r("DB+v"),r("Yyzt");var a=r("ERkP"),i=r("R+GN"),c=r("tYqs"),n=r("O+tk"),o=r.n(n),s=(r("BXKi"),r("WKVI")),l=r.n(s),d=function(e){var t=e.title,r=e.items,i=e.location,c=e.onHeaderClick,n=e.listClassName,o=e.titleClassName,s=e.subSectionComponent,d=e.itemComponent,p=e.titleComponent;return a.createElement(a.Fragment,{key:t},a.createElement(p,{className:o,onClick:c,title:t}),a.createElement("ul",{className:"list-unstyled "+n+" "+l.a.menuList},r.map((function(e){return e.items?a.createElement(s,Object.assign({},e,{key:e.title,itemComponent:d,location:i})):a.createElement(d,Object.assign({},e,{key:e.title}))}))))};d.defaultProps={onHeaderClick:function(){},listClassName:"",titleClassName:""};var p=d,h=r("3WRX"),u=r.n(h);var m=function(e){var t=e.title,r=function(e,t){if(null==e)return{};var r,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,["title"]);return a.createElement("h6",r,t)},g=function(e){return a.createElement(p,Object.assign({},e,{titleComponent:m,listClassName:u.a.list,titleClassName:u.a.title}))},f=r("P9gp"),v=r.n(f);function S(e,t){if(null==e)return{};var r,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}var b=function(e){var t=e.title,r=S(e,["title"]);return a.createElement("h3",r,t)},y=function(e){var t=e.items,r=e.path,i=e.location,c=S(e,["items","path","location"]),n=!function e(t,r,a){return t?t.some((function(t){var r=t.items,i=t.path;return e(r,i,a)})):a.pathname.endsWith(r)}(t,r,i),o=a.useState(n),s=o[0],l=o[1],d=v.a.title+" "+(s?v.a.collapsed:""),h=v.a.list+" "+(s?v.a.collapsed:"");return a.createElement(p,Object.assign({},c,{items:t,location:i,onHeaderClick:function(){return l(!s)},titleClassName:d,listClassName:h,subSectionComponent:g,titleComponent:b}))};y.defaultProps={path:void 0};var C=y,E=r("FKj8"),w=r.n(E),P=function(e){var t=e.path,r=e.title;return a.createElement("li",{key:t,className:w.a.item},a.createElement(o.a,{activeClassName:w.a.activeLink,to:t},r))},T=function(e){return a.createElement("ul",{className:"list-unstyled "+w.a.singleItem},a.createElement(P,e))},k=function(e){var t=e.sectionComponent,r=e.items,i=e.menuAddon,c=e.location;return a.createElement("div",{className:w.a.leftMenu},i,r.map((function(e){return a.createElement(a.Fragment,{key:e.title},e.items?a.createElement(t,Object.assign({},e,{itemComponent:P,location:c})):a.createElement(T,e),a.createElement("hr",null))})))};k.defaultProps={menuAddon:null};var N=function(e){return a.createElement(c.Location,null,(function(t){var r=t.location;return a.createElement(k,Object.assign({},e,{location:r,sectionComponent:C}))}))},A=r("Rq7c"),R=r.n(A);var D=function(e){var t=e.children,r=function(e,t){if(null==e)return{};var r,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,["children"]);return a.createElement("div",{className:"row"},a.createElement("div",{className:"col-lg-9 col-md-8 order-md-2 docs-content"},a.createElement("div",{className:R.a.content},t)),a.createElement("div",{className:"col-lg-3 col-md-4 order-md-1 main-menu"},a.createElement("div",{className:R.a.sidebar},a.createElement(N,r))))},x=(r("Bu8c"),r("T7D0"),r("htE9")),O=r.n(x),I=function(e){var t=e.technologyName,r=e.sectionName;return a.useEffect((function(){if("demos"!==r){var e=t.split("/")[0];docsearch({apiKey:"4cd7a76d4bc286ae69fe26182a8d4b18",indexName:"devextreme_reactive",inputSelector:"#docsearch",algoliaOptions:{facetFilters:["techno:"+e]},debug:!0})}})),a.createElement("input",{id:"docsearch",className:O.a.search+" form-control",placeholder:"Search..."})},z=r("X+uD");function G(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var L={"react/grid":"Grid","react/chart":"Chart","react/scheduler":"Scheduler","react/common":"Common Concepts","react/core":"Core"},j=function(e){return e[0]===e[0].toUpperCase()},F=function(e){var t,r=e.children,c=e.sectionName,n=e.technologyName;return a.createElement(i.a,{sectionName:"docs"},a.createElement(D,{items:(t=c,[{title:"OVERVIEW",path:"/"+t+"/"}].concat(G(Object.keys(z).reduce((function(e,r){return z[r][t]&&e.push({title:L[r],items:z[r][t].reduce((function(e,a){var i,c,n,o,s=a;return 1===z[r][t].length?s.items:("API Reference"===s.title&&(s=Object.assign({},a,{items:(i=a.items,c=i.filter((function(e){var t=e.title;return j(t)})),n=i.filter((function(e){var t=e.title;return!j(t)})),o=function(e){return e.sort((function(e,t){return e.title.localeCompare(t.title)}))},[].concat(G(o(c)),G(o(n))))})),[].concat(G(e),[s]))}),[])}),e}),[])))),menuAddon:a.createElement(I,{technologyName:n,sectionName:c})},r))};F.defaultProps={children:void 0,technologyName:"react"};t.a=F},"9J3r":function(e,t,r){"use strict";var a=r("7zcn"),i=r("u2Rj"),c=r("2v4T"),n="".startsWith;a(a.P+a.F*r("giLt")("startsWith"),"String",{startsWith:function(e){var t=c(this,e,"startsWith"),r=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return n?n.call(t,a,r):t.slice(r,r+a.length)===a}})},KqCf:function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return l}));r("T7D0"),r("PN9k"),r("T3IU"),r("DZyD"),r("9J3r"),r("rmZQ");var a=r("ERkP"),i=r("Wbzz"),c=r("VF98"),n=r.n(c),o=r("6hyP");var s=function(e){var t,r;function c(t){var r;r=e.call(this,t)||this;var a=t.data.markdownRemark.fields.technology;return r.demosScriptLink=Object(i.withPrefix)("/static/"+a.replace("/","-")+"-demos.js"),r}r=e,(t=c).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var s=c.prototype;return s.componentDidMount=function(){this.demosScript=document.createElement("script"),this.demosScript.src=this.demosScriptLink,document.getElementsByTagName("head")[0].appendChild(this.demosScript)},s.componentWillUnmount=function(){try{window.deinitializeDemos()}catch(e){}document.getElementsByTagName("head")[0].removeChild(this.demosScript)},s.getScriptPath=function(e){var t=e.product;return t?Object(i.withPrefix)("/static/react-"+t+"-demos.js"):this.demosScriptLink},s.render=function(){var e,t=this,r=this.props.data.markdownRemark,i=r.html,c=r.fields,s=c.technology,l=c.section,d=i.replace(/<table>/g,'<table class="table table-bordered table-striped">').replace(/href="([^"]*)"/g,(function(e,t){if(t.startsWith("http")||t.startsWith("#"))return'href="'+t+'"';var r=t.includes("#")?"":"/";return'href="../'+t.replace(".md","")+r+'"'})).replace(/\.embedded-demo\(([^()]*)\)/g,(function(e,r){var a=JSON.parse(r),i=Object.assign({},a,{path:"/demo/"+a.path,scriptPath:t.getScriptPath(a)});return'<div\n            class="embedded-demo"\n            data-options=\''+JSON.stringify(i)+'\'\n          >\n            <div class="loading-shading">\n              <span class="glyphicon glyphicon-refresh loading-icon"></span>\n            </div>\n          </div>'})).replace(/\.npm-tag\(\)/g,(e={}.VERSION_TAG)&&"latest"!==e?"@"+e:""),p=d.split("</h1>")[0].split("</a>")[1];return a.createElement(o.a,{technologyName:s,sectionName:l},a.createElement(n.a,{title:p}),a.createElement("div",{dangerouslySetInnerHTML:{__html:d}}))},c}(a.Component);t.default=s;var l="872751322"},"R+GN":function(e,t,r){"use strict";var a=r("ERkP"),i=r("8pZI"),c=r("Rb52"),n=r("TlT6"),o=r("Wbzz"),s=r("RMIM"),l=r.n(s),d=function(){return a.createElement(o.StaticQuery,{query:"2104210733",render:function(e){return a.createElement("a",{href:"https://github.com/DevExpress/devextreme-reactive/tree/master/CHANGELOG.md#"+e.site.siteMetadata.version,target:"_blank",rel:"noopener noreferrer",className:l.a.versionLink},a.createElement("span",{className:l.a.version},"Version"," ",e.site.siteMetadata.version))},data:n})},p=r("Q0CA"),h=r("YL5U"),u=r.n(h),m=function(e){var t=e.children;return a.createElement("div",{className:u.a.contentContainer},a.createElement("div",{className:"container"},t))};r("BHKL");var g=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props,t=e.sectionName,r=e.children,n="docs"===t;return a.createElement(i.a,null,a.createElement(c.a,{links:a.createElement(a.Fragment,null,n?a.createElement(d,null):null,a.createElement(p.a,null))}),a.createElement(m,null,r))},n}(a.PureComponent);g.defaultProps={children:void 0};t.a=g},TlT6:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"version":"2.7.4"}}}}')},"X+uD":function(e){e.exports=JSON.parse('{"react/grid":{"demos":[{"title":"Demos","items":[{"title":"Integrated Data Shaping","path":"/react/grid/demos/featured/integrated-data-shaping/"},{"title":"Data Editing","path":"/react/grid/demos/featured/data-editing/"},{"title":"Virtual Scrolling","path":"/react/grid/demos/featured/virtual-scrolling/"},{"title":"Redux Integration","path":"/react/grid/demos/featured/redux-integration/"},{"title":"Remote Data","path":"/react/grid/demos/featured/remote-data/"},{"title":"Tree Data","path":"/react/grid/demos/featured/tree-data/"},{"title":"Chart Integration","path":"/react/grid/demos/featured/chart-integration/"}]}],"docs":[{"title":"Guides","items":[{"title":"Getting Started","path":"/react/grid/docs/guides/getting-started/"},{"title":"Plugin Overview","path":"/react/grid/docs/guides/plugin-overview/"},{"title":"Fundamentals","path":"/react/grid/docs/guides/fundamentals/"},{"title":"Controlled and Uncontrolled Modes","path":"/react/grid/docs/guides/controlled-and-uncontrolled-modes/"},{"title":"Data Accessors","path":"/react/grid/docs/guides/data-accessors/"},{"title":"Data Formatting","path":"/react/grid/docs/guides/data-formatting/"},{"title":"Sorting","path":"/react/grid/docs/guides/sorting/"},{"title":"Paging","path":"/react/grid/docs/guides/paging/"},{"title":"Filtering","path":"/react/grid/docs/guides/filtering/"},{"title":"Searching","path":"/react/grid/docs/guides/searching/"},{"title":"Grouping","path":"/react/grid/docs/guides/grouping/"},{"title":"Selection","path":"/react/grid/docs/guides/selection/"},{"title":"Editing","path":"/react/grid/docs/guides/editing/"},{"title":"Editing in a Popup Form","path":"/react/grid/docs/guides/editing-in-popup/"},{"title":"Detail Row","path":"/react/grid/docs/guides/detail-row/"},{"title":"Editing in Detail Row","path":"/react/grid/docs/guides/editing-in-detail-row/"},{"title":"Column Reordering","path":"/react/grid/docs/guides/column-reordering/"},{"title":"Column Resizing","path":"/react/grid/docs/guides/column-resizing/"},{"title":"Column Visibility","path":"/react/grid/docs/guides/column-visibility/"},{"title":"Banded Columns","path":"/react/grid/docs/guides/banded-columns/"},{"title":"Fixed Columns","path":"/react/grid/docs/guides/fixed-columns/"},{"title":"Virtual Scrolling","path":"/react/grid/docs/guides/virtual-scrolling/"},{"title":"Lazy Loading","path":"/react/grid/docs/guides/lazy-loading/"},{"title":"Tree Data","path":"/react/grid/docs/guides/tree-data/"},{"title":"Summary Row","path":"/react/grid/docs/guides/summary-row/"},{"title":"Export","path":"/react/grid/docs/guides/export/"},{"title":"Localization","path":"/react/grid/docs/guides/localization/"},{"title":"TypeScript Support","path":"/react/grid/docs/guides/typescript/"},{"title":"Custom Plugin Development","path":"/react/grid/docs/guides/custom-plugin-development/"}]},{"title":"API Reference","items":[{"title":"Grid","path":"/react/grid/docs/reference/grid/"},{"title":"GridExporter","path":"/react/grid/docs/reference/grid-exporter/"},{"title":"FilteringState","path":"/react/grid/docs/reference/filtering-state/"},{"title":"SortingState","path":"/react/grid/docs/reference/sorting-state/"},{"title":"GroupingState","path":"/react/grid/docs/reference/grouping-state/"},{"title":"PagingState","path":"/react/grid/docs/reference/paging-state/"},{"title":"SearchPanel","path":"/react/grid/docs/reference/search-panel/"},{"title":"SearchState","path":"/react/grid/docs/reference/search-state/"},{"title":"SelectionState","path":"/react/grid/docs/reference/selection-state/"},{"title":"EditingState","path":"/react/grid/docs/reference/editing-state/"},{"title":"RowDetailState","path":"/react/grid/docs/reference/row-detail-state/"},{"title":"TableColumnReordering","path":"/react/grid/docs/reference/table-column-reordering/"},{"title":"IntegratedFiltering","path":"/react/grid/docs/reference/integrated-filtering/"},{"title":"IntegratedSelection","path":"/react/grid/docs/reference/integrated-selection/"},{"title":"IntegratedSorting","path":"/react/grid/docs/reference/integrated-sorting/"},{"title":"IntegratedGrouping","path":"/react/grid/docs/reference/integrated-grouping/"},{"title":"CustomGrouping","path":"/react/grid/docs/reference/custom-grouping/"},{"title":"IntegratedPaging","path":"/react/grid/docs/reference/integrated-paging/"},{"title":"Table","path":"/react/grid/docs/reference/table/"},{"title":"VirtualTable","path":"/react/grid/docs/reference/virtual-table/"},{"title":"TableHeaderRow","path":"/react/grid/docs/reference/table-header-row/"},{"title":"TableSelection","path":"/react/grid/docs/reference/table-selection/"},{"title":"TableFilterRow","path":"/react/grid/docs/reference/table-filter-row/"},{"title":"TableRowDetail","path":"/react/grid/docs/reference/table-row-detail/"},{"title":"TableGroupRow","path":"/react/grid/docs/reference/table-group-row/"},{"title":"TableEditRow","path":"/react/grid/docs/reference/table-edit-row/"},{"title":"TableEditColumn","path":"/react/grid/docs/reference/table-edit-column/"},{"title":"TableBandHeader","path":"/react/grid/docs/reference/table-band-header/"},{"title":"TableColumnResizing","path":"/react/grid/docs/reference/table-column-resizing/"},{"title":"PagingPanel","path":"/react/grid/docs/reference/paging-panel/"},{"title":"GroupingPanel","path":"/react/grid/docs/reference/grouping-panel/"},{"title":"ExportPanel","path":"/react/grid/docs/reference/export-panel/"},{"title":"DragDropProvider","path":"/react/grid/docs/reference/drag-drop-provider/"},{"title":"DataTypeProvider","path":"/react/grid/docs/reference/data-type-provider/"},{"title":"ColumnChooser","path":"/react/grid/docs/reference/column-chooser/"},{"title":"TableColumnVisibility","path":"/react/grid/docs/reference/table-column-visibility/"},{"title":"Toolbar","path":"/react/grid/docs/reference/toolbar/"},{"title":"CustomPaging","path":"/react/grid/docs/reference/custom-paging/"},{"title":"TreeDataState","path":"/react/grid/docs/reference/tree-data-state/"},{"title":"CustomTreeData","path":"/react/grid/docs/reference/custom-tree-data/"},{"title":"TableTreeColumn","path":"/react/grid/docs/reference/table-tree-column/"},{"title":"TableFixedColumns","path":"/react/grid/docs/reference/table-fixed-columns/"},{"title":"SummaryState","path":"/react/grid/docs/reference/summary-state/"},{"title":"IntegratedSummary","path":"/react/grid/docs/reference/integrated-summary/"},{"title":"CustomSummary","path":"/react/grid/docs/reference/custom-summary/"},{"title":"TableSummaryRow","path":"/react/grid/docs/reference/table-summary-row/"},{"title":"VirtualTableState","path":"/react/grid/docs/reference/virtual-table-state/"},{"title":"createRowCache","path":"/react/grid/docs/reference/create-row-cache/"},{"title":"TableInlineCellEditing","path":"/react/grid/docs/reference/table-inline-cell-editing/"}]}]},"react/chart":{"demos":[{"title":"Demos","items":[{"title":"Overview","path":"/react/chart/demos/overview/multiple-axes/"}]},{"title":"Area Chart","items":[{"title":"Simple Area","path":"/react/chart/demos/area/simple-area/"},{"title":"Spline Area","path":"/react/chart/demos/area/spline-area/"},{"title":"Stacked Area","path":"/react/chart/demos/area/stacked-area/"},{"title":"Full-Stacked Area","path":"/react/chart/demos/area/fullstacked-area/"},{"title":"Step Area","path":"/react/chart/demos/area/step-area/"},{"title":"Streamgraph","path":"/react/chart/demos/area/streamgraph/"}]},{"title":"Bar Chart","items":[{"title":"Simple Bar","path":"/react/chart/demos/bar/simple-bar/"},{"title":"Side-By-Side Bars","path":"/react/chart/demos/bar/side-by-side/"},{"title":"Side-By-Side Stacked Bars","path":"/react/chart/demos/bar/side-by-side-stacked-bar/"},{"title":"Stacked Bar","path":"/react/chart/demos/bar/stacked-bar/"},{"title":"Full-Stacked Bar","path":"/react/chart/demos/bar/fullstacked-bar/"},{"title":"Component Customization","path":"/react/chart/demos/bar/component-customization/"},{"title":"Series Interaction","path":"/react/chart/demos/bar/series-interaction/"},{"title":"Rotated Bar","path":"/react/chart/demos/bar/rotated-bar/"}]},{"title":"Line Chart","items":[{"title":"Simple Line","path":"/react/chart/demos/line/line/"},{"title":"Spline","path":"/react/chart/demos/line/spline/"},{"title":"Step Line","path":"/react/chart/demos/line/step-line/"},{"title":"Step Line With Gaps","path":"/react/chart/demos/line/step-line-with-gaps/"},{"title":"Axes Type Customization","path":"/react/chart/demos/line/log-time-axes/"}]},{"title":"Point Chart","items":[{"title":"Scatter Series","path":"/react/chart/demos/point/scatter/"}]},{"title":"Pie Chart","items":[{"title":"Pie Chart","path":"/react/chart/demos/pie/pie/"},{"title":"Doughnut Chart","path":"/react/chart/demos/pie/doughnut/"}]},{"title":"Combination","items":[{"title":"Multiple Axes","path":"/react/chart/demos/combination/multiple-axes/"}]},{"title":"More Features","items":[{"title":"Export","path":"/react/chart/demos/export/demo/"},{"title":"Zoom and Pan","path":"/react/chart/demos/more_features/zoom-and-pan/"}]}],"docs":[{"title":"Guides","items":[{"title":"Getting Started","path":"/react/chart/docs/guides/getting-started/"},{"title":"Plugin Overview","path":"/react/chart/docs/guides/plugin-overview/"},{"title":"Series","path":"/react/chart/docs/guides/series/"},{"title":"Axes","path":"/react/chart/docs/guides/axes/"},{"title":"Legend and Title","path":"/react/chart/docs/guides/legend_title/"},{"title":"Stacked Series","path":"/react/chart/docs/guides/stacked-series/"},{"title":"Palette","path":"/react/chart/docs/guides/palette/"},{"title":"Animation","path":"/react/chart/docs/guides/animation/"},{"title":"Hover and Selection","path":"/react/chart/docs/guides/hover-and-selection/"},{"title":"Tooltip","path":"/react/chart/docs/guides/tooltip/"},{"title":"Zoom and Pan","path":"/react/chart/docs/guides/zoom-and-pan/"},{"title":"Rotated","path":"/react/chart/docs/guides/rotated/"},{"title":"TypeScript Support","path":"/react/chart/docs/guides/typescript/"}]},{"title":"API Reference","items":[{"title":"Animation","path":"/react/chart/docs/reference/animation/"},{"title":"AreaSeries","path":"/react/chart/docs/reference/area-series/"},{"title":"ArgumentAxis","path":"/react/chart/docs/reference/argument-axis/"},{"title":"ArgumentScale","path":"/react/chart/docs/reference/argument-scale/"},{"title":"BarSeries","path":"/react/chart/docs/reference/bar-series/"},{"title":"Chart","path":"/react/chart/docs/reference/chart/"},{"title":"EventTracker","path":"/react/chart/docs/reference/event-tracker/"},{"title":"HoverState","path":"/react/chart/docs/reference/hover-state/"},{"title":"Legend","path":"/react/chart/docs/reference/legend/"},{"title":"LineSeries","path":"/react/chart/docs/reference/line-series/"},{"title":"Palette","path":"/react/chart/docs/reference/palette/"},{"title":"PieSeries","path":"/react/chart/docs/reference/pie-series/"},{"title":"ScatterSeries","path":"/react/chart/docs/reference/scatter-series/"},{"title":"SelectionState","path":"/react/chart/docs/reference/selection-state/"},{"title":"SplineSeries","path":"/react/chart/docs/reference/spline-series/"},{"title":"Stack","path":"/react/chart/docs/reference/stack/"},{"title":"Title","path":"/react/chart/docs/reference/title/"},{"title":"Tooltip","path":"/react/chart/docs/reference/tooltip/"},{"title":"ValueAxis","path":"/react/chart/docs/reference/value-axis/"},{"title":"ValueScale","path":"/react/chart/docs/reference/value-scale/"},{"title":"ZoomAndPan","path":"/react/chart/docs/reference/zoom-and-pan/"}]}]},"react/scheduler":{"demos":[{"title":"Demos","items":[{"title":"Overview","path":"/react/scheduler/demos/featured/overview/"},{"title":"Integrated Data Shaping","path":"/react/scheduler/demos/featured/integrated-data-shaping/"},{"title":"Data Editing","path":"/react/scheduler/demos/featured/data-editing/"},{"title":"Appearance Customization","path":"/react/scheduler/demos/featured/appearance-customization/"},{"title":"Remote Data","path":"/react/scheduler/demos/featured/remote-data/"},{"title":"Redux Integration","path":"/react/scheduler/demos/featured/redux-integration/"}]}],"docs":[{"title":"Guides","items":[{"title":"Getting Started","path":"/react/scheduler/docs/guides/getting-started/"},{"title":"Fundamentals","path":"/react/scheduler/docs/guides/fundamentals/"},{"title":"Views","path":"/react/scheduler/docs/guides/views/"},{"title":"Appointments","path":"/react/scheduler/docs/guides/appointments/"},{"title":"View Switching","path":"/react/scheduler/docs/guides/view-switching/"},{"title":"Date Navigation","path":"/react/scheduler/docs/guides/date-navigation/"},{"title":"Appointment Tooltip","path":"/react/scheduler/docs/guides/appointment-tooltip/"},{"title":"Editing","path":"/react/scheduler/docs/guides/editing/"},{"title":"Resources","path":"/react/scheduler/docs/guides/resources/"},{"title":"Grouping","path":"/react/scheduler/docs/guides/grouping/"},{"title":"Current Time Indication","path":"/react/scheduler/docs/guides/current-time-indication/"},{"title":"Localization","path":"/react/scheduler/docs/guides/localization/"},{"title":"TypeScript Support","path":"/react/scheduler/docs/guides/typescript/"}]},{"title":"API Reference","items":[{"title":"Scheduler","path":"/react/scheduler/docs/reference/scheduler/"},{"title":"ViewState","path":"/react/scheduler/docs/reference/view-state/"},{"title":"DayView","path":"/react/scheduler/docs/reference/day-view/"},{"title":"WeekView","path":"/react/scheduler/docs/reference/week-view/"},{"title":"MonthView","path":"/react/scheduler/docs/reference/month-view/"},{"title":"Appointments","path":"/react/scheduler/docs/reference/appointments/"},{"title":"AppointmentForm","path":"/react/scheduler/docs/reference/appointment-form/"},{"title":"AppointmentTooltip","path":"/react/scheduler/docs/reference/appointment-tooltip/"},{"title":"EditingState","path":"/react/scheduler/docs/reference/editing-state/"},{"title":"DragDropProvider","path":"/react/scheduler/docs/reference/drag-drop-provider/"},{"title":"EditRecurrenceMenu","path":"/react/scheduler/docs/reference/edit-recurrence-menu/"},{"title":"IntegratedEditing","path":"/react/scheduler/docs/reference/integrated-editing/"},{"title":"TodayButton","path":"/react/scheduler/docs/reference/today-button/"},{"title":"Toolbar","path":"/react/scheduler/docs/reference/toolbar/"},{"title":"AllDayPanel","path":"/react/scheduler/docs/reference/all-day-panel/"},{"title":"DateNavigator","path":"/react/scheduler/docs/reference/date-navigator/"},{"title":"ViewSwitcher","path":"/react/scheduler/docs/reference/view-switcher/"},{"title":"ConfirmationDialog","path":"/react/scheduler/docs/reference/confirmation-dialog/"},{"title":"Resources","path":"/react/scheduler/docs/reference/resources/"},{"title":"CurrentTimeIndicator","path":"/react/scheduler/docs/reference/current-time-indicator/"},{"title":"GroupingState","path":"/react/scheduler/docs/reference/grouping-state/"},{"title":"IntegratedGrouping","path":"/react/scheduler/docs/reference/integrated-grouping/"},{"title":"GroupingPanel","path":"/react/scheduler/docs/reference/grouping-panel/"}]}]},"react/common":{"docs":[{"title":"Common Concepts","items":[{"title":"Optimize performance","path":"/react/common/docs/guides/performance-optimization/"},{"title":"Create a Custom Theme","path":"/react/common/docs/guides/custom-theme/"},{"title":"Localization","path":"/react/common/docs/guides/localization/"}]}]},"react/core":{"docs":[{"title":"Guides","items":[{"title":"Fundamentals","path":"/react/core/docs/guides/fundamentals/"},{"title":"Render Markup","path":"/react/core/docs/guides/rendering-markup/"},{"title":"Provide Values","path":"/react/core/docs/guides/providing-values/"},{"title":"Provide Actions","path":"/react/core/docs/guides/providing-actions/"}]},{"title":"API Reference","items":[{"title":"PluginHost","path":"/react/core/docs/reference/plugin-host/"},{"title":"Plugin","path":"/react/core/docs/reference/plugin/"},{"title":"Action","path":"/react/core/docs/reference/action/"},{"title":"Getter","path":"/react/core/docs/reference/getter/"},{"title":"Template","path":"/react/core/docs/reference/template/"},{"title":"TemplatePlaceholder","path":"/react/core/docs/reference/template-placeholder/"},{"title":"TemplateConnector","path":"/react/core/docs/reference/template-connector/"},{"title":"connectProps","path":"/react/core/docs/reference/connect-props/"}]}]}}')}}]);
//# sourceMappingURL=component---src-templates-page-jsx-a18dda39829aff551a04.js.map