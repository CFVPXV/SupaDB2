import { supabase } from "./initSupabase";

const obesity = document.querySelector("#obesity");
const smoking = document.querySelector("#smoking");
const weight = document.querySelector("#weightloss");
const alcohol = document.querySelector("#alcohol");
const submit = document.querySelector("#submit");
const goBack = document.querySelector("#goBack");

const user = await supabase.auth.getUser();

const updateData = async () => {
    await supabase.from("Patient data").update({
        "Alcohol use": alcohol.value,
        "Smoking": smoking.value,
        "Weight Loss": weight.value,
        "Obesity": obesity.value
    }).eq('user_id', user.data.user.id)
        .then(() => {
            alert("Data Successfully updated!");
        }).catch((error) => {
            alert(error);
        });
}

const backButton = () => {
    window.history.back();
}

submit.addEventListener('click', updateData);

goBack.addEventListener('click', backButton);