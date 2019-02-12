gdjs.Q7Code = {};
gdjs.Q7Code.GDQObjects1= [];
gdjs.Q7Code.GDQObjects2= [];
gdjs.Q7Code.GDWrongAnswerObjects1= [];
gdjs.Q7Code.GDWrongAnswerObjects2= [];

gdjs.Q7Code.conditionTrue_0 = {val:false};
gdjs.Q7Code.condition0IsTrue_0 = {val:false};
gdjs.Q7Code.condition1IsTrue_0 = {val:false};
gdjs.Q7Code.condition2IsTrue_0 = {val:false};


gdjs.Q7Code.mapOfGDgdjs_46Q7Code_46GDWrongAnswerObjects1Objects = Hashtable.newFrom({"WrongAnswer": gdjs.Q7Code.GDWrongAnswerObjects1});gdjs.Q7Code.eventsList0xb2158 = function(runtimeScene) {

{


gdjs.Q7Code.condition0IsTrue_0.val = false;
{
gdjs.Q7Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Q7Code.condition0IsTrue_0.val) {
gdjs.Q7Code.GDQObjects1.createFrom(runtimeScene.getObjects("Q"));
{for(var i = 0, len = gdjs.Q7Code.GDQObjects1.length ;i < len;++i) {
    gdjs.Q7Code.GDQObjects1[i].setString(gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FromStart");
}}

}


{


gdjs.Q7Code.condition0IsTrue_0.val = false;
{
gdjs.Q7Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "FromStart");
}if (gdjs.Q7Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CheckWin", true);
}}

}


{


gdjs.Q7Code.condition0IsTrue_0.val = false;
{
gdjs.Q7Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Q7Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(1);
}}

}


{

gdjs.Q7Code.GDWrongAnswerObjects1.createFrom(runtimeScene.getObjects("WrongAnswer"));

gdjs.Q7Code.condition0IsTrue_0.val = false;
gdjs.Q7Code.condition1IsTrue_0.val = false;
{
gdjs.Q7Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Q7Code.condition0IsTrue_0.val ) {
{
gdjs.Q7Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q7Code.mapOfGDgdjs_46Q7Code_46GDWrongAnswerObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Q7Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", true);
}}

}


{


{
}

}


}; //End of gdjs.Q7Code.eventsList0xb2158


gdjs.Q7Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Q7Code.GDQObjects1.length = 0;
gdjs.Q7Code.GDQObjects2.length = 0;
gdjs.Q7Code.GDWrongAnswerObjects1.length = 0;
gdjs.Q7Code.GDWrongAnswerObjects2.length = 0;

gdjs.Q7Code.eventsList0xb2158(runtimeScene);
return;
}
gdjs['Q7Code'] = gdjs.Q7Code;
