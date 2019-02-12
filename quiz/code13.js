gdjs.WinnerCode = {};
gdjs.WinnerCode.GDQObjects1= [];
gdjs.WinnerCode.GDQObjects2= [];
gdjs.WinnerCode.GDWrongAnswerObjects1= [];
gdjs.WinnerCode.GDWrongAnswerObjects2= [];

gdjs.WinnerCode.conditionTrue_0 = {val:false};
gdjs.WinnerCode.condition0IsTrue_0 = {val:false};
gdjs.WinnerCode.condition1IsTrue_0 = {val:false};


gdjs.WinnerCode.eventsList0xb2158 = function(runtimeScene) {

{


gdjs.WinnerCode.condition0IsTrue_0.val = false;
{
gdjs.WinnerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.WinnerCode.condition0IsTrue_0.val) {
{gdjs.evtTools.facebookInstantGames.setPlayerScore("HighScore", 1000000, gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Wait");
}}

}


{


{
{gdjs.evtTools.facebookInstantGames.getPlayerEntry("HighScore", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
}}

}


{


gdjs.WinnerCode.condition0IsTrue_0.val = false;
{
gdjs.WinnerCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "Wait");
}if (gdjs.WinnerCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", true);
}}

}


}; //End of gdjs.WinnerCode.eventsList0xb2158


gdjs.WinnerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.WinnerCode.GDQObjects1.length = 0;
gdjs.WinnerCode.GDQObjects2.length = 0;
gdjs.WinnerCode.GDWrongAnswerObjects1.length = 0;
gdjs.WinnerCode.GDWrongAnswerObjects2.length = 0;

gdjs.WinnerCode.eventsList0xb2158(runtimeScene);
return;
}
gdjs['WinnerCode'] = gdjs.WinnerCode;
