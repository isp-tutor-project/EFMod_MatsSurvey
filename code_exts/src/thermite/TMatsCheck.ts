//*********************************************************************************
//
//  Copyright(c) 2008,2018 Kevin Willows. All Rights Reserved
//
//	License: Proprietary
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//  THE SOFTWARE.
//
//*********************************************************************************

/// <reference path="../../../../dist/TutorEngineOne.d.ts" />

//**Imports

import { TRadioButton }     from "thermite/TRadioButton";
import { CUtil } 			from "util/CUtil";

import MovieClip     	  = createjs.MovieClip;
import Text     		  = createjs.Text;


export class TMatsCheck extends TRadioButton
{	
	//************ Stage Symbols
	
	//************ Stage Symbols
    
    
	constructor()
	{
		super();
		this.init6();
	}

/*  ###########  START CREATEJS SUBCLASS SUPPORT ##########  */
/* ######################################################### */

	public TMatsCheckInitialize() {

		this.TRadioButtonInitialize.call(this);
		this.init6();
	}

	public initialize() {

		this.TRadioButtonInitialize.call(this);		
		this.init6();
	}

	private init6() {
		
		this.traceMode = true;
        if(this.traceMode) CUtil.trace("TMatsCheck:Constructor");
	}

/* ######################################################### */
/*  ###########  END CREATEJS SUBCLASS SUPPORT ###########   */


    
//*************** Serialization
	

    public deSerializeObj(objData:any) : void
    {
        console.log("deserializing: CheckButton Control");

        objData.btnData = objData.btnData || {};

        objData.btnData.elements = [{"name":"Scheck_FB", "sibling":"Slabel"},
                                    {"name":"Scheck_BG", "sibling":"Scheck_FB"},
                                    {"name":"Scheck_HR", "sibling":"Scheck_BG"}];

        super.deSerializeObj(objData);				
    }

//*************** Serialization


}
