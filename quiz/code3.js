gdjs.Q1Code = {};
gdjs.Q1Code.GDQObjects1= [];
gdjs.Q1Code.GDQObjects2= [];
gdjs.Q1Code.GDWrongAnswerObjects1= [];
gdjs.Q1Code.GDWrongAnswerObjects2= [];

gdjs.Q1Code.conditionTrue_0 = {val:false};
gdjs.Q1Code.condition0IsTrue_0 = {val:false};
gdjs.Q1Code.condition1IsTrue_0 = {val:false};
gdjs.Q1Code.condition2IsTrue_0 = {val:false};


gdjs.Q1Code.mapOfGDgdjs_46Q1Code_46GDWrongAnswerObjects1Objects = Hashtable.newFrom({"WrongAnswer": gdjs.Q1Code.GDWrongAnswerObjects1});gdjs.Q1Code.mapOfGDgdjs_46Q1Code_46GDWrongAnswerObjects1Objects = Hashtable.newFrom({"WrongAnswer": gdjs.Q1Code.GDWrongAnswerObjects1});gdjs.Q1Code.eventsList0xb2158 = function(runtimeScene) {

{


gdjs.Q1Code.condition0IsTrue_0.val = false;
{
gdjs.Q1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Q1Code.condition0IsTrue_0.val) {
gdjs.Q1Code.GDQObjects1.createFrom(runtimeScene.getObjects("Q"));
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FromStart");
}{for(var i = 0, len = gdjs.Q1Code.GDQObjects1.length ;i < len;++i) {
    gdjs.Q1Code.GDQObjects1[i].setString(gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}
}}

}


{


gdjs.Q1Code.condition0IsTrue_0.val = false;
{
gdjs.Q1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "FromStart");
}if (gdjs.Q1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CheckWin", true);
}}

}


{

gdjs.Q1Code.GDWrongAnswerObjects1.createFrom(runtimeScene.getObjects("WrongAnswer"));

gdjs.Q1Code.condition0IsTrue_0.val = false;
gdjs.Q1Code.condition1IsTrue_0.val = false;
{
gdjs.Q1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Q1Code.condition0IsTrue_0.val ) {
{
gdjs.Q1Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q1Code.mapOfGDgdjs_46Q1Code_46GDWrongAnswerObjects1Objects, runtimeScene, true, true);
}}
if (gdjs.Q1Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{

gdjs.Q1Code.GDWrongAnswerObjects1.createFrom(runtimeScene.getObjects("WrongAnswer"));

gdjs.Q1Code.condition0IsTrue_0.val = false;
gdjs.Q1Code.condition1IsTrue_0.val = false;
{
gdjs.Q1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Q1Code.condition0IsTrue_0.val ) {
{
gdjs.Q1Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Q1Code.mapOfGDgdjs_46Q1Code_46GDWrongAnswerObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Q1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", true);
}}

}


}; //End of gdjs.Q1Code.eventsList0xb2158


gdjs.Q1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Q1Code.GDQObjects1.length = 0;
gdjs.Q1Code.GDQObjects2.length = 0;
gdjs.Q1Code.GDWrongAnswerObjects1.length = 0;
gdjs.Q1Code.GDWrongAnswerObjects2.length = 0;

gdjs.Q1Code.eventsList0xb2158(runtimeScene);
return;
}
gdjs['Q1Code'] = gdjs.Q1Code;
