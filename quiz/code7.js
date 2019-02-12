gdjs.Q5Code = {};
gdjs.Q5Code.GDQObjects1= [];
gdjs.Q5Code.GDQObjects2= [];
gdjs.Q5Code.GDWrongAnswerObjects1= [];
gdjs.Q5Code.GDWrongAnswerObjects2= [];

gdjs.Q5Code.conditionTrue_0 = {val:false};
gdjs.Q5Code.condition0IsTrue_0 = {val:false};
gdjs.Q5Code.condition1IsTrue_0 = {val:false};
gdjs.Q5Code.condition2IsTrue_0 = {val:false};


gdjs.Q5Code.mapOfGDgdjs_46Q5Code_46GDWrongAnswerObjects1Objects = Hashtable.newFrom({"WrongAnswer": gdjs.Q5Code.GDWrongAnswerObjects1});gdjs.Q5Code.eventsList0xb2158 = function(runtimeScene) {

{


gdjs.Q5Code.condition0IsTrue_0.val = false;
{
gdjs.Q5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Q5Code.condition0IsTrue_0.val) {
gdjs.Q5Code.GDQObjects1.createFrom(runtimeScene.getObjects("Q"));
{for(var i = 0, len = gdjs.Q5Code.GDQObjects1.length ;i < len;++i) {
    gdjs.Q5Code.GDQObjects1[i].setString(gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FromStart");
}}

}


{


gdjs.Q5Code.condition0IsTrue_0.val = false;
{
gdjs.Q5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "FromStart");
}if (gdjs.Q5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CheckWin", false);
}}

}


{


gdjs.Q5Code.condition0IsTrue_0.val = false;
{
gdjs.Q5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Q5Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(1);
}}

}


{

gdjs.Q5Code.GDWrongAnswerObjects1.createFrom(runtimeScene.getObjects("WrongAnswer"));

gdjs.Q5Code.condition0IsTrue_0.val = false;
gdjs.Q5Code.condition1IsTrue_0.val = false;
{
gdjs.Q5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Q5Code.condition0IsTrue_0.val ) {
{
gdjs.Q5Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q5Code.mapOfGDgdjs_46Q5Code_46GDWrongAnswerObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Q5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", true);
}}

}


{


{
}

}


}; //End of gdjs.Q5Code.eventsList0xb2158


gdjs.Q5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Q5Code.GDQObjects1.length = 0;
gdjs.Q5Code.GDQObjects2.length = 0;
gdjs.Q5Code.GDWrongAnswerObjects1.length = 0;
gdjs.Q5Code.GDWrongAnswerObjects2.length = 0;

gdjs.Q5Code.eventsList0xb2158(runtimeScene);
return;
}
gdjs['Q5Code'] = gdjs.Q5Code;
