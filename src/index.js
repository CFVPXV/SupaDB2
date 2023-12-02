import { supabase } from "./initSupabase";

const userEmail = document.querySelector("#em");
const userPass = document.querySelector("#pass");
const signInButton = document.querySelector("#signIn");
const createAccountButton = document.querySelector("#create");


const signInUser = async () => {
    const em = userEmail.value;
    const pass = userPass.value;
    await supabase.auth.signInWithPassword({
        email: em,
        password: pass,
    }).then((userCred) => {
        alert(userCred.data.user.email + " successfully signed in");
        window.location.href = "./navigation.html";
    }).catch((error) => {
        alert(error);
    });
}

const createUser = async () => {
    const em = userEmail.value;
    const pass = userPass.value;
    await supabase.auth.signUp({
        email: em,
        password: pass,
    }).then(async (userCred) => {
        await supabase.from('Patient data').insert({
            user_id: userCred.data.user.id,
            email: userCred.data.user.email,
            Age: 25,
            Gender: 1,
            'Air Pollution': 3,
            'Alcohol use': 5,
            'Dust Allergy': 7,
            'OccuPational Hazards': 9,
            'Genetic Risk': 2,
            'chronic Lung Disease': 4,
            'Balanced Diet': 6,
            'Obesity': 8,
            'Smoking': 10,
            'Passive Smoker': 1,
            'Chest Pain': 5,
            'Coughing of Blood': 3,
            'Fatigue': 3,
            'Weight Loss': 1,
            'Shortness of Breath': 7,
            'Wheezing': 9,
            'Swallowing Difficulty': 1,
            'Clubbing of Finger Nails': 1,
            'Frequent Cold': 5,
            'Dry Cough': 8,
            'Snoring': 4,
            'Level': "Medium"
        }).then((resp) => {
            console.log("Member successfully added")
        }).catch(() => {
            console.log("error making new member");
        })
        alert(userCred.data.user.email + " successfully created");
        window.location.href = "./navigation.html";
    }).catch((error) => {
        alert(error);
    });
}

signInButton.addEventListener('click', signInUser);
createAccountButton.addEventListener('click', createUser);



