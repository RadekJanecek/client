radio.setGroup(1)
radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)
let pismeno = 65
let start = 0
basic.showString(String.fromCharCode(pismeno), 0)
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (pismeno == 65) {
        pismeno = 90
    } else {
        pismeno -= 1
    }
    
    basic.showString(String.fromCharCode(pismeno), 0)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (pismeno == 90) {
        pismeno = 65
    } else {
        pismeno += 1
    }
    
    basic.showString(String.fromCharCode(pismeno), 0)
})
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    
    if (name == "start") {
        if (value == 0) {
            basic.showIcon(IconNames.No)
            start = 0
        } else {
            basic.showIcon(IconNames.Yes)
            start = 1
        }
        
    }
    
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_event_pressed() {
    if (start) {
        radio.sendValue("hlas", pismeno - 64)
    }
    
})
