gdjs.Q4Code = {};
gdjs.Q4Code.GDQObjects1= [];
gdjs.Q4Code.GDQObjects2= [];
gdjs.Q4Code.GDWrongAnswerObjects1= [];
gdjs.Q4Code.GDWrongAnswerObjects2= [];

gdjs.Q4Code.conditionTrue_0 = {val:false};
gdjs.Q4Code.condition0IsTrue_0 = {val:false};
gdjs.Q4Code.condition1IsTrue_0 = {val:false};
gdjs.Q4Code.condition2IsTrue_0 = {val:false};


gdjs.Q4Code.mapOfGDgdjs_46Q4Code_46GDWrongAnswerObjects1Objects = Hashtable.newFrom({"WrongAnswer": gdjs.Q4Code.GDWrongAnswerObjects1});gdjs.Q4Code.eventsList0xb2158 = function(runtimeScene) {

{


gdjs.Q4Code.condition0IsTrue_0.val = false;
{
gdjs.Q4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Q4Code.condition0IsTrue_0.val) {
gdjs.Q4Code.GDQObjects1.createFrom(runtimeScene.getObjects("Q"));
{for(var i = 0, len = gdjs.Q4Code.GDQObjects1.length ;i < len;++i) {
    gdjs.Q4Code.GDQObjects1[i].setString(gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FromStart");
}}

}


{


gdjs.Q4Code.condition0IsTrue_0.val = false;
{
gdjs.Q4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "FromStart");
}if (gdjs.Q4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CheckWin", true);
}}

}


{


gdjs.Q4Code.condition0IsTrue_0.val = false;
{
gdjs.Q4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Q4Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}}

}


{

gdjs.Q4Code.GDWrongAnswerObjects1.createFrom(runtimeScene.getObjects("WrongAnswer"));

gdjs.Q4Code.condition0IsTrue_0.val = false;
gdjs.Q4Code.condition1IsTrue_0.val = false;
{
gdjs.Q4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Q4Code.condition0IsTrue_0.val ) {
{
gdjs.Q4Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q4Code.mapOfGDgdjs_46Q4Code_46GDWrongAnswerObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Q4Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", true);
}}

}


{


{
}

}


}; //End of gdjs.Q4Code.eventsList0xb2158


gdjs.Q4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Q4Code.GDQObjects1.length = 0;
gdjs.Q4Code.GDQObjects2.length = 0;
gdjs.Q4Code.GDWrongAnswerObjects1.length = 0;
gdjs.Q4Code.GDWrongAnswerObjects2.length = 0;

gdjs.Q4Code.eventsList0xb2158(runtimeScene);
return;
}
gdjs['Q4Code'] = gdjs.Q4Code;
