/*
[rewrite_local]

# keep 修改时间
^https:\/\/api\.gotokeep\.com\/snooker\/v5\/training-detail\/\S url script-response-body https://raw.githubusercontent.com/mabinglei183/Script/main/keep.js

[mitm] 

hostname = api.gotokeep.com

*/
var obj = JSON.parse($response.body);

obj.data.cardList[1].data.logInfo.duration=1234;
obj.data.cardList[1].data.logInfo.durationPercentage=99.317460317460316;
obj.data.cardList[1].data.logInfo.calorie=170;
obj.data.cardList[1].data.logInfo.caloriePercentage=99.936170212765958;
obj.data.cardList[1].data.logInfo.endTimeText="2022\/06\/20 10:56";
obj.data.cardList[1].data.logInfo.workoutFinishCount=1;
obj.data.cardList[1].data.workoutInfo.workoutName="20分钟全程站立全身燃...";

$done({body: JSON.stringify(obj)});
