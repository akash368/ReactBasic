import React from 'react'

export default function Contact() {
    let mainStyle = {
        minHeight: "550px",
        width: "100%",

    }
    let contactStyle = {
        color: "red",
        margin: "0px auto",
        fontSize: "30px"
    }
    return (
        <div style={mainStyle}>
            <p className="text-center py-5" style={contactStyle}>Contact Page</p>
        <div className="container py-5">
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword4"/>
  </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="inputAddress"/>
  </div>
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">Address</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
                                <div class="col-md-6">
                                    <label for="inputCity" class="form-label">City</label>
                                    <input type="text" class="form-control" id="inputCity"/>
  </div>
                                    <div class="col-md-4">
                                        <label for="inputState" class="form-label">State</label>
                                        <select id="inputState" class="form-select">
                                            <option>Uttar Pradesh</option>
                                            <option>Delhi</option>
                                        </select>
                                    </div>
                                    <div class="col-md-2">
                                        <label for="inputZip" class="form-label">Zip</label>
                                        <input type="text" class="form-control" id="inputZip"/>
  </div>
                                        <div class="col-12">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                                    <label class="form-check-label" for="gridCheck">
                                                        Check me out
      </label>
    </div>
                                            </div>
                                            <div class="col-12">
                                                <button type="submit" class="btn btn-primary">Sign in</button>
                                            </div>
</form>
</div>
                                    </div>
    )
}
