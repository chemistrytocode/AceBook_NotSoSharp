import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   name: "",
    //   email: "",
    //   password: "",
    //   loggedIn: false
    // };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logChange = this.logChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var data = {
      teacher: this.state.teacher,
      room: this.state.room,
      dateReq: this.state.dateReq,
      period: this.state.period,
      description: this.state.description,
      fileupload: this.state.fileUpload,
      chemical: this.state.chemical,
      quantity: this.state.quantity,
      allocation: this.state.allocation,
      hazards: this.state.hazards,
      sets: this.state.sets,
      apparatus: this.state.apparatus,
      addNotes: this.state.addNotes
    };
    console.log(data);
    fetch('http://localhost:5000/reqs', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then(response => response)
  }

  logChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div id="formContainer">
        <div class="col-sm-11" id="form">
          <h2> Practical Order! </h2>
          <form onSubmit={this.handleSubmit} method="POST">
            <fieldset>
              <div class="row form">
                <div class="col-md-3">
                  <div class="form-group">
                    <label id="teacher" class="col-form-label">
                      Teacher:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Teacher's Name"
                      name="teacher"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <label id="room" class="col-form-label">
                      Room:
                    </label>
                    <input
                      type="text"
                      class="form-control col-sm"
                      placeholder="Enter Room"
                      name="room"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <label id="date" class="col-form-label">
                      Date:
                    </label>
                    <input
                      type="date"
                      class="form-control col-sm"
                      name="dateReq"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <label id="period" class="col-form-label">
                      Period:
                    </label>
                    <input
                      type="number"
                      class="form-control col-sm"
                      name="period"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="form-group">
                    <label id="description" class="col-form-label">
                      Practical Description:
                    </label>
                    <input
                      type="text"
                      class="form-control col-sm"
                      placeholder="Enter Description"
                      name="description"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="form-group">
                    <label id="sets" class="col-form-label">
                      Number of Sets:
                    </label>
                    <input
                      type="number"
                      class="form-control col-sm"
                      name="sets"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="form-group">
                    <label id="fileUpload" class="col-form-label">
                      File Upload:
                    </label>
                    <input
                      type="file"
                      class="form-control col-sm"
                      name="fileUpload"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label id="chemical" class="col-form-label">
                      Chemical:
                    </label>
                    <input
                      type="text"
                      class="form-control col-sm"
                      placeholder="Enter Chemical"
                      name="chemical"
                      onChange={this.logChange}
                    />
                  </div>
                </div>

                <div class="col-md-2">
                  <div class="form-group">
                    <label id="quantity" class="col-form-label">
                      Quantity:
                    </label>
                    <input
                      type="text"
                      class="form-control col-sm"
                      placeholder="Enter Quantity"
                      name="quantity"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="form-group">
                    <label id="quantity" class="col-form-label">
                      Allocation:
                    </label>
                    <input
                      type="text"
                      class="form-control col-sm"
                      placeholder="Bulk or Individual?"
                      name="allocation"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label id="hazards" class="col-form-label">
                      Hazards:
                    </label>
                    <input
                      type="text"
                      class="form-control col-sm"
                      placeholder="Enter Hazards"
                      name="hazards"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label id="apparatus" class="col-form-label">
                      Apparatus:
                    </label>
                    <textarea
                      class="form-control col"
                      id="exampleTextarea"
                      rows="6"
                      name="apparatus"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label id="addNotes" class="col-form-label">
                      Additional Notes:
                    </label>
                    <textarea
                      class="form-control col"
                      id="exampleTextarea"
                      rows="6"
                      name="addNotes"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
              </div>
              <input type="submit" value="Submit!" class="btn btn-success" />
            </fieldset>
          </form>
        </div>
        <p id="trademark">Created by Paul Ayling @chemistrytocode</p>
      </div>
    );
  }
}

export default Post;
