gdjs.Q2Code = {};
gdjs.Q2Code.GDQObjects1= [];
gdjs.Q2Code.GDQObjects2= [];
gdjs.Q2Code.GDWrongAnswerObjects1= [];
gdjs.Q2Code.GDWrongAnswerObjects2= [];

gdjs.Q2Code.conditionTrue_0 = {val:false};
gdjs.Q2Code.condition0IsTrue_0 = {val:false};
gdjs.Q2Code.condition1IsTrue_0 = {val:false};
gdjs.Q2Code.condition2IsTrue_0 = {val:false};


gdjs.Q2Code.mapOfGDgdjs_46Q2Code_46GDWrongAnswerObjects1Objects = Hashtable.newFrom({"WrongAnswer": gdjs.Q2Code.GDWrongAnswerObjects1});gdjs.Q2Code.eventsList0xb2158 = function(runtimeScene) {

{


gdjs.Q2Code.condition0IsTrue_0.val = false;
{
gdjs.Q2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Q2Code.condition0IsTrue_0.val) {
gdjs.Q2Code.GDQObjects1.createFrom(runtimeScene.getObjects("Q"));
{for(var i = 0, len = gdjs.Q2Code.GDQObjects1.length ;i < len;++i) {
    gdjs.Q2Code.GDQObjects1[i].setString(gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FromStart");
}}

}


{


gdjs.Q2Code.condition0IsTrue_0.val = false;
{
gdjs.Q2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "FromStart");
}if (gdjs.Q2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CheckWin", true);
}}

}


{


gdjs.Q2Code.condition0IsTrue_0.val = false;
{
gdjs.Q2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Q2Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}}

}


{

gdjs.Q2Code.GDWrongAnswerObjects1.createFrom(runtimeScene.getObjects("WrongAnswer"));

gdjs.Q2Code.condition0IsTrue_0.val = false;
gdjs.Q2Code.condition1IsTrue_0.val = false;
{
gdjs.Q2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Q2Code.condition0IsTrue_0.val ) {
{
gdjs.Q2Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q2Code.mapOfGDgdjs_46Q2Code_46GDWrongAnswerObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Q2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", true);
}}

}


{


{
}

}


}; //End of gdjs.Q2Code.eventsList0xb2158


gdjs.Q2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Q2Code.GDQObjects1.length = 0;
gdjs.Q2Code.GDQObjects2.length = 0;
gdjs.Q2Code.GDWrongAnswerObjects1.length = 0;
gdjs.Q2Code.GDWrongAnswerObjects2.length = 0;

gdjs.Q2Code.eventsList0xb2158(runtimeScene);
return;
}
gdjs['Q2Code'] = gdjs.Q2Code;
