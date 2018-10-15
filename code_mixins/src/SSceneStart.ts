
namespace EFTut_Suppl.EFMod_MatsSurvey {

    export class SSceneStart {

        // This is a special signature to avoid the typescript error "because <type> has no index signature."
        // on syntax like => this[<element name>]
        // 
        [key: string]: any;


        //***********************************************
        // Tutor graph methods
        //
        
        public $preCreateScene() {
        }

        public $onCreateScene() {            
            this.setSceneValue("complete", false);      
        }

        public $onEnterScene() {
        }
        
        public $preEnterScene() {
            // Next button only - navigate scene tracks
            // 
            this.setNavMode(CONST.NAVNEXT, CONST.NAVSCENE);
        }

        public $preShowScene() {                   
        }        

        public $preHideScene() {            
        }

        public $onExitScene() {
        }
        
        public $demoInitScene() {
        }

        public $logScene() {
        }

        public $rewindScene() {
        }

        public $resolveTemplate(templID:string) { 
        }

        public $handleEvent(compID:string) {

            console.log(compID);
        }

        //***********************************************
        // Scene graph methods
        //
        public $nodePreEnter(nodeId:string) {

        }


        public $nodePreExit(nodeId:string) {

        }

        public $nodeAction(actionId:string) : void {
            
            switch(actionId) {
            }
        }
        
        public $nodeConstraint(constrainId:string) : boolean {

            let result:boolean = false;

            switch(constrainId) {
            }

            return result;
        }

        // Track methods.
        // 
        public $cuePoints(trackID:string, cueID:string) {
            
            switch(trackID) {
            }
        }

        public $timedEvents(id:string) {
        }

        //***********************************************
        // Scene State methods
        //

        public $queryFinished() : boolean {             

            let result:boolean = this.getSceneValue("complete"); 

            return  result; 
        }


        public $onAction(target:string) {         
            
            switch(target) {
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


        public $onSelect(target:string) {            

            switch(target) {
            }
        }


        public $onClick(target:string) {            

            switch(target) {
            }
        }

    }
}