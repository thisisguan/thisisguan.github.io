gdjs.QuestionsCode = {};
gdjs.QuestionsCode.GDQObjects1= [];
gdjs.QuestionsCode.GDQObjects2= [];
gdjs.QuestionsCode.GDWrongAnswerObjects1= [];
gdjs.QuestionsCode.GDWrongAnswerObjects2= [];
gdjs.QuestionsCode.GDAnswer3Objects1= [];
gdjs.QuestionsCode.GDAnswer3Objects2= [];
gdjs.QuestionsCode.GDAnswer2Objects1= [];
gdjs.QuestionsCode.GDAnswer2Objects2= [];
gdjs.QuestionsCode.GDAnswer1Objects1= [];
gdjs.QuestionsCode.GDAnswer1Objects2= [];
gdjs.QuestionsCode.GDQuestionObjects1= [];
gdjs.QuestionsCode.GDQuestionObjects2= [];

gdjs.QuestionsCode.conditionTrue_0 = {val:false};
gdjs.QuestionsCode.condition0IsTrue_0 = {val:false};
gdjs.QuestionsCode.condition1IsTrue_0 = {val:false};


gdjs.QuestionsCode.eventsList0xb2158 = function(runtimeScene) {

{


gdjs.QuestionsCode.condition0IsTrue_0.val = false;
{
gdjs.QuestionsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.QuestionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "3Seconds");
}{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(3, 8));
}}

}


{


{
gdjs.QuestionsCode.GDQuestionObjects1.createFrom(runtimeScene.getObjects("Question"));
{for(var i = 0, len = gdjs.QuestionsCode.GDQuestionObjects1.length ;i < len;++i) {
    gdjs.QuestionsCode.GDQuestionObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.QuestionsCode.condition0IsTrue_0.val = false;
{
gdjs.QuestionsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "3Seconds");
}if (gdjs.QuestionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Wrong", true);
}}

}


}; //End of gdjs.QuestionsCode.eventsList0xb2158


gdjs.QuestionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.QuestionsCode.GDQObjects1.length = 0;
gdjs.QuestionsCode.GDQObjects2.length = 0;
gdjs.QuestionsCode.GDWrongAnswerObjects1.length = 0;
gdjs.QuestionsCode.GDWrongAnswerObjects2.length = 0;
gdjs.QuestionsCode.GDAnswer3Objects1.length = 0;
gdjs.QuestionsCode.GDAnswer3Objects2.length = 0;
gdjs.QuestionsCode.GDAnswer2Objects1.length = 0;
gdjs.QuestionsCode.GDAnswer2Objects2.length = 0;
gdjs.QuestionsCode.GDAnswer1Objects1.length = 0;
gdjs.QuestionsCode.GDAnswer1Objects2.length = 0;
gdjs.QuestionsCode.GDQuestionObjects1.length = 0;
gdjs.QuestionsCode.GDQuestionObjects2.length = 0;

gdjs.QuestionsCode.eventsList0xb2158(runtimeScene);
return;
}
gdjs['QuestionsCode'] = gdjs.QuestionsCode;
