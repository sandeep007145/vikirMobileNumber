import { VikirMobileNumber } from 'vikir-mobile-number';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    VikirMobileNumber.echo({ value: inputValue })
}
