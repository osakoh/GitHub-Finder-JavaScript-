class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card-body">
            <div class="row mb-3">
                <div class="col-md-3">
                    <div class="bg-image hover-zoom">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                    </div>
                    <a href="${user.html_url}" target="_blank" class="btn btn-sm btn-block mb-2">View Profile</a>
                </div>
                <div class="col-md-9">
                    <div class="mt-2 mb-4">
                        <!-- public repos  -->
                        <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
                        <!-- public gist  -->
                        <span class="badge bg-secondary">Public Gist: ${user.public_gists}</span>
                        <!-- followers -->
                        <span class="badge bg-primary">Followers: ${user.followers}</span>
                        <!-- following -->
                        <span class="badge bg-info">Following: ${user.following}</span>
                        <!-- list group -->
                        <ul class="list-group mt-2">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Blog: <a href="${user.blog}" target="_blank" class="text-black">${user.blog}</a></li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <h5 class="page-heading mb-3">Latest Repos</h5>
        <div id="repos"></div>
        `;
    }

    // clear profile function
    clearProfile() {
        this.profile.innerHTML = '';
    }

    // show profile function
    showAlert(message, mdb_color) {
        // div class = "alert"
        // role = "alert"
        // data - mdb - color = "danger" >
        //     A simple danger alert— check it out!
        //     <
        //     /div>
        // create div
        const div = document.createElement('div');
        // add class
        div.className = 'alert';
        // add text
        div.appendChild(document.createTextNode(message));
        // add role
        div.setAttribute('role', 'alert');
        // add mdb data color
        div.setAttribute('data-mdb-color', mdb_color);
        // get parent
        const container = document.querySelector('.searchContainer');
        // get search box
        const search = document.querySelector('.search');
        // insert alert
        container.insertBefore(div, search);
    }
}