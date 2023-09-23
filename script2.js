document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const userDetailsParam = urlParams.get('userDetails');
    console.log("up", userDetailsParam)

    if (userDetailsParam) {
        const userDetails = JSON.parse(decodeURIComponent(userDetailsParam));

        document.getElementById('name').textContent = "Full Name: " + userDetails.username;
        document.getElementById('email').textContent = "Email: " + userDetails.email;
        document.getElementById('token').textContent = "Token: " + userDetails.accessToken;
        document.getElementById('password').textContent = "Password: " + userDetails.password; // Add ':' after 'Password'

        // Logout button
        const logout = document.getElementsByClassName('Lbtn')[0]; // Get the first element (assuming it's a single button)
        logout.addEventListener('click', function () {
            localStorage.removeItem('userDetails'); // Remove 'userDeatails' should be 'userDetails'

            // alert('Logged out successfully');
            window.location.href = 'index.html';
        });
    } else {
        console.error('User details not found.');
    }
});
