import { supabase } from "./initSupabase";

const output = document.getElementById("data");
const goBack = document.querySelector("#goBack");

const user = await supabase.auth.getUser();

const getData = () => {
    supabase.from("Patient data").select('*').eq('user_id', user.data.user.id)
        .then((information) => {
            console.log(information.data);
            for (const [key, value] of Object.entries(information.data.at(0))) {
                let content = document.createElement('span');
                content.textContent = key + ": " + value;
                output.appendChild(content);
                console.log(value);
                console.log(user.data.user.id);
            }
        }).catch((error) => {
            alert(error);
        });
}

const backButton = () => {
    window.history.back();
}

getData();

goBack.addEventListener('click', backButton);