// module = namespace
module m_objects {
    // export = public
    export class c_Label extends createjs.Text {
        // variables

        // constructor
        constructor(
            __labelString: string,
            __fontSize: string,
            __fontFamily: string,
            __fontColour: string,
            __x: number = 0,
            __y: number = 0,
            __isCentered: boolean = false) {
            // creates a default text object
            super(__labelString, __fontSize + " " + __fontFamily, __fontColour);
            if (__isCentered) {
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }
            this.x = __x;
            this.y = __y;
        }

        // methods / functions
    }
}