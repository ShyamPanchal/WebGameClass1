// IIFE - Immediate Invoked Function Expression
/*
    Closure
    Calls an anonymous self-executing function
    Anything in braces is in a closure. Won't go to global namespace.
*/

(function () {
    
    // Global Game Variables
    let _canvas = document.getElementById("canvas");
    let _stage: createjs.Stage;
    let _helloLabel: m_objects.c_Label;
    let _clockwise: boolean = true;

    function fn_Init(): void{
        console.log("Initialization Start");
        fn_Start();
    }

    function fn_Start(): void{
        console.log("Starting Application..."); 
        // Initialize CreateJS
        _stage = new createjs.Stage(_canvas);
        createjs.Ticker.framerate = 60; // 60 fps
        createjs.Ticker.on("tick", fn_Update);
        fn_Main();
    }

    function fn_Update(): void{
        let random = Math.floor(Math.random() * 10);
        _clockwise = (random > 7);
        
        if (_clockwise) {
            _helloLabel.rotation += -2;
        }
        else {
            _helloLabel.rotation += +2;
        }
        //_helloLabel.rotation += 2;
        //console.log("ans = " + _helloLabel.rotation);
        _stage.update();
    }

    function fn_Main(): void{
        console.log("Game Started...");
        _helloLabel = new m_objects.c_Label("Hello World", "40px", "Cambay", "#000000", 200, 300, true);

        _stage.addChild(_helloLabel);
    }

    window.onload = fn_Init;
})();