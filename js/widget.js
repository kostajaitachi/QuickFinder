window.onload = function () { 
	fillActivitiesSection();
	fillPriceRangesSection();
	fillAreaRangesSection();
}

function fillActivitiesSection(){
	
	var level_0_activities = ["First Activity", "Second Activity","Third Activity","Fourth Activity","Fifth Activity","Sixth Activity"];

	for(var i = 0;i<level_0_activities.length;i++){
		var activityTitle = level_0_activities[i];
		var activityContent = level_0_activities[i];	
		var element = document.getElementById("activities-section-level-0");
		var activityContent;
		if(i == 0){
			activityContent = '<div class="active title"><i class="dropdown icon"></i>' + activityTitle + '</div><div class="active content"<p>' + activityContent + '</p></div>';
		}
		else{
			activityContent = '<div class="title"><i class="dropdown icon"></i>' + activityTitle + '</div><div class="content"<p>' + activityContent + '</p></div>';
		}
		element.innerHTML += activityContent;
	}
}

function fillPriceRangesSection(){
	
	var priceRanges = ["Less than 20L", "20L - 40L", "40L - 60L","60L - 80L","80L - 1.2C","1.2C -1.5C","1.5C - 3C","3C - 5C","More than 5C"];
	
	for(var i = 0;i<priceRanges.length;i++){
		var priceRangeTitle = priceRanges[i];
		var element = document.getElementById("price-range-section");
		var priceRangeOptionContent = '<div class="ui checkbox checkbox-option"><input type="checkbox"><label>' + priceRangeTitle  + '</label></div>';
		element.innerHTML += priceRangeOptionContent;
	}
	
	
}

function fillAreaRangesSection(){
	
	var areaRanges = ["Less than 40 A", "40 A to 80 A", "80 A to 120 A", "120 A to 160 A", "160 A to 200 A", "More than 200 A"];
	
	for(var i = 0;i<areaRanges.length;i++){
		var areaRangeTitle = areaRanges[i];
		var element = document.getElementById("area-range-section");
		var areaRangeOptionContent = '<div class="ui checkbox checkbox-option"><input type="checkbox"><label>' + areaRangeTitle  + '</label></div>';
		element.innerHTML += areaRangeOptionContent;
	}
	
	
}ac
