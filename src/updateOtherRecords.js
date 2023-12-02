import { supabase } from "./initSupabase";

const patientID = document.querySelector("#pid")
const obesity = document.querySelector("#obesity");
const smoking = document.querySelector("#smoking");
const weight = document.querySelector("#weightloss");
const alcohol = document.querySelector("#alcohol");
const submit = document.querySelector("#submit");
const goBack = document.querySelector("#goBack");

const user = await supabase.auth.getUser();

const updateData = async () => {
    console.log(patientID.value);
    await supabase.from("Patient data").update({
        "Alcohol use": alcohol.value,
        "Smoking": smoking.value,
        "Weight Loss": weight.value,
        "Obesity": obesity.value
    }).eq("Patient Id", patientID.value);

    //console.log(error.details);
}

const backButton = () => {
    window.history.back();
}

submit.addEventListener('click', updateData);

goBack.addEventListener('click', backButton);