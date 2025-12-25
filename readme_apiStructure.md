<details>
    <summary><big><b>API Structure</b></big></summary>
<br>
The API structure for the "Flight Booking-System" project can be organized as follows:
<br>
<br>
    <pre style="font-weight:normal;"><b>Authentication Routes</b>
<ul>
<li><b>POST "/api/auth/register"</b>: Register a new user.</li>
<li><b>POST "/api/auth/login"</b>: Login and issues token. Also adds token in the cookies and sets user in session.</li>
<li><b>POST "/api/auth/logout"</b>: Log out the user by clearing the session &amp; removing token from cookies.</li></ul>

<p></p></pre>
    <pre style="font-weight:normal;"><b>User Routes</b>
<ul>
<li><b>POST "/api/users/profile"</b>: Register a new user.</li>
<li><b>GET "/api/users/"</b>: Fetch the user details based on the jwt info.</li></ul>
</pre>
    <pre style="font-weight:normal;"><b>Flight Routes</b>
<ul>
<li><b>POST "/api/flights"</b>: Create a flight with flightNumber, airline, departureCity, arrivalCity, departureDate, arrivalDate, price, availableSeats, flightClass, image(Flight logo). This api is only accessible by admin.</li>
<li><b>GET "/api/flights" </b> Search flights with following parameters: departureCity, arrivalCity, departureDate, flightClass. This is a public api and can be accessed by the user.</li>
<li><b>GET "/api/flights/:id"</b>: Get flight details for the given flight ID. This is a public api and can be accessed by the user.</li>
<li><b>PUT "/api/flights/:id"</b>: Update flight details for the given flight ID. This api is only accessible by admin.</li>
<li><b>DELETE "/api/flights/:id"</b>: Delete flight for the given flight ID. This api is only accessible by admin.</li></ul>
</pre>
    <pre style="font-weight:normal;"><b>Booking Routes</b>
<ul>
    <li><b>POST "/api/bookings"</b>: Create booking (flightId, passenger list)</li>
    <li><b>GET "/api/bookings/:id"</b>: Get booking by ID</li>
    <li><b>PUT "/api/bookings/:id/cancel"</b>: Cancel booking and process refund</li></ul>
</pre>
</details>
