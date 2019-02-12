gdjs.Q8Code = {};
gdjs.Q8Code.GDQObjects1= [];
gdjs.Q8Code.GDQObjects2= [];
gdjs.Q8Code.GDWrongAnswerObjects1= [];
gdjs.Q8Code.GDWrongAnswerObjects2= [];

gdjs.Q8Code.conditionTrue_0 = {val:false};
gdjs.Q8Code.condition0IsTrue_0 = {val:false};
gdjs.Q8Code.condition1IsTrue_0 = {val:false};
gdjs.Q8Code.condition2IsTrue_0 = {val:false};


gdjs.Q8Code.mapOfGDgdjs_46Q8Code_46GDWrongAnswerObjects1Objects = Hashtable.newFrom({"WrongAnswer": gdjs.Q8Code.GDWrongAnswerObjects1});gdjs.Q8Code.eventsList0xb2158 = function(runtimeScene) {

{


gdjs.Q8Code.condition0IsTrue_0.val = false;
{
gdjs.Q8Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Q8Code.condition0IsTrue_0.val) {
gdjs.Q8Code.GDQObjects1.createFrom(runtimeScene.getObjects("Q"));
{for(var i = 0, len = gdjs.Q8Code.GDQObjects1.length ;i < len;++i) {
    gdjs.Q8Code.GDQObjects1[i].setString(gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FromStart");
}}

}


{


gdjs.Q8Code.condition0IsTrue_0.val = false;
{
gdjs.Q8Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "FromStart");
}if (gdjs.Q8Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CheckWin", true);
}}

}


{

gdjs.Q8Code.GDWrongAnswerObjects1.createFrom(runtimeScene.getObjects("WrongAnswer"));

gdjs.Q8Code.condition0IsTrue_0.val = false;
gdjs.Q8Code.condition1IsTrue_0.val = false;
{
gdjs.Q8Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Q8Code.condition0IsTrue_0.val ) {
{
gdjs.Q8Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q8Code.mapOfGDgdjs_46Q8Code_46GDWrongAnswerObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Q8Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", true);
}}

}


{


gdjs.Q8Code.condition0IsTrue_0.val = false;
{
gdjs.Q8Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Q8Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(1);
}}

}


}; //End of gdjs.Q8Code.eventsList0xb2158


gdjs.Q8Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Q8Code.GDQObjects1.length = 0;
gdjs.Q8Code.GDQObjects2.length = 0;
gdjs.Q8Code.GDWrongAnswerObjects1.length = 0;
gdjs.Q8Code.GDWrongAnswerObjects2.length = 0;

gdjs.Q8Code.eventsList0xb2158(runtimeScene);
return;
}
gdjs['Q8Code'] = gdjs.Q8Code;
