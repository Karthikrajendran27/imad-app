
// submit username/password to Login

var submit = document.getElementById('submit_btn');
submit.onclick = function (){
    
    //Create a request object   
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if (request.status === 200){
                alert('Logged in Successfully');
            } else if(requests.status === 403) {
                alert('Username/Password is incorrect');
            } else if(request.status === 500) {
                alert('Something went wrong on the server');
                
            }
        }
        //Not done yet
        
    };
    
    //Make a Request'
    //Submit name
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://krthkraj6.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(JSON.stringify({username: username, password: password})); 
       
};
    
