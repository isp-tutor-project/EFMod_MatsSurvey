
namespace EFTut_Suppl.EFMod_MatsSurvey {

    export class SMatsPost4 {

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
            this.setNavMode(CONST.NAVBACK, CONST.NAVSCENE);
        }

        public $preShowScene() {                   

            let isComplete = this.getSceneValue("prompted");
            
            if(isComplete) {
                this.Ssubmit.show();
            }
            else {
                this.Ssubmit.hide();
            }
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

                case "track1":
                    switch(cueID) {
                        
                        case "$start":
                            this.addFeature("FTR_PROMPTED");
                            break;

                        case "$end":
                            break;
                    }
                    break;                
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
            
            let group:string  = target.slice(0,3);
            let button:string = target.slice(3);

            switch(group) {
                case "Sg1":
                case "Sg2":
                    this.setSceneValue(group, "true");
                    if(button.length)
                        this.setSceneValue("selection:" + group, button);
                    break;
            }

            switch(target) {
                case "Ssubmit":
                    this.addFeature("FTR_SUBMIT");
                    this.nextTrack("$onAction:"+this.graphState);
                    break;
            }

            let isComplete = this.querySceneProp(["Sg1","Sg2"]);
            this.setSceneValue("complete", isComplete);     
            
            if(isComplete && !this.getSceneValue("prompted")) {
                this.nextTrack("$onAction:"+this.graphState);
                this.setSceneValue("prompted", true);
                this.Ssubmit.show();
            }
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