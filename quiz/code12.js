gdjs.CheckWinCode = {};
gdjs.CheckWinCode.GDQObjects1= [];
gdjs.CheckWinCode.GDQObjects2= [];
gdjs.CheckWinCode.GDWrongAnswerObjects1= [];
gdjs.CheckWinCode.GDWrongAnswerObjects2= [];

gdjs.CheckWinCode.conditionTrue_0 = {val:false};
gdjs.CheckWinCode.condition0IsTrue_0 = {val:false};
gdjs.CheckWinCode.condition1IsTrue_0 = {val:false};


gdjs.CheckWinCode.eventsList0xb2158 = function(runtimeScene) {

{


gdjs.CheckWinCode.condition0IsTrue_0.val = false;
{
gdjs.CheckWinCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CheckWinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FromStart");
}}

}


{


gdjs.CheckWinCode.condition0IsTrue_0.val = false;
{
gdjs.CheckWinCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1);
}if (gdjs.CheckWinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "QuestionEngine", true);
}}

}


{


gdjs.CheckWinCode.condition0IsTrue_0.val = false;
{
gdjs.CheckWinCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1);
}if (gdjs.CheckWinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "QuestionEngine", true);
}}

}


{


gdjs.CheckWinCode.condition0IsTrue_0.val = false;
{
gdjs.CheckWinCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1);
}if (gdjs.CheckWinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "QuestionEngine", true);
}}

}


{


gdjs.CheckWinCode.condition0IsTrue_0.val = false;
{
gdjs.CheckWinCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1);
}if (gdjs.CheckWinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "QuestionEngine", true);
}}

}


{


gdjs.CheckWinCode.condition0IsTrue_0.val = false;
{
gdjs.CheckWinCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1);
}if (gdjs.CheckWinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "QuestionEngine", true);
}}

}


{


gdjs.CheckWinCode.condition0IsTrue_0.val = false;
{
gdjs.CheckWinCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1);
}if (gdjs.CheckWinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "QuestionEngine", true);
}}

}


{


gdjs.CheckWinCode.condition0IsTrue_0.val = false;
{
gdjs.CheckWinCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1);
}if (gdjs.CheckWinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "QuestionEngine", true);
}}

}


{


gdjs.CheckWinCode.condition0IsTrue_0.val = false;
{
gdjs.CheckWinCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == 1);
}if (gdjs.CheckWinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "QuestionEngine", true);
}}

}


{


gdjs.CheckWinCode.condition0IsTrue_0.val = false;
{
gdjs.CheckWinCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "FromStart");
}if (gdjs.CheckWinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Winner", true);
}}

}


{



}


}; //End of gdjs.CheckWinCode.eventsList0xb2158


gdjs.CheckWinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.CheckWinCode.GDQObjects1.length = 0;
gdjs.CheckWinCode.GDQObjects2.length = 0;
gdjs.CheckWinCode.GDWrongAnswerObjects1.length = 0;
gdjs.CheckWinCode.GDWrongAnswerObjects2.length = 0;

gdjs.CheckWinCode.eventsList0xb2158(runtimeScene);
return;
}
gdjs['CheckWinCode'] = gdjs.CheckWinCode;
