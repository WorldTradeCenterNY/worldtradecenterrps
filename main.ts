function Update_Scores () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("")
    P1 = 0
    P2 = 0
    Ties = 0
    Rounds = 0
    basic.pause(2000)
    Update_Scores()
}
input.onGesture(Gesture.Shake, function () {
    Update_Scores()
})
function Update_Scores2 () {
    OLED.clear()
    OLED.writeStringNewLine("Player 1: " + P1)
    OLED.newLine()
    OLED.writeStringNewLine("Player 2: " + P2)
    OLED.newLine()
    OLED.writeStringNewLine("Ties: " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds: " + Rounds)
}
let Rounds = 0
let Ties = 0
let P2 = 0
let P1 = 0
Update_Scores()
