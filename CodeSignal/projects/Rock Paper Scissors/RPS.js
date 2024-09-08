function getComputerChoice(choice) {
    if(choice >= 0.66) {
        return "Paper"
    }
    else if(choice >=0.33 && choice  <0.66){
        return "Rock"
    }
    else return "Scissors"
}
document.write(getComputerChoice(.65))