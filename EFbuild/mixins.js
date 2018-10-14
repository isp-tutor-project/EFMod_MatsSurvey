var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_MatsSurvey;
    (function (EFMod_MatsSurvey) {
        class CONST {
        }
        CONST.TUTORCONTAINER = "STutorContainer";
        CONST.NAVNONE = 0;
        CONST.NAVBACK = 1;
        CONST.NAVNEXT = 2;
        CONST.NAVBOTH = 3;
        CONST.NEXTSCENE = "nextbutton";
        CONST.PREVSCENE = "prevbutton";
        CONST.HIDE = false;
        CONST.SHOW = true;
        CONST.NAVSCENE = "SCENE";
        CONST.NAVTUTOR = "TUTOR";
        CONST.MOUSE_MOVE = "mousemove";
        CONST.MOUSE_DOWN = "mousedown";
        CONST.MOUSE_UP = "mouseup";
        CONST.MOUSE_CLICK = "click";
        CONST.DOUBLE_CLICK = "dblclick";
        CONST.ALL = null;
        CONST.CLICK = "click";
        CONST.CHANGED = "changed";
        CONST.FTRS_ALL = null;
        CONST.VAR_FTR = "varsel";
        CONST.FTR_PRE = "FTR_PRE";
        CONST.FTR_DEV = "FTR_DEV";
        CONST.YELLOW = "#FFFF5488";
        CONST.BLUE = "#B6FFFF88";
        CONST.GREEN = "#54FF0088";
        CONST.RED = "#FF005488";
        CONST.NONE = "";
        EFMod_MatsSurvey.CONST = CONST;
    })(EFMod_MatsSurvey = EFTut_Suppl.EFMod_MatsSurvey || (EFTut_Suppl.EFMod_MatsSurvey = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_MatsSurvey;
    (function (EFMod_MatsSurvey) {
        class $Common {
            $preCreateScene() { }
            $onCreateScene() { }
            $preEnterScene() { }
            $onEnterScene() { }
            $preExitScene() { }
            $onExitScene() { }
            $preShowScene() { }
            $preHideScene() { }
            $demoInitScene() { }
            $logScene() { }
            $rewindScene() { }
            $resolveTemplate(templID) { }
            $handleEvent() { }
            $nodePreEnter(nodeId) { }
            $nodePreExit(nodeId) { }
            $nodeAction(actionId) { }
            $nodeConstraint(constrainId) {
                let result = false;
                return result;
            }
            $cuePoints(id) { }
            $timedEvents(id) { }
            $queryFinished() {
                let stateComplete = true;
                return stateComplete;
            }
            $updateNav() {
                if (!this.$queryFinished())
                    this.enableNext(false);
                else
                    this.enableNext(true);
            }
        }
        EFMod_MatsSurvey.$Common = $Common;
    })(EFMod_MatsSurvey = EFTut_Suppl.EFMod_MatsSurvey || (EFTut_Suppl.EFMod_MatsSurvey = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_MatsSurvey;
    (function (EFMod_MatsSurvey) {
        class Globals {
        }
        EFMod_MatsSurvey.Globals = Globals;
    })(EFMod_MatsSurvey = EFTut_Suppl.EFMod_MatsSurvey || (EFTut_Suppl.EFMod_MatsSurvey = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_MatsSurvey;
    (function (EFMod_MatsSurvey) {
        class SMatsIntro {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                break;
                            case "$end":
                                this.Sg1b5.setCheck(true);
                                break;
                        }
                        break;
                    case "track2":
                        switch (cueID) {
                            case "$start":
                                this.setSceneValue("complete", true);
                                break;
                            case "$end":
                                break;
                        }
                        break;
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                    case "Sg1":
                    case "Sg2":
                    case "Sg3":
                    case "Sg4":
                        this.setSceneValue(target, "true");
                        break;
                }
                this.setSceneValue("complete", this.querySceneProp(["Sg1", "Sg2", "Sg3", "Sg4"]));
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_MatsSurvey.SMatsIntro = SMatsIntro;
    })(EFMod_MatsSurvey = EFTut_Suppl.EFMod_MatsSurvey || (EFTut_Suppl.EFMod_MatsSurvey = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_MatsSurvey;
    (function (EFMod_MatsSurvey) {
        class SMatsPost1 {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_MatsSurvey.CONST.NAVNEXT, EFMod_MatsSurvey.CONST.NAVSCENE);
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                    case "Sg1":
                    case "Sg2":
                    case "Sg3":
                    case "Sg4":
                        this.setSceneValue(target, "true");
                        break;
                }
                this.setSceneValue("complete", this.querySceneProp(["Sg1", "Sg2", "Sg3", "Sg4"]));
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_MatsSurvey.SMatsPost1 = SMatsPost1;
    })(EFMod_MatsSurvey = EFTut_Suppl.EFMod_MatsSurvey || (EFTut_Suppl.EFMod_MatsSurvey = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_MatsSurvey;
    (function (EFMod_MatsSurvey) {
        class SMatsPost2 {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_MatsSurvey.CONST.NAVBOTH, EFMod_MatsSurvey.CONST.NAVSCENE);
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                    case "Sg1":
                    case "Sg2":
                    case "Sg3":
                    case "Sg4":
                        this.setSceneValue(target, "true");
                        break;
                }
                this.setSceneValue("complete", this.querySceneProp(["Sg1", "Sg2", "Sg3", "Sg4"]));
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_MatsSurvey.SMatsPost2 = SMatsPost2;
    })(EFMod_MatsSurvey = EFTut_Suppl.EFMod_MatsSurvey || (EFTut_Suppl.EFMod_MatsSurvey = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_MatsSurvey;
    (function (EFMod_MatsSurvey) {
        class SMatsPost3 {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_MatsSurvey.CONST.NAVBOTH, EFMod_MatsSurvey.CONST.NAVSCENE);
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                    case "Sg1":
                    case "Sg2":
                    case "Sg3":
                    case "Sg4":
                        this.setSceneValue(target, "true");
                        break;
                }
                this.setSceneValue("complete", this.querySceneProp(["Sg1", "Sg2", "Sg3", "Sg4"]));
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_MatsSurvey.SMatsPost3 = SMatsPost3;
    })(EFMod_MatsSurvey = EFTut_Suppl.EFMod_MatsSurvey || (EFTut_Suppl.EFMod_MatsSurvey = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_MatsSurvey;
    (function (EFMod_MatsSurvey) {
        class SMatsPost4 {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_MatsSurvey.CONST.NAVBACK, EFMod_MatsSurvey.CONST.NAVSCENE);
            }
            $preShowScene() {
                let isComplete = this.getSceneValue("prompted");
                if (isComplete) {
                    this.Ssubmit.show();
                }
                else {
                    this.Ssubmit.hide();
                }
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                    case "Sg1":
                    case "Sg2":
                        this.setSceneValue(target, "true");
                        break;
                    case "Ssubmit":
                        this.nextTrack("$onAction:" + this.graphState);
                        break;
                }
                let isComplete = this.querySceneProp(["Sg1", "Sg2"]);
                this.setSceneValue("complete", isComplete);
                if (isComplete && !this.getSceneValue("prompted")) {
                    this.nextTrack("$onAction:" + this.graphState);
                    this.setSceneValue("prompted", true);
                    this.Ssubmit.show();
                    this.addFeature("FTR_COMPLETE");
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_MatsSurvey.SMatsPost4 = SMatsPost4;
    })(EFMod_MatsSurvey = EFTut_Suppl.EFMod_MatsSurvey || (EFTut_Suppl.EFMod_MatsSurvey = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_MatsSurvey;
    (function (EFMod_MatsSurvey) {
        class SMatsPre1 {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_MatsSurvey.CONST.NAVNEXT, EFMod_MatsSurvey.CONST.NAVSCENE);
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                    case "Sg1":
                    case "Sg2":
                    case "Sg3":
                    case "Sg4":
                        this.setSceneValue(target, "true");
                        break;
                }
                this.setSceneValue("complete", this.querySceneProp(["Sg1", "Sg2", "Sg3", "Sg4"]));
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_MatsSurvey.SMatsPre1 = SMatsPre1;
    })(EFMod_MatsSurvey = EFTut_Suppl.EFMod_MatsSurvey || (EFTut_Suppl.EFMod_MatsSurvey = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_MatsSurvey;
    (function (EFMod_MatsSurvey) {
        class SMatsPre2 {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_MatsSurvey.CONST.NAVBOTH, EFMod_MatsSurvey.CONST.NAVSCENE);
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                    case "Sg1":
                    case "Sg2":
                    case "Sg3":
                    case "Sg4":
                        this.setSceneValue(target, "true");
                        break;
                }
                this.setSceneValue("complete", this.querySceneProp(["Sg1", "Sg2", "Sg3", "Sg4"]));
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_MatsSurvey.SMatsPre2 = SMatsPre2;
    })(EFMod_MatsSurvey = EFTut_Suppl.EFMod_MatsSurvey || (EFTut_Suppl.EFMod_MatsSurvey = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_MatsSurvey;
    (function (EFMod_MatsSurvey) {
        class SMatsPre3 {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_MatsSurvey.CONST.NAVBOTH, EFMod_MatsSurvey.CONST.NAVSCENE);
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                    case "Sg1":
                    case "Sg2":
                    case "Sg3":
                    case "Sg4":
                        this.setSceneValue(target, "true");
                        break;
                }
                this.setSceneValue("complete", this.querySceneProp(["Sg1", "Sg2", "Sg3", "Sg4"]));
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_MatsSurvey.SMatsPre3 = SMatsPre3;
    })(EFMod_MatsSurvey = EFTut_Suppl.EFMod_MatsSurvey || (EFTut_Suppl.EFMod_MatsSurvey = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_MatsSurvey;
    (function (EFMod_MatsSurvey) {
        class SMatsPre4 {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_MatsSurvey.CONST.NAVBACK, EFMod_MatsSurvey.CONST.NAVSCENE);
            }
            $preShowScene() {
                let isComplete = this.getSceneValue("prompted");
                if (isComplete) {
                    this.Ssubmit.show();
                }
                else {
                    this.Ssubmit.hide();
                }
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                    case "track1":
                        switch (cueID) {
                            case "$start":
                                this.addFeature("FTR_COMPLETE");
                                break;
                            case "$end":
                                break;
                        }
                        break;
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                    case "Sg1":
                    case "Sg2":
                        this.setSceneValue(target, "true");
                        break;
                    case "Ssubmit":
                        this.nextTrack("$onAction:" + this.graphState);
                        break;
                }
                let isComplete = this.querySceneProp(["Sg1", "Sg2"]);
                this.setSceneValue("complete", isComplete);
                if (isComplete && !this.getSceneValue("prompted")) {
                    this.nextTrack("$onAction:" + this.graphState);
                    this.setSceneValue("prompted", true);
                    this.Ssubmit.show();
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_MatsSurvey.SMatsPre4 = SMatsPre4;
    })(EFMod_MatsSurvey = EFTut_Suppl.EFMod_MatsSurvey || (EFTut_Suppl.EFMod_MatsSurvey = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_MatsSurvey;
    (function (EFMod_MatsSurvey) {
        class SNavigator {
            $preCreateScene() {
                this.setNavMode(EFMod_MatsSurvey.CONST.NAVNEXT, EFMod_MatsSurvey.CONST.NAVSCENE);
                this.addFeature(EFMod_MatsSurvey.CONST.FTR_DEV);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (cueID) {
                    case "$start":
                        console.log("executing CuePoint START");
                        break;
                    case "$end":
                        console.log("executing CuePoint END");
                        break;
                }
            }
            $timedEvents(id) {
            }
        }
        EFMod_MatsSurvey.SNavigator = SNavigator;
    })(EFMod_MatsSurvey = EFTut_Suppl.EFMod_MatsSurvey || (EFTut_Suppl.EFMod_MatsSurvey = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_MatsSurvey;
    (function (EFMod_MatsSurvey) {
        class SScene1 {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                    case "Sbutton1":
                        this.delFeature("FTR_POST");
                        this.addFeature("FTR_PRE");
                        break;
                    case "Sbutton2":
                        this.delFeature("FTR_PRE");
                        this.addFeature("FTR_POST");
                        break;
                    case "Sg1":
                        this.setSceneValue(target, "true");
                        break;
                }
                this.setSceneValue("complete", this.querySceneProp(["Sg1"]));
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_MatsSurvey.SScene1 = SScene1;
    })(EFMod_MatsSurvey = EFTut_Suppl.EFMod_MatsSurvey || (EFTut_Suppl.EFMod_MatsSurvey = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
//# sourceMappingURL=mixins.js.map