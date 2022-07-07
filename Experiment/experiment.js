// new
var mySceneTLX;
var mySceneTLY;
var mySceneBRX;
var mySceneBRY;
var mySceneW;
var mySceneH;
var myCenterX;
var myCenterY;
var meterTop;
var arrow1;
var arrow1A;
var arrow2;
var arrow3;
var arrow4;
var arrow5;
var arrow6;
var arrow2A;
var arrow3A;
var arrow4A;
var arrow5A;
var arrow6A;
var camefrom="0";
var helpContent;
//////////////////////////////////////
var R1=1.0;
var R2=2.0;
var R12;
var R12string;
var refflevel1=3.00;
var refflevel1string="3.00";
///////
var R3=3.0;
var refflevel2=0.55;
var refflevel2string="0.55";
var R123;
var R123string;

///////////////////
var refflevel3=2.10;
var refflevel3string="2.10";
var R4=4.0;
var R34;
var R34string;
var R1234;
var R1234string;
/////////////
var refflevel4=1.91;
var refflevel4string="1.91";
var R123;
var R123string;
/////////

var refflevel5=2.61;
var refflevel5string="2.61";
var R5=5.0;
var R45;
var R45string;
var R12345;
var R12345string;
var flag=0;







///////////////////////////////////////
var nextlevel=true;
var levelbtn;
var currentLevel="Level 1";
var level2btn;
var presentLevelGiveUp="Level 1";
var giveupbtn;
var levelAction;
var fromAction=false;
var box1;
var box2;
var box21;
var box91;
var box61;
var box81;
var box92;
var box62;
var box22;
var box41;
var box42;
var box82;
var box3;
var box31;
var box32;
var box33;
var mesh1;
var mesh91;
var mesh81;
var mesh21;
var mesh31;
var mesh61;
var mesh41;
var mesh2;
var mesh92;
var mesh82;
var mesh22;
var mesh62;
var mesh42;
var mesh3;

var mesh23;
var mesh83;
var mesh43;

var mesh4;
var mesh24;
var mesh84;
var mesh44;
var mesh32;
var mesh33;
var mesh34;
var mesh5;
var mesh95;
var mesh25;
var mesh85;
var mesh45;
var mesh6;
var mesh96;
var mesh86;
var mesh26;
var mesh46;
var mesh35;
var mesh36;
var mesh7;
var mesh87;
var mesh97;
var mesh27;
var mesh47;
var mesh8;
var mesh98;
var mesh28;
var mesh37;
var mesh38;
var mesh9;
var mesh10;
var mesh11;
var mesh12;
////////////////////
var thevel1;
var thevel2;
var thevel91;
var thevel92;
var thevel93;
var thevel94;
var thevel95;
var thevel96;
var thevel71;
var thevel81;
var thevel82;
var thevel83;
var thevel84;
var thevel85;
var thevel97;


function initialiseHelp() {
    helpContent = "";
    helpContent = helpContent + "<h2>Building circuit of required resistance from given resistors</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>Shown how the Resulatant Resistance changes with different combinations of given resistors.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>Click the start button to start the game at level 1.</p>";
    helpContent = helpContent + "<p>Select the desired combination of resistors to get the correct resultant.</p>";
    helpContent = helpContent + "<p>Keep on building the circuit till all the given resistors are used in the circuit.</p>";
    helpContent = helpContent + "<p>Click the 'Give Up' button to give up and to know the Answer.</p>";
    helpContent = helpContent + "<p>Clicking on the 'Give Up' demotes you to back to Level 1.</p>";
    helpContent = helpContent + "<p>Click on the reset button if resultant resistance is not equal to the required resistance.</p>";
    helpContent = helpContent + "<p>On finishing a level click on the Next Level button to move to the next level.</p>";
    helpContent = helpContent + "<p>Complete five levels to finish the game.</p>";
    helpContent = helpContent + "<p>To play again, press reset button.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo() {
    
    infoContent = infoContent + "<h2>Building circuit of required resistance from given resistors</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>Shown how the Resulatant Resistance changes with different combinations of given resistors.</p>";
    infoContent = infoContent + "<h3>Ohm's Law</h3>";
    infoContent = infoContent + "<p>Current is directly proportional to the given Voltage. </p>";
    infoContent = infoContent + "<p>When two resistors R1 and R2 are connected in series the Equivalent resistance = R1 + R2.</p>";
    infoContent = infoContent + "<p>When two resistors R1 and R2 are connected in parallel the Equivalent resistance =  (R1 * R2) / (R1 + R2).</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene() {
    mySceneTLX = -16;
    mySceneTLY = 27;
    mySceneBRX = 16;
    mySceneBRY = 12;
    mySceneW = (mySceneBRX - mySceneTLX);
    mySceneH = (mySceneTLY - mySceneBRY);
    myCenterX = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY = (mySceneTLY + mySceneBRY) / 2.0;

    var light = new THREE.PointLight(0xff0000, 7, 200);
    PIEaddElement(light);
    light.position.set(-50, 50, 50);

    PIEscene.background = new THREE.Color(0x00BFFF);
    //PIEscene.background = new THREE.Color( 0xFCEDB2 );
    var ambient = new THREE.AmbientLight(0xffffff);
    PIEaddElement(ambient);

    var light = new THREE.DirectionalLight(0x123456);
    light.position = PIEcamera.position;
    PIEaddElement(light);



    

    var groundMaterial = new THREE.MeshPhongMaterial({ color: 0x0c0910, specular: 0xffffff });
    var mesh233 = new THREE.Mesh(new THREE.PlaneBufferGeometry(2000, 2000), groundMaterial);
    mesh233.position.y = -25;
    mesh233.rotation.x = - Math.PI / 2;
    PIEaddElement(mesh233);

    //PIEadjustDisplayScene();
    PIErenderer.shadowMapEnabled = false;
}

var controls;
function startOrbitalControls() {
    controls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
    controls.enabled = false;
}


//=================================================================//

//=================================================================//

var plus2, cuboidOrange;

function mybattery(x, y, z) {
    var a = 3;
    cuboidOrange = new THREE.Mesh(new THREE.CubeGeometry(4 / a, 5 / a, 2 / a, 4, 4, 1), new THREE.MeshBasicMaterial({ color: "white" }));
    cuboidOrange.position.set(7, 0, 5.8);
    PIEaddElement(cuboidOrange);//battery
    //battery top portion 
    var curve1O = new THREE.Mesh(new THREE.CylinderGeometry(1 / a, 1 / a, 4 / a, 32), new THREE.MeshBasicMaterial({ color: "white" }));
    curve1O.position.set(x, y + 2.5 / a, z);
    cuboidOrange.add(curve1O);
    curve1O.rotation.z = Math.PI / 2;

    // battery top portion
    var curve2O = new THREE.Mesh(new THREE.CylinderGeometry(1 / a, 1 / a, 4 / a, 32), new THREE.MeshBasicMaterial({ color: "white" }));
    curve2O.position.set(x, y - 2.5 / a, z);
    cuboidOrange.add(curve2O);
    curve2O.rotation.z = Math.PI / 2;

    // battey bottom portion
    var cuboidBlack = new THREE.Mesh(new THREE.CubeGeometry(6 / a, 5 / a, 2 / a, 4, 4, 1), new THREE.MeshBasicMaterial({ color: "#0d84e5" }));
    cuboidBlack.position.set(x + 5 / a, y, z);
    cuboidOrange.add(cuboidBlack);

    var curve1B = new THREE.Mesh(new THREE.CylinderGeometry(1 / a, 1 / a, 6 / a, 32), new THREE.MeshBasicMaterial({ color: "#0d84e5" }));
    curve1B.position.set(x + 5 / a, y + 2.5 / a, z);
    cuboidOrange.add(curve1B);
    curve1B.rotation.z = Math.PI / 2;

    var curve2B = new THREE.Mesh(new THREE.CylinderGeometry(1 / a, 1 / a, 6 / a, 32), new THREE.MeshBasicMaterial({ color: "#0d84e5" }));
    curve2B.position.set(x + 5 / a, y - 2.5 / a, z);
    cuboidOrange.add(curve2B);
    curve2B.rotation.z = Math.PI / 2;

    var minus = new THREE.Mesh(new THREE.CubeGeometry(2 / a, 0.3 / a, 0.1 / a, 4, 4, 1), new THREE.MeshBasicMaterial({ color: "red" }));
    minus.position.set(x, y + 2.5 / a, z + 1.1 / a);
    cuboidOrange.add(minus);

    var plus1 = new THREE.Mesh(new THREE.CubeGeometry(2 / a, 0.3 / a, 0.1 / a, 4, 4, 1), new THREE.MeshBasicMaterial({ color: "red" }));
    plus1.position.set(x, y - 1.5 / a, z + 1.1 / a);
    cuboidOrange.add(plus1);

    plus2 = new THREE.Mesh(new THREE.CubeGeometry(2 / a, 0.3 / a, 0.1 / a, 4, 4, 1), new THREE.MeshBasicMaterial({ color: "red" }));
    plus2.position.set(x, y - 1.5 / a, z + 1.1 / a);
    cuboidOrange.add(plus2);
    plus2.rotation.z = Math.PI / 2;

    var terminal1 = new THREE.Mesh(new THREE.CylinderGeometry(0.5 / a, 0.5 / a, 0.5 / a, 32), new THREE.MeshBasicMaterial({ color: "gray" }));
    terminal1.position.set(x - 2.2/ a, y + 2.2 / a, z);
    cuboidOrange.add(terminal1);
    terminal1.rotation.z = Math.PI / 2;

    var terminal2 = new THREE.Mesh(new THREE.CylinderGeometry(0.5 / a, 0.5 / a, 0.5 / a, 32), new THREE.MeshBasicMaterial({ color: "gray" }));
    terminal2.position.set(x - 2.2 / a, y - 2.2 / a, z);
    cuboidOrange.add(terminal2);
    terminal2.rotation.z = Math.PI / 2;

    cuboidOrange.position.x += -7;
    cuboidOrange.position.y += -0.2;
    cuboidOrange.position.z += 3;
    cuboidOrange.rotation.z = Math.PI;
    cuboidOrange.rotation.x = -Math.PI / 2;
}
////////////////////////////////////////////////////////////////////////////




function addCurvedWire(){
    // var curve = new THREE.CubicBezierCurve3(
    //     new THREE.Vector3(0.8, 0.730, 10.4),
    //     new THREE.Vector3(8, 0.733, 10.4),
    //     new THREE.Vector3(8.8, 0.733, 10.4),
    //     new THREE.Vector3(8.8, 0.733, 10.4)
    // );

    // var tube = new THREE.TubeGeometry(curve, 1, 0.05, 20, false);
    // var mesh = new THREE.Mesh(tube, new THREE.MeshBasicMaterial({ color: "black" }));

    // PIEaddElement(mesh);//connecting to -ve of battery

    var curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(0.8, 0.730, 10.4),
        new THREE.Vector3(8.8, 0.733, 10),
        new THREE.Vector3(8.8, 0.733, 9.5),
        new THREE.Vector3(8.8, 0, 0.4)
    );

    var tube = new THREE.TubeGeometry(curve, 100, 0.05, 20, false);
    var mesh = new THREE.Mesh(tube, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh);//connecting to -ve of battery


    // var curve1 = new THREE.CubicBezierCurve3(
    //     new THREE.Vector3(8.8, 0.730, 10.4),
    //     new THREE.Vector3(8.8, 0.733, 8),
    //     new THREE.Vector3(8.8, 0.733, 7),
    //     new THREE.Vector3(8.8, 0.733, 0.4)
    // );

    // var tube1 = new THREE.TubeGeometry(curve1, 1, 0.05, 20, false);
    // var mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

    // PIEaddElement(mesh1);//right side 

    var curve2 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(0.8, 0.733, 9),
        new THREE.Vector3(5.5, 3.933, 12),
        new THREE.Vector3(-5.5, 0, 10.2),
        new THREE.Vector3(-6.5,.9,10.2)
    );

    var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 40, false);
    var mesh2 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh2);//+ve terminal to battery 

    var curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-6.45, .9, 10.22),
        new THREE.Vector3(-8.5,.733, 9),
        new THREE.Vector3(-8.47, .733,6),
        new THREE.Vector3(-8.8,0,.4)
    );

    var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 100, false);
    var mesh3 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh3);//left side 

    var terminal3 = new THREE.Mesh(new THREE.CylinderGeometry(.166, .166, .8, 32), new THREE.MeshBasicMaterial({ color: "gray" }));
    terminal3.position.set(-8.8, 0, .4);

    PIEaddElement(terminal3);

    var terminal4 = new THREE.Mesh(new THREE.CylinderGeometry(.166, .166, .8, 32), new THREE.MeshBasicMaterial({ color: "gray" }));
    terminal4.position.set(8.8, 0, .4);

    PIEaddElement(terminal4);
    
    
}

//============================================================//

//============================================================//

function addTable() {
    var tableGeom = new THREE.BoxGeometry(20, 0.5, 20, 4, 4, 1);
    var tableTop = new THREE.Mesh(tableGeom, new THREE.MeshBasicMaterial({ color: 0x8B4513 }));
    tableTop.position.y -= 0.8;
    PIEaddElement(tableTop); //top of table

    var edges = new THREE.EdgesGeometry(tableGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));

    tableTop.add(line) //black line on the table;

    var tablelegGeom = new THREE.CubeGeometry(0.5, 10, 0.5, 4, 4, 1);
    var tableleg = new THREE.Mesh(tablelegGeom, new THREE.MeshBasicMaterial({ color: 0x8B4513 }));
    tableleg.position.set(-9.5, -5, 9.5); //left leg of table

    var edges2 = new THREE.EdgesGeometry(tablelegGeom);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));

    tableleg.add(line2);
    tableTop.add(tableleg);  //to add left tabl;e leg


    var tablelegGeom2 = new THREE.CubeGeometry(0.5, 10, 0.5, 4, 4, 1);
    var tableleg2 = new THREE.Mesh(tablelegGeom2, new THREE.MeshBasicMaterial({ color: 0x8B4513 }));
    tableleg2.position.set(9.5, -5, 9.5);

    var edges3 = new THREE.EdgesGeometry(tablelegGeom2);
    var line3 = new THREE.LineSegments(edges3, new THREE.LineBasicMaterial({ color: 0x000 }));

    tableleg2.add(line3);
    tableTop.add(tableleg2);  //right leg of table


    var tablelegGeom3 = new THREE.CubeGeometry(0.5, 10, 0.5, 4, 4, 1);
    var tableleg3 = new THREE.Mesh(tablelegGeom3, new THREE.MeshBasicMaterial({ color: 0x8B4513 }));
    tableleg3.position.set(-9.5, -5, -9.5);

    var edges4 = new THREE.EdgesGeometry(tablelegGeom3);
    var line4 = new THREE.LineSegments(edges4, new THREE.LineBasicMaterial({ color: 0x000 }));

    tableleg3.add(line4);
    tableTop.add(tableleg3);


    var tablelegGeom4 = new THREE.CubeGeometry(0.5, 10, 0.5, 4, 4, 1);
    var tableleg4 = new THREE.Mesh(tablelegGeom4, new THREE.MeshBasicMaterial({ color: 0x8B4513 }));
    tableleg4.position.set(9.5, -5, -9.5);

    var edges5 = new THREE.EdgesGeometry(tablelegGeom4);
    var line5 = new THREE.LineSegments(edges5, new THREE.LineBasicMaterial({ color: 0x000 }));

    tableleg4.add(line5);
    tableTop.add(tableleg4);
}
///////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////


/////////////////////////////////////////////


function addElementsToScene() {
    addCurvedWire();
    // addBulb();
    // addSwitch();
    mybattery(0, 0, 0);
    addTable();
    // addMeter();
    // addArrows();
    // addRod();
    // addDirecLetters();
   
}
//////////////////////////////////////////////////////////////////

var level1btn;
var level2btn;
function startAnimation() {

    // PIEshowControlElement();
            console.log("start animation");
            // PIEstartAnimation();
            startOrbitalControls();
            resetExperiment();
            
            // while(nextlevel==true){

            // if(level==1)
            if(levelbtn){
                levelbtn.remove();
            }
            currentLevel="Level 1"
                levelbtn=PIEaddButton("Level 1");
              
                

                console.log(level1btn);
                level1Action();
                console.log("back in start");
                // if(nextlevel==false)
                // {
                //     console.log("nfdkfkl");
                //     startAnimation();
                    
                // }
                
                
                PIErender();
            

}

////////////////////////////////////////////////////////////////////
//animation stops due to this func
function stopAnimation() {
   console.log("stop animation");
    // removeElements();
    // PIEstopAnimation(); //removes the field lines and the arrows on it at the stop button 
    PIEresetExperiment();
    resetExperiment();
    currentLevel="Level 1";
    levelbtn.innerHTML=currentLevel;
    
    if(level2btn)
        level2btn.remove();
    if(giveupbtn)
        giveupbtn.remove();
    PIErender();
    console.log("at end stop anim");
    
}

/////////////////////////////////////////////////////////

 function showResistanceValues(){
     
        //     console.log("in show reistance values");

        //     console.log(levelAction);
        //     var reff;
    
        //     var loader = new THREE.FontLoader();
        //     loader.load("optimer.json", function (response) {
        //         font = response;
        //     if(levelAction=="level1act")
        //         reff=refflevel1;
        //     else if(levelAction=="level2act")
        //         reff=refflevel2;
        //     else if(levelAction=="level3act")
        //         reff=refflevel3;
        //     else if(levelAction=="level4act")
        //         reff=refflevel4;
        //     else
        //         reff=refflevel5;

        //     var res1="Req Resistance = "+reff.toString()+" ohm";
        //     var geometry = new THREE.TextGeometry(res1, {
        //             font: font,
        //             size: .4,
        //             height: 0.01,
        //             curveSegments: 3
        //         });
            
        //         thevel91 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));
                
            
        //         PIEaddElement(thevel91);
        //         thevel91.position.set(-14.4, 0, -12.3);
        //         thevel91.rotation.x = - Math.PI / 6;
            
        //     });

        // var loader = new THREE.FontLoader();
        // loader.load("optimer.json", function (response) {
        // font = response;
        // var res1="R1 = "+R1.toString()+" ohm";
        // var geometry = new THREE.TextGeometry(res1, {
        //     font: font,
        //     size: .4,
        //     height: 0.01,
        //     curveSegments: 3
        // });

        // thevel92 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        // PIEaddElement(thevel92);
        // thevel92.position.set(-14.50, -1, -12);
        // thevel92.rotation.x = - Math.PI / 6;

        // });

        // var loader = new THREE.FontLoader();
        // loader.load("optimer.json", function (response) {
        // font = response;
        // var res1="R2 = "+R2.toString()+" ohm";
        // var geometry = new THREE.TextGeometry(res1, {
        //     font: font,
        //     size: .4,
        //     height: 0.01,
        //     curveSegments: 3
        // });

        // thevel93 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));
        // PIEaddElement(thevel93);
        // thevel93.position.set(-14.70,-2,-12);
        // thevel93.rotation.x = - Math.PI / 6;

        // });


        // if (levelAction == "level1act")
        //     return;


        // var loader = new THREE.FontLoader();
        // loader.load("optimer.json", function (response) {
        // font = response;
        // var res1="R3 = "+R3.toString()+" ohm";
        // var geometry = new THREE.TextGeometry(res1, {
        //     font: font,
        //     size: .4,
        //     height: 0.01,
        //     curveSegments: 3
        // });

        // thevel94 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        // PIEaddElement(thevel94);
        // thevel94.position.set(-14.90,-3,-12);
        // thevel94.rotation.x = - Math.PI / 6;

        // });

        // if(levelAction=="level2act")
        // return;

        // var loader = new THREE.FontLoader();
        // loader.load("optimer.json", function (response) {
        // font = response;
        // var res1="R4 = "+R4.toString()+" ohm";
        // var geometry = new THREE.TextGeometry(res1, {
        //     font: font,
        //     size: .4,
        //     height: 0.01,
        //     curveSegments: 3
        // });

        // thevel95 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        // PIEaddElement(thevel95);
        // thevel95.position.set(-15.10,-4,-12);
        // thevel95.rotation.x = - Math.PI / 6;

        // });

   
        // if(levelAction=="level3act"||levelAction=="level4act")
        // return;

        // console.log("level5action and in the thvel");

        // var loader = new THREE.FontLoader();
        //     loader.load("optimer.json", function (response) {
        //         font = response;
        //         var res1 = "R5 = " + R5.toString() + " ohm";
        //         var geometry = new THREE.TextGeometry(res1, {
        //             font: font,
        //             size: .4,
        //             height: 0.01,
        //             curveSegments: 3
        //         });

        //         thevel96 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        //         PIEaddElement(thevel96);
        //         console.log("in add thevel 6");
        //         thevel96.position.set(-15.30, -5, - 12);
        //         thevel96.rotation.x = - Math.PI / 6;

        //     });

    
 
        // console.log("at end of show resistance values");

 }




function resetMessage(){

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
    font = response;

    var geometry = new THREE.TextGeometry("Press Reset To Try Again!!", {
            font: font,
            size: .8,
            height: 0.01,
            curveSegments: 3
        });

        thevel1 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));
        

        PIEaddElement(thevel1);
    

        thevel1.position.set(-7, 0, -10);
        thevel1.rotation.x = - Math.PI / 6;
        
    });
    resetMessageOnTable();
    


}

function resetMessageOnTable(){
    if(currentLevel=="Level 1"){

        PIEupdateTableCell(3, 0, "LEVEL FAILED!!!!");
        PIEupdateTable();
    }
    else if(currentLevel=="Level 2"){

        PIEupdateTableCell(7, 0, "LEVEL FAILED!!!!");
        PIEupdateTable();
    }
    else if(currentLevel=="Level 3"){

        PIEupdateTableCell(11, 0, "LEVEL FAILED!!!!");
        PIEupdateTable();
    }
    else if(currentLevel=="Level 4"){

        PIEupdateTableCell(15, 0, "LEVEL FAILED!!!!");
        PIEupdateTable();
    }
    else if(currentLevel=="Level 5"){

        PIEupdateTableCell(19, 0, "LEVEL FAILED!!!!");
        PIEupdateTable();
    }

}

function successMessageOnTable(){
        if(currentLevel=="Level 1"){

        PIEupdateTableCell(3,0,"SUCCESS!!!!");
        PIEupdateTable();
        }
        else if(currentLevel=="Level 2"){
            PIEupdateTableCell(7, 0, "SUCCESS!!!!");
            PIEupdateTable();
    
        }
        else if(currentLevel=="Level 3"){
            PIEupdateTableCell(11, 0, "SUCCESS!!!!");
            PIEupdateTable();
    
        }
        else if(currentLevel=="Level 4"){
            PIEupdateTableCell(15, 0, "SUCCESS!!!!");
            PIEupdateTable();
    
        }
        else if(currentLevel=="Level 5"){
            PIEupdateTableCell(19, 0, "SUCCESS!!!!");
            PIEupdateTable();
    
        }
    
}

function nextlevelMessage(){
    var loader = new THREE.FontLoader();
    loader.load("./optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("Press Next Level To Advance", {
            font: font,
            size: .8,
            height: 0.01,
            curveSegments: 3
        });

        thevel2 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel2);
        // thevel.castShadow = false;
        // thevel.visible = false;

        // geometry = new THREE.TextGeometry("Ball's Velocity", {
        //     font: font,
        //     size: 0.075,
        //     height: 0.3,
        // });
        // heading = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));
        // heading.translation = geometry.center();
        // PIEaddElement(heading);
        // heading.castShadow = false;
        // heading.visible = false;

        thevel2.position.set(-7.65, 0, -10);
        thevel2.rotation.x = - Math.PI / 6;
        
        // thevel2.lookAt(PIEcamera.position);
        // heading.position.set(0.4 * PIEcamera.position.x, 0.2 * PIEcamera.position.y + 0.075, 0.4 * PIEcamera.position.z);
        // heading.lookAt(PIEcamera.position);
    });
    successMessageOnTable();


}
        //======LEVEL 1 ACTION===========//
      
var flag1=0;
var flag2=0;

function level1Action(){
  
    levelAction="level1act";
    showResistanceValues();
    presentLevelGiveUp="Level 1";
    giveupbtn=PIEaddButton("Give Up");
    giveupbtn.addEventListener("click",giveup);

    PIEaddMyText("Resultant Resistance", refflevel1);
    if(flag1==0){
    PIEaddMyCheckbox("R1 parellel R2", false, level1Case1);
    PIEaddMyCheckbox("R1 series R2", false, level1Case2);
    flag1=1;
    flag2=0;
    }

    var headerRow1 = [ "Level 1"];
    PIEcreateTable("Observation Table", 20, 5, true);
    PIEcreateTable("Resistor Values", 5, 2, true);

    var tables=document.querySelectorAll("div[draggable]");
    console.log("table are");
    console.log(tables);
    tables[1].style.removeProperty("top");  

   tables[1].style.position="absolute";  
   
   tables[1].style.bottom="0";       
   tables[1].style.right="0";       
         
   

    PIEtableSelect("Resistor Values");
    // PIEupdateTableRow(0 ,headerRow1);
    PIEupdateTableCell(0, 0, "Resistor R1");
    PIEsetCellInput(0, 1,13, R1+" ohm");
    // PIEupdateTableCell(1, 2, "ohm");
    PIEupdateTableCell(1, 0, "Resistor R2");
    PIEsetCellInput(1, 1,13, R2+" ohm");
    PIEupdateTable();


    PIEtableSelect("Observation Table");
    PIEupdateTableRow(0 ,headerRow1);
    // var headerRow=["R1", "R2", "R3", "R4","R5"];
    // PIEupdateTableRow(0, headerRow);

   
    // PIEsetCellInput(2, 0,3, R1);
    // PIEsetCellInput(2, 1,3, R2);
    // PIEsetCellInput(2, 2,3, "-");
    // PIEsetCellInput(2, 3,3, "-");
    // PIEsetCellInput(2, 4, 3,"-");
  
   
    PIEupdateTableCell(1, 0, "Required Resistance");
    PIEsetCellInput(1, 1,3, refflevel1);
   
    PIEupdateTable();
    // PIEsetRowInput(2, 8, "abcdefgh");
    // PIEsetColumnInput(3,8, "abcde");
    // PIEchangeInputCheckbox("Level 5", true);
}


//=======================================================//
        //======LEVEL 2ACTION===========//
            
        
flag21=0;
flag22=0;
flag23=0;
function level2Action(){

    levelAction = "level2act";
    showResistanceValues();
    level2btn.remove();
    currentLevel="Level 2";
    levelbtn.innerHTML=currentLevel;

    fromAction=true;
    resetExperiment();
    fromAction = false;
    var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // console.log(inputCheckboxes);
    for(var i=0;i<inputCheckboxes.length ;i++){
    inputCheckboxes[i].remove();
    }

    var number = document.getElementsByClassName("cr number");
    // console.log(inputCheckboxes);
    for(var i = 0; i < number.length; i++) {
        number[i].remove();
    }

    presentLevelGiveUp="Level 2";
    giveupbtn=PIEaddButton("Give Up");
    giveupbtn.addEventListener("click",giveup);

    PIEaddMyText("Resultant Resistance", refflevel2);
    if(flag21==0){    
    PIEaddMyCheckbox("R1 parellel R2", false,level2Case1);
    PIEaddMyCheckbox("R1 series R2", false,level2Case2);
    flag21=1;
    flag22=0;
    }

    // PIEcreateTable("Level 2", 10, 10, true);
    // PIEtableSelect("Level 2");
    // var headerRow=["R1", "R2", "R3", "R4","R5"];
    // PIEupdateTableRow(0, headerRow);
    // PIEsetCellInput(1, 0,8, R1);
    // PIEsetCellInput(1, 1,8, R2);
    // PIEsetCellInput(1, 2,8, R3);
    // PIEsetCellInput(1, 3,8, "-");
    // PIEsetCellInput(1, 4, 8,"-");

    var headerRow1 = ["Level 2"];

    PIEtableSelect("Resistor Values");
    // PIEupdateTableRow(3 ,headerRow1);
    PIEupdateTableCell(2, 0, "Resistor R3");
    PIEsetCellInput(2, 1,13, R3+" ohm");
  
    PIEupdateTable();

    PIEtableSelect("Observation Table");
   
    // var headerRow1 = ["--", "--", "Level2", "--", "--"];
    // PIEupdateTableRow(6, headerRow1);
    // var headerRow=["R1", "R2", "R3", "R4","R5"];
    // PIEupdateTableRow(7, headerRow);
    
   
    // PIEsetCellInput(8, 0,3, R1);
    // PIEsetCellInput(8, 1,3, R2);
    // PIEsetCellInput(8, 2,3, "-");
    // PIEsetCellInput(8, 3,3, "-");
    // PIEsetCellInput(8, 4, 3,"-");
    
    
    PIEupdateTableRow(4, headerRow1);
    PIEupdateTableCell(5, 0, "Required Resistance");
    PIEsetCellInput(5, 1, 3, refflevel2);
    PIEupdateTable();

   
}

var flag31=0;
var flag32=0;
var flag33=0;
var flag34=0;
var flag35=0;
function level3Action(){
    levelAction = "level3act";
    showResistanceValues();
    level2btn.remove();
    currentLevel="Level 3";
    levelbtn.innerHTML=currentLevel;


    fromAction = true;
    resetExperiment();
    fromAction = false;

    var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // console.log(inputCheckboxes);
    for(var i=0;i<inputCheckboxes.length ;i++){
    inputCheckboxes[i].remove();
    }

    var number = document.getElementsByClassName("cr number");
    // console.log(inputCheckboxes);
    for(var i = 0; i < number.length; i++) {
        number[i].remove();
    }

    //========================================//

    presentLevelGiveUp="Level 3";
    giveupbtn=PIEaddButton("Give Up");
    giveupbtn.addEventListener("click",giveup);

    PIEaddMyText("Resultant Resistance", refflevel3); 
    if(flag31==0){   
    PIEaddMyCheckbox("R1 parellel R2", false,level3Case1);
    PIEaddMyCheckbox("R1 series R2", false,level3Case2);
    flag32=0;
    flag31=1;
    }

    // PIEcreateTable("Level 3", 10, 10, true);
    // PIEtableSelect("Level 3");
    // var headerRow=["R1", "R2", "R3", "R4","R5"];
    // PIEupdateTableRow(0, headerRow);
    // PIEsetCellInput(1,0,8, R1);
    // PIEsetCellInput(1,1,8, R2);
    // PIEsetCellInput(1,2,8, R3);
    // PIEsetCellInput(1,3,8, R4);
    // PIEsetCellInput(1,4,8,"-");

    var headerRow1 = ["Level 3"];

    PIEtableSelect("Resistor Values");
    // PIEupdateTableRow(5 ,headerRow1);
    PIEupdateTableCell(3, 0, "Resistor R4");
    PIEsetCellInput(3, 1,13, R4+" ohm");
    PIEupdateTable();

    PIEtableSelect("Observation Table");
    PIEupdateTableRow(8, headerRow1);
    PIEupdateTableCell(9, 0, "Required Resistance");
    PIEsetCellInput(9, 1, 3, refflevel3);
    PIEupdateTable();

    
}

var flag41=0;
var flag42=0;
var flag43=0;
function level4Action(){

    levelAction = "level4act";
    showResistanceValues();
    level2btn.remove();
    currentLevel="Level 4";
    levelbtn.innerHTML=currentLevel;


    fromAction = true;
    resetExperiment();
    fromAction = false;

    var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // console.log(inputCheckboxes);

    for(var i=0;i<inputCheckboxes.length ;i++){
    inputCheckboxes[i].remove();
    }

    var number = document.getElementsByClassName("cr number");
    // console.log(inputCheckboxes);
    for(var i = 0; i < number.length; i++) {
        number[i].remove();
    }

    //========================================//

    presentLevelGiveUp="Level 4";
    giveupbtn=PIEaddButton("Give Up");
    giveupbtn.addEventListener("click",giveup);

    PIEaddMyText("Resultant Resistance", refflevel4);   
    if(flag41==0){ 
    PIEaddMyCheckbox("R1 p R2 p R3", false,level4Case1);
    PIEaddMyCheckbox("R1 s R2 s R3", false,level4Case2);
    PIEaddMyCheckbox("R1 p R2 s R3", false,level4Case3);
    PIEaddMyCheckbox("R1 p R3 s R2", false,level4Case4);
    PIEaddMyCheckbox("R2 p R3 s R1", false,level4Case5);
    flag41=1;
    flag42=0;
    }

    // PIEcreateTable("Level 4", 10, 10, true);
    // PIEtableSelect("Level 4");
    // var headerRow=["R1", "R2", "R3", "R4","R5"];
    // PIEupdateTableRow(0, headerRow);
    // PIEsetCellInput(1,0,8, R1);
    // PIEsetCellInput(1,1,8, R2);
    // PIEsetCellInput(1,2,8, R3);
    // PIEsetCellInput(1,3,8, R4);
    // PIEsetCellInput(1,4,8,"-");
    var headerRow1 = ["Level 4"];

 

    PIEtableSelect("Observation Table");
    PIEupdateTableRow(12, headerRow1);
    PIEupdateTableCell(13, 0, "Required Resistance");
    PIEsetCellInput(13, 1, 3, refflevel4);
    PIEupdateTable();

    

}

var flag51=0;
var flag52=0;
var flag53=0;
var flag54=0;

function level5Action(){

    levelAction = "level5act";
    showResistanceValues();
        
    level2btn.remove();
    currentLevel="Level 5";
    levelbtn.innerHTML=currentLevel;


    fromAction = true;
    resetExperiment();
    fromAction = false;
    
    var inputCheckboxes = document.getElementsByClassName("cr boolean");
    console.log(inputCheckboxes.length);

    for(var i=0;i<inputCheckboxes.length ;i++){
    
    inputCheckboxes[i].remove();
    }

    var number = document.getElementsByClassName("cr number");
    console.log(number.length);
    for(var i = 0; i < number.length; i++) {
        number[i].remove();
    }
    console.log(number.length);

    //========================================//
    console.log("level5Action");

    presentLevelGiveUp="Level 5";
    giveupbtn=PIEaddButton("Give Up");
    giveupbtn.addEventListener("click",giveup);

    PIEaddMyText("Resultant Resistance", refflevel5);    
    if(flag51==0){
    PIEaddMyCheckbox("R1 p R2 p R3",false,level5Case1);
    PIEaddMyCheckbox("R1 s R2 s R3",false,level5Case2);
    PIEaddMyCheckbox("R1 p R2 s R3",false,level5Case3);
    PIEaddMyCheckbox("R1 p R3 s R2",false,level5Case4);
    PIEaddMyCheckbox("R2 p R3 s R1",false,level5Case5);
    flag51=1;
    flag52=0;
}

    // PIEcreateTable("Level 5", 10, 10, true);
    // PIEtableSelect("Level 5");
    // var headerRow=["R1", "R2", "R3", "R4","R5"];
    // PIEupdateTableRow(0, headerRow);
    // PIEsetCellInput(1,0,8, R1);
    // PIEsetCellInput(1,1,8, R2);
    // PIEsetCellInput(1,2,8, R3);
    // PIEsetCellInput(1,3,8, R4);
    // PIEsetCellInput(1,4,8,R5);
    var headerRow1 = ["Level 5"];

    PIEtableSelect("Resistor Values");
    // PIEupdateTableRow(7 ,headerRow1);
    PIEupdateTableCell(4, 0, "Resistor R5");
    PIEsetCellInput(4, 1,13, R5+" ohm");
    PIEupdateTable();

    PIEtableSelect("Observation Table");
   
    PIEupdateTableRow(16, headerRow1);
    PIEupdateTableCell(17, 0, "Required Resistance");
    PIEsetCellInput(17, 1, 3, refflevel3);
    PIEupdateTable();


    // PIErender();
    console.log("level5Action");
    
}






//cases

//=========================================================================//


function level1Case1(){


    //  alert("jfjdkf");
    if(flag2==0){

        // PIEtableSelect("Resistor Values");
        // PIEtoggleTable();
        // PIEtableSelect("Observation Table");

            PIEchangeDisplayCheckbox("R1 parellel R2", true);
            var inputCheckboxes = document.getElementsByClassName("cr boolean");
                // console.log(inputCheckboxes);
                inputCheckboxes[1].remove();


        //////////////////////////////
            //first resistor
            var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
            box1 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({color: "gray" }));
            PIEaddElement(box1);
            var edges = new THREE.EdgesGeometry(boxGeom);
            var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
            box1.add(line);
            box1.position.set(0, 0, 1.4);

            //second resistor
            var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
            box2 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));
            PIEaddElement(box2);
            var edges2 = new THREE.EdgesGeometry(boxGeom2);
            var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
            box2.add(line2);
            box2.position.set(0, 0, -1);




            //  first resistor text

            var loader = new THREE.FontLoader();
            loader.load("optimer.json", function (response) {
                font = response;

                var geometry = new THREE.TextGeometry("R2", {
                    font: font,
                    size: .8,
                    height: 0.3,
                    curveSegments: 3
                });

                thevel81 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


                PIEaddElement(thevel81);


                thevel81.position.set(-0.55, 0, 1.8);
                thevel81.rotation.x = - Math.PI / 2;


            });

            



            //  second resistor txt

            var loader = new THREE.FontLoader();
            loader.load("optimer.json", function (response) {
                font = response;

                var geometry = new THREE.TextGeometry("R1", {
                    font: font,
                    size: .8,
                    height: 0.3,
                    curveSegments: 3
                });

                thevel82 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


                PIEaddElement(thevel82);


                thevel82.position.set(-0.55, 0, -.6);
                thevel82.rotation.x = - Math.PI / 2;


            });


            //wire connecting the resistors
            //  var curve1 = new THREE.CubicBezierCurve3(
            //      new THREE.Vector3(-8.8, 0, .4),
            //      new THREE.Vector3(-7, 0, .4),
            //      new THREE.Vector3(-6, 0, .4),
            //      new THREE.Vector3(-5.86666, 0, 0.4)
            //  );

            //  var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
            //  var mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

            //  PIEaddElement(mesh1);

            //wire connecting the resistors
            var curve2 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(-1.46666, 0, 1.4),
                new THREE.Vector3(-1.5, 0, 1.4),
                new THREE.Vector3(-2, 0, 1.4),
                new THREE.Vector3(-2.933333333, 0, 1.4)
            );

            var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
            mesh1 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

            PIEaddElement(mesh1);

            //wire connecting the resistors
            var curve3 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(1.466666666, 0, 1.4),
                new THREE.Vector3(2, 0,1.4),
                new THREE.Vector3(3, 0,1.4),
                new THREE.Vector3(2.93333333, 0, 1.4)
            );

            var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
            mesh2 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

            PIEaddElement(mesh2);

                //wire connecting the resistors
            var curve4 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(-1.46666, 0, -1),
                new THREE.Vector3(-1.5, 0, -1),
                new THREE.Vector3(-2, 0, -1),
                new THREE.Vector3(-2.933333333, 0, -1)
            );

            var tube4 = new THREE.TubeGeometry(curve4, 100, 0.05, 20, false);
            mesh3 = new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({ color: "black" }));

            PIEaddElement(mesh3);

            //wire connecting the resistors
            var curve5 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(1.466666666, 0, -1),
                new THREE.Vector3(2, 0,-1),
                new THREE.Vector3(3, 0,-1),
                new THREE.Vector3(2.93333333, 0, -1)
            );

            var tube5 = new THREE.TubeGeometry(curve5, 100, 0.05, 20, false);
            mesh4 = new THREE.Mesh(tube5, new THREE.MeshBasicMaterial({ color: "black" }));

            PIEaddElement(mesh4);

            //wire connecting the resistors
            var curve6 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(-8.8, 0, .4),
                new THREE.Vector3(-7, 0,.4),
                new THREE.Vector3(-6, 0,.4),
                new THREE.Vector3(-2.93333333, 0, .4)
            );

            var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
            mesh5 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));

            PIEaddElement(mesh5);

            //  wire connecting the resistors
            var curve9 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(2.93333, 0, .4),
                new THREE.Vector3(3, 0,.4),
                new THREE.Vector3(4, 0,.4),
                new THREE.Vector3(8.8, 0, .4)
            );

            var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
            mesh6 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));

            PIEaddElement(mesh6);


            //  //vertical lines
            var curve7 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(-2.933333, 0, 1.4),
                new THREE.Vector3(-2.933333, 0,1.2),
                new THREE.Vector3(-2.933333, 0,0),
                new THREE.Vector3(-2.933333, 0, -1)
            );

            var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
            mesh7= new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

            PIEaddElement(mesh7);

            // //  vertical lines
            var curve8 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(2.933333, 0, 1.4),
                new THREE.Vector3(2.933333, 0,1.2),
                new THREE.Vector3(2.933333, 0,0),
                new THREE.Vector3(2.933333, 0, -1)
            );

            var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
            mesh8 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

            PIEaddElement(mesh8);


            PIErender();

            //  if(camefrom=="level2")
            //     return;
            // else{
            // // alert("destr");
            //     removeElements();
            // }

            R12=(R1*R2)/(R1+R2);
            
            R12string=R12.toFixed(2);
            // if(flag1==1){
            PIEaddMyText("R12",R12);
            // flag1=0;
            // }
            PIErender();

            giveupbtn.remove();

            // table data
            PIEtableSelect("Observation Table");
            // PIEupdateTableRow(3, ["R1pR2"]);
            // // PIEsetCellInput(3, 1, 20, "R1 parelell R2");
            // PIEsetCellInput(4, 0, 3, R12.toFixed(2));
            PIEupdateTableCell(2,0,"Your Resistance");
            PIEsetCellInput(2,1,3,R12.toFixed(2));

            if(R12string!=refflevel1string&&flag==0){
            resetMessage();
                }
            console.log("in case1");
            // var headerRow=["R1", "R2", "R3", "R4","R5"];
            // PIEupdateTableRow(0, headerRow);
            // PIEupdateTableCell(1, 0,"   "+R1+"    ");
            // PIEupdateTableCell(1, 1, R2);
            // PIEupdateTableCell(1, 2, "-");
            // PIEupdateTableCell(1, 3, "-");
            // PIEupdateTableCell(1, 4, "-");
            // PIEsetRowInput(2, 8, "abcdefgh");
            // PIEsetColumnInput(3,8, "abcde");



            PIEupdateTable();
        

            currentLevel="Level 1";
        
        }
        flag2=1;
    
 }




//  var flag3=0

 //////////////////////////////////////////////////////
 function level1Case2(){


     if(flag2==0){
            PIEchangeDisplayCheckbox("R1 series R2", true);
            
            var inputCheckboxes = document.getElementsByClassName("cr boolean");
            // console.log(inputCheckboxes);
            inputCheckboxes[0].remove();
            // var resistor1Geom = new THREE.CylinderGeometry(.5, .5, 4, 50);//bottom of bulb
            // var resistor1 = new THREE.Mesh(resistor1Geom, new THREE.MeshPhongMaterial({ color: "gray" }));
            // // resistor1.position.set(-3, 0.8, -3);
            // PIEaddElement(resistor1);

            //first resistor
            var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
            box1 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({color: "gray" }));
            PIEaddElement(box1);
            var edges = new THREE.EdgesGeometry(boxGeom);
            var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
            box1.add(line);
            box1.position.set(-4.4, 0, 0.4);



            //second resistor
            var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
            box2 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));//color: 0xd3d3d3
            PIEaddElement(box2);
            var edges2 = new THREE.EdgesGeometry(boxGeom2);
            var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
            box2.add(line2);
            box2.position.set(4.4, 0, 0.4);


            //  first resistor text

            var loader = new THREE.FontLoader();
            loader.load("optimer.json", function (response) {
                font = response;

                var geometry = new THREE.TextGeometry("R1", {
                    font: font,
                    size: .8,
                    height: 0.3,
                    curveSegments: 3
                });

                thevel81 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


                PIEaddElement(thevel81);


                thevel81.position.set(-5, 0, 0.8);
                thevel81.rotation.x = - Math.PI / 2;


            });




            //  second resistor txt

            var loader = new THREE.FontLoader();
            loader.load("optimer.json", function (response) {
                font = response;

                var geometry = new THREE.TextGeometry("R2", {
                    font: font,
                    size: .8,
                    height: 0.3,
                    curveSegments: 3
                });

                thevel82 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


                PIEaddElement(thevel82);


                thevel82.position.set(3.8, 0, .8);
                thevel82.rotation.x = - Math.PI / 2;


            });


            //wire connecting the resistors
            var curve1 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(-8.8, 0, .4),
                new THREE.Vector3(-7, 0, .4),
                new THREE.Vector3(-6, 0, .4),
                new THREE.Vector3(-5.86666, 0, 0.4)
            );

            var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
            mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

            PIEaddElement(mesh1);

            //wire connecting the resistors
            var curve2 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(-2.93333, 0, .4),
                new THREE.Vector3(-1, 0, .4),
                new THREE.Vector3(-1.5, 0, .4),
                new THREE.Vector3(2.933333333333, 0, 0.4)
            );

            var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
            mesh2 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

            PIEaddElement(mesh2);

            //wire connecting the resistors
            var curve3 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(5.866666666, 0, .4),
                new THREE.Vector3(6, 0, .4),
                new THREE.Vector3(7, 0, .4),
                new THREE.Vector3(8.8, 0, 0.4)
            );

            var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
            mesh3 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

            PIEaddElement(mesh3);

            //  //wire connecting the resistors
            //  var curve4 = new THREE.CubicBezierCurve3(
            //      new THREE.Vector3(-2.8, 0, .4),
            //      new THREE.Vector3(-7, 0, .4),
            //      new THREE.Vector3(-6, 0, .4),
            //      new THREE.Vector3(-5.86666, 0, 0.4)
            //  );

            //  var tube4 = new THREE.TubeGeometry(curve4, 100, 0.05, 20, false);
            //  var mesh4 = new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({ color: "black" }));

            //  PIEaddElement(mesh4);


            R12 = (R1 + R2);

            R12string=R12.toFixed(2);

            //  if(flag1==1){
            //  console.log(flag1);
                PIEaddMyText("R12", R12);
                

            //  }


            //  PIEtableSelect("Observation Table");
            //  PIEupdateTableRow(3, ["R1pR2"]);
            //  // PIEsetCellInput(3, 1, 20, "R1 parelell R2");
            //  PIEsetCellInput(4, 0, 3, R12.toFixed(2));
            PIEtableSelect("Observation Table");
        
            PIEupdateTableCell(2, 0, "Your Resistance");
            PIEsetCellInput(2, 1, 3, R12.toFixed(2));


            PIErender();
            giveupbtn.remove();
            if(R12string == refflevel1string&&flag==0) {
            
                nextlevelMessage();
            }
            console.log("in case1");

            // resetScene();

            level2btn=PIEaddButton("Next Level");

            level2btn.addEventListener("click",level2Action);

            
            // PIErender();
        //      removeElements();
            
            console.log("l1c2");

        }
        flag2=1;
    
 }






//=======================================================================//
            //=========LEVEL 2 CASE 1 ================//


function level2Case1(){
//r1 p r2 p r3

    if(flag22==0){

    PIEchangeDisplayCheckbox("R1 parellel R2", true);
    var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // console.log(inputCheckboxes);
    inputCheckboxes[1].remove();


    //////////////////////////////
    //first resistor
    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
    box1 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box1);
    var edges = new THREE.EdgesGeometry(boxGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
    box1.add(line);
    box1.position.set(0, 0, 1.4);

    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box2 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box2);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box2.add(line2);
    box2.position.set(0, 0, -1);

    //  first resistor text


    //  second resistor txt

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R1", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel82 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel82);


        thevel82.position.set(-0.55, 0, -.6);
        thevel82.rotation.x = - Math.PI / 2;


    });



    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R2", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel81 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel81);


        thevel81.position.set(-0.55, 0, 1.8);
        thevel81.rotation.x = - Math.PI / 2;


    });




   

    //wire connecting the resistors
    //  var curve1 = new THREE.CubicBezierCurve3(
    //      new THREE.Vector3(-8.8, 0, .4),
    //      new THREE.Vector3(-7, 0, .4),
    //      new THREE.Vector3(-6, 0, .4),
    //      new THREE.Vector3(-5.86666, 0, 0.4)
    //  );

    //  var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
    //  var mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

    //  PIEaddElement(mesh1);

    //wire connecting the resistors
    var curve2 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-1.46666, 0, 1.4),
        new THREE.Vector3(-1.5, 0, 1.4),
        new THREE.Vector3(-2, 0, 1.4),
        new THREE.Vector3(-2.933333333, 0, 1.4)
    );

    var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
    mesh1 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh1);

    //wire connecting the resistors
    var curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(1.466666666, 0, 1.4),
        new THREE.Vector3(2, 0, 1.4),
        new THREE.Vector3(3, 0, 1.4),
        new THREE.Vector3(2.93333333, 0, 1.4)
    );

    var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
    mesh2 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh2);

    //wire connecting the resistors
    var curve4 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-1.46666, 0, -1),
        new THREE.Vector3(-1.5, 0, -1),
        new THREE.Vector3(-2, 0, -1),
        new THREE.Vector3(-2.933333333, 0, -1)
    );

    var tube4 = new THREE.TubeGeometry(curve4, 100, 0.05, 20, false);
    mesh3 = new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh3);

    //wire connecting the resistors
    var curve5 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(1.466666666, 0, -1),
        new THREE.Vector3(2, 0, -1),
        new THREE.Vector3(3, 0, -1),
        new THREE.Vector3(2.93333333, 0, -1)
    );

    var tube5 = new THREE.TubeGeometry(curve5, 100, 0.05, 20, false);
    mesh4 = new THREE.Mesh(tube5, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh4);

    //wire connecting the resistors
    var curve6 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-8.8, 0, .4),
        new THREE.Vector3(-7, 0, .4),
        new THREE.Vector3(-6, 0, .4),
        new THREE.Vector3(-2.93333333, 0, .4)
    );

    var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
    mesh5 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh5);

    //  wire connecting the resistors
    var curve9 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(2.93333, 0, .4),
        new THREE.Vector3(3, 0, .4),
        new THREE.Vector3(4, 0, .4),
        new THREE.Vector3(8.8, 0, .4)
    );

    var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
    mesh6 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh6);


    //  //vertical lines
    var curve7 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-2.933333, 0, 1.4),
        new THREE.Vector3(-2.933333, 0, 1.2),
        new THREE.Vector3(-2.933333, 0, 0),
        new THREE.Vector3(-2.933333, 0, -1)
    );

    var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
    mesh7 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh7);

    // //  vertical lines
    var curve8 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(2.933333, 0, 1.4),
        new THREE.Vector3(2.933333, 0, 1.2),
        new THREE.Vector3(2.933333, 0, 0),
        new THREE.Vector3(2.933333, 0, -1)
    );

    var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
    mesh8 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh8);


    PIErender();

    //  if(camefrom=="level2")
    //     return;
    // else{
    // // alert("destr");
    //     removeElements();
    // }

    R12 = (R1 * R2) / (R1 + R2);

    PIEaddMyText("R12", R12);
    PIEaddMyCheckbox("R12 parellel R3",false,level2Case3);


    // PIEtableSelect("Observation Table");
    // PIEupdateTableRow(9, ["R1pR2"]);
    // // PIEsetCellInput(3, 1, 20, "R1 parelell R2");
    // PIEsetCellInput(10, 0, 3, R12.toFixed(2));

    PIErender();
   
    console.log("in l2c1");

    }
    flag22=1;
    flag23=0;
    
}


//=================================================================================//

function level2Case3(){

    if(flag23==0){
        // console.log("value r12pr3" + PIEgetDisplayCheckbox("R12 parellel R3"));
    // if (PIEgetDisplayCheckbox("R12 parellel R3") == false) {  //the value that was before clicking the checkbox is propogating to the fun ie false
            
    //add another display checbx
    
    //third resistor

            
            var boxGeom3 = new THREE.BoxGeometry(2.933, .5, 1);
            box3 = new THREE.Mesh(boxGeom3, new THREE.MeshBasicMaterial({color: "gray" }));
            PIEaddElement(box3);
            var edges3 = new THREE.EdgesGeometry(boxGeom3);
            var line3 = new THREE.LineSegments(edges3, new THREE.LineBasicMaterial({ color: 0x000 }));
            box3.add(line3);
            box3.position.set(0, 0, 3.8);


    //  first resistor text

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R3", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel83 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel83);


        thevel83.position.set(-.58, 0,4.2 );
        thevel83.rotation.x = - Math.PI / 2;


    });


            /////////////////////////////////////

            //wire connecting the resistors
            var curve4 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(-1.46666, 0, 3.8),
                new THREE.Vector3(-1.5, 0, 3.8),
                new THREE.Vector3(-2, 0, 3.8),
                new THREE.Vector3(-2.933333333, 0, 3.8)
            );

            var tube4 = new THREE.TubeGeometry(curve4, 100, 0.05, 20, false);
            mesh9 = new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({ color: "black" }));

            PIEaddElement(mesh9);

            //wire connecting the resistors
            var curve5 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(1.466666666, 0, 3.8),
                new THREE.Vector3(2, 0, 3.8),
                new THREE.Vector3(3, 0, 3.8),
                new THREE.Vector3(2.93333333, 0, 3.8)
            );

            var tube5 = new THREE.TubeGeometry(curve5, 100, 0.05, 20, false);
            mesh10 = new THREE.Mesh(tube5, new THREE.MeshBasicMaterial({ color: "black" }));

            PIEaddElement(mesh10);

            //  //vertical lines
            var curve7 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(-2.933333, 0, 1.4),
                new THREE.Vector3(-2.933333, 0, 1.6),
                new THREE.Vector3(-2.933333, 0, 2),
                new THREE.Vector3(-2.933333, 0, 3.8)
            );

            var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
            mesh11 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));
            PIEaddElement(mesh11);

            // //  vertical lines
            var curve8 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(2.933333, 0, 1.4),
                new THREE.Vector3(2.933333, 0, 1.6),
                new THREE.Vector3(2.933333, 0, 1.8),
                new THREE.Vector3(2.933333, 0, 3.8)
            );

            var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
            mesh12 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));
           
        
            PIEaddElement(mesh12);

    R123 = (R12 * R3) / (R12 + R3);
    R123string=R123.toFixed(2);

    PIEaddMyText("R123", R123);

    // PIEtableSelect("Observation Table");
    // PIEupdateTableRow(9, ["R1pR2","R12pR3"]);
    // // PIEsetCellInput(3, 1, 20, "R1 parelell R2");
    // PIEsetCellInput(10, 1, 3, R123.toFixed(2));

    PIEtableSelect("Observation Table");

    giveupbtn.remove();

    if (R123string == refflevel2string&&flag==0) {
 
      
        nextlevelMessage();
    }

    
     
    level2btn=PIEaddButton("Next Level");

    level2btn.addEventListener("click",level3Action);
    PIErender();
    console.log("in case1");


    // function newFunction() {
        PIEupdateTableCell(6, 0, "Your Resistance");
        PIEsetCellInput(6, 1, 3, R123.toFixed(2));
        PIErender();
    // }

    }
    flag23=1;
}



function level2Case2() {
//     //r1 s r2 p r3

if(flag22==0){
PIEchangeDisplayCheckbox("R1 series R2", true);
    var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // console.log(inputCheckboxes);
    inputCheckboxes[0].remove();

 //first resistor
 var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
 box1 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({color: "gray" }));
 PIEaddElement(box1);
 var edges = new THREE.EdgesGeometry(boxGeom);
 var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
 box1.add(line);
 box1.position.set(-4.4, 0, 0.4);



    //  first resistor text

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R1", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel81 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel81);


        thevel81.position.set(-5, 0, 0.8);
        thevel81.rotation.x = - Math.PI / 2;


    });


    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box2 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));//color: 0xd3d3d3
    PIEaddElement(box2);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box2.add(line2);
    box2.position.set(4.4, 0, 0.4);


    //  second resistor txt

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R2", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel82 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel82);


        thevel82.position.set(3.8, 0, .8);
        thevel82.rotation.x = - Math.PI / 2;


    });


 //wire connecting the resistors
 var curve1 = new THREE.CubicBezierCurve3(
     new THREE.Vector3(-8.8, 0, .4),
     new THREE.Vector3(-7, 0, .4),
     new THREE.Vector3(-6, 0, .4),
     new THREE.Vector3(-5.86666, 0, 0.4)
 );

 var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
 mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

 PIEaddElement(mesh1);

 //wire connecting the resistors
 var curve2 = new THREE.CubicBezierCurve3(
     new THREE.Vector3(-2.93333, 0, .4),
     new THREE.Vector3(-1, 0, .4),
     new THREE.Vector3(-1.5, 0, .4),
     new THREE.Vector3(2.933333333333, 0, 0.4)
 );

 var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
 mesh2 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

 PIEaddElement(mesh2);

 //wire connecting the resistors
 var curve3 = new THREE.CubicBezierCurve3(
     new THREE.Vector3(5.866666666, 0, .4),
     new THREE.Vector3(6, 0, .4),
     new THREE.Vector3(7, 0, .4),
     new THREE.Vector3(8.8, 0, 0.4)
 );

 var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
 mesh3 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

 PIEaddElement(mesh3);


 PIErender();

 //  if(camefrom=="level2")
 //     return;
 // else{
 // // alert("destr");
 //     removeElements();
 // }

 R12 = (R1 + R2);

 PIEaddMyText("R12", R12);
 PIEaddMyCheckbox("R12 parellel R3",false,level2Case4);
 PIErender();

 console.log("in l2c2");
}
flag22=1;
flag23=0;

}


function level2Case4(){

        if(flag23==0){
          var boxGeom3 = new THREE.BoxGeometry(2.933, .5, 1);
            box3 = new THREE.Mesh(boxGeom3, new THREE.MeshBasicMaterial({color: "gray" }));
            PIEaddElement(box3);
            var edges3 = new THREE.EdgesGeometry(boxGeom3);
            var line3 = new THREE.LineSegments(edges3, new THREE.LineBasicMaterial({ color: 0x000 }));
            box3.add(line3);
            box3.position.set(0, 0, 3.8);

    //  first resistor text

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R3", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel83 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel83);


        thevel83.position.set(-.58, 0, 4.2);
        thevel83.rotation.x = - Math.PI / 2;


    });



            /////////////////////////////////////

            //wire connecting the resistors
            var curve4 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(-1.46666, 0, 3.8),
                new THREE.Vector3(-1.5, 0, 3.8),
                new THREE.Vector3(-2, 0, 3.8),
                new THREE.Vector3(-7, 0, 3.8)
            );

            var tube4 = new THREE.TubeGeometry(curve4, 100, 0.05, 20, false);
            mesh9 = new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({ color: "black" }));

            PIEaddElement(mesh9);

            //wire connecting the resistors
            var curve5 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(1.466666666, 0, 3.8),
                new THREE.Vector3(2, 0, 3.8),
                new THREE.Vector3(3, 0, 3.8),
                new THREE.Vector3(7, 0, 3.8)
            );

            var tube5 = new THREE.TubeGeometry(curve5, 100, 0.05, 20, false);
            mesh10 = new THREE.Mesh(tube5, new THREE.MeshBasicMaterial({ color: "black" }));

            PIEaddElement(mesh10);

            //  //vertical lines
            var curve7 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(-7, 0, .4),
                new THREE.Vector3(-7, 0, 1.6),
                new THREE.Vector3(-7, 0, 2),
                new THREE.Vector3(-7, 0, 3.8)
            );

            var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
            mesh11 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));
            PIEaddElement(mesh11);

            // //  vertical lines
            var curve8 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(7, 0, .4),
                new THREE.Vector3(7, 0, 1.6),
                new THREE.Vector3(7, 0, 1.8),
                new THREE.Vector3(7, 0, 3.8)
            );

            var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
            mesh12 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));
           
        
            PIEaddElement(mesh12);


            ////

            R123 = (R12 * R3) / (R12 + R3);
            R123string=R123.toFixed(2);


            PIEaddMyText("R123", R123);
            PIEtableSelect("Observation Table");

            PIEupdateTableCell(6, 0, "Your Resistance");
            PIEsetCellInput(6, 1, 3, R123.toFixed(2));
            PIErender();
            giveupbtn.remove();


            if(R123string!=refflevel2string){
            
                // var loader = new THREE.FontLoader();
                //     loader.load("optimer.json", function (response) {
                //     font = response;
        
                // var geometry = new THREE.TextGeometry("Press Reset To Try Again!!", {
                //         font: font,
                //         size: .8,
                //         height: 0.01,
                //         curveSegments: 3
                //     });
        
                //     thevel1 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));
                    
        
                //     PIEaddElement(thevel1);
                //     // thevel.castShadow = false;
                //     // thevel.visible = false;
        
                //     // geometry = new THREE.TextGeometry("Ball's Velocity", {
                //     //     font: font,
                //     //     size: 0.075,
                //     //     height: 0.3,
                //     // });
                //     // heading = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));
                //     // heading.translation = geometry.center();
                //     // PIEaddElement(heading);
                //     // heading.castShadow = false;
                //     // heading.visible = false;
        
                //     thevel1.position.set(-8.5, 0, -12);
                //     thevel1.rotation.x = - Math.PI / 6;
                //     // thevel.lookAt(PIEcamera.position);
                //     // heading.position.set(0.4 * PIEcamera.position.x, 0.2 * PIEcamera.position.y + 0.075, 0.4 * PIEcamera.position.z);
                //     // heading.lookAt(PIEcamera.position);
                // });
                resetMessage();
                }
            currentLevel="Level 1";
            console.log("level2case4");
        }
        flag23=1;




}



//===============================================================//

function level3Case1(){
    if(flag31==0){

    PIEchangeDisplayCheckbox("R1 parellel R2", true);
    var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // console.log(inputCheckboxes);
    inputCheckboxes[1].remove();

    //============================================================//

    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
    box31 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box31);
    var edges = new THREE.EdgesGeometry(boxGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
    box31.add(line);
    box31.position.set(0, 0, -3.4);

    //  first resistor text

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R1", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel81 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel81);


        thevel81.position.set(-0.55, 0, -3);
        thevel81.rotation.x = - Math.PI / 2;


    });


    

    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box32 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box32);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box32.add(line2);
    box32.position.set(0, 0, -1);



    //  second resistor txt

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R2", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel82 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel82);


        thevel82.position.set(-0.55, 0, -.6);
        thevel82.rotation.x = - Math.PI / 2;


    });


    //wire connecting the resistors
    //  var curve1 = new THREE.CubicBezierCurve3(
    //      new THREE.Vector3(-8.8, 0, .4),
    //      new THREE.Vector3(-7, 0, .4),
    //      new THREE.Vector3(-6, 0, .4),
    //      new THREE.Vector3(-5.86666, 0, 0.4)
    //  );

    //  var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
    //  var mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

    //  PIEaddElement(mesh1);

    //wire connecting the resistors
    var curve2 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-1.46666, 0, -3.4),
        new THREE.Vector3(-1.5, 0, -3.4),
        new THREE.Vector3(-2, 0, -3.4),
        new THREE.Vector3(-7, 0, -3.4)
    );

    var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
    mesh31 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh31);

    //wire connecting the resistors
    var curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(1.466666666, 0, -3.4),
        new THREE.Vector3(2, 0, -3.4),
        new THREE.Vector3(3, 0, -3.4),
        new THREE.Vector3(7, 0, -3.4)
    );

    var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
    mesh32 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh32);

    //wire connecting the resistors
    var curve4 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-1.46666, 0, -1),
        new THREE.Vector3(-1.5, 0, -1),
        new THREE.Vector3(-2, 0, -1),
        new THREE.Vector3(-7, 0, -1)
    );

    var tube4 = new THREE.TubeGeometry(curve4, 100, 0.05, 20, false);
    mesh33 = new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh33);

    //wire connecting the resistors
    var curve5 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(1.466666666, 0, -1),
        new THREE.Vector3(2, 0, -1),
        new THREE.Vector3(3, 0, -1),
        new THREE.Vector3(7, 0, -1)
    );

    var tube5 = new THREE.TubeGeometry(curve5, 100, 0.05, 20, false);
    mesh34 = new THREE.Mesh(tube5, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh34);

    //wire connecting the resistors
    var curve6 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-8.8, 0, .4),
        new THREE.Vector3(-8.5, 0, .4),
        new THREE.Vector3(-8.3, 0, .4),
        new THREE.Vector3(-7, 0, .4)
    );

    var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
    mesh35 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh35);

    //  wire connecting the resistors
    var curve9 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7, 0, .4),
        new THREE.Vector3(7.5, 0, .4),
        new THREE.Vector3(8, 0, .4),
        new THREE.Vector3(8.8, 0, .4)
    );

    var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
    mesh36 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh36);


    //  //vertical lines
    var curve7 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-7, 0, -3.4),
        new THREE.Vector3(-7, 0, -1.6),
        new THREE.Vector3(-7, 0, -1.2),
        new THREE.Vector3(-7, 0, .4)
    );

    var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
    mesh37 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh37);

    // //  vertical lines
    var curve8 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7, 0, -3.4),
        new THREE.Vector3(7, 0, -1.6),
        new THREE.Vector3(7, 0, -1.2),
        new THREE.Vector3(7, 0, .4)
    );

    var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
    mesh38 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh38);


    R12 = (R1 * R2) / (R1 + R2);

    PIEaddMyText("R12", R12);
    PIEaddMyCheckbox("R3 parellel R4",false,level3Case3);
    PIEaddMyCheckbox("R3 series R4",false,level3Case4);
    PIErender();
   
    console.log("in l3c1");
}
flag32=1;
flag33=0;



}


function level3Case2(){
 //r1 s r2
 if(flag32==0){
    PIEchangeDisplayCheckbox("R1 series R2", true);
    var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // console.log(inputCheckboxes);
    inputCheckboxes[0].remove();

    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
     box1 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({color: "gray" }));
     PIEaddElement(box1);
     var edges = new THREE.EdgesGeometry(boxGeom);
     var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
     box1.add(line);
     box1.position.set(-4.4, 0, -3.4);

    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box2 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));//color: 0xd3d3d3
    PIEaddElement(box2);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box2.add(line2);
    box2.position.set(4.4, 0, -3.4);


    //  first resistor text

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R1", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel81 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel81);


        thevel81.position.set(-5, 0, -3);
        thevel81.rotation.x = - Math.PI / 2;


    });







    //  second resistor txt

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R2", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel82 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel82);


        thevel82.position.set(3.8, 0, -3);
        thevel82.rotation.x = - Math.PI / 2;


    });

     //wire connecting the resistors
     var curve1 = new THREE.CubicBezierCurve3(
         new THREE.Vector3(-7, 0,-3.4),
         new THREE.Vector3(-6.5, 0,-3.4),
         new THREE.Vector3(-6, 0,-3.4),
         new THREE.Vector3(-5.86666, 0, -3.4)
     );

     var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
     mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

     PIEaddElement(mesh1);

     //wire connecting the resistors
     var curve2 = new THREE.CubicBezierCurve3(
         new THREE.Vector3(-2.93333, 0,-3.4),
         new THREE.Vector3(-1, 0,-3.4),
         new THREE.Vector3(-1.5, 0,-3.4),
         new THREE.Vector3(2.933333333333, 0, -3.4)
     );

     var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
     mesh2 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

     PIEaddElement(mesh2);

     //wire connecting the resistors
     var curve3 = new THREE.CubicBezierCurve3(
         new THREE.Vector3(5.866666666, 0,-3.4),
         new THREE.Vector3(6, 0,-3.4),
         new THREE.Vector3(7, 0,-3.4),
         new THREE.Vector3(7, 0,-3.4)
     );

     var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
     mesh3 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

     PIEaddElement(mesh3);

      //  //vertical lines
    var curve7 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-7, 0, -3.4),
        new THREE.Vector3(-7, 0, -1.6),
        new THREE.Vector3(-7, 0, -1.2),
        new THREE.Vector3(-7, 0, .4)
    );

    var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
    mesh4 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh4);

    // //  vertical lines
    var curve8 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7, 0, -3.4),
        new THREE.Vector3(7, 0, -1.6),
        new THREE.Vector3(7, 0, -1.2),
        new THREE.Vector3(7, 0, .4)
    );

    var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
    mesh5 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh5);

    //wires connecting the terminals to the resistors in series

        //wire connecting the resistors
        var curve6 = new THREE.CubicBezierCurve3(
            new THREE.Vector3(-8.8, 0, .4),
            new THREE.Vector3(-8.5, 0, .4),
            new THREE.Vector3(-8.3, 0, .4),
            new THREE.Vector3(-7, 0, .4)
        );
    
        var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
        mesh6 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));
    
        PIEaddElement(mesh6);
    
        //  wire connecting the resistors
        var curve9 = new THREE.CubicBezierCurve3(
            new THREE.Vector3(7, 0, .4),
            new THREE.Vector3(7.5, 0, .4),
            new THREE.Vector3(8, 0, .4),
            new THREE.Vector3(8.8, 0, .4)
        );
    
        var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
        mesh7 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));
    
        PIEaddElement(mesh7);



        R12 = (R1 + R2);

        PIEaddMyText("R12", R12);
        PIEaddMyCheckbox("R3 parellel R4",false,level3Case3);
        PIEaddMyCheckbox("R3 series R4",false,level3Case4);
        PIErender();
    
        console.log("in l3c1");
    }
    flag32=1;
    flag33=0;






}

function level3Case3(){

    if(flag33==0){
    PIEchangeDisplayCheckbox("R3 parellel R4", true);
    var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // console.log(inputCheckboxes);
    inputCheckboxes[2].remove();

    //============================================================//

    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
    box21 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box21);
    var edges = new THREE.EdgesGeometry(boxGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
    box21.add(line);
    box21.position.set(0, 0, 1.4);

    //  first resistor text

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R3", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel83 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel83);


        thevel83.position.set(-0.55, 0, 1.8);
        thevel83.rotation.x = - Math.PI / 2;


    });



        //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box22 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box22);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box22.add(line2);
    box22.position.set(0,0,3.8);


    //  second resistor txt
    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R4", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel84 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel84);


        thevel84.position.set(-0.55, 0, 4.2);
        thevel84.rotation.x = - Math.PI / 2;


    });


    //wire connecting the resistors
    //  var curve1 = new THREE.CubicBezierCurve3(
    //      new THREE.Vector3(-8.8, 0, .4),
    //      new THREE.Vector3(-7, 0, .4),
    //      new THREE.Vector3(-6, 0, .4),
    //      new THREE.Vector3(-5.86666, 0, 0.4)
    //  );

    //  var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
    //  var mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

    //  PIEaddElement(mesh1);

    //wire connecting the resistors
    var curve2 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-1.46666, 0, 3.8),
        new THREE.Vector3(-1.5, 0, 3.8),
        new THREE.Vector3(-2, 0, 3.8),
        new THREE.Vector3(-7, 0, 3.8)
    );

    var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
    mesh21 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh21);

    //wire connecting the resistors
    var curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(1.466666666, 0, 3.8),
        new THREE.Vector3(2, 0, 3.8),
        new THREE.Vector3(3, 0, 3.8),
        new THREE.Vector3(7, 0, 3.8)
    );

    var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
    mesh22 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh22);

    //wire connecting the resistors
    var curve4 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-1.46666, 0, 1.4),
        new THREE.Vector3(-1.5, 0, 1.4),
        new THREE.Vector3(-2, 0, 1.4),
        new THREE.Vector3(-7, 0, 1.4)
    );

    var tube4 = new THREE.TubeGeometry(curve4, 100, 0.05, 20, false);
    mesh23 = new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh23);

    //wire connecting the resistors
    var curve5 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(1.466666666, 0, 1.4),
        new THREE.Vector3(2, 0, 1.4),
        new THREE.Vector3(3, 0, 1.4),
        new THREE.Vector3(7, 0, 1.4)
    );

    var tube5 = new THREE.TubeGeometry(curve5, 100, 0.05, 20, false);
    mesh24 = new THREE.Mesh(tube5, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh24);

    //wire connecting the resistors
    var curve6 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-8.8, 0, .4),
        new THREE.Vector3(-8.5, 0, .4),
        new THREE.Vector3(-8.3, 0, .4),
        new THREE.Vector3(-7, 0, .4)
    );

    var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
    mesh25 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh25);

    //  wire connecting the resistors
    var curve9 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7, 0, .4),
        new THREE.Vector3(7.5, 0, .4),
        new THREE.Vector3(8, 0, .4),
        new THREE.Vector3(8.8, 0, .4)
    );

    var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
    mesh26 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh26);


    //  //vertical lines
    var curve7 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-7, 0, 3.8),
        new THREE.Vector3(-7, 0, 1.6),
        new THREE.Vector3(-7, 0, 1.2),
        new THREE.Vector3(-7, 0, .4)
    );

    var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
    mesh27 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh27);

    // //  vertical lines
    var curve8 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7, 0, 3.8),
        new THREE.Vector3(7, 0, 1.6),
        new THREE.Vector3(7, 0, 1.2),
        new THREE.Vector3(7, 0, .4)
    );

    var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
    mesh28 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh28);

    PIErender();


    R34 = (R3* R4) / (R3 + R4);

    PIEaddMyText("R34", R34);
    PIEaddMyCheckbox("R12 parellel R34",false,level3Case9);
    
    PIErender();
   
    console.log("in l3c3");
}
flag33=1;
flag34=0;

}

function level3Case4(){

    //r3 s r4 
    if(flag33==0){
    PIEchangeDisplayCheckbox("R3 series R4", true);
    var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // console.log(inputCheckboxes);
    inputCheckboxes[1].remove();

    //first resistor
     var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
     box41 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({color: "gray" }));
     PIEaddElement(box41);
     var edges = new THREE.EdgesGeometry(boxGeom);
     var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
     box41.add(line);
     box41.position.set(-4.4, 0, 3.8);



    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box42 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));//color: 0xd3d3d3
    PIEaddElement(box42);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box42.add(line2);
    box42.position.set(4.4, 0, 3.8);


    //  first resistor text

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R3", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel83 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel83);


        thevel83.position.set(-5, 0, 4.2);
        thevel83.rotation.x = - Math.PI / 2;


    });




    //  second resistor txt

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R4", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel84 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel84);


        thevel84.position.set(3.8, 0, 4.2);
        thevel84.rotation.x = - Math.PI / 2;


    });

     //wire connecting the resistors
     var curve1 = new THREE.CubicBezierCurve3(
         new THREE.Vector3(-7, 0,3.8),
         new THREE.Vector3(-6.5, 0,3.8),
         new THREE.Vector3(-6, 0,3.8),
         new THREE.Vector3(-5.86666, 0, 3.8)
     );

     var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
     mesh41 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

     PIEaddElement(mesh41);

     //wire connecting the resistors
     var curve2 = new THREE.CubicBezierCurve3(
         new THREE.Vector3(-2.93333, 0,3.8),
         new THREE.Vector3(-1, 0,3.8),
         new THREE.Vector3(-1.5, 0,3.8),
         new THREE.Vector3(2.933333333333, 0, 3.8)
     );

     var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
     mesh42 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

     PIEaddElement(mesh42);

     //wire connecting the resistors
     var curve3 = new THREE.CubicBezierCurve3(
         new THREE.Vector3(5.866666666, 0,3.8),
         new THREE.Vector3(6, 0,3.8),
         new THREE.Vector3(7, 0,3.8),
         new THREE.Vector3(7, 0,3.8)
     );

     var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
     mesh43 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

     PIEaddElement(mesh43);

      //  //vertical lines
    var curve7 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-7, 0, 3.8),
        new THREE.Vector3(-7, 0, 1.6),
        new THREE.Vector3(-7, 0, 1.2),
        new THREE.Vector3(-7, 0, .4)
    );

    var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
    mesh44 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh44);

    // //  vertical lines
    var curve8 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7, 0, 3.8),
        new THREE.Vector3(7, 0, 1.6),
        new THREE.Vector3(7, 0, 1.2),
        new THREE.Vector3(7, 0, .4)
    );

    var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
    mesh45 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh45);

    //wires connecting the terminals to the resistors in series

        //wire connecting the resistors
        var curve6 = new THREE.CubicBezierCurve3(
            new THREE.Vector3(-8.8, 0, .4),
            new THREE.Vector3(-8.5, 0, .4),
            new THREE.Vector3(-8.3, 0, .4),
            new THREE.Vector3(-7, 0, .4)
        );
    
        var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
        mesh46 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));
    
        PIEaddElement(mesh46);
    
        //  wire connecting the resistors
        var curve9 = new THREE.CubicBezierCurve3(
            new THREE.Vector3(7, 0, .4),
            new THREE.Vector3(7.5, 0, .4),
            new THREE.Vector3(8, 0, .4),
            new THREE.Vector3(8.8, 0, .4)
        );
    
        var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
        mesh47 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));
    
        PIEaddElement(mesh47);



        R34 = (R3 + R4);

        PIEaddMyText("R34", R34);
        PIEaddMyCheckbox("R12 parellel R34",false,level3Case10);
        
        PIErender();
    }
    flag33=1;
    flag34=0;

}

function level3Case9(){
    if(flag34==0){
    PIEchangeDisplayCheckbox("R12 parellel R34",true);
    R1234= (R12*R34)/(R12+R34);    

    R1234string=R1234.toFixed(2);
    PIEaddMyCheckbox("R1234",R1234);

    PIEtableSelect("Observation Table");

    PIEupdateTableCell(10, 0, "Your Resistance");
    PIEsetCellInput(10, 1, 3, R1234.toFixed(2));
    giveupbtn.remove();

    if(R1234string!=refflevel3string){
       
    resetMessage();
    currentLevel="Level 1";
    }
    else if (R1234string == refflevel3string&&flag==0) {
     
      nextlevelMessage();

    level2btn=PIEaddButton("Next Level");

    level2btn.addEventListener("click",level4Action);

    PIErender();
    }
    
    console.log("level3case9");
    }

    flag34=1;
    
}


function level3Case10(){
if(flag34==0){
    PIEchangeDisplayCheckbox("R12 parellel R34",true);
    R1234= (R12*R34)/(R12+R34);    
    R1234string=R1234.toFixed(2);
    PIEaddMyCheckbox("R1234",R1234);


    PIEtableSelect("Observation Table");

    PIEupdateTableCell(10, 0, "Your Resistance");
    PIEsetCellInput(10, 1, 3, R1234.toFixed(2));
    giveupbtn.remove();

    if(R1234string!=refflevel3string){
     
        resetMessage();
        currentLevel="Level 1";
    }
    else if (R1234string == refflevel3string &&flag==0) {
        
       nextlevelMessage();

         level2btn=PIEaddButton("Next Level");

         level2btn.addEventListener("click",level4Action);
         PIErender();
    }
    
    console.log("level3case10");

}
flag34=1;

}


//=====================================================================//

// level 4 cases

//=======================================================================//


function level4Case1(){

    // r1 p r2 p r3

    if(flag42==0){
    PIEchangeDisplayCheckbox("R1 p R2 p R3", true);
    var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // console.log(inputCheckboxes);
    for(var i=4;i>=0;i--){
        if(i!=0)
        inputCheckboxes[i].remove();
    }

    //////////////////////////////////////////

    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
    box31 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box31);
    var edges = new THREE.EdgesGeometry(boxGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
    box31.add(line);
    box31.position.set(0, 0, -5.8);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R1", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel81 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel81);


        thevel81.position.set(-0.55, 0, -5.4);
        thevel81.rotation.x = - Math.PI / 2;


    });


    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
    box33 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box33);
    var edges = new THREE.EdgesGeometry(boxGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
    box33.add(line);
    box33.position.set(0, 0, -3.4);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R2", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel82 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel82);


        thevel82.position.set(-0.55, 0, -3);
        thevel82.rotation.x = - Math.PI / 2;


    });


    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box32 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box32);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box32.add(line2);
    box32.position.set(0, 0, -1);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R3", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel83 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel83);


        thevel83.position.set(-0.55, 0, -.6);
        thevel83.rotation.x = - Math.PI / 2;


    });

    //wire connecting the resistors
    //  var curve1 = new THREE.CubicBezierCurve3(
    //      new THREE.Vector3(-8.8, 0, .4),
    //      new THREE.Vector3(-7, 0, .4),
    //      new THREE.Vector3(-6, 0, .4),
    //      new THREE.Vector3(-5.86666, 0, 0.4)
    //  );

    //  var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
    //  var mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

    //  PIEaddElement(mesh1);

    //wire connecting the resistors
    var curve2 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-1.46666, 0, -3.4),
        new THREE.Vector3(-1.5, 0, -3.4),
        new THREE.Vector3(-2, 0, -3.4),
        new THREE.Vector3(-7.8, 0, -3.4)
    );

    var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
    mesh31 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh31);

    //wire connecting the resistors
    var curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(1.466666666, 0, -3.4),
        new THREE.Vector3(2, 0, -3.4),
        new THREE.Vector3(3, 0, -3.4),
        new THREE.Vector3(7.8, 0, -3.4)
    );

    var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
    mesh32 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh32);

    //wire connecting the resistors
    var curve4 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-1.46666, 0, -1),
        new THREE.Vector3(-1.5, 0, -1),
        new THREE.Vector3(-2, 0, -1),
        new THREE.Vector3(-7.8, 0, -1)
    );

    var tube4 = new THREE.TubeGeometry(curve4, 100, 0.05, 20, false);
    mesh33 = new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh33);

    var curve44 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-1.46666, 0, -5.8),
        new THREE.Vector3(-1.5, 0, -5.8),
        new THREE.Vector3(-2, 0, -5.8),
        new THREE.Vector3(-7.8, 0, -5.8)
    );

    var tube44= new THREE.TubeGeometry(curve44, 100, 0.05, 20, false);
    mesh3 = new THREE.Mesh(tube44, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh3);

    var curve45 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(1.46666, 0, -5.8),
        new THREE.Vector3(1.5, 0, -5.8),
        new THREE.Vector3(2, 0, -5.8),
        new THREE.Vector3(7.8, 0, -5.8)
    );

    var tube45= new THREE.TubeGeometry(curve45, 100, 0.05, 20, false);
    mesh1 = new THREE.Mesh(tube45, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh1);

    //wire connecting the resistors
    var curve5 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(1.466666666, 0, -1),
        new THREE.Vector3(2, 0, -1),
        new THREE.Vector3(3, 0, -1),
        new THREE.Vector3(7.8, 0, -1)
    );

    var tube5 = new THREE.TubeGeometry(curve5, 100, 0.05, 20, false);
    mesh34 = new THREE.Mesh(tube5, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh34);

    //wire connecting the resistors
    var curve6 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-8.8, 0, .4),
        new THREE.Vector3(-8.5, 0, .4),
        new THREE.Vector3(-8.3, 0, .4),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
    mesh35 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh35);

    //  wire connecting the resistors
    var curve9 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, .4),
        new THREE.Vector3(7.5, 0, .4),
        new THREE.Vector3(8, 0, .4),
        new THREE.Vector3(8.8, 0, .4)
    );

    var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
    mesh36 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh36);


    //  //vertical lines
    var curve7 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-7.8, 0, -5.8),
        new THREE.Vector3(-7.8, 0, -1.6),
        new THREE.Vector3(-7.8, 0, -1.2),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
    mesh37 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh37);

    // //  vertical lines
    var curve8 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, -5.8),
        new THREE.Vector3(7.8, 0, -1.6),
        new THREE.Vector3(7.8, 0, -1.2),
        new THREE.Vector3(7.8, 0, .4)
    );

    var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
    mesh38 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh38);



    R123 = (R1 * R2*R3) / (R1*R2 + R2*R3+R1*R3);

    PIEaddMyText("R123", R123);
    PIEaddMyCheckbox("R123 parellel R4",false,level4Case10);
    
    PIErender();
   
    console.log("in l4c1");

    }
    flag42=1;
    flag43=0;
}

function level4Case2(){


    // r1 s r2 s r3
    if(flag42==0){
    PIEchangeDisplayCheckbox("R1 s R2 s R3", true);
    var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // console.log(inputCheckboxes);
    for(var i=4;i>=0;i--){
        if(i!=1)
        inputCheckboxes[i].remove();
    }


    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
    box1 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({color: "gray" }));
    PIEaddElement(box1);
    var edges = new THREE.EdgesGeometry(boxGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
    box1.add(line);
    box1.position.set(-4.4, 0, -3.4);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R1", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel81 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel81);


        thevel81.position.set(-5, 0, -3);
        thevel81.rotation.x = - Math.PI / 2;


    });



    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box2 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({color: "gray" }));//color: 0xd3d3d3
    PIEaddElement(box2);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box2.add(line2);
    box2.position.set(4.4, 0, -3.4);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R3", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel82 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel82);


        thevel82.position.set(3.8, 0, -3);
        thevel82.rotation.x = - Math.PI / 2;


    });


    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box3 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({color: "gray" }));//color: 0xd3d3d3
    PIEaddElement(box3);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box3.add(line2);
    box3.position.set(0, 0, -3.4);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R2", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel83 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel83);


        thevel83.position.set(-0.55, 0, -3);
        thevel83.rotation.x = - Math.PI / 2;


    });



    //wire connecting the resistors
    var curve1 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-7.8, 0,-3.4),
        new THREE.Vector3(-6.5, 0,-3.4),
        new THREE.Vector3(-6, 0,-3.4),
        new THREE.Vector3(-5.86666, 0, -3.4)
    );

    var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
    mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh1);

    //wire connecting the resistors
    var curve2 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-2.93333, 0,-3.4),
        new THREE.Vector3(-1, 0,-3.4),
        new THREE.Vector3(-1.5, 0,-3.4),
        new THREE.Vector3(2.933333333333, 0, -3.4)
    );

    var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
    mesh2 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh2);

    //wire connecting the resistors
    var curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(5.866666666, 0,-3.4),
        new THREE.Vector3(6, 0,-3.4),
        new THREE.Vector3(7, 0,-3.4),
        new THREE.Vector3(7.8, 0,-3.4)
    );

    var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
    mesh3 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh3);

    var curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-1.466, 0,-3.4),
        new THREE.Vector3(-2, 0,-3.4),
        new THREE.Vector3(-3, 0,-3.4),
        new THREE.Vector3(-4.4, 0,-3.4)
    );

    var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
    mesh31 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh31);
    
    //connectint middle res
    var curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(1.4666, 0,-3.4),
        new THREE.Vector3(2, 0,-3.4),
        new THREE.Vector3(3, 0,-3.4),
        new THREE.Vector3(4.4, 0,-3.4)
    );

    var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
    mesh32 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh32);

     //  //vertical lines
   var curve7 = new THREE.CubicBezierCurve3(
       new THREE.Vector3(-7.8, 0, -3.4),
       new THREE.Vector3(-7.8, 0, -1.6),
       new THREE.Vector3(-7.8, 0, -1.2),
       new THREE.Vector3(-7.8, 0, .4)
   );

   var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
   mesh4 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

   PIEaddElement(mesh4);

   // //  vertical lines
   var curve8 = new THREE.CubicBezierCurve3(
       new THREE.Vector3(7.8, 0, -3.4),
       new THREE.Vector3(7.8, 0, -1.6),
       new THREE.Vector3(7.8, 0, -1.2),
       new THREE.Vector3(7.8, 0, .4)
   );

   var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
   mesh5 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

   PIEaddElement(mesh5);

   //wires connecting the terminals to the resistors in series

       //wire connecting the resistors
       var curve6 = new THREE.CubicBezierCurve3(
           new THREE.Vector3(-8.8, 0, .4),
           new THREE.Vector3(-8.5, 0, .4),
           new THREE.Vector3(-8.3, 0, .4),
           new THREE.Vector3(-7.8, 0, .4)
       );
   
       var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
       mesh6 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));
   
       PIEaddElement(mesh6);
   
       //  wire connecting the resistors
       var curve9 = new THREE.CubicBezierCurve3(
           new THREE.Vector3(7.8, 0, .4),
           new THREE.Vector3(7.5, 0, .4),
           new THREE.Vector3(8, 0, .4),
           new THREE.Vector3(8.8, 0, .4)
       );
   
       var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
       mesh7 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));
   
       PIEaddElement(mesh7);

       R123 = (R1+R2+R3);
       

       PIEaddMyText("R123", R123);
       PIEaddMyCheckbox("R123 parellel R4",false,level4Case10);
       
       PIErender();
      
       console.log("in l4c2");
    }
    flag42=1;
    flag43=0;
}


function level4Case3(){
    if(flag42==0){
    PIEchangeDisplayCheckbox("R1 p R2 s R3", true);
    var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // console.log(inputCheckboxes);
    for(var i=4;i>=0;i--){
        if(i!=2)
        inputCheckboxes[i].remove();
    }


    //===============================================//

    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
    box31 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box31);
    var edges = new THREE.EdgesGeometry(boxGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
    box31.add(line);
    box31.position.set(-4.4, 0, -5.8);

    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box32 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box32);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box32.add(line2);
    box32.position.set(-4.4, 0, -1);

    //second resistor

    var boxGeom3 = new THREE.BoxGeometry(2.933, .5, 1);
    box2 = new THREE.Mesh(boxGeom3, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box2);
    var edges3 = new THREE.EdgesGeometry(boxGeom3);
    var line3 = new THREE.LineSegments(edges3, new THREE.LineBasicMaterial({ color: 0x000 }));
    box2.add(line3);
    box2.position.set(4.4, 0, -3.8);


    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R1", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel81 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel81);


        thevel81.position.set(-5, 0, -5.4);
        thevel81.rotation.x = - Math.PI / 2;


    });

 
    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R2", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel82 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel82);


        thevel82.position.set(-5, 0, -.6);
        thevel82.rotation.x = - Math.PI / 2;


    });
   

    //third resistor txt

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R3", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel83 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel83);


        thevel83.position.set(3.8, 0, -3.4);
        thevel83.rotation.x = - Math.PI / 2;


    });


    //wire connecting the resistors
    //  var curve1 = new THREE.CubicBezierCurve3(
    //      new THREE.Vector3(-8.8, 0, .4),
    //      new THREE.Vector3(-7, 0, .4),
    //      new THREE.Vector3(-6, 0, .4),
    //      new THREE.Vector3(-5.86666, 0, 0.4)
    //  );

    //  var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
    //  var mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

    //  PIEaddElement(mesh1);

    //wire connecting the resistors

    var curve2 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-5.8666, 0, -5.8),
        new THREE.Vector3(-6, 0, -5.8),
        new THREE.Vector3(-7, 0, -5.8),
        new THREE.Vector3(-7.8, 0, -5.8)
    );

    var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
    mesh31 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh31);

    //wire connecting the resistors
    var curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-2.933, 0, -5.8),
        new THREE.Vector3(-1, 0, -5.8),
        new THREE.Vector3(-1, 0, -5.8),
        new THREE.Vector3(-0.999, 0, -5.8)
    );

    var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
    mesh32 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh32);

    //wire connecting the resistors
    var curve4 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-5.8666, 0, -1),
        new THREE.Vector3(-5.9, 0, -1),
        new THREE.Vector3(-6, 0, -1),
        new THREE.Vector3(-7.8, 0, -1)
    );

    var tube4 = new THREE.TubeGeometry(curve4, 100, 0.05, 20, false);
    mesh33 = new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh33);

    //wire connecting the resistors
    var curve5 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-2.9333, 0, -1),
        new THREE.Vector3(-1, 0, -1),
        new THREE.Vector3(-1, 0, -1),
        new THREE.Vector3(-0.999, 0, -1)
    );

    var tube5 = new THREE.TubeGeometry(curve5, 100, 0.05, 20, false);
    mesh34 = new THREE.Mesh(tube5, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh34);

    //wire connecting the resistors
    var curve6 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-8.8, 0, .4),
        new THREE.Vector3(-8.5, 0, .4),
        new THREE.Vector3(-8.3, 0, .4),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
    mesh35 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh35);

    //  wire connecting the resistors
    var curve9 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, .4),
        new THREE.Vector3(7.5, 0, .4),
        new THREE.Vector3(8, 0, .4),
        new THREE.Vector3(8.8, 0, .4)
    );

    var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
    mesh36 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh36);


    //  //vertical lines
    var curve7 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-7.8, 0, -5.8),
        new THREE.Vector3(-7.8, 0, -1.6),
        new THREE.Vector3(-7.8, 0, -1.2),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
    mesh37 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh37);

    // //  vertical lines
    var curve8 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, -3.8),
        new THREE.Vector3(7.8, 0, -1.6),
        new THREE.Vector3(7.8, 0, -1.2),
        new THREE.Vector3(7.8, 0, .4)
    );

    var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
    mesh38 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh38);
    // //  vertical lines
    var curve41 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-0.999, 0, -5.8),
        new THREE.Vector3(-0.999, 0, -1.6),
        new THREE.Vector3(-0.999, 0, -1.2),
        new THREE.Vector3(-0.999, 0, -1)
    );

    var tube41 = new THREE.TubeGeometry(curve41, 100, 0.05, 20, false);
    mesh41 = new THREE.Mesh(tube41, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh41);

    var curve41 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(5.866, 0, -3.8),
        new THREE.Vector3(6, 0, -3.8),
        new THREE.Vector3(6.999, 0, -3.8),
        new THREE.Vector3(7.8, 0, -3.8)
    );

    var tube41 = new THREE.TubeGeometry(curve41, 100, 0.05, 20, false);
    mesh44 = new THREE.Mesh(tube41, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh44);

    var curve41 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(2.966, 0, -3.8),
        new THREE.Vector3(0.999, 0, -3.8),
        new THREE.Vector3(0.999, 0, -3.8),
        new THREE.Vector3(-0.999, 0, -3.8)
    );

    var tube41 = new THREE.TubeGeometry(curve41, 100, 0.05, 20, false);
    mesh45 = new THREE.Mesh(tube41, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh45);

    R123 = (R1*R2)/(R1+R2)+R3;

       PIEaddMyText("R123", R123);
       PIEaddMyCheckbox("R123 parellel R4",false,level4Case10);
       
       PIErender();
      
      
   
   
    console.log("in l4c3");
    }
    flag42=1;
    flag43=0;

}


function level4Case4(){
    if(flag42==0){

    PIEchangeDisplayCheckbox("R1 p R3 s R2", true);
    var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // console.log(inputCheckboxes);
    for(var i=4;i>=0;i--){
        if(i!=3)
        inputCheckboxes[i].remove();
    }


    //===============================================//

    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
    box31 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box31);
    var edges = new THREE.EdgesGeometry(boxGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
    box31.add(line);
    box31.position.set(-4.4, 0, -5.8);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R1", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel81 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel81);


        thevel81.position.set(-5, 0, -5.4);
        thevel81.rotation.x = - Math.PI / 2;


    });


    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box32 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box32);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box32.add(line2);
    box32.position.set(-4.4, 0, -1);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R3", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel82 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel82);


        thevel82.position.set(-5, 0, -.6);
        thevel82.rotation.x = - Math.PI / 2;


    });


    //second resistor

    var boxGeom3 = new THREE.BoxGeometry(2.933, .5, 1);
    box2 = new THREE.Mesh(boxGeom3, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box2);
    var edges3 = new THREE.EdgesGeometry(boxGeom3);
    var line3 = new THREE.LineSegments(edges3, new THREE.LineBasicMaterial({ color: 0x000 }));
    box2.add(line3);
    box2.position.set(4.4, 0, -3.8);


    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R2", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel83 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel83);


        thevel83.position.set(3.8, 0, -3.4);
        thevel83.rotation.x = - Math.PI / 2;


    });

    //wire connecting the resistors
    //  var curve1 = new THREE.CubicBezierCurve3(
    //      new THREE.Vector3(-8.8, 0, .4),
    //      new THREE.Vector3(-7, 0, .4),
    //      new THREE.Vector3(-6, 0, .4),
    //      new THREE.Vector3(-5.86666, 0, 0.4)
    //  );

    //  var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
    //  var mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

    //  PIEaddElement(mesh1);

    //wire connecting the resistors

    var curve2 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-5.8666, 0, -5.8),
        new THREE.Vector3(-6, 0, -5.8),
        new THREE.Vector3(-7, 0, -5.8),
        new THREE.Vector3(-7.8, 0, -5.8)
    );

    var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
    mesh31 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh31);

    //wire connecting the resistors
    var curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-2.933, 0, -5.8),
        new THREE.Vector3(-1, 0, -5.8),
        new THREE.Vector3(-1, 0, -5.8),
        new THREE.Vector3(-0.999, 0, -5.8)
    );

    var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
    mesh32 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh32);

    //wire connecting the resistors
    var curve4 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-5.8666, 0, -1),
        new THREE.Vector3(-5.9, 0, -1),
        new THREE.Vector3(-6, 0, -1),
        new THREE.Vector3(-7.8, 0, -1)
    );

    var tube4 = new THREE.TubeGeometry(curve4, 100, 0.05, 20, false);
    mesh33 = new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh33);

    //wire connecting the resistors
    var curve5 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-2.9333, 0, -1),
        new THREE.Vector3(-1, 0, -1),
        new THREE.Vector3(-1, 0, -1),
        new THREE.Vector3(-0.999, 0, -1)
    );

    var tube5 = new THREE.TubeGeometry(curve5, 100, 0.05, 20, false);
    mesh34 = new THREE.Mesh(tube5, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh34);

    //wire connecting the resistors
    var curve6 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-8.8, 0, .4),
        new THREE.Vector3(-8.5, 0, .4),
        new THREE.Vector3(-8.3, 0, .4),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
    mesh35 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh35);

    //  wire connecting the resistors
    var curve9 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, .4),
        new THREE.Vector3(7.5, 0, .4),
        new THREE.Vector3(8, 0, .4),
        new THREE.Vector3(8.8, 0, .4)
    );

    var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
    mesh36 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh36);


    //  //vertical lines
    var curve7 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-7.8, 0, -5.8),
        new THREE.Vector3(-7.8, 0, -1.6),
        new THREE.Vector3(-7.8, 0, -1.2),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
    mesh37 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh37);

    // //  vertical lines
    var curve8 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, -3.8),
        new THREE.Vector3(7.8, 0, -1.6),
        new THREE.Vector3(7.8, 0, -1.2),
        new THREE.Vector3(7.8, 0, .4)
    );

    var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
    mesh38 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh38);
    // //  vertical lines
    var curve41 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-0.999, 0, -5.8),
        new THREE.Vector3(-0.999, 0, -1.6),
        new THREE.Vector3(-0.999, 0, -1.2),
        new THREE.Vector3(-0.999, 0, -1)
    );

    var tube41 = new THREE.TubeGeometry(curve41, 100, 0.05, 20, false);
    mesh41 = new THREE.Mesh(tube41, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh41);

    var curve41 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(5.866, 0, -3.8),
        new THREE.Vector3(6, 0, -3.8),
        new THREE.Vector3(6.999, 0, -3.8),
        new THREE.Vector3(7.8, 0, -3.8)
    );

    var tube41 = new THREE.TubeGeometry(curve41, 100, 0.05, 20, false);
    mesh44 = new THREE.Mesh(tube41, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh44);

    var curve41 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(2.966, 0, -3.8),
        new THREE.Vector3(0.999, 0, -3.8),
        new THREE.Vector3(0.999, 0, -3.8),
        new THREE.Vector3(-0.999, 0, -3.8)
    );

    var tube41 = new THREE.TubeGeometry(curve41, 100, 0.05, 20, false);
    mesh45 = new THREE.Mesh(tube41, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh45);

    R123 = (R1*R3)/(R1+R3)+R2;

       PIEaddMyText("R123", R123);
       PIEaddMyCheckbox("R123 parellel R4",false,level4Case10);
       
       PIErender();
      
      
   
   
    console.log("in l4c4");
}
flag42=1;
flag43=0;


}
function level4Case5(){
        
    if(flag42==0){
    PIEchangeDisplayCheckbox("R2 p R3 s R1", true);
    var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // console.log(inputCheckboxes);
    for(var i=4;i>=0;i--){
        if(i!=4)
        inputCheckboxes[i].remove();
    }


    //===============================================//

    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
    box31 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box31);
    var edges = new THREE.EdgesGeometry(boxGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
    box31.add(line);
    box31.position.set(-4.4, 0, -5.8);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R2", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel81 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel81);


        thevel81.position.set(-5, 0, -5.4);
        thevel81.rotation.x = - Math.PI / 2;


    });


    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box32 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box32);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box32.add(line2);
    box32.position.set(-4.4, 0, -1);


    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R3", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel82 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel82);


        thevel82.position.set(-5, 0, -.6);
        thevel82.rotation.x = - Math.PI / 2;


    });

    //second resistor

    var boxGeom3 = new THREE.BoxGeometry(2.933, .5, 1);
    box2 = new THREE.Mesh(boxGeom3, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box2);
    var edges3 = new THREE.EdgesGeometry(boxGeom3);
    var line3 = new THREE.LineSegments(edges3, new THREE.LineBasicMaterial({ color: 0x000 }));
    box2.add(line3);
    box2.position.set(4.4, 0, -3.8);


    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R1", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel83 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel83);


        thevel83.position.set(3.8, 0, -3.4);
        thevel83.rotation.x = - Math.PI / 2;


    });

    //wire connecting the resistors
    //  var curve1 = new THREE.CubicBezierCurve3(
    //      new THREE.Vector3(-8.8, 0, .4),
    //      new THREE.Vector3(-7, 0, .4),
    //      new THREE.Vector3(-6, 0, .4),
    //      new THREE.Vector3(-5.86666, 0, 0.4)
    //  );

    //  var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
    //  var mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

    //  PIEaddElement(mesh1);

    //wire connecting the resistors

    var curve2 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-5.8666, 0, -5.8),
        new THREE.Vector3(-6, 0, -5.8),
        new THREE.Vector3(-7, 0, -5.8),
        new THREE.Vector3(-7.8, 0, -5.8)
    );

    var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
    mesh31 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh31);

    //wire connecting the resistors
    var curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-2.933, 0, -5.8),
        new THREE.Vector3(-1, 0, -5.8),
        new THREE.Vector3(-1, 0, -5.8),
        new THREE.Vector3(-0.999, 0, -5.8)
    );

    var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
    mesh32 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh32);

    //wire connecting the resistors
    var curve4 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-5.8666, 0, -1),
        new THREE.Vector3(-5.9, 0, -1),
        new THREE.Vector3(-6, 0, -1),
        new THREE.Vector3(-7.8, 0, -1)
    );

    var tube4 = new THREE.TubeGeometry(curve4, 100, 0.05, 20, false);
    mesh33 = new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh33);

    //wire connecting the resistors
    var curve5 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-2.9333, 0, -1),
        new THREE.Vector3(-1, 0, -1),
        new THREE.Vector3(-1, 0, -1),
        new THREE.Vector3(-0.999, 0, -1)
    );

    var tube5 = new THREE.TubeGeometry(curve5, 100, 0.05, 20, false);
    mesh34 = new THREE.Mesh(tube5, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh34);

    //wire connecting the resistors
    var curve6 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-8.8, 0, .4),
        new THREE.Vector3(-8.5, 0, .4),
        new THREE.Vector3(-8.3, 0, .4),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
    mesh35 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh35);

    //  wire connecting the resistors
    var curve9 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, .4),
        new THREE.Vector3(7.5, 0, .4),
        new THREE.Vector3(8, 0, .4),
        new THREE.Vector3(8.8, 0, .4)
    );

    var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
    mesh36 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh36);


    //  //vertical lines
    var curve7 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-7.8, 0, -5.8),
        new THREE.Vector3(-7.8, 0, -1.6),
        new THREE.Vector3(-7.8, 0, -1.2),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
    mesh37 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh37);

    // //  vertical lines
    var curve8 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, -3.8),
        new THREE.Vector3(7.8, 0, -1.6),
        new THREE.Vector3(7.8, 0, -1.2),
        new THREE.Vector3(7.8, 0, .4)
    );

    var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
    mesh38 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh38);
    // //  vertical lines
    var curve41 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-0.999, 0, -5.8),
        new THREE.Vector3(-0.999, 0, -1.6),
        new THREE.Vector3(-0.999, 0, -1.2),
        new THREE.Vector3(-0.999, 0, -1)
    );

    var tube41 = new THREE.TubeGeometry(curve41, 100, 0.05, 20, false);
    mesh41 = new THREE.Mesh(tube41, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh41);

    var curve41 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(5.866, 0, -3.8),
        new THREE.Vector3(6, 0, -3.8),
        new THREE.Vector3(6.999, 0, -3.8),
        new THREE.Vector3(7.8, 0, -3.8)
    );

    var tube41 = new THREE.TubeGeometry(curve41, 100, 0.05, 20, false);
    mesh44 = new THREE.Mesh(tube41, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh44);

    var curve41 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(2.966, 0, -3.8),
        new THREE.Vector3(0.999, 0, -3.8),
        new THREE.Vector3(0.999, 0, -3.8),
        new THREE.Vector3(-0.999, 0, -3.8)
    );

    var tube41 = new THREE.TubeGeometry(curve41, 100, 0.05, 20, false);
    mesh45 = new THREE.Mesh(tube41, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh45);

    R123 = (R3*R2)/(R3+R2)+R1;

       PIEaddMyText("R123", R123);
       PIEaddMyCheckbox("R123 parellel R4",false,level4Case10);
       
       PIErender();
      
      
   
   
    console.log("in l4c5");
}
flag42=1;
flag43=0;

}

function level4Case10(){

    if(flag43==0){
    PIEchangeDisplayCheckbox("R123 parellel R4",true);


    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
    box91 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box91);
    var edges = new THREE.EdgesGeometry(boxGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
    box91.add(line);
    box91.position.set(0, 0, 3.8);


    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R4", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel84 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel84);


        thevel84.position.set(-.58, 0, 4.2);
        thevel84.rotation.x = - Math.PI / 2;


    });

    // //second resistor
    // var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    // box22 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));
    // PIEaddElement(box22);
    // var edges2 = new THREE.EdgesGeometry(boxGeom2);
    // var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    // box22.add(line2);
    // box22.position.set(0,0,3.8);

    //wire connecting the resistors
    //  var curve1 = new THREE.CubicBezierCurve3(
    //      new THREE.Vector3(-8.8, 0, .4),
    //      new THREE.Vector3(-7, 0, .4),
    //      new THREE.Vector3(-6, 0, .4),
    //      new THREE.Vector3(-5.86666, 0, 0.4)
    //  );

    //  var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
    //  var mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

    //  PIEaddElement(mesh1);

    //wire connecting the resistors
    var curve2 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-1.46666, 0, 3.8),
        new THREE.Vector3(-1.5, 0, 3.8),
        new THREE.Vector3(-2, 0, 3.8),
        new THREE.Vector3(-7.8, 0, 3.8)
    );

    var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
    mesh91 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh91);

    //wire connecting the resistors
    var curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(1.466666666, 0, 3.8),
        new THREE.Vector3(2, 0, 3.8),
        new THREE.Vector3(3, 0, 3.8),
        new THREE.Vector3(7.8, 0, 3.8)
    );

    var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
    mesh92 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh92);

    //wire connecting the resistors
    // var curve4 = new THREE.CubicBezierCurve3(
    //     new THREE.Vector3(-1.46666, 0, 1.4),
    //     new THREE.Vector3(-1.5, 0, 1.4),
    //     new THREE.Vector3(-2, 0, 1.4),
    //     new THREE.Vector3(-7, 0, 1.4)
    // );

    // var tube4 = new THREE.TubeGeometry(curve4, 100, 0.05, 20, false);
    // mesh23 = new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({ color: "black" }));

    // PIEaddElement(mesh23);

    //wire connecting the resistors
    // var curve5 = new THREE.CubicBezierCurve3(
    //     new THREE.Vector3(1.466666666, 0, 1.4),
    //     new THREE.Vector3(2, 0, 1.4),
    //     new THREE.Vector3(3, 0, 1.4),
    //     new THREE.Vector3(7, 0, 1.4)
    // );

    // var tube5 = new THREE.TubeGeometry(curve5, 100, 0.05, 20, false);
    // mesh24 = new THREE.Mesh(tube5, new THREE.MeshBasicMaterial({ color: "black" }));

    // PIEaddElement(mesh24);

    //wire connecting the resistors
    var curve6 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-8.8, 0, .4),
        new THREE.Vector3(-8.5, 0, .4),
        new THREE.Vector3(-8.3, 0, .4),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
    mesh95 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh95);

    //  wire connecting the resistors
    var curve9 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, .4),
        new THREE.Vector3(7.5, 0, .4),
        new THREE.Vector3(8, 0, .4),
        new THREE.Vector3(8.8, 0, .4)
    );

    var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
    mesh96 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh96);


    //  //vertical lines
    var curve7 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-7.8, 0, 3.8),
        new THREE.Vector3(-7.8, 0, 1.6),
        new THREE.Vector3(-7.8, 0, 1.2),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
    mesh97 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh97);

    // //  vertical lines
    var curve8 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, 3.8),
        new THREE.Vector3(7.8, 0, 1.6),
        new THREE.Vector3(7.8, 0, 1.2),
        new THREE.Vector3(7.8, 0, .4)
    );

    var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
    mesh98 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh98);

    PIErender();


    R1234= (R123*R4)/(R123+R4);    
    R1234string=R1234.toFixed(2);
    PIEaddMyCheckbox("R1234",R1234);


    PIEtableSelect("Observation Table");

    PIEupdateTableCell(14, 0, "Your Resistance");
    PIEsetCellInput(14, 1, 3, R1234.toFixed(2));

    giveupbtn.remove();
    if(R1234string!=refflevel4string){
     
        resetMessage();
        currentLevel="Level 1";
    }
    else if (R1234string == refflevel4string&&flag==0) {
        
       nextlevelMessage();

         level2btn=PIEaddButton("Next Level");

         level2btn.addEventListener("click",level5Action);

         PIErender();
         
    }
    
    console.log("level4case10");

}
flag43=1;

}
/////////////////////////////////////////////////////////////////



//============================================//

// level 5cases

//============================================//

function level5Case1(){

    // r1 p r2 p r3

    
    if(flag52==0){
    PIEchangeDisplayCheckbox("R1 p R2 p R3", true);
    var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // console.log(inputCheckboxes);
    for(var i=4;i>=0;i--){
        if(i!=0)
        inputCheckboxes[i].remove();
    }

    //////////////////////////////////////////

    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
    box31 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box31);
    var edges = new THREE.EdgesGeometry(boxGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
    box31.add(line);
    box31.position.set(0, 0, -5.8);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R1", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel81 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel81);


        thevel81.position.set(-0.55, 0, -5.4);
        thevel81.rotation.x = - Math.PI / 2;


    });



    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
    box33 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box33);
    var edges = new THREE.EdgesGeometry(boxGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
    box33.add(line);
    box33.position.set(0, 0, -3.4);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R2", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel82 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel82);


        thevel82.position.set(-0.55, 0, -3);
        thevel82.rotation.x = - Math.PI / 2;


    });


    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box32 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box32);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box32.add(line2);
    box32.position.set(0, 0, -1);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R3", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel83 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel83);


        thevel83.position.set(-0.55, 0, -.6);
        thevel83.rotation.x = - Math.PI / 2;


    });

    //wire connecting the resistors
    //  var curve1 = new THREE.CubicBezierCurve3(
    //      new THREE.Vector3(-8.8, 0, .4),
    //      new THREE.Vector3(-7, 0, .4),
    //      new THREE.Vector3(-6, 0, .4),
    //      new THREE.Vector3(-5.86666, 0, 0.4)
    //  );

    //  var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
    //  var mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

    //  PIEaddElement(mesh1);

    //wire connecting the resistors
    var curve2 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-1.46666, 0, -3.4),
        new THREE.Vector3(-1.5, 0, -3.4),
        new THREE.Vector3(-2, 0, -3.4),
        new THREE.Vector3(-7.8, 0, -3.4)
    );

    var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
    mesh31 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh31);

    //wire connecting the resistors
    var curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(1.466666666, 0, -3.4),
        new THREE.Vector3(2, 0, -3.4),
        new THREE.Vector3(3, 0, -3.4),
        new THREE.Vector3(7.8, 0, -3.4)
    );

    var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
    mesh32 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh32);

    //wire connecting the resistors
    var curve4 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-1.46666, 0, -1),
        new THREE.Vector3(-1.5, 0, -1),
        new THREE.Vector3(-2, 0, -1),
        new THREE.Vector3(-7.8, 0, -1)
    );

    var tube4 = new THREE.TubeGeometry(curve4, 100, 0.05, 20, false);
    mesh33 = new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh33);

    var curve44 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-1.46666, 0, -5.8),
        new THREE.Vector3(-1.5, 0, -5.8),
        new THREE.Vector3(-2, 0, -5.8),
        new THREE.Vector3(-7.8, 0, -5.8)
    );

    var tube44= new THREE.TubeGeometry(curve44, 100, 0.05, 20, false);
    mesh3 = new THREE.Mesh(tube44, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh3);

    var curve45 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(1.46666, 0, -5.8),
        new THREE.Vector3(1.5, 0, -5.8),
        new THREE.Vector3(2, 0, -5.8),
        new THREE.Vector3(7.8, 0, -5.8)
    );

    var tube45= new THREE.TubeGeometry(curve45, 100, 0.05, 20, false);
    mesh1 = new THREE.Mesh(tube45, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh1);

    //wire connecting the resistors
    var curve5 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(1.466666666, 0, -1),
        new THREE.Vector3(2, 0, -1),
        new THREE.Vector3(3, 0, -1),
        new THREE.Vector3(7.8, 0, -1)
    );

    var tube5 = new THREE.TubeGeometry(curve5, 100, 0.05, 20, false);
    mesh34 = new THREE.Mesh(tube5, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh34);

    //wire connecting the resistors
    var curve6 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-8.8, 0, .4),
        new THREE.Vector3(-8.5, 0, .4),
        new THREE.Vector3(-8.3, 0, .4),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
    mesh35 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh35);

    //  wire connecting the resistors
    var curve9 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, .4),
        new THREE.Vector3(7.5, 0, .4),
        new THREE.Vector3(8, 0, .4),
        new THREE.Vector3(8.8, 0, .4)
    );

    var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
    mesh36 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh36);


    //  //vertical lines
    var curve7 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-7.8, 0, -5.8),
        new THREE.Vector3(-7.8, 0, -1.6),
        new THREE.Vector3(-7.8, 0, -1.2),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
    mesh37 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh37);

    // //  vertical lines
    var curve8 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, -5.8),
        new THREE.Vector3(7.8, 0, -1.6),
        new THREE.Vector3(7.8, 0, -1.2),
        new THREE.Vector3(7.8, 0, .4)
    );

    var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
    mesh38 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh38);



    R123 = (R1 * R2*R3) / (R1*R2 + R2*R3+R1*R3);

    PIEaddMyText("R123", R123);
    PIEaddMyCheckbox("R4 parellel R5",false,level5Case8);
    PIEaddMyCheckbox("R4 series R5",false,level5Case9);
    
    PIErender();
   
    console.log("in l5c1");
}
flag52=1;
flag53=0;

    
}


///////////////////////////////////////////////////


function level5Case2(){

    if(flag52==0){

    // r1 s r2 s r3

    PIEchangeDisplayCheckbox("R1 s R2 s R3", true);
    var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // console.log(inputCheckboxes);
    for(var i=4;i>=0;i--){
        if(i!=1)
        inputCheckboxes[i].remove();
    }


    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
    box1 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({color: "gray" }));
    PIEaddElement(box1);
    var edges = new THREE.EdgesGeometry(boxGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
    box1.add(line);
    box1.position.set(-4.4, 0, -3.4);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R1", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel81 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel81);


        thevel81.position.set(-5, 0, -3);
        thevel81.rotation.x = - Math.PI / 2;


    });

    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box2 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({color: "gray" }));//color: 0xd3d3d3
    PIEaddElement(box2);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box2.add(line2);
    box2.position.set(4.4, 0, -3.4);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R3", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel82 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel82);


        thevel82.position.set(3.8, 0, -3);
        thevel82.rotation.x = - Math.PI / 2;


    });

    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box3 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({color: "gray" }));//color: 0xd3d3d3
    PIEaddElement(box3);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box3.add(line2);
    box3.position.set(0, 0, -3.4);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R2", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel83 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel83);


        thevel83.position.set(-0.55, 0, -3);
        thevel83.rotation.x = - Math.PI / 2;


    });


    //wire connecting the resistors
    var curve1 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-7.8, 0,-3.4),
        new THREE.Vector3(-6.5, 0,-3.4),
        new THREE.Vector3(-6, 0,-3.4),
        new THREE.Vector3(-5.86666, 0, -3.4)
    );

    var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
    mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh1);

    //wire connecting the resistors
    var curve2 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-2.93333, 0,-3.4),
        new THREE.Vector3(-1, 0,-3.4),
        new THREE.Vector3(-1.5, 0,-3.4),
        new THREE.Vector3(2.933333333333, 0, -3.4)
    );

    var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
    mesh2 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh2);

    //wire connecting the resistors
    var curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(5.866666666, 0,-3.4),
        new THREE.Vector3(6, 0,-3.4),
        new THREE.Vector3(7, 0,-3.4),
        new THREE.Vector3(7.8, 0,-3.4)
    );

    var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
    mesh3 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh3);

    var curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-1.466, 0,-3.4),
        new THREE.Vector3(-2, 0,-3.4),
        new THREE.Vector3(-3, 0,-3.4),
        new THREE.Vector3(-4.4, 0,-3.4)
    );

    var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
    mesh31 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh31);
    
    //connectint middle res
    var curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(1.4666, 0,-3.4),
        new THREE.Vector3(2, 0,-3.4),
        new THREE.Vector3(3, 0,-3.4),
        new THREE.Vector3(4.4, 0,-3.4)
    );

    var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
    mesh32 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh32);

     //  //vertical lines
   var curve7 = new THREE.CubicBezierCurve3(
       new THREE.Vector3(-7.8, 0, -3.4),
       new THREE.Vector3(-7.8, 0, -1.6),
       new THREE.Vector3(-7.8, 0, -1.2),
       new THREE.Vector3(-7.8, 0, .4)
   );

   var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
   mesh4 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

   PIEaddElement(mesh4);

   // //  vertical lines
   var curve8 = new THREE.CubicBezierCurve3(
       new THREE.Vector3(7.8, 0, -3.4),
       new THREE.Vector3(7.8, 0, -1.6),
       new THREE.Vector3(7.8, 0, -1.2),
       new THREE.Vector3(7.8, 0, .4)
   );

   var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
   mesh5 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

   PIEaddElement(mesh5);

   //wires connecting the terminals to the resistors in series

       //wire connecting the resistors
       var curve6 = new THREE.CubicBezierCurve3(
           new THREE.Vector3(-8.8, 0, .4),
           new THREE.Vector3(-8.5, 0, .4),
           new THREE.Vector3(-8.3, 0, .4),
           new THREE.Vector3(-7.8, 0, .4)
       );
   
       var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
       mesh6 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));
   
       PIEaddElement(mesh6);
   
       //  wire connecting the resistors
       var curve9 = new THREE.CubicBezierCurve3(
           new THREE.Vector3(7.8, 0, .4),
           new THREE.Vector3(7.5, 0, .4),
           new THREE.Vector3(8, 0, .4),
           new THREE.Vector3(8.8, 0, .4)
       );
   
       var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
       mesh7 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));
   
       PIEaddElement(mesh7);

       R123 = (R1+R2+R3);

       PIEaddMyText("R123", R123);
       PIEaddMyCheckbox("R4 parellel R5",false,level5Case8);
       PIEaddMyCheckbox("R4 series R5",false,level5Case9);
       
       PIErender();
      
       console.log("in l5c2");
    }
    flag52=1;
    flag53=0;

}


function level5Case3(){

    if(flag52==0){
    PIEchangeDisplayCheckbox("R1 p R2 s R3", true);
    var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // console.log(inputCheckboxes);
    for(var i=4;i>=0;i--){
        if(i!=2)
        inputCheckboxes[i].remove();
    }


    //===============================================//

    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
    box31 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box31);
    var edges = new THREE.EdgesGeometry(boxGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
    box31.add(line);
    box31.position.set(-4.4, 0, -5.8);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R1", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel81 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel81);


        thevel81.position.set(-5, 0, -5.4);
        thevel81.rotation.x = - Math.PI / 2;


    });



    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box32 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box32);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box32.add(line2);
    box32.position.set(-4.4, 0, -1);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R2", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel82 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel82);


        thevel82.position.set(-5, 0, -.6);
        thevel82.rotation.x = - Math.PI / 2;


    });


    //second resistor

    var boxGeom3 = new THREE.BoxGeometry(2.933, .5, 1);
    box2 = new THREE.Mesh(boxGeom3, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box2);
    var edges3 = new THREE.EdgesGeometry(boxGeom3);
    var line3 = new THREE.LineSegments(edges3, new THREE.LineBasicMaterial({ color: 0x000 }));
    box2.add(line3);
    box2.position.set(4.4, 0, -3.8);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R3", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel83 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel83);


        thevel83.position.set(3.8, 0, -3.4);
        thevel83.rotation.x = - Math.PI / 2;


    });


    //wire connecting the resistors
    //  var curve1 = new THREE.CubicBezierCurve3(
    //      new THREE.Vector3(-8.8, 0, .4),
    //      new THREE.Vector3(-7, 0, .4),
    //      new THREE.Vector3(-6, 0, .4),
    //      new THREE.Vector3(-5.86666, 0, 0.4)
    //  );

    //  var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
    //  var mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

    //  PIEaddElement(mesh1);

    //wire connecting the resistors

    var curve2 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-5.8666, 0, -5.8),
        new THREE.Vector3(-6, 0, -5.8),
        new THREE.Vector3(-7, 0, -5.8),
        new THREE.Vector3(-7.8, 0, -5.8)
    );

    var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
    mesh31 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh31);

    //wire connecting the resistors
    var curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-2.933, 0, -5.8),
        new THREE.Vector3(-1, 0, -5.8),
        new THREE.Vector3(-1, 0, -5.8),
        new THREE.Vector3(-0.999, 0, -5.8)
    );

    var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
    mesh32 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh32);

    //wire connecting the resistors
    var curve4 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-5.8666, 0, -1),
        new THREE.Vector3(-5.9, 0, -1),
        new THREE.Vector3(-6, 0, -1),
        new THREE.Vector3(-7.8, 0, -1)
    );

    var tube4 = new THREE.TubeGeometry(curve4, 100, 0.05, 20, false);
    mesh33 = new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh33);

    //wire connecting the resistors
    var curve5 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-2.9333, 0, -1),
        new THREE.Vector3(-1, 0, -1),
        new THREE.Vector3(-1, 0, -1),
        new THREE.Vector3(-0.999, 0, -1)
    );

    var tube5 = new THREE.TubeGeometry(curve5, 100, 0.05, 20, false);
    mesh34 = new THREE.Mesh(tube5, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh34);

    //wire connecting the resistors
    var curve6 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-8.8, 0, .4),
        new THREE.Vector3(-8.5, 0, .4),
        new THREE.Vector3(-8.3, 0, .4),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
    mesh35 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh35);

    //  wire connecting the resistors
    var curve9 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, .4),
        new THREE.Vector3(7.5, 0, .4),
        new THREE.Vector3(8, 0, .4),
        new THREE.Vector3(8.8, 0, .4)
    );

    var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
    mesh36 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh36);


    //  //vertical lines
    var curve7 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-7.8, 0, -5.8),
        new THREE.Vector3(-7.8, 0, -1.6),
        new THREE.Vector3(-7.8, 0, -1.2),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
    mesh37 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh37);

    // //  vertical lines
    var curve8 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, -3.8),
        new THREE.Vector3(7.8, 0, -1.6),
        new THREE.Vector3(7.8, 0, -1.2),
        new THREE.Vector3(7.8, 0, .4)
    );

    var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
    mesh38 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh38);
    // //  vertical lines
    var curve41 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-0.999, 0, -5.8),
        new THREE.Vector3(-0.999, 0, -1.6),
        new THREE.Vector3(-0.999, 0, -1.2),
        new THREE.Vector3(-0.999, 0, -1)
    );

    var tube41 = new THREE.TubeGeometry(curve41, 100, 0.05, 20, false);
    mesh41 = new THREE.Mesh(tube41, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh41);

    var curve41 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(5.866, 0, -3.8),
        new THREE.Vector3(6, 0, -3.8),
        new THREE.Vector3(6.999, 0, -3.8),
        new THREE.Vector3(7.8, 0, -3.8)
    );

    var tube41 = new THREE.TubeGeometry(curve41, 100, 0.05, 20, false);
    mesh44 = new THREE.Mesh(tube41, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh44);

    var curve41 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(2.966, 0, -3.8),
        new THREE.Vector3(0.999, 0, -3.8),
        new THREE.Vector3(0.999, 0, -3.8),
        new THREE.Vector3(-0.999, 0, -3.8)
    );

    var tube41 = new THREE.TubeGeometry(curve41, 100, 0.05, 20, false);
    mesh45 = new THREE.Mesh(tube41, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh45);

    R123 = (R1*R2)/(R1+R2)+R3;

      
    PIEaddMyText("R123", R123);
    PIEaddMyCheckbox("R4 parellel R5",false,level5Case8);
    PIEaddMyCheckbox("R4 series R5",false,level5Case9);
    
       PIErender();
      
      
   
   
    console.log("in l4c3");
}
flag52=1;
flag53=0;

}


function level5Case4(){

    if(flag52==0){
    PIEchangeDisplayCheckbox("R1 p R3 s R2", true);
    var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // console.log(inputCheckboxes);
    for(var i=4;i>=0;i--){
        if(i!=3)
        inputCheckboxes[i].remove();
    }


    //===============================================//

    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
    box31 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box31);
    var edges = new THREE.EdgesGeometry(boxGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
    box31.add(line);
    box31.position.set(-4.4, 0, -5.8);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R1", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel81 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel81);


        thevel81.position.set(-5, 0, -5.4);
        thevel81.rotation.x = - Math.PI / 2;


    });


    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box32 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box32);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box32.add(line2);
    box32.position.set(-4.4, 0, -1);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R3", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel82 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel82);


        thevel82.position.set(-5, 0, -.6);
        thevel82.rotation.x = - Math.PI / 2;


    });
    //second resistor

    var boxGeom3 = new THREE.BoxGeometry(2.933, .5, 1);
    box2 = new THREE.Mesh(boxGeom3, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box2);
    var edges3 = new THREE.EdgesGeometry(boxGeom3);
    var line3 = new THREE.LineSegments(edges3, new THREE.LineBasicMaterial({ color: 0x000 }));
    box2.add(line3);
    box2.position.set(4.4, 0, -3.8);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R2", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel83 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel83);


        thevel83.position.set(3.8, 0, -3.4);
        thevel83.rotation.x = - Math.PI / 2;


    });



    //wire connecting the resistors
    //  var curve1 = new THREE.CubicBezierCurve3(
    //      new THREE.Vector3(-8.8, 0, .4),
    //      new THREE.Vector3(-7, 0, .4),
    //      new THREE.Vector3(-6, 0, .4),
    //      new THREE.Vector3(-5.86666, 0, 0.4)
    //  );

    //  var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
    //  var mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

    //  PIEaddElement(mesh1);

    //wire connecting the resistors

    var curve2 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-5.8666, 0, -5.8),
        new THREE.Vector3(-6, 0, -5.8),
        new THREE.Vector3(-7, 0, -5.8),
        new THREE.Vector3(-7.8, 0, -5.8)
    );

    var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
    mesh31 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh31);

    //wire connecting the resistors
    var curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-2.933, 0, -5.8),
        new THREE.Vector3(-1, 0, -5.8),
        new THREE.Vector3(-1, 0, -5.8),
        new THREE.Vector3(-0.999, 0, -5.8)
    );

    var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
    mesh32 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh32);

    //wire connecting the resistors
    var curve4 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-5.8666, 0, -1),
        new THREE.Vector3(-5.9, 0, -1),
        new THREE.Vector3(-6, 0, -1),
        new THREE.Vector3(-7.8, 0, -1)
    );

    var tube4 = new THREE.TubeGeometry(curve4, 100, 0.05, 20, false);
    mesh33 = new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh33);

    //wire connecting the resistors
    var curve5 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-2.9333, 0, -1),
        new THREE.Vector3(-1, 0, -1),
        new THREE.Vector3(-1, 0, -1),
        new THREE.Vector3(-0.999, 0, -1)
    );

    var tube5 = new THREE.TubeGeometry(curve5, 100, 0.05, 20, false);
    mesh34 = new THREE.Mesh(tube5, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh34);

    //wire connecting the resistors
    var curve6 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-8.8, 0, .4),
        new THREE.Vector3(-8.5, 0, .4),
        new THREE.Vector3(-8.3, 0, .4),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
    mesh35 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh35);

    //  wire connecting the resistors
    var curve9 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, .4),
        new THREE.Vector3(7.5, 0, .4),
        new THREE.Vector3(8, 0, .4),
        new THREE.Vector3(8.8, 0, .4)
    );

    var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
    mesh36 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh36);


    //  //vertical lines
    var curve7 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-7.8, 0, -5.8),
        new THREE.Vector3(-7.8, 0, -1.6),
        new THREE.Vector3(-7.8, 0, -1.2),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
    mesh37 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh37);

    // //  vertical lines
    var curve8 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, -3.8),
        new THREE.Vector3(7.8, 0, -1.6),
        new THREE.Vector3(7.8, 0, -1.2),
        new THREE.Vector3(7.8, 0, .4)
    );

    var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
    mesh38 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh38);
    // //  vertical lines
    var curve41 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-0.999, 0, -5.8),
        new THREE.Vector3(-0.999, 0, -1.6),
        new THREE.Vector3(-0.999, 0, -1.2),
        new THREE.Vector3(-0.999, 0, -1)
    );

    var tube41 = new THREE.TubeGeometry(curve41, 100, 0.05, 20, false);
    mesh41 = new THREE.Mesh(tube41, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh41);

    var curve41 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(5.866, 0, -3.8),
        new THREE.Vector3(6, 0, -3.8),
        new THREE.Vector3(6.999, 0, -3.8),
        new THREE.Vector3(7.8, 0, -3.8)
    );

    var tube41 = new THREE.TubeGeometry(curve41, 100, 0.05, 20, false);
    mesh44 = new THREE.Mesh(tube41, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh44);

    var curve41 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(2.966, 0, -3.8),
        new THREE.Vector3(0.999, 0, -3.8),
        new THREE.Vector3(0.999, 0, -3.8),
        new THREE.Vector3(-0.999, 0, -3.8)
    );

    var tube41 = new THREE.TubeGeometry(curve41, 100, 0.05, 20, false);
    mesh45 = new THREE.Mesh(tube41, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh45);

    R123 = (R1*R3)/(R1+R3)+R2;

      
    PIEaddMyText("R123", R123);
    PIEaddMyCheckbox("R4 parellel R5",false,level5Case8);
    PIEaddMyCheckbox("R4 series R5",false,level5Case9);
    
       PIErender();
      
      
   
   
    console.log("in l4c4");

}
flag52=1;
flag53=0;



}
function level5Case5(){
      
    if(flag52==0){
    PIEchangeDisplayCheckbox("R2 p R3 s R1", true);
    var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // console.log(inputCheckboxes);
    for(var i=4;i>=0;i--){
        if(i!=4)
        inputCheckboxes[i].remove();
    }


    //===============================================//

    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
    box31 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box31);
    var edges = new THREE.EdgesGeometry(boxGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
    box31.add(line);
    box31.position.set(-4.4, 0, -5.8);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R2", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel81 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel81);


        thevel81.position.set(-5, 0, -5.4);
        thevel81.rotation.x = - Math.PI / 2;


    });

    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box32 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box32);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box32.add(line2);
    box32.position.set(-4.4, 0, -1);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R3", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel82 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel82);


        thevel82.position.set(-5, 0, -.6);
        thevel82.rotation.x = - Math.PI / 2;


    });


    //second resistor

    var boxGeom3 = new THREE.BoxGeometry(2.933, .5, 1);
    box2 = new THREE.Mesh(boxGeom3, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box2);
    var edges3 = new THREE.EdgesGeometry(boxGeom3);
    var line3 = new THREE.LineSegments(edges3, new THREE.LineBasicMaterial({ color: 0x000 }));
    box2.add(line3);
    box2.position.set(4.4, 0, -3.8);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R1", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel83 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel83);


        thevel83.position.set(3.8, 0, -3.4);
        thevel83.rotation.x = - Math.PI / 2;


    });
    //wire connecting the resistors
    //  var curve1 = new THREE.CubicBezierCurve3(
    //      new THREE.Vector3(-8.8, 0, .4),
    //      new THREE.Vector3(-7, 0, .4),
    //      new THREE.Vector3(-6, 0, .4),
    //      new THREE.Vector3(-5.86666, 0, 0.4)
    //  );

    //  var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
    //  var mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

    //  PIEaddElement(mesh1);

    //wire connecting the resistors

    var curve2 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-5.8666, 0, -5.8),
        new THREE.Vector3(-6, 0, -5.8),
        new THREE.Vector3(-7, 0, -5.8),
        new THREE.Vector3(-7.8, 0, -5.8)
    );

    var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
    mesh31 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh31);

    //wire connecting the resistors
    var curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-2.933, 0, -5.8),
        new THREE.Vector3(-1, 0, -5.8),
        new THREE.Vector3(-1, 0, -5.8),
        new THREE.Vector3(-0.999, 0, -5.8)
    );

    var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
    mesh32 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh32);

    //wire connecting the resistors
    var curve4 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-5.8666, 0, -1),
        new THREE.Vector3(-5.9, 0, -1),
        new THREE.Vector3(-6, 0, -1),
        new THREE.Vector3(-7.8, 0, -1)
    );

    var tube4 = new THREE.TubeGeometry(curve4, 100, 0.05, 20, false);
    mesh33 = new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh33);

    //wire connecting the resistors
    var curve5 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-2.9333, 0, -1),
        new THREE.Vector3(-1, 0, -1),
        new THREE.Vector3(-1, 0, -1),
        new THREE.Vector3(-0.999, 0, -1)
    );

    var tube5 = new THREE.TubeGeometry(curve5, 100, 0.05, 20, false);
    mesh34 = new THREE.Mesh(tube5, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh34);

    //wire connecting the resistors
    var curve6 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-8.8, 0, .4),
        new THREE.Vector3(-8.5, 0, .4),
        new THREE.Vector3(-8.3, 0, .4),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
    mesh35 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh35);

    //  wire connecting the resistors
    var curve9 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, .4),
        new THREE.Vector3(7.5, 0, .4),
        new THREE.Vector3(8, 0, .4),
        new THREE.Vector3(8.8, 0, .4)
    );

    var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
    mesh36 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh36);


    //  //vertical lines
    var curve7 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-7.8, 0, -5.8),
        new THREE.Vector3(-7.8, 0, -1.6),
        new THREE.Vector3(-7.8, 0, -1.2),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
    mesh37 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh37);

    // //  vertical lines
    var curve8 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, -3.8),
        new THREE.Vector3(7.8, 0, -1.6),
        new THREE.Vector3(7.8, 0, -1.2),
        new THREE.Vector3(7.8, 0, .4)
    );

    var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
    mesh38 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh38);
    // //  vertical lines
    var curve41 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-0.999, 0, -5.8),
        new THREE.Vector3(-0.999, 0, -1.6),
        new THREE.Vector3(-0.999, 0, -1.2),
        new THREE.Vector3(-0.999, 0, -1)
    );

    var tube41 = new THREE.TubeGeometry(curve41, 100, 0.05, 20, false);
    mesh41 = new THREE.Mesh(tube41, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh41);

    var curve41 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(5.866, 0, -3.8),
        new THREE.Vector3(6, 0, -3.8),
        new THREE.Vector3(6.999, 0, -3.8),
        new THREE.Vector3(7.8, 0, -3.8)
    );

    var tube41 = new THREE.TubeGeometry(curve41, 100, 0.05, 20, false);
    mesh44 = new THREE.Mesh(tube41, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh44);

    var curve41 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(2.966, 0, -3.8),
        new THREE.Vector3(0.999, 0, -3.8),
        new THREE.Vector3(0.999, 0, -3.8),
        new THREE.Vector3(-0.999, 0, -3.8)
    );

    var tube41 = new THREE.TubeGeometry(curve41, 100, 0.05, 20, false);
    mesh45 = new THREE.Mesh(tube41, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh45);

    R123 = (R3*R2)/(R3+R2)+R1;

       PIEaddMyText("R123", R123);
       PIEaddMyCheckbox("R4 parellel R5",false,level5Case8);
       PIEaddMyCheckbox("R4 series R5",false,level5Case9);
       
       PIErender();
      
      
   
   
    console.log("in l5c5");
}
flag52=1;
flag53=0;


}

//================


function level5Case8(){

    // r4 p r5
    if(flag53==0){
    PIEchangeDisplayCheckbox("R4 parellel R5",true);
    var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // console.log(inputCheckboxes);
    inputCheckboxes[2].remove();

    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
    box91 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box91);
    var edges = new THREE.EdgesGeometry(boxGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
    box91.add(line);
    box91.position.set(0, 0, 3.8);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R5", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel85 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel85);


        thevel85.position.set(-.58, 0, 4.2);
        thevel85.rotation.x = - Math.PI / 2;


    });


    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box92 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box92);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box92.add(line2);
    box92.position.set(0,0,1.4);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R4", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel84 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel84);


        thevel84.position.set(-0.55, 0, 1.8);
        thevel84.rotation.x = - Math.PI / 2;


    });


    //wire connecting the resistors
    //  var curve1 = new THREE.CubicBezierCurve3(
    //      new THREE.Vector3(-8.8, 0, .4),
    //      new THREE.Vector3(-7, 0, .4),
    //      new THREE.Vector3(-6, 0, .4),
    //      new THREE.Vector3(-5.86666, 0, 0.4)
    //  );

    //  var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
    //  var mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

    //  PIEaddElement(mesh1);

    //wire connecting the resistors
    var curve2 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-1.46666, 0, 3.8),
        new THREE.Vector3(-1.5, 0, 3.8),
        new THREE.Vector3(-2, 0, 3.8),
        new THREE.Vector3(-7.8, 0, 3.8)
    );

    var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
    mesh91 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh91);

    //wire connecting the resistors
    var curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(1.466666666, 0, 3.8),
        new THREE.Vector3(2, 0, 3.8),
        new THREE.Vector3(3, 0, 3.8),
        new THREE.Vector3(7.8, 0, 3.8)
    );

    var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
    mesh92 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh92);



    //wire connecting the resistors
    var curve4 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-1.46666, 0, 1.4),
        new THREE.Vector3(-1.5, 0, 1.4),
        new THREE.Vector3(-2, 0, 1.4),
        new THREE.Vector3(-7.8, 0, 1.4)
    );

    var tube4 = new THREE.TubeGeometry(curve4, 100, 0.05, 20, false);
    mesh61 = new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh61);

    // wire connecting the resistors
    var curve5 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(1.466666666, 0, 1.4),
        new THREE.Vector3(2, 0, 1.4),
        new THREE.Vector3(3, 0, 1.4),
        new THREE.Vector3(7.8, 0, 1.4)
    );

    var tube5 = new THREE.TubeGeometry(curve5, 100, 0.05, 20, false);
    mesh62 = new THREE.Mesh(tube5, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh62);

    //wire connecting the resistors
    var curve6 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-8.8, 0, .4),
        new THREE.Vector3(-8.5, 0, .4),
        new THREE.Vector3(-8.3, 0, .4),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
    mesh95 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh95);

    //  wire connecting the resistors
    var curve9 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, .4),
        new THREE.Vector3(7.5, 0, .4),
        new THREE.Vector3(8, 0, .4),
        new THREE.Vector3(8.8, 0, .4)
    );

    var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
    mesh96 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh96);


    //  //vertical lines
    var curve7 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-7.8, 0, 3.8),
        new THREE.Vector3(-7.8, 0, 1.6),
        new THREE.Vector3(-7.8, 0, 1.2),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
    mesh97 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh97);

    // //  vertical lines
    var curve8 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, 3.8),
        new THREE.Vector3(7.8, 0, 1.6),
        new THREE.Vector3(7.8, 0, 1.2),
        new THREE.Vector3(7.8, 0, .4)
    );

    var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
    mesh98 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh98);

    PIErender();


    R45= (R5*R4)/(R5+R4);    

    PIEaddMyCheckbox("R45",R45);
    PIEaddMyCheckbox("R123 p R45",false,level5Case10);
    
    PIErender();

    console.log("level5case8");
}
flag53=1;
flag54=0;


    
}


function level5Case9(){
    

    if(flag53==0){
    PIEchangeDisplayCheckbox("R4 series R5", true);
    var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // console.log(inputCheckboxes);
    inputCheckboxes[1].remove();

    //first resistor
     var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
     box81 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({color: "gray" }));
     PIEaddElement(box81);
     var edges = new THREE.EdgesGeometry(boxGeom);
     var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
     box81.add(line);
     box81.position.set(-4.4, 0, 3.8);


    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box82 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));//color: 0xd3d3d3
    PIEaddElement(box82);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box82.add(line2);
    box82.position.set(4.4, 0, 3.8);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R4", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel84 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel84);


        thevel84.position.set(-5, 0, 4.2);
        thevel84.rotation.x = - Math.PI / 2;


    });




    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R5", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel85 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel85);


        thevel85.position.set(3.8, 0, 4.2);
        thevel85.rotation.x = - Math.PI / 2;


    });

     //wire connecting the resistors
     var curve1 = new THREE.CubicBezierCurve3(
         new THREE.Vector3(-7, 0,3.8),
         new THREE.Vector3(-6.5, 0,3.8),
         new THREE.Vector3(-6, 0,3.8),
         new THREE.Vector3(-5.86666, 0, 3.8)
     );

     var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
     mesh81 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

     PIEaddElement(mesh81);

     //wire connecting the resistors
     var curve2 = new THREE.CubicBezierCurve3(
         new THREE.Vector3(-2.93333, 0,3.8),
         new THREE.Vector3(-1, 0,3.8),
         new THREE.Vector3(-1.5, 0,3.8),
         new THREE.Vector3(2.933333333333, 0, 3.8)
     );

     var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
     mesh82 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

     PIEaddElement(mesh82);

     //wire connecting the resistors
     var curve3 = new THREE.CubicBezierCurve3(
         new THREE.Vector3(5.866666666, 0,3.8),
         new THREE.Vector3(6, 0,3.8),
         new THREE.Vector3(7, 0,3.8),
         new THREE.Vector3(7, 0,3.8)
     );

     var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
     mesh83 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

     PIEaddElement(mesh83);

      //  //vertical lines
    var curve7 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-7, 0, 3.8),
        new THREE.Vector3(-7, 0, 1.6),
        new THREE.Vector3(-7, 0, 1.2),
        new THREE.Vector3(-7, 0, .4)
    );

    var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
    mesh84 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh84);

    // //  vertical lines
    var curve8 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7, 0, 3.8),
        new THREE.Vector3(7, 0, 1.6),
        new THREE.Vector3(7, 0, 1.2),
        new THREE.Vector3(7, 0, .4)
    );

    var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
    mesh85 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh85);

    //wires connecting the terminals to the resistors in series

        //wire connecting the resistors
        var curve6 = new THREE.CubicBezierCurve3(
            new THREE.Vector3(-8.8, 0, .4),
            new THREE.Vector3(-8.5, 0, .4),
            new THREE.Vector3(-8.3, 0, .4),
            new THREE.Vector3(-7, 0, .4)
        );
    
        var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
        mesh86 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));
    
        PIEaddElement(mesh86);
    
        //  wire connecting the resistors
        var curve9 = new THREE.CubicBezierCurve3(
            new THREE.Vector3(7, 0, .4),
            new THREE.Vector3(7.5, 0, .4),
            new THREE.Vector3(8, 0, .4),
            new THREE.Vector3(8.8, 0, .4)
        );
    
        var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
        mesh87 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));
    
        PIEaddElement(mesh87);



        R45 = (R4+ R5);

        PIEaddMyText("R45", R45);
        PIEaddMyCheckbox("R123 p R45",false,level5Case10);
        PIErender();
    }
    flag53=1;
    flag54=0;

}


function level5Case10(){

    if(flag54==0){
    PIEchangeDisplayCheckbox("R123 p R45",true);
    R12345= (R123*R45)/(R123+R45);    
    R12345string=R12345.toFixed(2);
   
    PIEtableSelect("Observation Table");

    PIEupdateTableCell(18, 0, "Your Resistance");
    PIEsetCellInput(18, 1, 3, R12345.toFixed(2));

    giveupbtn.remove();
    if(R12345string!=refflevel5string){
        
        resetMessage();
        currentLevel="Level 1";
    }
    else if (R12345string == refflevel5string&&flag==0) {
        
        var loader = new THREE.FontLoader();
         loader.load("./optimer.json", function (response) {
             font = response;

             var geometry = new THREE.TextGeometry("Success All Levels Completed", {
                 font: font,
                 size: .8,
                 height: 0.01,
                 curveSegments: 3
             });

             thevel2 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


            PIEaddElement(thevel2);
            thevel2.position.set(-8.3, 0, -14);
            thevel2.rotation.x = - Math.PI / 6;

            resetMessage();
    
            currentLevel="Level 1";
           
         });

        //  level2btn=PIEaddButton("Play Again");
         currentLevel="Level 1";

        //  level2btn.addEventListener("click",PIEresetExperiment());
         
    }
    
    console.log("level3case10");
}
flag54=1;


}

function giveup(){
    flag=1;
    if(presentLevelGiveUp=="Level 1"){
        resetExperiment();
        levelAction = "level1act";
        showResistanceValues();
        level1ans();
    }
    else if(presentLevelGiveUp=="Level 2"){
        resetExperiment();
        levelAction = "level2act";
        showResistanceValues();
        level2ans();
       
    }
    else if(presentLevelGiveUp=="Level 3"){
        resetExperiment();
        levelAction = "level3act";
        showResistanceValues();
        level3ans();
    }
    else if(presentLevelGiveUp=="Level 4"){
        levelAction = "level4act";
        showResistanceValues();
        resetExperiment();
        level4ans();
    }
    else if(presentLevelGiveUp=="Level 5"){
        levelAction = "level5act";
        showResistanceValues();
        resetExperiment();
        level5ans();
    }
    removethevels();
    level2btn.remove();
    PIErender();
    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
    font = response;

var geometry = new THREE.TextGeometry("Press Reset To Try Again!!", {
        font: font,
        size: .8,
        height: 0.01,
        curveSegments: 3
    });

    thevel71 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));
    

    PIEaddElement(thevel71);
    thevel71.position.set(-7, 0, -12);
    thevel71.rotation.x = - Math.PI / 6;
   
});
flag=0;
currentLevel="Level 1";

}

///////////////////////////////////////////////////

function loadExperimentElements() {

    PIEsetExperimentTitle("Eq. Resistance");
    PIEsetDeveloperName("Diwakar");

    initialiseHelp();
    initialiseInfo();
    initialiseScene();
    addElementsToScene();

   
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    // tlX 		The top left x coordinate of the scene(area of interest)
    // tlY 		The top left y coordinate of the scene(area of interest)
    // brX 		The bottom right x coordinate of the scene(area of interest)
    // brY 		The bottom right y coordinate of the scene(area of interest)

    startOrbitalControls();
    //dom manip
    document.getElementById("start").addEventListener("click", startAnimation);
    document.getElementById("stop").addEventListener("click", stopAnimation);

    // PIEaddInputSlider("Voltage", 4, test2, 1, 5, 0.5);
    //The label to appear on the input element
    // value 		The initial value of the slider
    // notify 		The callback function to be called on slider change completion
    // min 		The Minimum value in slider
    // max 		The Maximum value in slider
    // step 		The The step by which slider should change
    // PIEaddInputSlider("Number of turns", 1, test3, 1, 5, 1);
    // PIEaddMyCheckbox("Level 1", false, level1);
    // PIEaddMyCheckbox("Level 2", false, level2);
    // PIEaddMyCheckbox("Level 3", false, level3);
    // PIEaddMyCheckbox("Level 4", false, level4);
    // PIEaddMyCheckbox("Level 5", false, level5);

    // PIEaddInputCommand("Current Direction :", test);
    // label 		The label to appear on the command
    // notify 		The command function to be called
    // PIEaddInputCheckbox("Clockwise", true, checkClock);
    // label 		The label to appear on the checkbox element
    // value 		The initial value of the checkbox element
    // notify 		The callback function to be called on click
    // PIEaddInputCheckbox("Anti-Clockwise", false, checkAntiClock);
    PIEinputGUI.width = 280; //sets the width of input panel
    // var a = "Voltage : " + currentVoltage + "V";

    // PIEaddDisplayCommand(a, test);
    //PIEaddDisplayCommand(, test);
    // This function adds a command element to the Display panel

    // The label is the id(label) appearing on the command button.

    //     Parameters:
    // Name 	Type 	Description
    // label 		The label to appear on the command
    // notify 		The command function to be called

    // showNoArrows();
   

    // console.log("start animation");
    // // PIEstartAnimation();
    // startOrbitalControls();
    // resetExperiment();

    // // while(nextlevel==true){

    // // if(level==1)
    // if (levelbtn) {
    //     levelbtn.remove();
    // }
    // currentLevel = "Level 1"
    // levelbtn = PIEaddButton("Level 1");

    // console.log(level1btn);
    // level1Action();
    // console.log("back in start");
    // // if(nextlevel==false)
    // // {
    // //     console.log("nfdkfkl");
    // //     startAnimation();

    // // }

    // PIEadjustDisplayScene();
    PIErender();

    var spans=document.querySelectorAll("span");
     console.log(spans);
        // spans[6].setAtrribute("id","1");
        // console.log(spans.length);
        // console.log(spans[6]);
        spans[6].remove();
        var left=document.getElementById("<<");
        var right=document.getElementById(">>");
        right.remove();
        left.remove();



    PIErender();
  



    
}

function resetExperiment() {
        // if(successbtn)
        // successbtn.remove();
    
    // document.getElementById("stop").setAttribute("id","start");
    // document.getElementById("start").innerHTML("start");
    var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // console.log(inputCheckboxes);
    for(var i=0;i<inputCheckboxes.length ;i++){
    inputCheckboxes[i].remove();
    }

    var number = document.getElementsByClassName("cr number");
    // console.log(inputCheckboxes);
    for(var i = 0; i < number.length; i++) {
        number[i].remove();
    }

    if(fromAction==false){
    //   var p=document.querySelectorAll("div>p");
    //         console.log("p are");
    //         console.log(p);
    //        p.forEach(function(p){
    //            if(p){
    //                p.remove();
    //            }
    //        });
   

      var tables=document.querySelectorAll("div[draggable]");
            console.log("table are");
            console.log(tables);
           tables.forEach(function(table){
               if(table){
                   table.remove();
               }
           });

            PIEtableData.splice(0,PIEtableData.length);
            PIEtableRows.splice(0,PIEtableRows.length);
            PIEtableNames.splice(0,PIEtableNames.length);
            PIEtables.splice(0,PIEtables.length);
            PIEcurrentTable=0;
            PIEdraggedTable=0;
    }


    removeElements();

    PIEcbDisplayHandles.splice(0,PIEcbDisplayHandles.length);
    PIEcbDisplayNames.splice(0, PIEcbDisplayNames.length);
    PIEcbDisplay=0;
    PIEitDisplayHandles.splice(0,PIEitDisplayHandles.length);
    PIEitDisplayNames.splice(0, PIEitDisplayNames.length);
    PIEitDisplay=0;

    PIErender();
    if(levelbtn)
    levelbtn.innerHTML=currentLevel;
    PIEshowDisplayPanel();
    
    PIEtoggleTable("Level 1");
    flag1=0;
    flag2=0;
    flag21=0;
    flag22=0;
    flag23=0;
    flag31=0;
    flag32=0;
    flag33=0;
    flag34=0;
    flag41=0;
    flag42=0;
    flag43=0;
    flag51=0;
    flag52=0;
    flag53=0;
    flag54=0;
    resetScene();
    PIErender();
    console.log("reset");
   
}

function resetScene(){

    var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // console.log(inputCheckboxes);
    for (var i = 0; i < inputCheckboxes.length; i++) {
        inputCheckboxes[i].remove();
    }

    var number = document.getElementsByClassName("cr number");
    // console.log(inputCheckboxes);
    for (var i = 0; i < number.length; i++) {
        number[i].remove();
        console.log("deleted");
    }

    removeElements();
    PIErender();
    console.log("resetscene");

}

function updateExperimentElements(t, dt) {
    PIEshowDisplayPanel();
}




function removeElements() {
    // alert("im in remove elem");
    PIEremoveElement(box1);
    PIEremoveElement(box2);
    PIEremoveElement(box21);
    PIEremoveElement(box41);
    PIEremoveElement(box81);
    PIEremoveElement(box22);
    PIEremoveElement(box82);
    PIEremoveElement(box42);
    PIEremoveElement(box62);
    PIEremoveElement(box3);
    PIEremoveElement(box33);
    PIEremoveElement(box31);
    PIEremoveElement(box91);
    PIEremoveElement(box61);
    PIEremoveElement(box92);
    PIEremoveElement(box32);
    PIEremoveElement(mesh1);
    PIEremoveElement(mesh91);
    PIEremoveElement(mesh41);
    PIEremoveElement(mesh81);
    PIEremoveElement(mesh28);
    PIEremoveElement(mesh31);
    PIEremoveElement(mesh61);
    PIEremoveElement(mesh2);
    PIEremoveElement(mesh82);
    PIEremoveElement(mesh92);
    PIEremoveElement(mesh42);
    PIEremoveElement(mesh22);
    PIEremoveElement(mesh62);
    PIEremoveElement(mesh21);
    PIEremoveElement(mesh3);
    PIEremoveElement(mesh43);
    PIEremoveElement(mesh83);
    PIEremoveElement(mesh23);
    PIEremoveElement(mesh4);
    PIEremoveElement(mesh44);
    PIEremoveElement(mesh84);
    PIEremoveElement(mesh24);
    PIEremoveElement(mesh32);
    PIEremoveElement(mesh33);
    PIEremoveElement(mesh34);
    PIEremoveElement(mesh5);
    PIEremoveElement(mesh95);
    PIEremoveElement(mesh85);
    PIEremoveElement(mesh45);
    PIEremoveElement(mesh25);
    PIEremoveElement(mesh6);
    PIEremoveElement(mesh86);
    PIEremoveElement(mesh46);
    PIEremoveElement(mesh96);
    PIEremoveElement(mesh26);
    PIEremoveElement(mesh35);
    PIEremoveElement(mesh36);
    PIEremoveElement(mesh7);
    PIEremoveElement(mesh87);
    PIEremoveElement(mesh97);
    PIEremoveElement(mesh47);
    PIEremoveElement(mesh27);
    PIEremoveElement(mesh8);
    PIEremoveElement(mesh98);
    PIEremoveElement(mesh28);
    PIEremoveElement(mesh37);
    PIEremoveElement(mesh38);
    PIEremoveElement(mesh9);
    PIEremoveElement(mesh10);
    PIEremoveElement(mesh11);
    PIEremoveElement(mesh12);
    PIEremoveElement(thevel1);
    PIEremoveElement(thevel2);
    PIEremoveElement(thevel91);
    PIEremoveElement(thevel92);
    PIEremoveElement(thevel93);
    PIEremoveElement(thevel94);
    PIEremoveElement(thevel95);
    PIEremoveElement(thevel96);
    PIEremoveElement(thevel71);
    PIEremoveElement(thevel81);
    PIEremoveElement(thevel82);
    PIEremoveElement(thevel83);
    PIEremoveElement(thevel84);
    PIEremoveElement(thevel85);
    
    // level1btn.remove();
}

function removethevels(){
    PIEremoveElement(thevel1);
    PIEremoveElement(thevel2);
    // PIEremoveElement(thevel91);
    // PIEremoveElement(thevel92);
    // PIEremoveElement(thevel93);
    // PIEremoveElement(thevel94);
    // PIEremoveElement(thevel95);
    // PIEremoveElement(thevel96);
    PIEremoveElement(thevel71);
    PIErender();
}
//==============================================================//

function PIEremoveElement(b) {
    var a;
    var c;
    PIEscene.remove(b);
    c = false;
    for (a = PIEsceneElements.length - 1;
        (c == false) && (a >= 0); a--) {
        if (b == PIEsceneElements[a]) {
            while (a < PIEsceneElements.length - 1) {
                PIEsceneElements[a] = PIEsceneElements[a + 1];
                a++
            }
            PIEsceneElements.pop();
            c = true
        }
    }
}

function PIEaddButton(a) {

var b; button = document.createElement("button"); 
button.setAttribute("id", a); 
button.innerHTML = a; 
PIEtoplineElem.appendChild(button); 
return (button)
}



//==========================================================================//
function PIEaddMyCheckbox(b, d, c) {
    var a;
    switch (PIEcbDisplay) {
        case 0:
            PIEdisplayObject.cb00 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb00").name(b);
            break;
        case 1:
            PIEdisplayObject.cb01 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb01").name(b);
            break;
        case 2:
            PIEdisplayObject.cb02 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb02").name(b);
            break;
        case 3:
            PIEdisplayObject.cb03 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb03").name(b);
            break;
        case 4:
            PIEdisplayObject.cb04 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb04").name(b);
            break;
        case 5:
            PIEdisplayObject.cb05 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb05").name(b);
            break;
        case 6:
            PIEdisplayObject.cb06 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb06").name(b);
            break;
        case 7:
            PIEdisplayObject.cb07 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb07").name(b);
            break;
        case 8:
            PIEdisplayObject.cb08 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb08").name(b);
            break;
        case 9:
            PIEdisplayObject.cb09 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb09").name(b);
            break;
        case 10:
            PIEdisplayObject.cb10 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb10").name(b);
            break;
        case 11:
            PIEdisplayObject.cb11 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb11").name(b);
            break;
        case 12:
            PIEdisplayObject.cb12 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb12").name(b);
            break;
        case 13:
            PIEdisplayObject.cb13 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb13").name(b);
            break;
        case 14:
            PIEdisplayObject.cb14 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb14").name(b);
            break;
        case 15:
            PIEdisplayObject.cb15 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb15").name(b);
            break;
        case 16:
            PIEdisplayObject.cb16 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb16").name(b);
            break;
        case 17:
            PIEdisplayObject.cb17 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb17").name(b);
            break;
        case 18:
            PIEdisplayObject.cb18 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb18").name(b);
            break;
        case 19:
            PIEdisplayObject.cb19 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb19").name(b);
            break;

        case 20:
            PIEdisplayObject.cb20 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb20").name(b);
            break;
        case 21:
            PIEdisplayObject.cb21 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb21").name(b);
            break;
        case 22:
            PIEdisplayObject.cb22 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb22").name(b);
            break;
        case 23:
            PIEdisplayObject.cb23 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb23").name(b);
            break;
        case 24:
            PIEdisplayObject.cb24 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb24").name(b);
            break;
        case 25:
            PIEdisplayObject.cb25 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb25").name(b);
            break;
        case 26:
            PIEdisplayObject.cb26 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb26").name(b);
            break;
        case 27:
            PIEdisplayObject.cb27 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb27").name(b);
            break;
        case 28:
            PIEdisplayObject.cb28 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb28").name(b);
            break;
        case 29:
            PIEdisplayObject.cb29 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb29").name(b);
            break;
        case 30:
            PIEdisplayObject.cb30 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb30").name(b);
            break;
        case 31:
            PIEdisplayObject.cb31 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb31").name(b);
            break;
        case 32:
            PIEdisplayObject.cb32 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb32").name(b);
            break;
        case 33:
            PIEdisplayObject.cb33 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb33").name(b);
            break;
        case 34:
            PIEdisplayObject.cb34 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb34").name(b);
            break;
        case 35:
            PIEdisplayObject.cb19 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb35").name(b);
            break;
        case 36:
            PIEdisplayObject.cb36 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb36").name(b);
            break;
        case 37:
            PIEdisplayObject.cb37 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb37").name(b);
            break;
        case 38:
            PIEdisplayObject.cb38 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb38").name(b);
            break;
        case 39:
            PIEdisplayObject.cb39 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb39").name(b);
            break;
        case 40:
            PIEdisplayObject.cb40 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb40").name(b);
            break;
        case 41:
            PIEdisplayObject.cb41 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb41").name(b);
            break;
        case 42:
            PIEdisplayObject.cb42 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb42").name(b);
            break;
        case 43:
            PIEdisplayObject.cb43 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb43").name(b);
            break;
        case 44:
            PIEdisplayObject.cb44 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb44").name(b);
            break;
        case 45:
            PIEdisplayObject.cb45 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb45").name(b);
            break;
        case 46:
            PIEdisplayObject.cb46 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb46").name(b);
            break;
        case 47:
            PIEdisplayObject.cb47 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb47").name(b);
            break;
        case 48:
            PIEdisplayObject.cb48 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb48").name(b);
            break;
        case 49:
            PIEdisplayObject.cb49 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb49").name(b);
            break;
        case 50:
            PIEdisplayObject.cb50 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb50").name(b);
            break;
        case 51:
            PIEdisplayObject.cb51 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb51").name(b);
            break;
        case 52:
            PIEdisplayObject.cb52 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb52").name(b);
            break;
        case 53:
            PIEdisplayObject.cb53 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb53").name(b);
            break;
        case 54:
            PIEdisplayObject.cb54 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb54").name(b);
            break;
        case 55:
            PIEdisplayObject.cb55 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb55").name(b);
            break;
        case 56:
            PIEdisplayObject.cb56 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb56").name(b);
            break;
        case 57:
            PIEdisplayObject.cb57 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb57").name(b);
            break;
        case 58:
            PIEdisplayObject.cb58 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb58").name(b);
            break;
        case 59:
            PIEdisplayObject.cb59 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb59").name(b);
            break;
        case 60:
            PIEdisplayObject.cb60 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb60").name(b);
            break;
        case 61:
            PIEdisplayObject.cb61 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb61").name(b);
            break;
        case 62:
            PIEdisplayObject.cb62 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb62").name(b);
            break;
        case 63:
            PIEdisplayObject.cb63 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb63").name(b);
            break;
        case 64:
            PIEdisplayObject.cb64 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb64").name(b);
            break;
        case 65:
            PIEdisplayObject.cb65 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb65").name(b);
            break;
        case 66:
            PIEdisplayObject.cb66 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb66").name(b);
            break;
        case 67:
            PIEdisplayObject.cb67 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb67").name(b);
            break;
        case 68:
            PIEdisplayObject.cb68 = d;
            a = PIEdisplayGUI.add(PIEdisplayObject, "cb68").name(b);
            break;
        // case 19:
        //     PIEdisplayObject.cb19 = d;
        //     a = PIEdisplayGUI.add(PIEdisplayObject, "cb19").name(b);
        //     break;
        // case 19:
        //     PIEdisplayObject.cb19 = d;
        //     a = PIEdisplayGUI.add(PIEdisplayObject, "cb19").name(b);
        //     break;
        // case 19:
        //     PIEdisplayObject.cb19 = d;
        //     a = PIEdisplayGUI.add(PIEdisplayObject, "cb19").name(b);
        //     break;
        // case 19:
        //     PIEdisplayObject.cb19 = d;
        //     a = PIEdisplayGUI.add(PIEdisplayObject, "cb19").name(b);
        //     break;
        // case 19:
        //     PIEdisplayObject.cb19 = d;
        //     a = PIEdisplayGUI.add(PIEdisplayObject, "cb19").name(b);
        //     break;
        // case 19:
        //     PIEdisplayObject.cb19 = d;
        //     a = PIEdisplayGUI.add(PIEdisplayObject, "cb19").name(b);
        //     break;
        // case 19:
        //     PIEdisplayObject.cb19 = d;
        //     a = PIEdisplayGUI.add(PIEdisplayObject, "cb19").name(b);
        //     break;
        // case 19:
        //     PIEdisplayObject.cb19 = d;
        //     a = PIEdisplayGUI.add(PIEdisplayObject, "cb19").name(b);
        //     break;
        // case 19:
        //     PIEdisplayObject.cb19 = d;
        //     a = PIEdisplayGUI.add(PIEdisplayObject, "cb19").name(b);
        //     break;
        // case 19:
        //     PIEdisplayObject.cb19 = d;
        //     a = PIEdisplayGUI.add(PIEdisplayObject, "cb19").name(b);
        //     break;
        // case 19:
        //     PIEdisplayObject.cb19 = d;
        //     a = PIEdisplayGUI.add(PIEdisplayObject, "cb19").name(b);
        //     break;
        // case 19:
        //     PIEdisplayObject.cb19 = d;
        //     a = PIEdisplayGUI.add(PIEdisplayObject, "cb19").name(b);
        //     break;
        // case 19:
        //     PIEdisplayObject.cb19 = d;
        //     a = PIEdisplayGUI.add(PIEdisplayObject, "cb19").name(b);
        //     break;
        // case 19:
        //     PIEdisplayObject.cb19 = d;
        //     a = PIEdisplayGUI.add(PIEdisplayObject, "cb19").name(b);
        //     break;
        // case 19:
        //     PIEdisplayObject.cb19 = d;
        //     a = PIEdisplayGUI.add(PIEdisplayObject, "cb19").name(b);
        //     break;
        // case 19:
        //     PIEdisplayObject.cb19 = d;
        //     a = PIEdisplayGUI.add(PIEdisplayObject, "cb19").name(b);
        //     break;
        default:
            return;
            break
    }
    a.onChange(c);
    PIEcbDisplayHandles.push(a);
    PIEcbDisplayNames.push(b);
    PIEcbDisplay++;
}


function PIEaddMyText(b, c) {
    var a;
    switch (PIEitDisplay) {
        case 0:
            PIEdisplayObject.it00 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it00").name(b);
            break;
        case 1:
            PIEdisplayObject.it01 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it01").name(b);
            break;
        case 2:
            PIEdisplayObject.it02 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it02").name(b);
            break;
        case 3:
            PIEdisplayObject.it03 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it03").name(b);
            break;
        case 4:
            PIEdisplayObject.it04 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it04").name(b);
            break;
        case 5:
            PIEdisplayObject.it05 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it05").name(b);
            break;
        case 6:
            PIEdisplayObject.it06 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it06").name(b);
            break;
        case 7:
            PIEdisplayObject.it07 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it07").name(b);
            break;
        case 8:
            PIEdisplayObject.it08 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it08").name(b);
            break;
        case 9:
            PIEdisplayObject.it09 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it09").name(b);
            break;
        case 10:
            PIEdisplayObject.it10 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it10").name(b);
            break;
        case 11:
            PIEdisplayObject.it11 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it11").name(b);
            break;
        case 12:
            PIEdisplayObject.it12 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it12").name(b);
            break;
        case 13:
            PIEdisplayObject.it13 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it13").name(b);
            break;
        case 14:
            PIEdisplayObject.it14 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it14").name(b);
            break;
        case 15:
            PIEdisplayObject.it15 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it15").name(b);
            break;
        case 16:
            PIEdisplayObject.it16 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it16").name(b);
            break;
        case 17:
            PIEdisplayObject.it17 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it17").name(b);
            break;
        case 18:
            PIEdisplayObject.it18 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it18").name(b);
            break;
        case 19:
            PIEdisplayObject.it19 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it19").name(b);
            break;
            case 20:
            PIEdisplayObject.it20 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it20").name(b);
            break;
        case 21:
            PIEdisplayObject.it21 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it21").name(b);
            break;
        case 22:
            PIEdisplayObject.it22 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it22").name(b);
            break;
        case 23:
            PIEdisplayObject.it23 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it23").name(b);
            break;
        case 24:
            PIEdisplayObject.it24 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it24").name(b);
            break;
        case 25:
            PIEdisplayObject.it25 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it25").name(b);
            break;
        case 26:
            PIEdisplayObject.it26 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it26").name(b);
            break;
        case 27:
            PIEdisplayObject.it27 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it27").name(b);
            break;
        case 28:
            PIEdisplayObject.it28 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it28").name(b);
            break;
        case 29:
            PIEdisplayObject.it29 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it29").name(b);
            break;
        case 30:
            PIEdisplayObject.it30 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it30").name(b);
            break;
        case 31:
            PIEdisplayObject.it31 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it31").name(b);
            break;
        case 32:
            PIEdisplayObject.it32 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it32").name(b);
            break;
        case 33:
            PIEdisplayObject.it33 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it33").name(b);
            break;
        case 34:
            PIEdisplayObject.it34 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it34").name(b);
            break;
        case 35:
            PIEdisplayObject.it19 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it35").name(b);
            break;
        case 36:
            PIEdisplayObject.it36 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it36").name(b);
            break;
        case 37:
            PIEdisplayObject.it37 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it37").name(b);
            break;
        case 38:
            PIEdisplayObject.it38 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it38").name(b);
            break;
        case 39:
            PIEdisplayObject.it39 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it39").name(b);
            break;
        case 40:
            PIEdisplayObject.it40 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it40").name(b);
            break;
        case 41:
            PIEdisplayObject.it41 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it41").name(b);
            break;
        case 42:
            PIEdisplayObject.it42 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it42").name(b);
            break;
        case 43:
            PIEdisplayObject.it43 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it43").name(b);
            break;
        case 44:
            PIEdisplayObject.it44 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it44").name(b);
            break;
        case 45:
            PIEdisplayObject.it45 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it45").name(b);
            break;
        case 46:
            PIEdisplayObject.it46 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it46").name(b);
            break;
        case 47:
            PIEdisplayObject.it47 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it47").name(b);
            break;
        case 48:
            PIEdisplayObject.it48 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it48").name(b);
            break;
        case 49:
            PIEdisplayObject.it49 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it49").name(b);
            break;
        case 50:
            PIEdisplayObject.it50 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it50").name(b);
            break;
        case 51:
            PIEdisplayObject.it51 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it51").name(b);
            break;
        case 52:
            PIEdisplayObject.it52 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it52").name(b);
            break;
        case 53:
            PIEdisplayObject.it53 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it53").name(b);
            break;
        case 54:
            PIEdisplayObject.it54 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it54").name(b);
            break;
        case 55:
            PIEdisplayObject.it55 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it55").name(b);
            break;
        case 56:
            PIEdisplayObject.it56 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it56").name(b);
            break;
        case 57:
            PIEdisplayObject.it57 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it57").name(b);
            break;
        case 58:
            PIEdisplayObject.it58 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it58").name(b);
            break;
        case 59:
            PIEdisplayObject.it59 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it59").name(b);
            break;
        case 60:
            PIEdisplayObject.it60 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it60").name(b);
            break;
        case 61:
            PIEdisplayObject.it61 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it61").name(b);
            break;
        case 62:
            PIEdisplayObject.it62 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it62").name(b);
            break;
        case 63:
            PIEdisplayObject.it63 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it63").name(b);
            break;
        case 64:
            PIEdisplayObject.it64 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it64").name(b);
            break;
        case 65:
            PIEdisplayObject.it65 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it65").name(b);
            break;
        case 66:
            PIEdisplayObject.it66 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it66").name(b);
            break;
        case 67:
            PIEdisplayObject.it67 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it67").name(b);
            break;
        case 68:
            PIEdisplayObject.it68 = c;
            a = PIEdisplayGUI.add(PIEdisplayObject, "it68").name(b);
            break;
       
        default:
            return;
            break
    }
    PIEitDisplayHandles.push(a);
    PIEitDisplayNames.push(b);
    PIEitDisplay++
}


///////////////////////////////////////////////////



function PIEstopAnimation() {
    if (PIEanimationON == true) {
        PIEpauseOffset = 0;
        PIEcurrentTime = 0;
        PIEoffsetTime = 0;
        PIEanimationON = false;
        PIEanimationPaused = false;
        PIEresumeButton.style.display = "none";
        PIEresumeButton.style.visibility = "hidden";
        PIEpauseButton.style.display = "inline";
        PIEpauseButton.style.visibility = "hidden";
        PIEstopButton.style.display = "none";
        PIEstartButton.style.display = "inline";
        PIEshowInputPanel()
        resetExperiment();
        console.log("in epxerimentjs local file");
    }
}

//==============================================//

function level3ans(){

    PIEaddMyText("Resultant",refflevel3);
    PIEaddMyCheckbox("R1 series R2", true,x);
    // var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // // console.log(inputCheckboxes);
    // inputCheckboxes[0].remove();

    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
     box1 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({color: "gray" }));
     PIEaddElement(box1);
     var edges = new THREE.EdgesGeometry(boxGeom);
     var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
     box1.add(line);
     box1.position.set(-4.4, 0, -3.4);

     //second resistor
     var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
     box2 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({color: "gray" }));//color: 0xd3d3d3
     PIEaddElement(box2);
     var edges2 = new THREE.EdgesGeometry(boxGeom2);
     var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
     box2.add(line2);
     box2.position.set(4.4, 0, -3.4);

       //  first resistor text

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R1", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel81 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel81);


        thevel81.position.set(-5, 0, -3);
        thevel81.rotation.x = - Math.PI / 2;


    });







    //  second resistor txt

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R2", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel82 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel82);


        thevel82.position.set(3.8, 0, -3);
        thevel82.rotation.x = - Math.PI / 2;


    });

     //wire connecting the resistors
     var curve1 = new THREE.CubicBezierCurve3(
         new THREE.Vector3(-7, 0,-3.4),
         new THREE.Vector3(-6.5, 0,-3.4),
         new THREE.Vector3(-6, 0,-3.4),
         new THREE.Vector3(-5.86666, 0, -3.4)
     );

     var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
     mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

     PIEaddElement(mesh1);

     //wire connecting the resistors
     var curve2 = new THREE.CubicBezierCurve3(
         new THREE.Vector3(-2.93333, 0,-3.4),
         new THREE.Vector3(-1, 0,-3.4),
         new THREE.Vector3(-1.5, 0,-3.4),
         new THREE.Vector3(2.933333333333, 0, -3.4)
     );

     var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
     mesh2 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

     PIEaddElement(mesh2);

     //wire connecting the resistors
     var curve3 = new THREE.CubicBezierCurve3(
         new THREE.Vector3(5.866666666, 0,-3.4),
         new THREE.Vector3(6, 0,-3.4),
         new THREE.Vector3(7, 0,-3.4),
         new THREE.Vector3(7, 0,-3.4)
     );

     var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
     mesh3 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

     PIEaddElement(mesh3);

      //  //vertical lines
    var curve7 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-7, 0, -3.4),
        new THREE.Vector3(-7, 0, -1.6),
        new THREE.Vector3(-7, 0, -1.2),
        new THREE.Vector3(-7, 0, .4)
    );

    var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
    mesh4 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh4);

    // //  vertical lines
    var curve8 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7, 0, -3.4),
        new THREE.Vector3(7, 0, -1.6),
        new THREE.Vector3(7, 0, -1.2),
        new THREE.Vector3(7, 0, .4)
    );

    var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
    mesh5 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh5);

    //wires connecting the terminals to the resistors in series

        //wire connecting the resistors
        var curve6 = new THREE.CubicBezierCurve3(
            new THREE.Vector3(-8.8, 0, .4),
            new THREE.Vector3(-8.5, 0, .4),
            new THREE.Vector3(-8.3, 0, .4),
            new THREE.Vector3(-7, 0, .4)
        );
    
        var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
        mesh6 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));
    
        PIEaddElement(mesh6);
    
        //  wire connecting the resistors
        var curve9 = new THREE.CubicBezierCurve3(
            new THREE.Vector3(7, 0, .4),
            new THREE.Vector3(7.5, 0, .4),
            new THREE.Vector3(8, 0, .4),
            new THREE.Vector3(8.8, 0, .4)
        );
    
        var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
        mesh7 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));
    
        PIEaddElement(mesh7);



        R12 = (R1 + R2);

        PIEaddMyText("R12", R12);
        // PIEaddMyCheckbox("R3 parellel R4",false,level3Case3);
        PIEaddMyCheckbox("R3 series R4",true,x);
        PIErender();
    
        console.log("in l3c1");



        // PIEchangeDisplayCheckbox("R3 series R4", true);
        // var inputCheckboxes = document.getElementsByClassName("cr boolean");
        // // console.log(inputCheckboxes);
        // inputCheckboxes[1].remove();
    
        //first resistor
         var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
         box41 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({color: "gray" }));
         PIEaddElement(box41);
         var edges = new THREE.EdgesGeometry(boxGeom);
         var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
         box41.add(line);
         box41.position.set(-4.4, 0, 3.8);
    
         //second resistor
         var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
         box42 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({color: "gray" }));//color: 0xd3d3d3
         PIEaddElement(box42);
         var edges2 = new THREE.EdgesGeometry(boxGeom2);
         var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
         box42.add(line2);
         box42.position.set(4.4, 0, 3.8);

    //  first resistor text

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R3", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel83 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel83);


        thevel83.position.set(-5, 0, 4.2);
        thevel83.rotation.x = - Math.PI / 2;


    });




    //  second resistor txt

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R4", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel84 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel84);


        thevel84.position.set(3.8, 0, 4.2);
        thevel84.rotation.x = - Math.PI / 2;


    });
    
         //wire connecting the resistors
         var curve1 = new THREE.CubicBezierCurve3(
             new THREE.Vector3(-7, 0,3.8),
             new THREE.Vector3(-6.5, 0,3.8),
             new THREE.Vector3(-6, 0,3.8),
             new THREE.Vector3(-5.86666, 0, 3.8)
         );
    
         var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
         mesh41 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));
    
         PIEaddElement(mesh41);
    
         //wire connecting the resistors
         var curve2 = new THREE.CubicBezierCurve3(
             new THREE.Vector3(-2.93333, 0,3.8),
             new THREE.Vector3(-1, 0,3.8),
             new THREE.Vector3(-1.5, 0,3.8),
             new THREE.Vector3(2.933333333333, 0, 3.8)
         );
    
         var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
         mesh42 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));
    
         PIEaddElement(mesh42);
    
         //wire connecting the resistors
         var curve3 = new THREE.CubicBezierCurve3(
             new THREE.Vector3(5.866666666, 0,3.8),
             new THREE.Vector3(6, 0,3.8),
             new THREE.Vector3(7, 0,3.8),
             new THREE.Vector3(7, 0,3.8)
         );
    
         var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
         mesh43 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));
    
         PIEaddElement(mesh43);
    
          //  //vertical lines
        var curve7 = new THREE.CubicBezierCurve3(
            new THREE.Vector3(-7, 0, 3.8),
            new THREE.Vector3(-7, 0, 1.6),
            new THREE.Vector3(-7, 0, 1.2),
            new THREE.Vector3(-7, 0, .4)
        );
    
        var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
        mesh44 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));
    
        PIEaddElement(mesh44);
    
        // //  vertical lines
        var curve8 = new THREE.CubicBezierCurve3(
            new THREE.Vector3(7, 0, 3.8),
            new THREE.Vector3(7, 0, 1.6),
            new THREE.Vector3(7, 0, 1.2),
            new THREE.Vector3(7, 0, .4)
        );
    
        var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
        mesh45 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));
    
        PIEaddElement(mesh45);
    
        //wires connecting the terminals to the resistors in series
    
            //wire connecting the resistors
            var curve6 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(-8.8, 0, .4),
                new THREE.Vector3(-8.5, 0, .4),
                new THREE.Vector3(-8.3, 0, .4),
                new THREE.Vector3(-7, 0, .4)
            );
        
            var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
            mesh46 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));
        
            PIEaddElement(mesh46);
        
            //  wire connecting the resistors
            var curve9 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(7, 0, .4),
                new THREE.Vector3(7.5, 0, .4),
                new THREE.Vector3(8, 0, .4),
                new THREE.Vector3(8.8, 0, .4)
            );
        
            var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
            mesh47 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));
        
            PIEaddElement(mesh47);
    
            R34 = (R3 + R4);
    
            PIEaddMyText("R34", R34);
            PIEaddMyCheckbox("R12 parellel R34",true,x);
            
            PIErender();
    

            // PIEchangeDisplayCheckbox("R12 parellel R34",true);
    R1234= (R12*R34)/(R12+R34);    
    R1234string=R1234.toFixed(2);
    PIEaddMyCheckbox("R1234",R1234);
    giveupbtn.remove();

    if(R1234string!=refflevel3string){
     
       resetMessage();
        currentLevel="Level 1";
    }
    else if (R1234string == refflevel3string &&flag==0) {
        
       nextlevelMessage();

         level2btn=PIEaddButton("Next Level");

         level2btn.addEventListener("click",level4Action);
         PIErender();
    }
    
    console.log("level3case10");

}
function x(){

}

function level2ans(){

    PIEaddMyText("Resultant", refflevel2);
    PIEaddMyCheckbox("R1 parellel R2", true,x);
    // var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // // console.log(inputCheckboxes);
    // inputCheckboxes[1].remove();


    //////////////////////////////
    //first resistor
    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
    box1 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box1);
    var edges = new THREE.EdgesGeometry(boxGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
    box1.add(line);
    box1.position.set(0, 0, 1.4);

    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box2 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box2);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box2.add(line2);
    box2.position.set(0, 0, -1); var loader = new THREE.FontLoader();


    //  second resistor txt

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R1", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel82 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel82);


        thevel82.position.set(-0.55, 0, -.6);
        thevel82.rotation.x = - Math.PI / 2;


    });



     var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R2", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel81 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel81);


        thevel81.position.set(-0.55, 0, 1.8);
        thevel81.rotation.x = - Math.PI / 2;


    });









    //wire connecting the resistors
    //  var curve1 = new THREE.CubicBezierCurve3(
    //      new THREE.Vector3(-8.8, 0, .4),
    //      new THREE.Vector3(-7, 0, .4),
    //      new THREE.Vector3(-6, 0, .4),
    //      new THREE.Vector3(-5.86666, 0, 0.4)
    //  );

    //  var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
    //  var mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

    //  PIEaddElement(mesh1);

    //wire connecting the resistors
    var curve2 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-1.46666, 0, 1.4),
        new THREE.Vector3(-1.5, 0, 1.4),
        new THREE.Vector3(-2, 0, 1.4),
        new THREE.Vector3(-2.933333333, 0, 1.4)
    );

    var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
    mesh1 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh1);

    //wire connecting the resistors
    var curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(1.466666666, 0, 1.4),
        new THREE.Vector3(2, 0, 1.4),
        new THREE.Vector3(3, 0, 1.4),
        new THREE.Vector3(2.93333333, 0, 1.4)
    );

    var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
    mesh2 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh2);

    //wire connecting the resistors
    var curve4 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-1.46666, 0, -1),
        new THREE.Vector3(-1.5, 0, -1),
        new THREE.Vector3(-2, 0, -1),
        new THREE.Vector3(-2.933333333, 0, -1)
    );

    var tube4 = new THREE.TubeGeometry(curve4, 100, 0.05, 20, false);
    mesh3 = new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh3);

    //wire connecting the resistors
    var curve5 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(1.466666666, 0, -1),
        new THREE.Vector3(2, 0, -1),
        new THREE.Vector3(3, 0, -1),
        new THREE.Vector3(2.93333333, 0, -1)
    );

    var tube5 = new THREE.TubeGeometry(curve5, 100, 0.05, 20, false);
    mesh4 = new THREE.Mesh(tube5, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh4);

    //wire connecting the resistors
    var curve6 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-8.8, 0, .4),
        new THREE.Vector3(-7, 0, .4),
        new THREE.Vector3(-6, 0, .4),
        new THREE.Vector3(-2.93333333, 0, .4)
    );

    var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
    mesh5 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh5);

    //  wire connecting the resistors
    var curve9 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(2.93333, 0, .4),
        new THREE.Vector3(3, 0, .4),
        new THREE.Vector3(4, 0, .4),
        new THREE.Vector3(8.8, 0, .4)
    );

    var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
    mesh6 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh6);


    //  //vertical lines
    var curve7 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-2.933333, 0, 1.4),
        new THREE.Vector3(-2.933333, 0, 1.2),
        new THREE.Vector3(-2.933333, 0, 0),
        new THREE.Vector3(-2.933333, 0, -1)
    );

    var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
    mesh7 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh7);

    // //  vertical lines
    var curve8 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(2.933333, 0, 1.4),
        new THREE.Vector3(2.933333, 0, 1.2),
        new THREE.Vector3(2.933333, 0, 0),
        new THREE.Vector3(2.933333, 0, -1)
    );

    var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
    mesh8 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh8);


    PIErender();

    //  if(camefrom=="level2")
    //     return;
    // else{
    // // alert("destr");
    //     removeElements();
    // }

    R12 = (R1 * R2) / (R1 + R2);

    PIEaddMyText("R12", R12);
    PIEaddMyCheckbox("R12 parellel R3",true,x);
    PIErender();
   
    console.log("in l2c1");
    


//=================================================================================//


            
            var boxGeom3 = new THREE.BoxGeometry(2.933, .5, 1);
            box3 = new THREE.Mesh(boxGeom3, new THREE.MeshBasicMaterial({color: "gray" }));
            PIEaddElement(box3);
            var edges3 = new THREE.EdgesGeometry(boxGeom3);
            var line3 = new THREE.LineSegments(edges3, new THREE.LineBasicMaterial({ color: 0x000 }));
            box3.add(line3);
            box3.position.set(0, 0, 3.8);

    //  first resistor text

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R3", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel83 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel83);


        thevel83.position.set(-.58, 0, 4.2);
        thevel83.rotation.x = - Math.PI / 2;


    });


            /////////////////////////////////////

            //wire connecting the resistors
            var curve4 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(-1.46666, 0, 3.8),
                new THREE.Vector3(-1.5, 0, 3.8),
                new THREE.Vector3(-2, 0, 3.8),
                new THREE.Vector3(-2.933333333, 0, 3.8)
            );

            var tube4 = new THREE.TubeGeometry(curve4, 100, 0.05, 20, false);
            mesh9 = new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({ color: "black" }));

            PIEaddElement(mesh9);

            //wire connecting the resistors
            var curve5 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(1.466666666, 0, 3.8),
                new THREE.Vector3(2, 0, 3.8),
                new THREE.Vector3(3, 0, 3.8),
                new THREE.Vector3(2.93333333, 0, 3.8)
            );

            var tube5 = new THREE.TubeGeometry(curve5, 100, 0.05, 20, false);
            mesh10 = new THREE.Mesh(tube5, new THREE.MeshBasicMaterial({ color: "black" }));

            PIEaddElement(mesh10);

            //  //vertical lines
            var curve7 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(-2.933333, 0, 1.4),
                new THREE.Vector3(-2.933333, 0, 1.6),
                new THREE.Vector3(-2.933333, 0, 2),
                new THREE.Vector3(-2.933333, 0, 3.8)
            );

            var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
            mesh11 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));
            PIEaddElement(mesh11);

            // //  vertical lines
            var curve8 = new THREE.CubicBezierCurve3(
                new THREE.Vector3(2.933333, 0, 1.4),
                new THREE.Vector3(2.933333, 0, 1.6),
                new THREE.Vector3(2.933333, 0, 1.8),
                new THREE.Vector3(2.933333, 0, 3.8)
            );

            var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
            mesh12 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));
           
        
            PIEaddElement(mesh12);

    R123 = (R12 * R3) / (R12 + R3);
    R123string=R123.toFixed(2);

    PIEaddMyText("R123", R123);
    PIErender();
    giveupbtn.remove();

    if (R123string == refflevel2string&&flag==0) {
    
       nextlevelMessage();
    }

    
     
    level2btn=PIEaddButton("Next Level");

    level2btn.addEventListener("click",level3Action);
    PIErender();
    console.log("in case1");

}
function level4ans(){

    PIEaddMyText("Resultant", refflevel4);
    PIEaddMyCheckbox("R1 p R2 s R3", true,x);
    // var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // // console.log(inputCheckboxes);
    // for(var i=4;i>=0;i--){
    //     if(i!=2)
    //     inputCheckboxes[i].remove();
    // }


    //===============================================//

    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
    box31 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box31);
    var edges = new THREE.EdgesGeometry(boxGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
    box31.add(line);
    box31.position.set(-4.4, 0, -5.8);

    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box32 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box32);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box32.add(line2);
    box32.position.set(-4.4, 0, -1);

    //second resistor

    var boxGeom3 = new THREE.BoxGeometry(2.933, .5, 1);
    box2 = new THREE.Mesh(boxGeom3, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box2);
    var edges3 = new THREE.EdgesGeometry(boxGeom3);
    var line3 = new THREE.LineSegments(edges3, new THREE.LineBasicMaterial({ color: 0x000 }));
    box2.add(line3);
    box2.position.set(4.4, 0, -3.8);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R1", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel81 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel81);


        thevel81.position.set(-5, 0, -5.4);
        thevel81.rotation.x = - Math.PI / 2;


    });


    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R2", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel82 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel82);


        thevel82.position.set(-5, 0, -.6);
        thevel82.rotation.x = - Math.PI / 2;


    });


    //third resistor txt

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R3", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel83 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel83);


        thevel83.position.set(3.8, 0, -3.4);
        thevel83.rotation.x = - Math.PI / 2;


    });



    //wire connecting the resistors
    //  var curve1 = new THREE.CubicBezierCurve3(
    //      new THREE.Vector3(-8.8, 0, .4),
    //      new THREE.Vector3(-7, 0, .4),
    //      new THREE.Vector3(-6, 0, .4),
    //      new THREE.Vector3(-5.86666, 0, 0.4)
    //  );

    //  var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
    //  var mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

    //  PIEaddElement(mesh1);

    //wire connecting the resistors

    var curve2 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-5.8666, 0, -5.8),
        new THREE.Vector3(-6, 0, -5.8),
        new THREE.Vector3(-7, 0, -5.8),
        new THREE.Vector3(-7.8, 0, -5.8)
    );

    var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
    mesh31 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh31);

    //wire connecting the resistors
    var curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-2.933, 0, -5.8),
        new THREE.Vector3(-1, 0, -5.8),
        new THREE.Vector3(-1, 0, -5.8),
        new THREE.Vector3(-0.999, 0, -5.8)
    );

    var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
    mesh32 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh32);

    //wire connecting the resistors
    var curve4 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-5.8666, 0, -1),
        new THREE.Vector3(-5.9, 0, -1),
        new THREE.Vector3(-6, 0, -1),
        new THREE.Vector3(-7.8, 0, -1)
    );

    var tube4 = new THREE.TubeGeometry(curve4, 100, 0.05, 20, false);
    mesh33 = new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh33);

    //wire connecting the resistors
    var curve5 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-2.9333, 0, -1),
        new THREE.Vector3(-1, 0, -1),
        new THREE.Vector3(-1, 0, -1),
        new THREE.Vector3(-0.999, 0, -1)
    );

    var tube5 = new THREE.TubeGeometry(curve5, 100, 0.05, 20, false);
    mesh34 = new THREE.Mesh(tube5, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh34);

    //wire connecting the resistors
    var curve6 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-8.8, 0, .4),
        new THREE.Vector3(-8.5, 0, .4),
        new THREE.Vector3(-8.3, 0, .4),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
    mesh35 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh35);

    //  wire connecting the resistors
    var curve9 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, .4),
        new THREE.Vector3(7.5, 0, .4),
        new THREE.Vector3(8, 0, .4),
        new THREE.Vector3(8.8, 0, .4)
    );

    var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
    mesh36 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh36);


    //  //vertical lines
    var curve7 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-7.8, 0, -5.8),
        new THREE.Vector3(-7.8, 0, -1.6),
        new THREE.Vector3(-7.8, 0, -1.2),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
    mesh37 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh37);

    // //  vertical lines
    var curve8 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, -3.8),
        new THREE.Vector3(7.8, 0, -1.6),
        new THREE.Vector3(7.8, 0, -1.2),
        new THREE.Vector3(7.8, 0, .4)
    );

    var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
    mesh38 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh38);
    // //  vertical lines
    var curve41 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-0.999, 0, -5.8),
        new THREE.Vector3(-0.999, 0, -1.6),
        new THREE.Vector3(-0.999, 0, -1.2),
        new THREE.Vector3(-0.999, 0, -1)
    );

    var tube41 = new THREE.TubeGeometry(curve41, 100, 0.05, 20, false);
    mesh41 = new THREE.Mesh(tube41, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh41);

    var curve41 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(5.866, 0, -3.8),
        new THREE.Vector3(6, 0, -3.8),
        new THREE.Vector3(6.999, 0, -3.8),
        new THREE.Vector3(7.8, 0, -3.8)
    );

    var tube41 = new THREE.TubeGeometry(curve41, 100, 0.05, 20, false);
    mesh44 = new THREE.Mesh(tube41, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh44);

    var curve41 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(2.966, 0, -3.8),
        new THREE.Vector3(0.999, 0, -3.8),
        new THREE.Vector3(0.999, 0, -3.8),
        new THREE.Vector3(-0.999, 0, -3.8)
    );

    var tube41 = new THREE.TubeGeometry(curve41, 100, 0.05, 20, false);
    mesh45 = new THREE.Mesh(tube41, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh45);

    R123 = (R1*R2)/(R1+R2)+R3;

       PIEaddMyText("R123", R123);
       PIEaddMyCheckbox("R123 parellel R4",true,x);
       
       PIErender();
      
      
   
   
    console.log("in l4c3");



    // PIEaddMyCheckbox("R123 parellel R4",true,x);


    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
    box91 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box91);
    var edges = new THREE.EdgesGeometry(boxGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
    box91.add(line);
    box91.position.set(0, 0, 3.8);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R4", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel84 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel84);


        thevel84.position.set(-.58, 0, 4.2);
        thevel84.rotation.x = - Math.PI / 2;


    });


    // //second resistor
    // var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    // box22 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));
    // PIEaddElement(box22);
    // var edges2 = new THREE.EdgesGeometry(boxGeom2);
    // var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    // box22.add(line2);
    // box22.position.set(0,0,3.8);

    //wire connecting the resistors
    //  var curve1 = new THREE.CubicBezierCurve3(
    //      new THREE.Vector3(-8.8, 0, .4),
    //      new THREE.Vector3(-7, 0, .4),
    //      new THREE.Vector3(-6, 0, .4),
    //      new THREE.Vector3(-5.86666, 0, 0.4)
    //  );

    //  var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
    //  var mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

    //  PIEaddElement(mesh1);

    //wire connecting the resistors
    var curve2 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-1.46666, 0, 3.8),
        new THREE.Vector3(-1.5, 0, 3.8),
        new THREE.Vector3(-2, 0, 3.8),
        new THREE.Vector3(-7.8, 0, 3.8)
    );

    var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
    mesh91 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh91);

    //wire connecting the resistors
    var curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(1.466666666, 0, 3.8),
        new THREE.Vector3(2, 0, 3.8),
        new THREE.Vector3(3, 0, 3.8),
        new THREE.Vector3(7.8, 0, 3.8)
    );

    var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
    mesh92 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh92);

    //wire connecting the resistors
    // var curve4 = new THREE.CubicBezierCurve3(
    //     new THREE.Vector3(-1.46666, 0, 1.4),
    //     new THREE.Vector3(-1.5, 0, 1.4),
    //     new THREE.Vector3(-2, 0, 1.4),
    //     new THREE.Vector3(-7, 0, 1.4)
    // );

    // var tube4 = new THREE.TubeGeometry(curve4, 100, 0.05, 20, false);
    // mesh23 = new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({ color: "black" }));

    // PIEaddElement(mesh23);

    //wire connecting the resistors
    // var curve5 = new THREE.CubicBezierCurve3(
    //     new THREE.Vector3(1.466666666, 0, 1.4),
    //     new THREE.Vector3(2, 0, 1.4),
    //     new THREE.Vector3(3, 0, 1.4),
    //     new THREE.Vector3(7, 0, 1.4)
    // );

    // var tube5 = new THREE.TubeGeometry(curve5, 100, 0.05, 20, false);
    // mesh24 = new THREE.Mesh(tube5, new THREE.MeshBasicMaterial({ color: "black" }));

    // PIEaddElement(mesh24);

    //wire connecting the resistors
    var curve6 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-8.8, 0, .4),
        new THREE.Vector3(-8.5, 0, .4),
        new THREE.Vector3(-8.3, 0, .4),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
    mesh95 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh95);

    //  wire connecting the resistors
    var curve9 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, .4),
        new THREE.Vector3(7.5, 0, .4),
        new THREE.Vector3(8, 0, .4),
        new THREE.Vector3(8.8, 0, .4)
    );

    var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
    mesh96 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh96);


    //  //vertical lines
    var curve7 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-7.8, 0, 3.8),
        new THREE.Vector3(-7.8, 0, 1.6),
        new THREE.Vector3(-7.8, 0, 1.2),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
    mesh97 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh97);

    // //  vertical lines
    var curve8 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, 3.8),
        new THREE.Vector3(7.8, 0, 1.6),
        new THREE.Vector3(7.8, 0, 1.2),
        new THREE.Vector3(7.8, 0, .4)
    );

    var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
    mesh98 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh98);

    PIErender();


    R1234= (R123*R4)/(R123+R4);    
    R1234string=R1234.toFixed(2);
    PIEaddMyCheckbox("R1234",R1234);
    giveupbtn.remove();
    if(R1234string!=refflevel4string){
    
        resetMessage();
        currentLevel="Level 1";
    }
    else if (R1234string == refflevel4string&&flag==0) {
        
       nextlevelMessage();

         level2btn=PIEaddButton("Next Level");

         level2btn.addEventListener("click",level5Action);

         PIErender();
         
    }
    
    console.log("level4case10");

}

function level5ans(){

    console.log("level5ans");
    PIEaddMyText("Resultant", refflevel5);
    PIEaddMyCheckbox("R1 p R2 s R3", true,x);


    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
    box31 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box31);
    var edges = new THREE.EdgesGeometry(boxGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
    box31.add(line);
    box31.position.set(-4.4, 0, -5.8);

    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box32 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box32);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box32.add(line2);
    box32.position.set(-4.4, 0, -1);

    //second resistor

    var boxGeom3 = new THREE.BoxGeometry(2.933, .5, 1);
    box2 = new THREE.Mesh(boxGeom3, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box2);
    var edges3 = new THREE.EdgesGeometry(boxGeom3);
    var line3 = new THREE.LineSegments(edges3, new THREE.LineBasicMaterial({ color: 0x000 }));
    box2.add(line3);
    box2.position.set(4.4, 0, -3.8);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R1", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel81 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel81);


        thevel81.position.set(-5, 0, -5.4);
        thevel81.rotation.x = - Math.PI / 2;


    });


    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R2", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel82 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel82);


        thevel82.position.set(-5, 0, -.6);
        thevel82.rotation.x = - Math.PI / 2;


    });


    //third resistor txt

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R3", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel83 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel83);


        thevel83.position.set(3.8, 0, -3.4);
        thevel83.rotation.x = - Math.PI / 2;


    });


    //wire connecting the resistors
    //  var curve1 = new THREE.CubicBezierCurve3(
    //      new THREE.Vector3(-8.8, 0, .4),
    //      new THREE.Vector3(-7, 0, .4),
    //      new THREE.Vector3(-6, 0, .4),
    //      new THREE.Vector3(-5.86666, 0, 0.4)
    //  );

    //  var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
    //  var mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

    //  PIEaddElement(mesh1);

    //wire connecting the resistors

    var curve2 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-5.8666, 0, -5.8),
        new THREE.Vector3(-6, 0, -5.8),
        new THREE.Vector3(-7, 0, -5.8),
        new THREE.Vector3(-7.8, 0, -5.8)
    );

    var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
    mesh31 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh31);

    //wire connecting the resistors
    var curve3 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-2.933, 0, -5.8),
        new THREE.Vector3(-1, 0, -5.8),
        new THREE.Vector3(-1, 0, -5.8),
        new THREE.Vector3(-0.999, 0, -5.8)
    );

    var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
    mesh32 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh32);

    //wire connecting the resistors
    var curve4 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-5.8666, 0, -1),
        new THREE.Vector3(-5.9, 0, -1),
        new THREE.Vector3(-6, 0, -1),
        new THREE.Vector3(-7.8, 0, -1)
    );

    var tube4 = new THREE.TubeGeometry(curve4, 100, 0.05, 20, false);
    mesh33 = new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh33);

    //wire connecting the resistors
    var curve5 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-2.9333, 0, -1),
        new THREE.Vector3(-1, 0, -1),
        new THREE.Vector3(-1, 0, -1),
        new THREE.Vector3(-0.999, 0, -1)
    );

    var tube5 = new THREE.TubeGeometry(curve5, 100, 0.05, 20, false);
    mesh34 = new THREE.Mesh(tube5, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh34);

    //wire connecting the resistors
    var curve6 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-8.8, 0, .4),
        new THREE.Vector3(-8.5, 0, .4),
        new THREE.Vector3(-8.3, 0, .4),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
    mesh35 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh35);

    //  wire connecting the resistors
    var curve9 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, .4),
        new THREE.Vector3(7.5, 0, .4),
        new THREE.Vector3(8, 0, .4),
        new THREE.Vector3(8.8, 0, .4)
    );

    var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
    mesh36 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh36);


    //  //vertical lines
    var curve7 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-7.8, 0, -5.8),
        new THREE.Vector3(-7.8, 0, -1.6),
        new THREE.Vector3(-7.8, 0, -1.2),
        new THREE.Vector3(-7.8, 0, .4)
    );

    var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
    mesh37 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh37);

    // //  vertical lines
    var curve8 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7.8, 0, -3.8),
        new THREE.Vector3(7.8, 0, -1.6),
        new THREE.Vector3(7.8, 0, -1.2),
        new THREE.Vector3(7.8, 0, .4)
    );

    var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
    mesh38 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh38);
    // //  vertical lines
    var curve41 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-0.999, 0, -5.8),
        new THREE.Vector3(-0.999, 0, -1.6),
        new THREE.Vector3(-0.999, 0, -1.2),
        new THREE.Vector3(-0.999, 0, -1)
    );

    var tube41 = new THREE.TubeGeometry(curve41, 100, 0.05, 20, false);
    mesh41 = new THREE.Mesh(tube41, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh41);

    var curve41 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(5.866, 0, -3.8),
        new THREE.Vector3(6, 0, -3.8),
        new THREE.Vector3(6.999, 0, -3.8),
        new THREE.Vector3(7.8, 0, -3.8)
    );

    var tube41 = new THREE.TubeGeometry(curve41, 100, 0.05, 20, false);
    mesh44 = new THREE.Mesh(tube41, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh44);

    var curve41 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(2.966, 0, -3.8),
        new THREE.Vector3(0.999, 0, -3.8),
        new THREE.Vector3(0.999, 0, -3.8),
        new THREE.Vector3(-0.999, 0, -3.8)
    );

    var tube41 = new THREE.TubeGeometry(curve41, 100, 0.05, 20, false);
    mesh45 = new THREE.Mesh(tube41, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh45);

    R123 = (R1*R2)/(R1+R2)+R3;

      
    PIEaddMyText("R123", R123);
    // PIEaddMyCheckbox("R4 parellel R5",false,level5Case8);
    PIEaddMyCheckbox("R4 series R5",true,x);
    
       PIErender();
    // PIEaddMyCheckbox("R4 series R5", true,x);
    // var inputCheckboxes = document.getElementsByClassName("cr boolean");
    // // console.log(inputCheckboxes);
    // inputCheckboxes[1].remove();

    //first resistor
     var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
     box81 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({color: "gray" }));
     PIEaddElement(box81);
     var edges = new THREE.EdgesGeometry(boxGeom);
     var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
     box81.add(line);
     box81.position.set(-4.4, 0, 3.8);

     //second resistor
     var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
     box82 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({color: "gray" }));//color: 0xd3d3d3
     PIEaddElement(box82);
     var edges2 = new THREE.EdgesGeometry(boxGeom2);
     var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
     box82.add(line2);
     box82.position.set(4.4, 0, 3.8);

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R4", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel84 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel84);


        thevel84.position.set(-5, 0, 4.2);
        thevel84.rotation.x = - Math.PI / 2;


    });




    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R5", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel85 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel85);


        thevel85.position.set(3.8, 0, 4.2);
        thevel85.rotation.x = - Math.PI / 2;


    });

     //wire connecting the resistors
     var curve1 = new THREE.CubicBezierCurve3(
         new THREE.Vector3(-7, 0,3.8),
         new THREE.Vector3(-6.5, 0,3.8),
         new THREE.Vector3(-6, 0,3.8),
         new THREE.Vector3(-5.86666, 0, 3.8)
     );

     var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
     mesh81 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

     PIEaddElement(mesh81);

     //wire connecting the resistors
     var curve2 = new THREE.CubicBezierCurve3(
         new THREE.Vector3(-2.93333, 0,3.8),
         new THREE.Vector3(-1, 0,3.8),
         new THREE.Vector3(-1.5, 0,3.8),
         new THREE.Vector3(2.933333333333, 0, 3.8)
     );

     var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
     mesh82 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

     PIEaddElement(mesh82);

     //wire connecting the resistors
     var curve3 = new THREE.CubicBezierCurve3(
         new THREE.Vector3(5.866666666, 0,3.8),
         new THREE.Vector3(6, 0,3.8),
         new THREE.Vector3(7, 0,3.8),
         new THREE.Vector3(7, 0,3.8)
     );

     var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
     mesh83 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

     PIEaddElement(mesh83);

      //  //vertical lines
    var curve7 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-7, 0, 3.8),
        new THREE.Vector3(-7, 0, 1.6),
        new THREE.Vector3(-7, 0, 1.2),
        new THREE.Vector3(-7, 0, .4)
    );

    var tube7 = new THREE.TubeGeometry(curve7, 100, 0.05, 20, false);
    mesh84 = new THREE.Mesh(tube7, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh84);

    // //  vertical lines
    var curve8 = new THREE.CubicBezierCurve3(
        new THREE.Vector3(7, 0, 3.8),
        new THREE.Vector3(7, 0, 1.6),
        new THREE.Vector3(7, 0, 1.2),
        new THREE.Vector3(7, 0, .4)
    );

    var tube8 = new THREE.TubeGeometry(curve8, 100, 0.05, 20, false);
    mesh85 = new THREE.Mesh(tube8, new THREE.MeshBasicMaterial({ color: "black" }));

    PIEaddElement(mesh85);

    //wires connecting the terminals to the resistors in series

        //wire connecting the resistors
        var curve6 = new THREE.CubicBezierCurve3(
            new THREE.Vector3(-8.8, 0, .4),
            new THREE.Vector3(-8.5, 0, .4),
            new THREE.Vector3(-8.3, 0, .4),
            new THREE.Vector3(-7, 0, .4)
        );
    
        var tube6 = new THREE.TubeGeometry(curve6, 100, 0.05, 20, false);
        mesh86 = new THREE.Mesh(tube6, new THREE.MeshBasicMaterial({ color: "black" }));
    
        PIEaddElement(mesh86);
    
        //  wire connecting the resistors
        var curve9 = new THREE.CubicBezierCurve3(
            new THREE.Vector3(7, 0, .4),
            new THREE.Vector3(7.5, 0, .4),
            new THREE.Vector3(8, 0, .4),
            new THREE.Vector3(8.8, 0, .4)
        );
    
        var tube9 = new THREE.TubeGeometry(curve9, 100, 0.05, 20, false);
        mesh87 = new THREE.Mesh(tube9, new THREE.MeshBasicMaterial({ color: "black" }));
    
        PIEaddElement(mesh87);



        R45 = (R4+ R5);

        PIEaddMyText("R45", R45);
        PIEaddMyCheckbox("R123 p R45",true,x);
        PIErender();



    
    // PIEchangeDisplayCheckbox("R123 p R45",true);
    R12345= (R123*R45)/(R123+R45);    
    R12345string=R12345.toFixed(2);
    PIEaddMyCheckbox("R12345",R12345);
    giveupbtn.remove();
    if(R12345string!=refflevel5string){
     
        resetMessage();
        currentLevel="Level 1";
    }
    else if (R12345string == refflevel5string&&flag==0) {
        
        var loader = new THREE.FontLoader();
         loader.load("./optimer.json", function (response) {
             font = response;

             var geometry = new THREE.TextGeometry("Success All Levels Completed", {
                 font: font,
                 size: .8,
                 height: 0.01,
                 curveSegments: 3
             });

             thevel2 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


            PIEaddElement(thevel2);
            thevel2.position.set(-8.65, 0, -15);
            thevel2.rotation.x = - Math.PI / 6;

            resetMessage();
    
            currentLevel="Level 1";
           
         });

        //  level2btn=PIEaddButton("Play Again");
         currentLevel="Level 1";

        //  level2btn.addEventListener("click",PIEresetExperiment());
         
    }
    
    PIErender();
    console.log("level3case10");
    console.log("level5ans");
    


}



function level1ans(){

    PIEaddMyText("Resultant", refflevel1);
    PIEaddMyCheckbox("R1 series R2", true,x);
     
    //  var inputCheckboxes = document.getElementsByClassName("cr boolean");
    //  // console.log(inputCheckboxes);
    //  inputCheckboxes[0].remove();
     // var resistor1Geom = new THREE.CylinderGeometry(.5, .5, 4, 50);//bottom of bulb
     // var resistor1 = new THREE.Mesh(resistor1Geom, new THREE.MeshPhongMaterial({ color: "gray" }));
     // // resistor1.position.set(-3, 0.8, -3);
     // PIEaddElement(resistor1);

     //first resistor
     var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
     box1 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({color: "gray" }));
     PIEaddElement(box1);
     var edges = new THREE.EdgesGeometry(boxGeom);
     var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
     box1.add(line);
     box1.position.set(-4.4, 0, 0.4);

     //second resistor
     var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
     box2 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({color: "gray" }));//color: 0xd3d3d3
     PIEaddElement(box2);
     var edges2 = new THREE.EdgesGeometry(boxGeom2);
     var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
     box2.add(line2);
     box2.position.set(4.4, 0, 0.4);


    //  first resistor text

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R1", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel81 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel81);


        thevel81.position.set(-5, 0, 0.8);
        thevel81.rotation.x = - Math.PI / 2;


    });




    //  second resistor txt

    var loader = new THREE.FontLoader();
    loader.load("optimer.json", function (response) {
        font = response;

        var geometry = new THREE.TextGeometry("R2", {
            font: font,
            size: .8,
            height: 0.3,
            curveSegments: 3
        });

        thevel82 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


        PIEaddElement(thevel82);


        thevel82.position.set(3.8, 0, .8);
        thevel82.rotation.x = - Math.PI / 2;


    });



     

     //wire connecting the resistors
     var curve1 = new THREE.CubicBezierCurve3(
         new THREE.Vector3(-8.8, 0, .4),
         new THREE.Vector3(-7, 0, .4),
         new THREE.Vector3(-6, 0, .4),
         new THREE.Vector3(-5.86666, 0, 0.4)
     );

     var tube1 = new THREE.TubeGeometry(curve1, 100, 0.05, 20, false);
     mesh1 = new THREE.Mesh(tube1, new THREE.MeshBasicMaterial({ color: "black" }));

     PIEaddElement(mesh1);

     //wire connecting the resistors
     var curve2 = new THREE.CubicBezierCurve3(
         new THREE.Vector3(-2.93333, 0, .4),
         new THREE.Vector3(-1, 0, .4),
         new THREE.Vector3(-1.5, 0, .4),
         new THREE.Vector3(2.933333333333, 0, 0.4)
     );

     var tube2 = new THREE.TubeGeometry(curve2, 100, 0.05, 20, false);
     mesh2 = new THREE.Mesh(tube2, new THREE.MeshBasicMaterial({ color: "black" }));

     PIEaddElement(mesh2);

     //wire connecting the resistors
     var curve3 = new THREE.CubicBezierCurve3(
         new THREE.Vector3(5.866666666, 0, .4),
         new THREE.Vector3(6, 0, .4),
         new THREE.Vector3(7, 0, .4),
         new THREE.Vector3(8.8, 0, 0.4)
     );

     var tube3 = new THREE.TubeGeometry(curve3, 100, 0.05, 20, false);
     mesh3 = new THREE.Mesh(tube3, new THREE.MeshBasicMaterial({ color: "black" }));

     PIEaddElement(mesh3);

    //  //wire connecting the resistors
    //  var curve4 = new THREE.CubicBezierCurve3(
    //      new THREE.Vector3(-2.8, 0, .4),
    //      new THREE.Vector3(-7, 0, .4),
    //      new THREE.Vector3(-6, 0, .4),
    //      new THREE.Vector3(-5.86666, 0, 0.4)
    //  );

    //  var tube4 = new THREE.TubeGeometry(curve4, 100, 0.05, 20, false);
    //  var mesh4 = new THREE.Mesh(tube4, new THREE.MeshBasicMaterial({ color: "black" }));

    //  PIEaddElement(mesh4);


     R12 = (R1 + R2);

     R12string=R12.toFixed(2);
     PIEaddMyText("R12", R12);
     PIErender();
     giveupbtn.remove();
     if(R12string == refflevel1string&&flag==0) {
        nextlevelMessage();
     }
     console.log("in case1");

    // resetScene();

    level2btn=PIEaddButton("Next Level");

    level2btn.addEventListener("click",level2Action);

     
    // PIErender();
//      removeElements();
    
    console.log("l1c2");
    

}