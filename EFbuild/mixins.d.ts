declare namespace EFTut_Suppl.EFMod_MatsSurvey {
    class CONST {
        static readonly TUTORCONTAINER = "STutorContainer";
        static readonly NAVNONE = 0;
        static readonly NAVBACK = 1;
        static readonly NAVNEXT = 2;
        static readonly NAVBOTH = 3;
        static readonly NEXTSCENE = "nextbutton";
        static readonly PREVSCENE = "prevbutton";
        static readonly HIDE = false;
        static readonly SHOW = true;
        static readonly NAVSCENE = "SCENE";
        static readonly NAVTUTOR = "TUTOR";
        static readonly MOUSE_MOVE: string;
        static readonly MOUSE_DOWN: string;
        static readonly MOUSE_UP: string;
        static readonly MOUSE_CLICK: string;
        static readonly DOUBLE_CLICK: string;
        static readonly ALL: string;
        static readonly CLICK: string;
        static readonly CHANGED: string;
        static readonly FTRS_ALL: any;
        static readonly VAR_FTR = "varsel";
        static readonly FTR_PRE: any;
        static readonly FTR_DEV: any;
        static readonly YELLOW = "#FFFF5488";
        static readonly BLUE = "#B6FFFF88";
        static readonly GREEN = "#54FF0088";
        static readonly RED = "#FF005488";
        static readonly NONE = "";
    }
}
declare namespace EFTut_Suppl.EFMod_MatsSurvey {
    class $Common {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $preEnterScene(): void;
        $onEnterScene(): void;
        $preExitScene(): void;
        $onExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(id: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $canGoBack(): boolean;
        $updateNav(): void;
    }
}
declare namespace EFTut_Suppl.EFMod_MatsSurvey {
    class Globals {
        [key: string]: any;
    }
}
declare namespace EFTut_Suppl.EFMod_MatsSurvey {
    class SMatsIntro {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $onExitScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onAction(target: string): void;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_MatsSurvey {
    class SMatsPost1 {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $onExitScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onAction(target: string): void;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_MatsSurvey {
    class SMatsPost2 {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $onExitScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onAction(target: string): void;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_MatsSurvey {
    class SMatsPost3 {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $onExitScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onAction(target: string): void;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_MatsSurvey {
    class SMatsPost4 {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $onExitScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onAction(target: string): void;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_MatsSurvey {
    class SMatsPre1 {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $onExitScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onAction(target: string): void;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_MatsSurvey {
    class SMatsPre2 {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $onExitScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onAction(target: string): void;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_MatsSurvey {
    class SMatsPre3 {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $onExitScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onAction(target: string): void;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_MatsSurvey {
    class SMatsPre4 {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $onExitScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onAction(target: string): void;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_MatsSurvey {
    class SNavigator {
        [key: string]: any;
        $preCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_MatsSurvey {
    class SSceneEnd {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $onExitScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onAction(target: string): void;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_MatsSurvey {
    class SSceneStart {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $onExitScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onAction(target: string): void;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
