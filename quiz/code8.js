gdjs.Q6Code = {};
gdjs.Q6Code.GDQObjects1= [];
gdjs.Q6Code.GDQObjects2= [];
gdjs.Q6Code.GDWrongAnswerObjects1= [];
gdjs.Q6Code.GDWrongAnswerObjects2= [];

gdjs.Q6Code.conditionTrue_0 = {val:false};
gdjs.Q6Code.condition0IsTrue_0 = {val:false};
gdjs.Q6Code.condition1IsTrue_0 = {val:false};
gdjs.Q6Code.condition2IsTrue_0 = {val:false};


gdjs.Q6Code.mapOfGDgdjs_46Q6Code_46GDWrongAnswerObjects1Objects = Hashtable.newFrom({"WrongAnswer": gdjs.Q6Code.GDWrongAnswerObjects1});gdjs.Q6Code.eventsList0xb2158 = function(runtimeScene) {

{


gdjs.Q6Code.condition0IsTrue_0.val = false;
{
gdjs.Q6Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Q6Code.condition0IsTrue_0.val) {
gdjs.Q6Code.GDQObjects1.createFrom(runtimeScene.getObjects("Q"));
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FromStart");
}{for(var i = 0, len = gdjs.Q6Code.GDQObjects1.length ;i < len;++i) {
    gdjs.Q6Code.GDQObjects1[i].setString(gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}
}}

}


{


{
}

}


{


gdjs.Q6Code.condition0IsTrue_0.val = false;
{
gdjs.Q6Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "FromStart");
}if (gdjs.Q6Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CheckWin", true);
}}

}


{


gdjs.Q6Code.condition0IsTrue_0.val = false;
{
gdjs.Q6Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Q6Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}}

}


{

gdjs.Q6Code.GDWrongAnswerObjects1.createFrom(runtimeScene.getObjects("WrongAnswer"));

gdjs.Q6Code.condition0IsTrue_0.val = false;
gdjs.Q6Code.condition1IsTrue_0.val = false;
{
gdjs.Q6Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Q6Code.condition0IsTrue_0.val ) {
{
gdjs.Q6Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q6Code.mapOfGDgdjs_46Q6Code_46GDWrongAnswerObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Q6Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", true);
}}

}


{


{
}

}


}; //End of gdjs.Q6Code.eventsList0xb2158


gdjs.Q6Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Q6Code.GDQObjects1.length = 0;
gdjs.Q6Code.GDQObjects2.length = 0;
gdjs.Q6Code.GDWrongAnswerObjects1.length = 0;
gdjs.Q6Code.GDWrongAnswerObjects2.length = 0;

gdjs.Q6Code.eventsList0xb2158(runtimeScene);
return;
}
gdjs['Q6Code'] = gdjs.Q6Code;
