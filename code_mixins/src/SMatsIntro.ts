
namespace EFTut_Suppl.EFMod_MatsSurvey {

    export class SMatsIntro {

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
                case "track1":
                    switch(cueID) {
                        
                        case "$start":
                            break;
                        case "$end":
                            this.Sg1b5.setCheck(true);
                            break;
                    }
                    break;

                case "track2":
                    switch(cueID) {
                        
                        case "$start":
                            this.setSceneValue("complete", true);      
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
            
            switch(target) {
                case "Sg1":
                case "Sg2":
                case "Sg3":
                case "Sg4":
                    this.setSceneValue(target, "true");
                    break;
            }

            this.setSceneValue("complete", this.querySceneProp(["Sg1","Sg2","Sg3","Sg4"]));      
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