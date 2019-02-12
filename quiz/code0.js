gdjs.IntroCode = {};
gdjs.IntroCode.GDQObjects1= [];
gdjs.IntroCode.GDQObjects2= [];
gdjs.IntroCode.GDWrongAnswerObjects1= [];
gdjs.IntroCode.GDWrongAnswerObjects2= [];
gdjs.IntroCode.GDWelcomeObjects1= [];
gdjs.IntroCode.GDWelcomeObjects2= [];
gdjs.IntroCode.GDFineprintObjects1= [];
gdjs.IntroCode.GDFineprintObjects2= [];
gdjs.IntroCode.GDBEGINObjects1= [];
gdjs.IntroCode.GDBEGINObjects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};
gdjs.IntroCode.condition2IsTrue_0 = {val:false};


gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDBEGINObjects1Objects = Hashtable.newFrom({"BEGIN": gdjs.IntroCode.GDBEGINObjects1});gdjs.IntroCode.eventsList0xb2158 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}}

}


{

gdjs.IntroCode.GDBEGINObjects1.createFrom(runtimeScene.getObjects("BEGIN"));

gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDBEGINObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "QuestionEngine", true);
}}

}


}; //End of gdjs.IntroCode.eventsList0xb2158


gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.IntroCode.GDQObjects1.length = 0;
gdjs.IntroCode.GDQObjects2.length = 0;
gdjs.IntroCode.GDWrongAnswerObjects1.length = 0;
gdjs.IntroCode.GDWrongAnswerObjects2.length = 0;
gdjs.IntroCode.GDWelcomeObjects1.length = 0;
gdjs.IntroCode.GDWelcomeObjects2.length = 0;
gdjs.IntroCode.GDFineprintObjects1.length = 0;
gdjs.IntroCode.GDFineprintObjects2.length = 0;
gdjs.IntroCode.GDBEGINObjects1.length = 0;
gdjs.IntroCode.GDBEGINObjects2.length = 0;

gdjs.IntroCode.eventsList0xb2158(runtimeScene);
return;
}
gdjs['IntroCode'] = gdjs.IntroCode;
