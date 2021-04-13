// initialise GitHub class
const gitHub = new GitHub;
// initialise UI class
const ui = new UI;

// search user input variable
const searchUser = document.getElementById('searchUser');

// search input event listener
searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;
    // check to ensure users' input isn't empty
    if (userText !== '') {
        // make http call
        gitHub.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // show alert
                    ui.showAlert('User not found', 'danger');
                } else {
                    // show profile
                    ui.showProfile(data.profile);
                }
            })
    } else {
        // clear profile
        ui.clearProfile();
    }
})