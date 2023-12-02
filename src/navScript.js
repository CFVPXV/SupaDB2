import { intitializeSupabase } from "./initSupabase";
import { supabase } from "./initSupabase";

const email = document.getElementById("uname");

const user = await supabase.auth.getUser();

email.textContent = user.data.user.email;

const getMyInfo = document.querySelector("#viewRecords");
const updateMyInfo = document.querySelector("#updateRecords");
const getOtherInfo = document.querySelector("#viewOtherRecords");
const updateOtherInfo = document.querySelector("#updateOtherRecords")
let signOutButton = document.querySelector("#signOut");

const signOutUser = async () => {
    await supabase.auth.signOut()
        .then(() => {
            alert("Sign out successful!");
            window.localStorage.clear();
            window.location.replace('/index.html');
        }).catch((error) => {
            console.log(error)
        }
        );
}

const goToMyRecords = async () => {
    window.location.href = "./viewRecords.html";
}

const goToUpdateMyRecords = async () => {
    window.location.href = "./updateRecords.html";
}

const goToOtherRecords = () => {
    window.location.href = "./viewOtherRecords.html";
}

const goToUpdateOthers = () => {
    window.location.href = "./updateOtherRecords.html";
}

signOutButton.addEventListener('click', signOutUser);
getMyInfo.addEventListener('click', goToMyRecords);
updateMyInfo.addEventListener('click', goToUpdateMyRecords);
getOtherInfo.addEventListener('click', goToOtherRecords);
updateOtherInfo.addEventListener('click', goToUpdateOthers);
