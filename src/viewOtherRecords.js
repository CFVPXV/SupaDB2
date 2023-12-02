import { supabase } from "./initSupabase";

const idPortion = document.querySelector("#pid");
const submitButton = document.querySelector("#submit");
const goBack = document.querySelector('#goBack');
const output = document.getElementById("data");
const user = await supabase.auth.getUser();

const fromData = async () => {
    console.log(idPortion.value);
    await supabase.from('Patient data').select('*').eq('Patient Id', idPortion.value)
        .then((information) => {
            console.log(information);
            output.innerHTML = "";
            for (const [key, value] of Object.entries(information.data.at(0))) {
                let content = document.createElement('span');
                content.textContent = key + ": " + value;
                output.appendChild(content);
                console.log(value);
                console.log(user.data.user.id);
            }
        }).catch((error) => {
            alert("Access Denied!");
            console.log(error);
            console.log("Yep, its here");
        }
        )
}

const backButton = () => {
    window.history.back();
}

submitButton.addEventListener('click', fromData);
goBack.addEventListener('click', backButton);

