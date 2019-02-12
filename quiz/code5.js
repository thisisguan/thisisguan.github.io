gdjs.Q3Code = {};
gdjs.Q3Code.GDQObjects1= [];
gdjs.Q3Code.GDQObjects2= [];
gdjs.Q3Code.GDWrongAnswerObjects1= [];
gdjs.Q3Code.GDWrongAnswerObjects2= [];

gdjs.Q3Code.conditionTrue_0 = {val:false};
gdjs.Q3Code.condition0IsTrue_0 = {val:false};
gdjs.Q3Code.condition1IsTrue_0 = {val:false};
gdjs.Q3Code.condition2IsTrue_0 = {val:false};


gdjs.Q3Code.mapOfGDgdjs_46Q3Code_46GDWrongAnswerObjects1Objects = Hashtable.newFrom({"WrongAnswer": gdjs.Q3Code.GDWrongAnswerObjects1});gdjs.Q3Code.eventsList0xb2158 = function(runtimeScene) {

{


gdjs.Q3Code.condition0IsTrue_0.val = false;
{
gdjs.Q3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Q3Code.condition0IsTrue_0.val) {
gdjs.Q3Code.GDQObjects1.createFrom(runtimeScene.getObjects("Q"));
{for(var i = 0, len = gdjs.Q3Code.GDQObjects1.length ;i < len;++i) {
    gdjs.Q3Code.GDQObjects1[i].setString(gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FromStart");
}}

}


{


gdjs.Q3Code.condition0IsTrue_0.val = false;
{
gdjs.Q3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "FromStart");
}if (gdjs.Q3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CheckWin", false);
}}

}


{


gdjs.Q3Code.condition0IsTrue_0.val = false;
{
gdjs.Q3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Q3Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}}

}


{

gdjs.Q3Code.GDWrongAnswerObjects1.createFrom(runtimeScene.getObjects("WrongAnswer"));

gdjs.Q3Code.condition0IsTrue_0.val = false;
gdjs.Q3Code.condition1IsTrue_0.val = false;
{
gdjs.Q3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Q3Code.condition0IsTrue_0.val ) {
{
gdjs.Q3Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q3Code.mapOfGDgdjs_46Q3Code_46GDWrongAnswerObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Q3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", true);
}}

}


{


{
}

}


}; //End of gdjs.Q3Code.eventsList0xb2158


gdjs.Q3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Q3Code.GDQObjects1.length = 0;
gdjs.Q3Code.GDQObjects2.length = 0;
gdjs.Q3Code.GDWrongAnswerObjects1.length = 0;
gdjs.Q3Code.GDWrongAnswerObjects2.length = 0;

gdjs.Q3Code.eventsList0xb2158(runtimeScene);
return;
}
gdjs['Q3Code'] = gdjs.Q3Code;
