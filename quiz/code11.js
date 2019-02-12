gdjs.QuestionEngineCode = {};
gdjs.QuestionEngineCode.GDQObjects1= [];
gdjs.QuestionEngineCode.GDQObjects2= [];
gdjs.QuestionEngineCode.GDWrongAnswerObjects1= [];
gdjs.QuestionEngineCode.GDWrongAnswerObjects2= [];

gdjs.QuestionEngineCode.conditionTrue_0 = {val:false};
gdjs.QuestionEngineCode.condition0IsTrue_0 = {val:false};
gdjs.QuestionEngineCode.condition1IsTrue_0 = {val:false};
gdjs.QuestionEngineCode.condition2IsTrue_0 = {val:false};


gdjs.QuestionEngineCode.eventsList0xb2158 = function(runtimeScene) {

{


gdjs.QuestionEngineCode.condition0IsTrue_0.val = false;
{
gdjs.QuestionEngineCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.QuestionEngineCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(1, 8));
}}

}


{


gdjs.QuestionEngineCode.condition0IsTrue_0.val = false;
gdjs.QuestionEngineCode.condition1IsTrue_0.val = false;
{
gdjs.QuestionEngineCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.QuestionEngineCode.condition0IsTrue_0.val ) {
{
gdjs.QuestionEngineCode.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1);
}}
if (gdjs.QuestionEngineCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Q1", true);
}}

}


{


gdjs.QuestionEngineCode.condition0IsTrue_0.val = false;
gdjs.QuestionEngineCode.condition1IsTrue_0.val = false;
{
gdjs.QuestionEngineCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.QuestionEngineCode.condition0IsTrue_0.val ) {
{
gdjs.QuestionEngineCode.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0);
}}
if (gdjs.QuestionEngineCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "QuestionEngine", true);
}}

}


{


gdjs.QuestionEngineCode.condition0IsTrue_0.val = false;
gdjs.QuestionEngineCode.condition1IsTrue_0.val = false;
{
gdjs.QuestionEngineCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
}if ( gdjs.QuestionEngineCode.condition0IsTrue_0.val ) {
{
gdjs.QuestionEngineCode.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1);
}}
if (gdjs.QuestionEngineCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Q2", true);
}}

}


{


gdjs.QuestionEngineCode.condition0IsTrue_0.val = false;
gdjs.QuestionEngineCode.condition1IsTrue_0.val = false;
{
gdjs.QuestionEngineCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
}if ( gdjs.QuestionEngineCode.condition0IsTrue_0.val ) {
{
gdjs.QuestionEngineCode.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0);
}}
if (gdjs.QuestionEngineCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "QuestionEngine", true);
}}

}


{


gdjs.QuestionEngineCode.condition0IsTrue_0.val = false;
gdjs.QuestionEngineCode.condition1IsTrue_0.val = false;
{
gdjs.QuestionEngineCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
}if ( gdjs.QuestionEngineCode.condition0IsTrue_0.val ) {
{
gdjs.QuestionEngineCode.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1);
}}
if (gdjs.QuestionEngineCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Q3", true);
}}

}


{


gdjs.QuestionEngineCode.condition0IsTrue_0.val = false;
gdjs.QuestionEngineCode.condition1IsTrue_0.val = false;
{
gdjs.QuestionEngineCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
}if ( gdjs.QuestionEngineCode.condition0IsTrue_0.val ) {
{
gdjs.QuestionEngineCode.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0);
}}
if (gdjs.QuestionEngineCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "QuestionEngine", true);
}}

}


{


gdjs.QuestionEngineCode.condition0IsTrue_0.val = false;
gdjs.QuestionEngineCode.condition1IsTrue_0.val = false;
{
gdjs.QuestionEngineCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 4;
}if ( gdjs.QuestionEngineCode.condition0IsTrue_0.val ) {
{
gdjs.QuestionEngineCode.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1);
}}
if (gdjs.QuestionEngineCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Q4", true);
}}

}


{


gdjs.QuestionEngineCode.condition0IsTrue_0.val = false;
gdjs.QuestionEngineCode.condition1IsTrue_0.val = false;
{
gdjs.QuestionEngineCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 4;
}if ( gdjs.QuestionEngineCode.condition0IsTrue_0.val ) {
{
gdjs.QuestionEngineCode.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0);
}}
if (gdjs.QuestionEngineCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "QuestionEngine", true);
}}

}


{


gdjs.QuestionEngineCode.condition0IsTrue_0.val = false;
gdjs.QuestionEngineCode.condition1IsTrue_0.val = false;
{
gdjs.QuestionEngineCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 5;
}if ( gdjs.QuestionEngineCode.condition0IsTrue_0.val ) {
{
gdjs.QuestionEngineCode.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1);
}}
if (gdjs.QuestionEngineCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Q5", true);
}}

}


{


gdjs.QuestionEngineCode.condition0IsTrue_0.val = false;
gdjs.QuestionEngineCode.condition1IsTrue_0.val = false;
{
gdjs.QuestionEngineCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 5;
}if ( gdjs.QuestionEngineCode.condition0IsTrue_0.val ) {
{
gdjs.QuestionEngineCode.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 0);
}}
if (gdjs.QuestionEngineCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "QuestionEngine", true);
}}

}


{


gdjs.QuestionEngineCode.condition0IsTrue_0.val = false;
gdjs.QuestionEngineCode.condition1IsTrue_0.val = false;
{
gdjs.QuestionEngineCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 6;
}if ( gdjs.QuestionEngineCode.condition0IsTrue_0.val ) {
{
gdjs.QuestionEngineCode.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1);
}}
if (gdjs.QuestionEngineCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Q6", true);
}}

}


{


gdjs.QuestionEngineCode.condition0IsTrue_0.val = false;
gdjs.QuestionEngineCode.condition1IsTrue_0.val = false;
{
gdjs.QuestionEngineCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 6;
}if ( gdjs.QuestionEngineCode.condition0IsTrue_0.val ) {
{
gdjs.QuestionEngineCode.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0);
}}
if (gdjs.QuestionEngineCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "QuestionEngine", true);
}}

}


{


gdjs.QuestionEngineCode.condition0IsTrue_0.val = false;
gdjs.QuestionEngineCode.condition1IsTrue_0.val = false;
{
gdjs.QuestionEngineCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 7;
}if ( gdjs.QuestionEngineCode.condition0IsTrue_0.val ) {
{
gdjs.QuestionEngineCode.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1);
}}
if (gdjs.QuestionEngineCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Q7", true);
}}

}


{


gdjs.QuestionEngineCode.condition0IsTrue_0.val = false;
gdjs.QuestionEngineCode.condition1IsTrue_0.val = false;
{
gdjs.QuestionEngineCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 7;
}if ( gdjs.QuestionEngineCode.condition0IsTrue_0.val ) {
{
gdjs.QuestionEngineCode.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0);
}}
if (gdjs.QuestionEngineCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "QuestionEngine", true);
}}

}


{


gdjs.QuestionEngineCode.condition0IsTrue_0.val = false;
gdjs.QuestionEngineCode.condition1IsTrue_0.val = false;
{
gdjs.QuestionEngineCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 8;
}if ( gdjs.QuestionEngineCode.condition0IsTrue_0.val ) {
{
gdjs.QuestionEngineCode.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == 1);
}}
if (gdjs.QuestionEngineCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Q8", true);
}}

}


{


gdjs.QuestionEngineCode.condition0IsTrue_0.val = false;
gdjs.QuestionEngineCode.condition1IsTrue_0.val = false;
{
gdjs.QuestionEngineCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 8;
}if ( gdjs.QuestionEngineCode.condition0IsTrue_0.val ) {
{
gdjs.QuestionEngineCode.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) == 0);
}}
if (gdjs.QuestionEngineCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "QuestionEngine", true);
}}

}


}; //End of gdjs.QuestionEngineCode.eventsList0xb2158


gdjs.QuestionEngineCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.QuestionEngineCode.GDQObjects1.length = 0;
gdjs.QuestionEngineCode.GDQObjects2.length = 0;
gdjs.QuestionEngineCode.GDWrongAnswerObjects1.length = 0;
gdjs.QuestionEngineCode.GDWrongAnswerObjects2.length = 0;

gdjs.QuestionEngineCode.eventsList0xb2158(runtimeScene);
return;
}
gdjs['QuestionEngineCode'] = gdjs.QuestionEngineCode;
