(this.webpackJsonptreemap=this.webpackJsonptreemap||[]).push([[0],{186:function(e,n,a){e.exports=a(373)},191:function(e,n,a){},192:function(e,n,a){},373:function(e,n,a){"use strict";a.r(n);var t=a(1),i=a.n(t),r=a(47),o=a.n(r),s=(a(191),a(192),a(142)),m=a(48),l=a(49),c=a(54),d=a(53),u=a(141),p=function(e){Object(c.a)(a,e);var n=Object(d.a)(a);function a(){return Object(m.a)(this,a),n.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(u.a,{width:this.props.width,height:this.props.height,data:this.props.data,dataKey:this.props.dataKey,type:this.props.type,ratio:this.props.ratio,stroke:this.props.stroke,fill:this.props.fill,animationBegin:this.props.animationBegin,animationDuration:this.props.animationDuration,animationEasing:this.props.animationEasing}))}}]),a}(t.PureComponent),h=[{name:"axis",children:[{name:"Axes",size:1302},{name:"Axis",size:24593},{name:"AxisGridLine",size:652},{name:"AxisLabel",size:636},{name:"CartesianAxes",size:6703}]},{name:"controls",children:[{name:"AnchorControl",size:2138},{name:"ClickControl",size:3824},{name:"Control",size:1353},{name:"ControlList",size:4665},{name:"DragControl",size:2649},{name:"ExpandControl",size:2832},{name:"HoverControl",size:4896},{name:"IControl",size:763},{name:"PanZoomControl",size:5222},{name:"SelectionControl",size:7862},{name:"TooltipControl",size:8435}]},{name:"data",children:[{name:"Data",size:20544},{name:"DataList",size:19788},{name:"DataSprite",size:10349},{name:"EdgeSprite",size:3301},{name:"NodeSprite",size:19382},{name:"render",children:[{name:"ArrowType",size:698},{name:"EdgeRenderer",size:5569},{name:"IRenderer",size:353},{name:"ShapeRenderer",size:2247}]},{name:"ScaleBinding",size:11275},{name:"Tree",size:7147},{name:"TreeBuilder",size:9930}]},{name:"events",children:[{name:"DataEvent",size:7313},{name:"SelectionEvent",size:6880},{name:"TooltipEvent",size:3701},{name:"VisualizationEvent",size:2117}]},{name:"legend",children:[{name:"Legend",size:20859},{name:"LegendItem",size:4614},{name:"LegendRange",size:10530}]},{name:"operator",children:[{name:"distortion",children:[{name:"BifocalDistortion",size:4461},{name:"Distortion",size:6314},{name:"FisheyeDistortion",size:3444}]},{name:"encoder",children:[{name:"ColorEncoder",size:3179},{name:"Encoder",size:4060},{name:"PropertyEncoder",size:4138},{name:"ShapeEncoder",size:1690},{name:"SizeEncoder",size:1830}]},{name:"filter",children:[{name:"FisheyeTreeFilter",size:5219},{name:"GraphDistanceFilter",size:3165},{name:"VisibilityFilter",size:3509}]},{name:"IOperator",size:1286},{name:"label",children:[{name:"Labeler",size:9956},{name:"RadialLabeler",size:3899},{name:"StackedAreaLabeler",size:3202}]},{name:"layout",children:[{name:"AxisLayout",size:6725},{name:"BundledEdgeRouter",size:3727},{name:"CircleLayout",size:9317},{name:"CirclePackingLayout",size:12003},{name:"DendrogramLayout",size:4853},{name:"ForceDirectedLayout",size:8411},{name:"IcicleTreeLayout",size:4864},{name:"IndentedTreeLayout",size:3174},{name:"Layout",size:7881},{name:"NodeLinkTreeLayout",size:12870},{name:"PieLayout",size:2728},{name:"RadialTreeLayout",size:12348},{name:"RandomLayout",size:870},{name:"StackedAreaLayout",size:9121},{name:"TreeMapLayout",size:9191}]},{name:"Operator",size:2490},{name:"OperatorList",size:5248},{name:"OperatorSequence",size:4190},{name:"OperatorSwitch",size:2581},{name:"SortOperator",size:2023}]}],z=i.a.Component;var g=function(e){Object(c.a)(a,e);var n=Object(d.a)(a);function a(e){var t;return Object(m.a)(this,a),(t=n.call(this,e)).receiveEvent=void 0,t.state={width:400,height:200,data:h,dataKey:"size",type:"flat",ratio:4/3,stroke:"#fff",fill:"#8884d8",animationBegin:0,animationDuration:100,animationEasing:"linear",invalidDataSet:!1},t.receiveEvent=function(e){var n=e.data.properties,a=+n.get("width"),i=+n.get("height"),r=n.get("dataSet"),o=function(e){if(e){var n=e.columns;if(3===n.length)return("TEXT"===n[0].type||"LABEL"===n[0].type)&&("TEXT"===n[1].type||"LABEL"===n[1].type)&&"NUMBER"===n[2].type}return!1}(r),m=n.get("datakey"),l=n.get("type"),c=+n.get("ratio"),d=n.get("stroke"),u=n.get("fill"),p=+n.get("animationbegin"),h=+n.get("animationduration"),z=n.get("animationeasing"),g=[],v=[];if(o){r.data.forEach((function(e){"null"!==e[1]&&v.push({name:e[1],children:[{name:e[0],size:+e[2]}]})}));var y=v.reduce((function(e,n){return e[n.name]=[].concat(Object(s.a)(e[n.name]||[]),[n.children[0]]),e}),{});for(var E in y)y.hasOwnProperty(E)&&g.push({name:E,children:y[E]})}v=g,t.setState({width:a||400,height:i||200,data:v,dataKey:m||"size",type:l||"flat",ratio:c||4/3,stroke:d?"#"+d:"#fff",fill:u?"#"+u:"#8884d8",animationBegin:p||0,animationDuration:h||100,animationEasing:z||"linear",invalidDataSet:!o})},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("message",this.receiveEvent,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("message",this.receiveEvent,!1)}},{key:"render",value:function(){return i.a.createElement("div",{style:{width:"auto",height:"auto"}},this.state.invalidDataSet?i.a.createElement("div",null,i.a.createElement("em",null,i.a.createElement("strong",null,"Provided dataset is not valid. Please check Treemap Component instructions for more details. Showing sample data."))):null,i.a.createElement(p,this.state))}}]),a}(z);var v=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[186,1,2]]]);
//# sourceMappingURL=main.9ab8bbc9.chunk.js.map