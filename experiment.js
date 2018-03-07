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
var R1=2.0;
var R2=2.0;
var R12;
var refflevel1=4.0;
///////
var R3=1.0;
var refflevel2=0.5;
var R123;
///////////////////
var refflevel3=2.0;
var R4=3.0;
var R34;
var R1234;
/////////////
var refflevel4=1.2;
var R123;







///////////////////////////////////////
var nextlevel=true;
var levelbtn;
var currentLevel="Level 1";
var level2btn;

var box1;
var box2;
var box21;
var box91;
var box22;
var box41;
var box42;
var box3;
var box31;
var box32;
var box33;
var mesh1;
var mesh91;
var mesh21;
var mesh31;
var mesh41;
var mesh2;
var mesh92;
var mesh22;
var mesh42;
var mesh3;

var mesh23;
var mesh43;

var mesh4;
var mesh24;
var mesh44;
var mesh32;
var mesh33;
var mesh34;
var mesh5;
var mesh95;
var mesh25;
var mesh45;
var mesh6;
var mesh96;
var mesh26;
var mesh46;
var mesh35;
var mesh36;
var mesh7;
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

function initialiseHelp() {
    helpContent = "";
    helpContent = helpContent + "<h2>Magnetic field due to a current carrying circular loop help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>Shown how the deflection changes with direction and strength of the current.</p>";
    helpContent = helpContent + "<p>When the switch is closed, there is deflection in the compass according to the direction and strength of the current.</p>"
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>Select voltage of a cell through slider.</p>";
    helpContent = helpContent + "<p>Select the direction of the current using checkboxes.</p>";
    helpContent = helpContent + "<p>Drag the compass to set its position.</p>";
    helpContent = helpContent + "<p>Drag the coil to set its position.</p>";
    helpContent = helpContent + "<p>Click on start button to start the animation</p>";
    helpContent = helpContent + "<p>Alternatively, click on the swith to start the animation</p>";
    helpContent = helpContent + "<p>Click on pause button to pause the animation</p>";
    helpContent = helpContent + "<p>Click on Reset button to reset animation</p>";
    helpContent = helpContent + "<p>Click on start button and then drag to view a 360 degree view and scroll to zoom</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo() {
    infoContent = "";
    infoContent = infoContent + "<h2>Magnetic field due to a current carrying circular loop concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>Shown how the deflection changes with direction and strength of the current.</p>";
    infoContent = infoContent + "<p>When the switch is closed, there is deflection in the compass according to the direction and strength of the current.</p>";
    infoContent = infoContent + "<h3>Current Flow</h3>";
    infoContent = infoContent + "<p>According to the Fleming's Right hand rule of finding magnetic direction, if the current's direction is clockwise, the needle deflects to the right and left otherwise </p>";
    infoContent = infoContent + "<p>Needle of compass aligns itself to the tangent to the magnetic field lines</p>";
    infoContent = infoContent + "<p>Also since force on needle is directly propotional to the current, there is more deflection when voltage is high.</p>";
    infoContent = infoContent + "<p>If the compass is moved far from the rod, where there is no magnetic field, then there is no deflection in compass.</p>";
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
    var ambient = new THREE.AmbientLight(0x555555);
    PIEaddElement(ambient);

    var light = new THREE.DirectionalLight(0x123456);
    light.position = PIEcamera.position;
    PIEaddElement(light);

    var ambient = new THREE.AmbientLight(0x555555);
    PIEaddElement(ambient);

    var light = new THREE.DirectionalLight(0x123456);
    light.position = PIEcamera.position;
    PIEaddElement(light);

    var groundMaterial = new THREE.MeshPhongMaterial({ color: 0x024406, specular: 0x111111 });
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

    resetExperiment();
    PIErender();
    console.log("at end stop anim");
    
}

/////////////////////////////////////////////////////////




// //==============================================//
//     // ===========LEVEL 1===================//

// var flag1=0;
// function level1(){
//     if(flag1==0){
//     PIEchangeInputCheckbox("Level 1", true);
//     PIEchangeInputCheckbox("Level 2", false);
//     PIEchangeInputCheckbox("Level 3", false);
//     PIEchangeInputCheckbox("Level 4", false);
//     PIEchangeInputCheckbox("Level 5", false);
    

//     PIErender();
//     flag1 = 1;
//     level1Action()
//     }
// }


// //==============================================//
//     // ===========LEVEL 2===================//

// var flag2=0;
// function level2(){
//     if(flag1==1){
//     PIEchangeInputCheckbox("Level 1", false);
//     PIEchangeInputCheckbox("Level 2", true);
//     PIEchangeInputCheckbox("Level 3", false);
//     PIEchangeInputCheckbox("Level 4", false);
//     PIEchangeInputCheckbox("Level 5", false);

//     PIErender();
    
//     flag2=1;
//     level2Action();

//     }
//     else {
//         PIEchangeInputCheckbox("Level 5", false);
//         PIEchangeInputCheckbox("Level 2", false);
//         PIEchangeInputCheckbox("Level 3", false);
//         PIEchangeInputCheckbox("Level 4", false);
//         // PIEchangeInputCheckbox("Level 1", false);
//     }
// }


// //==============================================//
//     // ===========LEVEL 3===================//
// var flag3=0;
// function level3(){
//     if(flag1==1&&flag2==1){
//     PIEchangeInputCheckbox("Level 1", false);
//     PIEchangeInputCheckbox("Level 3", true);
//     PIEchangeInputCheckbox("Level 2", false);
//     PIEchangeInputCheckbox("Level 4", false);
//     PIEchangeInputCheckbox("Level 5", false);

//     PIErender();
    
//     flag3=1;
//     }
//     else {
//         PIEchangeInputCheckbox("Level 5", false);
//         // PIEchangeInputCheckbox("Level 2", false);
//         PIEchangeInputCheckbox("Level 3", false);
//         PIEchangeInputCheckbox("Level 4", false);
//         // PIEchangeInputCheckbox("Level 1", false);
//     }
// }


// //==============================================//
//     // ===========LEVEL 4===================//

//     var flag4=0;
// function level4(){
//     if (flag1== 1 && flag2 == 1 && flag3 == 1) {
//     PIEchangeInputCheckbox("Level 4", true);
//     PIEchangeInputCheckbox("Level 2", false);
//     PIEchangeInputCheckbox("Level 3", false);
//     PIEchangeInputCheckbox("Level 1", false);
//     PIEchangeInputCheckbox("Level 5", false);

//     PIErender();
    
//     flag4=1;
//     }
//     else {
//         PIEchangeInputCheckbox("Level 5", false);
//         // PIEchangeInputCheckbox("Level 2", false);
//         // PIEchangeInputCheckbox("Level 3", false);
//         PIEchangeInputCheckbox("Level 4", false);
//         // PIEchangeInputCheckbox("Level 1", false);
//     }
// }



// //==============================================//
//     // ===========LEVEL 5===================//

// var flag5=0;
// function level5(){
    
//     if (flag1 == 1 && flag2 == 1 && flag3 == 1 && flag4 == 1) {
//     PIEchangeInputCheckbox("Level 5", true);
//     PIEchangeInputCheckbox("Level 2", false);
//     PIEchangeInputCheckbox("Level 3", false);
//     PIEchangeInputCheckbox("Level 4", false);
//     PIEchangeInputCheckbox("Level 1", false);

//     PIErender();
    
//     flag5=1;
    
// }
// else{
//         PIEchangeInputCheckbox("Level 5", false);
//         // PIEchangeInputCheckbox("Level 2", false);
//         // PIEchangeInputCheckbox("Level 3", false);
//         // PIEchangeInputCheckbox("Level 4", false);
//         // PIEchangeInputCheckbox("Level 1", false);
// }
// }


//======================================================================================================//
                 //===== LEVEL ACTIONS===========//



//======================================================//
        //======LEVEL 1 ACTION===========//
                
function level1Action(){

    PIEaddDisplayText("Resultant Resistance", refflevel1);
    PIEaddDisplayCheckbox("R1 parellel R2", false, level1Case1);
    PIEaddDisplayCheckbox("R1 series R2", false, level1Case2);
    
    
    // PIEchangeInputCheckbox("Level 5", true);
}


//=======================================================//
        //======LEVEL 2ACTION===========//
                
function level2Action(){

    level2btn.remove();
    currentLevel="Level 2";
    levelbtn.innerHTML=currentLevel;
    resetExperiment();
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
    PIEaddDisplayText("Resultant Resistance", refflevel2);    
    PIEaddDisplayCheckbox("R1 parellel R2", false,level2Case1);
    PIEaddDisplayCheckbox("R1 series R2", false,level2Case2);

    // if (PIEgetDisplayCheckbox("R1 parellel R2") == true && PIEgetDisplayCheckbox("R1 series R2") == false){
    //     var inputCheckboxes = document.getElementsByClassName("cr boolean");
    //     // console.log(inputCheckboxes);
    //     inputCheckboxes[4+2].remove();
    //     // console.log(inputCheckboxes);
    //     PIEaddInputCheckbox("R12 parellel R3",false,level2case3);
    // }
    // else if({
    //     var inputCheckboxes = document.getElementsByClassName("cr boolean");
    //     // console.log(inputCheckboxes);
    //     inputCheckboxes[4 + 1].remove();
    //     // console.log(inputCheckboxes);
    //     PIEaddInputCheckbox("R12 series R3", false, level2case4);
    // }




//     var inputCheckboxes =document.getElementsByClassName("cr boolean");
//     // console.log(inputCheckboxes);
//     inputCheckboxes[5].remove();
//     inputCheckboxes[5].remove();

//     PIEaddInputCheckbox("R1 parellel R2", false, level2Case1);
//     PIEaddInputCheckbox("R1 series R2", false, level2Case2);
//     // alert("jdghdfsjg");

//     // PIEaddInputCheckbox("R1 parellel R2", false, level1Case1);
//     // PIEaddInputCheckbox("R1 series R2", false, level1Case2);
//     // if(PIEgetDisplayCheckbox("R1 parellel R2")==true)
//     // PIEchangeInputCheckbox("Level 5", true);
//     // alert(PIEgetDisplayCheckbox("R1 parellel R2"));
}

function level3Action(){
    level2btn.remove();
    currentLevel="Level 3";
    levelbtn.innerHTML=currentLevel;
    resetExperiment();
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

    PIEaddDisplayText("Resultant Resistance", refflevel3);    
    PIEaddDisplayCheckbox("R1 parellel R2", false,level3Case1);
    PIEaddDisplayCheckbox("R1 series R2", false,level3Case2);
   
}

function level4Action(){
    level2btn.remove();
    currentLevel="Level 4";
    levelbtn.innerHTML=currentLevel;
    resetExperiment();
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

    PIEaddDisplayText("Resultant Resistance", refflevel4);    
    PIEaddDisplayCheckbox("R1 p R2 p R3", false,level4Case1);
    PIEaddDisplayCheckbox("R1 s R2 s R3", false,level4Case2);
    PIEaddDisplayCheckbox("R1 p R2 s R3", false,level4Case3);
    PIEaddDisplayCheckbox("R1 p R3 s R2", false,level4Case4);
    PIEaddDisplayCheckbox("R2 p R3 s R1", false,level4Case5);
   
}


function level5Action(){



}






//cases

//=========================================================================//


function level1Case1(){


    //  alert("jfjdkf");
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
     box2 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({color: "gray" }));
     PIEaddElement(box2);
     var edges2 = new THREE.EdgesGeometry(boxGeom2);
     var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
     box2.add(line2);
     box2.position.set(0, 0, -1);

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

    PIEaddDisplayText("R12",R12);
    PIErender();
    if(R12!=refflevel1){
        // successbtn=PIEaddButton("PRESS RESET TO TRY AGAIN");
        // successbtn.addEventListener("click",resetExperiment);
        var loader = new THREE.FontLoader();
            loader.load("optimer.json", function (response) {
            font = response;

        var geometry = new THREE.TextGeometry("Press Reset To Try Again!!", {
                font: font,
                size: 1,
                height: 0.3,
                curveSegments: 3
            });

            thevel1 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));
            

            PIEaddElement(thevel1);
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

            thevel1.position.set(-8.5, 0, -12);
            // thevel.lookAt(PIEcamera.position);
            // heading.position.set(0.4 * PIEcamera.position.x, 0.2 * PIEcamera.position.y + 0.075, 0.4 * PIEcamera.position.z);
            // heading.lookAt(PIEcamera.position);
        });
        }
    console.log("in case1");
    currentLevel="Level 1";
    
 }





 //////////////////////////////////////////////////////
 function level1Case2(){

     
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
     box2 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({color: "gray" }));//color: 0xd3d3d3
     PIEaddElement(box2);
     var edges2 = new THREE.EdgesGeometry(boxGeom2);
     var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
     box2.add(line2);
     box2.position.set(4.4, 0, 0.4);

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

     PIEaddDisplayText("R12", R12);
     PIErender();
     if (R12 == refflevel1) {
         // successbtn=PIEaddButton("PRESS RESET TO TRY AGAIN");
         // successbtn.addEventListener("click",resetExperiment);
         var loader = new THREE.FontLoader();
         loader.load("./optimer.json", function (response) {
             font = response;

             var geometry = new THREE.TextGeometry("Press Next Level To Go To Next Level", {
                 font: font,
                 size: 1,
                 height: 0.3,
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

             thevel2.position.set(-12, 0, -15);
             // thevel.lookAt(PIEcamera.position);
             // heading.position.set(0.4 * PIEcamera.position.x, 0.2 * PIEcamera.position.y + 0.075, 0.4 * PIEcamera.position.z);
             // heading.lookAt(PIEcamera.position);
         });
     }
     console.log("in case1");

    // resetScene();

    level2btn=PIEaddButton("Next Level");

    level2btn.addEventListener("click",level2Action);

     
    // PIErender();
//      removeElements();
    
    console.log("l1c2");
    
 }






//=======================================================================//
            //=========LEVEL 2 CASE 1 ================//


function level2Case1(){
//r1 p r2 p r3

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

    PIEaddDisplayText("R12", R12);
    PIEaddDisplayCheckbox("R12 parellel R3",false,level2Case3);
    PIErender();
   
    console.log("in l2c1");
    
}


//=================================================================================//

function level2Case3(){

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

    PIEaddDisplayText("R123", R123);
    PIErender();

    if (R123 == refflevel2) {
        // successbtn=PIEaddButton("PRESS RESET TO TRY AGAIN");
        // successbtn.addEventListener("click",resetExperiment);
        var loader = new THREE.FontLoader();
         loader.load("./optimer.json", function (response) {
             font = response;

             var geometry = new THREE.TextGeometry("Press Next Level To Go To Next Level", {
                 font: font,
                 size: 1,
                 height: 0.3,
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

             thevel2.position.set(-12, 0, -15);
             // thevel.lookAt(PIEcamera.position);
             // heading.position.set(0.4 * PIEcamera.position.x, 0.2 * PIEcamera.position.y + 0.075, 0.4 * PIEcamera.position.z);
             // heading.lookAt(PIEcamera.position);
         });
    }

    
     
    level2btn=PIEaddButton("Next Level");

    level2btn.addEventListener("click",level3Action);
    PIErender();
    console.log("in case1");


            
            

}



function level2Case2() {
//     //r1 s r2 p r3


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

 //second resistor
 var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
 box2 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({color: "gray" }));//color: 0xd3d3d3
 PIEaddElement(box2);
 var edges2 = new THREE.EdgesGeometry(boxGeom2);
 var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
 box2.add(line2);
 box2.position.set(4.4, 0, 0.4);

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

 PIEaddDisplayText("R12", R12);
 PIEaddDisplayCheckbox("R12 parellel R3",false,level2Case4);
 PIErender();

 console.log("in l2c2");

  

}


function level2Case4(){


          var boxGeom3 = new THREE.BoxGeometry(2.933, .5, 1);
            box3 = new THREE.Mesh(boxGeom3, new THREE.MeshBasicMaterial({color: "gray" }));
            PIEaddElement(box3);
            var edges3 = new THREE.EdgesGeometry(boxGeom3);
            var line3 = new THREE.LineSegments(edges3, new THREE.LineBasicMaterial({ color: 0x000 }));
            box3.add(line3);
            box3.position.set(0, 0, 3.8);


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

            PIEaddDisplayText("R123", R123);
            PIErender();

            if(R123!=refflevel2){
                // successbtn=PIEaddButton("PRESS RESET TO TRY AGAIN");
                // successbtn.addEventListener("click",resetExperiment);
                var loader = new THREE.FontLoader();
                    loader.load("optimer.json", function (response) {
                    font = response;
        
                var geometry = new THREE.TextGeometry("Press Reset To Try Again!!", {
                        font: font,
                        size: 1,
                        height: 0.3,
                        curveSegments: 3
                    });
        
                    thevel1 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));
                    
        
                    PIEaddElement(thevel1);
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
        
                    thevel1.position.set(-8.5, 0, -12);
                    // thevel.lookAt(PIEcamera.position);
                    // heading.position.set(0.4 * PIEcamera.position.x, 0.2 * PIEcamera.position.y + 0.075, 0.4 * PIEcamera.position.z);
                    // heading.lookAt(PIEcamera.position);
                });
                }
            currentLevel="Level 1";
            console.log("level2case4");
            




}



//===============================================================//

function level3Case1(){

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

    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box32 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box32);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box32.add(line2);
    box32.position.set(0, 0, -1);

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

    PIEaddDisplayText("R12", R12);
    PIEaddDisplayCheckbox("R3 parellel R4",false,level3Case3);
    PIEaddDisplayCheckbox("R3 series R4",false,level3Case4);
    PIErender();
   
    console.log("in l3c1");
    



}


function level3Case2(){
 //r1 s r2
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
     box2 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({color: "gray" }));//color: 0xd3d3d3
     PIEaddElement(box2);
     var edges2 = new THREE.EdgesGeometry(boxGeom2);
     var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
     box2.add(line2);
     box2.position.set(4.4, 0, -3.4);

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

        PIEaddDisplayText("R12", R12);
        PIEaddDisplayCheckbox("R3 parellel R4",false,level3Case3);
        PIEaddDisplayCheckbox("R3 series R4",false,level3Case4);
        PIErender();
    
        console.log("in l3c1");






}

function level3Case3(){

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

    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box22 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box22);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box22.add(line2);
    box22.position.set(0,0,3.8);

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

    PIEaddDisplayText("R34", R34);
    PIEaddDisplayCheckbox("R12 parellel R34",false,level3Case9);
    
    PIErender();
   
    console.log("in l3c3");
    

}

function level3Case4(){

    //r3 s r4 

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
     box42 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({color: "gray" }));//color: 0xd3d3d3
     PIEaddElement(box42);
     var edges2 = new THREE.EdgesGeometry(boxGeom2);
     var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
     box42.add(line2);
     box42.position.set(4.4, 0, 3.8);

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

        PIEaddDisplayText("R34", R34);
        PIEaddDisplayCheckbox("R12 parellel R34",false,level3Case10);
        
        PIErender();

}

function level3Case9(){

    PIEchangeDisplayCheckbox("R12 parellel R34",true);
    R1234= (R12*R34)/(R12+R34);    

    PIEaddDisplayCheckbox("R1234",R1234);

    if(R1234!=refflevel3){
        // successbtn=PIEaddButton("PRESS RESET TO TRY AGAIN");
        // successbtn.addEventListener("click",resetExperiment);
        var loader = new THREE.FontLoader();
            loader.load("optimer.json", function (response) {
            font = response;

        var geometry = new THREE.TextGeometry("Press Reset To Try Again!!", {
                font: font,
                size: 1,
                height: 0.3,
                curveSegments: 3
            });

            thevel1 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));
            

            PIEaddElement(thevel1);
            thevel1.position.set(-8.5, 0, -12);
           
        });
        
    currentLevel="Level 1";
    }
    else if (R1234 == refflevel3) {
        // successbtn=PIEaddButton("PRESS RESET TO TRY AGAIN");
        // successbtn.addEventListener("click",resetExperiment);
        var loader = new THREE.FontLoader();
         loader.load("./optimer.json", function (response) {
             font = response;

             var geometry = new THREE.TextGeometry("Press Next Level To Go To Next Level", {
                 font: font,
                 size: 1,
                 height: 0.3,
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

             thevel2.position.set(-12, 0, -15);
             // thevel.lookAt(PIEcamera.position);
             // heading.position.set(0.4 * PIEcamera.position.x, 0.2 * PIEcamera.position.y + 0.075, 0.4 * PIEcamera.position.z);
             // heading.lookAt(PIEcamera.position);
         });

    level2btn=PIEaddButton("Next Level");

    level2btn.addEventListener("click",level4Action);

    PIErender();

    }

    
     
    
    console.log("level3case9");

}


function level3Case10(){

    PIEchangeDisplayCheckbox("R12 parellel R34",true);
    R1234= (R12*R34)/(R12+R34);    

    PIEaddDisplayCheckbox("R1234",R1234);

    if(R1234!=refflevel3){
        // successbtn=PIEaddButton("PRESS RESET TO TRY AGAIN");
        // successbtn.addEventListener("click",resetExperiment);
        var loader = new THREE.FontLoader();
            loader.load("optimer.json", function (response) {
            font = response;

        var geometry = new THREE.TextGeometry("Press Reset To Try Again!!", {
                font: font,
                size: 1,
                height: 0.3,
                curveSegments: 3
            });

            thevel1 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));
            

            PIEaddElement(thevel1);
            thevel1.position.set(-8.5, 0, -12);
           
        });
        currentLevel="Level 1";
    }
    else if (R1234 == refflevel3) {
        
        var loader = new THREE.FontLoader();
         loader.load("./optimer.json", function (response) {
             font = response;

             var geometry = new THREE.TextGeometry("Press Next Level To Go To Next Level", {
                 font: font,
                 size: 1,
                 height: 0.3,
                 curveSegments: 3
             });

             thevel2 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


            PIEaddElement(thevel2);
            thevel2.position.set(-12, 0, -15);
           
         });

         level2btn=PIEaddButton("Next Level");

         level2btn.addEventListener("click",level4Action);
         PIErender();
    }
    
    console.log("level3case10");

}


//=====================================================================//

// level 4 cases

//=======================================================================//


function level4Case1(){

    // r1 p r2 p r3


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

    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
    box33 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box33);
    var edges = new THREE.EdgesGeometry(boxGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
    box33.add(line);
    box33.position.set(0, 0, -3.4);

    //second resistor
    var boxGeom2 = new THREE.BoxGeometry(2.933, .5, 1);
    box32 = new THREE.Mesh(boxGeom2, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box32);
    var edges2 = new THREE.EdgesGeometry(boxGeom2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000 }));
    box32.add(line2);
    box32.position.set(0, 0, -1);

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

    PIEaddDisplayText("R123", R123);
    PIEaddDisplayCheckbox("R123 parellel R4",false,level4Case10);
    
    PIErender();
   
    console.log("in l4c1");


    
}
function level4Case2(){

}
function level4Case3(){

}
function level4Case4(){

}
function level4Case5(){

}

function level4Case10(){

    PIEchangeDisplayCheckbox("R123 parellel R4",true);


    var boxGeom = new THREE.BoxGeometry(2.933, .5, 1);
    box91 = new THREE.Mesh(boxGeom, new THREE.MeshBasicMaterial({ color: "gray" }));
    PIEaddElement(box91);
    var edges = new THREE.EdgesGeometry(boxGeom);
    var line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000 }));
    box91.add(line);
    box91.position.set(0, 0, 3.8);

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

    PIEaddDisplayCheckbox("R1234",R1234);

    if(R1234!=refflevel4){
        // successbtn=PIEaddButton("PRESS RESET TO TRY AGAIN");
        // successbtn.addEventListener("click",resetExperiment);
        var loader = new THREE.FontLoader();
            loader.load("optimer.json", function (response) {
            font = response;

        var geometry = new THREE.TextGeometry("Press Reset To Try Again!!", {
                font: font,
                size: 1,
                height: 0.3,
                curveSegments: 3
            });

            thevel1 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));
            

            PIEaddElement(thevel1);
            thevel1.position.set(-8.5, 0, -12);
           
        });
        currentLevel="Level 1";
    }
    else if (R1234 == refflevel4) {
        
        var loader = new THREE.FontLoader();
         loader.load("./optimer.json", function (response) {
             font = response;

             var geometry = new THREE.TextGeometry("Press Next Level To Go To Next Level", {
                 font: font,
                 size: 1,
                 height: 0.3,
                 curveSegments: 3
             });

             thevel2 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }));


            PIEaddElement(thevel2);
            thevel2.position.set(-12, 0, -15);
           
         });

         level2btn=PIEaddButton("Next Level");

         level2btn.addEventListener("click",level5Action);
         PIErender();
    }
    
    console.log("level4case10");
}
/////////////////////////////////////////////////////////////////

function loadExperimentElements() {

    PIEsetExperimentTitle("Equivalent Resistances");
    // PIEsetDeveloperName("Chirag Wadhera");

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
    // PIEaddDisplayCheckbox("Level 1", false, level1);
    // PIEaddDisplayCheckbox("Level 2", false, level2);
    // PIEaddDisplayCheckbox("Level 3", false, level3);
    // PIEaddDisplayCheckbox("Level 4", false, level4);
    // PIEaddDisplayCheckbox("Level 5", false, level5);

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
    removeElements();
    PIErender();
    if(levelbtn)
    levelbtn.innerHTML=currentLevel;
    PIEshowDisplayPanel();
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
    PIEremoveElement(box22);
    PIEremoveElement(box42);
    PIEremoveElement(box3);
    PIEremoveElement(box33);
    PIEremoveElement(box31);
    PIEremoveElement(box91);
    PIEremoveElement(box32);
    PIEremoveElement(mesh1);
    PIEremoveElement(mesh91);
    PIEremoveElement(mesh41);
    PIEremoveElement(mesh28);
    PIEremoveElement(mesh31);
    PIEremoveElement(mesh2);
    PIEremoveElement(mesh92);
    PIEremoveElement(mesh42);
    PIEremoveElement(mesh22);
    PIEremoveElement(mesh21);
    PIEremoveElement(mesh3);
    PIEremoveElement(mesh43);
    PIEremoveElement(mesh23);
    PIEremoveElement(mesh4);
    PIEremoveElement(mesh44);
    PIEremoveElement(mesh24);
    PIEremoveElement(mesh32);
    PIEremoveElement(mesh33);
    PIEremoveElement(mesh34);
    PIEremoveElement(mesh5);
    PIEremoveElement(mesh95);
    PIEremoveElement(mesh45);
    PIEremoveElement(mesh25);
    PIEremoveElement(mesh6);
    PIEremoveElement(mesh46);
    PIEremoveElement(mesh96);
    PIEremoveElement(mesh26);
    PIEremoveElement(mesh35);
    PIEremoveElement(mesh36);
    PIEremoveElement(mesh7);
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
    // level1btn.remove();
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



