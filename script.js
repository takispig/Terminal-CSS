let inputId = 0;

function executeCommand(command) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.key == 'Enter') {
        var answer = document.createElement("p");
        switch (command) {
            case 'help':
                answer.innerHTML =  "<b>'author'</b> returns author's name<br><b>'time'</b> returns the current time<br>"+
                                    "<b>'github'</b> returns author's github profile<br><b>'clear'</b> clears the Terminal";
                answer.style.color = "green";
                break;
            case 'author':
                answer.innerHTML = "Dimitrios Pigkas"
                break;
            case 'time':
                var today = new Date();
                var date = today.getDate()+"/"+(today.getMonth()+1)+'/'+today.getFullYear();
                var time = today.getHours() + ":" + today.getMinutes();
                answer.innerHTML = date + "\t" + time;
                break;
            case 'github':
                answer.innerHTML = "<a href='https://github.com/takispig' style='color: #99ccff'>https://github.com/takispig</a>"
                break;
            case 'clear':
                clear();
                exit(); // exit, otherwise a newline will be created (avoid 2 inputs)
            default:
                answer.innerHTML = "Unknown command. I am just a dummy box :)"
        }
        document.querySelector(".body").appendChild(answer);
        // add the input after the answer
        let newLine = document.createElement("div");
        newLine.className = "terminal-input";
        newLine.innerHTML = "<p>></p><input type='text'" + " id='input-" + inputId + "' name='command' onkeydown='executeCommand(this.value)'/>"
        document.querySelector(".body").appendChild(newLine);
        // focus on the new line (that's why id=input-$(inputId) has been created)
        document.getElementById("input-"+inputId).focus();
        ++inputId;
    }
}

function clear() {
    document.querySelector(".terminal").innerHTML = '<div class="terminal-toolbar"><div class="icons"><div class="x"></div><div class="minimize"></div><div class="resize"></div></div></div><div class="body"><div class="help">Type \'help\' to check commands</div><div class="terminal-input"><p>></p><input type="text" name="command" onkeydown="executeCommand(this.value)"/></div></div>';
}