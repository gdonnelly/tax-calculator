d3.csv("data/income.csv",function(a,b){function c(a){var b,c=$("#"+a.category).width(),d=$("body").width(),e={top:20,right:40,bottom:70,left:35},f=c-e.left-e.right;b="households"===a.category&&d>400?400-e.top-e.bottom:280-e.top-e.bottom;var g=d3.scale.ordinal().rangeRoundBands([0,f],.3),h=d3.scale.ordinal(),i=d3.scale.linear().range([b,0]).nice(),j=d3.scale.ordinal().range(["#7acbc3","#0767ab"]),k=d3.svg.axis().scale(g).orient("bottom"),l=d3.svg.axis().scale(i).orient("left").innerTickSize(-f).outerTickSize(0).tickPadding(10).tickFormat(d3.format("%")),m=d3.select("#"+a.category).append("svg").attr("width",f+e.left+e.right).attr("height",b+e.top+e.bottom).append("g").attr("transform","translate("+e.left+","+e.top+")");g.domain(a.values.map(function(a){return a.income_level})),h.domain(d3.extent(a.values[0].values,function(a){return a.region})).rangeRoundBands([0,g.rangeBand()]),i.domain([0,.2]),l.tickValues([.05,.1,.15,.2]),m.append("g").attr("class","x axis").attr("transform","translate(0,"+b+")").call(k).selectAll("text").attr("y",10).attr("x",9).attr("dy",".35em").attr("transform","rotate(40)").style("text-anchor","start"),m.append("g").attr("class","y axis").call(l);var n=m.selectAll(".income").data(a.values).enter().append("g").attr("class","income").attr("id",function(a){return a.income_level.replace(/[^0-9&&^.]/g,"")}).attr("transform",function(a){return"translate("+g(a.income_level)+",0)"});n.selectAll("rect").data(function(a){return a.values}).enter().append("rect").attr("width",h.rangeBand()).attr("x",function(a){return h(a.region)}).attr("class",function(a){return a.region}).attr("y",function(a){return i(a.value)}).attr("height",function(a){return b-i(a.value)}).style("fill",function(a){return j(a.region)}),d>450&&n.selectAll("text").data(function(a){return a.values}).enter().append("text").attr("class","bar-labels").text(function(a){return d3.format(".1f")(100*a.value)}).attr("text-anchor",function(a){return"US"!=a.region,"middle"}).attr("dy","0.2em").attr("x",function(a,b){return"US"!=a.region?h(a.region)+2:h(a.region)+h.rangeBand()-2}).attr("y",function(a){return i(a.value)-8});var o=_.pluck(a.values[0].values,"region"),p=m.selectAll(".legend").data(o.slice().reverse()).enter().append("g").attr("class","legend").attr("transform",function(a,b){return"translate(0,"+20*b+")"});p.append("rect").attr("x",f-18).attr("width",18).attr("height",18).style("fill",j),p.append("text").attr("x",f-24).attr("y",9).attr("dy",".35em").style("text-anchor","end").text(function(a){return a.toUpperCase()})}function d(){k.offsetHeight>0&&$("#example").animate({height:"0px",opacity:"0"},"fast");var a=i.value.replace(/[^0-9&&^.]/g,""),b=Math.floor(a/1e3);if(isNaN(b))return alert("Please enter an income value"),!1;var c=b.toString(),d=_.last(_.values(_.find(gainc,{HH_Income:c}))),e=_.last(_.values(_.find(usinc,{HH_Income:c})));if(b>328&&373>b)var d="98%",e="98%";if(b>=373&&394>b)var d="98%",e="99%";if(b>=394)var d="99%",e="99%";var g,h,l=parseInt(a);f.forEach(function(a,b){_m=a.replace("k","000").replace(/[^0-9-k]/g,"").split("-"),_m=b>0?parseInt(_m[0]):0,b!==f.length-1?(h=parseInt(f[b+1].replace("k","000").replace(/[^0-9-k]/g,"").split("-")[0]),l>=_m&&h>l&&(g=a)):l>_m&&(g=a)});var m=g.replace(/[^0-9&&^.]/g,"");d3.selectAll(".income").transition().style("opacity",
	function(a){return 
		d3.select(this)
		.attr("id")===m?"1":"0.2"}),
		j.innerHTML="<p>With an annual household income of <span class='income'>$"
		+d3.format(",")(a)+",</span> your household makes more than <span class='ga-result'>"
		+d+"</span> of metro Atlanta households and  <span class='us-result'>"+e+"</span> 
		of households in the U.S.</p>"
		,j.innerHTML+="<p class='smaller'>Your income falls in the <strong>"+g+"</strong> 
		range, which is highlighted on each chart to show how your income 
		stacks up against the rest of metro Atlanta as well as the U.S.</p>"}if(a)throw
		 a;var e=d3.keys(b[0]).filter(function(a){return"income"!==a&&"region"!=a}),
		 f=_.uniq(_.pluck(b,"income")),g=e.map(function(a)
		 {return{category:a,values:f.map(function(c)
		 	{var d=_.where(b,{income:c});return{income_level:c,values:d.map(function(b)
		 		{return{region:b.region,value:+b[a]}})}})}});g.forEach(function(a){c(a)});var h=document.getElementById("calculate"),i=document.getElementById("income_input"),j=document.getElementById("resultGA"),k=document.getElementById("example");h.addEventListener("click",d),window.addEventListener("keydown",function(a){var b=a.keyCode?a.keyCode:a.which;13==b&&(""==i.value?alert("Please enter an income value"):d())})});