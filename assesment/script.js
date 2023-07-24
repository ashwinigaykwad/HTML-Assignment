
    function validData() {
         var Fname = document.getElementById('Fname').value;
         if(Fname == "")
         {
            alert("please enter First name!");
            document.getElementById('Fname').focus();
            return false;
         }
         var Lname = document.getElementById('Lname').value;
         if(Lname == "")
         {
            alert("please enter last name!");
            document.getElementById('Lname').focus();
            return false;
         }
         var email = document.getElementById('email').value;
         if(email == "")
         {
            alert("please enter email!");
            document.getElementById('email').focus();
            return false;
         }
         var Mobile = document.getElementById('Mobile').value;
         if(Mobile == "")
         {
            alert("please enter Mobile No.!");
            document.getElementById('Mobile').focus();
            return false;
         }
         var DOB = document.getElementById('DOB').value;
         if(DOB == "")
         {
            alert("please enter DOB.!");
            document.getElementById('DOB').focus();
            return false;
         }
         var Address = document.getElementById('Address').value;
         if(Address == "")
         {
            alert("please enter Address.!");
            document.getElementById('Address').focus();
            return false;
         }
         var City = document.getElementById('City').value;
         if(City == "")
         {
            alert("please enter City.!");
            document.getElementById('City').focus();
            return false;
         }
         var PIN = document.getElementById('PIN').value;
         if(PIN == "")
         {
            alert("please enter PIN.!");
            document.getElementById('PIN').focus();
            return false;
         }
         var State = document.getElementById('State').value;
         if(State == "")
         {
            alert("please enter State.!");
            document.getElementById('State').focus();
            return false;
         }
         var password = document.getElementById('password').value;
         if(password == "")
         {
            alert("please enter password!");
            document.getElementById('password').focus();
            return false;
         }
}
